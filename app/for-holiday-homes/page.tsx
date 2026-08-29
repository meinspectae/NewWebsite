import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import {
  HOLIDAY_HOMES_HERO,
  HOLIDAY_HOMES_WHY,
  HOLIDAY_HOMES_WHY_FEATURES,
  HOLIDAY_HOMES_CLOSING,
} from "@/lib/constants/forHolidayHomes";

export const metadata: Metadata = buildPageMetadata({
  title: "Check-In / Check-Out Condition Reports for Holiday Homes | MeInspect",
  description: "Fast check-in and check-out condition reports between every guest, built for short-term rental turnover.",
  path: "/for-holiday-homes",
});

export default function ForHolidayHomesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <PageHero {...HOLIDAY_HOMES_HERO} />
        <Section eyebrow={HOLIDAY_HOMES_WHY.eyebrow} title={HOLIDAY_HOMES_WHY.title} tone="white" wide>
          <FeatureGrid items={HOLIDAY_HOMES_WHY_FEATURES} />
        </Section>
        <ClosingCta {...HOLIDAY_HOMES_CLOSING} />
      </main>
      <Footer />
    </>
  );
}
