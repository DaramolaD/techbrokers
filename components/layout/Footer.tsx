import Link from "next/link";

// Social media links data
const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    )
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: "Pinterest",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
      </svg>
    )
  }
];

// Footer sections data
const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Digital Strategy", href: "/services/digital-strategy" },
      { name: "Fintech Solutions", href: "/services/fintech" },
      { name: "Government Innovation", href: "/services/government" },
      { name: "Startup Acceleration", href: "/services/startup" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Insights", href: "/insights" }
    ]
  }
];

// Bottom links data
const bottomLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];

export function Footer() {
  return (
    <footer className="bg-[#1E40AF] border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-[#1E40AF] flex items-center justify-center">
                <span className="text-white font-bold text-sm">TB</span>
              </div>
              <span className="font-bold text-xl text-white">Tech Brokers</span>
            </div>
            <p className="text-[#DFDFDF] max-w-sm">
              Your strategy-to-execution partner for digital transformation across fintech, banking, and public innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name}
                  href={social.href} 
                  className="text-white hover:text-white/80 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
              </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-lg text-white">{section.title}</h3>
            <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-[#DFDFDF] hover:text-white transition-colors"
                    >
                      {link.name}
                </Link>
              </li>
                ))}
            </ul>
          </div>
          ))}

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Contact</h3>
            <div className="space-y-2 text-[#DFDFDF]">
              <p>info@techbrokers.com</p>
              <p>+234 123 456 7890</p>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center px-4 py-2 bg-[#1E40AF] text-white rounded-md hover:bg-[#1E40AF]/90 transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#DFDFDF] text-sm">
            © 2024 Tech Brokers Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {bottomLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-sm text-[#DFDFDF] hover:text-white transition-colors"
              >
                {link.name}
            </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 