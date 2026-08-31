import { MetadataRoute } from "next";
import { stories } from "@/data/stories";
import { articles } from "@/data/articles";

const siteUrl = "https://yogmcreations.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/bhavatu-sarvam",
    "/storykahani",
    "/smart-finds",
    "/books",
    "/articles",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const storyRoutes = stories.map((s) => ({
    url: `${siteUrl}/${s.brand}/${s.slug}`,
    lastModified: new Date(s.date),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${siteUrl}/articles/${a.slug}`,
    lastModified: new Date(a.date),
  }));

  return [...staticRoutes, ...storyRoutes, ...articleRoutes];
}
