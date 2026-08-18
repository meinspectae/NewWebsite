export interface PricingTier {
  id: string;
  icon: "diy" | "inspector" | "portfolio";
  theme: "green" | "blue";
  title: string;
  description: string;
  pricePrefix?: string;
  priceAmount?: string;
  priceSuffix?: string;
  customPricing?: boolean;
  recommended?: boolean;
  cta: string;
  href: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "diy",
    icon: "diy",
    theme: "green",
    title: "Do It Yourself",
    description: "Create and complete your own inspection.",
    pricePrefix: "AED",
    priceAmount: "199",
    priceSuffix: "/report",
    recommended: true,
    cta: "Get Started",
    href: "/start",
  },
  {
    id: "inspector",
    icon: "inspector",
    theme: "blue",
    title: "Hire a MeInspector",
    description: "We inspect your property professionally.",
    pricePrefix: "From AED",
    priceAmount: "499",
    priceSuffix: "/inspection",
    cta: "Book Now",
    href: "/book",
  },
  {
    id: "portfolio",
    icon: "portfolio",
    theme: "blue",
    title: "Property Managers & Holiday Homes",
    description: "Custom solutions for property managers.",
    customPricing: true,
    cta: "Contact Us",
    href: "/contact",
  },
];
