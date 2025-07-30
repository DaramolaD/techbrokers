import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, CreditCard, Lightbulb, Rocket, Zap } from "lucide-react";

const allServices = [
  {
    title: "Digital Banking Strategy & Transformation",
    description: "Launch and scale digital banks, super apps, and fintech ecosystems with full-stack support—from architecture to go-live.",
    features: [
      "Neo-bank & challenger bank setup",
      "Open banking enablement", 
      "Core banking & ERP support",
      "Super app design & agency banking",
      "API architecture & fintech integration",
      "UI/UX optimization",
      "Fintech MVPs (lending, payments, wealth, insurtech)",
      "Regulatory sandbox navigation"
    ],
    icon: Building2
  },
  {
    title: "Technology Consulting & System Integration",
    description: "Bridge legacy systems and modern infrastructure through expert-led digital modernization and IT integration.",
    features: [
      "Legacy-to-cloud migration",
      "AI, RPA & Intelligent Automation",
      "Chatbots, IVR & document intelligence",
      "GenAI use cases"
    ],
    icon: Zap
  },
  {
    title: "Product Innovation",
    description: "Design, validate, and launch fintech products built for growth, user adoption, and regulation.",
    features: [
      "Product Strategy & Roadmap",
      "User Experience Design",
      "Market Testing & Validation",
      "MVP Development",
    ],
    icon: Rocket
  },
  {
    title: "Go-to-Market",
    description: "Design, validate, and launch fintech products built for growth, user adoption, and regulation.",
    features: [
      'Africa expansion strategy',
      "Market Research",
      "Market Penetration Strategy",
      "Startup Acceleration & Venture Readiness",
    ],
    icon: Rocket
  },
  {
    title: "Payments & Card Services Advisory",
    description: "Design secure, scalable payments infrastructure across card issuing, merchant, and cross-border channels.",
    features: ["Card programs (debit, credit, prepaid)", "G2P payment systems", "Gateway integration (Visa, NIBSS, etc.)", "Revenue Collection & Disbursement"],
    icon: CreditCard
  },
  {
    title: "Focused Sectors",
    description: "Gain access to board-level tech strategy and interim leadership to guide your digital journey.",
    features: ["EduTech", "AgriTech", "TransportTech", "Renewable Energy", "Financial Inclusion", "Ecosystem Solutions"],
    icon: Lightbulb
  },
];

export function ServiceListing() {
  return (
    <section className="py-24 bg-primary-tint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified Services Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {allServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group p-6 border max-w-[384px] w-full rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E40AF]">{service.title}</h3>
                </div>

                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-md text-muted-foreground"
                    >
                      <div className="w-1 h-1 bg-[#1E40AF] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <div className="mt-auto">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#1E40AF] hover:text-[#1E40AF] hover:bg-[#1E40AF]/20 text-xs font-medium"
                    asChild
                  >
                    <a href="#">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </a>
                  </Button>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
