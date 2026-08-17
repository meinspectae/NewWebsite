import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Breadcrumb } from "@/components/marketing/Breadcrumb";
import { NumberedSteps } from "@/components/marketing/NumberedSteps";
import { MeinspectorForm } from "@/components/careers/MeinspectorForm";

export const metadata: Metadata = {
  title: "Become a MeInspector | MeInspect",
  description: "Join our network of certified Meinspectors and carry out professional property condition inspections across the UAE.",
};

const STEPS = [
  { number: 1, text: "Apply: Submit your details below. We review every application and get back to you within a few days." },
  {
    number: 2,
    text: "Complete Training: Work through our Meinspector training modules covering the app, inspection standards, photo documentation, and handover etiquette.",
  },
  {
    number: 3,
    text: "Get Certified: Pass the certification assessment to become a verified Meinspector and start receiving inspection jobs through the app.",
  },
];

export default function BecomeMeinspectorPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <section className="blueprint-grid w-full bg-off-white pt-10 pb-14 lg:pt-14 lg:pb-16">
          <div className="mx-auto max-w-[860px] px-6 lg:px-10">
            <Breadcrumb label="Become a MeInspector" />
            <span className="mt-6 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
              Become a MeInspector
            </span>
            <h1 className="mt-3 text-[34px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[42px]">
              Get trained. Get certified. Get hired.
            </h1>
            <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-grey sm:text-[17px]">
              Join our network of certified Meinspectors and carry out professional property condition inspections
              across the UAE. Complete the training programme, pass the certification assessment, and start
              accepting inspection jobs in your area.
            </p>
          </div>
        </section>

        <section className="w-full bg-white py-14 lg:py-16">
          <div className="mx-auto grid max-w-[1000px] gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
                The Process
              </span>
              <h2 className="mt-2.5 text-[22px] font-semibold leading-[1.25] tracking-tight text-dark sm:text-[24px]">
                Three steps to certification.
              </h2>
              <div className="mt-6">
                <NumberedSteps steps={STEPS} />
              </div>
            </div>

            <MeinspectorForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
