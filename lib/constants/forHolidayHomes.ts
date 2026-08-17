import { RefreshCw, Flag, Tag } from "lucide-react";
import type { FeatureGridItem } from "@/components/marketing/FeatureGrid";

export const HOLIDAY_HOMES_HERO = {
  breadcrumb: "For Holiday Homes",
  kicker: "For Holiday Homes",
  title: "Check-In and Check-Out Reports Between Every Guest",
  description:
    "Short-term rentals turn over far more often than a standard tenancy — which means far more chances for undocumented damage to slip through. MeInspect gives you a fast condition report before and after every stay.",
  primaryCta: { label: "Talk to Our Team", href: "/contact" },
} as const;

export const HOLIDAY_HOMES_WHY = {
  eyebrow: "Why It Matters",
  title: "Built for turnover frequency, not just annual tenancies.",
};

export const HOLIDAY_HOMES_WHY_FEATURES: FeatureGridItem[] = [
  {
    icon: RefreshCw,
    title: "Fast check-in / check-out flow",
    description: "Run a condition report between every guest without slowing down turnaround times.",
  },
  {
    icon: Flag,
    title: "Damage & missing-item flagging",
    description: "Flag anything broken or missing with a photo, timestamped and tied to the specific stay.",
  },
  {
    icon: Tag,
    title: "Volume pricing",
    description: "Custom packages built around your turnover frequency and the number of units you manage.",
  },
];

export const HOLIDAY_HOMES_CLOSING = {
  title: "Protect every unit, between every guest.",
  body: "Get in touch for custom pricing built around your portfolio.",
  ctaLabel: "Talk to Our Team",
  ctaHref: "/contact",
};
