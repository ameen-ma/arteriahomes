"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-background"
    >
      <Image
        src="/hero-banner.png"
        alt="Arteria Home Interiors — Luxury interior design"
        fill
        className="object-cover grayscale"
        priority
      />
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 md:px-16 pt-32 pb-16">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-primary-container mb-4"
            >
              Luxury Interior Design
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-[48px] leading-[52px] tracking-tight md:text-[80px] md:leading-[88px] md:-tracking-[0.02em] font-medium text-white max-w-4xl"
            >
              Spaces That Tell
              <br />
              Your Story
            </motion.h1>
          </div>

          <div className="col-span-12 md:col-span-4 pb-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sans text-lg leading-7 text-white/70"
            >
              We don&apos;t just design spaces; we craft environments that
              define the next generation of architectural integrity and interior
              artistry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center bg-white text-charcoal px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-colors duration-300"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-white/30 text-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors duration-300"
              >
                Book a Consultation
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#services" aria-label="Scroll down">
          <ArrowDown className="animate-bounce text-white/50" size={24} />
        </a>
      </motion.div>
    </section>
  );
}
