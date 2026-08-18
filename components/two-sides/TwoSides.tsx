"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useIntersectionTrigger } from "@/hooks/useIntersectionTrigger";
import {
  TENANT_SIDE,
  LANDLORD_SIDE,
  TENANT_EVIDENCE,
  LANDLORD_EVIDENCE,
  type SideContent,
  type EvidenceSnapshot,
} from "@/lib/constants/twoSides";
import { SidePanel } from "./SidePanel";
import { CenterBadge } from "./CenterBadge";
import { EvidenceFloatCard } from "./EvidenceFloatCard";

let registered = false;
if (!registered && typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  registered = true;
}

function MobileSide({ content, evidence }: { content: SideContent; evidence: EvidenceSnapshot }) {
  return (
    <div className="flex flex-col gap-5">
      <SidePanel content={content} align="left" />
      <div data-two-sides-item className="relative h-[200px] overflow-hidden rounded-2xl shadow-[0_16px_36px_-20px_rgba(11,66,103,0.35)] sm:h-[230px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={content.photo} alt="" className="h-full w-full object-cover" draggable={false} />
      </div>
      <div data-two-sides-item className="flex justify-center">
        <EvidenceFloatCard evidence={evidence} />
      </div>
    </div>
  );
}

export function TwoSides() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftEnvRef = useRef<HTMLDivElement>(null);
  const rightEnvRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const leftEvidenceRef = useRef<HTMLDivElement>(null);
  const rightEvidenceRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const getFadeItems = () => [
    ...(leftTextRef.current?.querySelectorAll<HTMLElement>("[data-two-sides-item]") ?? []),
    ...(rightTextRef.current?.querySelectorAll<HTMLElement>("[data-two-sides-item]") ?? []),
  ];

  useEffect(() => {
    if (reducedMotion) return;
    if (!leftEnvRef.current || !rightEnvRef.current) return;

    gsap.set(leftEnvRef.current, { xPercent: -6, opacity: 0 });
    gsap.set(rightEnvRef.current, { xPercent: 6, opacity: 0 });
    gsap.set(getFadeItems(), { opacity: 0, y: 14 });
    gsap.set([leftEvidenceRef.current, rightEvidenceRef.current], { opacity: 0, y: 20, scale: 0.92 });
    gsap.set(centerRef.current, { opacity: 0, scale: 0.55 });
  }, [reducedMotion]);

  useIntersectionTrigger(
    sectionRef,
    () => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(leftEnvRef.current, { xPercent: 0, opacity: 1, duration: 0.9 }, 0)
        .to(rightEnvRef.current, { xPercent: 0, opacity: 1, duration: 0.9 }, 0)
        .to(getFadeItems(), { opacity: 1, y: 0, duration: 0.5, stagger: 0.05 }, "-=0.55")
        .to(
          [leftEvidenceRef.current, rightEvidenceRef.current],
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12 },
          "-=0.3"
        )
        .to(centerRef.current, { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.6)" }, "-=0.15");
    },
    { disabled: reducedMotion }
  );

  // Continuous scroll-linked parallax on the two room photos — kept on GSAP
  // ScrollTrigger (not IntersectionObserver, which only reports in/out of
  // view, not a scroll-position value) since it needs to scrub smoothly the
  // entire time the section is on screen, not fire once.
  useGSAP(
    () => {
      if (reducedMotion) return;
      const section = sectionRef.current;
      if (!section) return;

      const parallaxTargets = section.querySelectorAll<HTMLElement>("[data-two-sides-parallax]");
      parallaxTargets.forEach((el) => {
        gsap.fromTo(
          el,
          { y: -14 },
          {
            y: 14,
            ease: "none",
            scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 0.6 },
          }
        );
      });
    },
    { dependencies: [reducedMotion], scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-off-white py-20 lg:py-28">
      {/* ===== desktop / tablet — one immersive split-screen banner, full viewport width ===== */}
      <div className="relative hidden lg:block lg:h-[400px] xl:h-[440px] 2xl:h-[480px]">
        {/* two real interiors, blended into one environment, each exactly half the screen */}
        <div className="absolute inset-0 overflow-hidden bg-off-white">
          <div ref={leftEnvRef} className="absolute inset-y-0 left-0 h-full w-1/2 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={TENANT_SIDE.photo}
              alt=""
              data-two-sides-parallax
              className="absolute inset-x-0 -top-4 h-[calc(100%+32px)] w-full object-cover"
              draggable={false}
            />
          </div>
          <div ref={rightEnvRef} className="absolute inset-y-0 right-0 h-full w-1/2 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LANDLORD_SIDE.photo}
              alt=""
              data-two-sides-parallax
              className="absolute inset-x-0 -top-4 h-[calc(100%+32px)] w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-primary-blue/16 mix-blend-multiply" />
          </div>

          {/* soften the seam so the two rooms read as one property */}
          <div className="absolute inset-y-0 left-1/2 w-[18%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(246,248,247,0.94)_0%,rgba(246,248,247,0.55)_48%,rgba(246,248,247,0)_78%)]" />

          {/* corner scrims so the overlaid copy stays legible on the photo */}
          <div className="absolute left-0 top-0 h-[70%] w-[30%] bg-gradient-to-br from-off-white/88 via-off-white/38 to-transparent" />
          <div className="absolute right-0 top-0 h-[70%] w-[30%] bg-gradient-to-bl from-off-white/88 via-off-white/38 to-transparent" />
        </div>

        {/* content overlay — constrained to a readable width, centered on the same seam as the photos */}
        <div className="relative mx-auto h-full max-w-[1560px] px-10 xl:px-14 2xl:px-20">
          <div ref={leftTextRef} className="absolute left-10 top-9 max-w-[220px] rounded-2xl bg-white p-4 shadow-[0_16px_36px_-20px_rgba(11,66,103,0.35)] xl:left-14 xl:top-10 xl:max-w-[240px] 2xl:left-20">
            <SidePanel content={TENANT_SIDE} align="left" />
          </div>

          <div ref={rightTextRef} className="absolute right-10 top-9 max-w-[220px] rounded-2xl bg-white p-4 shadow-[0_16px_36px_-20px_rgba(11,66,103,0.35)] xl:right-14 xl:top-10 xl:max-w-[240px] 2xl:right-20">
            <SidePanel content={LANDLORD_SIDE} align="right" />
          </div>

          <div
            ref={leftEvidenceRef}
            className="absolute left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 xl:left-[29%] 2xl:left-[28%]"
          >
            <EvidenceFloatCard evidence={TENANT_EVIDENCE} width="w-[176px] xl:w-[196px]" />
          </div>

          <div
            ref={rightEvidenceRef}
            className="absolute right-[30%] top-1/2 translate-x-1/2 -translate-y-1/2 xl:right-[29%] 2xl:right-[28%]"
          >
            <EvidenceFloatCard evidence={LANDLORD_EVIDENCE} width="w-[176px] xl:w-[196px]" />
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <CenterBadge badgeRef={centerRef} />
          </div>
        </div>
      </div>

      {/* ===== mobile — tenant, then center verification, then landlord ===== */}
      <div className="mx-auto max-w-7xl px-6 lg:hidden">
        <div className="flex flex-col items-center gap-12">
          <MobileSide content={TENANT_SIDE} evidence={TENANT_EVIDENCE} />
          <CenterBadge size="sm" />
          <MobileSide content={LANDLORD_SIDE} evidence={LANDLORD_EVIDENCE} />
        </div>
      </div>
    </section>
  );
}
