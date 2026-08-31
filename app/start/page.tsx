import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { MapPin, Clock, PenTool } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Breadcrumb } from "@/components/marketing/Breadcrumb";
import { StoreBadges } from "@/components/hero/StoreBadges";

export const metadata: Metadata = buildPageMetadata({
  title: "Download MeInspect | App Store & Google Play | MeInspect",
  description: "MeInspect is live on the App Store and Google Play. Download free and start your first property condition report today.",
  path: "/start",
});

const TRUST_ICONS = [MapPin, Clock, PenTool];
const TRUST_LABELS = ["GPS Verified", "Time Stamped", "Digitally Signed"];

export default function StartPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <section className="blueprint-grid w-full bg-off-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-[920px] gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-10">
            <div>
              <Breadcrumb label="Download MeInspect" />
              <span className="mt-6 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
                Available Now
              </span>
              <h1 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-tight text-dark sm:text-[38px]">
                Your next handover starts here.
              </h1>
              <p className="mt-5 max-w-[42ch] text-[15.5px] leading-relaxed text-grey">
                MeInspect is live on the App Store and Google Play. Download it free and generate your first
                property condition report in minutes.
              </p>

              <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5">
                {TRUST_LABELS.map((label, i) => {
                  const Icon = TRUST_ICONS[i];
                  return (
                    <li key={label} className="flex items-center gap-1.5">
                      <Icon size={15} className="text-verify-green" strokeWidth={2.25} />
                      <span className="font-mono text-[12.5px] font-medium text-dark/75">{label}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-8">
                <StoreBadges />
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-dark/8 bg-white p-8">
              <p className="text-center text-[15px] leading-relaxed text-grey">
                Scan the App Store or Google Play badge on your phone, or tap them here on desktop to be taken
                straight to the listing.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-[720px] px-6 lg:px-10">
            <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
              Before You Download
            </span>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.2] tracking-tight text-dark sm:text-[30px]">
              A few things to know
            </h2>
            <div className="mt-8 flex flex-col gap-7">
              <div>
                <h3 className="text-[16px] font-semibold text-dark">Is the app free to download?</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-grey">
                  Yes — downloading and creating an account is free. You only pay per inspection report, when
                  you're ready to generate one.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-dark">What do I need to get started?</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-grey">
                  Just your phone. Download the app, walk through the property room by room, and MeInspect
                  handles the timestamps, GPS tagging, and sign-off.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-dark">
                  I want to document a property right now, without the app — is that possible?
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-grey">
                  Yes. Our free{" "}
                  <a href="/resources/report-template" className="font-semibold text-primary-blue hover:text-deep-blue">
                    property condition report template
                  </a>{" "}
                  and{" "}
                  <a href="/resources/move-in-checklist" className="font-semibold text-primary-blue hover:text-deep-blue">
                    move-in checklist guide
                  </a>{" "}
                  cover exactly what to document, no download required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
