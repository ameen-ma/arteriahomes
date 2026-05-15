"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary">
              Start Your Transformation
            </h2>
            <p className="mt-4 text-muted max-w-md">
              Ready to create a space that reflects your vision? Tell us about
              your project and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Honeypot — hidden from users, traps bots */}
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute opacity-0 h-0 w-0 pointer-events-none"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="rounded-lg border border-border bg-white px-4 py-3 text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={handleChange}
                className="rounded-lg border border-border bg-white px-4 py-3 text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="rounded-lg border border-border bg-white px-4 py-3 text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              />
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
              >
                <option value="">Project Type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-light transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>

            {status === "sent" && (
              <p className="text-green-600 text-sm">Thank you! We&apos;ll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
