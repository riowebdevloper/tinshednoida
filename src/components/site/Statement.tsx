import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Statement() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Editorial Statement"
      className="relative bg-[#0A1128] text-white py-24 sm:py-36 lg:py-48 border-b border-indigo-200/15 overflow-hidden arch-grid-pattern"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Minimal Eyebrow */}
        <div className="flex items-center gap-3 mb-10 sm:mb-14">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            FOUNDATIONAL PHILOSOPHY
          </span>
        </div>

        {/* ──────── MASSIVE EDITORIAL HEADLINE WITH LINE REVEAL ──────── */}
        <div className="max-w-5xl">
          <h2 className="font-editorial-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight leading-[1.04] text-white">
            <span
              className={`block transition-all duration-700 delay-100 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              WE DON'T JUST
            </span>
            <span
              className={`block text-[#F59E0B] transition-all duration-700 delay-200 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              BUILD SHEDS.
            </span>
            <span
              className={`block mt-4 sm:mt-6 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              WE BUILD THE SPACE
            </span>
            <span
              className={`block text-white/95 transition-all duration-700 delay-400 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              WHERE BUSINESS GROWS.
            </span>
          </h2>
        </div>

        {/* ──────── SUB-NARRATIVE & METRIC BADGES ──────── */}
        <div
          className={`mt-14 sm:mt-20 pt-10 border-t border-indigo-200/15 grid gap-10 lg:grid-cols-12 items-start transition-all duration-900 delay-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Left Column: Narrative Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-base sm:text-lg lg:text-xl text-[#C7D2FE] font-sans leading-relaxed font-normal">
              Industrial facilities are long-term capital assets. Since 2010, Tin Shade has fabricated over 500 factory sheds, logistics warehouses, and heavy structural frameworks directly from our Noida Sector 10 yard.
            </p>
            <p className="text-sm sm:text-base text-[#8E9CB8] font-sans leading-relaxed">
              We eliminate commercial middlemen, aggregators, and unverified subcontracts. Every truss is cut, welded, and inspected to IS 2062 and IS 800 standards by our certified team, then erected with dedicated hydraulic crane fleets on your site.
            </p>
          </div>

          {/* Right Column: Three Architectural Pillars & Action (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3 font-mono text-xs text-[#C7D2FE]">
              <div className="flex items-center gap-3 p-3.5 bg-[#101B3B] border border-indigo-200/20 rounded-[2px]">
                <span className="font-bold text-[#F59E0B]">01. DIRECT YARD:</span>
                <span>In-house Noida fabrication, zero broker markups</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-[#101B3B] border border-indigo-200/20 rounded-[2px]">
                <span className="font-bold text-[#F59E0B]">02. PRIME STEEL:</span>
                <span>100% IS 2062 certified prime mild steel with MTC</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 bg-[#101B3B] border border-indigo-200/20 rounded-[2px]">
                <span className="font-bold text-[#F59E0B]">03. TURNKEY CRANE:</span>
                <span>Dedicated mobile hydraulic cranes for high-speed erection</span>
              </div>
            </div>

            <div>
              <Link
                to="/about"
                className="btn-navy-outline text-xs"
              >
                <span>Read Full Engineering Standard &rarr;</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
