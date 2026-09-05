import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { GuideHeader } from "@/components/marketing/GuideHeader";
import { ArticleBlocks } from "@/components/marketing/ArticleBlocks";
import { GuideFooter } from "@/components/marketing/GuideFooter";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { REPORT_TEMPLATE_INTRO, REPORT_TEMPLATE_DISCLAIMER } from "@/lib/constants/guides";

export const metadata: Metadata = buildPageMetadata({
  title: "Free Property Condition Report Template | MeInspect",
  description: "A downloadable, room-by-room template you can use for your own move-in or move-out inspection.",
  path: "/resources/report-template",
});

export default function ReportTemplatePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <GuideHeader
          breadcrumb="Property Condition Report Template"
          tag="Free Template"
          title="Free Property Condition Report Template"
          dek="A simple, room-by-room template you can print or fill in digitally for your own move-in or move-out inspection — free to download, no account needed."
        />

        <div className="w-full bg-off-white pb-2">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 rounded-full bg-primary-blue px-7 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-deep-blue"
            >
              Get the Guided Version in the App
              <ArrowRight size={16} strokeWidth={2.25} />
            </Link>
          </div>
        </div>

        <div className="w-full bg-white py-12 lg:py-14">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <ArticleBlocks blocks={REPORT_TEMPLATE_INTRO} />

            <p className="mt-5 rounded-xl border border-dark/8 bg-off-white px-5 py-4 text-[14px] leading-relaxed text-grey">
              Prefer to skip the printing and signing by hand? The MeInspect app builds this exact checklist into a
              guided walkthrough with GPS-tagged photos and digital signatures.{" "}
              <Link href="/start" className="font-semibold text-primary-blue hover:text-deep-blue">
                Download the app →
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-white">
          <GuideFooter
            disclaimer={REPORT_TEMPLATE_DISCLAIMER}
            keepReading={[
              { label: "Move-In Checklist Guide", href: "/resources/move-in-checklist" },
              { label: "Deposit Dispute Evidence Guide", href: "/resources/deposit-dispute-guide" },
            ]}
            roleLinks={[
              { label: "For Tenants", href: "/for-tenants" },
              { label: "For Landlords", href: "/for-landlords" },
            ]}
          />
        </div>

        <ClosingCta
          title="Ready for a report that documents itself?"
          body="Download MeInspect free on the App Store or Google Play and start your first report today."
        />
      </main>
      <Footer />
    </>
  );
}
