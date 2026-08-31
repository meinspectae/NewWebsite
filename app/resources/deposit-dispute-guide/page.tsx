import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { GuideHeader } from "@/components/marketing/GuideHeader";
import { ArticleBlocks } from "@/components/marketing/ArticleBlocks";
import { GuideFooter } from "@/components/marketing/GuideFooter";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { DEPOSIT_DISPUTE_BLOCKS, DEPOSIT_DISPUTE_DISCLAIMER } from "@/lib/constants/guides";

export const metadata: Metadata = buildPageMetadata({
  title: "How to Win a Deposit Dispute: Evidence That Works | MeInspect",
  description: "What actually convinces a landlord, tenant, or adjudicator — and the evidence that doesn't.",
  path: "/resources/deposit-dispute-guide",
});

export default function DepositDisputeGuidePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <GuideHeader
          breadcrumb="Deposit Dispute Evidence Guide"
          tag="Guide"
          title="How to Win a Deposit Dispute: Evidence That Works"
          dek="Most deposit disputes aren't really about the money — they're about who can prove what. Here's what actually holds up, and what doesn't."
        />

        <div className="w-full bg-white py-12 lg:py-14">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <ArticleBlocks blocks={DEPOSIT_DISPUTE_BLOCKS} />
          </div>
        </div>

        <div className="bg-white">
          <GuideFooter
            disclaimer={DEPOSIT_DISPUTE_DISCLAIMER}
            keepReading={[
              { label: "Move-In Checklist Guide", href: "/resources/move-in-checklist" },
              { label: "Free Report Template", href: "/resources/report-template" },
            ]}
            roleLinks={[
              { label: "For Tenants", href: "/for-tenants" },
              { label: "For Landlords", href: "/for-landlords" },
            ]}
          />
        </div>

        <ClosingCta
          title="Build dispute-ready evidence from day one."
          body="Download MeInspect free on the App Store or Google Play and start your first report today."
        />
      </main>
      <Footer />
    </>
  );
}
