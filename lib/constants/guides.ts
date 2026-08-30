import type { ArticleBlock } from "@/components/marketing/ArticleBlocks";

export interface GuideMeta {
  slug: string;
  tag: string;
  title: string;
  dek: string;
  cardTitle: string;
  cardDescription: string;
}

export const RESOURCE_GUIDES: GuideMeta[] = [
  {
    slug: "move-in-checklist",
    tag: "Guide",
    title: "Move-In Inspection Checklist: The Complete Guide",
    cardTitle: "Move-In Inspection Checklist: The Complete Guide",
    dek: "Whether you're a tenant protecting a deposit or a landlord protecting a property, the move-in inspection is the single most important five minutes of a tenancy. Here's what to actually document.",
    cardDescription: "Everything to document before you hand over the keys — room by room, with what counts as good evidence.",
  },
  {
    slug: "deposit-dispute-guide",
    tag: "Guide",
    title: "How to Win a Deposit Dispute: Evidence That Works",
    cardTitle: "How to Win a Deposit Dispute: Evidence That Works",
    dek: "Most deposit disputes aren't really about the money — they're about who can prove what. Here's what actually holds up, and what doesn't.",
    cardDescription: "What actually convinces a landlord, tenant, or adjudicator — and the evidence that doesn't.",
  },
  {
    slug: "report-template",
    tag: "Free Template",
    title: "Free Property Condition Report Template",
    cardTitle: "Free Property Condition Report Template",
    dek: "A simple, room-by-room template you can print or fill in digitally for your own move-in or move-out inspection — free to download, no account needed.",
    cardDescription: "A downloadable, room-by-room template you can use for your own move-in or move-out inspection.",
  },
  {
    slug: "move-out-checklist",
    tag: "Guide",
    title: "Move-Out Inspection Checklist: How to Protect Your Deposit",
    cardTitle: "Move-Out Inspection Checklist: How to Protect Your Deposit",
    dek: "The move-out inspection is where deposits are actually won or lost. Here's exactly what to document, and why comparing against your move-in report is what makes the difference.",
    cardDescription: "What to document at move-out, and why comparing it against your move-in report is what actually protects your deposit.",
  },
];

export const MOVE_IN_CHECKLIST_BLOCKS: ArticleBlock[] = [
  {
    type: "heading",
    text: "Why the move-in inspection matters more than people think",
  },
  {
    type: "paragraph",
    text: "Almost every rental dispute comes down to one question: was this already here? A cracked tile, a stained carpet, a scratched worktop — if nobody can say for certain whether it existed before the tenant moved in, the argument usually goes to whoever has better evidence. A thorough move-in inspection is how you make sure that's you.",
  },
  { type: "heading", text: "The room-by-room checklist" },
  { type: "subheading", text: "Living areas and bedrooms" },
  {
    type: "list",
    items: [
      "Walls and ceilings — marks, cracks, damp patches, paint condition",
      "Flooring — scratches, stains, worn patches, loose tiles or boards",
      "Windows and doors — do they open, close, and lock properly; any cracked glass",
      "Built-in storage — condition of doors, shelves, and handles",
      "Light fixtures and switches — all working, any visible damage",
    ],
  },
  { type: "subheading", text: "Kitchen" },
  {
    type: "list",
    items: [
      "Every appliance — existing scratches, dents, or missing parts, and whether it turns on",
      "Countertops and cabinets — chips, stains, water damage under the sink",
      "Plumbing — taps, drainage, any leaks",
    ],
  },
  { type: "subheading", text: "Bathrooms" },
  {
    type: "list",
    items: [
      "Grout and sealant condition",
      "Drainage speed and any signs of past leaks",
      "Fixtures — toilet, shower, taps, extractor fan",
    ],
  },
  { type: "subheading", text: "Beyond the rooms themselves" },
  {
    type: "list",
    items: [
      "Keys, fobs, and access cards — exact count and condition",
      "Utility meter readings on the day you take possession",
      "Furniture and fittings, if the property is furnished",
      "Anything outside — balconies, gardens, parking spaces, storage units",
    ],
  },
  { type: "heading", text: "What makes evidence actually hold up" },
  {
    type: "paragraph",
    text: "A checklist alone isn't enough — the evidence behind it is what settles disputes. Three things make the difference:",
  },
  {
    type: "list",
    items: [
      "A timestamp. Evidence that can't be dated is easy to dismiss. Photos need a clear, verifiable date.",
      "Location data. GPS-tagging ties a photo to the actual property, which matters if a dispute ever needs to be taken seriously by a third party.",
      "Agreement from all sides. A tenant-only file is weaker than a report every party has actually reviewed and signed. Once a landlord, tenant, and agent all sign the same document, there's very little left to argue about.",
    ],
  },
  {
    type: "paragraph",
    text: "MeInspect builds all three into the process automatically: every photo is GPS-tagged and timestamped the moment it's taken, and the report isn't complete until tenant, landlord, and agent have all signed off.",
  },
  { type: "heading", text: "Move-in vs. move-out: keep the same format" },
  {
    type: "paragraph",
    text: "The real value of a move-in inspection shows up at move-out. If the two reports use the same rooms, the same rating scale, and the same level of detail, comparing them takes minutes. If they don't, you're back to arguing from memory.",
  },
];

