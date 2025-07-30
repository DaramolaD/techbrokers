import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Footer } from "@/components/layout/Footer";
// import { CaseStudies } from "@/components/sections/CaseStudies";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  metadataBase: new URL('https://techbrokers.com'),
  title: "Tech Brokers Ltd. | Digital Transformation & Fintech Solutions in Africa",
  description: "Leading digital transformation consulting firm in Africa. We help institutions, startups, and governments achieve digital innovation through strategic consulting, technology solutions, and startup acceleration.",
  keywords: "digital transformation, fintech solutions, technology consulting, startup acceleration, Africa fintech, government innovation, digital banking",
  openGraph: {
    title: "Tech Brokers Ltd. | Digital Transformation & Fintech Solutions in Africa",
    description: "Leading digital transformation consulting firm in Africa. We help institutions, startups, and governments achieve digital innovation through strategic consulting, technology solutions, and startup acceleration.",
    type: "website",
    url: "https://techbrokers.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Brokers Ltd. | Digital Transformation & Fintech Solutions in Africa",
    description: "Leading digital transformation consulting firm in Africa.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        {/* <CaseStudies /> */}
        <CTA />
        <InsightsPreview />
      </main>
      <Footer />
    </div>
  );
}
