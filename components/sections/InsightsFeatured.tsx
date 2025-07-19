import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, BookOpen, Video, Mic } from "lucide-react";
import Link from "next/link";
import { ProgressiveImage } from "@/components/ui/progressive-image";

const featuredInsights = [
  {
    id: "future-digital-banking-africa-2024",
    title: "The Future of Digital Banking in Africa: 2024 Trends",
    excerpt: "Comprehensive analysis of emerging digital banking trends, regulatory changes, and technological innovations shaping Africa's financial landscape.",
    author: "Wasiu Popoola",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Digital Banking",
    image: "/images/service_1.jpg",
    featured: true,
    type: "article",
    tags: ["Digital Banking", "Fintech", "Africa", "2024 Trends"]
  },
  {
    id: "government-innovation-success-stories",
    title: "Government Innovation: Digital Transformation Success Stories",
    excerpt: "Real-world case studies of African governments successfully implementing digital transformation initiatives.",
    author: "Tech Brokers Team",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "Government Innovation",
    image: "/images/service_2.jpg",
    featured: true,
    type: "case-study",
    tags: ["Government", "Digital Services", "Case Studies"]
  }
];

const allInsights = [
  {
    id: "future-digital-banking-africa-2024",
    title: "The Future of Digital Banking in Africa: 2024 Trends",
    excerpt: "Comprehensive analysis of emerging digital banking trends, regulatory changes, and technological innovations shaping Africa's financial landscape.",
    author: "Wasiu Popoola",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Digital Banking",
    image: "/images/service_1.jpg",
    featured: true,
    type: "article"
  },
  {
    id: "government-innovation-success-stories",
    title: "Government Innovation: Digital Transformation Success Stories",
    excerpt: "Real-world case studies of African governments successfully implementing digital transformation initiatives.",
    author: "Tech Brokers Team",
    date: "March 12, 2024",
    readTime: "12 min read",
    category: "Government Innovation",
    image: "/images/service_2.jpg",
    featured: true,
    type: "case-study"
  },
  {
    id: "startup-acceleration-scalable-fintech",
    title: "Startup Acceleration: Building Scalable Fintech Solutions",
    excerpt: "Key strategies for fintech startups to scale effectively in the African market and beyond.",
    author: "Tech Brokers Team",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Startup Acceleration",
    image: "/images/service_3.jpg",
    featured: false,
    type: "article"
  },
  {
    id: "ai-fintech-africa-opportunities",
    title: "AI in Fintech: Opportunities and Challenges in Africa",
    excerpt: "Exploring how artificial intelligence is transforming financial services across the African continent.",
    author: "Sarah Johnson",
    date: "March 1, 2024",
    readTime: "10 min read",
    category: "Technology Trends",
    image: "/images/service_4.jpg",
    featured: false,
    type: "article"
  },
  {
    id: "blockchain-africa-financial-inclusion",
    title: "Blockchain for Financial Inclusion in Africa",
    excerpt: "How blockchain technology is enabling financial inclusion and economic empowerment across Africa.",
    author: "David Okechukwu",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Technology Trends",
    image: "/images/service_1.jpg",
    featured: false,
    type: "article"
  },
  {
    id: "mobile-money-evolution-africa",
    title: "The Evolution of Mobile Money in Africa",
    excerpt: "From M-Pesa to modern digital wallets: the journey of mobile money innovation in Africa.",
    author: "Tech Brokers Team",
    date: "February 25, 2024",
    readTime: "9 min read",
    category: "Digital Banking",
    image: "/images/service_2.jpg",
    featured: false,
    type: "article"
  },
  {
    id: "regulatory-compliance-fintech-africa",
    title: "Regulatory Compliance in African Fintech",
    excerpt: "Navigating the complex regulatory landscape for fintech companies operating in Africa.",
    author: "Wasiu Popoola",
    date: "February 20, 2024",
    readTime: "11 min read",
    category: "Security & Compliance",
    image: "/images/service_3.jpg",
    featured: false,
    type: "article"
  },
  {
    id: "smart-cities-africa-digital-transformation",
    title: "Smart Cities: Digital Transformation in African Urban Centers",
    excerpt: "How African cities are leveraging technology to improve infrastructure and citizen services.",
    author: "Tech Brokers Team",
    date: "February 18, 2024",
    readTime: "8 min read",
    category: "Government Innovation",
    image: "/images/service_4.jpg",
    featured: false,
    type: "article"
  },
  {
    id: "investment-trends-african-fintech",
    title: "Investment Trends in African Fintech: 2024 Outlook",
    excerpt: "Analysis of venture capital flows and investment opportunities in Africa's fintech ecosystem.",
    author: "Sarah Johnson",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Startup Ecosystem",
    image: "/images/service_1.jpg",
    featured: false,
    type: "article"
  },
  {
    id: "cybersecurity-fintech-africa",
    title: "Cybersecurity Challenges in African Fintech",
    excerpt: "Addressing security threats and building robust cybersecurity frameworks for fintech companies.",
    author: "David Okechukwu",
    date: "February 12, 2024",
    readTime: "9 min read",
    category: "Security & Compliance",
    image: "/images/service_2.jpg",
    featured: false,
    type: "article"
  },
  {
    id: "open-banking-africa-opportunities",
    title: "Open Banking: Opportunities and Implementation in Africa",
    excerpt: "How open banking is reshaping financial services and creating new opportunities in Africa.",
    author: "Tech Brokers Team",
    date: "February 10, 2024",
    readTime: "7 min read",
    category: "Digital Banking",
    image: "/images/service_3.jpg",
    featured: false,
    type: "article"
  },
  {
    id: "digital-identity-africa-financial-inclusion",
    title: "Digital Identity Solutions for Financial Inclusion in Africa",
    excerpt: "Innovative approaches to digital identity that are enabling financial inclusion across the continent.",
    author: "Wasiu Popoola",
    date: "February 8, 2024",
    readTime: "10 min read",
    category: "Technology Trends",
    image: "/images/service_4.jpg",
    featured: false,
    type: "article"
  }
];

