import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";

interface PageHeroCta {
  label: string;
  href: string;
}

interface PageHeroProps {
  breadcrumb: string;
  kicker: string;
  title: string;
  description: string;
  primaryCta: PageHeroCta;
  secondaryCta?: PageHeroCta;
}

export function PageHero({ breadcrumb, kicker, title, description, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="blueprint-grid relative w-full overflow-hidden bg-off-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      <div className="relative mx-auto max-w-[860px] px-6 lg:px-10">
        <Breadcrumb label={breadcrumb} />

        <span className="mt-6 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
          {kicker}
        </span>

        <h1 className="mt-3 text-[34px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[42px] lg:text-[48px]">
          {title}
        </h1>

        <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-grey sm:text-[17px]">{description}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-primary-blue px-7 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-deep-blue"
          >
            {primaryCta.label}
            <ArrowRight size={16} strokeWidth={2.25} />
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="text-[14.5px] font-semibold text-dark/75 underline decoration-dark/20 underline-offset-4 transition-colors hover:text-primary-blue hover:decoration-primary-blue"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
