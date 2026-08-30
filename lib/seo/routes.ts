/**
 * Single source of truth for every *static* route on the site.
 *
 * app/sitemap.ts reads this list, plus LOCATIONS (lib/constants/locations.ts)
 * and BLOG_POSTS (lib/constants/blog.ts, once it exists), to build the sitemap.
 *
 * Rule going forward: any time you add a new page under app/, add its path
 * here in the same PR. A GitHub Action (.github/workflows/seo-checks.yml)
 * fails the build if a route exists in app/ but isn't listed here, so this
 * can't silently drift the way the old hand-maintained sitemap.xml did.
 */

export type StaticRoute = {
  path: string; // e.g. "/for-tenants"
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number; // 0.0–1.0
};

export const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/for-tenants", changeFrequency: "monthly", priority: 0.8 },
  { path: "/for-landlords", changeFrequency: "monthly", priority: 0.8 },
  { path: "/for-agents", changeFrequency: "monthly", priority: 0.8 },
  { path: "/for-holiday-homes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.7 },
  { path: "/resources/move-in-checklist", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/move-out-checklist", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/deposit-dispute-guide", changeFrequency: "monthly", priority: 0.6 },
  { path: "/resources/report-template", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/careers/meinspector", changeFrequency: "monthly", priority: 0.5 },
  { path: "/start", changeFrequency: "monthly", priority: 0.7 },
  { path: "/book", changeFrequency: "monthly", priority: 0.7 },
  { path: "/legal/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/legal/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/legal/delete-account", changeFrequency: "yearly", priority: 0.3 },
];
