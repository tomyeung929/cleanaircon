import { absolute, allHtmlPaths, site } from "../data/site.js";

export function GET() {
  const urls = allHtmlPaths()
    .map(
      (path) => `  <url>
    <loc>${absolute(path)}</loc>
  </url>`,
    )
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
