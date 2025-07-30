import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesDetailed } from "@/components/sections/ServicesDetailed";
import { ServicesMethodology } from "@/components/sections/ServicesMethodology";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  metadataBase: new URL('https://techbrokers.com'),
  title: "Services - Tech Brokers Ltd. | Digital Transformation & Fintech Solutions",
  description: "Comprehensive digital transformation services including digital banking strategy, technology consulting, product innovation, and startup acceleration across Africa and the diaspora.",
  keywords: "digital banking, fintech solutions, technology consulting, startup acceleration, government innovation, Africa fintech",
  openGraph: {
    title: "Services - Tech Brokers Ltd. | Digital Transformation & Fintech Solutions",
    description: "Comprehensive digital transformation services including digital banking strategy, technology consulting, product innovation, and startup acceleration across Africa and the diaspora.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* <PageHero 
          tag="Our Services"
          title="From Strategy to Execution"
          description="We don't just advise—we build, scale, and deliver. Our comprehensive digital transformation services help institutions, startups, and governments achieve their digital goals with speed and precision."
        /> */}
        {/* <ServicesDetailed /> */}
        <ServicesMethodology />
        <CTA />
      </main>
      <Footer />
    </div>
  );
} 