export const DEPOSIT_DISPUTE_BLOCKS: ArticleBlock[] = [
  { type: "heading", text: "What deposit disputes actually come down to" },
  {
    type: "paragraph",
    text: "Whether it's an informal conversation between landlord and tenant, or a formal claim in front of a tenancy tribunal or deposit scheme adjudicator, the question is almost always the same: can you show what condition the property was actually in, and when?",
  },
  { type: "heading", text: "Evidence that works" },
  {
    type: "list",
    items: [
      "Dated, location-tagged photos from move-in, ideally of the exact same angles you'd photograph at move-out.",
      "A signed condition report that both parties reviewed and agreed to at the time — not something written from memory months later.",
      "Room-by-room condition ratings that make it obvious, at a glance, what state each area was in.",
      "Repair invoices or receipts, if a landlord is claiming for a specific repair cost.",
      "Communication records — emails or messages about reported issues during the tenancy.",
    ],
  },
  { type: "heading", text: "Evidence that falls flat" },
  {
    type: "list",
    items: [
      "Undated photos. A photo with no way to verify when it was taken proves very little.",
      "Memory alone. \"I'm sure it wasn't like that\" doesn't hold up against a dated, signed record on the other side.",
      "One-sided documentation. A file only the landlord has seen — or only the tenant has seen — is weaker than one both parties actually signed off on.",
      "Photos taken well after the fact. If a photo can't be tied to the actual move-in date, it doesn't answer the \"was this already here\" question.",
    ],
  },
  { type: "heading", text: "Fair wear and tear vs. damage" },
  {
    type: "paragraph",
    text: "Almost every dispute process — wherever you are in the world — draws a line between normal wear and tear (faded paint, minor scuffs, worn carpet from ordinary use) and genuine damage (holes in walls, burns, broken fixtures, unauthorized alterations). The length of the tenancy generally matters too: a five-year tenant is reasonably expected to have caused more wear than someone who stayed six months. Photographic evidence from move-in makes this distinction concrete instead of a matter of opinion.",
  },
  { type: "heading", text: "The three-party sign-off advantage" },
  {
    type: "paragraph",
    text: "The strongest possible position in a dispute is a report that the tenant, the landlord, and (where relevant) the agent all reviewed and digitally signed at move-in. Once all three parties have agreed to the same facts on the same document, there's very little left to dispute later — which is exactly why MeInspect makes three-party sign-off part of every report.",
  },
  {
    type: "paragraph",
    text: "If you're heading into a dispute now and don't have move-in evidence, don't panic — gather whatever you do have (messages, receipts, any photos) and be straightforward about what you can and can't prove. Going forward, a documented move-in inspection removes this problem entirely.",
  },
];

export const REPORT_TEMPLATE_INTRO: ArticleBlock[] = [
  { type: "heading", text: "What's in the template" },
  {
    type: "list",
    items: [
      "Property, tenant, landlord and agent details",
      "A room-by-room checklist covering walls, floors, fixtures, and furniture",
      "A four-point condition rating scale (Very Good / Good / Fair / Damaged)",
      "A keys, access, and utility meter log",
      "A sign-off page for tenant, landlord, and agent signatures",
    ],
  },
  { type: "heading", text: "A paper template is a good start — a signed digital record is stronger" },
  {
    type: "paragraph",
    text: "This template works well for a quick, informal walkthrough. But paper forms are easy to lose, hard to prove weren't altered afterward, and don't carry a timestamp or GPS location. If you want a report that holds up in an actual dispute, MeInspect turns the same checklist into GPS-tagged photos, automatic timestamps, and digital three-party sign-off — all stored securely in the cloud.",
  },
];

