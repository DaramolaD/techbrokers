import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  BookOpen,
  Tag,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { insightsData, getRelatedInsights } from "@/lib/insights-data";

interface InsightPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const insight = insightsData.find((insight) => insight.id === params.id);

  if (!insight) {
    return {
      title: "Insight Not Found - Tech Brokers Ltd.",
      description: "The requested insight could not be found.",
    };
  }

  return {
    metadataBase: new URL('https://techbrokers.com'),
    title: `${insight.title} - Tech Brokers Ltd.`,
    description: insight.excerpt,
    keywords: insight.tags.join(", "),
    authors: [{ name: insight.author }],
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
      publishedTime: insight.date,
      authors: [insight.author],
      images: [
        {
          url: insight.image,
          width: 800,
          height: 400,
          alt: insight.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.excerpt,
      images: [insight.image],
    },
    alternates: {
      canonical: `/insights/${insight.id}`,
    },
  };
}



export default function InsightPage({ params }: InsightPageProps) {
  const insight = insightsData.find((insight) => insight.id === params.id);
  const relatedInsights = getRelatedInsights(params.id, 3);

  // Structured data for SEO
  const structuredData = insight ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": insight.title,
    "description": insight.excerpt,
    "image": insight.image,
    "author": {
      "@type": "Person",
      "name": insight.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tech Brokers Ltd.",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logo.png"
      }
    },
    "datePublished": insight.date,
    "dateModified": insight.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `/insights/${insight.id}`
    }
  } : null;

  if (!insight) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl font-semibold mb-4">Insight Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The requested insight could not be found.
            </p>
            <Link href="/insights">
              <Button
                size="lg"
                className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      <main>
        {/* Hero Section */}
        <section className="pt-16 pb-20 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#1E40AF]/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href="/insights"
                className="inline-flex items-center text-[#1E40AF] hover:text-[#1E40AF]/80 mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Link>
            <div className="max-w-4xl mx-auto">
              
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-4">
                {insight.category}
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                {insight.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {insight.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{insight.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{insight.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{insight.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{insight.type === 'case-study' ? 'Case Study' : 'Article'}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {insight.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#1E40AF]/10 text-[#1E40AF]"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  {/* Featured Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      width={800}
                      height={400}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 800px"
                      priority={true}
                      quality={90}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    <div 
                      className="space-y-6 text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ 
                        __html: insight.content.replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">')
                          .replace(/<h3>/g, '<h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">')
                          .replace(/<p>/g, '<p class="text-gray-700 leading-relaxed mb-4">')
                          .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 mb-4">')
                          .replace(/<li>/g, '<li class="text-gray-700">')
                      }} 
                    />
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Share */}
                  <div className="bg-white rounded-xl p-6 border shadow-sm">
                    <h3 className="font-semibold mb-4">Share this article</h3>
                    <div className="flex flex-wrap space-x-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Linkedin className="w-4 h-4 mr-2" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Twitter className="w-4 h-4 mr-2" />
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Facebook className="w-4 h-4 mr-2" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Author */}
                  <div className="bg-white rounded-xl p-6 border shadow-sm">
                    <h3 className="font-semibold mb-4">About the Author</h3>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-[#1E40AF]" />
                      </div>
                      <div>
                        <div className="font-medium">{insight.author}</div>
                        <div className="text-sm text-muted-foreground">Tech Brokers Ltd.</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Related Articles */}
                  <div className="bg-white rounded-xl p-6 border shadow-sm">
                    <h3 className="font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedInsights.map((relatedInsight, index) => (
                        <Link 
                          key={index} 
                          href={`/insights/${relatedInsight.id}`}
                          className="block group"
                        >
                          <div className="space-y-2">
                            <h4 className="font-medium text-[#1E40AF] group-hover:underline text-sm leading-tight">
                              {relatedInsight.title}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {relatedInsight.readTime} • {relatedInsight.category}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
