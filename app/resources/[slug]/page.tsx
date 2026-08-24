import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { GuideHeader } from "@/components/marketing/GuideHeader";
import { ArticleBlocks } from "@/components/marketing/ArticleBlocks";
import { GuideFooter } from "@/components/marketing/GuideFooter";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { BLOG_GUIDES } from "@/lib/constants/blogGuides";
import { GUIDE_DISCLAIMER } from "@/lib/constants/guides";

interface ArticlePageParams {
  params: Promise<{ slug: string }>;
}

// One static page per entry in BLOG_GUIDES, built at deploy time — same
// static-export approach as every other page on the site.
export function generateStaticParams() {
  return BLOG_GUIDES.map((guide) => ({ slug: guide.slug }));
}

function getGuide(slug: string) {
  return BLOG_GUIDES.find((guide) => guide.slug === slug);
}

export async function generateMetadata({ params }: ArticlePageParams): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const url = `https://meinspect.com/resources/${guide.slug}`;

  return {
    title: `${guide.title} | MeInspect`,
    description: guide.cardDescription,
    alternates: { canonical: url },
    openGraph: { title: guide.title, description: guide.cardDescription, url },
    twitter: { title: guide.title, description: guide.cardDescription },
  };
}

export default async function BlogGuidePage({ params }: ArticlePageParams) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  // Suggest two other articles to keep reading, excluding this one.
  const others = BLOG_GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <GuideHeader breadcrumb={guide.title} tag={guide.tag} title={guide.title} dek={guide.dek} />

        <div className="w-full bg-white py-12 lg:py-14">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <ArticleBlocks blocks={guide.blocks} />
          </div>
        </div>

        <div className="bg-white">
          <GuideFooter
            disclaimer={GUIDE_DISCLAIMER}
            keepReading={others.map((g) => ({ label: g.cardTitle, href: `/resources/${g.slug}` }))}
            roleLinks={[
              { label: "For Tenants", href: "/for-tenants" },
              { label: "For Landlords", href: "/for-landlords" },
            ]}
          />
        </div>

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
