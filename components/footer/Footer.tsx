import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Clock, PenTool, Linkedin, Instagram } from "lucide-react";
import { FOOTER_COPY, FOOTER_LINK_GROUPS } from "@/lib/constants/footer";
import { HERO_COPY } from "@/lib/constants/hero";

const TRUST_ICONS = [MapPin, Clock, PenTool];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/meinspect/", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/me.inspect", Icon: Instagram },
];

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-dark/8 bg-off-white">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-40" />
      <Globe
        className="pointer-events-none absolute -bottom-20 -right-20 text-deep-blue/[0.045]"
        size={360}
        strokeWidth={0.6}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* top CTA — the document's closing line */}
        <div className="flex flex-col items-center gap-5 border-b border-dashed border-dark/12 py-10 text-center sm:flex-row sm:justify-between sm:text-left lg:py-12">
          <h2 className="text-[24px] font-semibold tracking-tight text-dark sm:text-[28px]">
            {FOOTER_COPY.ctaHeadline}
          </h2>
          <Link
            href={FOOTER_COPY.ctaHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary-blue px-7 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-deep-blue"
          >
            {FOOTER_COPY.ctaButton}
            <ArrowRight size={16} strokeWidth={2.25} />
          </Link>
        </div>
        {/* brand + navigation */}
        <div className="flex flex-col gap-10 py-12 lg:flex-row lg:gap-16 lg:py-14">
          <div className="lg:w-[280px] lg:shrink-0">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/logo.png" alt="MeInspect" width={30} height={30} />
              <span className="text-[16px] font-semibold tracking-tight text-dark">
                Me<span className="text-primary-blue">Inspect</span>
              </span>
            </Link>
            <p className="mt-3.5 max-w-[280px] text-[13.5px] leading-relaxed text-grey">{FOOTER_COPY.tagline}</p>
            <div className="mt-4 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-dark/10 text-dark/60 transition-colors hover:border-primary-blue hover:text-primary-blue"
                >
                  <Icon size={15} strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-9 sm:grid-cols-4">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-wider text-dark/40">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13.5px] text-dark/70 transition-colors hover:text-primary-blue"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* bottom bar */}
        <div className="flex flex-col items-center gap-4 border-t border-dark/8 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="font-mono text-[11.5px] text-dark/40">{FOOTER_COPY.copyright}</span>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {HERO_COPY.trustIndicators.map((label, i) => {
              const Icon = TRUST_ICONS[i];
              return (
                <li key={label} className="flex items-center gap-1.5">
                  <Icon size={13} className="text-verify-green" strokeWidth={2.25} />
                  <span className="font-mono text-[11px] font-medium text-dark/50">{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
