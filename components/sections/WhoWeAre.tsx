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
        <div className="grid gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Tag */}
            <Tag variant="outline">Who We Are</Tag>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                Your Execution Partner
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tech Brokers Ltd. is a digital transformation and technology
                  consulting firm based in Lagos, Nigeria, helping businesses,
                  banks, fintechs, universities, startups, and governments
                  innovate boldly and execute flawlessly.
                </p>

                <p>
                  Led by industry veterans, we specialize in
                  launching digital banks, modernizing government services, and
                  accelerating tech-enabled growth across various sectors of the economy.
                </p>

                <p className="text-xl font-normal italic text-foreground">
                  We don&apos;t just advise—we build, scale, and deliver impact
                  where it counts.
                </p>
              </div>
            </div>

            {/* <Link href="/about" passHref>
              <Button
                asChild
                size="lg"
                className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90"
              >
                <span>
                  Meet the Founder <ArrowRight className="text-white w-4 h-4" />
                </span>
              </Button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
