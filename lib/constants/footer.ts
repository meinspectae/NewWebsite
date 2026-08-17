export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "For Tenants", href: "/for-tenants" },
      { label: "For Landlords", href: "/for-landlords" },
      { label: "For Agents & Property Managers", href: "/for-agents" },
      { label: "For Holiday Homes", href: "/for-holiday-homes" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Guides", href: "/resources" },
      { label: "Move-In Checklist", href: "/resources/move-in-checklist" },
      { label: "Deposit Dispute Guide", href: "/resources/deposit-dispute-guide" },
      { label: "Report Template", href: "/resources/report-template" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Become a MeInspector", href: "/careers/meinspector" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Delete Account", href: "/legal/delete-account" },
    ],
  },
];

export const FOOTER_COPY = {
  ctaHeadline: "Make the condition clear.",
  ctaButton: "Start an Inspection",
  ctaHref: "/start",
  tagline: "Property Condition Reports that protect Tenants, Landlords and Property Managers worldwide.",
  copyright: "© 2026 MeInspect. All rights reserved.",
} as const;
