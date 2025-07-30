import { Target, Lightbulb, Shield, Heart } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We push boundaries and embrace cutting-edge technologies to solve complex challenges",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description:
      "Building lasting relationships through transparency, reliability, and ethical practices",
  },
  {
    icon: Heart,
    title: "Excellence",
    description:
      "Celebrating and amplifying talent, innovation, and potential",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We don't just advise—we deliver measurable, transformative outcomes",
  },
];

export function AboutStory() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#1E40AF]/5">
      <div className="container grid gap-16 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl text-center sm:text-4xl font-semibold leading-tight">
              Our Mission & Vision
            </h2>

            <div className="max-w-5xl mx-auto my-10 space-y-6">
              <div className="flex justify-start">
                <div className="bg-white max-w-2xl rounded-xl p-6 py-10 border shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-[#1E40AF] mb-3">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be most trusted partner for digital innovation, and
                    transformation.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-white max-w-2xl rounded-xl p-6 py-10 border shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-[#1E40AF] mb-3">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To leverage digital technology to deliver strategic
                    guidance, technical expertise, and execution capabilities
                    that enable businesses and governments to thrive in the
                    digital economy.
                  </p>
                </div>
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
              These principles guide everything we do, from client relationships
              to innovation strategies.
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
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
