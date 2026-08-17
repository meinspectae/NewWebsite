import type { Metadata } from "next";
import { MapPin, Clock, PenTool } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Breadcrumb } from "@/components/marketing/Breadcrumb";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ClosingCta } from "@/components/marketing/ClosingCta";

export const metadata: Metadata = {
  title: "About | MeInspect",
  description: "MeInspect protects landlords and tenants equally with GPS-tagged, timestamped, signed property condition reports.",
};

const PRINCIPLES = [
  {
    icon: MapPin,
    title: "GPS Verified",
    description: "Every photo carries a real GPS coordinate, tying the evidence to the actual property.",
  },
  {
    icon: Clock,
    title: "Time Stamped",
    description: "Every photo is timestamped automatically the moment it's taken — no arguing about when.",
  },
  {
    icon: PenTool,
    title: "Digitally Signed",
    description: "Tenant, landlord, and agent all sign the same record, so everyone agreed to the same facts.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <section className="blueprint-grid w-full bg-off-white pt-10 pb-14 lg:pt-14 lg:pb-16">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <Breadcrumb label="About" />
            <span className="mt-6 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
              About MeInspect
            </span>
            <h1 className="mt-3 text-[34px] font-semibold leading-[1.14] tracking-tight text-dark sm:text-[42px]">
              We built the record both sides can trust.
            </h1>
            <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-grey sm:text-[17px]">
              Most apps pick a side. MeInspect protects landlords and tenants equally — because a fair rental
              condition report is the only record that holds.
            </p>
          </div>
        </section>

        <section className="w-full bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <p className="text-[15.5px] leading-relaxed text-grey">
              MeInspect creates GPS-tagged, timestamped move-in and move-out inspection reports — signed by all
              parties, ready for any rental deposit dispute, anywhere in the world. Deposit and tenancy rules differ
              from place to place, but the core idea doesn&apos;t: a dated, photographed record of the property&apos;s
              condition protects everyone, everywhere.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-grey">
              We&apos;re currently rolling out from the UAE, built from day one to work for any rental market
              worldwide.
            </p>
          </div>
        </section>

        <section className="w-full bg-off-white py-14 lg:py-16">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
              What We Stand For
            </span>
            <h2 className="mt-2.5 max-w-[36ch] text-[24px] font-semibold leading-[1.2] tracking-tight text-dark sm:text-[28px]">
              Three things every report has to be.
            </h2>
            <div className="mt-8">
              <FeatureGrid items={PRINCIPLES} />
            </div>
          </div>
        </section>

        <ClosingCta
          title="Want to know more?"
          body="Get in touch — we're happy to answer questions about the app, pricing, or partnerships."
          ctaLabel="Contact Us"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
