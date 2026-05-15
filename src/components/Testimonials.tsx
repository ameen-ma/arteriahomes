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
    <section id="about" className="py-16 md:py-[120px] bg-stone">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-[32px] md:text-[48px] leading-10 md:leading-[56px] font-normal text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-background border border-foreground/10 p-6 md:p-8"
            >
              <Quote
                className="absolute top-6 right-6 text-primary/20"
                size={40}
                strokeWidth={1}
              />

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="fill-primary text-primary"
                    size={16}
                  />
                ))}
              </div>

              <p className="font-sans text-base leading-6 text-muted mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="border-t border-foreground/10 pt-4">
                <p className="font-sans text-sm font-bold text-foreground">
                  {t.name}
                </p>
                <p className="font-sans text-xs text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
