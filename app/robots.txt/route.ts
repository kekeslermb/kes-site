export const runtime = "edge";

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://kes-site-kz6thmox1-kesler-s-projects.vercel.app/sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
