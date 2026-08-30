import type { Metadata } from "next";
import { MapPin, Clock, PenTool } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Breadcrumb } from "@/components/marketing/Breadcrumb";
import { WaitlistForm } from "@/components/start/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waiting List | MeInspect",
  description: "MeInspect is coming to the App Store and Play Store. Join the waiting list to be first in line.",
};

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
              <Breadcrumb label="Join the Waiting List" />
              <span className="mt-6 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
                Coming Soon
              </span>
              <h1 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-tight text-dark sm:text-[38px]">
                Your next handover starts here.
              </h1>
              <p className="mt-5 max-w-[42ch] text-[15.5px] leading-relaxed text-grey">
                MeInspect is coming to the App Store and Play Store. Join the waiting list and be the first to know
                when we launch.
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
            </div>

            <WaitlistForm />
          </div>
        </section>

        <section className="w-full bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-[720px] px-6 lg:px-10">
            <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
              Before You Join
            </span>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.2] tracking-tight text-dark sm:text-[30px]">
              A few things to know
            </h2>
            <div className="mt-8 flex flex-col gap-7">
              <div>
                <h3 className="text-[16px] font-semibold text-dark">When does the app launch?</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-grey">
                  MeInspect is in final testing ahead of its App Store and Play Store release. Joining the waiting
                  list is the fastest way to know the moment it's available, and early sign-ups get priority access.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-dark">Is there a cost to join the waiting list?</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-grey">
                  No — joining is free. You only pay per inspection report once the app is live, and only if you
                  decide to use it.
                </p>
              </div>
              <div>
                <h3 className="text-[16px] font-semibold text-dark">
                  I need to document a property now — can I still get help?
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-grey">
                  Yes. While the app finishes testing, our free{" "}
                  <a href="/resources/report-template" className="font-semibold text-primary-blue hover:text-deep-blue">
                    property condition report template
                  </a>{" "}
                  and{" "}
                  <a href="/resources/move-in-checklist" className="font-semibold text-primary-blue hover:text-deep-blue">
                    move-in checklist guide
                  </a>{" "}
                  cover exactly what to document in the meantime.
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
