import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { PdfCatalogBrowser } from "@/components/site/PdfCatalogBrowser";
import { CatalogViewer } from "@/components/site/CatalogViewer";
import { FinalCta } from "@/components/site/FinalCta";
import { Download, ShieldCheck, ExternalLink } from "lucide-react";
import { company } from "@/lib/site-data";

const title = "51-Page Structural Work Catalog (PDF) - Tin Shade Noida";
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
      desc: "Mill Test Certificate (MTC) criteria for yield stress (250 - 350 MPa), tensile strength, elongation percentages, and zinc phosphate primer thickness.",
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
      <section className="bg-[#0B0D0F] py-24 sm:py-32 border-b border-white/10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl border-b border-white/10 pb-6 mb-12">
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block mb-2">
              SUBMITTAL CONTENTS OVERVIEW
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold uppercase text-white">
              What Is Inside the 51-Page Work Catalog
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {catalogSections.map((s) => (
              <div key={s.sec} className="p-8 bg-[#14171A] border border-white/10 space-y-2 arch-card-dark">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-2 font-mono text-xs">
                  <span className="font-bold text-[#B08A4A]">
                    {s.sec}
                  </span>
                  <ShieldCheck className="size-4 text-[#B08A4A]" />
                </div>
                <h3 className="font-editorial-title text-lg font-bold uppercase text-white">
                  {s.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#8C9398] font-sans">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Download Callout */}
          <div className="mt-12 p-8 bg-[#14171A] text-white border border-white/15 flex flex-wrap items-center justify-between gap-6 shadow-2xl arch-card-dark">
            <div className="space-y-1">
              <h4 className="font-editorial-title text-xl font-bold uppercase text-white">
                Download Official PDF Submittal
              </h4>
              <p className="text-xs font-mono text-[#8C9398] tabular-nums">
                File Size: 4.5 MB · Instant Download · PDF Document
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={pdfUrl}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="btn-arch-primary"
              >
                <Download className="size-4" />
                <span>Download PDF (4.5 MB)</span>
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-arch-secondary"
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
