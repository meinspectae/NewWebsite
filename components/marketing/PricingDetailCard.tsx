import Link from "next/link";
import { Home, UserCheck, Building2, Check } from "lucide-react";
import type { PricingDetailTier } from "@/lib/constants/pricingDetail";

const ICON = { diy: Home, inspector: UserCheck, portfolio: Building2 } as const;

const THEME = {
  green: {
    accent: "from-verify-green to-verify-green/60",
    iconBg: "bg-gradient-to-br from-verify-green/18 to-verify-green/5 ring-1 ring-verify-green/20",
    icon: "text-verify-green",
    check: "text-verify-green",
    cta: "bg-verify-green hover:bg-verify-green/90",
    ring: "ring-verify-green/25",
  },
  blue: {
    accent: "from-primary-blue to-primary-blue/60",
    iconBg: "bg-gradient-to-br from-primary-blue/18 to-primary-blue/5 ring-1 ring-primary-blue/20",
    icon: "text-primary-blue",
    check: "text-primary-blue",
    cta: "bg-primary-blue hover:bg-deep-blue",
    ring: "ring-primary-blue/25",
  },
} as const;

interface PricingDetailCardProps {
  tier: PricingDetailTier;
}

export function PricingDetailCard({ tier }: PricingDetailCardProps) {
  const Icon = ICON[tier.icon];
  const theme = THEME[tier.theme];

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-7 ${
        tier.recommended
          ? `border-transparent shadow-[0_22px_46px_-22px_rgba(11,66,103,0.4)] ring-1 ${theme.ring} lg:-translate-y-2`
          : "border-dark/8 shadow-[0_10px_26px_-20px_rgba(17,17,17,0.35)]"
      }`}
    >
      <span className={`absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${theme.accent}`} />

      {tier.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-blue px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wide text-white shadow-[0_6px_14px_-4px_rgba(11,66,103,0.5)]">
          Most Popular
        </span>
      )}

      <div className="flex items-center gap-3.5">
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${theme.iconBg}`}>
          <Icon size={21} className={theme.icon} strokeWidth={1.75} />
        </span>
        <h3 className="text-[17px] font-bold leading-snug text-dark">{tier.title}</h3>
      </div>

      <div className="mt-5 border-t border-dashed border-dark/12 pt-4">
        <span className="text-[22px] font-bold text-dark">{tier.priceLabel}</span>
        {tier.priceSub && <span className="ml-1 text-[13px] text-grey">{tier.priceSub}</span>}
      </div>

      <ul className="mt-5 flex flex-1 flex-col gap-2.5">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[13px] leading-snug text-dark/80">
            <Check size={14} strokeWidth={3} className={`mt-0.5 shrink-0 ${theme.check}`} />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        href={tier.href}
        className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3.5 text-[14px] font-semibold text-white transition-colors ${theme.cta}`}
      >
        {tier.cta}
      </Link>

      <p className="mt-4 text-[12.5px] leading-relaxed text-grey">{tier.footnote}</p>
    </div>
  );
}
