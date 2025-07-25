"use client"
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Tag */}
            <Tag variant="outline">Who We Are</Tag>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                Your Execution Partner for African Innovation
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tech Brokers Ltd. is a digital transformation and technology
                  consulting firm based in Nigeria, helping institutions, banks,
                  fintechs, universities, startups, and governments innovate
                  boldly and execute flawlessly.
                </p>

                <p>
                  Led by industry veteran Wasiu Popoola, we specialize in
                  launching digital banks, modernizing government services, and
                  accelerating tech-enabled growth across businesses.
                </p>

                <p className="text-xl font-normal italic text-foreground">
                  We don&apos;t just advise—we build, scale, and deliver impact
                  where it counts.
                </p>
              </div>
            </div>

            <Link href="/about" passHref>
              <Button
                asChild
                size="lg"
                className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90"
              >
                <span>
                  Meet the Founder <ArrowRight className="text-white w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Visual/Image */}
          <div className="relative">
            <div className="space-y-6">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about.jpg"
                  alt="Wasiu Popoola - Founder and CEO of Tech Brokers Ltd, digital transformation expert and fintech consultant"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
