export const runtime = "edge";

const base = "https://kes-site-kz6thmox1-kesler-s-projects.vercel.app";

const routes = [
  "/",
  "/about",
  "/projects",
  "/projects/consulting-artifacts",
  "/projects/consulting-artifacts/artifact-1",
  "/projects/consulting-artifacts/artifact-2",
  "/projects/consulting-artifacts/artifact-3",
  "/projects/simplemes",
  "/resume",
  "/skills",
  "/contact",
];

function xmlEscape(s: string) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

export function GET() {
  const now = new Date().toISOString();

  const urls = routes
    .map((path) => {
      const loc = `${base}${path}`;
      return `
  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
    })
    .join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
