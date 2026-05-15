"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Residential Design",
    image: "/services/residential-design.png",
    description:
      "Complete home transformations that reflect your personality and lifestyle. We craft bespoke living spaces with meticulous attention to materials, light, and spatial flow.",
    stats: [
      { label: "Approach", value: "Bespoke" },
      { label: "Focus", value: "Detail-Oriented" },
    ],
  },
  {
    num: "02",
    title: "Commercial Spaces",
    image: "/services/commercial-spaces.png",
    description:
      "Office and retail environments that elevate your brand presence. Strategic design that balances aesthetics with operational efficiency.",
    stats: [
      { label: "Standard", value: "Premium" },
      { label: "Timeline", value: "End-to-End" },
    ],
  },
  {
    num: "03",
    title: "Space Planning",
    image: "/services/space-planning.png",
    description:
      "Optimized layouts that maximize beauty and functionality. Data-driven spatial analysis for intelligent interior architecture.",
    stats: [
      { label: "Method", value: "Data-Driven" },
      { label: "Outcome", value: "+30% Utilization" },
    ],
  },
  {
    num: "04",
    title: "Modular Interiors",
    image: "/services/modular-interiors.png",
    description:
      "Precision-engineered modular kitchens and wardrobes delivered to exacting standards. Functional artistry for the modern Kerala home.",
    stats: [
      { label: "Quality", value: "10-Year Warranty" },
      { label: "Delivery", value: "On-Time" },
    ],
  },
];

const processSteps = [
  {
    phase: "Phase 01",
    title: "Discover",
    description:
      "Deep-dive consultation to understand your vision, lifestyle, and spatial requirements.",
  },
  {
    phase: "Phase 02",
    title: "Design",
    description:
      "Transforming ideas into detailed plans using 3D visualization and material sampling.",
  },
  {
    phase: "Phase 03",
    title: "Deliver",
    description:
      "Rigorous on-site execution with full transparency on budgets and timelines.",
  },
  {
    phase: "Phase 04",
    title: "Evolve",
    description:
      "Post-completion support and optimization to ensure your space continues to perform.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full bg-background">
      {/* Header */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 pt-32 pb-16 md:pt-[160px] md:pb-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4"
            >
              Our Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[32px] leading-10 md:text-[48px] md:leading-[56px] font-normal text-foreground max-w-4xl"
            >
              Defining the intersection of architecture and interior artistry.
            </motion.h2>
          </div>
          <div className="col-span-12 md:col-span-4 pb-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-lg leading-7 text-muted"
            >
              From concept to completion, we offer a full spectrum of design
              services tailored to your vision and lifestyle.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Service Sections */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0;
        return (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-foreground/10 py-16 md:py-[120px] px-6 md:px-16"
          >
            <div className="mx-auto max-w-[1440px] grid grid-cols-12 gap-6">
              {/* Text side */}
              <div
                className={`col-span-12 md:col-span-5 order-2 md:order-${isEven ? "1" : "2"} flex flex-col justify-center`}
              >
                <span className="font-sans text-2xl font-light leading-8 text-primary mb-4">
                  {service.num}.
                </span>
                <h3 className="font-serif text-[32px] md:text-[48px] leading-10 md:leading-[56px] font-normal text-foreground mb-8">
                  {service.title}
                </h3>
                <p className="font-sans text-lg leading-7 text-muted mb-8">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-foreground/10 pt-8">
                  {service.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 mb-1">
                        {stat.label}
                      </p>
                      <p className="font-sans text-2xl font-light leading-8 text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image side */}
              <div
                className={`col-span-12 md:col-span-7 order-1 md:order-${isEven ? "2" : "1"}`}
              >
                <div className="aspect-[16/10] overflow-hidden border border-foreground/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Process Timeline */}
      <div className="bg-charcoal text-white py-16 md:py-[120px] px-6 md:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4"
            >
              The Methodology
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[32px] md:text-[48px] leading-10 md:leading-[56px] font-normal"
            >
              The Arteria Process
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {processSteps.map((step) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pt-8 border-t border-white/20"
              >
                <span className="absolute -top-3 left-0 bg-primary text-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {step.phase}
                </span>
                <h3 className="font-serif text-[32px] leading-10 font-normal mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-base leading-6 text-white/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="py-16 md:py-[120px] px-6 md:px-16">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-foreground/10 p-8 md:p-[120px] text-center"
          >
            <h3 className="font-serif text-[32px] md:text-[48px] leading-10 md:leading-[56px] font-normal mb-8">
              Architectural integrity, quantified.
            </h3>
            <p className="font-sans text-lg leading-7 text-muted max-w-2xl mx-auto mb-12">
              Every project is tracked with full transparency, giving you
              real-time access to every cost, every timeline, and every
              decision.
            </p>
            <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
              <div className="px-8 border-r border-foreground/10 last:border-0">
                <p className="font-sans text-[48px] leading-[52px] font-light text-primary font-bold">
                  150+
                </p>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 mt-2">
                  Projects Delivered
                </p>
              </div>
              <div className="px-8 border-r border-foreground/10 last:border-0">
                <p className="font-sans text-[48px] leading-[52px] font-light text-primary font-bold">
                  98%
                </p>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 mt-2">
                  Client Satisfaction
                </p>
              </div>
              <div className="px-8">
                <p className="font-sans text-[48px] leading-[52px] font-light text-primary font-bold">
                  10yr
                </p>
                <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 mt-2">
                  Warranty
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
