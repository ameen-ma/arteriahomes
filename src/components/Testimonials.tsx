"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Menon",
    role: "Homeowner, Kochi",
    text: "Arteria transformed our villa into a dream home. Every detail was thoughtfully crafted to reflect our family's personality.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner, Trivandrum",
    text: "The commercial space design exceeded our expectations. Our office now reflects the premium quality of our brand.",
    rating: 5,
  },
  {
    name: "Anitha Nair",
    role: "Homeowner, Calicut",
    text: "From concept to completion, the team was professional and attentive. Our modular kitchen is both beautiful and functional.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
            Client Stories
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-white p-6 md:p-8"
            >
              <Quote
                className="absolute top-6 right-6 text-accent/20"
                size={40}
                strokeWidth={1}
              />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="fill-accent text-accent"
                    size={16}
                  />
                ))}
              </div>

              <p className="text-sm text-muted leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div>
                <p className="font-semibold text-primary text-sm">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
