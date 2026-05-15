"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#portfolio", id: "projects" },
  { label: "Services", href: "#services", id: "services" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-foreground/10">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Arteria"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block bg-foreground text-white px-8 py-3 font-sans text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity duration-300"
        >
          Book a Consultation
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-foreground/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="block font-sans text-sm uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-block bg-foreground text-white px-8 py-3 font-sans text-xs font-bold uppercase tracking-widest"
            onClick={() => setMobileOpen(false)}
          >
            Book a Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
