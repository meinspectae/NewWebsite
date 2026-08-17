"use client";

import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

let registered = false;
function registerPlugins() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    registered = true;
  }
}
registerPlugins();

interface UseScrollProgressOptions {
  /** The tall runway element (viewport height + extra scroll distance). Its
   *  child is expected to be CSS `position: sticky` — the "pin" itself is
   *  plain CSS, not GSAP's DOM-mutating pin, so it can't fight React's
   *  reconciler for ownership of the node. */
  trigger: RefObject<HTMLElement | null>;
  disabled?: boolean;
  onUpdate: (progress: number) => void;
  /**
   * Extra values that change the runway's height (e.g. an `isMobile` flag
   * feeding a shorter `distance`). `useIsMobile`/`usePrefersReducedMotion`
   * report their SSR-safe default on the very first client render and only
   * flip to the real value a tick later — if that flip changes the runway's
   * CSS height *after* this hook's ScrollTrigger already measured it, the
   * trigger keeps using the stale (usually larger, desktop) start/end and
   * the sticky content visually un-pins long before progress ever reaches 1.
   * Listing the values that drive the height here forces GSAP to tear down
   * and recreate the trigger against the corrected layout.
   */
  deps?: unknown[];
}

/**
 * Drives a 0..1 progress value across a sticky scroll runway via GSAP ScrollTrigger.
 * The callback fires on every scrub tick — callers should avoid setState here
 * and instead write into a ref/shared store to keep re-renders out of the scroll path.
 */
export function useScrollProgress({ trigger, disabled = false, onUpdate, deps = [] }: UseScrollProgressOptions) {
  useGSAP(
    () => {
      const el = trigger.current;
      if (disabled || !el) return;

      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        onUpdate: (self) => onUpdate(self.progress),
      });
    },
    { dependencies: [trigger, disabled, ...deps], scope: trigger }
  );
}
