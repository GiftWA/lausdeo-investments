import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Leaf, ArrowLeftRight, LayoutGrid } from "lucide-react";

export default function Home() {
  return (
    <>
      
      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "#0D2118" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/maize.jpg"
            alt="LausDeo farm fields"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,33,24,0.97) 0%, rgba(26,60,43,0.85) 50%, rgba(13,33,24,0.92) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#D4A843]" />
              <span
                className="text-[#D4A843] font-semibold tracking-[0.22em] uppercase"
                style={{ fontSize: "0.7rem" }}
              >
                Blantyre, Malawi · Agribusiness
              </span>
            </div>

            <h1
              className="text-white font-bold leading-tight mb-6"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
              }}
            >
              From Our Farm <br />
              to Your{" "}
              <em className="italic" style={{ color: "#D4A843" }}>
                Table
              </em>
            </h1>

            <p
              className="text-lg mb-10 max-w-xl leading-relaxed"
              style={{
                fontFamily: "var(--font-cormorant)",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              Naturally grown in Malawi. Wholesome food, sustainable
              practices, and a value chain you can trust.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/products"
                className="inline-block px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
                style={{ background: "#D4A843", color: "#112819" }}
              >
                Explore Our Products
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 text-sm font-medium tracking-widest uppercase rounded-sm text-white hover:bg-white/10 transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.35)" }}
              >
                Contact Us
              </Link>
            </div>

            <div
              className="flex flex-wrap gap-10 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
             {[
  { num: "4+", label: "Product Categories" },
  { num: "100%", label: "Locally Grown" },
  { num: "🇲🇼", label: "Proudly Malawian" },
].map((stat) => (
  <div key={stat.label}>
    <div
      className="font-bold leading-none mb-1"
      style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "2rem",
        color: "#D4A843",
      }}
    >
      {stat.num}
    </div>
    <div
      className="uppercase tracking-[0.1em] font-medium"
      style={{
        fontSize: "0.72rem",
        color: "rgba(255,255,255,0.45)",
      }}
    >
      {stat.label}
      </div>
     </div>
     ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOLD QUOTE BAND */}
      <section style={{ background: "#D4A843" }} className="py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="text-center italic font-medium"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1.15rem",
              color: "#112819",
            }}
          >
            &ldquo;Laus Deo — Praise be to God — guides everything we grow and make.&rdquo;
          </p>
        </div>
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[420px] lg:h-[520px] rounded-sm overflow-hidden">
              <Image
                src="/images/goats.jpg"
                alt="LausDeo farm landscape"
                fill
                className="object-cover"
              />
              <div
                className="absolute bottom-6 left-6 px-5 py-3 rounded-sm"
                style={{ background: "#1A3C2B" }}
              >
                <p className="text-[#D4A843] text-xs font-bold tracking-widest uppercase">
                  Est. in Malawi
                </p>
                <p className="text-white text-sm font-medium mt-0.5">
                  Blantyre, Southern Region
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-bold tracking-[0.22em] uppercase"
                  style={{ fontSize: "0.7rem", color: "#B8892A" }}
                >
                  Who We Are
                </span>
                <div className="w-8 h-px" style={{ background: "#B8892A" }} />
              </div>
              <h2
                className="font-bold leading-tight mb-5"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  color: "#2C1810",
                }}
              >
                Stewardship from soil to shelf
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                LausDeo Investments is a Malawian agribusiness founded on
                the principle of stewardship — producing wholesome food
                while creating lasting value for our community.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                From poultry and livestock to legumes, crops, and
                agro-processing, we combine traditional knowledge with
                modern practices to deliver quality you can trust.
              </p>
              <Link
                href="/about"
                className="inline-block px-7 py-3 text-sm font-bold tracking-widest uppercase rounded-sm text-white hover:opacity-90 transition-opacity"
                style={{ background: "#1A3C2B" }}
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - With Icons */}
      <section className="py-24" style={{ background: "#1A3C2B" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span
              className="font-bold tracking-[0.22em] uppercase block mb-4 text-[#D4A843]"
              style={{ fontSize: "0.7rem" }}
            >
              Why Choose LausDeo
            </span>
            <h2
              className="font-bold text-white leading-tight"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
              }}
            >
              Quality you can see.<br />
              Values you can trust.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Quality First",
                desc: "Natural, chemical-light farming for safer, tastier food grown under our direct oversight.",
                icon: ShieldCheck,
              },
              {
                title: "Local & Sustainable",
                desc: "Supporting Malawian farmers, reducing imports, and creating meaningful rural jobs.",
                icon: Leaf,
              },
              {
                title: "Farm to Product",
                desc: "We control the full value chain from field to finished product ensuring freshness.",
                icon: ArrowLeftRight,
              },
              {
                title: "Diverse Range",
                desc: "Protein, oils, flours, spices — one trusted source for every household and business.",
                icon: LayoutGrid,
              },
            ].map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="p-8 rounded-sm transition-colors hover:bg-white/5"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <Icon className="w-12 h-12 text-[#D4A843] mb-5" />
                  <h3
                    className="font-semibold text-white mb-3"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {r.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 text-center" style={{ background: "#D4A843" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#112819",
            }}
          >
            Ready to source from Malawi&apos;s land?
          </h2>
          <p
            className="text-base mb-8 leading-relaxed"
            style={{ color: "rgba(17,40,25,0.65)" }}
          >
            Join retailers, restaurants, and homes who trust LausDeo
            for fresh, natural, locally-grown products.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm text-white hover:opacity-90 transition-opacity"
              style={{ background: "#112819" }}
            >
              Get In Touch
            </Link>
            
            <a
              href="tel:+2650889789998"
              className="inline-block px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm hover:opacity-80 transition-opacity"
              style={{ border: "1.5px solid #112819", color: "#112819" }}
            >
              Call / WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}