import type { Metadata } from "next";
import { UserCheck } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { ChecklistSection } from "@/components/marketing/ChecklistSection";
import { ClosingCta } from "@/components/marketing/ClosingCta";

export const metadata: Metadata = {
  title: "Hire a MeInspector | MeInspect",
  description: "A trained Meinspector visits and does the walkthrough for you — ideal for landlords, agencies & property managers.",
};

const FEATURES = [
  "A trained Meinspector visits and does the walkthrough for you",
  "Full room-by-room photo documentation",
  "GPS coordinates & timestamps on every photo",
  "Four-point condition rating per room and item",
  "Three-party digital signatures collected on-site",
  "Professional PDF — Ejari-referenced",
  "Ideal for landlords, agencies & property managers",
];

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <PageHero
          breadcrumb="Hire a MeInspector"
          kicker="Hire a MeInspector"
          title="Let a Trained Professional Handle the Walkthrough"
          description="Perfect if you'd rather have a professional handle the entire inspection for you. Contact for pricing — we'll match you with a certified Meinspector in your area."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
          secondaryCta={{ label: "See Full Pricing", href: "/pricing" }}
        />

        <ChecklistSection eyebrow="What's Included" title="Everything the DIY plan includes, done for you." items={FEATURES} />

        <div className="mx-auto flex max-w-[860px] items-center gap-3 px-6 pb-14 lg:px-10">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-blue/10">
            <UserCheck size={17} className="text-primary-blue" strokeWidth={2} />
          </span>
          <p className="text-[14px] text-grey">
            Want to become a Meinspector instead of hiring one? See the{" "}
            <a href="/careers/meinspector" className="font-semibold text-primary-blue hover:text-deep-blue">
              application process
            </a>
            .
          </p>
        </div>

        <ClosingCta
          title="Ready to book a professional inspection?"
          body="Tell us about your property and we'll get back to you with pricing and availability."
          ctaLabel="Contact Us"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
