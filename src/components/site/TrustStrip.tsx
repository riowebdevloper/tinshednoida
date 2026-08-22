import { CheckCircle2 } from "lucide-react";

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
      className="bg-paper py-10 sm:py-14 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── FLAT RIVETED METALLIC SPECIFICATION PLATE ──────── */}
        <div className="plate-riveted rounded-xs p-6 sm:p-8 lg:p-9 relative overflow-hidden">
          
          {/* Rivet Corner Bolt Fasteners */}
          <div className="absolute top-2.5 left-2.5 size-2.5 rounded-full bg-galvalume border border-black/80 flex items-center justify-center pointer-events-none">
            <div className="w-1.5 h-0.5 bg-charcoal transform rotate-45" />
          </div>
          <div className="absolute top-2.5 right-2.5 size-2.5 rounded-full bg-galvalume border border-black/80 flex items-center justify-center pointer-events-none">
            <div className="w-1.5 h-0.5 bg-charcoal transform -rotate-45" />
          </div>
          <div className="absolute bottom-2.5 left-2.5 size-2.5 rounded-full bg-galvalume border border-black/80 flex items-center justify-center pointer-events-none">
            <div className="w-1.5 h-0.5 bg-charcoal transform -rotate-12" />
          </div>
          <div className="absolute bottom-2.5 right-2.5 size-2.5 rounded-full bg-galvalume border border-black/80 flex items-center justify-center pointer-events-none">
            <div className="w-1.5 h-0.5 bg-charcoal transform rotate-30" />
          </div>

          {/* Stamped Nameplate Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 bg-safety text-charcoal font-mono text-[0.6875rem] font-bold uppercase rounded-xs">
                SPEC PLATE
              </span>
              <h2 className="font-display text-base sm:text-lg font-bold uppercase tracking-wide text-white">
                Tin Shade Noida · Structural Capacity &amp; Standards
              </h2>
            </div>
            
            <div className="font-mono text-xs text-steel-muted flex items-center gap-2">
              <span>Code: IS 800:2007 (General Construction in Steel)</span>
            </div>
          </div>

          {/* 4 Engraved Metric Panels */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plateSpecs.map((item) => (
              <div
                key={item.id}
                className="rounded-xs border border-white/10 bg-charcoal/80 p-4 transition-colors hover:border-safety/40"
              >
                {/* Micro Stamp Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2.5">
                  <span className="font-mono text-[0.6875rem] text-safety font-medium tracking-tight">
                    {item.stamp}
                  </span>
                  <span className="font-mono text-[0.6875rem] text-steel-muted">
                    {item.code}
                  </span>
                </div>

                {/* Primary Data Metric in IBM Plex Mono Tabular Nums */}
                <span className="block font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums">
                  {item.value}
                </span>

                {/* Label & Detail */}
                <p className="mt-1 font-mono text-xs font-semibold text-galvalume uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-steel-muted font-sans">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Ledger Stamp */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-steel-muted">
            <span className="flex items-center gap-1.5 text-paper/85">
              <CheckCircle2 className="size-3.5 text-safety shrink-0" aria-hidden="true" />
              100% In-House Master Fabrication Crew · Sector 10 Noida Yard
            </span>
            <span className="text-safety font-medium">
              ZERO BROKERS · DIRECT CONTRACTING
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
