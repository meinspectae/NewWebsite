import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface RelatedLink {
  label: string;
  href: string;
}

interface GuideFooterProps {
  disclaimer: string;
  keepReading: RelatedLink[];
  roleLinks: RelatedLink[];
}

export function GuideFooter({ disclaimer, keepReading, roleLinks }: GuideFooterProps) {
  return (
    <div className="mx-auto max-w-[760px] px-6 pb-14 lg:px-10">
      <p className="rounded-xl border border-dashed border-dark/15 bg-off-white px-5 py-4 text-[13px] leading-relaxed text-grey">
        {disclaimer}
      </p>

      <div className="mt-8">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-dark/40">
          Keep Reading
        </span>
        <div className="mt-3 flex flex-wrap gap-3">
          {keepReading.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-dark/12 bg-white px-4 py-2 text-[13px] font-semibold text-dark/80 transition-colors hover:border-primary-blue/40 hover:text-primary-blue"
            >
              {link.label}
              <ArrowRight size={13} strokeWidth={2.25} />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {roleLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-blue transition-colors hover:text-deep-blue"
          >
            {link.label}
            <ArrowUpRight size={13} strokeWidth={2.25} />
          </Link>
        ))}
      </div>
    </div>
  );
}
