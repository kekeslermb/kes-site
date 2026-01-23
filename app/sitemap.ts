import type { MetadataRoute } from "next";

const base = "https://kes-site-kz6thmox1-kesler-s-projects.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
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

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
