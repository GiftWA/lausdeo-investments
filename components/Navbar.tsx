"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(13,33,24,0.95)", borderBottom: "1px solid rgba(212,168,67,0.15)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

         {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden"
              style={{ border: "1.5px solid rgba(212,168,67,0.4)" }}>
              <Image
                src="/images/logo.jpg"
                alt="LausDeo Investments Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-white font-bold tracking-tight leading-none"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem" }}
              >
                LausDeo
              </span>
              <span
                className="text-[#D4A843] font-semibold tracking-widest uppercase"
                style={{ fontSize: "0.55rem" }}
              >
                Investments
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wider transition-colors uppercase"
                style={{
                  color: pathname === link.href
                    ? "#D4A843"
                    : "rgba(255,255,255,0.70)",
                  borderBottom: pathname === link.href
                    ? "1px solid #D4A843"
                    : "1px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 text-sm font-bold tracking-widest uppercase rounded-sm text-[#112819] hover:opacity-90 transition-opacity flex items-center gap-2"
              style={{ background: "#D4A843" }}
            >
              <Phone className="w-4 h-4" />
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium tracking-wider transition-colors uppercase py-1"
                  style={{
                    color: pathname === link.href
                      ? "#D4A843"
                      : "rgba(255,255,255,0.70)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 text-sm font-bold tracking-widest uppercase rounded-sm text-[#112819] text-center hover:opacity-90 transition-opacity"
                style={{ background: "#D4A843" }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}