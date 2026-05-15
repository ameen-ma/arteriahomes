"use client";

import { motion } from "framer-motion";
import { Palette, Ruler, Home, Lightbulb, TreePine, Building2 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Design",
    description: "Complete home transformations that reflect your personality and lifestyle.",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Office and retail environments that elevate your brand presence.",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert color palettes that set the perfect mood for every room.",
  },
  {
    icon: Ruler,
    title: "Space Planning",
    description: "Optimized layouts that maximize beauty and functionality.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Layered lighting schemes that create ambiance and highlight architecture.",
  },
  {
    icon: TreePine,
    title: "Sustainable Design",
    description: "Eco-conscious materials and practices for the modern home.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
            What We Do
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted">
            From concept to completion, we offer a full spectrum of design
            services tailored to your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-white p-6 md:p-8 hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <service.icon
                className="text-accent mb-4"
                size={32}
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
