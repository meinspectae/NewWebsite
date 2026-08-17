"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useIntersectionTrigger } from "@/hooks/useIntersectionTrigger";
import { FINAL_CTA_COPY } from "@/lib/constants/finalCta";
import { CtaVisual } from "./CtaVisual";

export function FinalCta() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const houseRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const keysRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    gsap.set(houseRef.current, { opacity: 0, y: 22, scale: 0.94 });
    gsap.set([ringsRef.current, phoneRef.current], { opacity: 0, x: -36 });
    gsap.set(keysRef.current, { opacity: 0, scale: 0.4 });
    gsap.set(pinRef.current, { opacity: 0, y: -26 });
    gsap.set(badgeRef.current, { opacity: 0, y: 14, scale: 0.75 });
  }, [reducedMotion]);

  useIntersectionTrigger(
    sectionRef,
    () => {
      gsap
        .timeline()
        .to(houseRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "power3.out" })
        .to([ringsRef.current, phoneRef.current], { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .to(keysRef.current, { opacity: 1, scale: 1, duration: 0.45, ease: "back.out(2.2)" }, "-=0.2")
        .to(pinRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "bounce.out" }, "-=0.15")
        .to(badgeRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(2.2)" }, "-=0.1");
    },
    { disabled: reducedMotion }
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-off-white py-12 lg:py-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(85% 130% at 12% 18%, rgba(22,120,184,0.09) 0%, rgba(22,120,184,0) 65%)," +
            "radial-gradient(90% 130% at 88% 85%, rgba(22,120,184,0.11) 0%, rgba(22,120,184,0) 65%)," +
            "linear-gradient(180deg, rgba(22,120,184,0.03) 0%, rgba(246,248,247,0) 40%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-8">
          <div className="max-w-lg text-center lg:w-[30%] lg:shrink-0 lg:text-left">
            <h2 className="text-[32px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[42px] lg:text-[40px] xl:text-[46px]">
              {FINAL_CTA_COPY.headlineLine1}
              <br />
              {FINAL_CTA_COPY.headlineLine2}
            </h2>

            <p className="mt-5 text-[16px] font-medium text-dark/70 sm:text-[17px]">
              {FINAL_CTA_COPY.supportingText}
            </p>

            <Link
              href={FINAL_CTA_COPY.primaryHref}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary-blue px-8 py-4 text-[15.5px] font-semibold text-white transition-colors hover:bg-deep-blue"
            >
              {FINAL_CTA_COPY.primaryCta}
              <ArrowRight size={17} strokeWidth={2.25} />
            </Link>
          </div>

          <div className="w-full lg:flex-1">
            <CtaVisual
              ringsRef={ringsRef}
              houseRef={houseRef}
              pinRef={pinRef}
              phoneRef={phoneRef}
              keysRef={keysRef}
              badgeRef={badgeRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
