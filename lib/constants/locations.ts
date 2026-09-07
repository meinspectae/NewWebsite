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
      "Document your Dubai Marina apartment before you move a single box in or out — a signed, timestamped record protects your deposit either way. Marina turnover is fast, so having your own dated evidence matters more here than in a slower-moving building.",
    localPoints: [
      "High-rise towers along the Marina see heavy AC and moisture exposure — worth documenting AC vents and window seals specifically at move-in.",
      "Many buildings require a NOC or move-in/move-out permit from building management — a signed condition report is useful supporting evidence for that process.",
      "Marina units turn over frequently between short-term and long-term tenants in the same building, which means damage claims are often argued over multiple prior occupants — a dated report from your specific move-in narrows the dispute to your tenancy only.",
    ],
    faqs: [
      {
        question: "Do I need building management's permission to run an inspection?",
        answer:
          "No — you can document the unit yourself at any time. Some Marina towers separately require a move-in/move-out NOC from building management for lift bookings, which is a different process from the inspection itself.",
      },
      {
        question: "What should I photograph first in a Marina apartment?",
        answer:
          "Start with anything AC-related — vents, the unit itself, and any visible condensation or staining — since Marina apartments run AC near-constantly and it's the system most likely to show wear between tenants. After that, work room by room the same way you would anywhere else.",
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
      "From Burj Khalifa-adjacent towers to Old Town villas, document the property's condition before keys change hands. Downtown's mix of new-build and older stock means what counts as normal wear varies a lot by building — a report settles it either way.",
    localPoints: [
      "Downtown buildings vary widely in age — older Old Town units benefit from extra attention to plumbing fixtures and paint condition, which tend to show wear sooner than newer towers.",
      "Many Downtown towers require security or concierge sign-off for large item moves — factor this into when you schedule your inspection relative to your actual move date.",
      "A large share of Downtown stock is investor-owned and tenanted through agents rather than the landlord directly — a signed report gives the managing agent a clean record to hand back to the owner, without relying on their own notes.",
    ],
    faqs: [
      {
        question: "Do older Old Town villas need a different inspection approach than the towers?",
        answer:
          "Broadly the same room-by-room approach works for both, but Old Town's lower-rise villas tend to have more exterior surfaces (external walls, small gardens, balconies) worth documenting compared to a typical tower apartment.",
      },
      {
        question: "I'm renting through a managing agent, not the owner directly — does that change anything?",
        answer:
          "No — the report works the same way. All three parties (tenant, landlord, and agent, where one's involved) can be included in the sign-off, so the managing agent has the same evidence the owner does.",
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
    heroDek:
      "Document your Business Bay unit's condition with a report both tenant and landlord can trust. Between the mix of short lets and long-term leases in the same towers, having your own dated record matters more here than in a purely residential building.",
    localPoints: [
      "Many Business Bay towers mix short-term holiday-home units with long-term residential leases in the same building, which means faster turnover between occupants — a signed condition report at both ends is worth having on hand more often than in a typical residential-only tower.",
      "Canal-facing units get direct sun and humidity off the water for a large part of the day — worth documenting window seals, balcony flooring, and any canal-side furnishings specifically at move-in.",
      "Business Bay's proximity to Downtown and DIFC means a meaningful share of tenants are corporate relocations on company-leased units — a signed, emailed report gives both the employee and the company a clean record for expense or handover purposes.",
    ],
    faqs: [
      {
        question: "Is a Business Bay inspection different for holiday-home units versus standard leases?",
        answer:
          "The report itself is the same room-by-room format either way. What changes is frequency — holiday-home and short-term units turn over far more often, so it's worth running an inspection at every changeover rather than only at the start and end of a long lease.",
      },
      {
        question: "My company is arranging the lease — can the report go to them as well as me?",
        answer:
          "Yes — the signed report is emailed to everyone involved in the inspection, so if your company's relocation contact needs a copy for their own records, they can be added the same way a landlord or agent would be.",
      },
    ],
  },
];
