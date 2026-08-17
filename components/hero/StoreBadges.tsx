import Link from "next/link";
import { Apple } from "lucide-react";

function PlayGlyph() {
  return (
    <svg viewBox="0 0 512 512" className="h-[22px] w-[22px]" aria-hidden="true">
      <path d="M99 20 340 256 99 492c-9-6-15-16-15-28V48c0-12 6-22 15-28z" fill="#5BC9F4" />
      <path d="M99 20c6-4 14-5 21-2l230 130-84 84z" fill="#22D66F" />
      <path d="M350 232l84 48c17 10 17 30 0 40l-84 48-84-84z" fill="#F6C915" />
      <path d="M350 280l-84 84 84-84z" fill="transparent" />
      <path d="M120 494c-7 3-15 2-21-2l230-236 84 84z" fill="#EE4B4B" />
    </svg>
  );
}

interface StoreBadgeProps {
  href: string;
  eyebrow: string;
  label: string;
  icon: "apple" | "play";
}

function StoreBadge({ href, eyebrow, label, icon }: StoreBadgeProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 rounded-full bg-dark px-5 py-3 text-white transition-colors hover:bg-dark/85"
    >
      {icon === "apple" ? <Apple size={22} className="shrink-0" fill="white" /> : <PlayGlyph />}
      <span className="flex flex-col leading-none">
        <span className="text-[9.5px] font-medium text-white/70">{eyebrow}</span>
        <span className="mt-1 text-[14.5px] font-semibold tracking-tight">{label}</span>
      </span>
    </Link>
  );
}

export function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3.5">
      <StoreBadge href="https://apps.apple.com/app/meinspect" eyebrow="Download on the" label="App Store" icon="apple" />
      <StoreBadge href="https://play.google.com/store/apps/details?id=com.meinspect.app" eyebrow="GET IT ON" label="Google Play" icon="play" />
    </div>
  );
}
