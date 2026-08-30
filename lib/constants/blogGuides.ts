import type { ArticleBlock } from "@/components/marketing/ArticleBlocks";

export interface BlogGuideMeta {
  slug: string;
  tag: string;
  title: string;
  metaTitle?: string; // shorter version for <title>/og:title when the headline itself runs long
  dek: string;
  cardTitle: string;
  cardDescription: string;
  blocks: ArticleBlock[];
}

export const BLOG_GUIDES: BlogGuideMeta[] = [
  {
    slug: "distrust-proof-handover-system",
    tag: "Article",
    title: "Stop Saying \"Trust the Landlord or Tenant.\" Build a System That Survives Distrust",
    metaTitle: "Build a Handover System That Survives Distrust",
    cardTitle: "Stop Saying \"Trust the Landlord or Tenant.\" Build a System That Survives Distrust",
    dek: "Most Dubai deposit disputes aren't caused by bad faith — they're caused by a fuzzy handover process. Here's what a distrust-proof system actually looks like.",
    cardDescription: "Most deposit disputes aren't caused by bad faith — they're caused by a fuzzy process. Here's what a distrust-proof system looks like.",
    blocks: [
      { type: "paragraph", text: "In Dubai, deposits aren't won with goodwill. They're won with evidence." },
      { type: "paragraph", text: "At the Rental Dispute Centre, the strongest cases share the same pattern:" },
      {
        type: "list",
        items: [
          "Signed tenancy contract + Ejari",
          "Dual-signed move-in/move-out reports",
          "Timestamped, GPS-tagged photos",
          "A clear paper trail: emails, letters, invoices",
          "No \"we'll sort it later\" handovers",
        ],
      },
      {
        type: "paragraph",
        text: "The weakest cases? Verbal agreements. Undated photos. Excel checklists without signatures. WhatsApp screenshots with no context.",
      },
      {
        type: "paragraph",
        text: "Most deposit disputes don't happen because someone is acting in bad faith. They happen because the process is fuzzy. No standard checklist. No shared reference. No signatures. No timestamps. Then, 11 months later, both sides are arguing over memories and blurry images. That's not a trust problem. That's a design problem.",
      },
      { type: "heading", text: "What a distrust-proof handover actually looks like" },
      { type: "paragraph", text: "A distrust-proof handover has three layers:" },
      { type: "subheading", text: "1. A shared, room-by-room condition report" },
      { type: "subheading", text: "2. Time, place, and signatures" },
      { type: "paragraph", text: "Timestamp, GPS, and sign-off from both parties." },
      { type: "subheading", text: "3. A simple process everyone follows" },
      {
        type: "list",
        items: [
          "Complete the report before keys are issued",
          "Export a PDF and email it to all parties the same day",
          "Repeat at move-out using the original as the baseline",
          "Attach invoices or receipts to specific line items for any deductions",
        ],
      },
      {
        type: "paragraph",
        text: "In a recalibrating Dubai rental market, this isn't \"nice to have.\" It's a competitive advantage.",
      },
      { type: "heading", text: "The uncomfortable truth" },
      {
        type: "paragraph",
        text: "If your handover process collapses the moment trust breaks down, your process is the risk — not the other party.",
      },
      {
        type: "list",
        items: [
          "Tenants: without a signed, timestamped move-in report, you're handing the landlord a blank cheque for deductions.",
          "Landlords: without proof of pre-existing damage, you'll struggle to justify legitimate claims at the RDC.",
          "Brokers and managers: ad-hoc inspections invite disputes that a simple system could prevent.",
        ],
      },
      {
        type: "paragraph",
        text: "The better question isn't \"can I trust this tenant or landlord?\" It's: do we have a signed, timestamped, photo-rich condition report? Is our workflow clear and repeatable? If this goes to the RDC, will our evidence hold up?",
      },
      {
        type: "paragraph",
        text: "MeInspect was built for exactly this — GPS-tagged, timestamped, signed move-in and move-out reports that both parties can't credibly deny.",
      },
    ],
  },
  {
    slug: "credibility-your-most-valuable-listing",
    tag: "Article",
    title: "In Real Estate, Credibility Is Your Most Valuable Listing",
    cardTitle: "In Real Estate, Credibility Is Your Most Valuable Listing",
    dek: "Buyers, tenants, and landlords have more information than ever. What they're actually looking for is confidence — and that's built with documentation, not promises.",
    cardDescription: "What buyers, tenants, and landlords are really looking for — and it isn't the property listing.",
    blocks: [
      {
        type: "paragraph",
        text: "Every real estate professional has listings. But the one that wins clients isn't on a property portal. It's your reputation.",
      },
      {
        type: "paragraph",
        text: "Today's buyers, tenants, landlords, and investors have access to more information than ever before. They can compare prices, research communities, and read reviews within minutes.",
      },
      {
        type: "paragraph",
        text: "What they're really looking for is confidence — not just in the property, but in the professional representing it.",
      },
      {
        type: "paragraph",
        text: "The best real estate professionals don't build trust with promises. They build it with transparency. They communicate clearly. They document thoroughly. They disclose honestly.",
      },
      {
        type: "paragraph",
        text: "Because professionalism isn't measured by how smoothly things go when everything is perfect. It's measured by how prepared you are when questions arise.",
      },
      { type: "heading", text: "Documentation is a professional standard, not an extra step" },
      {
        type: "paragraph",
        text: "Every respected profession relies on documentation. Doctors keep medical records. Engineers document inspections. Accountants maintain audit trails. Real estate should be no different.",
      },
      {
        type: "paragraph",
        text: "Clear records, transparent communication, and well-defined processes don't just reduce uncertainty — they enhance credibility. And credibility has a compounding effect: clients return, referrals increase, reputations grow.",
      },
      {
        type: "paragraph",
        text: "In an industry where many compete on price or marketing, credibility is one advantage that cannot be copied overnight.",
      },
      {
        type: "paragraph",
        text: "Because in real estate, the most valuable listing you'll ever represent is your own name.",
      },
    ],
  },
  {
    slug: "rental-market-timing-problem",
    tag: "Article",
    title: "The Rental Market Doesn't Have a Trust Problem. It Has a Timing Problem.",
    metaTitle: "The Rental Market's Real Problem Is Timing, Not Trust",
    cardTitle: "The Rental Market Doesn't Have a Trust Problem. It Has a Timing Problem.",
    dek: "Most rental disputes aren't about bad faith — they're about when evidence gets captured. Why 'predictive' documentation changes the outcome, not just 'digital.'",
    cardDescription: "Why 'predictive' documentation changes the outcome of a dispute — not just 'digital' documentation.",
    blocks: [
      {
        type: "paragraph",
        text: "At a recent industry forum on the rental economy, one line stood out more than anything else said from the stage: the rental industry is still almost entirely reactive.",
      },
      {
        type: "paragraph",
        text: "Landlords, tenants, and property managers deal with disputes and damage after they happen, not before. It's a simple observation. But it's easy to miss how deep it runs.",
      },
      {
        type: "paragraph",
        text: "Here's how a typical tenancy actually plays out: a tenant moves in — maybe someone snaps a few photos, maybe not. A year or two passes. The tenant moves out, and now two parties, each with their own memory of \"how things were,\" are trying to reconstruct a shared truth from recollection and whatever's left of a WhatsApp thread.",
      },
      {
        type: "paragraph",
        text: "Whoever has better documentation, or louder conviction, usually wins. That's not a dispute resolution process. That's a coin flip with extra steps.",
      },
      { type: "heading", text: "Why \"predictive\" is the right word, not \"digital\"" },
      {
        type: "paragraph",
        text: "Most proptech pitches itself as digitizing something that used to be on paper. That's not the fix. Scanning a paper checklist into a PDF doesn't change the outcome — it just makes weak evidence look tidier.",
      },
      { type: "paragraph", text: "What actually changes the outcome is timing." },
      {
        type: "paragraph",
        text: "A condition report is only as valuable as how close it was captured to the moment it describes. A report from move-in day is evidence. A recollection on move-out day about what move-in looked like is not.",
      },
      {
        type: "paragraph",
        text: "Every dispute comes down to one question: does a clean, timestamped record exist at the moments that matter, or is someone reconstructing it under pressure after the disagreement has already started? That's what \"predictive instead of reactive\" means. It has nothing to do with predicting the future — it means the facts already exist before anyone needs them.",
      },
      { type: "heading", text: "Where this shows up" },
      {
        type: "list",
        items: [
          "A landlord and tenant disagreeing over a security deposit, with neither side able to prove what the unit looked like at handover",
          "A property manager overseeing dozens of units, where inspection quality depends on which agent happened to do the walkthrough",
          "A rent-financing platform fronting a landlord's annual rent, with no consistent way to verify the asset's condition",
          "An investor who bought off-plan, now renting from abroad, with no visibility into what's happening to their asset",
        ],
      },
      {
        type: "paragraph",
        text: "Different actors, same root cause: nobody captured the truth early enough for it to be useful later.",
      },
      { type: "heading", text: "What we're building at MeInspect" },
      {
        type: "paragraph",
        text: "This is the exact problem MeInspect solves — a standardized, timestamped, photo-documented condition report, generated in minutes, at the moments that actually matter: move-in, move-out, and everything in between.",
      },
      {
        type: "paragraph",
        text: "The goal isn't to win disputes after they happen. It's to make most of them unnecessary, because the facts were already captured before anyone needed to argue about them. That shift, from reactive to predictive, is bigger than any one feature or company.",
      },
    ],
  },
  {
    slug: "missing-layer-proptech-ai-race",
    tag: "Article",
    title: "The Missing Layer in PropTech's AI Race",
    cardTitle: "The Missing Layer in PropTech's AI Race",
    dek: "AI can interpret evidence. It can't replace it. Why the real asset in PropTech isn't the model — it's the timestamped record underneath it.",
    cardDescription: "AI can interpret evidence. It can't replace it. Why the real asset isn't the model.",
    blocks: [
      {
        type: "paragraph",
        text: "AI isn't the most interesting thing happening in PropTech right now. I know that sounds odd, because every product demo, every pitch deck, and every conference panel seems to start with AI.",
      },
      {
        type: "paragraph",
        text: "We've all asked the same questions. Can AI inspect a property? Can it detect damage? Can it write reports? Sure. But we've started asking a different question while building MeInspect: what happens after the AI has answered?",
      },
      { type: "heading", text: "The real asset is the evidence" },
      {
        type: "paragraph",
        text: "Because that's where things get interesting. If someone disputes a report, nobody asks \"which AI model did you use?\" They ask, \"can you prove it?\"",
      },
      {
        type: "paragraph",
        text: "That one question changed how we think about AI. The real asset isn't the AI — it's the evidence. A timestamped inspection photo you can put on paper. A complete audit trail. Something anyone can review, not just trust.",
      },
      {
        type: "paragraph",
        text: "AI can interpret evidence. It can't replace it. In fact, better AI only makes good evidence more valuable — a property photo captured today can be re-analyzed by much better AI five years from now. But if the evidence was never captured, no AI will ever recreate it.",
      },
      {
        type: "paragraph",
        text: "That's why we don't think AI should make inspection decisions. It should make inspection decisions easier: draft reports, highlight differences, surface things a human might miss. Then let people do what they're still uniquely responsible for — use judgment, own the decision, and stand behind it.",
      },
      {
        type: "paragraph",
        text: "Maybe that's where PropTech is actually heading. Not an AI Economy, but an Evidence Economy — where the winners aren't the companies with the smartest AI, but the ones with the most trustworthy evidence.",
      },
    ],
  },
  {
    slug: "real-estate-verisign-moment",
    tag: "Article",
    title: "Beyond the Handshake: Why Real Estate Needs Its VeriSign Moment",
    metaTitle: "Why Real Estate Needs Its VeriSign Moment",
    cardTitle: "Beyond the Handshake: Why Real Estate Needs Its VeriSign Moment",
    dek: "E-commerce got a trust signal with the SSL padlock. Banking got one with two-factor authentication. Real estate is still running on handshakes and blurry photos.",
    cardDescription: "E-commerce got the SSL padlock. Banking got 2FA. Real estate is still running on handshakes.",
    blocks: [
      {
        type: "paragraph",
        text: "In the early days of e-commerce, shopping online felt like a gamble. You entered your credit card number into a blank web form, crossed your fingers, and hoped your details wouldn't disappear into a digital abyss.",
      },
      {
        type: "paragraph",
        text: "Then came the VeriSign SSL seal — that little green padlock in the browser bar. It didn't just encrypt data; it changed human behavior overnight. It signaled to millions of anxious users: this connection is verified, you are safe here. Years later, financial institutions introduced two-factor authentication, turning digital security into a default expectation rather than an optional feature.",
      },
      { type: "paragraph", text: "Today, real estate stands at the exact same crossroads." },
      {
        type: "paragraph",
        text: "We sign multi-million dirham leases, transfer substantial security deposits, and hand over keys to physical assets worth vast sums — yet the underlying system of trust relies on blurry smartphone photos, vague WhatsApp threads, and subjective handshakes.",
      },
      { type: "heading", text: "The death of informal trust" },
      {
        type: "paragraph",
        text: "For decades, property transactions operated on an outdated assumption: good faith. A landlord trusted a tenant to respect the property; a tenant trusted a landlord not to arbitrarily keep their deposit; an investor trusted an operator to maintain physical equity. But when disputes arise — and they inevitably do — informal trust collapses into expensive, frustrating \"he-said, she-said\" battles.",
      },
      {
        type: "paragraph",
        text: "The problem isn't a lack of goodwill. The problem is a lack of verifiable proof. Just as you wouldn't log into your bank account over an unencrypted, public Wi-Fi network, you shouldn't hand over or receive keys to a physical asset without an immutable, verified paper trail.",
      },
      {
        type: "paragraph",
        text: "It's time real estate got its own security protocol. Enter the MeInspected Badge.",
      },
      { type: "heading", text: "What the MeInspected Badge signals" },
      {
        type: "paragraph",
        text: "The MeInspected mark isn't just a stamp on a listing — it functions as an active trust verification layer across the entire property lifecycle. When a property listing, rental agreement, or condition report displays the badge, it communicates three things to everyone involved:",
      },
      { type: "subheading", text: "1. Transparency is mandatory, not optional" },
      {
        type: "paragraph",
        text: "Every corner, fixture, and micro-defect is documented in high resolution before handover.",
      },
      { type: "subheading", text: "2. The data is immutable" },
      {
        type: "paragraph",
        text: "Like two-factor authentication protecting an account, a proper record can't be backdated, selectively edited, or quietly altered when a dispute flares up six months later.",
      },
      { type: "subheading", text: "3. Friction is eliminated before it starts" },
      {
        type: "paragraph",
        text: "When both parties know the baseline condition is indisputably locked in, anxiety drops to zero — tenants don't worry about unjust deposit forfeitures, landlords don't worry about uncompensated damage.",
      },
      { type: "heading", text: "From administrative chore to competitive advantage" },
      {
        type: "paragraph",
        text: "For property operators, holiday home managers, and real estate professionals, displaying the MeInspected Badge shifts property verification from a back-office burden into a forward-facing marketing asset.",
      },
      {
        type: "list",
        items: [
          "For landlords and investors: it acts as an insurance policy on equity, proving every asset in the portfolio is systematically tracked and preserved.",
          "For property managers: it serves as a seal of operational excellence — listings displaying the badge instantly stand out to premium, conscientious tenants.",
          "For renters: it provides immediate psychological safety, knowing their security deposit is protected by objective facts rather than subjective opinions.",
        ],
      },
      {
        type: "paragraph",
        text: "We no longer accept unencrypted websites, and we no longer accept logins without two-factor security. The era of taking key handovers on blind faith is officially over. The MeInspected Badge represents the new standard of physical asset integrity: documented, verified, protected. Because in high-value real estate, trust shouldn't be a gamble — it should be built in by default.",
      },
    ],
  },
  {
    slug: "premium-brand-handover-gap",
    tag: "Article",
    title: "You Spent Millions Building Your Real Estate Brand. How Does Your Handover Process Look?",
    metaTitle: "Does Your Handover Process Match Your Brand?",
    cardTitle: "You Spent Millions Building Your Real Estate Brand. How Does Your Handover Process Look?",
    dek: "Sleek offices, elite marketing, seamless client acquisition — and then a dog-eared paper clipboard at the key handover. Why operational execution has to match the brand.",
    cardDescription: "Sleek offices, elite marketing — and then a dog-eared paper clipboard at the key handover.",
    blocks: [
      {
        type: "paragraph",
        text: "In high-end real estate, brand perception is built on detail. Brokerages and property management firms invest heavily in sleek visual identities, state-of-the-art offices, elite marketing campaigns, and seamless client acquisition channels. Every touchpoint is designed to signal prestige, authority, and trust.",
      },
      {
        type: "paragraph",
        text: "Yet during one of the most critical stages of the client journey — the key handover — a surprising number of premium agencies revert to legacy habits.",
      },
      {
        type: "paragraph",
        text: "When a client receives the keys to a high-value property, their physical onboarding is often accompanied by a dog-eared paper clipboard, a carbon-copy checklist, or an email containing a link to dozens of unorganized, low-resolution camera-roll photos.",
      },
      {
        type: "paragraph",
        text: "The key handover is the final touchpoint of the acquisition phase, and the foundation of the long-term management relationship. If operational execution during handover doesn't match marketing standards, trust degrades before the client even settles in.",
      },
      { type: "heading", text: "The hidden gap in premium real estate operations" },
      {
        type: "paragraph",
        text: "For real estate leaders, the challenge isn't a lack of effort — it's a lack of standardized operational tooling. When property handovers rely on informal methods:",
      },
      {
        type: "list",
        items: [
          "Brand consistency suffers: individual agents use different methods to document condition baselines, leading to fragmented output across a portfolio.",
          "Administrative friction increases: teams waste hours organizing camera-roll photos, typing up manual summaries, and managing follow-up back-and-forth.",
          "Client confidence wanes: clients paying premium fees expect digital, modern interactions at every stage, not paper forms or unorganized WhatsApp message dumps.",
        ],
      },
      {
        type: "paragraph",
        text: "To maintain a luxury brand promise, physical operations must align seamlessly with modern software standards.",
      },
      { type: "heading", text: "Modernizing the handover experience" },
      {
        type: "paragraph",
        text: "MeInspect was built to close the gap between premium agency positioning and day-to-day property operations, replacing chaotic, analog condition checks with a standardized digital reporting system.",
      },
      { type: "subheading", text: "1. A polished on-site digital walkthrough" },
      {
        type: "paragraph",
        text: "Instead of paper forms or random phone pictures, property managers conduct structured walkthroughs directly from a mobile device or tablet — rooms, fixtures, and finishes audited systematically, with complete consistency across the whole team.",
      },
      { type: "subheading", text: "2. High-resolution, context-backed proof" },
      {
        type: "paragraph",
        text: "Every photo taken within the platform is pinned directly to a specific room, item, and condition rating, creating a clear visual baseline that eliminates ambiguity for both asset owners and incoming clients.",
      },
      { type: "subheading", text: "3. Frictionless digital sign-off" },
      {
        type: "paragraph",
        text: "Once the walkthrough is complete, both parties review the transparent report on-site and sign digitally on the device — no printing, no scanning, and zero administrative delay.",
      },
      { type: "subheading", text: "4. Custom branded institutional reports" },
      {
        type: "paragraph",
        text: "The moment the walkthrough ends, a clean, structured PDF report carrying the agency's branding is generated automatically — an official, audit-ready document in the client's inbox before the property manager even steps out the door.",
      },
      { type: "heading", text: "Operational excellence as a competitive advantage" },
      {
        type: "paragraph",
        text: "In a crowded real estate market, standing out requires demonstrating quality at every stage of the asset lifecycle. Replacing outdated handover habits with a structured digital workflow doesn't just protect property values — it shows clients, landlords, and investors that operational standards match the premium reputation the brand has already built.",
      },
    ],
  },
  {
    slug: "digital-handovers-replacing-paper-checklists",
    tag: "Article",
    title: "Why Digital Handovers Are Replacing Paper Inspection Checklists in Modern Real Estate",
    metaTitle: "Why Digital Handovers Are Replacing Paper Checklists",
    cardTitle: "Why Digital Handovers Are Replacing Paper Inspection Checklists in Modern Real Estate",
    dek: "The clipboard, the carbonless copy form, the smudged ink — paper checklists are becoming a liability. Here's the case for digital condition reports.",
    cardDescription: "The clipboard and carbonless copy form are becoming a liability. Here's the case for going digital.",
    blocks: [
      {
        type: "paragraph",
        text: "For decades, the property inspection process has relied on a familiar, if frustrating, ritual: the clipboard, the pen, and the multi-part carbonless copy form. Property managers have marched through units, squinting at light fixtures and checking off boxes that say \"good condition,\" hoping the ink doesn't smudge.",
      },
      {
        type: "paragraph",
        text: "But the industry is reaching a tipping point. The traditional paper checklist, once the standard for move-in and move-out handovers, is quickly becoming a liability in modern real estate management.",
      },
      {
        type: "paragraph",
        text: "The shift isn't about \"going paperless\" for its own sake — it's driven by urgent operational demands: the need for speed, irrefutable documentation, and a seamless resident experience.",
      },
      { type: "heading", text: "The fatal flaws of paper handovers" },
      {
        type: "paragraph",
        text: "When you rely on physical checklists, your asset management strategy has built-in weak points. Paper systems suffer from three primary failures:",
      },
      { type: "subheading", text: "1. The subjectivity gap" },
      {
        type: "paragraph",
        text: "A handwritten note saying \"carpet stained\" is almost worthless six months later. How big was the stain? Where exactly was it? Was it pre-existing? Paper cannot capture nuance — and subjectivity is the root cause of most security deposit disputes.",
      },
      { type: "subheading", text: "2. Operational drag" },
      {
        type: "paragraph",
        text: "A paper report must be physically transported, manually reviewed, often typed into another system, and then filed. In a high-volume portfolio or during peak turnover seasons, this creates administrative bottlenecks that delay unit readiness and lease execution.",
      },
      { type: "subheading", text: "3. Vulnerability" },
      {
        type: "paragraph",
        text: "Paper is easily lost, damaged by spills, or simply misfiled. If a dispute arises two years into a tenancy and the original move-in report can't be produced, there's zero leverage to protect the asset.",
      },
      { type: "heading", text: "How the digital handover solves the problem" },
      {
        type: "paragraph",
        text: "Modern real estate demands speed and standardized data. Digital inspection platforms turn a mundane checklist into a genuine asset protection tool, built around three pillars:",
      },
      {
        type: "paragraph",
        text: "Irrefutable, rich documentation. Instead of vague checkmarks, digital reports mandate inline, high-resolution photography for every room — automatically timestamped and geotagged. There's no debate about the condition of the floors when both parties are looking at a high-definition photo taken minutes ago.",
      },
      {
        type: "paragraph",
        text: "Standardization and rapid turnarounds. Digital interfaces force a structured, standardized workflow, ensuring nothing is missed, with the report generated instantly upon completion — eliminating hours of data entry and physical filing.",
      },
      {
        type: "paragraph",
        text: "The power of the digital signature. Both the manager and the resident can review the comprehensive, photo-backed report on a mobile device and apply a legally binding digital signature immediately, creating a secure, finalized document automatically emailed to all parties and stored securely in the cloud.",
      },
      { type: "heading", text: "Data-driven property management" },
      {
        type: "paragraph",
        text: "The transition from paper to digital handovers isn't merely a technical upgrade — it's a fundamental shift toward data-driven, transparent, and professional property management. Retiring the clipboard is one of the easiest operational wins a modern leasing team can make, immediately protecting revenue, empowering staff, and elevating the resident experience.",
      },
    ],
  },
  {
    slug: "dubai-deposit-refund-timeline",
    tag: "Article",
    title: "How Long Does a Landlord Have to Refund Your Deposit in Dubai?",
    metaTitle: "Deposit Refund Timelines in Dubai",
    cardTitle: "How Long Does a Landlord Have to Refund Your Deposit in Dubai?",
    dek: "What UAE tenancy practice actually says about deposit refund timing, and what to do if a landlord goes quiet after move-out.",
    cardDescription: "What UAE tenancy practice actually says about deposit refund timing, and what to do if a landlord goes quiet.",
    blocks: [
      {
        type: "paragraph",
        text: "Most tenancy contracts in Dubai don't specify an exact number of days for a deposit refund, which is exactly why disputes happen — \"soon\" means something different to a landlord than it does to a tenant who just paid for a new place.",
      },
      { type: "heading", text: "What to do at move-out" },
      {
        type: "paragraph",
        text: "Request the refund in writing (email, not just a phone call) on the day you hand back the keys, and reference your signed move-out condition report if you have one. A dated, signed record removes the most common excuse for delay: \"we're still assessing the damage.\"",
      },
      { type: "heading", text: "If it drags on" },
      {
        type: "paragraph",
        text: "Follow up in writing with a clear deadline, and keep every message in one thread. If there's still no resolution, the Rental Dispute Centre is the next step — and a signed, timestamped condition report from both move-in and move-out is the single strongest piece of evidence you can bring.",
      },
    ],
  },
];
