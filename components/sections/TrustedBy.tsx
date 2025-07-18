import { Tag } from "@/components/ui/tag";

const trustedCompanies = [
  { name: "Bank of Africa", logo: "🏦" },
  { name: "Nigerian Government", logo: "🏛️" },
  { name: "Paystack", logo: "💳" },
  { name: "Flutterwave", logo: "💸" },
  { name: "Lagos State", logo: "🏙️" },
  { name: "Ghana Fintech", logo: "🇬🇭" },
  { name: "Kenya Digital", logo: "🇰🇪" },
  { name: "South Africa Bank", logo: "🇿🇦" }
];

export function TrustedBy() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Tag */}
          <Tag variant="ghost">Trusted by Industry Leaders</Tag>
          
          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center max-w-4xl mx-auto">
              Our solution is trusted by{" "}
              <span className="text-[#1E40AF]">10,000+</span> businesses
            </h2>
            
            <p className="text-lg sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              From startups to Fortune 500 companies, we&apos;ve helped organizations across Africa and the diaspora transform their digital capabilities.
            </p>
          </div>

          {/* Company Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mt-12">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group">
                <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <p className="text-sm text-muted-foreground text-center font-medium">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 