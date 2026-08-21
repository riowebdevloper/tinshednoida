import { Download, ExternalLink } from "lucide-react";
import { company } from "@/lib/site-data";

export function CatalogViewer() {
  const pdfUrl = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";

  return (
    <section id="catalog" className="bg-steel-deep text-steel-foreground py-16 lg:py-24 border-b border-steel-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left: Catalog */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-steel-muted">Official Catalog</p>
            <div className="mt-2 h-px w-12 bg-primary" />

            <h2 className="mt-6 font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
              Work Catalog — 51 Pages
            </h2>
            <p className="mt-3 text-sm sm:text-base text-steel-muted leading-relaxed max-w-md">
              Structural designs, site photographs, completed projects and material specifications.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={pdfUrl}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-px"
              >
                <Download className="size-4" />
                Download PDF
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-steel-line px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-primary hover:text-primary"
              >
                <ExternalLink className="size-4" />
                Open Catalog
              </a>
            </div>
          </div>

          {/* Right: Process */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-steel-muted">Our Process</p>
            <div className="mt-2 h-px w-12 bg-primary" />

            <ol className="mt-6 space-y-5">
              {[
                { num: "01", title: "Site Visit", desc: "Physical inspection of ground, access and orientation." },
                { num: "02", title: "Measurement", desc: "Precision measurement of span, height and load requirements." },
                { num: "03", title: "Quotation", desc: "Structural analysis, steel calculation and transparent pricing." },
                { num: "04", title: "Fabrication", desc: "Cutting, welding, truss alignment and anti-rust priming." },
                { num: "05", title: "Erection & Handover", desc: "Crane lifting, anchoring, roof fixing and final inspection." },
              ].map((step) => (
                <li key={step.num} className="flex gap-4">
                  <span className="font-mono text-sm font-bold text-primary shrink-0 mt-0.5">{step.num}</span>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase text-white">{step.title}</h3>
                    <p className="mt-0.5 text-sm text-steel-muted leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}
