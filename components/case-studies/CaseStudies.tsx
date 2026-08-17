"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useIntersectionTrigger } from "@/hooks/useIntersectionTrigger";
import { CASE_STUDIES } from "@/lib/constants/caseStudies";
import { CaseFileCard } from "./CaseFileCard";

export function CaseStudies() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (!cards.length) return;

    gsap.set(cards, { opacity: 0, y: 36 });
  }, [reducedMotion]);

  useIntersectionTrigger(
    sectionRef,
    () => {
      const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { disabled: reducedMotion }
  );

  return (
    <section ref={sectionRef} className="w-full bg-off-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[38px] lg:text-[44px]">
            Real stories.
            <br />
            <span className="text-primary-blue">Real impact.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-8">
          {CASE_STUDIES.map((study, i) => (
            <CaseFileCard
              key={study.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              study={study}
              tilt={i % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
