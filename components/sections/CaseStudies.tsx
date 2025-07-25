import { Button } from "@/components/ui/button";
import { Tag } from "../ui/tag";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    id: "fintech-startup",
    category: "Fintech Startup",
    title: "Launching a Neo-bank in West Africa in 120 Days",
    description:
      "Full-stack digital banking setup: architecture, product roadmap, and compliance integration",
    image: "/images/service_1.jpg",
    readMoreText: "Read Full Case Study",
  },
  {
    id: "microfinance-institution",
    category: "Lending Service",
    title: "Transforming Lending Experience with Process Automation",
    description:
      "With our expertise in RPA and AI-driven credit scoring, streamlined loan origination, credit bureau integration and other AI capabilities, we transform lending process into a 5 minutes experience from request to disbursement.",
    image: "/images/service_2.jpg",
    readMoreText: "Read Full Case Study",
  },
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-primary-tint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-6 mb-16">
          <Tag variant="outline">Case Studies</Tag>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
            Case Studies & Expertise Wins
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-5xl">
            We don&apos;t just consult—we build real-world solutions that drive
            measurable growth. From digital bank launches and government
            platform rollouts to fintech MVPs and public sector tech overhauls,
            we turn strategy into scalable success.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-5xl">
            Here&apos;s a glimpse of what execution looks like with Tech Brokers
            Ltd.
          </p>
        </div>

        {/* Case Studies - Alternating Layout */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image - Alternates sides */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* Content - Alternates sides */}
              <div className={`space-y-6 w-full max-w-[35rem] ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className={"inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"}>
                  {study.category}
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-normal leading-tight">
                  {study.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {study.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="text-blue-700 hover:text-white hover:bg-blue-700 border-blue-700"
                  asChild
                >
                  <a href={`/case-studies/${study.id}`}>
                    {study.readMoreText} <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90">
            View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
 