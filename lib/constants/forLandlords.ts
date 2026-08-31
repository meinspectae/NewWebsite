import { Camera, ClipboardCheck, PenTool } from "lucide-react";
import type { FeatureGridItem } from "@/components/marketing/FeatureGrid";
import type { FaqItem } from "@/components/marketing/FaqAccordion";

export const LANDLORDS_HERO = {
  breadcrumb: "For Landlords",
  kicker: "For Landlords",
  title: "Document Your Property Condition Before Every Tenancy",
  description:
    "A landlord inspection checklist with GPS-tagged photos and three-party sign-off turns “he said, she said” into a settled fact — before the tenant even moves in.",
  primaryCta: { label: "Download the App", href: "/start" },
  secondaryCta: { label: "See Pricing", href: "/pricing" },
} as const;

export const LANDLORDS_WHY = {
  eyebrow: "Why It Matters",
  title: "One disputed handover costs more than years of subscriptions.",
  lead: "A single deposit dispute or damage claim that goes to a tribunal or court can cost a landlord far more in time and legal fees than the report itself. A documented, signed property condition report settles most disagreements before they start.",
};

export const LANDLORDS_WHY_FEATURES: FeatureGridItem[] = [
  {
    icon: Camera,
    title: "Room-by-room photo record",
    description: "Every wall, fixture, and appliance photographed with GPS coordinates and a timestamp — before the tenant moves in.",
  },
  {
    icon: ClipboardCheck,
    title: "Four-point condition rating",
    description: "Rate every room and item as Very Good, Good, Fair, or Damaged — so the report is readable at a glance months or years later.",
  },
  {
    icon: PenTool,
    title: "Three-party digital sign-off",
    description: "Tenant, landlord, and agent all confirm the same facts on the same device. No partial sign-offs, no ambiguity.",
  },
];

export const LANDLORDS_CHECKLIST = {
  eyebrow: "The Checklist",
  title: "Your property handover checklist.",
  items: [
    "Photograph every room and major item before the tenant takes possession",
    "Rate the condition of each room and item",
    "Log every key, fob, and access card handed over",
    "Record utility meter readings on handover day",
    "Collect signatures from tenant, landlord, and agent",
    "Generate and email the PDF report to every party",
    "Repeat the same process at move-out to compare condition directly",
  ],
  templateLabel: "Download the free property condition report template",
  templateHref: "/resources/report-template",
};

export const LANDLORDS_CROSS_LINK = {
  eyebrow: "Managing More Than One Property",
  title: "Built for agencies and property managers too.",
  lead: "Running inspections across a whole portfolio? See how MeInspect works for agents and property managers, or explore local deposit and tenancy rules for your market.",
  links: [
    { label: "For Agents & Property Managers", href: "/for-agents" },
    { label: "For Holiday Homes", href: "/for-holiday-homes" },
    { label: "Resource Hub", href: "/resources" },
  ],
};

export const LANDLORDS_FAQ: FaqItem[] = [
  {
    question: "How does a signed condition report actually prevent disputes?",
    answer:
      "Because the tenant, landlord, and agent all sign off on the same photographed record at move-in, there is no room for a later disagreement about what condition the property was in. Most disputes happen because only one side has a record — MeInspect makes sure everyone does.",
  },
  {
    question: "Can I use this across a whole portfolio of properties?",
    answer:
      "Yes. Every completed report is stored in your account and organised by property, so you can compare move-in and move-out condition across any number of units.",
  },
  {
    question: "What should a landlord inspection checklist include?",
    answer:
      "A full room-by-room photo record, a condition rating for each room and major item, a keys and access card log, utility meter readings, and signatures from every party involved in the handover.",
  },
  {
    question: "Do I need to hire someone to do the inspection for me?",
    answer:
      "No — you can do it yourself using the app. If you'd rather not, MeInspect also offers a Hire a Meinspector service where a trained professional carries out the walkthrough for you.",
  },
];

export const LANDLORDS_CLOSING = {
  title: "Your next tenancy deserves a documented start.",
  body: "Download MeInspect free on the App Store or Google Play and start your first report today.",
};
