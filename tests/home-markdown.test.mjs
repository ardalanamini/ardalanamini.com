import assert from "node:assert/strict";
import test from "node:test";
import { renderHomeMarkdown } from "../src/markdown/home.ts";

test("homepage Markdown includes the biography and project links", () => {
  const markdown = renderHomeMarkdown();

  assert.match(markdown, /^# Ardalan Amini\n/u);
  assert.match(markdown, /Software Engineer specializing in distributed systems/u);
  assert.match(markdown, /### \[Foxify\]\(https:\/\/github\.com\/foxifyjs\/foxify\)/u);
  assert.match(markdown, /152 Stars/u);
});

test("homepage Markdown preserves experience, skills, and contact details without UI decorations", () => {
  const markdown = renderHomeMarkdown();

  assert.match(markdown, /Open for Opportunities/u);
  assert.match(markdown, /Engineering Resilient Systems\./u);
  assert.match(markdown, /## Experience\n/u);
  assert.match(markdown, /### Xcoins\n/u);
  assert.match(markdown, /Sep 2022 - Nov 2025/u);
  assert.match(markdown, /Jahangostar Pars Raden/u);
  assert.match(markdown, /## Tech Stack\n/u);
  assert.match(markdown, /- C\+\+/u);
  assert.match(markdown, /\[Send Packet\]\(mailto:ardalanamini22@gmail\.com\)/u);
  assert.match(markdown, /\[GitHub\]\(https:\/\/github\.com\/ardalanamini\)/u);
  assert.match(markdown, /\[LinkedIn\]\(https:\/\/www\.linkedin\.com\/in\/ardalanamini\/\)/u);
  assert.match(markdown, /\[Telegram\]\(https:\/\/t\.me\/ardalanamini\)/u);
  assert.doesNotMatch(markdown, /whoami|END_OF_LOG|\.config|<svg|<script/u);
});
