import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { AGENTS_HERO, AGENTS_WHY, AGENTS_WHY_FEATURES, AGENTS_FAQ, AGENTS_CLOSING } from "@/lib/constants/forAgents";

export const metadata: Metadata = buildPageMetadata({
  title: "Property Condition Reports for Agents | MeInspect",
  description:
    "Standardise every handover across your portfolio — the same photo record, the same rating scale, the same three-party sign-off, every time.",
  path: "/for-agents",
});

export default function ForAgentsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <PageHero {...AGENTS_HERO} />
        <Section eyebrow={AGENTS_WHY.eyebrow} title={AGENTS_WHY.title} tone="white" wide>
          <FeatureGrid items={AGENTS_WHY_FEATURES} />
        </Section>
        <FaqAccordion eyebrow="Agent & Property Manager FAQ" title="Questions agencies ask us." items={AGENTS_FAQ} />
        <ClosingCta {...AGENTS_CLOSING} />
      </main>
      <Footer />
    </>
  );
}
