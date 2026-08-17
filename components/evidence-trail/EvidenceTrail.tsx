"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCheck } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { EVIDENCE_STAGES } from "@/lib/constants/evidenceTrail";
import { EvidenceCard } from "./EvidenceCard";

let registered = false;
if (!registered && typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  registered = true;
}

const TONE_ICON_CLASS = { blue: "text-primary-blue", green: "text-verify-green" } as const;
const TONE_RING_CLASS: Record<"blue" | "green", string[]> = {
  blue: ["border-primary-blue/40", "bg-primary-blue/8"],
  green: ["border-verify-green/40", "bg-verify-green/8"],
};
const BASE_RING_CLASS = ["border-dark/10", "bg-white"];
const BASE_ICON_CLASS = "text-dark/35";
const ACTIVE_CARD_CLASS = ["scale-[1.06]", "shadow-[0_18px_36px_-16px_rgba(11,66,103,0.32)]"];
const BASE_CARD_CLASS = "shadow-[0_8px_22px_-16px_rgba(17,17,17,0.18)]";

/**
 * Drives the whole reveal off ONE scrubbed ScrollTrigger's progress value
 * (0→1) rather than per-card triggers — the six cards share the same
 * vertical scroll position on desktop (they're laid out horizontally), so
 * only a shared progress value can stagger them in left-to-right order.
 * The same progress also draws the connecting line and caps it with the
 * green check, and it works unchanged for the stacked mobile layout.
 */
export function EvidenceTrail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) return;
      const trail = trailRef.current;
      if (!trail) return;

      const lines = trail.querySelectorAll<HTMLElement>("[data-evidence-line]");
      const checks = trail.querySelectorAll<HTMLElement>("[data-evidence-check]");
      const cards = Array.from(trail.querySelectorAll<HTMLElement>("[data-evidence-index]"));
      const total = EVIDENCE_STAGES.length;

      ScrollTrigger.create({
        trigger: trail,
        start: "top 85%",
        end: "top 30%",
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;

          lines.forEach((line) => {
            line.style.transform = line.dataset.evidenceLine === "vertical" ? `scaleY(${progress})` : `scaleX(${progress})`;
          });

          cards.forEach((card) => {
            const i = Number(card.dataset.evidenceIndex);
            const active = progress >= (i + 0.5) / total;
            const tone = (card.dataset.evidenceTone as "blue" | "green") ?? "blue";
            const body = card.querySelector<HTMLElement>(".evidence-card-body");
            const icon = card.querySelector<HTMLElement>("[data-evidence-icon]");
            const svg = icon?.querySelector("svg");

            body?.classList.toggle(ACTIVE_CARD_CLASS[0], active);
            body?.classList.toggle(ACTIVE_CARD_CLASS[1], active);
            body?.classList.toggle(BASE_CARD_CLASS, !active);

            if (icon) {
              TONE_RING_CLASS[tone].forEach((c) => icon.classList.toggle(c, active));
              BASE_RING_CLASS.forEach((c) => icon.classList.toggle(c, !active));
            }
            if (svg) {
              svg.classList.toggle(TONE_ICON_CLASS[tone], active);
              svg.classList.toggle(BASE_ICON_CLASS, !active);
            }
          });

          checks.forEach((check) => {
            const active = progress >= 0.94;
            check.style.opacity = active ? "1" : "0";
            check.style.transform = active ? "scale(1)" : "scale(0.6)";
          });
        },
      });
    },
    { dependencies: [reducedMotion], scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[38px] lg:text-[44px]">
            Every detail.
            <br />
            <span className="text-primary-blue">Verified.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-grey sm:text-[16px]">
            From the moment a photo is captured to the moment the report is signed, every important detail stays
            connected.
          </p>
        </div>

        <div ref={trailRef}>
          {/* desktop / tablet — horizontal trail */}
          <div className="relative mt-16 hidden lg:block xl:mt-20">
            <div className="pointer-events-none absolute left-0 right-11 top-5 h-px xl:top-[22px]">
              <div className="h-full w-full rounded-full bg-dark/10" />
              <div
                data-evidence-line="horizontal"
                className="absolute inset-0 origin-left scale-x-0 rounded-full bg-primary-blue"
              />
            </div>

            <div className="relative flex items-start justify-between pr-11">
              {EVIDENCE_STAGES.map((stage, i) => (
                <EvidenceCard key={stage.id} stage={stage} index={i} />
              ))}
            </div>

            <div
              data-evidence-check
              className="absolute right-0 top-5 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-verify-green opacity-0 shadow-[0_8px_20px_-8px_rgba(79,175,70,0.6)] transition-[opacity,transform] duration-300 ease-out xl:top-[22px] xl:h-9 xl:w-9"
              style={{ transform: "translateY(-50%) scale(0.6)" }}
            >
              <CheckCheck size={16} strokeWidth={2.75} className="text-white" />
            </div>
          </div>

          {/* mobile — vertical trail */}
          <div className="relative mt-14 flex flex-col gap-7 lg:hidden">
            <div className="pointer-events-none absolute bottom-9 left-5 top-1 w-px">
              <div className="h-full w-full rounded-full bg-dark/10" />
              <div
                data-evidence-line="vertical"
                className="absolute inset-0 origin-top scale-y-0 rounded-full bg-primary-blue"
              />
            </div>

            {EVIDENCE_STAGES.map((stage, i) => (
              <EvidenceCard key={stage.id} stage={stage} index={i} layout="row" />
            ))}

            <div className="relative z-10 flex items-center gap-4">
              <div
                data-evidence-check
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-verify-green opacity-0 shadow-[0_8px_20px_-8px_rgba(79,175,70,0.6)] transition-[opacity,transform] duration-300 ease-out"
                style={{ transform: "scale(0.6)" }}
              >
                <CheckCheck size={17} strokeWidth={2.75} className="text-white" />
              </div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-verify-green">
                Trail Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
