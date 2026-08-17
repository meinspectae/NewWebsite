import { LayoutGrid, History, UserCheck } from "lucide-react";
import type { FeatureGridItem } from "@/components/marketing/FeatureGrid";
import type { FaqItem } from "@/components/marketing/FaqAccordion";

export const AGENTS_HERO = {
  breadcrumb: "For Agents & Property Managers",
  kicker: "For Agents & Property Managers",
  title: "Consistent Property Condition Reports Across Every Unit",
  description:
    "Managing dozens or hundreds of units means handovers can't depend on who happens to be doing the walkthrough. MeInspect standardises the process — the same photo record, the same rating scale, the same three-party sign-off — every time.",
  primaryCta: { label: "Talk to Our Team", href: "/contact" },
  secondaryCta: { label: "See Pricing", href: "/pricing" },
} as const;

export const AGENTS_WHY = {
  eyebrow: "Why It Matters",
  title: "Fewer disputes, less staff time, one system of record.",
};

export const AGENTS_WHY_FEATURES: FeatureGridItem[] = [
  {
    icon: LayoutGrid,
    title: "Standardised across the portfolio",
    description: "Every unit gets the same room-by-room photo documentation and condition rating, regardless of which agent runs the inspection.",
  },
  {
    icon: History,
    title: "Full inspection history",
    description: "Every completed report is stored by property, so you can pull up move-in vs. move-out comparisons instantly when a dispute comes up.",
  },
  {
    icon: UserCheck,
    title: "Outsource it when you need to",
    description: "Hire a Meinspector to run the walkthrough on-site when your own staff are stretched thin — same report format, same standard.",
  },
];

export const AGENTS_FAQ: FaqItem[] = [
  {
    question: "How does MeInspect help agencies managing many units?",
    answer:
      "Every property gets the same consistent inspection process — the same photo standard, the same four-point rating scale, and the same three-party sign-off — so quality doesn't depend on which staff member did the walkthrough.",
  },
  {
    question: "Can a Meinspector do the walkthrough instead of my staff?",
    answer:
      "Yes. The Hire a Meinspector service sends a trained professional to carry out the inspection on-site, which is useful for agencies that want inspections done without pulling staff off other work.",
  },
];

export const AGENTS_CLOSING = {
  title: "Standardise every handover across your portfolio.",
  body: "Get in touch to talk about agency and multi-unit pricing.",
  ctaLabel: "Talk to Our Team",
  ctaHref: "/contact",
};
