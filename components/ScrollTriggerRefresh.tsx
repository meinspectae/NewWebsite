"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;
if (!registered && typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/**
 * Every section creates its ScrollTrigger as soon as it mounts, which is
 * often before the page's true final layout exists — `next/font`'s
 * `display: "swap"` paints a fallback font first and swaps to Inter/IBM
 * Plex Mono once it loads, reflowing every section's height in the
 * process. GSAP has no way to know that happened, so any trigger created
 * before the swap keeps a stale `start` position forever (this is the
 * root cause behind every "animation stuck at opacity 0" bug hit while
 * building this page — CaseStudies, Pricing, etc). A single refresh once
 * fonts (and any remaining images) have settled fixes all of them at once.
 */
export function ScrollTriggerRefresh() {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();

    document.fonts?.ready?.then(refresh);
    window.addEventListener("load", refresh);
    const fallback = setTimeout(refresh, 1500);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
