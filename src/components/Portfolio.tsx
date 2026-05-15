"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Hospitality", "Retail"];

const projects = [
  {
    id: 1,
    title: "Kochi Waterfront Villa",
    category: "Residential",
    location: "Kochi, Kerala",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
    specs: "Natural Stone, Teak Wood",
  },
  {
    id: 2,
    title: "Tech Park Lobby",
    category: "Commercial",
    location: "Trivandrum, Kerala",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
    specs: "Polished Concrete, Glass",
  },
  {
    id: 3,
    title: "Boutique Hotel Suite",
    category: "Hospitality",
    location: "Calicut, Kerala",
    span: "md:col-span-4",
    aspect: "aspect-[3/4]",
    specs: "Brass, Velvet, Marble",
  },
  {
    id: 4,
    title: "Premium Retail Showroom",
    category: "Retail",
    location: "Thrissur, Kerala",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]",
    specs: "Integrated LED, Floating Shelves",
  },
];

const listProjects = [
  {
    id: 5,
    title: "The Heritage Courtyard House",
    category: "Residential",
    location: "Kochi, Kerala",
    specs: "Laterite, Reclaimed Wood",
  },
  {
    id: 6,
    title: "Modern Co-Working Hub",
    category: "Commercial",
    location: "Trivandrum, Kerala",
    specs: "Exposed Concrete, Steel",
  },
];

export function Portfolio() {
  const [active, setActive] = useState("All");

  const filteredGrid =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const filteredList =
    active === "All"
      ? listProjects
      : listProjects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="pt-[140px] pb-0 bg-background">
      {/* Header */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-[48px] leading-[52px] md:text-[80px] md:leading-[88px] md:-tracking-[0.02em] font-medium text-foreground">
            Portfolio
          </h2>
          <div className="h-px bg-foreground/20 w-full mt-4" />
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 mb-16 md:mb-[120px]">
        <div className="flex flex-wrap gap-8 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs font-bold uppercase tracking-[0.1em] pb-1 border-b-2 transition-colors ${
                active === cat
                  ? "text-foreground border-foreground"
                  : "text-foreground/50 border-transparent hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 mb-16 md:mb-[120px]">
        <div className="grid grid-cols-12 gap-6">
          {filteredGrid.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`col-span-12 ${project.span} group relative overflow-hidden bg-stone border border-foreground/10 ${project.aspect} cursor-pointer`}
            >
              <div className="w-full h-full bg-gradient-to-br from-stone to-foreground/5 transition-transform duration-700 group-hover:scale-105" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-500 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-white/70 mb-2">
                    {project.category.toUpperCase()} — {project.location.toUpperCase()}
                  </p>
                  <h3 className="font-serif text-[32px] md:text-[48px] leading-10 md:leading-[56px] font-normal text-white mb-4">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white border-b border-white pb-1">
                    View Project <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Rule-line list items */}
          {filteredList.map((project) => (
            <motion.div
              key={project.id}
              layout
              className="col-span-12 border-t border-foreground/20 pt-8 mt-8 group flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-stone/30 transition-colors p-4 cursor-pointer"
            >
              <div className="flex flex-col">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50">
                  {project.category.toUpperCase()} — {project.location.toUpperCase()}
                </p>
                <h3 className="font-serif text-[32px] leading-10 font-normal text-foreground">
                  {project.title}
                </h3>
              </div>
              <div className="flex items-center gap-8 mt-4 md:mt-0">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50">
                  {project.specs}
                </span>
                <ArrowUpRight className="text-primary" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
