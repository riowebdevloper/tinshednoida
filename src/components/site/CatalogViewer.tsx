import { Download, Compass, HardHat, Wrench, Layers, Award } from "lucide-react";
import { company } from "@/lib/site-data";

export function CatalogViewer() {
  const pdfUrl = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";

  const processStages = [
    {
      num: "01",
      icon: Compass,
      stage: "SITE SURVEY & GROUND ANALYSIS",
      title: "Laser Level Survey & Ground Alignment",
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
    <section id="process" className="bg-[#0B0D0F] text-white py-24 sm:py-36 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-[#B08A4A]" />
              <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                IS 800:2007 ERECTION PROTOCOL
              </span>
            </div>
            <h2 className="font-editorial-title text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-[1.06]">
              FIVE-STAGE SEQUENCE.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#8C9398] font-sans leading-relaxed">
              No subcontractors or middlemen. Our in-house crew executes every phase from laser survey in Noida to high-tensile bolted crane erection on your site.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-[#8C9398] flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[#B08A4A]" />
            <span>Turnkey Handover Across India</span>
          </div>
        </div>

        {/* 5-Stage Sequential Process Cards */}
        <div className="space-y-4">
          {processStages.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="arch-card-dark p-6 sm:p-7 transition-all hover:border-[#B08A4A]/50 bg-[#14171A]"
              >
                <div className="grid gap-6 md:grid-cols-12 items-center">
                  
                  {/* Sequence Number */}
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#B08A4A] tracking-tight tabular-nums">
                      {st.num}
                    </span>
                    <div className="block md:hidden">
                      <span className="font-mono text-[0.6875rem] text-[#8C9398] uppercase block">
                        {st.stage}
                      </span>
                    </div>
                  </div>

                  {/* Description & Scope */}
                  <div className="md:col-span-7">
                    <span className="font-mono text-xs font-semibold text-[#8C9398] tracking-widest uppercase block mb-1">
                      {st.stage}
                    </span>
                    <h3 className="font-editorial-title text-lg sm:text-xl font-bold text-white uppercase">
                      {st.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-[#C8CCD0] font-sans leading-relaxed">
                      {st.desc}
                    </p>
                  </div>

                  {/* Tech Specs */}
                  <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-5">
                    <span className="font-mono text-[0.6875rem] text-[#8C9398] uppercase block mb-1">
                      KEY INCLUSIONS:
                    </span>
                    <span className="font-mono text-xs text-white leading-tight block">
                      {st.specs}
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
