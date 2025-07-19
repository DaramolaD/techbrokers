import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    featured: true
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
    featured: true
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
    featured: false
  }
];

export function InsightsPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#1E40AF]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and thought leadership in digital transformation and fintech innovation across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredInsights.map((insight, index) => (
            <article key={index} className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {insight.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1E40AF] text-white">
                      Featured
                    </div>
                  </div>
                )}
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
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/insights">
            <Button size="lg" className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90">
              View All Insights <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 