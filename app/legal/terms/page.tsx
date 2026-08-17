import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { LegalArticle } from "@/components/marketing/LegalArticle";
import { TERMS_SECTIONS } from "@/lib/constants/legal";

export const metadata: Metadata = {
  title: "Terms of Use — MeInspect",
  description: "The terms governing your use of the MeInspect app and website.",
};

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
