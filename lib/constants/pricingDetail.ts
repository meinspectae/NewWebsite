export interface PricingDetailTier {
  id: string;
  icon: "diy" | "inspector" | "portfolio";
  theme: "green" | "blue";
  title: string;
  priceLabel: string;
  priceSub?: string;
  features: string[];
  cta: string;
  href: string;
  footnote: string;
  recommended?: boolean;
}

export const PRICING_DETAIL_TIERS: PricingDetailTier[] = [
  {
    id: "diy",
    icon: "diy",
    theme: "green",
    title: "Do It Yourself",
    priceLabel: "AED 199",
    priceSub: "/ report",
    features: [
      "Full room-by-room photo documentation",
      "GPS coordinates & timestamps on every photo",
      "Four-point condition rating per room and item",
      "Keys & utility meter records included",
      "Three-party digital signatures",
      "Professional PDF — Ejari-referenced",
      "Emailed to tenant and landlord on completion",
      "Stored in your account — access anytime",
    ],
    cta: "Join the Waiting List",
    href: "/start",
    footnote: "Document everything yourself using the app. Pay only when you're ready to generate your official report.",
  },
  {
    id: "inspector",
    icon: "inspector",
    theme: "blue",
    title: "Hire a MeInspector",
    priceLabel: "Contact for pricing",
    features: [
      "A trained Meinspector visits and does the walkthrough for you",
      "Full room-by-room photo documentation",
      "GPS coordinates & timestamps on every photo",
      "Four-point condition rating per room and item",
      "Three-party digital signatures collected on-site",
      "Professional PDF — Ejari-referenced",
      "Ideal for landlords, agencies & property managers",
    ],
    cta: "Book a MeInspector",
    href: "/book",
    footnote: "Perfect if you'd rather have a professional handle the entire inspection for you.",
    recommended: true,
  },
  {
    id: "portfolio",
    icon: "portfolio",
    theme: "blue",
    title: "Holiday Homes",
    priceLabel: "Custom Pricing",
    features: [
      "Tailored plans for short-term & holiday-home portfolios",
      "Check-in/check-out condition reports between every guest",
      "Full room-by-room photo documentation",
      "GPS coordinates & timestamps on every photo",
      "Damage & missing-item flagging with photo evidence",
      "Volume pricing across multiple units",
      "Ideal for holiday-home owners & operators",
    ],
    cta: "Contact Us",
    href: "/contact",
    footnote: "Managing one or more holiday homes? Get a custom package built around your turnover frequency and portfolio size.",
  },
];
