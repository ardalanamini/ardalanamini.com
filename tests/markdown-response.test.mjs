import assert from "node:assert/strict";
import test from "node:test";
import { URL } from "node:url";
import { serveMarkdownPage } from "../src/markdown/response.ts";

const { Request, Response } = globalThis;
const OK = 200;
const MOVED_PERMANENTLY = 301;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;
const PARTIAL_CONTENT = 206;

const fetchAsset = async request => new Response(
  new URL(request.url).pathname === "/index.md" ? "# Ardalan Amini\n" : "<!doctype html><h1>Ardalan Amini</h1>",
  {
    headers: {
      "Content-Type" : new URL(request.url).pathname === "/index.md" ? "text/plain" : "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=600",
      "Vary"         : "Accept-Encoding",
    },
  },
);

test("page responses honor explicit Markdown preferences and preserve HTML defaults", async () => {
  const cases = [
    [null, false],
    ["*/*", false],
    ["text/*", false],
    ["markdown", false],
    ["text/html", false],
    ["text/markdown", true],
    ["TEXT/MARKDOWN; CHARSET=\"UTF-8\"", true],
    ["text/html, text/markdown", true],
    ["text/html;q=1, text/markdown;q=0.5", false],
    ["text/html;q=0.2, text/markdown;q=0.8", true],
    ["text/markdown;q=0", false],
    ["text/markdown;q=0, */*;q=1", false],
    ["text/markdown;q=0.5, */*;q=1", false],
    ["text/html;q=0, text/markdown;q=0.5, */*;q=1", true],
    ["text/markdown;q=2", false],
    ["text/markdown;q=NaN", false],
    ["text/markdown;q=0.0001", false],
    ["text/markdown;q=0.8=1", false],
    ["text/markdown;q=0.5;q=1", false],
    ["text/markdown;q=1, text/markdown;charset=utf-8;q=0", false],
    ["text/markdown;charset=iso-8859-1", false],
    ["text/html;note=\"one,text/markdown,two\"", false],
  ];

  await Promise.all(cases.map(async ([accept, markdown]) => {
    const request = new Request("https://ardalanamini.com/", {
      headers: accept === null ? {} : { Accept: accept },
    });
    const response = await serveMarkdownPage(request, "/index.md", fetchAsset);

    assert.equal(response.status, OK, accept);
    const contentType = markdown ? "text/markdown; charset=utf-8" : "text/html; charset=utf-8";
    assert.equal(response.headers.get("Content-Type"), contentType, accept);
    const body = markdown ? "# Ardalan Amini\n" : "<!doctype html><h1>Ardalan Amini</h1>";
    assert.equal(await response.text(), body, accept);
    assert.equal(response.headers.get("Cache-Control"), "no-store", accept);
    assert.match(response.headers.get("Vary"), /Accept-Encoding/u);
    assert.match(response.headers.get("Vary"), /(?:^|,\s*)Accept(?:,|$)/u);
  }));
});

test("conditional Markdown requests use Markdown validators rather than the HTML validators", async () => {
  const NOT_MODIFIED = 304;
  await Promise.all([['"html"', OK], ['"markdown"', NOT_MODIFIED]].map(async ([etag, status]) => {
    const response = await serveMarkdownPage(new Request("https://ardalanamini.com/?source=agent", {
      headers: {
        "Accept"       : "text/markdown",
        "If-None-Match": etag,
      },
    }), "/index.md", async (request) => {
      const markdown = new URL(request.url).pathname === "/index.md";
      const current = markdown ? '"markdown"' : '"html"';
      const notModified = request.headers.get("If-None-Match") === current;
      const body = notModified ? null : markdown ? "# Ardalan Amini\n" : "HTML";
      return new Response(body, {
        status : notModified ? NOT_MODIFIED : OK,
        headers: {
          "Content-Type": markdown ? "text/plain" : "text/html",
          "ETag"        : current,
        },
      });
    });

    assert.equal(response.status, status);
    assert.equal(response.headers.get("ETag"), '"markdown"');
    assert.equal(response.headers.get("Content-Type"), "text/markdown; charset=utf-8");
    assert.equal(await response.text(), status === OK ? "# Ardalan Amini\n" : "");
  }));
});

test("HEAD selects the same representation and headers as GET without a body", async () => {
  await Promise.all(["text/html", "text/markdown"].map(async (accept) => {
    const get = await serveMarkdownPage(new Request("https://ardalanamini.com/", {
      headers: { Accept: accept },
    }), "/index.md", fetchAsset);
    const head = await serveMarkdownPage(new Request("https://ardalanamini.com/", {
      method : "HEAD",
      headers: { Accept: accept },
    }), "/index.md", fetchAsset);

    assert.equal(head.status, get.status);
    assert.deepEqual([...head.headers], [...get.headers]);
    assert.equal(await head.text(), "");
  }));
});

test("partial HTML responses also keep negotiated pages out of shared caches", async () => {
  const response = await serveMarkdownPage(new Request("https://ardalanamini.com/", {
    headers: { Range: "bytes=0-3" },
  }), "/index.md", async () => new Response("HTML", {
    status : PARTIAL_CONTENT,
    headers: {
      "Content-Type" : "text/html",
      "Content-Range": "bytes 0-3/20",
    },
  }));

  assert.equal(response.status, PARTIAL_CONTENT);
  assert.equal(response.headers.get("Cache-Control"), "no-store");
  assert.equal(response.headers.get("Vary"), "Accept");
  assert.equal(response.headers.get("Content-Range"), "bytes 0-3/20");
  assert.equal(await response.text(), "HTML");
});

test("redirects, errors, non-page responses, and other methods keep their existing behavior", async () => {
  await Promise.all([MOVED_PERMANENTLY, NOT_FOUND, SERVER_ERROR].map(async (status) => {
    const original = new Response("Original response", {
      status,
      headers: { Location: "/elsewhere/" },
    });
    const response = await serveMarkdownPage(new Request("https://ardalanamini.com/", {
      headers: { Accept: "text/markdown" },
    }), "/index.md", async request => (new URL(request.url).pathname === "/" ? original : fetchAsset(request)));

    assert.equal(response.status, status);
    assert.deepEqual([...response.headers], [...original.headers]);
    assert.equal(await response.text(), "Original response");
  }));

  await Promise.all(["GET", "POST"].map(async (method) => {
    const original = new Response('{"ok":true}', { headers: { "Content-Type": "application/json" } });
    const response = await serveMarkdownPage(new Request("https://ardalanamini.com/", {
      method,
      headers: { Accept: "text/markdown" },
    }), "/index.md", async () => original);

    assert.equal(response.status, OK);
    assert.deepEqual([...response.headers], [...original.headers]);
    assert.equal(await response.text(), '{"ok":true}');
  }));
});
