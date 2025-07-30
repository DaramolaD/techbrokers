import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Target, Users, Shield, Zap, TrendingUp, Award, CheckCircle } from "lucide-react";

const methodologies = [
  {
    icon: Lightbulb,
    title: "Design Thinking",
    description: "Human-centered approach to problem-solving that puts user needs at the core of every solution",
    benefits: ["User empathy", "Creative solutions", "Iterative improvement"]
  },
  {
    icon: Target,
    title: "Agile Development",
    description: "Rapid iteration and continuous delivery ensuring quality and adaptability throughout the project",
    benefits: ["Fast delivery", "Flexible scope", "Continuous feedback"]
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Working closely with your team to ensure alignment and knowledge transfer",
    benefits: ["Team alignment", "Knowledge transfer", "Stakeholder buy-in"]
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Built-in security measures and compliance standards from day one",
    benefits: ["Regulatory compliance", "Data protection", "Risk mitigation"]
  }
];

export function ServicesMethodology() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Methodologies */}
        {/* <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Our Methodologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven frameworks and approaches that ensure successful project delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((methodology, index) => {
              const IconComponent = methodology.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3">{methodology.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {methodology.description}
                  </p>
                  
                  <div className="space-y-2">
                    {methodology.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#1E40AF] rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}

        {/* Success Metrics */}
        {/* <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl font-bold text-[#1E40AF] mb-2">{metric.metric}</div>
                <div className="text-lg font-semibold mb-2">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Why Choose Our Services */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine deep expertise with proven methodologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Speed to Market</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our streamlined processes and experienced teams ensure rapid delivery without compromising quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Proven Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Track record of successful projects across diverse industries and geographies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[#1E40AF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Architectures designed to grow with your business and adapt to changing needs.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90">
                Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="bg-gradient-to-br from-[#1E40AF]/10 to-[#1E40AF]/5 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Ready to Transform?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Detailed project roadmap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Dedicated project team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Post-launch support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 