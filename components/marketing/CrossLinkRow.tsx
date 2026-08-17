import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

interface CrossLink {
  label: string;
  href: string;
}

interface CrossLinkRowProps {
  eyebrow: string;
  title: string;
  lead?: string;
  links: CrossLink[];
}

export function CrossLinkRow({ eyebrow, title, lead, links }: CrossLinkRowProps) {
  return (
    <Section eyebrow={eyebrow} title={title} lead={lead}>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-dark/12 bg-white px-5 py-2.5 text-[13.5px] font-semibold text-dark/80 transition-colors hover:border-primary-blue/40 hover:text-primary-blue"
          >
            {link.label}
            <ArrowUpRight size={14} strokeWidth={2.25} />
          </Link>
        ))}
      </div>
    </Section>
  );
}
