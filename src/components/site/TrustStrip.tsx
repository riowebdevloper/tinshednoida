import { ShieldCheck, Ruler, Truck, Hammer } from "lucide-react";

export function TrustStrip() {
  const pillars = [
    {
      num: "01",
      icon: Hammer,
      label: "In-House Fabrication",
      spec: "500 MT / Month",
      desc: "Direct workshop fabrication in Noida Sector 10. Certified arc welders, structural gas cutters & hydraulic presses.",
    },
    {
      num: "02",
      icon: ShieldCheck,
      label: "Material Grade",
      spec: "IS 2062 Certified",
      desc: "Prime mild steel beams, tubular trusses, purlins & 0.50mm Galvalume / PPGL color-coated sheets.",
    },
    {
      num: "03",
      icon: Ruler,
      label: "Clear Span Reach",
      spec: "Up to 120+ Feet",
      desc: "Column-free industrial layout engineered for heavy machinery, overhead EOT cranes, and high-density racking.",
    },
    {
      num: "04",
      icon: Truck,
      label: "Turnkey Erection",
      spec: "Pan India Crane Setup",
      desc: "End-to-end execution: site measurement, structural analysis, transportation, crane lifting & final handover.",
    },
  ];

  return (
    <section aria-label="Engineering Specifications & Standards" className="border-b border-steel-line bg-steel-deep text-steel-foreground py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Ledger Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-steel-line/80 pb-4">
          <div className="flex items-center gap-2">
            <h2 className="font-mono text-xs font-bold text-primary uppercase">
              Engineering Specification Ledger
            </h2>
            <span className="text-steel-muted text-xs">/ Structural Standards</span>
          </div>
          <span className="font-mono text-xs text-steel-muted uppercase tracking-wider">
            Standard: IS 800:2007 (General Construction in Steel)
          </span>
        </div>

        {/* 4 Pillars Technical Grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative rounded-xs border border-steel-line bg-steel/60 p-5 transition-all hover:border-primary/60 hover:bg-steel"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary">{item.num}</span>
                  <Icon className="size-4 text-primary" />
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-base font-bold text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-bold text-primary">
                    {item.spec}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-steel-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
