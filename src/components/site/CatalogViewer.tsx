import { useState } from "react";
import { Download, ExternalLink, FileText, CheckCircle, Shield, Eye, Sparkles } from "lucide-react";
import { company } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function CatalogViewer() {
  const pdfUrl = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";

  return (
    <section id="catalog" className="content-auto bg-steel-deep text-steel-foreground py-16 lg:py-24 border-b border-steel-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Architectural Billboard Banner */}
        <div className="relative isolate overflow-hidden rounded-sm border border-steel-line bg-steel p-6 sm:p-10 lg:p-14 shadow-2xl">
          
          {/* Blueprint grid background effect */}
          <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-25" aria-hidden />

          <div className="relative grid gap-10 lg:grid-cols-12 items-center">
            
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-xs border border-primary/40 bg-primary/10 px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-primary">
                <FileText className="size-3.5" />
                OFFICIAL WORK CATALOG
              </div>

              <div>
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight text-white">
                  TIN SHADE NOIDA CATALOG
                  <span className="block text-primary mt-1">— 51 PAGES</span>
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-steel-muted max-w-xl">
                  Verified structural designs, completed site photographs and project work.
                </p>
              </div>

              {/* Verified Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-steel-foreground font-medium">
                  <CheckCircle className="size-4 text-primary shrink-0" />
                  Detailed fabrication drawings & specifications
                </div>
                <div className="flex items-center gap-2.5 text-xs text-steel-foreground font-medium">
                  <CheckCircle className="size-4 text-primary shrink-0" />
                  Real on-site erection & crane photos
                </div>
                <div className="flex items-center gap-2.5 text-xs text-steel-foreground font-medium">
                  <CheckCircle className="size-4 text-primary shrink-0" />
                  Multi-span warehouse & factory layouts
                </div>
                <div className="flex items-center gap-2.5 text-xs text-steel-foreground font-medium">
                  <CheckCircle className="size-4 text-primary shrink-0" />
                  Official ISO standard material grades
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={pdfUrl}
                  download="TIN_SHADE_NOIDA_CATALOG.pdf"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  <Download className="size-4.5" />
                  DOWNLOAD CATALOG PDF
                </a>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-steel-line bg-steel-deep px-6 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-primary hover:text-primary"
                >
                  <ExternalLink className="size-4.5" />
                  OPEN PDF
                </a>
              </div>
            </div>

            {/* Right Column: Premium Document Presentation Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-sm border border-steel-line bg-steel-deep p-6 shadow-card transition-all duration-300 hover:border-primary">
                
                {/* Catalog Mockup Cover View */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xs border border-steel-line bg-black shadow-inner">
                  <img
                    src="/images/catalog/catalog-page-01.jpg"
                    alt="Official Tin Shade Noida Catalog Cover — 51 Pages"
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-deep via-transparent to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 rounded-xs bg-black/80 px-2.5 py-1 font-mono text-[0.65rem] font-bold text-white border border-white/20 backdrop-blur-xs">
                    51 PAGES · COMPLETE EDITION
                  </div>

                  {/* Bottom Preview Overlay */}
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xs bg-steel/90 p-2.5 border border-steel-line backdrop-blur-sm">
                    <div>
                      <span className="block font-display text-xs font-bold uppercase text-white">
                        TIN SHADE NOIDA
                      </span>
                      <span className="block font-mono text-[0.65rem] text-primary">
                        PDF Format · 4.5 MB
                      </span>
                    </div>
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="size-8 rounded-xs bg-primary flex items-center justify-center text-primary-foreground hover:scale-105 transition-transform"
                      aria-label="Open PDF Catalog"
                    >
                      <Eye className="size-4" />
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-center text-xs text-steel-muted font-mono">
                  Verified structural engineering catalog for architects, builders & plant owners.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
