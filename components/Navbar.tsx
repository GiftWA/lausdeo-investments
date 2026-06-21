"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(17,40,25,0.97)"
            : "rgba(17,40,25,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(212,168,67,0.18)",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between"
          style={{ height: "72px" }}
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col gap-0.5">
            <span
              className="text-white font-bold leading-none tracking-wide"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem" }}
            >
              LausDeo
            </span>
            <span
              className="text-[#D4A843] font-semibold tracking-[0.2em] uppercase"
              style={{ fontSize: "0.6rem" }}
            >
              Investments
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium tracking-wide transition-colors duration-200"
                  style={{
                    color: pathname === link.href
                      ? "#D4A843"
                      : "rgba(255,255,255,0.75)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200 hover:opacity-90"
                style={{ background: "#D4A843", color: "#112819" }}
              >
                Partner With Us
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translateY(7px)"
                  : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed left-0 right-0 z-40 overflow-hidden transition-all duration-300 md:hidden"
        style={{
          top: "72px",
          maxHeight: menuOpen ? "400px" : "0px",
          opacity: menuOpen ? 1 : 0,
          background: "#112819",
          borderBottom: "1px solid rgba(212,168,67,0.2)",
        }}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium py-2 border-b transition-colors"
              style={{
                color: pathname === link.href
                  ? "#D4A843"
                  : "rgba(255,255,255,0.8)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs font-bold tracking-widest uppercase py-3 text-center rounded-sm mt-1"
            style={{ background: "#D4A843", color: "#112819" }}
          >
            Partner With Us →
          </Link>
        </div>
      </div>
    </>
  );
}