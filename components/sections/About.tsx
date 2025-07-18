import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Leading Digital Transformation in Africa
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a team of strategic thinkers, technology experts, and industry veterans committed to driving digital innovation across the African continent and diaspora.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#1E40AF]">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#1E40AF]">200+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#1E40AF]">15+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-[#1E40AF]">$2B+</div>
                <div className="text-sm text-muted-foreground">Value Created</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Our Approach</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#1E40AF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Strategic consulting with hands-on implementation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#1E40AF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Deep expertise in fintech and government innovation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#1E40AF] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Local knowledge with global best practices</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="px-8">
              Learn More About Us
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#1E40AF]/20 to-[#1E40AF]/10 rounded-2xl p-6 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1E40AF]">Fintech</div>
                    <div className="text-sm text-muted-foreground">Innovation</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#1E40AF]/15 to-[#1E40AF]/5 rounded-2xl p-6 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1E40AF]">Banking</div>
                    <div className="text-sm text-muted-foreground">Transformation</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-[#1E40AF]/10 to-[#1E40AF]/20 rounded-2xl p-6 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1E40AF]">Government</div>
                    <div className="text-sm text-muted-foreground">Innovation</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#1E40AF]/20 to-[#1E40AF]/10 rounded-2xl p-6 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1E40AF]">Startups</div>
                    <div className="text-sm text-muted-foreground">Acceleration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 