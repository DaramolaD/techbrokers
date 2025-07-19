"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { insightsData, categories } from "@/lib/insights-data";

// Loading skeleton component
function InsightCardSkeleton() {
  return (
    <article className="bg-white rounded-xl border shadow-sm overflow-hidden animate-pulse">
      <div className="relative h-48 bg-gray-200"></div>
      <div className="p-6 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-6 bg-gray-200 rounded w-full"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-12"></div>
        </div>
      </div>
    </article>
  );
}

export function InsightsWithFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [imageLoadingStates, setImageLoadingStates] = useState<{ [key: string]: boolean }>({});

  // Filter insights based on category
  const filteredInsights = useMemo(() => {
    return insightsData.filter((insight) => {
      return selectedCategory === "All" || insight.category === selectedCategory;
    });
  }, [selectedCategory]);

  // Show all insights or limited based on toggle
  const displayedInsights = useMemo(() => {
    return showAll ? filteredInsights : filteredInsights.slice(0, 9);
  }, [filteredInsights, showAll]);

  // Handle image load
  const handleImageLoad = (insightId: string) => {
    setImageLoadingStates(prev => ({ ...prev, [insightId]: false }));
  };

  // Initialize loading states when component mounts or insights change
  useEffect(() => {
    const states: { [key: string]: boolean } = {};
    displayedInsights.forEach(insight => {
      states[insight.id] = true;
    });
    setImageLoadingStates(states);
  }, [displayedInsights]);

  return (
    <section className="py-16 bg-gradient-to-br from-[#1E40AF]/5 via-white to-[#1E40AF]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="mb-16">
          <div className="w-full mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[#1E40AF] text-white"
                      : "bg-white text-[#1E40AF] border border-[#1E40AF] hover:bg-[#1E40AF] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All Insights Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              {selectedCategory === "All"
                ? "All Insights"
                : `${selectedCategory} Insights`}
            </h3>
            <p className="text-muted-foreground">
              {filteredInsights.length} article
              {filteredInsights.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {displayedInsights.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedInsights.map((insight, index) => (
                  <article
                    key={insight.id}
                    className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {imageLoadingStates[insight.id] && <InsightCardSkeleton />}
                      <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 6}
                        quality={85}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                          imageLoadingStates[insight.id] ? 'opacity-0' : 'opacity-100'
                        }`}
                        onLoad={() => handleImageLoad(insight.id)}
                      />
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
              
              {filteredInsights.length > displayedInsights.length && (
                <div className="text-center mt-12">
                  <Button 
                    size="lg" 
                    className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll
                      ? "Show Less"
                      : `View All ${filteredInsights.length} Articles`}{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No insights found matching your criteria.
              </p>
              <Button
                size="lg"
                className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90 mt-4"
                onClick={() => {
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
