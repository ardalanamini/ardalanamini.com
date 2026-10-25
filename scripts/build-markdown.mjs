import { writeFile } from "node:fs/promises";
import { URL } from "node:url";
import { renderHomeMarkdown } from "../src/markdown/home.ts";
import { MARKDOWN_PAGES } from "../src/markdown/response.ts";

await writeFile(new URL(`../dist${ MARKDOWN_PAGES["/"] }`, import.meta.url), renderHomeMarkdown());
