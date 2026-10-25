/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for Cloudflare Workers when building for production.
 *
 * Learn more about the Cloudflare Workers integration here:
 * - https://qwik.dev/docs/deployments/cloudflare-workers/
 *
 */
import {
  type PlatformCloudflarePages as PlatformCloudflareWorkers,
  createQwikCity,
} from "@builder.io/qwik-city/middleware/cloudflare-pages";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";
import { MARKDOWN_PAGES, serveMarkdownPage } from "./markdown/response";

declare global {
  type QwikCityPlatform = PlatformCloudflareWorkers;
}

const qwikFetch = createQwikCity({
  render,
  qwikCityPlan,
});

const fetch: typeof qwikFetch = async (request, env, ctx) => {
  const pathname = new URL(request.url).pathname;
  const markdownPath = Object.hasOwn(MARKDOWN_PAGES, pathname) ? MARKDOWN_PAGES[pathname] : null;
  if (!markdownPath) return qwikFetch(request, env, ctx);

  return serveMarkdownPage(request, markdownPath, assetRequest => env.ASSETS.fetch(assetRequest));
};

export { fetch };
