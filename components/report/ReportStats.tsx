"use client";

import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { useIntersectionTrigger } from "@/hooks/useIntersectionTrigger";
import { REPORT_STATS } from "@/lib/constants/report";

const COUNT_DURATION = 900;

export function ReportStats() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const statWrapRefs = useRef<Array<HTMLDivElement | null>>([]);
  const badgeRef = useRef<HTMLDivElement>(null);

  useIntersectionTrigger(wrapRef, () => {
    statWrapRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
    });

    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / COUNT_DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      REPORT_STATS.forEach((stat, i) => {
        const el = numberRefs.current[i];
        if (el) el.textContent = String(Math.round(stat.value * eased));
      });
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    if (badgeRef.current) {
      badgeRef.current.style.transition = "opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s";
      badgeRef.current.style.opacity = "1";
      badgeRef.current.style.transform = "scale(1)";
    }
  });

  return (
    <div ref={wrapRef} className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-3 gap-6 sm:gap-10">
        {REPORT_STATS.map((stat, i) => (
          <div
            key={stat.label}
            ref={(el) => {
              statWrapRefs.current[i] = el;
            }}
            className="flex flex-col items-center text-center"
            style={{ opacity: 0, transform: "translateY(14px)" }}
          >
            <span
              ref={(el) => {
                numberRefs.current[i] = el;
              }}
              className="font-mono text-[32px] font-bold tabular-nums leading-none text-dark sm:text-[40px]"
            >
              0
            </span>
            <span className="mt-2 font-mono text-[10.5px] font-semibold uppercase tracking-wide text-grey sm:text-[11.5px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <div
        ref={badgeRef}
        className="flex items-center gap-2 rounded-full bg-verify-green px-5 py-2.5 shadow-[0_16px_36px_-14px_rgba(79,175,70,0.55)]"
        style={{ opacity: 0, transform: "scale(0.7)" }}
      >
        <CheckCircle2 size={17} strokeWidth={2.5} className="text-white" />
        <span className="text-[14px] font-bold text-white">Inspection Complete</span>
      </div>
    </div>
  );
}
