import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ChecklistSection } from "@/components/marketing/ChecklistSection";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import {
  HOLIDAY_HOMES_HERO,
  HOLIDAY_HOMES_WHY,
  HOLIDAY_HOMES_WHY_FEATURES,
  HOLIDAY_HOMES_CHECKLIST,
  HOLIDAY_HOMES_FAQ,
  HOLIDAY_HOMES_CLOSING,
} from "@/lib/constants/forHolidayHomes";

export const metadata: Metadata = buildPageMetadata({
  title: "Check-In/Check-Out Reports for Holiday Homes | MeInspect",
  description: "Fast check-in and check-out condition reports between every guest, built for short-term rental turnover.",
  path: "/for-holiday-homes",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOLIDAY_HOMES_FAQ.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ForHolidayHomesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <PageHero {...HOLIDAY_HOMES_HERO} />
        <Section eyebrow={HOLIDAY_HOMES_WHY.eyebrow} title={HOLIDAY_HOMES_WHY.title} tone="white" wide>
          <FeatureGrid items={HOLIDAY_HOMES_WHY_FEATURES} />
        </Section>
        <ChecklistSection {...HOLIDAY_HOMES_CHECKLIST} />
        <FaqAccordion eyebrow="Holiday Home FAQ" title="Questions operators ask us." items={HOLIDAY_HOMES_FAQ} />
        <ClosingCta {...HOLIDAY_HOMES_CLOSING} />
      </main>
      <Footer />
    </>
  );
}
