import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import Image from "next/image";

export function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                Let&apos;s Build Something Exceptional Together
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you&apos;re a fintech founder, a public sector innovator, or a bank CEO—we&apos;re ready to move fast and deliver results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 bg-[#1E40AF] hover:bg-[#1E40AF]/90">
                <Phone className="w-4 h-4 mr-2" />
                Book A Call
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Send a Message
              </Button>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
              <Image
                src="/images/service_3.jpg"
                alt="Let's build something exceptional together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 