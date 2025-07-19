import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { InsightsWithFilter } from "@/components/sections/InsightsWithFilter";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  metadataBase: new URL('https://techbrokers.com'),
  title: "Insights - Tech Brokers Ltd. | Digital Transformation & Fintech Trends",
  description: "Stay updated with the latest insights on digital transformation, fintech trends, government innovation, and startup acceleration across Africa.",
  keywords: "fintech insights, digital transformation trends, Africa fintech, government innovation, startup insights",
  openGraph: {
    title: "Insights - Tech Brokers Ltd. | Digital Transformation & Fintech Trends",
    description: "Stay updated with the latest insights on digital transformation, fintech trends, government innovation, and startup acceleration across Africa.",
  },
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          tag="Insights & Trends"
          title="Digital Transformation Insights"
          description="Stay updated with the latest trends, insights, and thought leadership in digital transformation, fintech, and government innovation across Africa."
        />
        <InsightsWithFilter />
        <CTA />
      </main>
      <Footer />
    </div>
  );
} 