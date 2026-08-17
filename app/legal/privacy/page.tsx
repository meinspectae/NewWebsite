import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { LegalArticle } from "@/components/marketing/LegalArticle";
import { PRIVACY_SECTIONS } from "@/lib/constants/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — MeInspect",
  description: "How MeInspect collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <LegalArticle breadcrumb="Privacy Policy" title="Privacy Policy" lastUpdated="July 2026" sections={PRIVACY_SECTIONS} />
      </main>
      <Footer />
    </>
  );
}
