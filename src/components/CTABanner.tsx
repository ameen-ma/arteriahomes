"use client";

import { motion } from "framer-motion";

interface CTABannerProps {
  headline?: string;
  description?: string;
  primaryCTA?: string;
  primaryHref?: string;
}

export function CTABanner({
  headline = "Experience Precision Firsthand",
  description = "Visit our studio or book a free consultation to witness the intersection of architectural rigor and interior artistry.",
  primaryCTA = "Book a Consultation",
  primaryHref = "#contact",
}: CTABannerProps) {
  return (
    <section className="w-full bg-charcoal py-16 md:py-[120px] px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-[1440px] flex flex-col items-center text-center"
      >
        <h2 className="font-serif text-[48px] leading-[52px] md:text-[80px] md:leading-[88px] md:-tracking-[0.02em] font-medium text-white mb-8">
          {headline}
        </h2>
        <p className="font-sans text-lg leading-7 text-white/70 max-w-2xl mb-16">
          {description}
        </p>
        <a
          href={primaryHref}
          className="bg-white text-charcoal px-12 py-5 font-sans text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-colors duration-500"
        >
          {primaryCTA}
        </a>
      </motion.div>
    </section>
  );
}
