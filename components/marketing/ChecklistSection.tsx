import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Section } from "./Section";

interface ChecklistSectionProps {
  eyebrow: string;
  title: string;
  lead?: string;
  items: string[];
  templateHref?: string;
  templateLabel?: string;
}

export function ChecklistSection({
  eyebrow,
  title,
  lead,
  items,
  templateHref,
  templateLabel,
}: ChecklistSectionProps) {
  return (
    <Section eyebrow={eyebrow} title={title} lead={lead} tone="white">
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-xl border border-dark/8 bg-off-white px-4 py-3.5"
          >
            <Check size={16} strokeWidth={3} className="mt-0.5 shrink-0 text-verify-green" />
            <span className="text-[14px] leading-snug text-dark/85 sm:text-[14.5px]">{item}</span>
          </li>
        ))}
      </ul>

      {templateHref && templateLabel && (
        <Link
          href={templateHref}
          className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary-blue transition-colors hover:text-deep-blue"
        >
          {templateLabel}
          <ArrowRight size={15} strokeWidth={2.25} />
        </Link>
      )}
    </Section>
  );
}
