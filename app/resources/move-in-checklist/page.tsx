import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { GuideHeader } from "@/components/marketing/GuideHeader";
import { ArticleBlocks } from "@/components/marketing/ArticleBlocks";
import { GuideFooter } from "@/components/marketing/GuideFooter";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { MOVE_IN_CHECKLIST_BLOCKS, GUIDE_DISCLAIMER } from "@/lib/constants/guides";

export const metadata: Metadata = buildPageMetadata({
  title: "Move-In Inspection Checklist: The Complete Guide | MeInspect",
  description: "Everything to document before you hand over the keys — room by room, with what counts as good evidence.",
  path: "/resources/move-in-checklist",
});

export default function MoveInChecklistPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <GuideHeader
          breadcrumb="Move-In Inspection Checklist"
          tag="Guide"
          title="Move-In Inspection Checklist: The Complete Guide"
          dek="Whether you're a tenant protecting a deposit or a landlord protecting a property, the move-in inspection is the single most important five minutes of a tenancy. Here's what to actually document."
        />

        <div className="w-full bg-white py-12 lg:py-14">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <ArticleBlocks blocks={MOVE_IN_CHECKLIST_BLOCKS} />
          </div>
        </div>

        <div className="bg-white">
          <GuideFooter
            disclaimer={GUIDE_DISCLAIMER}
            keepReading={[
              { label: "Deposit Dispute Evidence Guide", href: "/resources/deposit-dispute-guide" },
              { label: "Free Report Template", href: "/resources/report-template" },
            ]}
            roleLinks={[
              { label: "For Tenants", href: "/for-tenants" },
              { label: "For Landlords", href: "/for-landlords" },
            ]}
          />
        </div>

        <ClosingCta
          title="Turn this checklist into a signed report."
          body="MeInspect is coming to the App Store and Play Store. Join the waiting list to be first in line."
          ctaLabel="Join the Waiting List"
          ctaHref="/start"
        />
      </main>
      <Footer />
    </>
  );
}
