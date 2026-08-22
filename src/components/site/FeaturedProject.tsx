import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Warehouse } from "lucide-react";

export function FeaturedProject() {
  return (
    <section
      aria-label="Featured Industrial Case Study"
      className="relative bg-[#0A1128] text-white py-24 sm:py-36 border-b border-indigo-200/15 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            CASE STUDY · INDUSTRIAL EXCELLENCE
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-[1.05]">
            100 FT CLEAR-SPAN <br />
            <span className="text-[#F59E0B]">MANUFACTURING COMPLEX.</span>
          </h2>
        </div>

        {/* ──────── FULL-BLEED ARCHITECTURAL SHOWCASE CONTAINER ──────── */}
        <div className="relative bg-[#101B3B] border border-indigo-200/25 rounded-[3px] overflow-hidden shadow-2xl">
          
          {/* Main Visual with Technical Stamp */}
          <div className="relative aspect-[21/9] min-h-[360px] sm:min-h-[480px] w-full overflow-hidden bg-[#0A1128]">
            <picture>
              <source srcSet="/images/projects/proj-03.webp" type="image/webp" />
              <img
                src="/images/projects/proj-03.jpg"
                alt="Heavy industrial manufacturing complex 100 FT clear span"
                className="size-full object-cover object-center brightness-[0.70] contrast-[1.12]"
                loading="lazy"
              />
            </picture>

            {/* Navy Gradients for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101B3B] via-transparent to-black/50" />

            {/* Live Technical Blueprint Overlay */}
            <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-[#0A1128]/90 border border-indigo-200/30 font-mono text-xs text-[#F59E0B] font-bold rounded-[2px] backdrop-blur-md">
                LOCATION: NOIDA SECTOR 63
              </span>
              <span className="px-3 py-1 bg-[#0A1128]/90 border border-indigo-200/30 font-mono text-xs text-white font-bold rounded-[2px] backdrop-blur-md">
                SCOPE: 45,000 SQ FT
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-[#F59E0B] uppercase tracking-widest font-bold block mb-1">
                  PROJECT SPECIFICATION #TSN-2024-03
                </span>
                <h3 className="font-editorial-title text-2xl sm:text-4xl font-extrabold text-white uppercase">
                  Heavy Structural Portal Frame & Overhead EOT Crane Gantry
                </h3>
              </div>
            </div>
          </div>

          {/* Technical Ledger Strip in 4 Columns */}
          <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-indigo-200/20 bg-[#121F44]">
            
            <div>
              <div className="font-mono text-xs text-[#8E9CB8] uppercase mb-1">Structural Frame</div>
              <div className="font-display text-sm font-bold text-white uppercase mb-1">
                IS 2062 Built-up Heavy I-Beams & Welded Trusses
              </div>
              <p className="text-xs text-[#C7D2FE] font-sans">
                Full-penetration submerged arc welding with 100% UT weld inspection.
              </p>
            </div>

            <div>
              <div className="font-mono text-xs text-[#8E9CB8] uppercase mb-1">Roofing System</div>
              <div className="font-display text-sm font-bold text-white uppercase mb-1">
                0.50mm High-Tensile AZ-150 Galvalume
              </div>
              <p className="text-xs text-[#C7D2FE] font-sans">
                Continuous crest fixing with EPDM self-drilling fasteners and Turbo Ventilators.
              </p>
            </div>

            <div>
              <div className="font-mono text-xs text-[#8E9CB8] uppercase mb-1">Clear Span Design</div>
              <div className="font-display text-sm font-bold text-white uppercase mb-1">
                100 FT Column-Free Internal Bay
              </div>
              <p className="text-xs text-[#C7D2FE] font-sans">
                Optimized layout for heavy machinery, forklifts, and raw material storage.
              </p>
            </div>

            <div>
              <div className="font-mono text-xs text-[#8E9CB8] uppercase mb-1">Erection Speed</div>
              <div className="font-display text-sm font-bold text-white uppercase mb-1">
                45 Days From Foundation To Handover
              </div>
              <p className="text-xs text-[#C7D2FE] font-sans">
                Dual mobile hydraulic crane mobilization with certified rigging team.
              </p>
            </div>

          </div>

          {/* Action Row */}
          <div className="px-6 sm:px-10 py-5 bg-[#101B3B] border-t border-indigo-200/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="font-mono text-xs text-[#8E9CB8]">
              Client: Precision Tooling & Forging Ltd · Status: Fully Operational
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/projects"
                className="btn-red-primary text-xs"
              >
                <span>EXPLORE ALL CASE STUDIES</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
