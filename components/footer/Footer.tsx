import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Clock, PenTool } from "lucide-react";
import { FOOTER_COPY, FOOTER_LINK_GROUPS } from "@/lib/constants/footer";
import { HERO_COPY } from "@/lib/constants/hero";

const TRUST_ICONS = [MapPin, Clock, PenTool];

function LinkedinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/meinspect/", Icon: LinkedinIcon },
  { label: "Instagram", href: "https://www.instagram.com/me.inspect", Icon: InstagramIcon },
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
