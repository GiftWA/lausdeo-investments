import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#2C1810" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0"
                style={{ border: "1.5px solid rgba(212,168,67,0.4)" }}>
                <Image
                  src="/images/logo.jpg"
                  alt="LausDeo Investments Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div
                  className="text-white font-bold leading-none"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem" }}
                >
                  LausDeo Investments
                </div>
                <div
                  className="text-[#D4A843] font-semibold tracking-[0.18em] uppercase mt-1"
                  style={{ fontSize: "0.62rem" }}
                >
                  From Our Farm to Your Table
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-sm">
              A Malawian agribusiness committed to sustainable farming, food
              security, and value addition — from Mpemba, Blantyre to beyond.
            </p>
            <p
              className="italic text-[#B8892A] text-sm"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Laus Deo — Praise be to God — guides everything we grow and make.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.16em] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Mission", href: "/about" },
                { label: "Our Vision", href: "/about" },
                { label: "Why Choose Us", href: "/about" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/50 text-sm hover:text-[#D4A843] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.16em] uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {[
                "Poultry Farm",
                "Livestock Farming",
                "Crops & Legumes",
                "Agro-Processing",
              ].map((p) => (
                <li key={p}>
                  <Link
                    href="/products"
                    className="text-white/50 text-sm hover:text-[#D4A843] transition-colors"
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Strip */}
        <div
          className="rounded-sm p-6 mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(212,168,67,0.12)",
          }}
        >
          {[
            {
              label: "Location",
              value: "Mpemba, Blantyre, Malawi",
              href: null,
              icon: MapPin,
            },
            {
              label: "Phone / WhatsApp",
              value: "+265 0889 789 998",
              href: "tel:+2650889789998",
              icon: Phone,
            },
            {
              label: "Email",
              value: "lausdeoinvestments@gmail.com",
              href: "mailto:lausdeoinvestments@gmail.com",
              icon: Mail,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(212,168,67,0.15)" }}
                >
                  <Icon className="w-4 h-4 text-[#D4A843]" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-white/80 text-sm hover:text-[#D4A843] transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/80 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/35 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span>
            &copy; {new Date().getFullYear()} LausDeo Investments. All rights reserved.
          </span>
          <span>Naturally Grown in Malawi 🌿</span>
        </div>
      </div>
    </footer>
  );
}