import { ShieldCheck, Ruler, Truck, Hammer, Award, CheckCircle2 } from "lucide-react";

export function TrustStrip() {
  const plateSpecs = [
    {
      id: "years",
      stamp: "EST. 2010",
      value: "15+ YEARS",
      label: "In-House Fabrication",
      detail: "Direct workshop in Noida Sector 10. Certified arc welders, structural gas cutters & hydraulic presses.",
      code: "NOIDA YARD",
    },
    {
      id: "sheds",
      stamp: "IS 800:2007",
      value: "500+ SHEDS",
      label: "Completed Across India",
      detail: "Factories, warehouses, godowns, and heavy crane industrial structures delivered turnkey.",
      code: "PAN INDIA",
    },
    {
      id: "span",
      stamp: "CLEAR-SPAN",
      value: "120 FT REACH",
      label: "Max Column-Free Span",
      detail: "Engineered for high-cube racking, heavy machinery layouts, and overhead EOT crane gantries.",
      code: "HEAVY TRUSS",
    },
    {
      id: "grade",
      stamp: "ISI CERTIFIED",
      value: "IS 2062 STEEL",
      label: "Prime Mild Steel Only",
      detail: "Certified mild steel I-beams, tubular trusses, purlins & 0.50mm Galvalume / PPGL sheets.",
      code: "PRIME GRADE",
    },
  ];

  return (
    <section
      aria-label="Engineering Standards & Fabricator Credentials"
      className="bg-paper py-12 sm:py-16 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── RIVETED METALLIC SPECIFICATION PLATE ──────── */}
        <div className="plate-riveted rounded-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          
          {/* Rivet Corner Bolt Fasteners */}
          <div className="absolute top-3 left-3 size-3 rounded-full bg-galvalume border border-black shadow-inner flex items-center justify-center pointer-events-none">
            <div className="w-2 h-0.5 bg-charcoal transform rotate-45" />
          </div>
          <div className="absolute top-3 right-3 size-3 rounded-full bg-galvalume border border-black shadow-inner flex items-center justify-center pointer-events-none">
            <div className="w-2 h-0.5 bg-charcoal transform -rotate-45" />
          </div>
          <div className="absolute bottom-3 left-3 size-3 rounded-full bg-galvalume border border-black shadow-inner flex items-center justify-center pointer-events-none">
            <div className="w-2 h-0.5 bg-charcoal transform -rotate-12" />
          </div>
          <div className="absolute bottom-3 right-3 size-3 rounded-full bg-galvalume border border-black shadow-inner flex items-center justify-center pointer-events-none">
            <div className="w-2 h-0.5 bg-charcoal transform rotate-30" />
          </div>

          {/* Stamped Nameplate Top Ledger */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
            <div className="flex items-center gap-3">
              <span className="inline-block px-2.5 py-1 bg-safety text-charcoal font-mono text-xs font-bold uppercase tracking-wider rounded-xs">
                SPECIFICATION PLATE
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                Tin Shade Noida · Structural Credentials
              </h2>
            </div>
            
            <div className="font-mono text-xs text-steel-muted flex items-center gap-2">
              <span>Standard: IS 800:2007 (General Construction in Steel)</span>
              <span className="text-safety">✓</span>
            </div>
          </div>

          {/* 4 Engraved Metric Panels */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plateSpecs.map((item) => (
              <div
                key={item.id}
                className="relative rounded-xs border border-white/10 bg-charcoal/60 p-5 backdrop-blur-xs transition-colors hover:border-safety/50"
              >
                {/* Micro Serial Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-mono text-[0.6875rem] font-bold text-safety tracking-wider">
                    {item.stamp}
                  </span>
                  <span className="font-mono text-[0.6875rem] text-steel-muted">
                    {item.code}
                  </span>
                </div>

                {/* Primary Data Metric */}
                <span className="block font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {item.value}
                </span>

                {/* Label & Detail */}
                <p className="mt-1 font-mono text-xs font-bold text-galvalume uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-steel-muted font-sans">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Quality Ledger Stamp */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-steel-muted">
            <span className="flex items-center gap-1.5 text-paper/80">
              <CheckCircle2 className="size-3.5 text-safety shrink-0" aria-hidden="true" />
              100% In-House Master Welding Crew · Sector 10 Noida Fabrication Yard
            </span>
            <span className="text-safety font-bold">
              ZERO BROKERS · DIRECT CONTRACTING
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
