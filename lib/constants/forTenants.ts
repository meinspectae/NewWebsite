import { Camera, MapPin, PenTool } from "lucide-react";
import type { FeatureGridItem } from "@/components/marketing/FeatureGrid";
import type { FaqItem } from "@/components/marketing/FaqAccordion";

export const TENANTS_HERO = {
  breadcrumb: "For Tenants",
  kicker: "For Tenants",
  title: "Protect Your Deposit With a Move-In Inspection Report",
  description:
    "Before you hand over a single dirham, dollar, or pound, document exactly what the property looks like. A tenant move-in checklist with GPS-tagged, timestamped photos is the single best thing you can do to protect your deposit.",
  primaryCta: { label: "Download the App", href: "/start" },
  secondaryCta: { label: "Read the Full Checklist Guide", href: "/resources/move-in-checklist" },
} as const;

export const TENANTS_WHY = {
  eyebrow: "Why It Matters",
  title: "Tenant deposit protection starts on day one, not move-out day.",
  lead: "Most deposit disputes come down to one question: was this damage already there? Tenants who can answer that with photos and a date almost always win the argument. Tenants who can't are stuck arguing memory against a landlord's claim.",
};

export const TENANTS_WHY_FEATURES: FeatureGridItem[] = [
  {
    icon: Camera,
    title: "Document before you move a single box",
    description:
      "Photograph every room, every wall, every fixture — before your furniture goes in and before anything can be blamed on you.",
  },
  {
    icon: MapPin,
    title: "GPS and timestamp, automatically",
    description:
      "Every photo taken through the app carries a GPS coordinate and a timestamp, so nobody can argue about when or where it was taken.",
  },
  {
    icon: PenTool,
    title: "Get everyone to sign off",
    description: "Once the landlord (and agent, if there is one) digitally signs the same report, you all agreed on the same facts on day one.",
  },
];

export const TENANTS_CHECKLIST = {
  eyebrow: "What to Document",
  title: "A property inventory checklist that actually holds up.",
  lead: "Use this as your starting checklist for a thorough move-in inspection.",
  items: [
    "Walls, ceilings and floors in every room — marks, cracks, stains, paint condition",
    "Windows, doors, and locks — do they open, close, and lock properly",
    "Kitchen appliances and fixtures — existing scratches, dents, or missing parts",
    "Bathroom fixtures — grout, sealant, drainage, existing damage",
    "Furniture and fittings, if the property is furnished",
    "Keys, fobs and access cards — count and condition",
    "Utility meter readings on the day you take possession",
  ],
  templateLabel: "Download the free property condition report template",
  templateHref: "/resources/report-template",
};

export const TENANTS_RIGHTS = {
  eyebrow: "Tenant Rights",
  title: "Documenting pre-existing damage protects your rights.",
  body: "Rules on deposits and evidence vary by country and even by state or province. Whatever the local rules are, a dated, photographed record of the property's condition at move-in is evidence that works in your favour almost everywhere. See the resource hub for country-specific guidance.",
};

export const TENANTS_FAQ: FaqItem[] = [
  {
    question: "Can a move-in inspection report really help win a deposit dispute?",
    answer:
      "A GPS-tagged, timestamped, signed record of the property's condition at move-in is strong supporting evidence if a landlord tries to charge you for pre-existing damage. It won't replace legal advice, but it removes most he-said-she-said arguments.",
  },
  {
    question: "Do I need my landlord's permission to use MeInspect?",
    answer:
      "No, you can start documenting a property on your own. But the report is strongest when the landlord (and agent, if there is one) also reviews and digitally signs it, since a three-party signed record is harder to dispute than a tenant-only file.",
  },
  {
    question: "What should a tenant move-in checklist actually cover?",
    answer:
      "Every room, every wall, floor and ceiling, all fixtures and appliances, existing marks or wear, keys and fobs handed over, and utility meter readings on the day you take possession.",
  },
  {
    question: "Does this work if I'm renting outside the UAE?",
    answer:
      "Yes. The core documentation and reporting features work for any rental property globally. See our country guides for local deposit protection basics.",
  },
];

export const TENANTS_CLOSING = {
  title: "Protect your deposit before you move a single box.",
  body: "Download MeInspect free on the App Store or Google Play and start your first report today.",
};
