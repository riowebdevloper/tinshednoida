import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site-data";

export function Services() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeService = services[activeIdx] || services[0]!;

  return (
    <section
      id="services"
      aria-label="Core Engineering Services"
      className="relative bg-[#0B0D0F] text-white py-24 sm:py-36 border-b border-white/10 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#B08A4A]" />
          <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
            CAPABILITIES & SPECIALIZATIONS
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              ENGINEERING <br />
              <span className="text-[#B08A4A]">DISCIPLINES.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#8C9398] font-sans leading-relaxed">
            In-house structural engineering, fabrication, and turnkey crane assembly for demanding industrial and commercial requirements.
          </p>
        </div>

        {/* ──────── EDITORIAL VERTICAL ARCHITECTURAL SERVICE LIST (NO GENERIC CARDS) ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Vertical Interactive Architectural List (7 cols) */}
          <div className="lg:col-span-7 border-t border-white/15">
            {services.map((svc, idx) => {
              const isActive = idx === activeIdx;
              const numStr = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={svc.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group relative border-b border-white/15 transition-all duration-300 py-6 sm:py-8 px-2 cursor-pointer ${
                    isActive ? "bg-[#14171A]/80 pl-6 border-l-2 border-l-[#B08A4A]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      {/* Number that moves on hover / active */}
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold tracking-widest transition-transform duration-300 ${
                          isActive
                            ? "text-[#B08A4A] translate-x-1"
                            : "text-[#8C9398] group-hover:text-white group-hover:translate-x-1"
                        }`}
                      >
                        {numStr}
                      </span>

                      {/* Service Title */}
                      <h3
                        className={`font-editorial-title text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#C8CCD0] group-hover:text-white"
                        }`}
                      >
                        {svc.title}
                      </h3>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[0.6875rem] text-[#8C9398] uppercase hidden sm:inline">
                        {svc.specs[0]}
                      </span>
                      <ArrowRight
                        className={`size-4 transition-all duration-300 ${
                          isActive
                            ? "text-[#B08A4A] translate-x-2 opacity-100"
                            : "text-[#8C9398] opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Summary copy that expands on active */}
                  <p
                    className={`mt-3 text-xs sm:text-sm text-[#8C9398] font-sans leading-relaxed max-w-xl transition-all duration-300 ${
                      isActive ? "block" : "hidden sm:block sm:line-clamp-1"
                    }`}
                  >
                    {svc.summary}
                  </p>

                  <div className="mt-4 pt-2 flex items-center gap-4">
                    <Link
                      to={svc.href}
                      className="font-mono text-xs text-[#B08A4A] hover:text-white font-bold inline-flex items-center gap-1.5 uppercase transition-colors"
                    >
                      <span>Explore Technical Specification</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Live Detail & Image Preview Panel (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-[#14171A] border border-white/15 overflow-hidden p-6 sm:p-8">
              
              {/* Active Image with Crossfade */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0D0F] mb-6 border border-white/10">
                <picture>
                  <source srcSet={activeService.imageWebp} type="image/webp" />
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="size-full object-cover object-center brightness-[0.80] contrast-[1.08] transition-transform duration-700 ease-out hover:scale-105"
                  />
                </picture>
                <div className="absolute top-3 right-3 bg-[#0B0D0F]/90 px-2.5 py-1 border border-white/20 font-mono text-[0.6875rem] text-[#B08A4A] font-bold">
                  IS 2062 / IS 800
                </div>
              </div>

              {/* Detail Header */}
              <div className="font-mono text-xs text-[#B08A4A] uppercase tracking-widest font-bold mb-1">
                DISCIPLINE SPECIFICATION
              </div>
              <h4 className="font-editorial-title text-xl sm:text-2xl font-bold text-white uppercase mb-3">
                {activeService.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#8C9398] font-sans leading-relaxed mb-6">
                {activeService.description}
              </p>

              {/* Technical Spec List */}
              <div className="space-y-2.5 pt-4 border-t border-white/10 font-mono text-xs mb-8">
                {activeService.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 text-[#C8CCD0]">
                    <CheckCircle2 className="size-3.5 text-[#B08A4A] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to={activeService.href}
                  className="btn-arch-primary text-xs flex-1"
                >
                  <span>VIEW FULL SPECS</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <Link
                  to="/quote"
                  className="btn-arch-secondary text-xs"
                >
                  <span>CALCULATE BOQ</span>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
