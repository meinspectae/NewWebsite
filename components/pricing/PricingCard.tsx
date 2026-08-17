import { forwardRef } from "react";
import Link from "next/link";
import { Home, UserCheck, Building2 } from "lucide-react";
import type { PricingTier } from "@/lib/constants/pricing";

const ICON = {
  diy: Home,
  inspector: UserCheck,
  portfolio: Building2,
} as const;

const THEME = {
  green: {
    accent: "from-verify-green to-verify-green/60",
    iconBg: "bg-gradient-to-br from-verify-green/18 to-verify-green/5 ring-1 ring-verify-green/20",
    icon: "text-verify-green",
    title: "text-verify-green",
    amount: "text-verify-green",
    cta: "bg-verify-green hover:bg-verify-green/90",
    ctaShadow: "shadow-[0_14px_26px_-12px_rgba(79,175,70,0.55)]",
    ring: "ring-verify-green/25",
  },
  blue: {
    accent: "from-primary-blue to-primary-blue/60",
    iconBg: "bg-gradient-to-br from-primary-blue/18 to-primary-blue/5 ring-1 ring-primary-blue/20",
    icon: "text-primary-blue",
    title: "text-primary-blue",
    amount: "text-primary-blue",
    cta: "bg-primary-blue hover:bg-deep-blue",
    ctaShadow: "shadow-[0_14px_26px_-12px_rgba(22,120,184,0.5)]",
    ring: "ring-primary-blue/25",
  },
} as const;

interface PricingCardProps {
  tier: PricingTier;
}

export const PricingCard = forwardRef<HTMLDivElement, PricingCardProps>(function PricingCard({ tier }, ref) {
  const Icon = ICON[tier.icon];
  const theme = THEME[tier.theme];

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col rounded-2xl border bg-white p-6 pt-7 transition-all duration-300 ease-out hover:-translate-y-1.5 ${
        tier.recommended
          ? `border-transparent shadow-[0_22px_46px_-22px_rgba(11,66,103,0.4)] ring-1 ${theme.ring} lg:-translate-y-2.5`
          : "border-dark/8 shadow-[0_10px_26px_-20px_rgba(17,17,17,0.35)] hover:border-dark/12 hover:shadow-[0_20px_40px_-22px_rgba(17,17,17,0.3)]"
      }`}
    >
      <span className={`absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${theme.accent}`} />

      {tier.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-blue px-3 py-1 font-mono text-[9.5px] font-bold uppercase tracking-wide text-white shadow-[0_6px_14px_-4px_rgba(11,66,103,0.5)]">
          Most Popular
        </span>
      )}

      <div className="flex items-center gap-3.5">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-out group-hover:scale-110 ${theme.iconBg}`}
        >
          <Icon size={21} className={theme.icon} strokeWidth={1.75} />
        </span>
        <h3 className={`text-[16.5px] font-bold leading-snug ${theme.title}`}>{tier.title}</h3>
      </div>

      <p className="mt-3.5 text-[13px] leading-relaxed text-grey">{tier.description}</p>

      <div className="mt-5 flex-1 border-t border-dashed border-dark/12 pt-4">
        {tier.customPricing ? (
          <span className="inline-flex rounded-md border border-dark/15 px-3 py-1.5 font-mono text-[12.5px] font-semibold text-dark">
            Custom Pricing
          </span>
        ) : (
          <p className="text-[13.5px] text-grey">
            {tier.pricePrefix} <span className={`text-[21px] font-bold ${theme.amount}`}>{tier.priceAmount}</span>{" "}
            <span className="text-[12px]">{tier.priceSuffix}</span>
          </p>
        )}
      </div>

      <Link
        href={tier.href}
        className={`mt-5 inline-flex items-center justify-center rounded-lg px-5 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 ${theme.cta} ${theme.ctaShadow}`}
      >
        {tier.cta}
      </Link>
    </div>
  );
});
