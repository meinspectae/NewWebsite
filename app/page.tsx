import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { PropertyMemory } from "@/components/property-memory/PropertyMemory";
import { EvidenceTrail } from "@/components/evidence-trail/EvidenceTrail";
import { TwoSides } from "@/components/two-sides/TwoSides";
import { HowItWorks } from "@/components/how-it-works/HowItWorks";
import { Features } from "@/components/features/Features";
import { Report } from "@/components/report/Report";
import { CaseStudies } from "@/components/case-studies/CaseStudies";
import { Pricing } from "@/components/pricing/Pricing";
import { FinalCta } from "@/components/final-cta/FinalCta";
import { Footer } from "@/components/footer/Footer";
import { ScrollTriggerRefresh } from "@/components/ScrollTriggerRefresh";

export default function Home() {
  return (
    <>
      <ScrollTriggerRefresh />
      <Navbar />
      <main className="flex flex-col bg-off-white">
        <Hero />
        <PropertyMemory />
        <EvidenceTrail />
        <TwoSides />
        <HowItWorks />
        <Features />
        <Report />
        <CaseStudies />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
