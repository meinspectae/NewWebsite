/**
 * Every entry here becomes a real, reviewable page at /locations/[slug],
 * built at deploy time by app/locations/[slug]/page.tsx and included
 * automatically in app/sitemap.ts.
 *
 * This replaces the old wildcard-Worker programmatic pages. The difference
 * that actually matters for SEO: every field below should be true and
 * specific to MeInspect's actual service in that area — not filler text
 * generated to hit a keyword. If you don't have a genuine, specific point
 * to make about an area, don't add it yet.
 */

export type LocationFaq = {
  question: string;
  answer: string;
};

export type Location = {
  slug: string; // "dubai-marina"
  city: string; // "Dubai"
  area: string; // "Dubai Marina"
  title: string; // <title>, keep under ~60 chars
  metaDescription: string; // keep under ~155 chars
  heroDek: string; // one or two sentences under the H1
  localPoints: string[]; // 2-4 genuinely area-specific points, not generic filler
  faqs: LocationFaq[];
};

export const LOCATIONS: Location[] = [
  {
    slug: "dubai-marina",
    city: "Dubai",
    area: "Dubai Marina",
    title: "Property Inspections in Dubai Marina | MeInspect",
    metaDescription:
      "Move-in and move-out condition reports for Dubai Marina apartments — GPS-tagged photos, timestamps, and digital sign-off for tenants and landlords.",
    heroDek:
      "Document your Dubai Marina apartment before you move a single box in or out — a signed, timestamped record protects your deposit either way.",
    localPoints: [
      "High-rise towers along the Marina see heavy AC and moisture exposure — worth documenting AC vents and window seals specifically at move-in.",
      "Many buildings require a NOC or move-in/move-out permit from building management — a signed condition report is useful supporting evidence for that process.",
    ],
    faqs: [
      {
        question: "Do I need building management's permission to run an inspection?",
        answer:
          "No — you can document the unit yourself at any time. Some Marina towers separately require a move-in/move-out NOC from building management for lift bookings, which is a different process from the inspection itself.",
      },
    ],
  },
  {
    slug: "downtown-dubai",
    city: "Dubai",
    area: "Downtown Dubai",
    title: "Property Inspections in Downtown Dubai | MeInspect",
    metaDescription:
      "Condition reports for Downtown Dubai apartments — photo evidence, GPS verification, and signed reports tenants and landlords can rely on.",
    heroDek:
      "From Burj Khalifa-adjacent towers to Old Town villas, document the property's condition before keys change hands.",
    localPoints: [
      "Downtown buildings vary widely in age — older Old Town units benefit from extra attention to plumbing fixtures and paint condition, which tend to show wear sooner than newer towers.",
      "Many Downtown towers require security or concierge sign-off for large item moves — factor this into when you schedule your inspection relative to your actual move date.",
    ],
    faqs: [
      {
        question: "Do older Old Town villas need a different inspection approach than the towers?",
        answer:
          "Broadly the same room-by-room approach works for both, but Old Town's lower-rise villas tend to have more exterior surfaces (external walls, small gardens, balconies) worth documenting compared to a typical tower apartment.",
      },
    ],
  },
  {
    slug: "business-bay",
    city: "Dubai",
    area: "Business Bay",
    title: "Property Inspections in Business Bay | MeInspect",
    metaDescription:
      "Move-in and move-out condition reports for Business Bay apartments — timestamped, GPS-verified, and signed by all parties.",
    heroDek: "Document your Business Bay unit's condition with a report both tenant and landlord can trust.",
    localPoints: [],
    faqs: [],
  },
];
