import { Button } from "@/components/ui/button";
import { Tag } from "../ui/tag";
import { ArrowRight, Building2, Zap, Rocket, CreditCard, Brain, Users, GraduationCap, Lightbulb } from "lucide-react";

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
      "Regulatory sandbox navigation"
    ],
    icon: Building2
  },
  {
    title: "Technology Consulting & System Integration",
    description: "Bridge legacy systems and modern infrastructure through expert-led digital modernization and IT integration.",
    features: [
      "Legacy-to-cloud migration",
      "Fintech MVPs (lending, payments, insurtech)",
      "AI, RPA & Intelligent Automation",
      "Gateway integration (Visa, NIBSS, etc.)",
      "Risk scoring & fraud detection",
      "Chatbots, IVR & document intelligence",
      "GenAI use cases"
    ],
    icon: Zap
  },
  {
    title: "Product Innovation & Go-to-Market",
    description: "Design, validate, and launch fintech products built for growth, user adoption, and regulation.",
    features: [
      "Payments & Card Services Advisory",
      "Financial Inclusion & Ecosystem Solutions",
      "Strategic Advisory & CxO Services",
      "EdTech, GovTech & University Digitalization",
      "Startup Acceleration & Venture Readiness",
      "Card programs (debit, credit, prepaid)",
      "G2P payment systems"
    ],
    icon: Rocket
  },
  {
    title: "Payments & Card Services Advisory",
    description: "Design secure, scalable payments infrastructure across card issuing, merchant, and cross-border channels.",
    features: ["Card programs (debit, credit, prepaid)", "G2P payment systems", "Gateway integration (Visa, NIBSS, etc.)"],
    icon: CreditCard
  },
  {
    title: "AI, RPA & Intelligent Automation",
    description: "Deploy cutting-edge automation to optimize operations, fight fraud, and enhance customer experience.",
    features: ["Risk scoring & fraud detection", "Chatbots, IVR & document intelligence", "GenAI use cases"],
    icon: Brain
  },
  {
    title: "Financial Inclusion & Ecosystem Solutions",
    description: "Banking innovation for rural populations, MSMEs, cooperatives, and underbanked youth & women.",
    features: ["Credit union & smart co-op tech", "Remittance & diaspora finance", "Edtech, healthtech, agritech finance enablement"],
    icon: Users
  },
  {
    title: "Strategic Advisory & CxO Services",
    description: "Gain access to board-level tech strategy and interim leadership to guide your digital journey.",
    features: ["Interim CDO/CIO support", "Financial modeling", "Africa expansion strategy", "Public tech modernization"],
    icon: Lightbulb
  },
  {
    title: "EdTech, GovTech & University Digitalization",
    description: "Transform public institutions with digital identity, e-learning, and cashless campus ecosystems.",
    features: ["Student ID cards, wallets, access control", "Capital raise materials", "University ecosystem design"],
    icon: GraduationCap
  },
  {
    title: "Startup Acceleration & Venture Readiness",
    description: "Scale your startup with product validation, pitch support, and investor-ready assets.",
    features: ["Talent sourcing & investor readiness", "Venture build-as-a-service", "Capital raise materials"],
    icon: Rocket
  }
];



export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Tag variant="outline">Why Choose Tech Brokers</Tag>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
            What makes us different
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We don&apos;t just advise—we build. Our team brings a combine over 100 years of real-world experience, speed, and execution power that moves projects forward and gets results.
          </p>
        </div>

        {/* Unified Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group p-6 border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E40AF]">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs text-muted-foreground"
                    >
                      <div className="w-1 h-1 bg-[#1E40AF] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
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
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90">
            See Full Service Guide <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
} 