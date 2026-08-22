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
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl border-b border-slate-200 pb-5 mb-8">
            <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
              TECHNICAL SPECIFICATION MATRIX
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Structural Capacity &amp; Code Standards
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-sans">
              Compare structural clear-span capabilities, steel grades, eaves heights, and IS code compliance across all shed types.
            </p>
          </div>

          {/* Matrix Table in JetBrains Mono */}
          <div className="corp-card overflow-hidden p-1 sm:p-2 bg-white border border-slate-300 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-slate-700">
                <thead className="border-b border-slate-200 bg-[#0E2A47] text-white font-bold uppercase text-[0.6875rem]">
                  <tr>
                    <th className="p-3.5 sm:p-4">Structure Category</th>
                    <th className="p-3.5 sm:p-4">Clear Span Reach</th>
                    <th className="p-3.5 sm:p-4">Steel Grade</th>
                    <th className="p-3.5 sm:p-4">Eaves Height</th>
                    <th className="p-3.5 sm:p-4">Avg Timeline</th>
                    <th className="p-3.5 sm:p-4">Standard Code</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {comparisonMatrix.map((row) => (
                    <tr key={row.category} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-display text-sm font-bold text-slate-900">
                        {row.category}
                      </td>
                      <td className="p-3.5 sm:p-4 text-[#0E2A47] font-semibold tabular-nums">{row.span}</td>
                      <td className="p-3.5 sm:p-4 text-slate-700">{row.steelGrade}</td>
                      <td className="p-3.5 sm:p-4 tabular-nums">{row.eavesHeight}</td>
                      <td className="p-3.5 sm:p-4 text-amber-700 font-semibold tabular-nums">{row.turnaround}</td>
                      <td className="p-3.5 sm:p-4 text-slate-500">{row.isStandard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive Steel Estimator on Services Page */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimatorWidget />
        </div>
      </section>

      {/* 4. Direct Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
