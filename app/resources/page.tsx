import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { Section } from "@/components/marketing/Section";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import { InfoBand } from "@/components/marketing/InfoBand";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { RESOURCE_GUIDES } from "@/lib/constants/guides";
import { BLOG_GUIDES } from "@/lib/constants/blogGuides";

export const metadata: Metadata = buildPageMetadata({
  title: "Resource Hub — Move-In Checklists, Deposit Guides & Templates | MeInspect",
  description: "Free, practical resources for documenting a rental property properly — checklists, dispute guides, and templates.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <PageHero
          breadcrumb="Resources"
          kicker="Resource Hub"
          title="Guides, Checklists & Templates for Tenants and Landlords"
          description="Free, practical resources for documenting a rental property properly — whether you're moving in tomorrow or managing a portfolio of units."
          primaryCta={{ label: "Join the Waiting List", href: "/start" }}
        />

        <Section eyebrow="Cornerstone Guides" title="Start here." tone="white" wide>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {RESOURCE_GUIDES.map((guide) => (
              <ResourceCard
                key={guide.slug}
                tag={guide.tag}
                title={guide.cardTitle}
                description={guide.cardDescription}
                href={`/resources/${guide.slug}`}
              />
            ))}
          </div>
        </Section>

        <Section eyebrow="Articles" title="More from MeInspect." tone="off-white" wide>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {BLOG_GUIDES.map((guide) => (
              <ResourceCard
                key={guide.slug}
                tag={guide.tag}
                title={guide.cardTitle}
                description={guide.cardDescription}
                href={`/resources/${guide.slug}`}
              />
            ))}
          </div>
        </Section>

        <InfoBand
          eyebrow="Global Coverage"
          title="MeInspect works for any rental property, anywhere."
          body="Deposit and tenancy rules vary by country and by state or province — browse local guides for the specifics that apply where you rent."
        />

        <ClosingCta
          title="Ready to document your own property?"
          body="MeInspect is coming to the App Store and Play Store. Join the waiting list to be first in line."
          ctaLabel="Join the Waiting List"
          ctaHref="/start"
        />
      </main>
      <Footer />
    </>
  );
}
