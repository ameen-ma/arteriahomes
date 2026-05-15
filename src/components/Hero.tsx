"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-primary text-white"
    >
      <Image
        src="/hero-banner.png"
        alt="Arteria Home Interiors — Luxury interior design"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary/90" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-accent text-sm font-medium tracking-widest uppercase mb-4"
        >
          Luxury Interior Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Spaces That Tell
          <br />
          <span className="text-accent">Your Story</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-white/70"
        >
          We transform ordinary spaces into extraordinary experiences. Bespoke
          interior design crafted for those who appreciate the finest details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-light transition-colors"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-8 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            Start Your Transformation
          </a>
        </motion.div>
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
