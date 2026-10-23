import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { LegalArticle } from "@/components/marketing/LegalArticle";
import { TERMS_SECTIONS } from "@/lib/constants/legal";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service & User Agreement | MeInspect Legal",
  description: "Read the MeInspect Terms of Service. Review our user agreement, legal guidelines, and terms governing the use of our property condition report app and services.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <LegalArticle breadcrumb="Terms" title="Terms of Use" lastUpdated="July 2026" sections={TERMS_SECTIONS} />
      </main>
      <Footer />
    </>
  );
}
