import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { LOCATIONS } from "@/lib/constants/locations";

interface LocationPageParams {
  params: Promise<{ slug: string }>;
}

// Pre-renders one static page per entry in LOCATIONS at build time.
// output: "export" requires every dynamic route to be enumerable like this —
// there is no server at request time to generate pages on the fly.
export function generateStaticParams() {
  // Quality gate: a location only becomes a live page once it has at least
  // one genuine local point written for it. This is what stops the "add a
  // slug, ship instant thin content" pattern that caused problems before —
  // add the entry to LOCATIONS.ts, but it won't build (or appear in the
  // sitemap) until someone has actually written something specific about it.
  return LOCATIONS.filter((location) => location.localPoints.length > 0).map((location) => ({
    slug: location.slug,
  }));
}

function getLocation(slug: string) {
  return LOCATIONS.find((location) => location.slug === slug);
}

export async function generateMetadata({ params }: LocationPageParams): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  const url = `https://meinspect.com/locations/${location.slug}`;

  return {
    title: location.title,
    description: location.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url,
    },
    twitter: {
      title: location.title,
      description: location.metaDescription,
    },
  };
}

export default async function LocationPage({ params }: LocationPageParams) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Property Condition Inspection",
    provider: { "@type": "Organization", name: "MeInspect", url: "https://meinspect.com" },
    areaServed: { "@type": "Place", name: `${location.area}, ${location.city}` },
    url: `https://meinspect.com/locations/${location.slug}`,
  };

  const faqJsonLd =
    location.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: location.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <Navbar />
      <main className="flex flex-col bg-off-white">
        <PageHero
          breadcrumb={location.area}
          kicker={`${location.area}, ${location.city}`}
          title={`Property Condition Reports in ${location.area}`}
          description={location.heroDek}
          primaryCta={{ label: "Download the App", href: "/start" }}
        />

        {location.localPoints.length > 0 && (
          <Section eyebrow="Local Notes" title={`What to know in ${location.area}`} tone="white">
            <ul className="flex flex-col gap-4">
              {location.localPoints.map((point) => (
                <li key={point} className="text-[15px] leading-relaxed text-grey sm:text-[16px]">
                  {point}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {location.faqs.length > 0 && (
          <FaqAccordion eyebrow="FAQ" title={`Questions about ${location.area}`} items={location.faqs} />
        )}

        <ClosingCta
          title={`Document your ${location.area} property.`}
          body="Protect your deposit, or your property, with a signed record everyone agrees on."
        />
      </main>
      <Footer />
    </>
  );
}
