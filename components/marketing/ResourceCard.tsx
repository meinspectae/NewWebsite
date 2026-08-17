import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  tag: string;
  title: string;
  description: string;
  href: string;
}

export function ResourceCard({ tag, title, description, href }: ResourceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-dark/8 bg-white p-6 shadow-[0_10px_26px_-20px_rgba(17,17,17,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue/30 hover:shadow-[0_20px_40px_-22px_rgba(11,66,103,0.3)]"
    >
      <span className="font-mono text-[10.5px] font-bold uppercase tracking-wide text-primary-blue">{tag}</span>
      <h3 className="mt-2.5 text-[16.5px] font-bold leading-snug text-dark">{title}</h3>
      <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-grey">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-primary-blue">
        Read the guide
        <ArrowRight size={14} strokeWidth={2.25} className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
