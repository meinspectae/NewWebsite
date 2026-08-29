import type { Metadata } from "next";

const BASE_URL = "https://meinspect.com";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string; // e.g. "/for-tenants" or "/" for the homepage
}

/**
 * Every page should use this instead of writing a plain `metadata` object
 * directly. Without it, Next.js silently inherits the ROOT layout's
 * openGraph/twitter block (title, description, url) on every page that
 * doesn't explicitly set its own — which is why sharing /for-tenants on
 * WhatsApp or LinkedIn showed the homepage's title for months. This
 * function sets title, description, canonical, openGraph, and twitter
 * together, every time, so that bug can't quietly happen again.
 */
export function buildPageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = path === "/" ? BASE_URL : `${BASE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}
