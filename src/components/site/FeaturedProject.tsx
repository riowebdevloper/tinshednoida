import { ArrowRight, Compass, HardHat, ShieldCheck, Ruler } from "lucide-react";
import { Link } from "@tanstack/react-router";
import proj1 from "@/assets/gen/proj-1.jpg";

export function FeaturedProject() {
  return (
    <section className="relative bg-[#0B0D0F] text-white py-24 sm:py-36 overflow-hidden border-b border-white/10">
      
      {/* Full-Bleed Architectural Canvas Background */}
      <div className="absolute inset-0 size-full">
        <img
          src={proj1}
          alt="100ft Clear Span Factory Shed"
          className="size-full object-cover brightness-[0.38] contrast-[1.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/40 to-[#0B0D0F]/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#B08A4A]" />
          <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
            ARCHITECTURAL CASE STUDY
          </span>
        </div>

        {/* Featured Project Showcase Box */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs text-[#8C9398] tracking-widest uppercase block mb-2">
            FEATURED INDUSTRIAL PROJECT · 2025
          </span>

          <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight uppercase leading-[1.05]">
            100 FT CLEAR-SPAN MANUFACTURING COMPLEX
          </h2>

          <p className="mt-5 text-sm sm:text-base lg:text-lg text-[#C8CCD0] font-sans leading-relaxed max-w-2xl">
            A 45,000 sq.ft turnkey manufacturing plant delivered in Noida Sector 63. Engineered with column-free Pratt steel pipe trusses, 10-tonne overhead crane gantry columns, and weather-sealed 0.50mm Galvalume trapezoidal cladding.
          </p>

          {/* Technical Specifications Ledger */}
          <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-[#8C9398]">
            <div>
              <span className="block text-[0.6875rem] text-[#8C9398] uppercase">LOCATION</span>
              <strong className="text-white text-sm mt-0.5 block">Noida Sector 63, UP</strong>
            </div>
            <div>
              <span className="block text-[0.6875rem] text-[#8C9398] uppercase">CLEAR SPAN</span>
              <strong className="text-[#B08A4A] text-sm mt-0.5 block tabular-nums">100 FT Column-Free</strong>
            </div>
            <div>
              <span className="block text-[0.6875rem] text-[#8C9398] uppercase">STRUCTURAL STEEL</span>
              <strong className="text-white text-sm mt-0.5 block">IS 2062 Certified Prime</strong>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="btn-arch-primary"
            >
              <span>VIEW FULL PROJECT ARCHIVE</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <Link
              to="/quote"
              className="btn-arch-secondary"
            >
              <span>REQUEST SIMILAR QUOTE</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
