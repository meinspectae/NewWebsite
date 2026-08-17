import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Breadcrumb } from "@/components/marketing/Breadcrumb";
import { PricingDetailCard } from "@/components/marketing/PricingDetailCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRICING_DETAIL_TIERS } from "@/lib/constants/pricingDetail";

export const metadata: Metadata = {
  title: "Pricing | MeInspect",
  description: "Pay only for the report. The app, the camera, the walkthrough, and the signatures are all included.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <section className="blueprint-grid w-full bg-off-white pt-10 pb-14 lg:pt-14 lg:pb-16">
          <div className="mx-auto max-w-[860px] px-6 lg:px-10">
            <Breadcrumb label="Pricing" />
            <span className="mt-6 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
              Pricing
            </span>
            <h1 className="mt-3 text-[34px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[42px]">
              Pay only for the report.
            </h1>
            <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-grey sm:text-[17px]">
              The app, the camera, the walkthrough, the signatures — all included. Pay once when you generate your
              official Condition Report PDF.
            </p>
          </div>
        </section>

        <section className="w-full bg-white py-14 lg:py-18">
          <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {PRICING_DETAIL_TIERS.map((tier) => (
                <PricingDetailCard key={tier.id} tier={tier} />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full border-y border-dark/8 bg-off-white py-14 lg:py-16">
          <div className="mx-auto max-w-[760px] px-6 text-center lg:px-10">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
              Become a MeInspector
            </span>
            <h2 className="mt-2.5 text-[22px] font-semibold leading-[1.25] tracking-tight text-dark sm:text-[26px]">
              Want to become one instead?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-grey sm:text-[16px]">
              Join our network of certified Meinspectors and carry out professional property condition inspections
              across the UAE.
            </p>
            <Link
              href="/careers/meinspector"
              className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-primary-blue transition-colors hover:text-deep-blue"
            >
              Apply Here
              <ArrowRight size={15} strokeWidth={2.25} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
