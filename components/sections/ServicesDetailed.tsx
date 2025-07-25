"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Target, Zap, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
}

type ServiceProcesses = {
  [key: string]: ProcessStep[];
};

const serviceProcesses: ServiceProcesses = {
  "Digital Banking": [
    {
      step: "01",
      title: "Regulatory Assessment",
      description: "Analyze banking regulations and compliance requirements",
      icon: Shield,
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Core System Design",
      description: "Architect modern core banking infrastructure",
      icon: Target,
      duration: "3-4 weeks"
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build and integrate banking systems with security focus",
      icon: Zap,
      duration: "12-16 weeks"
    },
    {
      step: "04",
      title: "Testing & Compliance",
      description: "Rigorous testing and regulatory approval process",
      icon: TrendingUp,
      duration: "4-6 weeks"
    }
  ],
  "Technology Consulting": [
    {
      step: "01",
      title: "Current State Analysis",
      description: "Comprehensive assessment of existing technology stack",
      icon: Target,
      duration: "2-3 weeks"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create technology roadmap and migration strategy",
      icon: Zap,
      duration: "3-4 weeks"
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Detailed implementation plan with risk mitigation",
      icon: Shield,
      duration: "2-3 weeks"
    },
    {
      step: "04",
      title: "Execution & Optimization",
      description: "Execute strategy with continuous optimization",
      icon: TrendingUp,
      duration: "8-12 weeks"
    }
  ],
  "Product Innovation": [
    {
      step: "01",
      title: "Market Research",
      description: "Deep market analysis and user research",
      icon: Target,
      duration: "2-3 weeks"
    },
    {
      step: "02",
      title: "MVP Design",
      description: "Rapid prototyping and user experience design",
      icon: Zap,
      duration: "3-4 weeks"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with user feedback loops",
      icon: Shield,
      duration: "6-10 weeks"
    },
    {
      step: "04",
      title: "Launch & Iteration",
      description: "Product launch with continuous improvement",
      icon: TrendingUp,
      duration: "2-4 weeks"
    }
  ],
  "Government Innovation": [
    {
      step: "01",
      title: "Stakeholder Engagement",
      description: "Engage government stakeholders and citizens",
      icon: Target,
      duration: "2-3 weeks"
    },
    {
      step: "02",
      title: "Service Design",
      description: "Design citizen-centric digital services",
      icon: Zap,
      duration: "4-5 weeks"
    },
    {
      step: "03",
      title: "Development & Security",
      description: "Build secure government systems with compliance",
      icon: Shield,
      duration: "10-14 weeks"
    },
    {
      step: "04",
      title: "Deployment & Training",
      description: "Deploy with comprehensive training and support",
      icon: TrendingUp,
      duration: "3-4 weeks"
    }
  ]
};

const detailedServices = [
  {
    category: "Digital Banking",
    services: [
      "Core Banking System Modernization",
      "Neo-Banking Platform Development",
      "Payment Gateway Integration",
      "Mobile Banking Applications",
      "Digital Identity Solutions",
      "Regulatory Compliance Systems",
      "Financial Inclusion & Agency Banking",
      "Merchant Acquiring services",
      "Debit and Credit",
      "Card Business"
    ],
    image: "/images/service_1.jpg",
    benefits: ["Quick time to market", "99.9% uptime guarantee", "Regulatory compliant"]
  },
  {
    category: "Technology Consulting",
    services: [
      "System Architecture Design",
      "Cloud Migration Strategy",
      "Security Implementation",
      "API Development & Integration",
      "Data Analytics & BI",
      "DevOps & CI/CD Setup"
    ],
    image: "/images/service_2.jpg",
    benefits: ["Scalable architecture", "Cost optimization", "Future-proof solutions"]
  },
  {
    category: "Product Innovation",
    services: [
      "Product Strategy & Roadmap",
      "MVP Development",
      "User Experience Design",
      "Market Research & Validation",
      "Feature Development",
      "Product Launch Strategy"
    ],
    image: "/images/service_3.jpg",
    benefits: ["User-centered design", "Rapid prototyping", "Market validation"]
  },
  {
    category: "Government Innovation",
    services: [
      "Digital Service Platforms",
      "Citizen Engagement Systems",
      "Process Automation",
      "Data Management Solutions",
      "E-Government Portals",
      "Smart City Initiatives",
      "Service Aggregation Platform"
    ],
    image: "/images/service_4.jpg",
    benefits: ["Citizen-centric design", "Transparency focus", "Efficiency gains"]
  }
];

export function ServicesDetailed() {
  const [selectedService, setSelectedService] = useState("Digital Banking");

  return (
    <section className="py-24 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#1E40AF]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Selection */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Our Service Processes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each service has its own specialized approach and timeline.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(serviceProcesses).map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedService === service
                    ? "bg-[#1E40AF] text-white shadow-lg"
                    : "bg-white text-[#1E40AF] border border-[#1E40AF] hover:bg-[#1E40AF]/10"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Service Process */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">{selectedService} Process</h3>
            <p className="text-muted-foreground">
              Our specialized approach for {selectedService.toLowerCase()} projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceProcesses[selectedService].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#1E40AF]" />
                    </div>
                    <div className="text-2xl font-bold text-[#1E40AF]">{process.step}</div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {process.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{process.duration}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Services */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Comprehensive Service Offerings
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end digital transformation solutions.
            </p>
          </div>

          <div className="space-y-16">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-[#1E40AF]">{service.category}</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {service.services.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-[#1E40AF]/5 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#1E40AF] rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button size="lg" className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={service.category}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 