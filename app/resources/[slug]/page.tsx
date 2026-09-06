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
  // Use the shorter metaTitle for <title>/social tags when the full headline
  // runs long — the H1 on the page itself still uses the full guide.title.
  const displayTitle = guide.metaTitle ?? guide.title;
  const titleTag = `${displayTitle} | MeInspect`;

  return {
    title: titleTag,
    description: guide.cardDescription,
    alternates: { canonical: url },
    openGraph: { title: displayTitle, description: guide.cardDescription, url },
    twitter: { title: displayTitle, description: guide.cardDescription },
  };
}

export default async function BlogGuidePage({ params }: ArticlePageParams) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  // Suggest two other articles to keep reading. Previously this was
  // `BLOG_GUIDES.filter(g => g.slug !== guide.slug).slice(0, 2)`, which
  // always resolves to the same first two guides in the array for every
  // guide from position 3 onward — meaning 9 of the 12 guides never
  // received a "keep reading" link from any sibling article and had
  // exactly one inbound internal link (from /resources), which is what
  // Semrush flagged. Picking the next two guides in a circular order
  // instead means every guide both links out to two others and receives
  // links back from two others, however many guides get added later.
  const currentIndex = BLOG_GUIDES.findIndex((g) => g.slug === guide.slug);
  const others = [1, 2].map(
    (offset) => BLOG_GUIDES[(currentIndex + offset) % BLOG_GUIDES.length]
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.cardDescription,
    image: [`https://meinspect.com${guide.image ?? "/og-image.png"}`],
    datePublished: guide.publishedDate,
    dateModified: guide.publishedDate,
    author: { "@type": "Organization", name: "MeInspect", url: "https://meinspect.com" },
    publisher: {
      "@type": "Organization",
      name: "MeInspect",
      logo: { "@type": "ImageObject", url: "https://meinspect.com/logo.png" },
    },
    mainEntityOfPage: `https://meinspect.com/resources/${guide.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://meinspect.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: guide.title,
        item: `https://meinspect.com/resources/${guide.slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
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
          body="Download MeInspect free on the App Store or Google Play and start your first report today."
        />
      </main>
      <Footer />
    </>
  );
}
