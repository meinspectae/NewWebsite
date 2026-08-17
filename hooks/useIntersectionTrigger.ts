"use client";

import { useEffect, type RefObject } from "react";

interface UseIntersectionTriggerOptions {
  disabled?: boolean;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Fires `onEnter` once, the first time `ref` scrolls into view, then stops
 * watching. Deliberately not GSAP ScrollTrigger: ScrollTrigger caches each
 * trigger's pixel start position at creation time, and if page layout
 * shifts afterward (a web font swapping in and reflowing text, images
 * loading, any other section resizing) that cached position goes stale —
 * the trigger can end up requiring more scroll than the page even has,
 * permanently unreachable. This bit five different sections while building
 * this page (EvidenceTrail, Features, Report, CaseStudies, Pricing).
 * IntersectionObserver has no cached position to go stale; the browser
 * re-evaluates it continuously, so it can't get stuck this way.
 */
export function useIntersectionTrigger(
  ref: RefObject<Element | null>,
  onEnter: () => void,
  { disabled = false, threshold = 0.15, rootMargin = "0px 0px -10% 0px" }: UseIntersectionTriggerOptions = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (disabled || !el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter();
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, disabled]);
}
