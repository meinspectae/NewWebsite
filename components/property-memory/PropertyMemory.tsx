"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useIntersectionTrigger } from "@/hooks/useIntersectionTrigger";
import { MOVE_IN_STAGE, MOVE_OUT_STAGE } from "@/lib/constants/propertyMemory";
import { MemoryCard } from "./MemoryCard";
import { TimelineConnector } from "./TimelineConnector";

export function PropertyMemory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const leftLineRef = useRef<HTMLDivElement>(null);
  const rightLineRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    gsap.set(leftCardRef.current, { opacity: 0, x: -36 });
    gsap.set([leftLineRef.current, rightLineRef.current], { scaleX: 0, scaleY: 0 });
    gsap.set(markerRef.current, { opacity: 0, scale: 0.6 });
    gsap.set(rightCardRef.current, { opacity: 0, x: 36 });
  }, [reducedMotion]);

  useIntersectionTrigger(
    sectionRef,
    () => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(leftCardRef.current, { opacity: 1, x: 0, duration: 0.7 })
        .to([leftLineRef.current, rightLineRef.current], { scaleX: 1, scaleY: 1, duration: 0.5 }, "-=0.35")
        .to(markerRef.current, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.15")
        .to(rightCardRef.current, { opacity: 1, x: 0, duration: 0.7 }, "-=0.3");
    },
    { disabled: reducedMotion }
  );

  return (
    <section ref={sectionRef} className="w-full bg-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-8">
          <h2 className="shrink-0 text-[30px] font-semibold leading-[1.18] tracking-tight text-dark sm:text-[36px] lg:w-[230px] lg:text-[26px] xl:w-[320px] xl:text-[36px]">
            In case of a dispute,
            <br />
            <span className="text-primary-blue">evidence</span> wins not memory
          </h2>

          <div className="flex flex-col items-center gap-8 lg:flex-1 lg:flex-row lg:justify-between lg:gap-2">
            <MemoryCard ref={leftCardRef} stage={MOVE_IN_STAGE} variant="move-in" />

            <TimelineConnector leftLineRef={leftLineRef} rightLineRef={rightLineRef} markerRef={markerRef} />

            <MemoryCard ref={rightCardRef} stage={MOVE_OUT_STAGE} variant="move-out" />
          </div>
        </div>
      </div>
    </section>
  );
}
