import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-[#1E40AF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">TB</span>
              </div>
              <span className="font-bold text-xl">Tech Brokers</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-[#1E40AF]">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#1E40AF]">
              About
            </Link>
            <Link href="/insights" className="text-sm font-medium transition-colors hover:text-[#1E40AF]">
              Insights
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-[#1E40AF]">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 