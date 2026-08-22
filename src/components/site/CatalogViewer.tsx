import { Download, ExternalLink, FileText, CheckCircle2, ShieldCheck, HardHat, Compass, Wrench, Layers, Award, ArrowRight } from "lucide-react";
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
        
        {/* ──────── SECTION HEADER ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-8">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block mb-1">
              5-STAGE EXECUTION WORKFLOW · YARD TO ERECTION
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              From Blueprints to Turnkey Handover
            </h2>
            <p className="mt-3 text-base text-steel-muted leading-relaxed font-sans">
              No subcontractors. Our in-house engineering team handles every step from laser survey in Noida to final high-tensile bolt fastening on site.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-steel-muted flex items-center gap-2">
            <span className="size-2 rounded-full bg-safety animate-pulse" />
            <span>Standardized Erection Protocol: IS 800:2007</span>
          </div>
        </div>

        {/* ──────── TECHNICAL DRAWING PROCESS SEQUENCE (5 Stages) ──────── */}
        <div className="mt-12 space-y-6">
          {processStages.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="relative rounded-xs border border-white/15 bg-charcoal-deep/80 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-safety/60 group"
              >
                <div className="grid gap-6 md:grid-cols-12 items-center">
                  
                  {/* Step Sequence Number Stamp */}
                  <div className="md:col-span-2 flex items-center gap-4">
                    <span className="font-display text-4xl sm:text-5xl font-black text-safety tracking-tight">
                      {st.num}
                    </span>
                    <div className="hidden sm:block md:hidden">
                      <span className="font-mono text-[0.6875rem] font-bold text-steel-muted uppercase block">
                        {st.stage}
                      </span>
                    </div>
                  </div>

                  {/* Step Description & Scope */}
                  <div className="md:col-span-7">
                    <span className="font-mono text-xs font-bold text-safety tracking-wider uppercase block mb-1">
                      {st.stage}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-safety transition-colors">
                      {st.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-muted font-sans">
                      {st.desc}
                    </p>
                  </div>

                  {/* Technical Drawing Annotations Tag */}
                  <div className="md:col-span-3 rounded-xs border border-white/10 bg-charcoal p-3 font-mono text-xs text-steel-muted">
                    <span className="text-galvalume font-bold block uppercase mb-0.5">
                      Quality Checks
                    </span>
                    <span className="text-paper/90">{st.specs}</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ──────── 51-PAGE WORK CATALOG SUBMITTAL BINDER ──────── */}
        <div className="mt-14 rounded-xs border border-safety/30 bg-charcoal-deep p-6 sm:p-10 shadow-elevated">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2">
                <FileText className="size-4 text-safety" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-safety">
                  OFFICIAL ENGINEERING SUBMITTAL · 51-PAGE EDITION (PDF)
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Download Complete Structural Work Catalog
              </h3>
              
              <p className="text-sm sm:text-base leading-relaxed text-steel-muted font-sans">
                Includes full photographic records of 500+ completed sheds, steel truss chord schedules, IS 2062 material certificates, and gantry column engineering drawings.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-mono text-steel-muted">
                <span>• File Size: 4.5 MB</span>
                <span>• Format: PDF Document</span>
                <span>• Includes: Weight Charts &amp; Layouts</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={pdfUrl}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-xs bg-safety px-6 py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal shadow-md transition-transform hover:-translate-y-0.5 text-center"
              >
                <Download className="size-4" />
                <span>Download Work Catalog</span>
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xs border border-white/20 bg-charcoal px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:border-safety hover:text-safety transition-colors text-center"
              >
                <ExternalLink className="size-3.5" />
                <span>Open PDF in Browser</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      <TrussDivider dark type="howe" className="mt-16" />
    </section>
  );
}
