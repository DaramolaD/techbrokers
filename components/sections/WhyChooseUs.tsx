import { Button } from "@/components/ui/button";
import { Tag } from "../ui/tag";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const whyChooseCards = [
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
    bgImage: "/images/digital-banking-bg.jpg"
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
    bgImage: "/images/tech-consulting-bg.jpg"
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
    bgImage: "/images/product-innovation-bg.jpg"
  }
];

const additionalServices = [
  {
    title: "Payments & Card Services Advisory",
    description: "Design secure, scalable payments infrastructure across card issuing, merchant, and cross-border channels.",
    features: ["Card programs (debit, credit, prepaid)", "G2P payment systems", "Gateway integration (Visa, NIBSS, etc.)"]
  },
  {
    title: "AI, RPA & Intelligent Automation",
    description: "Deploy cutting-edge automation to optimize operations, fight fraud, and enhance customer experience.",
    features: ["Risk scoring & fraud detection", "Chatbots, IVR & document intelligence", "GenAI use cases"]
  },
  {
    title: "Financial Inclusion & Ecosystem Solutions",
    description: "Banking innovation for rural populations, MSMEs, cooperatives, and underbanked youth & women.",
    features: ["Credit union & smart co-op tech", "Remittance & diaspora finance", "Edtech, healthtech, agritech finance enablement"]
  },
  {
    title: "Strategic Advisory & CxO Services",
    description: "Gain access to board-level tech strategy and interim leadership to guide your digital journey.",
    features: ["Interim CDO/CIO support", "Financial modeling", "Africa expansion strategy", "Public tech modernization"]
  },
  {
    title: "EdTech, GovTech & University Digitalization",
    description: "Transform public institutions with digital identity, e-learning, and cashless campus ecosystems.",
    features: ["Student ID cards, wallets, access control", "Capital raise materials", "University ecosystem design"]
  },
  {
    title: "Startup Acceleration & Venture Readiness",
    description: "Scale your startup with product validation, pitch support, and investor-ready assets.",
    features: ["Talent sourcing & investor readiness", "Venture build-as-a-service", "Capital raise materials"]
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
            We don&apos;t just advise—we build. Our team brings real-world experience, speed, and execution power that moves projects forward and gets results.
          </p>
        </div>

        {/* Main 3 Column Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyChooseCards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-[500px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={card.bgImage}
                  alt={`${card.title} background`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  priority={index < 2}
                  quality={95}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-between h-full z-10">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{card.title}</h3>
                </div>
                
                <div className="mt-auto">
                  <p className="text-white/90 mb-4 text-sm">
                    {card.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {card.features.slice(0, 3).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-xs text-white/80"
                      >
                        <div className="w-1 h-1 bg-white rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:text-white hover:bg-white/20 text-xs"
                      asChild
                    >
                      <a href="#">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h4 className="text-lg font-semibold mb-3 text-[#1E40AF]">{service.title}</h4>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-xs text-muted-foreground"
                  >
                    <div className="w-1 h-1 bg-[#1E40AF] rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8">
            See Full Service Guide <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
} 