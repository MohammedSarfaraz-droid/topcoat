"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { siteConfig } from "@/Config/Site";

const formatPhoneHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
      <section className="pt-32 pb-20 bg-[#14161A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white/90">
              Contact <span className="text-gradient-copper">Us</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white"
                />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    required
                    className="h-10 w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white"
                  >
                    <option value="" disabled>Select Service Interested In</option>
                    <option value="Epoxy Flooring">Epoxy Flooring</option>
                    <option value="Terrazzo">Terrazzo</option>
                    <option value="Building Facades">Building Facades</option>
                    <option value="Garage Floors">Garage Floors</option>
                    <option value="Stamped Concrete">Stamped Concrete</option>
                    <option value="Custom Decorative Concrete">Custom Decorative Concrete</option>
                  </select>
              </div>
              <textarea
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={6}
                className="w-full rounded-md border border-[#282c33] bg-[#0d0f12] px-3 py-2 font-sans text-sm text-white"
              />
              <Button type="submit" size="lg" className="bg-primary hover:bg-copper-light text-primary-foreground font-sans w-full sm:w-auto px-10 cursor-pointer">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              {isSubmitted ? (
                <p className="text-sm font-sans text-primary">Message sent! We&apos;ll get back to you within 24 hours.</p>
              ) : null}
            </form>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-white/90 mb-6">Let&apos;s Build Something Extraordinary</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Whether you&apos;re planning a new construction project or renovating an existing space,
                  our team is ready to bring your vision to life. Reach out for a free consultation.
                </p>
              </div>

              <div className="space-y-4 ">
                {[
                  { icon: Phone, label: siteConfig.phone, href: formatPhoneHref(siteConfig.phone) },
                  { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: MapPin, label: siteConfig.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}` },
                  { icon: Clock, label: "Mon – Fri: 7AM – 6PM | Sat: 8AM – 2PM" },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-lg bg-[#14161A] border border-[#282c33]">
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    {href ? (
                      <a
                        href={href}
                        className="text-white/90 hover:text-primary transition-colors font-sans text-sm"
                        target={Icon === MapPin ? "_blank" : undefined}
                        rel={Icon === MapPin ? "noopener noreferrer" : undefined}
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-white/90 font-sans text-sm">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-sans font-semibold text-white/90 uppercase tracking-widest text-sm mb-3">Service Areas</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  We serve commercial, industrial, and residential clients across the region.
                  Contact us to confirm availability in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
