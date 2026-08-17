import { Check, ArrowRight } from "lucide-react";
import type { SideContent } from "@/lib/constants/twoSides";

const TONE_TEXT: Record<SideContent["tone"], string> = {
  green: "text-verify-green",
  blue: "text-primary-blue",
};
const TONE_CHECK: Record<SideContent["tone"], string> = {
  green: "text-verify-green",
  blue: "text-primary-blue",
};
const TONE_BUTTON: Record<SideContent["tone"], string> = {
  green: "bg-verify-green",
  blue: "bg-primary-blue",
};

interface SidePanelProps {
  content: SideContent;
  align: "left" | "right";
}

/** The eyebrow + headline + checklist + arrow-button overlay for one side. */
export function SidePanel({ content, align }: SidePanelProps) {
  const alignRight = align === "right";

  return (
    <div className={`flex flex-col gap-2.5 ${alignRight ? "items-end text-right" : "items-start text-left"}`}>
      <span className={`font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] ${TONE_TEXT[content.tone]}`}>
        {content.role}
      </span>

      <h3 className="max-w-[15ch] text-[19px] font-bold leading-[1.18] tracking-tight text-dark drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)] sm:text-[22px] lg:text-[20px] xl:text-[24px]">
        {content.headline}
      </h3>

      <ul className={`mt-1 flex flex-col gap-1.5 ${alignRight ? "items-end" : "items-start"}`}>
        {content.benefits.map((benefit) => (
          <li
            key={benefit}
            data-two-sides-item
            className={`flex items-center gap-1.5 text-[12.5px] font-medium text-dark/90 sm:text-[13.5px] ${
              alignRight ? "flex-row-reverse" : ""
            }`}
          >
            <Check size={14} strokeWidth={3} className={`shrink-0 ${TONE_CHECK[content.tone]}`} />
            {benefit}
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label={`Learn more for ${content.role.toLowerCase()}`}
        className={`mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-[0_8px_18px_-6px_rgba(17,17,17,0.4)] transition-transform hover:scale-105 sm:h-9 sm:w-9 ${TONE_BUTTON[content.tone]}`}
      >
        <ArrowRight size={15} strokeWidth={2.5} />
      </button>
    </div>
  );
}
