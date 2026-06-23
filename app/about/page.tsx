import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Leaf, ShieldCheck, Users, Sprout } from "lucide-react";

export default function AboutPage() {
  return (
    <>

      {/* PAGE HERO */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "#0D2118" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/goats.jpg"
            alt="LausDeo farm"
            fill
            className="object-cover opacity-15"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(13,33,24,0.96) 0%, rgba(26,60,43,0.88) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-[#D4A843]" />
            <span
              className="text-[#D4A843] font-semibold tracking-[0.2em] uppercase"
              style={{ fontSize: "0.7rem" }}
            >
              About Us
            </span>
          </div>
          <h1
            className="text-white font-bold leading-tight mb-6 max-w-2xl"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
            }}
          >
            Built on Stewardship,{" "}
            <br />
            <em className="italic" style={{ color: "#D4A843" }}>
              Grown with Purpose
            </em>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl">
            LausDeo Investments is a Malawian agribusiness founded on the
            principle of stewardship — producing wholesome food while
            creating value for our community.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="font-bold tracking-[0.22em] uppercase"
                  style={{ fontSize: "0.7rem", color: "#B8892A" }}
                >
                  Our Story
                </span>
                <div className="w-8 h-px" style={{ background: "#B8892A" }} />
              </div>
              <h2
                className="font-bold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  color: "#2C1810",
                }}
              >
                From the soil of Malawi,
                <br /> for the people of Malawi.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                LausDeo Investments was built on a simple belief: that
                Malawi&apos;s rich land can feed its people and beyond. We
                started by doing what we knew best: raising healthy animals
                and growing good food.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Over time, we grew into a full agribusiness spanning farming,
                crop cultivation, and agro-processing. The name{" "}
                <em>LausDeo</em> means &quot;Praise be to God&quot; — and
                every harvest, every product, and every partnership we build
                is an expression of that gratitude.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Today, we serve households, restaurants, retailers, and
                partners across Malawi and beyond — all from our base in
                Blantyre, the commercial City of Malawi.
              </p>
            </div>

            {/* Image collage */}
            <div className="grid grid-cols-2 gap-3 h-[460px]">
              <div className="relative rounded-sm overflow-hidden">
                <Image
                  src="/images/chickens.jpg"
                  alt="Free-range chickens"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="relative rounded-sm overflow-hidden flex-1">
                  <Image
                    src="/images/pegion-peas.jpg"
                    alt="Fresh produce"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-sm overflow-hidden flex-1">
                  <Image
                    src="/images/milk.jpg"
                    alt="Fresh milk"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24" style={{ background: "#F7F2E8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <div
              className="relative overflow-hidden rounded-sm p-10"
              style={{ background: "#1A3C2B" }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                style={{ background: "#D4A843" }}
              />
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ background: "rgba(212,168,67,0.15)" }}
              >
                <Target className="w-6 h-6 text-[#D4A843]" />
              </div>
              <span
                className="text-[#D4A843] font-bold tracking-[0.2em] uppercase mb-3 block"
                style={{ fontSize: "0.7rem" }}
              >
                Our Mission
              </span>
              <h3
                className="text-white font-bold mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.5rem",
                }}
              >
                Nourishing Malawi, naturally.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                To provide nutritious, locally-produced food and value-added
                products while empowering farmers, creating jobs, and
                promoting sustainable agriculture in Malawi.
              </p>
            </div>

            {/* Vision */}
            <div
              className="relative overflow-hidden rounded-sm p-10"
              style={{ background: "#2C1810" }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                style={{ background: "#D4A843" }}
              />
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                style={{ background: "rgba(212,168,67,0.15)" }}
              >
                <Eye className="w-6 h-6 text-[#D4A843]" />
              </div>
              <span
                className="text-[#D4A843] font-bold tracking-[0.2em] uppercase mb-3 block"
                style={{ fontSize: "0.7rem" }}
              >
                Our Vision
              </span>
              <h3
                className="text-white font-bold mb-4"
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.5rem",
                }}
              >
                A Southern Africa leader
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                To be a leading agro-enterprise in Southern Africa, known
                for quality, integrity, and innovation from farm to finished
                product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span
              className="font-bold tracking-[0.22em] uppercase block mb-4"
              style={{ fontSize: "0.7rem", color: "#B8892A" }}
            >
              Our Values
            </span>
            <h2
              className="font-bold"
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#2C1810",
              }}
            >
              What guides us every day
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-7 h-7 text-[#1A3C2B]" />,
                title: "Quality First",
                desc: "Natural, chemical-light farming for safer, tastier food.",
              },
              {
                icon: <Leaf className="w-7 h-7 text-[#1A3C2B]" />,
                title: "Sustainability",
                desc: "Protecting the land for future generations while maximizing yield.",
              },
              {
                icon: <Users className="w-7 h-7 text-[#1A3C2B]" />,
                title: "Community",
                desc: "Empowering farmers, creating jobs, and promoting food security.",
              },
              {
                icon: <Sprout className="w-7 h-7 text-[#1A3C2B]" />,
                title: "Local Roots",
                desc: "Supporting Malawian farmers, reducing imports, creating rural jobs.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-sm"
                style={{
                  background: "#F7F2E8",
                  border: "1px solid rgba(26,60,43,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(26,60,43,0.08)" }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "1.1rem",
                    color: "#2C1810",
                  }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 text-center"
        style={{ background: "#D4A843" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#112819",
            }}
          >
            Want to partner with us?
          </h2>
          <p className="mb-8" style={{ color: "rgba(17,40,25,0.65)" }}>
            Whether you are a retailer, restaurant, or household, LausDeo
            Investments is ready to serve you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm text-white"
            style={{ background: "#112819" }}
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}