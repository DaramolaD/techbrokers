import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tag } from "../ui/tag";
import Link from "next/link";

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
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-8xl relative z-10">
        <div className="flex items-center justify-start min-h-[80vh]">
          <div className="text-left space-y-6 lg:space-y-8 max-w-5xl">
            <div className="space-y-4 lg:space-y-6">
              {/* Tag */}
              <Tag
                variant="outline"
                className="bg-white/10 border-white/20 text-white flex items-center gap-2"
              >
                <div className="relative mr-1 w-2 h-2 flex items-center justify-center">
                  {/* Ripple layers */}
                  <div className="absolute w-3 h-3 bg-white/40 rounded-full blink-ripple"></div>
                  <div
                    className="absolute w-2.5 h-2.5 bg-white/60 rounded-full blink-ripple"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full blink-dot"></div>
                </div>
                Strategy. Speed. Scale.
              </Tag>

              <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight lg:leading-tight text-white">
                Empowering Financial Institutions, Startups & Governments to
                Build, Scale, and Lead Digitally
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl xl:text-2xl text-white/90 leading-relaxed max-w-4xl font-normal">
                Tech Brokers Ltd. is your strategy-to-execution partner for
                digital transformation across fintech, banking, edutech, public
                innovation and other sectors of the economy.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact" passHref>
                <Button
                  asChild
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                >
                  <span>Let&apos;s Talk</span>
                </Button>
              </Link>
              <Link href="#services" passHref>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white/30 text-[#1E40AF] hover:bg-white hover:text-black"
                >
                  <span>Explore Services</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
