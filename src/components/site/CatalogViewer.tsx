import { Download, ExternalLink, FileText, CheckCircle2, Compass, HardHat, Wrench, Layers, Award, ArrowRight } from "lucide-react";
import { company } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function CatalogViewer() {
  const pdfUrl = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";

  const processStages = [
    {
      num: "01",
      icon: Compass,
      stage: "SITE SURVEY & GROUND ANALYSIS",
      title: "Site Survey & Soil Level Analysis",
      desc: "Physical inspection of plot elevation, soil compaction, heavy 40-tonne crane access routes, and structural wind orientation to IS 875.",
      specs: "Laser level gauge · Soil check · Crane access clearance",
    },
    {
      num: "02",
      icon: HardHat,
      stage: "CAD STRUCTURAL CALCULATION",
      title: "Laser Detailing & Load Calculations",
      desc: "Engineering 2D/3D CAD models calculating clear span, rafter pitch, column gantry cleats, and dead/wind load moments to IS 800:2007.",
      specs: "IS 800:2007 Code · Truss pitch calculation · Column sizing",
    },
    {
      num: "03",
      icon: Wrench,
      stage: "NOIDA YARD SHOP FABRICATION",
      title: "Shop Fabrication & Anti-Rust Primer",
      desc: "In-house oxy-fuel cutting, structural angle/channel fitment, continuous arc welding to IS 816, and dual-coat red-oxide zinc phosphate primer (IS 2074).",
      specs: "IS 816 Weld test · 2 coats Red Oxide Primer · Yard inspection",
    },
    {
      num: "04",
      icon: Layers,
      stage: "HYDRAULIC CRANE ERECTION",
      title: "Crane Lifting & Bolted Assembly",
      desc: "Heavy hydraulic crane hoisting of modular trusses, column base-plate anchoring, high-tensile 8.8 grade bolt fastening, and gantry beam alignment.",
      specs: "Hydraulic crane lifting · High-tensile bolts · Plumb-line verification",
    },
    {
      num: "05",
      icon: Award,
      stage: "WATERTIGHT QUALITY HANDOVER",
      title: "Galvalume Sheeting & Final Handover",
      desc: "Trapezoidal 0.50mm Galvalume fixing with EPDM washers, polycarbonate daylight strips, turbo ventilators, heavy-gauge gutters, and leak-proof warranty.",
      specs: "0.50mm Galvalume · EPDM fasteners · Heavy-gauge rainwater gutters",
    },
  ];

  return (
    <section id="process" className="bg-charcoal text-paper py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
      
      {/* Background blueprint grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-20 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER: 5-STAGE SEQUENCE TITLE (NO REPETITIVE EYEBROW) ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Five-Stage Fabrication &amp; Erection Sequence
            </h2>
            <p className="mt-2 text-sm sm:text-base text-steel-muted leading-relaxed font-sans">
              No subcontractors or middlemen. Our in-house crew executes every phase from laser survey in Noida to high-tensile bolted crane erection on your site.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-steel-muted flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-safety" />
            <span>Standardized Erection Protocol: IS 800:2007</span>
          </div>
        </div>

        {/* ──────── SIGNATURE MOTION: SVG TRUSS CAD ELEVATION (DRAWS IN ONCE) ──────── */}
        <div className="my-8 overflow-hidden rounded-xs border border-white/10 bg-charcoal-deep/60 p-2 sm:p-3" aria-hidden="true">
          <svg
            viewBox="0 0 1000 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-10 sm:h-14"
            preserveAspectRatio="none"
          >
            {/* Top & Bottom Chord */}
            <line x1="0" y1="10" x2="1000" y2="10" stroke="#F4B000" strokeWidth="2" className="truss-draw-line" />
            <line x1="0" y1="50" x2="1000" y2="50" stroke="#F4B000" strokeWidth="2" className="truss-draw-line" />
            <line x1="0" y1="30" x2="1000" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="6 6" />

            {/* Warren Web Members */}
            {Array.from({ length: 20 }).map((_, i) => {
              const x1 = i * 50;
              const x2 = x1 + 50;
              const isEven = i % 2 === 0;
              return (
                <g key={i}>
                  <line
                    x1={x1}
                    y1={isEven ? 10 : 50}
                    x2={x2}
                    y2={isEven ? 50 : 10}
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.5"
                    className="truss-draw-line"
                  />
                  <circle cx={x1} cy={isEven ? 10 : 50} r="2.5" fill={i % 4 === 0 ? "#F4B000" : "#B8BCC0"} />
                </g>
              );
            })}
          </svg>
        </div>

        {/* ──────── 5-STAGE ANNOTATED CAD SEQUENCE ──────── */}
        <div className="space-y-4">
          {processStages.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="relative rounded-xs border border-white/15 bg-charcoal-deep/90 p-5 sm:p-6 transition-colors hover:border-safety/50"
              >
                <div className="grid gap-5 md:grid-cols-12 items-center">
                  
                  {/* Sequence Number Stamp */}
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-safety tracking-tight tabular-nums">
                      {st.num}
                    </span>
                    <div className="block md:hidden">
                      <span className="font-mono text-[0.6875rem] text-steel-muted uppercase block">
                        {st.stage}
                      </span>
                    </div>
                  </div>

                  {/* Description & Scope */}
                  <div className="md:col-span-7">
                    <span className="font-mono text-xs font-semibold text-safety tracking-tight uppercase block mb-1">
                      {st.stage}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                      {st.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-steel-muted font-sans">
                      {st.desc}
                    </p>
                  </div>

                  {/* Technical Drawing Annotations Tag */}
                  <div className="md:col-span-3 rounded-xs border border-white/10 bg-charcoal p-3 font-mono text-xs text-steel-muted">
                    <span className="text-galvalume font-semibold block uppercase text-[0.6875rem] mb-0.5">
                      Quality Checks
                    </span>
                    <span className="text-paper/90 text-xs block leading-tight">{st.specs}</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ──────── 51-PAGE WORK CATALOG SUBMITTAL BINDER ──────── */}
        <div className="mt-12 rounded-xs border border-safety/30 bg-charcoal-deep p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-8 space-y-2.5">
              <div className="flex items-center gap-2 font-mono text-xs text-safety font-semibold">
                <FileText className="size-3.5" />
                <span>OFFICIAL ENGINEERING SUBMITTAL · 51-PAGE WORK CATALOG (PDF)</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Download Complete Structural Work Catalog
              </h3>
              
              <p className="text-xs sm:text-sm leading-relaxed text-steel-muted font-sans">
                Includes full photographic records of 500+ completed sheds, steel truss chord schedules, IS 2062 material certificates, and gantry column engineering drawings.
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-1 pt-1 text-xs font-mono text-steel-muted tabular-nums">
                <span>File Size: 4.5 MB</span>
                <span>·</span>
                <span>Format: PDF Document</span>
                <span>·</span>
                <span>Includes Weight Charts &amp; Layouts</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <a
                href={pdfUrl}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="btn-primary w-full text-center"
              >
                <Download className="size-4" />
                <span>Download Work Catalog</span>
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xs border border-white/20 bg-charcoal px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-white hover:border-safety hover:text-safety transition-colors text-center"
              >
                <ExternalLink className="size-3.5" />
                <span>Open PDF in Browser</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      <TrussDivider dark type="howe" className="mt-14" />
    </section>
  );
}
