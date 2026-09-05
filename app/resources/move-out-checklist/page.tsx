import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { GuideHeader } from "@/components/marketing/GuideHeader";
import { ArticleBlocks } from "@/components/marketing/ArticleBlocks";
import { GuideFooter } from "@/components/marketing/GuideFooter";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { MOVE_OUT_CHECKLIST_BLOCKS, GUIDE_DISCLAIMER } from "@/lib/constants/guides";

export const metadata: Metadata = buildPageMetadata({
  title: "Move-Out Checklist: Protect Your Deposit | MeInspect",
  description:
    "What to document at move-out, and why comparing it against your move-in report is what actually protects your deposit.",
  path: "/resources/move-out-checklist",
});

export default function MoveOutChecklistPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <GuideHeader
          breadcrumb="Move-Out Inspection Checklist"
          tag="Guide"
          title="Move-Out Inspection Checklist: How to Protect Your Deposit"
          dek="The move-out inspection is where deposits are actually won or lost. Here's exactly what to document, and why comparing against your move-in report is what makes the difference."
        />

        <div className="w-full bg-white py-12 lg:py-14">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <ArticleBlocks blocks={MOVE_OUT_CHECKLIST_BLOCKS} />
          </div>
        </div>

        <div className="bg-white">
          <GuideFooter
            disclaimer={GUIDE_DISCLAIMER}
            keepReading={[
              { label: "Move-In Inspection Checklist", href: "/resources/move-in-checklist" },
              { label: "Deposit Dispute Evidence Guide", href: "/resources/deposit-dispute-guide" },
            ]}
            roleLinks={[
              { label: "For Tenants", href: "/for-tenants" },
              { label: "For Landlords", href: "/for-landlords" },
            ]}
          />
        </div>

        <ClosingCta
          title="Turn this checklist into a signed report."
          body="Download MeInspect free on the App Store or Google Play and start your first report today."
        />
      </main>
      <Footer />
    </>
  );
}
