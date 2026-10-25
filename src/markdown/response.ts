export const MARKDOWN_PAGES: Record<string, string> = { "/": "/index.md" };
const NOT_MODIFIED = 304;

function prefersMarkdown(accept: string | null): boolean {
  const ranges = (accept?.match(/(?:[^,"]+|"(?:\\.|[^"\\])*")+/gu) ?? []).flatMap((item) => {
    const [mediaType, ...parameters] = item.toLowerCase().split(";")
      .map(value => value.trim());
    if (!["text/html", "text/markdown", "text/*", "*/*"].includes(mediaType)) return [];

    let quality = 1;
    const seen = new Set<string>();

    for (const parameter of parameters) {
      const parts = parameter.split("=").map(part => part.trim());
      if (parts.length !== 2) return [];
      const [name, value] = parts;
      if (seen.has(name)) return [];
      seen.add(name);

      if (name === "q" && /^(?:0(?:\.\d{0,3})?|1(?:\.0{0,3})?)$/u.test(value)) quality = Number(value);
      else if (name !== "charset" || !/^(?:utf-8|"utf-8")$/u.test(value)) return [];
    }

    return [
      {
        mediaType,
        quality,
        charset: seen.has("charset"),
      },
    ];
  });

  const qualityFor = (mediaType: string): number => {
    let specificity = -1;
    let quality = 0;

    for (const range of ranges) {
      if (range.mediaType !== mediaType && range.mediaType !== "text/*" && range.mediaType !== "*/*") continue;

      // Specific media ranges override wildcard weights, even when their weight is zero.
      const priority = (range.mediaType === mediaType ? 4 : range.mediaType === "text/*" ? 2 : 0)
        + (range.charset ? 1 : 0);
      if (priority > specificity) {
        specificity = priority;
        quality = range.quality;
      } else if (priority === specificity) {
        quality = Math.max(quality, range.quality);
      }
    }

    return quality;
  };

  return ranges.some(range => range.mediaType === "text/markdown" && range.quality > 0)
    && qualityFor("text/markdown") > 0
    && qualityFor("text/markdown") >= qualityFor("text/html");
}

export async function serveMarkdownPage(
  request: Request,
  markdownPath: string,
  fetchAsset: (request: Request) => Response | Promise<Response>,
): Promise<Response> {
  if (request.method !== "GET" && request.method !== "HEAD") return fetchAsset(request);

  const markdown = prefersMarkdown(request.headers.get("Accept"));
  const htmlRequest = new Request(request);
  if (markdown) {
    // Validate the page's routing independently of the Markdown artifact's validators.
    const validators = ["If-Match", "If-None-Match", "If-Modified-Since", "If-Unmodified-Since", "Range", "If-Range"];
    for (const name of validators) htmlRequest.headers.delete(name);
  }

  let response = await fetchAsset(htmlRequest);
  if (!response.ok && response.status !== NOT_MODIFIED) return response;
  const contentType = response.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase();
  if (response.ok && contentType !== "text/html") return response;

  if (markdown) {
    await response.body?.cancel();
    const url = new URL(request.url);
    url.pathname = markdownPath;
    response = await fetchAsset(new Request(url, request));
    if (!response.ok && response.status !== NOT_MODIFIED) return response;
  }

  const headers = new Headers(response.headers);
  headers.set("Cache-Control", "no-store");
  const variesByAccept = (headers.get("Vary") ?? "").split(",")
    .some(value => ["*", "accept"].includes(value.trim().toLowerCase()));
  if (!variesByAccept) headers.append("Vary", "Accept");
  if (markdown) headers.set("Content-Type", "text/markdown; charset=utf-8");

  return new Response(request.method === "HEAD" ? null : response.body, {
    status    : response.status,
    statusText: response.statusText,
    headers,
  });
}
