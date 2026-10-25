import assert from "node:assert/strict";
import test from "node:test";
import { fetch as fetchWorker } from "../server/entry.cloudflare-pages.js";

const { Request, Response } = globalThis;
const METHOD_NOT_ALLOWED = 405;

test("other homepage methods preserve Cloudflare's static-asset response", async () => {
  const methods = ["OPTIONS", "POST", "PUT", "PATCH", "DELETE"];
  await Promise.all(methods.map(async (method) => {
    const response = await fetchWorker(new Request("https://ardalanamini.com/", {
      method,
      headers: { Accept: "text/markdown" },
    }), {
      ASSETS: {
        fetch: async () => new Response(null, {
          status : METHOD_NOT_ALLOWED,
          headers: { Allow: "GET, HEAD" },
        }),
      },
    }, { waitUntil: promise => promise });

    assert.equal(response.status, METHOD_NOT_ALLOWED, method);
    assert.equal(response.headers.get("Allow"), "GET, HEAD", method);
  }));
});
