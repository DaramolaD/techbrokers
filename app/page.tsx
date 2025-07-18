import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Footer } from "@/components/layout/Footer";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <WhoWeAre />
        <Services />
        <WhyChooseUs />
        <About />
      </main>
      <Footer />
    </div>
  );
}
