"use client";

import { motion } from "framer-motion";

interface CTABannerProps {
  headline?: string;
  description?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export function CTABanner({
  headline = "Ready to Transform Your Space?",
  description = "Let's create something extraordinary together. Book a free consultation and take the first step toward your dream interior.",
  primaryCTA = "Book Free Consultation",
  primaryHref = "#contact",
  secondaryCTA = "View Our Portfolio",
  secondaryHref = "#portfolio",
}: CTABannerProps) {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            {headline}
          </h2>
          <p className="mt-4 text-white/70 text-lg">{description}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryHref}
              className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-light transition-colors"
            >
              {primaryCTA}
            </a>
            <a
              href={secondaryHref}
              className="rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              {secondaryCTA}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
