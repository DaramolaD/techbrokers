import { Linkedin, Twitter, Globe } from "lucide-react";
import Image from "next/image";

const leadership = [
  {
    name: "Wasiu Popoola O.",
    role: "Founder & CEO",
    bio: "Seasoned global technology and financial services leader with over two decades of executive experience driving digital transformation, innovation and fintech solutions across Africa and beyond. As CEO of Tech Brokers Ltd, he steers strategy, product innovation and go-to-market expansion to accelerate clients' digital journeys across Financial, Education, Agriculture, Transport & Logistics, Commerce and Public sectors.",
    detailedBio: "Prior to founding Tech Brokers, Wasiu served as Chief Digital Officer and CIO of Lotus Bank, where he architected the bank's end-to-end digital banking structure, and as Chief Digital & Innovation Officer in the foundational team at Parallex Bank. He has held leadership roles at Sterling Bank, First Bank, Access Bank and FCMB, spearheading numerous large-scale digital payments and transformation projects for blue-chip clients including Promasidor, Multichoice Nigeria and state governments.",
    credentials: "MSc Computer Science, Executive MBA, MIT Digital Transformation, PMI, ISACA, SAP consulting",
    image: "/images/wasiupopool.jpg",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    bio: "Former Google engineer with expertise in scalable fintech architectures and emerging technologies.",
    detailedBio: "Leading our technical strategy and innovation initiatives with deep expertise in cloud-native architectures and AI-driven solutions.",
    credentials: "MSc Computer Science, Google Engineering, AWS Solutions Architect",
    image: "/images/service_1.jpg",
    linkedin: "#",
    twitter: "#",
    website: "#"
  },
  {
    name: "David Okechukwu",
    role: "Head of Strategy",
    bio: "Strategy consultant with deep experience in African markets and government innovation projects.",
    detailedBio: "Driving strategic initiatives and market expansion across Africa with focus on digital transformation and innovation.",
    credentials: "MBA Strategy, McKinsey & Company, African Development Bank",
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
              Experienced leaders driving innovation and transformation across Africa with decades of combined expertise in fintech, digital banking, and technology consulting.
            </p>
          </div>

          <div className="space-y-12">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border shadow-sm hover:shadow-lg transition-shadow overflow-hidden ${
                  index === 0 ? 'ring-2 ring-[#1E40AF] ring-opacity-20' : ''
                }`}
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="relative h-80 lg:h-full overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="lg:col-span-2 p-8 space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{leader.name}</h3>
                      <p className="text-[#1E40AF] font-medium text-lg mb-4">{leader.role}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {leader.bio}
                      </p>
                      
                      {leader.detailedBio && (
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {leader.detailedBio}
                        </p>
                      )}
                      
                      {leader.credentials && (
                        <div className="pt-2">
                          <p className="text-sm font-medium text-[#1E40AF] mb-1">Credentials & Certifications:</p>
                          <p className="text-sm text-muted-foreground">{leader.credentials}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex space-x-3 pt-4">
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
              Deep domain knowledge across key areas of digital transformation and fintech innovation.
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