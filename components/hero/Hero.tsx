"use client";

import { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { MapPin, Clock, PenTool } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useIsMobile, useIsTablet, usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { HERO_COPY } from "@/lib/constants/hero";
import { HeroVisual } from "./HeroVisual";
import { StoreBadges } from "./StoreBadges";

const TRUST_ICONS = [MapPin, Clock, PenTool];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const pinRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const reducedMotion = usePrefersReducedMotion();
  const distance = isMobile ? 1600 : 2400;

  useScrollProgress({
    trigger: pinRef,
    disabled: reducedMotion,
    // isMobile reports its SSR-safe default on the first client render and
    // flips a tick later, which changes `distance` and the runway's CSS
    // height — without this dep the trigger keeps its stale, pre-flip end
    // position and the sticky content un-pins before progress reaches 1.
    deps: [isMobile],
    onUpdate: (p) => {
      progressRef.current = p;
    },
  });

  return (
    <section
      ref={pinRef}
      style={{ height: reducedMotion ? undefined : `calc(100vh + ${distance}px)` }}
      className="relative w-full"
    >
      <div className="blueprint-grid sticky top-0 flex min-h-screen w-full flex-col overflow-hidden bg-off-white lg:flex-row lg:items-center">
        {/* copy column */}
        <div className="relative z-10 flex w-full flex-col justify-center px-6 pt-12 pb-8 lg:w-[36%] lg:px-10 lg:py-16 xl:px-14">
          <motion.h1
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="text-[38px] font-semibold leading-[1.08] tracking-tight text-dark sm:text-[46px] lg:text-[52px]"
          >
            {HERO_COPY.headlinePrefix}
            <span className="text-primary-blue">{HERO_COPY.headlineEmphasis}</span>
            {HERO_COPY.headlineSuffix}
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="mt-5 text-[17px] font-medium text-dark/85 sm:text-[19px]"
          >
            {HERO_COPY.subheadline}
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="mt-2.5 text-[15px] text-grey sm:text-[16px]"
          >
            {HERO_COPY.body}
          </motion.p>

          {/* desktop — store badges sit here in the copy column; on mobile
              they move below the 3D visual instead (see after the visual
              column), so hide this instance below lg */}
          <motion.div initial="hidden" animate="show" custom={3} variants={fadeUp} className="mt-8 hidden lg:block">
            <StoreBadges />
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            custom={4}
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2.5"
          >
            {HERO_COPY.trustIndicators.map((label, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <li key={label} className="flex items-center gap-1.5">
                  <Icon size={15} className="text-verify-green" strokeWidth={2.25} />
                  <span className="font-mono text-[12.5px] font-medium text-dark/75">{label}</span>
                </li>
              );
            })}
          </motion.ul>
        </div>

        {/* 3D visual column */}
        <div className="relative h-[440px] w-full shrink-0 sm:h-[520px] lg:h-[86vh] lg:w-[64%]">
          <HeroVisual progressRef={progressRef} isMobile={isMobile} isTablet={isTablet} />
        </div>

        {/* mobile — store badges after the 3D visual */}
        <div className="px-6 pb-10 lg:hidden">
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
