import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ChecklistSection } from "@/components/marketing/ChecklistSection";
import { InfoBand } from "@/components/marketing/InfoBand";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import {
  TENANTS_HERO,
  TENANTS_WHY,
  TENANTS_WHY_FEATURES,
  TENANTS_CHECKLIST,
  TENANTS_RIGHTS,
  TENANTS_FAQ,
  TENANTS_CLOSING,
} from "@/lib/constants/forTenants";

export const metadata: Metadata = buildPageMetadata({
  title: "Property Condition Reports for Tenants — Protect Your Deposit | MeInspect",
  description:
    "A tenant move-in checklist with GPS-tagged, timestamped photos — the single best thing you can do to protect your deposit.",
  path: "/for-tenants",
});

export default function ForTenantsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <PageHero {...TENANTS_HERO} />
        <Section eyebrow={TENANTS_WHY.eyebrow} title={TENANTS_WHY.title} lead={TENANTS_WHY.lead} tone="white" wide>
          <FeatureGrid items={TENANTS_WHY_FEATURES} />
        </Section>
        <ChecklistSection {...TENANTS_CHECKLIST} />
        <InfoBand {...TENANTS_RIGHTS} />
        <FaqAccordion eyebrow="Tenant FAQ" title="Questions tenants ask us." items={TENANTS_FAQ} />
        <ClosingCta {...TENANTS_CLOSING} />
      </main>
      <Footer />
    </>
  );
}
