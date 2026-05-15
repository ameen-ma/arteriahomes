"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Residential", "Commercial", "Hospitality"];

const projects = [
  { id: 1, title: "Modern Villa", category: "Residential", color: "bg-stone-300" },
  { id: 2, title: "Boutique Hotel Lobby", category: "Hospitality", color: "bg-stone-400" },
  { id: 3, title: "Tech Startup Office", category: "Commercial", color: "bg-stone-200" },
  { id: 4, title: "Penthouse Suite", category: "Residential", color: "bg-amber-100" },
  { id: 5, title: "Restaurant Interior", category: "Hospitality", color: "bg-amber-200" },
  { id: 6, title: "Co-Working Space", category: "Commercial", color: "bg-stone-300" },
];

export function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
            Our Work
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-accent text-white"
                  : "border border-white/20 text-white/70 hover:text-white hover:border-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`group relative aspect-[4/3] ${project.color} rounded-2xl overflow-hidden cursor-pointer`}
            >
              {/* Placeholder — replace with actual project images */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-accent text-xs font-medium uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-white font-serif text-lg font-semibold">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
