"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const projectTypes = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Renovation",
  "New Build",
  "Consultation",
];

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-16 md:py-[120px] bg-background">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-primary mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-[32px] md:text-[48px] leading-10 md:leading-[56px] font-normal text-foreground">
              Start Your Transformation
            </h2>
            <p className="mt-4 font-sans text-lg leading-7 text-muted max-w-md">
              Ready to create a space that reflects your vision? Tell us about
              your project and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Honeypot */}
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute opacity-0 h-0 w-0 pointer-events-none"
            />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-foreground/20 bg-transparent py-3 font-sans text-base text-foreground focus:border-primary focus:ring-0 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-foreground/20 bg-transparent py-3 font-sans text-base text-foreground focus:border-primary focus:ring-0 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 mb-2">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-foreground/20 bg-transparent py-3 font-sans text-base text-foreground focus:border-primary focus:ring-0 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={form.projectType}
                  onChange={handleChange}
                  className="w-full border-0 border-b border-foreground/20 bg-transparent py-3 font-sans text-base text-muted focus:border-primary focus:ring-0 outline-none transition-colors"
                >
                  <option value="">Select type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-sans text-xs font-bold uppercase tracking-[0.1em] text-foreground/50 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full border-0 border-b border-foreground/20 bg-transparent py-3 font-sans text-base text-foreground focus:border-primary focus:ring-0 outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-foreground text-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="font-sans text-sm text-primary">
                Thank you! We&apos;ll be in touch soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-sans text-sm text-destructive">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
