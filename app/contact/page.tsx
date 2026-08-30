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

        <section className="w-full bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-[720px] px-6 lg:px-10">
            <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-primary-blue">
              Looking for Something Specific?
            </span>
            <h2 className="mt-3 text-[26px] font-semibold leading-[1.2] tracking-tight text-dark sm:text-[30px]">
              You might not need to wait for a reply
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-grey">
              A lot of the questions we get by email are already answered on the site — worth a quick check before
              you wait on a response:
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              <li>
                <a href="/faq" className="text-[15px] font-semibold text-primary-blue hover:text-deep-blue">
                  General questions about how MeInspect works →
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-[15px] font-semibold text-primary-blue hover:text-deep-blue">
                  Pricing for individual reports and agencies →
                </a>
              </li>
              <li>
                <a href="/for-agents" className="text-[15px] font-semibold text-primary-blue hover:text-deep-blue">
                  Working with us as a property management company or brokerage →
                </a>
              </li>
              <li>
                <a
                  href="/resources/deposit-dispute-guide"
                  className="text-[15px] font-semibold text-primary-blue hover:text-deep-blue"
                >
                  In an active deposit dispute right now →
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
