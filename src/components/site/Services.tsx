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
      className="relative bg-[#0A1128] text-white py-24 sm:py-36 border-b border-indigo-200/15 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            CAPABILITIES & SPECIALIZATIONS
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              ENGINEERING <br />
              <span className="text-[#F59E0B]">DISCIPLINES.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#8E9CB8] font-sans leading-relaxed">
            In-house structural engineering, fabrication, and turnkey crane assembly for demanding industrial and commercial requirements.
          </p>
        </div>

        {/* ──────── EDITORIAL VERTICAL ARCHITECTURAL SERVICE LIST ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Vertical Interactive Architectural List (7 cols) */}
          <div className="lg:col-span-7 border-t border-indigo-200/20">
            {services.map((svc, idx) => {
              const isActive = idx === activeIdx;
              const numStr = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={svc.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group relative border-b border-indigo-200/20 transition-all duration-300 py-6 sm:py-8 px-3 cursor-pointer rounded-[2px] ${
                    isActive
                      ? "bg-[#101B3B]/90 pl-6 border-l-4 border-l-[#F59E0B] shadow-lg"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      {/* Number in Safety Yellow */}
                      <span
                        className={`font-mono text-xs sm:text-sm font-bold tracking-widest transition-transform duration-300 ${
                          isActive
                            ? "text-[#F59E0B] translate-x-1"
                            : "text-[#8E9CB8] group-hover:text-white group-hover:translate-x-1"
                        }`}
                      >
                        {numStr}
                      </span>

                      {/* Service Title */}
                      <h3
                        className={`font-editorial-title text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                          isActive ? "text-white" : "text-[#C7D2FE] group-hover:text-white"
                        }`}
                      >
                        {svc.title}
                      </h3>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[0.6875rem] text-[#8E9CB8] uppercase hidden sm:inline">
                        {svc.specs[0]}
                      </span>
                      <ArrowRight
                        className={`size-4 transition-all duration-300 ${
                          isActive
                            ? "text-[#F59E0B] translate-x-2 opacity-100"
                            : "text-[#8E9CB8] opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Summary copy that expands on active */}
                  <p
                    className={`mt-3 text-xs sm:text-sm text-[#8E9CB8] font-sans leading-relaxed max-w-xl transition-all duration-300 ${
                      isActive ? "block text-[#C7D2FE]" : "hidden sm:block sm:line-clamp-1"
                    }`}
                  >
                    {svc.summary}
                  </p>

                  <div className="mt-4 pt-2 flex items-center gap-4">
                    <Link
                      to={svc.href}
                      className="font-mono text-xs text-[#F59E0B] hover:text-white font-bold inline-flex items-center gap-1.5 uppercase transition-colors"
                    >
                      <span>Explore Technical Specification</span>
                      <ArrowRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Live Detail & Image Preview Panel in Navy Elevated (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-[#101B3B] border border-indigo-200/25 overflow-hidden p-6 sm:p-8 rounded-[3px] shadow-2xl">
              
              {/* Active Image with Crossfade */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A1128] mb-6 border border-indigo-200/20 rounded-[2px]">
                <picture>
                  <source srcSet={activeService.imageWebp} type="image/webp" />
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="size-full object-cover object-center brightness-[0.85] contrast-[1.10] transition-transform duration-700 ease-out hover:scale-105"
                  />
                </picture>
                <div className="absolute top-3 right-3 bg-[#0A1128]/95 px-3 py-1 border border-indigo-200/30 font-mono text-[0.6875rem] text-[#F59E0B] font-bold rounded-[2px]">
                  IS 2062 / IS 800
                </div>
              </div>

              {/* Detail Header */}
              <div className="font-mono text-xs text-[#F59E0B] uppercase tracking-widest font-bold mb-1">
                DISCIPLINE SPECIFICATION
              </div>
              <h4 className="font-editorial-title text-xl sm:text-2xl font-bold text-white uppercase mb-3">
                {activeService.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#C7D2FE] font-sans leading-relaxed mb-6">
                {activeService.description}
              </p>

              {/* Technical Spec List with Yellow Checkmarks */}
              <div className="space-y-2.5 pt-4 border-t border-indigo-200/15 font-mono text-xs mb-8">
                {activeService.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 text-white">
                    <CheckCircle2 className="size-3.5 text-[#F59E0B] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Direct Actions: Precision Red & Safety Yellow Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to={activeService.href}
                  className="btn-red-primary text-xs flex-1"
                >
                  <span>VIEW FULL SPECS</span>
                  <ArrowRight className="size-3.5" />
                </Link>

                <Link
                  to="/quote"
                  className="btn-yellow-primary text-xs"
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
