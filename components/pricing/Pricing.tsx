"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useIntersectionTrigger } from "@/hooks/useIntersectionTrigger";
import { PRICING_TIERS } from "@/lib/constants/pricing";
import { PricingCard } from "./PricingCard";

const ENTRY_X = [-56, 0, 56];
const ENTRY_Y = [16, 32, 16];

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (!cards.length) return;

    gsap.set(cards, {
      opacity: 0,
      x: (i: number) => ENTRY_X[i] ?? 0,
      y: (i: number) => ENTRY_Y[i] ?? 24,
    });
  }, [reducedMotion]);

  useIntersectionTrigger(
    sectionRef,
    () => {
      const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
      gsap.to(cards, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { disabled: reducedMotion }
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-off-white py-20 lg:py-24">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-verify-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
          <div className="shrink-0 lg:w-[190px] xl:w-[220px]">
            <h2 className="text-[26px] font-semibold leading-[1.15] tracking-tight text-dark sm:text-[30px] lg:text-[26px] xl:text-[28px]">
              Choose what works for you.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-3 lg:flex-1 lg:gap-6 lg:pt-3">
            {PRICING_TIERS.map((tier, i) => (
              <PricingCard
                key={tier.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                tier={tier}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
