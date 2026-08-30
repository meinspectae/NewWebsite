export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { STATIC_ROUTES } from "@/lib/seo/routes";
import { LOCATIONS } from "@/lib/constants/locations";
import { BLOG_GUIDES } from "@/lib/constants/blogGuides";

const BASE_URL = "https://meinspect.com";

// Stamped once per build. This is what several SEO auditors' "content
// freshness" check is looking for (an XML sitemap <lastmod> value) — before
// this, the sitemap had none, so tools couldn't tell content was current.
const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: BUILD_DATE,
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
    lastModified: BUILD_DATE,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // The original 3 guides (move-in-checklist etc.) are already listed in
  // STATIC_ROUTES above — only the new articles need adding here.
  const articleEntries: MetadataRoute.Sitemap = BLOG_GUIDES.map((guide) => ({
    url: `${BASE_URL}/resources/${guide.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...locationEntries, ...articleEntries];
}
