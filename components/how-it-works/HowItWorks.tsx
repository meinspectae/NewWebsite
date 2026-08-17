"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants/howItWorks";
import { StepCard } from "./StepCard";

let registered = false;
if (!registered && typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  registered = true;
}

const ACTIVE_NUMBER_CLASS = ["border-primary-blue", "bg-primary-blue", "text-white"];
const BASE_NUMBER_CLASS = ["border-dark/10", "bg-white", "text-dark/35"];
const ACTIVE_VISUAL_CLASS = ["scale-[1.05]", "shadow-[0_20px_40px_-18px_rgba(11,66,103,0.4)]"];
const BASE_VISUAL_CLASS = "shadow-[0_10px_28px_-18px_rgba(17,17,17,0.22)]";

/**
 * One scrubbed ScrollTrigger drives everything — the four steps share the
 * same vertical scroll position on desktop (laid out horizontally), so a
 * single progress value staggers them left-to-right. Each step gets a local
 * 0→1 progress within its own band of that value, which drives a
 * step-specific micro-animation (phone settles in, camera corners snap on,
 * signatures draw, report pages assemble) so only the active step is ever
 * mid-animation — never all four at once.
 */
export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;
      const row = rowRef.current;
      if (!row) return;

      const lines = row.querySelectorAll<HTMLElement>("[data-how-line]");
      const cards = Array.from(row.querySelectorAll<HTMLElement>("[data-how-index]"));
      const total = HOW_IT_WORKS_STEPS.length;

      ScrollTrigger.create({
        trigger: row,
        start: "top 82%",
        end: "top 25%",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;

          lines.forEach((line) => {
            line.style.transform = line.dataset.howLine === "vertical" ? `scaleY(${progress})` : `scaleX(${progress})`;
          });

          cards.forEach((card) => {
            const i = Number(card.dataset.howIndex);
            const bandStart = i / total;
            const bandEnd = (i + 1) / total;
            const local = Math.min(1, Math.max(0, (progress - bandStart) / (bandEnd - bandStart)));
            const active = local > 0;

            const number = card.querySelector<HTMLElement>("[data-how-number]");
            if (number) {
              ACTIVE_NUMBER_CLASS.forEach((c) => number.classList.toggle(c, active));
              BASE_NUMBER_CLASS.forEach((c) => number.classList.toggle(c, !active));
            }

            const visual = card.querySelector<HTMLElement>("[data-how-visual]");
            if (visual) {
              ACTIVE_VISUAL_CLASS.forEach((c) => visual.classList.toggle(c, active));
              visual.classList.toggle(BASE_VISUAL_CLASS, !active);
            }

            // step 1 — the phone settles in with a slight rise
            const phone = card.querySelector<HTMLElement>("[data-how-phone]");
            if (phone) {
              const p = Math.min(1, local * 1.5);
              phone.style.opacity = String(p);
              phone.style.transform = `translateY(${(1 - p) * 12}px) scale(${0.95 + p * 0.05})`;
            }

            // step 2 — camera corner brackets snap into focus, staggered
            const corners = card.querySelectorAll<HTMLElement>("[data-how-camera-corner]");
            corners.forEach((corner, ci) => {
              const start = ci * 0.12;
              const p = Math.min(1, Math.max(0, (local - start) / 0.35));
              corner.style.opacity = String(p);
              corner.style.transform = `scale(${0.5 + p * 0.5})`;
            });

            // step 3 — each signature draws itself in its own third of the band
            const sigPaths = card.querySelectorAll<SVGPathElement>("[data-how-sig-path]");
            sigPaths.forEach((path, si) => {
              const bandW = 1 / sigPaths.length;
              const p = Math.min(1, Math.max(0, (local - si * bandW) / bandW));
              path.style.strokeDashoffset = String(1 - p);
            });

            // step 4 — report pages fan into their resting stack, staggered
            const pages = card.querySelectorAll<HTMLElement>("[data-how-page]");
            pages.forEach((page, pi) => {
              const bandW = 1 / pages.length;
              const p = Math.min(1, Math.max(0, (local - pi * bandW) / bandW));
              const restRotate = Number(page.dataset.restRotate ?? 0);
              const restX = Number(page.dataset.restX ?? 0);
              const restY = Number(page.dataset.restY ?? 0);
              page.style.opacity = String(p);
              page.style.transform = `translate(${restX * p}px, ${restY * p + (1 - p) * 16}px) rotate(${restRotate * p}deg)`;
            });
          });
        },
      });
    },
    { dependencies: [reducedMotion], scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      style={{ scrollMarginTop: "var(--header-height)" }}
      className="w-full bg-off-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[38px] lg:text-[44px]">
            Simple in 4 steps.
            <br />
            <span className="text-primary-blue">Powerful in result.</span>
          </h2>
        </div>

        <div ref={rowRef}>
          {/* desktop / tablet — horizontal architectural line */}
          <div className="relative mt-16 hidden lg:block xl:mt-20">
            <div className="pointer-events-none absolute left-0 right-0 top-[18px] h-px xl:top-[18px]">
              <div className="h-full w-full rounded-full bg-dark/10" />
              <div
                data-how-line="horizontal"
                className="absolute inset-0 origin-left scale-x-0 rounded-full bg-primary-blue"
              />
            </div>

            <div className="relative flex items-start justify-between">
              {HOW_IT_WORKS_STEPS.map((step, i) => (
                <StepCard key={step.id} step={step} index={i} />
              ))}
            </div>
          </div>

          {/* mobile — vertical progression */}
          <div className="relative mt-14 flex flex-col items-center gap-10 lg:hidden">
            <div className="pointer-events-none absolute bottom-4 left-1/2 top-1 w-px -translate-x-1/2">
              <div className="h-full w-full rounded-full bg-dark/10" />
              <div
                data-how-line="vertical"
                className="absolute inset-0 origin-top scale-y-0 rounded-full bg-primary-blue"
              />
            </div>

            {HOW_IT_WORKS_STEPS.map((step, i) => (
              <div key={step.id} className="relative z-10">
                <StepCard step={step} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
