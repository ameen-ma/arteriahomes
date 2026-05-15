import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-inverse-surface w-full pt-16 md:pt-[120px] pb-8">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 grid grid-cols-12 gap-6">
        {/* Brand */}
        <div className="col-span-12 md:col-span-4 mb-8">
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Arteria"
              width={48}
              height={48}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="font-sans text-base leading-6 text-white/40 max-w-xs">
            Crafting spaces that define the next generation of architectural
            integrity across Kerala.
          </p>
        </div>

        {/* Projects Links */}
        <div className="col-span-6 md:col-span-2 flex flex-col gap-2">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-white mb-2">
            Projects
          </p>
          <a
            href="#portfolio"
            className="font-sans text-base text-white/40 hover:text-primary-container transition-colors"
          >
            Residential
          </a>
          <a
            href="#portfolio"
            className="font-sans text-base text-white/40 hover:text-primary-container transition-colors"
          >
            Commercial
          </a>
          <a
            href="#portfolio"
            className="font-sans text-base text-white/40 hover:text-primary-container transition-colors"
          >
            Hospitality
          </a>
        </div>

        {/* Studio Links */}
        <div className="col-span-6 md:col-span-2 flex flex-col gap-2">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-white mb-2">
            Studio
          </p>
          <a
            href="#services"
            className="font-sans text-base text-white/40 hover:text-primary-container transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            className="font-sans text-base text-white/40 hover:text-primary-container transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-sans text-base text-white/40 hover:text-primary-container transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Contact Info */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-white mb-2">
            Contact
          </p>
          <div className="flex items-start gap-2">
            <Mail size={16} className="mt-0.5 shrink-0 text-primary-container" />
            <span className="font-sans text-base text-white/40">
              hello@arteria.design
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Phone size={16} className="mt-0.5 shrink-0 text-primary-container" />
            <span className="font-sans text-base text-white/40">
              +91 484 000 0000
            </span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-primary-container" />
            <span className="font-sans text-base text-white/40">
              Kochi, Kerala, India
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="col-span-12 border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between">
          <p className="font-sans text-base text-white/40">
            &copy; {new Date().getFullYear()} Arteria Home Interiors. All rights
            reserved.
          </p>
          <div className="flex gap-8 mt-2 md:mt-0">
            <a
              href="#"
              className="font-sans text-base text-white/40 hover:text-primary-container transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-base text-white/40 hover:text-primary-container transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
