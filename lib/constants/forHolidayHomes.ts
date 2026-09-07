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

export const HOLIDAY_HOMES_CHECKLIST = {
  eyebrow: "What Gets Checked",
  title: "The same room-by-room standard, run at every turnover.",
  items: [
    "Furniture and soft furnishings condition (sofas, cushions, mattresses, linens)",
    "Kitchen inventory — appliances, cookware, glassware counts against your standard set",
    "Electronics and remotes present and functioning (TV, AC units, smart locks)",
    "Bathroom fixtures, towels, and toiletry restocking checkpoints",
    "Wall, floor, and surface condition — scuffs, stains, or damage flagged with a photo",
    "Balcony, terrace, or outdoor furniture where applicable",
  ],
};

export const HOLIDAY_HOMES_FAQ = [
  {
    question: "Do I need a full inspection between every single guest, or just periodically?",
    answer:
      "That depends on your risk tolerance and turnover volume. Many operators run a lighter check-in/check-out pass between every guest and reserve a full room-by-room inspection for periodic deep checks or whenever a stay flags an issue. Either cadence works with MeInspect — it's a question of how much documentation you want on file per stay.",
  },
  {
    question: "Can cleaning or turnover staff run the inspection themselves, or does it need to be the property manager?",
    answer:
      "Anyone you authorize can run it — cleaning staff, a turnover coordinator, or the property manager. The report is tied to whoever's logged in and timestamped automatically, so you always know who documented which stay.",
  },
  {
    question: "How does this work across a portfolio of units instead of just one property?",
    answer:
      "Each unit gets its own inspection history, so you can track condition and turnover patterns per property rather than just per guest. Pricing for multi-unit portfolios is volume-based — get in touch and we'll work out a package around your actual turnover frequency and unit count.",
  },
];

export const HOLIDAY_HOMES_CLOSING = {
  title: "Protect every unit, between every guest.",
  body: "Get in touch for custom pricing built around your portfolio.",
  ctaLabel: "Talk to Our Team",
  ctaHref: "/contact",
};
