import { Button } from "@/components/ui/button";
import { Tag } from "../ui/tag";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Digital Banking Strategy & Transformation",
    description:
      "Launch and scale digital banks, super apps, and fintech ecosystems with full-stack support—from architecture to go-live.",
    features: ["Digital Banking", "Super Apps", "Fintech Ecosystems"],
    link: "/services/digital-banking-strategy",
    bgImage: "/images/service_1.jpg",
  },
  {
    title: "Technology Consulting & System Integration",
    description:
      "Bridge legacy systems and modern infrastructure through expert-led digital modernization and IT integration.",
    features: ["Legacy Systems", "Digital Modernization", "IT Integration"],
    link: "/services/technology-consulting",
    bgImage: "/images/service_2.jpg",
  },
  {
    title: "Product Innovation & Go-to-Market",
    description:
      "Design, validate, and launch fintech products built for growth, user adoption, and regulation.",
    features: ["Product Design", "User Adoption", "Regulation"],
    link: "/services/product-innovation",
    bgImage: "/images/service_3.jpg",
  },
  {
    title: "Payments & Card Services Advisory",
    description:
      "Design secure, scalable payments infrastructure across card issuing, merchant, and cross-border channels.",
    features: ["Card Issuing", "Merchant Services", "Cross-border Payments"],
    link: "/services/payments-advisory",
    bgImage: "/images/service_4.jpg",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-primary-tint">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid space-y-8">
          <Tag variant="outline">Services</Tag>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
              How We Help You Win
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                From digital banking and intelligent automation to public sector
                innovation and startup acceleration—we provide end-to-end
                execution to power your transformation journey. Whether
                you&apos;re a fintech founder, bank executive, or government
                leader, our service model is built to deliver results at scale.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-end relative rounded-2xl p-6 border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-[498px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.bgImage}
                  alt={`${service.title} background`}
                  fill
                  className="object-cover"
                  // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  // priority={index < 2}
                  // quality={100}
                  // placeholder="blur"
                  // blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-white/90 mb-4">
                  {service.description}
                </p>

                {/* <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-[#1E40AF] rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul> */}

                <div className="mt-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-white hover:bg-white/20"
                    asChild
                  >
                    <a href={service.link}>
                      Read more <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
