import { Download, ExternalLink, FileText, CheckCircle2, ShieldCheck, Eye } from "lucide-react";
import { company } from "@/lib/site-data";

export function CatalogViewer() {
  const pdfUrl = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";

  const processSteps = [
    {
      num: "01",
      title: "Site Survey & Soil Level Analysis",
      desc: "Physical inspection of ground elevation, heavy crane access routes, and structural wind orientation.",
      badge: "GROUND PHASE",
    },
    {
      num: "02",
      title: "Structural Engineering & Detailing",
      desc: "Precision CAD calculation of span, rafter pitch, wind load (IS 875), and dead/live load requirements.",
      badge: "ENGINEERING",
    },
    {
      num: "03",
      title: "In-Shop Steel Fabrication",
      desc: "Cutting, gas beveling, continuous arc welding, and red-oxide zinc chromate anti-corrosion primer application.",
      badge: "NOIDA YARD",
    },
    {
      num: "04",
      title: "Heavy Crane Lifting & Erection",
      desc: "On-site hydraulic crane hoisting of heavy trusses, columns, gantry girders, and high-tensile bolt fastening.",
      badge: "ON-SITE ERECTION",
    },
    {
      num: "05",
      title: "Sheeting & Final Quality Handover",
      desc: "Trapezoidal 0.50mm Galvalume fixing, polycarbonate skylights, turbo ventilators, and water-tight sealing.",
      badge: "FINAL HANDOVER",
    },
  ];

  return (
    <section id="catalog" className="bg-steel-deep text-steel-foreground py-16 lg:py-24 border-b border-steel-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">

          {/* Left Column: 51-Page Work Catalog Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                OFFICIAL WORK CATALOG
              </span>
              <span className="text-steel-muted font-mono text-xs">/ 51-Page Edition</span>
            </div>

            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-tight text-white">
                TIN SHADE NOIDA
                <span className="block text-primary">OFFICIAL WORK CATALOG</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-steel-muted">
                Complete photographic documentation, structural truss designs, column schedules, and material grades for architects and industrial builders.
              </p>
            </div>

            {/* Visual Document Card */}
            <div className="rounded-xs border border-steel-line bg-steel p-5 shadow-card">
              <div className="flex items-center justify-between border-b border-steel-line pb-3">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <FileText className="size-4 text-primary" />
                  <span>51-PAGE SINGLE PDF DOCUMENT</span>
                </div>
                <span className="font-mono text-[0.65rem] text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-xs border border-primary/20">
                  4.5 MB
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-steel-muted font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Warehouse, Factory & Godown Lay-outs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Mild Steel Channel & Truss Weight Charts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>Real On-Site Crane Erection Photography</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>ISO 9001 & IS 2062 Material Certifications</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <a
                  href={pdfUrl}
                  download="TIN_SHADE_NOIDA_CATALOG.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xs bg-primary px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-transform hover:-translate-y-px"
                >
                  <Download className="size-4" />
                  Download Catalog (PDF)
                </a>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xs border border-steel-line bg-steel-deep px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-primary hover:text-primary"
                >
                  <Eye className="size-4" />
                  Open PDF
                </a>
              </div>
            </div>

            <p className="font-mono text-[0.7rem] text-steel-muted">
              * Verified structural portfolio provided for civil engineering reference and project tenders.
            </p>
          </div>

          {/* Right Column: 5-Phase Turnkey Execution Process (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                TURNKEY EXECUTION TIMELINE
              </span>
              <span className="text-steel-muted font-mono text-xs">/ Ground to Handover</span>
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase leading-tight text-white">
                HOW WE BUILD YOUR STRUCTURE
              </h3>
              <p className="mt-2 text-sm text-steel-muted">
                Transparent 5-stage industrial engineering workflow executed by our in-house crew.
              </p>
            </div>

            {/* Timeline Steps */}
            <div className="mt-6 space-y-4">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="flex gap-4 rounded-xs border border-steel-line bg-steel/70 p-4 transition-all hover:border-primary/50 hover:bg-steel"
                >
                  <span className="font-mono text-sm font-bold text-primary shrink-0 mt-0.5 bg-black/60 size-7 flex items-center justify-center rounded-xs border border-white/10">
                    {step.num}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-display text-base font-bold uppercase text-white">
                        {step.title}
                      </h4>
                      <span className="font-mono text-[0.62rem] text-steel-muted uppercase bg-steel-deep px-2 py-0.5 rounded-xs border border-steel-line shrink-0">
                        {step.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-steel-muted">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
