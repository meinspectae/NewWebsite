import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { GuideHeader } from "@/components/marketing/GuideHeader";
import { ClosingCta } from "@/components/marketing/ClosingCta";
import { getAllPosts, getPostBySlug } from "@/lib/blog/posts";

interface BlogPostParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://meinspect.com/blog/${post.slug}`;

  return {
    title: `${post.title} | MeInspect`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.description, url, type: "article" },
    twitter: { title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Organization", name: "MeInspect" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <Navbar />
      <main className="flex flex-col bg-off-white">
        <GuideHeader breadcrumb={post.title} tag="Article" title={post.title} dek={post.description} />

        <div className="w-full bg-white py-12 lg:py-14">
          <div className="prose prose-neutral mx-auto max-w-[760px] px-6 lg:px-10">
            <MDXRemote source={post.content} />
          </div>
        </div>

        <ClosingCta
          title="Protect your next move-in or move-out."
          body="Document the property's condition with a signed, timestamped record."
          ctaLabel="Start an Inspection"
          ctaHref="/start"
        />
      </main>
      <Footer />
    </>
  );
}