const contentTypes = [
  {
    icon: BookOpen,
    title: "Articles",
    count: 45,
    description: "In-depth analysis and thought leadership"
  },
  {
    icon: Video,
    title: "Webinars",
    count: 12,
    description: "Expert discussions and presentations"
  },
  {
    icon: Mic,
    title: "Podcasts",
    count: 28,
    description: "Conversations with industry leaders"
  }
];

export function InsightsFeatured() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#1E40AF]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Insights */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Featured Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dives into the most important trends and developments in African digital transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredInsights.map((insight, index) => (
              <article key={index} className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <ProgressiveImage
                    src={insight.image}
                    alt={insight.title}
                    fill={true}
                    className="h-64 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1E40AF] text-white">
                      {insight.type === 'case-study' ? 'Case Study' : 'Featured'}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {insight.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold leading-tight group-hover:text-[#1E40AF] transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{insight.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{insight.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                  
                  <Link href={`/insights/${insight.id}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#1E40AF] hover:text-[#1E40AF] hover:bg-[#1E40AF]/10"
                    >
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Insights Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest analysis, trends, and thought leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allInsights.slice(2, 8).map((insight, index) => (
              <article key={index} className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <ProgressiveImage
                  src={insight.image}
                  alt={insight.title}
                  fill={true}
                  className="h-48 group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="p-6 space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {insight.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold leading-tight group-hover:text-[#1E40AF] transition-colors">
                    {insight.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{insight.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{insight.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                  
                  <Link href={`/insights/${insight.id}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#1E40AF] hover:text-[#1E40AF] hover:bg-[#1E40AF]/10"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/insights/all">
              <Button size="lg" className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90">
                View All Insights <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Content Types */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              Explore Our Content
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diverse formats to suit your learning preferences and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contentTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="w-16 h-16 bg-[#1E40AF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-[#1E40AF]" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <div className="text-2xl font-bold text-[#1E40AF] mb-2">{type.count}</div>
                  <p className="text-muted-foreground text-sm">{type.description}</p>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white"
                  >
                    Browse {type.title}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 