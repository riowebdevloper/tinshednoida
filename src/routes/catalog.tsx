import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { PdfCatalogBrowser } from "@/components/site/PdfCatalogBrowser";
import { CatalogViewer } from "@/components/site/CatalogViewer";
import { FinalCta } from "@/components/site/FinalCta";
import { Download, FileText, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";
import { company } from "@/lib/site-data";

const title = "51-Page Structural Work Catalog (PDF) — Tin Shade Noida";
const description =
  "Download our official 51-page structural engineering submittal catalog featuring truss schedules, IS 2062 material certificates, and photographic case studies.";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/catalog" }],
  }),
  component: CatalogPage,
});

function CatalogPage() {
  const pdfUrl = company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf";

  const catalogSections = [
    {
      sec: "SECTION A",
      title: "Truss Geometry & Clear Span Schedules",
      desc: "Detailed CAD chord elevation drawings for Warren, Pratt, and Howe modular tubular and angle-iron trusses from 30ft to 120ft spans.",
    },
    {
      sec: "SECTION B",
      title: "IS 2062 Material Quality Standards",
      desc: "Mill Test Certificate (MTC) criteria for yield stress (250–350 MPa), tensile strength, elongation percentages, and zinc phosphate primer thickness.",
    },
    {
      sec: "SECTION C",
      title: "Column Base-Plate & Foundation Anchoring",
      desc: "Civil anchor bolt spacing, base-plate gusset stiffeners, and crane gantry beam load calculations to IS 800:2007 structural steel codes.",
    },
    {
      sec: "SECTION D",
      title: "Photographic Archive of 500+ Sheds",
      desc: "High-resolution on-site photographs of completed manufacturing factories, cold storages, logistics parks, and multi-tier mezzanine floors.",
    },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="OFFICIAL ENGINEERING SUBMITTAL BINDER"
        title="51-Page Structural Work Catalog"
        description="Comprehensive technical submittal binder prepared for industrial plant directors, structural consultants, civil contractors, and procurement heads."
      />

      {/* 1. Interactive 51-Page Catalog Browser with Page Thumbnails, Zoom & Jump */}
      <PdfCatalogBrowser />

      {/* 2. 5-Stage Blueprint Sequence */}
      <CatalogViewer />

      {/* 3. Catalog Table of Contents Overview */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl border-b border-slate-200 pb-5 mb-8">
            <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
              SUBMITTAL CONTENTS OVERVIEW
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What Is Inside the 51-Page Work Catalog
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {catalogSections.map((s) => (
              <div key={s.sec} className="corp-card p-6 bg-[#F8FAFC]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3">
                  <span className="font-mono text-xs font-bold text-amber-700">
                    {s.sec}
                  </span>
                  <ShieldCheck className="size-4 text-[#0E2A47]" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Download Callout */}
          <div className="mt-10 p-6 rounded-xs border border-slate-200 bg-[#F1F5F9] flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="font-display text-lg font-bold text-slate-900">
                Download Official PDF Submittal
              </h4>
              <p className="text-xs font-mono text-slate-500 mt-0.5 tabular-nums">
                File Size: 4.5 MB · Instant Download · PDF Document
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={pdfUrl}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="btn-corp-primary"
              >
                <Download className="size-4" />
                <span>Download PDF (4.5 MB)</span>
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-corp-secondary"
              >
                <ExternalLink className="size-4" />
                <span>View Online</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Direct Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
