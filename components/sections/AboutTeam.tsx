import { Linkedin, Twitter, Globe } from "lucide-react";
import Image from "next/image";

const leadership = [
  {
    name: "Wasiu Popoola",
    role: "Founder & CEO",
    bio: "Industry veteran with 15+ years in digital transformation, having led projects for major banks and governments across Africa.",
    image: "/images/about.jpg",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "Former Google engineer with expertise in scalable fintech architectures and emerging technologies.",
    image: "/images/service_1.jpg",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "David Okechukwu",
    role: "Head of Strategy",
    bio: "Strategy consultant with deep experience in African markets and government innovation projects.",
    image: "/images/service_2.jpg",
    linkedin: "#",
    twitter: "#",
    website: "#"
  }
];

const expertise = [
  {
    category: "Digital Banking",
    experts: 12,
    projects: 45,
    description: "Core banking systems, neo-banking platforms, payment solutions"
  },
  {
    category: "Government Innovation",
    experts: 8,
    projects: 23,
    description: "Digital services, citizen engagement, process automation"
  },
  {
    category: "Startup Acceleration",
    experts: 15,
    projects: 67,
    description: "Product development, scaling strategies, investment readiness"
  },
  {
    category: "Technology Consulting",
    experts: 20,
    projects: 89,
    description: "System integration, cloud migration, security implementation"
  }
];

export function AboutTeam() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Leadership */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced leaders driving innovation and transformation across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                    <p className="text-[#1E40AF] font-medium">{leader.role}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                  
                  <div className="flex space-x-3">
                    <a href={leader.linkedin} className="text-muted-foreground hover:text-[#1E40AF] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={leader.twitter} className="text-muted-foreground hover:text-[#1E40AF] transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href={leader.website} className="text-muted-foreground hover:text-[#1E40AF] transition-colors">
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep domain knowledge across key areas of digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1E40AF] mb-2">{area.experts}</div>
                  <div className="text-sm text-muted-foreground mb-4">Experts</div>
                  
                  <h3 className="text-lg font-semibold mb-3">{area.category}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  
                  <div className="text-2xl font-bold text-[#1E40AF]">{area.projects}</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 