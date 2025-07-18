import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tag } from "../ui/tag";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero.jpg" 
          alt="Tech Brokers Digital Transformation" 
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl relative z-10">
        <div className="flex items-center justify-left min-h-[80vh]">
          <div className="text-left space-y-6 lg:space-y-8 max-w-5xl">
            <div className="space-y-4 lg:space-y-6">
              {/* Tag */}
              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E40AF] rounded-full border border-[#1E40AF]/20">
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                  Strategy. Speed. Scale.
                </span>
              </div> */}
              <Tag variant="ghost">Strategy. Speed. Scale.</Tag>
              
              <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight lg:leading-tight text-white">
                Empowering Institutions, Startups & Governments to Build, Scale, and Lead Digitally
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-2xl text-white/90 leading-relaxed max-w-4xl font-normal">
                Tech Brokers Ltd. is your strategy-to-execution partner for digital transformation across fintech, banking, and public innovation in Africa and the diaspora.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Let&apos;s Talk
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-base cursor-pointer sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 