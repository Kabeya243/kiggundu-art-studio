import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/data";

const BASE = "https://kiggunduartstudio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/artists",
    "/artists/iyara-karabo",
    "/artists/ayero-daisy",
    "/programs",
    "/events",
    "/services",
    "/press",
    "/donate",
    "/blog",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE}${route}`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...POSTS.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
