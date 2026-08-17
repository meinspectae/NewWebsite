import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { Breadcrumb } from "@/components/marketing/Breadcrumb";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | MeInspect",
  description: "Questions about the app, agency pricing, or a partnership? Get in touch with MeInspect.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <section className="blueprint-grid w-full bg-off-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-[1000px] gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-10">
            <div>
              <Breadcrumb label="Contact" />
              <span className="mt-6 block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
                Contact
              </span>
              <h1 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-tight text-dark sm:text-[38px]">
                Get in touch.
              </h1>
              <p className="mt-5 max-w-[42ch] text-[15.5px] leading-relaxed text-grey">
                Questions about the app, agency pricing, or a partnership? Drop us a message and we&apos;ll get back
                to you within 24 hours, or email us directly at{" "}
                <a href="mailto:hello@meinspect.com" className="font-semibold text-primary-blue hover:text-deep-blue">
                  hello@meinspect.com
                </a>
                .
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
