import type { MetadataRoute } from "next";
import { STATIC_ROUTES } from "@/lib/seo/routes";
import { LOCATIONS } from "@/lib/constants/locations";
import { getAllPosts } from "@/lib/blog/posts";

const BASE_URL = "https://meinspect.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Only locations that actually passed the content-quality gate in
  // app/locations/[slug]/page.tsx (i.e. have real localPoints) get a URL —
  // this file and that page's generateStaticParams should always agree,
  // since they read the same LOCATIONS array with the same filter.
  const locationEntries: MetadataRoute.Sitemap = LOCATIONS.filter(
    (location) => location.localPoints.length > 0
  ).map((location) => ({
    url: `${BASE_URL}/locations/${location.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...locationEntries, ...blogEntries];
}
