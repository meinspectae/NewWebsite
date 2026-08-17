"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useIntersectionTrigger } from "@/hooks/useIntersectionTrigger";
import { MOVE_IN_STAGE, MOVE_OUT_STAGE } from "@/lib/constants/propertyMemory";
import { MemoryCard } from "./MemoryCard";
import { TimelineConnector } from "./TimelineConnector";
import { CompareSlider } from "./CompareSlider";

export function PropertyMemory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const leftLineRef = useRef<HTMLDivElement>(null);
  const rightLineRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [compareOpen, setCompareOpen] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    gsap.set(leftCardRef.current, { opacity: 0, x: -36 });
    gsap.set([leftLineRef.current, rightLineRef.current], { scaleX: 0, scaleY: 0 });
    gsap.set(markerRef.current, { opacity: 0, scale: 0.6 });
    gsap.set(rightCardRef.current, { opacity: 0, x: 36 });
    gsap.set(arrowRef.current, { opacity: 0, x: -10 });
  }, [reducedMotion]);

  useIntersectionTrigger(
    sectionRef,
    () => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(leftCardRef.current, { opacity: 1, x: 0, duration: 0.7 })
        .to([leftLineRef.current, rightLineRef.current], { scaleX: 1, scaleY: 1, duration: 0.5 }, "-=0.35")
        .to(markerRef.current, { opacity: 1, scale: 1, duration: 0.4 }, "-=0.15")
        .to(rightCardRef.current, { opacity: 1, x: 0, duration: 0.7 }, "-=0.3")
        .to(arrowRef.current, { opacity: 1, x: 0, duration: 0.4 }, "-=0.2");
    },
    { disabled: reducedMotion }
  );

  return (
    <section ref={sectionRef} className="w-full bg-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-8">
          <h2 className="shrink-0 text-[30px] font-semibold leading-[1.18] tracking-tight text-dark sm:text-[36px] lg:w-[230px] lg:text-[26px] xl:w-[320px] xl:text-[36px]">
            Your property doesn&apos;t remember.
            <br />
            <span className="text-primary-blue">MeInspect</span> does.
          </h2>

          <div className="flex flex-col items-center gap-8 lg:flex-1 lg:flex-row lg:justify-between lg:gap-2">
            <MemoryCard ref={leftCardRef} stage={MOVE_IN_STAGE} variant="move-in" />

            <TimelineConnector leftLineRef={leftLineRef} rightLineRef={rightLineRef} markerRef={markerRef} />

            <MemoryCard ref={rightCardRef} stage={MOVE_OUT_STAGE} variant="move-out" />

            <div className="flex flex-col items-center gap-1.5 lg:pl-2">
              <button
                ref={arrowRef}
                type="button"
                aria-label={compareOpen ? "Hide condition comparison" : "Compare condition"}
                onClick={() => setCompareOpen((v) => !v)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-blue text-white transition-transform hover:scale-105"
              >
                <ArrowRight
                  size={16}
                  strokeWidth={2.5}
                  className={`transition-transform duration-300 ${compareOpen ? "rotate-90" : ""}`}
                />
              </button>
              <span className="whitespace-nowrap font-mono text-[10px] text-grey">Compare</span>
            </div>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {compareOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mx-auto max-w-2xl pt-14">
                <CompareSlider />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
