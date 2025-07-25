import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, Shield, Heart } from "lucide-react";
import Image from "next/image";

const milestones = [
  {
    year: "2014",
    title: "Foundation",
    description: "Tech Brokers Ltd. founded by Wasiu Popoola with a vision to bridge Africa's digital divide"
  },
  {
    year: "2016",
    title: "First Major Project",
    description: "Successfully launched digital banking platform for a leading Nigerian bank"
  },
  {
    year: "2018",
    title: "Regional Expansion",
    description: "Extended operations to 5 African countries, serving 50+ financial institutions"
  },
  {
    year: "2020",
    title: "Government Innovation",
    description: "Pioneered digital transformation for government services across West Africa"
  },
  {
    year: "2022",
    title: "Startup Ecosystem",
    description: "Launched accelerator program, mentoring 100+ fintech startups"
  },
  {
    year: "2024",
    title: "Global Recognition",
    description: "Named Africa's leading digital transformation consultancy"
  }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to solve complex challenges"
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Building lasting relationships through transparency, reliability, and ethical practices"
  },
  {
    icon: Heart,
    title: "African Excellence",
    description: "Celebrating and amplifying African talent, innovation, and potential"
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We don't just advise—we deliver measurable, transformative outcomes"
  }
];

export function AboutStory() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#1E40AF]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Our Mission & Vision
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1E40AF] mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To accelerate Africa&apos;s digital transformation by providing strategic guidance, technical expertise, and execution capabilities that enable institutions, startups, and governments to thrive in the digital economy.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border shadow-sm">
                  <h3 className="text-xl font-semibold text-[#1E40AF] mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be Africa&apos;s most trusted partner for digital innovation, driving sustainable growth and inclusive prosperity across the continent through technology-enabled solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/wasiupopool.jpg"
                alt="Tech Brokers Team - Digital Innovation Experts"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-[#1E40AF] rounded-full"></div>
                  <span className="text-sm font-medium">Founded 2014</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Wasiu Popoola</h3>
                <p className="text-sm opacity-90">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from client relationships to innovation strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-[#1E40AF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#1E40AF]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 