import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Breadcrumb } from "@/components/marketing/Breadcrumb";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { GENERAL_FAQ } from "@/lib/constants/faq";

export const metadata: Metadata = buildPageMetadata({
  title: "Property Inspection FAQ | MeInspect",
  description: "Everything you need to know before your first move-in or move-out inspection.",
  path: "/faq",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GENERAL_FAQ.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <section className="blueprint-grid w-full bg-off-white pt-10 pb-8 lg:pt-14">
          <div className="mx-auto max-w-[860px] px-6 lg:px-10">
            <Breadcrumb label="FAQ" />
            <span className="mt-6 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
              Property Inspection FAQ
            </span>
            <h1 className="mt-3 text-[34px] font-semibold leading-[1.12] tracking-tight text-dark sm:text-[42px]">
              Questions answered.
            </h1>
            <p className="mt-5 max-w-[62ch] text-[16px] leading-relaxed text-grey sm:text-[17px]">
              Everything you need to know before your first move-in or move-out inspection.
            </p>
          </div>
        </section>

        <FaqAccordion eyebrow="General" title="Before your first inspection" items={GENERAL_FAQ} />

        <ClosingCta
          title="Still have a question?"
          body="Get in touch and we'll get back to you within 24 hours."
          ctaLabel="Contact Us"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
