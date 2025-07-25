import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  metadataBase: new URL('https://techbrokers.com'),
  title: "About Us - Tech Brokers Ltd. | Leading Digital Transformation in Africa",
  description: "Learn about Tech Brokers Ltd., our mission to drive digital innovation across Africa, and our team of strategic thinkers and technology experts.",
  keywords: "about Tech Brokers, digital transformation Africa, fintech consulting, technology experts, Wasiu Popoola",
  openGraph: {
    title: "About Us - Tech Brokers Ltd. | Leading Digital Transformation in Africa",
    description: "Learn about Tech Brokers Ltd., our mission to drive digital innovation across Africa, and our team of strategic thinkers and technology experts.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          tag="Our Story"
          title="Leading Digital Innovation in Africa"
          description="Founded by industry veteran Wasiu Popoola, Tech Brokers Ltd. is more than a consulting firm—we're your execution partner for African innovation. We bridge the gap between strategy and implementation, turning bold ideas into scalable realities."
        />
        <AboutStory />
        <AboutTeam />
        <CTA />
      </main>
      <Footer />
    </div>
  );
} 