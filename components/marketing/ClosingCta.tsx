import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StoreBadges } from "@/components/hero/StoreBadges";

interface ClosingCtaProps {
  title: string;
  body: string;
  /** Only needed for non-download CTAs (e.g. "Contact Us"). Omit both to show app download buttons instead. */
  ctaLabel?: string;
  ctaHref?: string;
}

export function ClosingCta({ title, body, ctaLabel, ctaHref }: ClosingCtaProps) {
  const isCustomLink = Boolean(ctaLabel && ctaHref);

  return (
    <section className="relative w-full overflow-hidden bg-off-white py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 130% at 50% 0%, rgba(22,120,184,0.08) 0%, rgba(22,120,184,0) 65%)",
        }}
      />
      <div className="relative mx-auto max-w-[640px] px-6 text-center lg:px-10">
        <h2 className="text-[26px] font-semibold leading-[1.2] tracking-tight text-dark sm:text-[32px]">{title}</h2>
        <p className="mt-3.5 text-[15px] text-dark/70 sm:text-[16px]">{body}</p>
        {isCustomLink ? (
          <Link
            href={ctaHref!}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary-blue px-8 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-deep-blue"
          >
            {ctaLabel}
            <ArrowRight size={16} strokeWidth={2.25} />
          </Link>
        ) : (
          <div className="mt-7 flex justify-center">
            <StoreBadges />
          </div>
        )}
      </div>
    </section>
  );
}
