import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ChecklistSection } from "@/components/marketing/ChecklistSection";
import { CrossLinkRow } from "@/components/marketing/CrossLinkRow";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import {
  LANDLORDS_HERO,
  LANDLORDS_WHY,
  LANDLORDS_WHY_FEATURES,
  LANDLORDS_CHECKLIST,
  LANDLORDS_CROSS_LINK,
  LANDLORDS_FAQ,
  LANDLORDS_CLOSING,
} from "@/lib/constants/forLandlords";

export const metadata: Metadata = {
  title: "Landlord Inspection Checklist & Property Condition Reports | MeInspect",
  description:
    "A landlord inspection checklist with GPS-tagged photos and three-party sign-off — turn disputes into a settled fact before the tenant even moves in.",
};

export default function ForLandlordsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <PageHero {...LANDLORDS_HERO} />
        <Section eyebrow={LANDLORDS_WHY.eyebrow} title={LANDLORDS_WHY.title} lead={LANDLORDS_WHY.lead} tone="white" wide>
          <FeatureGrid items={LANDLORDS_WHY_FEATURES} />
        </Section>
        <ChecklistSection {...LANDLORDS_CHECKLIST} />
        <CrossLinkRow {...LANDLORDS_CROSS_LINK} />
        <FaqAccordion eyebrow="Landlord FAQ" title="Questions landlords ask us." items={LANDLORDS_FAQ} />
        <ClosingCta {...LANDLORDS_CLOSING} />
      </main>
      <Footer />
    </>
  );
}
