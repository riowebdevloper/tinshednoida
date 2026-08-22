import { CheckCircle2, ShieldCheck, Factory, Award } from "lucide-react";

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
      className="bg-navy-obsidian py-10 sm:py-14 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── ARCHITECTURAL NAVY SPECIFICATION PLATE ──────── */}
        <div className="spec-plate-navy p-6 sm:p-8 lg:p-9 relative overflow-hidden">
          
          {/* Rivet Corner Fasteners */}
          <div className="absolute top-3 left-3 size-2 rounded-full bg-slate-400 border border-slate-900 pointer-events-none shadow-xs" />
          <div className="absolute top-3 right-3 size-2 rounded-full bg-slate-400 border border-slate-900 pointer-events-none shadow-xs" />
          <div className="absolute bottom-3 left-3 size-2 rounded-full bg-slate-400 border border-slate-900 pointer-events-none shadow-xs" />
          <div className="absolute bottom-3 right-3 size-2 rounded-full bg-slate-400 border border-slate-900 pointer-events-none shadow-xs" />

          {/* Stamped Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 bg-amber-400 text-slate-950 font-mono text-[0.6875rem] font-bold uppercase rounded-xs">
                SPECIFICATION PLATE
              </span>
              <h2 className="font-display text-base sm:text-lg font-bold tracking-tight text-white">
                Tin Shade Noida · Structural Capacity &amp; Engineering Standards
              </h2>
            </div>
            
            <div className="font-mono text-xs text-sky-400 flex items-center gap-1.5">
              <ShieldCheck className="size-4" />
              <span>Standard: IS 800:2007 (General Steel Construction)</span>
            </div>
          </div>

          {/* 4 Engraved Metric Panels */}
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plateSpecs.map((item) => (
              <div
                key={item.id}
                className="rounded-xs border border-white/10 bg-[#0B1320]/80 p-4 transition-all hover:border-sky-400/40 hover:bg-[#0E182A]"
              >
                {/* Micro Stamp Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2.5">
                  <span className="font-mono text-[0.6875rem] text-amber-400 font-semibold tracking-tight">
                    {item.stamp}
                  </span>
                  <span className="font-mono text-[0.6875rem] text-slate-400">
                    {item.code}
                  </span>
                </div>

                {/* Primary Data Metric in JetBrains Mono */}
                <span className="block font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                  {item.value}
                </span>

                {/* Label & Detail */}
                <p className="mt-1 font-mono text-xs font-semibold text-sky-300 uppercase">
                  {item.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400 font-sans">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Ledger Stamp */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0" aria-hidden="true" />
              100% In-House Fabrication Crew · Sector 10 Noida Workshop
            </span>
            <span className="text-amber-400 font-semibold">
              ZERO BROKERS · DIRECT CONTRACTING
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
