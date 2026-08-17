"use client";

import dynamic from "next/dynamic";
import type { RefObject } from "react";
import { ShieldCheck } from "lucide-react";
import { useWebGLSupported } from "@/hooks/useWebGLSupported";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { HERO_KEYFRAMES, HERO_KEYFRAMES_COMPACT } from "@/lib/constants/hero";
import { HeroVisualPhoto } from "./HeroVisualPhoto";

/**
 * PREVIEW SWITCH — set true to see the photorealistic-image hero visual
 * built from the reference renders instead of the procedural R3F scene.
 * Not a production toggle; flip back to false to return to the real build.
 */
const PREVIEW_PHOTO_VERSION = true;

const ApartmentScene = dynamic(
  () => import("@/components/3d/ApartmentScene").then((m) => m.ApartmentScene),
  {
    ssr: false,
    loading: () => <VisualSkeleton />,
  }
);

function VisualSkeleton() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-24 animate-pulse rounded-[26px] bg-dark/8" />
    </div>
  );
}

/** Non-WebGL / reduced-motion fallback — the phone stays legible without a canvas. */
function StaticFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative flex h-[300px] w-[150px] flex-col overflow-hidden rounded-[26px] border-[6px] border-[#16181C] bg-white shadow-[0_30px_60px_-20px_rgba(11,66,103,0.35)]">
        <div className="flex items-center justify-between px-3 pt-2">
          <span className="font-mono text-[8px] font-medium text-dark">9:41</span>
        </div>
        <div className="px-3 pt-1">
          <span className="text-[11px] font-semibold text-dark">Living Room</span>
        </div>
        <div className="mx-3 mt-2 flex flex-1 items-center justify-center rounded-lg bg-off-white blueprint-grid-fine border border-deep-blue/10">
          <ShieldCheck size={26} strokeWidth={1.25} className="text-deep-blue/70" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-verify-green" />
          <span className="font-mono text-[8px] font-medium text-dark">Condition: Good</span>
        </div>
      </div>
    </div>
  );
}

interface HeroVisualProps {
  progressRef: RefObject<number>;
  isMobile: boolean;
  isTablet: boolean;
}

export function HeroVisual({ progressRef, isMobile, isTablet }: HeroVisualProps) {
  const webglSupported = useWebGLSupported();
  const reducedMotion = usePrefersReducedMotion();

  if (PREVIEW_PHOTO_VERSION) {
    return <HeroVisualPhoto progressRef={progressRef} />;
  }

  if (webglSupported === false) {
    return <StaticFallback />;
  }

  // Tablet shares the narrower canvas that comes with `simplified`, so it
  // needs the reduced-amplitude journey too — full desktop amplitude only
  // fits the wider desktop canvas.
  const keyframes = isMobile || isTablet || reducedMotion ? HERO_KEYFRAMES_COMPACT : HERO_KEYFRAMES;

  return (
    <ApartmentScene
      progressRef={progressRef}
      keyframes={keyframes}
      simplified={isMobile || isTablet}
    />
  );
}
