import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Services } from "@/components/site/Services";
import { EstimatorWidget } from "@/components/site/EstimatorWidget";
import { FinalCta } from "@/components/site/FinalCta";
import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const title = "Services | Industrial Shed, Warehouse & Steel Fabrication — Tin Shade Noida";
const description =
  "Industrial shed and structural steel fabrication solutions from requirement to crane erection across Noida, Greater Noida, and Pan India.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const comparisonMatrix = [
    {
      category: "Industrial Factory Sheds",
      span: "30 – 100 FT Clear Span",
      steelGrade: "IS 2062 E250 / E350",
      roofing: "0.50mm Galvalume / PPGL",
      eavesHeight: "15 – 30 Feet",
      turnaround: "15 – 30 Days",
      isStandard: "IS 800:2007",
    },
    {
      category: "Logistics Warehouses & Godowns",
      span: "50 – 120 FT Clear Span",
      steelGrade: "Heavy Tubular / I-Beam",
      roofing: "Trapezoidal + Skylights",
      eavesHeight: "20 – 36 Feet",
      turnaround: "20 – 45 Days",
      isStandard: "IS 875 (Wind)",
    },
    {
      category: "Heavy MS Steel Frameworks",
      span: "Custom Engineered",
      steelGrade: "IS 2062 Prime Mild Steel",
      roofing: "Open Frame / Custom",
      eavesHeight: "Up to 40 Feet",
      turnaround: "Custom MT Rate",
      isStandard: "IS 816 Welding",
    },
    {
      category: "Pre-Engineered Buildings (PEB)",
      span: "40 – 120 FT Clear Span",
      steelGrade: "High-Tensile 345 MPa",
      roofing: "Insulated Sandwiched Panels",
      eavesHeight: "18 – 32 Feet",
      turnaround: "30 – 60 Days",
      isStandard: "MBMA / IS 800",
    },
    {
      category: "Heavy-Duty Mezzanine Floors",
      span: "Modular Grid",
      steelGrade: "Heavy ISMB Columns & Joists",
      roofing: "Decking Sheet + Concrete",
      eavesHeight: "10 – 18 Feet Deck",
      turnaround: "10 – 20 Days",
      isStandard: "500–1500 kg/m²",
    },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="STRUCTURAL ENGINEERING CAPABILITIES"
        title="Industrial Sheds, Warehouses & Heavy Steel Framing"
        description="Every structural component is cut, arc-welded, and dual-coat primed in our Noida Sector 10 yard with IS 2062 certified mild steel, then erected with hydraulic cranes across India."
      />

      {/* 1. Core Services Component */}
      <Services />

      {/* 2. Engineering Comparison Matrix */}
      <section className="bg-navy-obsidian py-16 sm:py-20 border-b border-white/10 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl border-b border-white/10 pb-5 mb-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sky-400 mb-2">
              <ShieldCheck className="size-4" />
              <span>TECHNICAL SPECIFICATION MATRIX</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Structural Capacity &amp; Code Standards
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans">
              Compare structural clear-span capabilities, steel grades, eaves heights, and IS code compliance across all shed types.
            </p>
          </div>

          {/* Matrix Table in JetBrains Mono */}
          <div className="spec-plate-navy overflow-hidden p-1 sm:p-2">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-slate-300">
                <thead className="border-b border-white/10 bg-[#0E1726] text-amber-400 font-bold uppercase text-[0.6875rem]">
                  <tr>
                    <th className="p-3.5 sm:p-4">Structure Category</th>
                    <th className="p-3.5 sm:p-4">Clear Span Reach</th>
                    <th className="p-3.5 sm:p-4">Steel Grade</th>
                    <th className="p-3.5 sm:p-4">Eaves Height</th>
                    <th className="p-3.5 sm:p-4">Avg Timeline</th>
                    <th className="p-3.5 sm:p-4">Standard Code</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-[#0B1320]">
                  {comparisonMatrix.map((row) => (
                    <tr key={row.category} className="hover:bg-white/5 transition-colors">
                      <td className="p-3.5 sm:p-4 font-display text-sm font-bold text-white">
                        {row.category}
                      </td>
                      <td className="p-3.5 sm:p-4 text-sky-300 tabular-nums">{row.span}</td>
                      <td className="p-3.5 sm:p-4 text-slate-200">{row.steelGrade}</td>
                      <td className="p-3.5 sm:p-4 tabular-nums">{row.eavesHeight}</td>
                      <td className="p-3.5 sm:p-4 text-amber-400 font-semibold tabular-nums">{row.turnaround}</td>
                      <td className="p-3.5 sm:p-4 text-slate-400">{row.isStandard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Steel Estimator on Services Page */}
      <section className="bg-navy-obsidian py-16 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimatorWidget />
        </div>
      </section>

      {/* 4. Direct Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
