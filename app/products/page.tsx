import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ProductsPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="relative pt-36 pb-20 overflow-hidden"
        style={{ background: "#0D2118" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/images/maize.jpg"
            alt="LausDeo farm"
            fill
            className="object-cover opacity-20"
            priority
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
              Our Products
            </span>
          </div>
          <h1
            className="text-white font-bold leading-tight mb-6 max-w-2xl"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
            }}
          >
            What We Grow,
            <br />
            <em className="italic" style={{ color: "#D4A843" }}>
              What We Make
            </em>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mb-10">
            From live animals to shelf-ready products — we manage the full
            journey so every item carries our quality standard.
          </p>
        </div>
      </section>

      {/* POULTRY SECTION */}
      <section id="poultry" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="text-7xl font-bold leading-none shrink-0 hidden sm:block"
              style={{ fontFamily: "var(--font-playfair)", color: "rgba(26,60,43,0.08)" }}
            >
              01
            </div>
            <div>
              <span className="font-bold tracking-[0.22em] uppercase block mb-2"
                style={{ fontSize: "0.7rem", color: "#B8892A" }}>
                Category 01
              </span>
              <h2 className="font-bold leading-tight mb-2"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#2C1810" }}>
                Poultry Farm
              </h2>
              <p className="italic mb-3"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", color: "#1A3C2B" }}>
                Free-range birds raised with care
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                We raise healthy, free-range birds for meat and eggs. Each breed is chosen for local adaptability, superior flavour, and nutritional value.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Turkeys", detail: "Locally adapted breeds, perfect for family and festive occasions.", img: "/images/turkey.jpg" },
              { name: "Local Chickens", detail: "Hardier, tastier, and grown naturally — a Malawian favourite.", img: "/images/chickens.jpg" },
            ].map((item) => (
              <div key={item.name} className="group overflow-hidden rounded-sm"
                style={{ border: "1px solid rgba(26,60,43,0.1)" }}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.img} alt={item.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4" style={{ background: "#F7F2E8" }}>
                  <div className="flex items-start gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-[#1A3C2B] shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-sm" style={{ color: "#2C1810" }}>{item.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed pl-6">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVESTOCK SECTION */}
      <section id="livestock" className="py-20" style={{ background: "#F7F2E8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="text-7xl font-bold leading-none shrink-0 hidden sm:block"
              style={{ fontFamily: "var(--font-playfair)", color: "rgba(26,60,43,0.08)" }}
            >
              02
            </div>
            <div>
              <span className="font-bold tracking-[0.22em] uppercase block mb-2"
                style={{ fontSize: "0.7rem", color: "#B8892A" }}>
                Category 02
              </span>
              <h2 className="font-bold leading-tight mb-2"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#2C1810" }}>
                Livestock Farming
              </h2>
              <p className="italic mb-3"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", color: "#1A3C2B" }}>
                Quality herds for milk, meat and resilience
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                Our livestock operation is built on modern husbandry practices and local breed knowledge.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Dairy Cows", detail: "Fresh, wholesome milk for households and downstream processing.", img: "/images/dairy-cows.jpg" },
              { name: "Sheep and Goats", detail: "Adapted to local conditions, ideal for meat and income generation.", img: "/images/goats.jpg" },
            ].map((item) => (
              <div key={item.name} className="group overflow-hidden rounded-sm"
                style={{ border: "1px solid rgba(26,60,43,0.1)" }}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.img} alt={item.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4" style={{ background: "#FFFFFF" }}>
                  <div className="flex items-start gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-[#1A3C2B] shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-sm" style={{ color: "#2C1810" }}>{item.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed pl-6">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROPS SECTION */}
      <section id="crops" className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="text-7xl font-bold leading-none shrink-0 hidden sm:block"
              style={{ fontFamily: "var(--font-playfair)", color: "rgba(26,60,43,0.08)" }}
            >
              03
            </div>
            <div>
              <span className="font-bold tracking-[0.22em] uppercase block mb-2"
                style={{ fontSize: "0.7rem", color: "#B8892A" }}>
                Category 03
              </span>
              <h2 className="font-bold leading-tight mb-2"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#2C1810" }}>
                Crops and Legumes
              </h2>
              <p className="italic mb-3"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", color: "#1A3C2B" }}>
                Climate-smart cultivation across Malawi
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                We grow high-demand food and cash crops using sustainable methods.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { name: "Groundnuts and Beans", detail: "Staple proteins grown at scale.", img: "/images/groundnuts.jpg" },
              { name: "Cashew Nuts", detail: "Premium cashew nuts from our own orchards.", img: "/images/cashew.jpg" },
              { name: "Chilli Peppers", detail: "Grown for spice markets and export.", img: "/images/chilli.jpg" },
              { name: "Hibiscus", detail: "For tea, natural drinks, and export.", img: "/images/hibiscus.jpg" },
              { name: "Mushrooms", detail: "Fresh mushrooms for households and restaurants.", img: "/images/mushroom.jpg" },
              { name: "Okra", detail: "Fresh okra for households and local markets.", img: "/images/okra.jpg" },
              { name: "Pineapple", detail: "Sweet tropical pineapples for fresh consumption.", img: "/images/pineapple.png" },
              { name: "Coconuts", detail: "For fresh consumption and processing into oil and flour.", img: "/images/coconut.jpg" },
            ].map((item) => (
              <div key={item.name} className="group overflow-hidden rounded-sm"
                style={{ border: "1px solid rgba(26,60,43,0.1)" }}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.img} alt={item.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4" style={{ background: "#F7F2E8" }}>
                  <div className="flex items-start gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-[#1A3C2B] shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-sm" style={{ color: "#2C1810" }}>{item.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed pl-6">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE ADDITION SECTION */}
      <section id="processing" className="py-20" style={{ background: "#F7F2E8" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-start gap-6 mb-12">
            <div
              className="text-7xl font-bold leading-none shrink-0 hidden sm:block"
              style={{ fontFamily: "var(--font-playfair)", color: "rgba(26,60,43,0.08)" }}
            >
              04
            </div>
            <div>
              <span className="font-bold tracking-[0.22em] uppercase block mb-2"
                style={{ fontSize: "0.7rem", color: "#B8892A" }}>
                Category 04
              </span>
              <h2 className="font-bold leading-tight mb-2"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#2C1810" }}>
                Value Addition and Agro-Processing
              </h2>
              <p className="italic mb-3"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", color: "#1A3C2B" }}>
                From raw harvest to shelf-ready products
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                We turn raw harvests into shelf-stable, nutritious products with full traceability and quality control.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { name: "Cashew Products", detail: "Whole cashew nuts, powder and flour.", img: "/images/cashew.jpg" },
              { name: "Coconut Products", detail: "Cold-pressed coconut oil and coconut flour.", img: "/images/coconut.jpg" },
              { name: "Dairy Products", detail: "Fresh milk and processed milk products.", img: "/images/milk.jpg" },
              { name: "Dried Hibiscus and Chilli", detail: "For tea, spices, and export markets.", img: "/images/hibiscus.jpg" },
              { name: "Cooking Oil and Flour", detail: "Naturally processed from our own crops.", img: "/images/flour.jpg" },
            ].map((item) => (
              <div key={item.name} className="group overflow-hidden rounded-sm"
                style={{ border: "1px solid rgba(26,60,43,0.1)" }}>
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.img} alt={item.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4" style={{ background: "#FFFFFF" }}>
                  <div className="flex items-start gap-2 mb-1">
                    <CheckCircle className="w-4 h-4 text-[#1A3C2B] shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-sm" style={{ color: "#2C1810" }}>{item.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed pl-6">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Interested in ordering or partnering?
          </h2>
          <p className="mb-8" style={{ color: "rgba(17,40,25,0.65)" }}>
            Whether you need regular supply for your restaurant, bulk stock
            for retail, or fresh produce for your household — we are ready.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm text-white"
              style={{ background: "#112819" }}
            >
              Get In Touch
            </Link>
            
            <a
              href="mailto:lausdeoinvestments@gmail.com"
              className="inline-block px-8 py-3.5 text-sm font-bold tracking-widest uppercase rounded-sm"
              style={{ border: "1.5px solid #112819", color: "#112819" }}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}