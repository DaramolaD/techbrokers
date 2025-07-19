import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/sections/PageHero";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL('https://techbrokers.com'),
  title: "Contact Us - Tech Brokers Ltd. | Get in Touch for Digital Transformation",
  description: "Get in touch with Tech Brokers Ltd. for digital transformation consulting, fintech solutions, and technology innovation across Africa.",
  keywords: "contact Tech Brokers, digital transformation consulting, fintech consulting, technology consulting Africa",
  openGraph: {
    title: "Contact Us - Tech Brokers Ltd. | Get in Touch for Digital Transformation",
    description: "Get in touch with Tech Brokers Ltd. for digital transformation consulting, fintech solutions, and technology innovation across Africa.",
  },
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+234 123 456 7890",
    description: "Call us for immediate assistance"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@techbrokers.com",
    description: "Send us a message anytime"
  },
  {
    icon: MapPin,
    title: "Office",
    details: "Lagos, Nigeria",
    description: "Visit our headquarters"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9AM - 6PM",
    description: "WAT (West African Time)"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero 
          tag="Get in Touch"
          title="Let's Build Something Exceptional Together"
          description="Ready to transform your digital capabilities? Get in touch with our team of experts to discuss your project and explore how we can help you achieve your goals."
        />

        {/* Contact Form & Info */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interest
                    </label>
                    <select id="service" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent">
                      <option value="">Select a service</option>
                      <option value="digital-banking">Digital Banking Strategy</option>
                      <option value="technology-consulting">Technology Consulting</option>
                      <option value="product-innovation">Product Innovation</option>
                      <option value="startup-acceleration">Startup Acceleration</option>
                      <option value="government-innovation">Government Innovation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project and goals..."
                      rows={6}
                    />
                  </div>

                  <Button size="lg" className="w-full bg-[#1E40AF] hover:bg-[#1E40AF]/90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-semibold">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground">
                    Get in touch with us through any of these channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-[#1E40AF]" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-[#1E40AF] font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Contact */}
                <div className="bg-primary-tint rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Need Immediate Help?</h3>
                  <p className="text-muted-foreground">
                    For urgent inquiries, call us directly or schedule a consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="bg-[#1E40AF] hover:bg-[#1E40AF]/90">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" size="lg" className="border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white">
                      Schedule Call
                    </Button>
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