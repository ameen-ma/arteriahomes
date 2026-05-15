import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Residential Design", href: "#services" },
    { label: "Commercial Spaces", href: "#services" },
    { label: "Space Planning", href: "#services" },
    { label: "Consultation", href: "#contact" },
  ],
  company: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Arteria Home Interiors"
                width={120}
                height={120}
                className="rounded-sm"
              />
              <span className="font-[var(--font-orbitron)] text-2xl font-bold text-white">
                Arteria
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              Bespoke interior design and architecture for those who appreciate
              the finest details.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>hello@arteria.design</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>123 Design District<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          &copy; {new Date().getFullYear()} Arteria. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
