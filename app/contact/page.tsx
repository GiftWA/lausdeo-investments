"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    const subject = encodeURIComponent("Partnership Enquiry — LausDeo Investments");
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:lausdeoinvestments@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "#0D2118" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,33,24,0.98) 0%, rgba(26,60,43,0.92) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#D4A843]" />
            <span
              className="text-[#D4A843] font-semibold tracking-[0.2em] uppercase"
              style={{ fontSize: "0.7rem" }}
            >
              Contact Us
            </span>
          </div>
          <h1
            className="text-white font-bold leading-tight mb-6 max-w-2xl"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
            }}
          >
            Let&apos;s Start a
            <br />
            <em className="italic" style={{ color: "#D4A843" }}>
              Conversation
            </em>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl">
            Whether you are a retailer, restaurant, or household — reach out
            and let&apos;s discuss how LausDeo Investments can serve your needs.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS STRIP */}
      <section style={{ background: "#1A3C2B" }} className="py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin className="w-5 h-5 text-[#D4A843]" />,
                label: "Location",
                value: "Mpemba, Blantyre, Malawi",
                sub: "Southern Region",
                href: null,
              },
              {
                icon: <Phone className="w-5 h-5 text-[#D4A843]" />,
                label: "Phone",
                value: "+265 0889 789 998",
                sub: "Sun — Fri, from 8:00am to just before sunset.",
                href: "tel:+265 889789998",
              },
              {
                icon: <Mail className="w-5 h-5 text-[#D4A843]" />,
                label: "Email",
                value: "lausdeoinvestments@gmail.com",
                sub: "We reply within 24 hours",
                href: "mailto:lausdeoinvestments@gmail.com",
              },
              {
                icon: <Clock className="w-5 h-5 text-[#D4A843]" />,
                label: "Working Hours",
                value: "Sun — Fri",
                sub: "From 8:00am to just before sunset.",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(212,168,67,0.15)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-white/40 font-bold tracking-widest uppercase mb-1"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white font-medium text-sm hover:text-[#D4A843] transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  )}
                  <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-24" style={{ background: "#F7F2E8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* LEFT — Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span
                  className="font-bold tracking-[0.22em] uppercase block mb-3"
                  style={{ fontSize: "0.7rem", color: "#B8892A" }}
                >
                  Get In Touch
                </span>
                <h2
                  className="font-bold leading-tight mb-4"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                    color: "#2C1810",
                  }}
                >
                  Partner with LausDeo Investments
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We work with retailers, restaurants, wholesalers, and
                  households across Malawi. Tell us what you need, we will
                  get back to you promptly.
                </p>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/265 889789998"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-sm transition-all hover:opacity-90"
                style={{ background: "#25D366" }}
              >
                <MessageCircle className="w-8 h-8 text-white shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">Chat on WhatsApp</p>
                  <p className="text-white/80 text-xs mt-0.5">
                    Quick responses during business hours.
                  </p>
                </div>
              </a>

              {/* Call Button */}
              <a
                href="tel:+2650889789998"
                className="flex items-center gap-4 p-5 rounded-sm transition-all hover:opacity-90"
                style={{ background: "#1A3C2B" }}
              >
                <Phone className="w-8 h-8 text-[#D4A843] shrink-0" />
                <div>
                  <p className="text-white font-bold text-sm">Call Us Directly</p>
                  <p className="text-white/80 text-xs mt-0.5">
                    +265 889 789 998
                  </p>
                </div>
              </a>

              {/* Quote */}
              <div
                className="p-5 rounded-sm"
                style={{
                  background: "#1A3C2B",
                  borderLeft: "3px solid #D4A843",
                }}
              >
                <p
                  className="italic text-white/80 leading-relaxed"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                >
                  &ldquo;Laus Deo — Praise be to God — guides everything we
                  grow and make.&rdquo;
                </p>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div
                  className="h-full flex flex-col items-center justify-center text-center p-12 rounded-sm"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(26,60,43,0.1)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "#1A3C2B" }}
                  >
                    <Send className="w-8 h-8 text-[#D4A843]" />
                  </div>
                  <h3
                    className="font-bold mb-3"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", color: "#2C1810" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Thank you for reaching out. We will be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 text-sm font-bold tracking-widest uppercase rounded-sm text-white"
                    style={{ background: "#1A3C2B" }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 lg:p-10 rounded-sm"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(26,60,43,0.1)" }}
                >
                  <h3
                    className="font-bold mb-8"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", color: "#2C1810" }}
                  >
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Grace"
                        className="w-full px-4 py-3 text-sm outline-none transition-colors rounded-sm"
                        style={{
                          background: "#F7F2E8",
                          border: "1px solid rgba(26,60,43,0.2)",
                          color: "#2C1810",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Banda"
                        className="w-full px-4 py-3 text-sm outline-none transition-colors rounded-sm"
                        style={{
                          background: "#F7F2E8",
                          border: "1px solid rgba(26,60,43,0.2)",
                          color: "#2C1810",
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="grace@example.com"
                        required
                        className="w-full px-4 py-3 text-sm outline-none transition-colors rounded-sm"
                        style={{
                          background: "#F7F2E8",
                          border: "1px solid rgba(26,60,43,0.2)",
                          color: "#2C1810",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+265 ..."
                        className="w-full px-4 py-3 text-sm outline-none transition-colors rounded-sm"
                        style={{
                          background: "#F7F2E8",
                          border: "1px solid rgba(26,60,43,0.2)",
                          color: "#2C1810",
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                      I am interested in
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm outline-none transition-colors rounded-sm appearance-none"
                      style={{
                        background: "#F7F2E8",
                        border: "1px solid rgba(26,60,43,0.2)",
                        color: formData.interest ? "#2C1810" : "#9ca3af",
                      }}
                    >
                      <option value="">Select a category...</option>
                      <option>Poultry (Eggs and Meat)</option>
                      <option>Livestock and Dairy</option>
                      <option>Crops and Legumes</option>
                      <option>Processed Products (Oils, Flour, Spices)</option>
                      <option>Bulk / Wholesale Supply</option>
                      <option>Export Partnership</option>
                      <option>General Partnership</option>
                    </select>
                  </div>

                  <div className="mb-7">
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what you are looking for and we will get back to you shortly..."
                      className="w-full px-4 py-3 text-sm outline-none transition-colors rounded-sm resize-y"
                      style={{
                        background: "#F7F2E8",
                        border: "1px solid rgba(26,60,43,0.2)",
                        color: "#2C1810",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-bold tracking-widest uppercase text-white rounded-sm transition-opacity hover:opacity-90 flex items-center justify-center gap-3"
                    style={{ background: "#1A3C2B" }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>

                  <p className="text-center text-xs text-gray-400 mt-4">
                    Your message will open in your email app ready to send.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-16" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div>
              <span
                className="font-bold tracking-[0.22em] uppercase block mb-3"
                style={{ fontSize: "0.7rem", color: "#B8892A" }}
              >
                Find Us
              </span>
              <h3
                className="font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", color: "#2C1810" }}
              >
               Based in Mpemba, Blantyre.
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                LausDeo Investments operates from Mpemba, Blantyre — the
                commercial city of Malawi, well-positioned to serve
                customers across the country and into the region.
              </p>
              <div className="space-y-1">
                <p className="font-semibold text-sm" style={{ color: "#2C1810" }}>
                  Mpemba, Blantyre, Malawi
                </p>
                <p className="text-gray-400 text-sm">Southern Region</p>
              </div>
            </div>
            <div
              className="lg:col-span-2 h-72 rounded-sm overflow-hidden"
              style={{ border: "1px solid rgba(26,60,43,0.1)" }}
            >
              <iframe
                title="LausDeo Investments Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=34.9600%2C-15.8800%2C35.0400%2C-15.8200&layer=mapnik&marker=-15.8467%2C34.9993"                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 text-center" style={{ background: "#D4A843" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#112819",
            }}
          >
            Ready to work together?
          </h2>
          <p className="mb-8" style={{ color: "rgba(17,40,25,0.65)" }}>
            Join the growing list of partners who trust LausDeo Investments
            for quality, locally-grown Malawian products.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/265 889789998"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm text-white transition-opacity hover:opacity-90"
              style={{ background: "#112819" }}
            >
              WhatsApp Us
            </a>
            <Link
              href="/products"
              className="inline-block px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm transition-opacity hover:opacity-80"
              style={{ border: "1.5px solid #112819", color: "#112819" }}
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}