export const MOVE_OUT_CHECKLIST_BLOCKS: ArticleBlock[] = [
  {
    type: "paragraph",
    text: "The move-in inspection sets the baseline. The move-out inspection is where that baseline actually pays off — or where the gap in your documentation costs you. Most disputes don't happen because someone forgot the move-in report entirely. They happen because the move-out inspection wasn't done the same way, so the two records can't be properly compared.",
  },
  { type: "heading", text: "Use the same format as your move-in report" },
  {
    type: "paragraph",
    text: "This is the single most important rule of a move-out inspection: it needs to mirror your move-in report room for room, item for item. If your move-in report checked flooring, fixtures, and appliances in the kitchen, your move-out report needs to check the exact same things in the exact same order. A move-out inspection that isn't structured the same way as the move-in one is much weaker evidence — there's nothing clean to compare it against.",
  },
  { type: "heading", text: "The room-by-room checklist" },
  { type: "subheading", text: "Living areas and bedrooms" },
  {
    type: "list",
    items: [
      "Walls and ceilings — any new marks, holes, or damage since move-in",
      "Flooring — new scratches, stains, or damage beyond normal wear",
      "Windows and doors — still opening, closing, and locking properly",
      "Built-in storage and light fixtures — condition compared to move-in photos",
    ],
  },
  { type: "subheading", text: "Kitchen" },
  {
    type: "list",
    items: [
      "Every appliance — still functioning, no new damage",
      "Countertops and cabinets — new chips, stains, or water damage",
      "Plumbing — any leaks that weren't there at move-in",
    ],
  },
  { type: "subheading", text: "Bathrooms" },
  {
    type: "list",
    items: [
      "Grout and sealant — new deterioration since move-in",
      "Fixtures — toilet, shower, taps, extractor fan all still working",
    ],
  },
  { type: "subheading", text: "Beyond the rooms" },
  {
    type: "list",
    items: [
      "Keys, fobs, and access cards — full count returned",
      "Utility meter readings on the day you hand back the keys",
      "Furniture and fittings, if the property was furnished, matched against the move-in inventory",
    ],
  },
  { type: "heading", text: "What separates normal wear from damage" },
  {
    type: "paragraph",
    text: "This is where most disputes actually happen. Faded paint, minor scuff marks from normal foot traffic, and small nail holes from hanging pictures are generally accepted as normal wear and tear in most tenancies. Cracked tiles, burns, stains that won't clean, and broken fixtures are typically treated as damage. When in doubt, photograph it clearly and let the comparison against your move-in report speak for itself rather than arguing definitions in the moment.",
  },
  { type: "heading", text: "Do the walkthrough together, if you can" },
  {
    type: "paragraph",
    text: "A move-out inspection completed with both tenant and landlord present, reviewed together, and signed by both on the spot resolves far more disagreements than a report done alone and emailed afterward. If a physical walkthrough together isn't possible, share the completed report immediately and ask for written acknowledgment rather than letting it sit unanswered.",
  },
  {
    type: "paragraph",
    text: "MeInspect builds the comparison in automatically — every move-out inspection can be checked against the original move-in report, room by room, so there's nothing left to reconstruct from memory.",
  },
];

export const GUIDE_DISCLAIMER =
  "This guide is general information, not legal advice. Deposit and tenancy rules vary by country, state, or province — see our location guides for specifics, or consult a local advisor for your situation.";

export const DEPOSIT_DISPUTE_DISCLAIMER =
  "This guide is general information, not legal advice. Dispute processes and what counts as valid evidence vary by country and by scheme — see our location guides, or speak to a local tenancy advisor, legal aid service, or solicitor for advice on your specific situation.";

export const REPORT_TEMPLATE_DISCLAIMER =
  "This template is general guidance, not legal advice. Deposit and tenancy documentation requirements vary by country, state, or province — see our location guides for specifics.";
