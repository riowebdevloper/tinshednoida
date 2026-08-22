import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Services } from "@/components/site/Services";
import { EstimatorWidget } from "@/components/site/EstimatorWidget";
import { FinalCta } from "@/components/site/FinalCta";
import { ArrowRight, CheckCircle2, FileText, Ruler, ShieldCheck, Download } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

const title = "Industrial Shed & Structural Steel Services — Tin Shade Noida";
const description =
  "Comprehensive industrial shed engineering services: factory sheds, warehouses, MS frameworks, PEB structures, 0.50mm Galvalume roofing, and shed repair.";

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
  component: ServicesHubPage,
});

const serviceMatrix = [
  {
    name: "Industrial Factory Shed",
    span: "Up to 100 FT",
    steel: "IS 2062 Mild Steel",
    cladding: "0.50mm Galvalume",
    crane: "Up to 40T EOT",
    link: "/services/industrial-shed",
  },
  {
    name: "Logistics Warehouse / Godown",
    span: "Up to 120 FT",
    steel: "Modular CHS / RHS Trusses",
    cladding: "0.50mm PPGL / Galvalume",
    crane: "Optional EOT",
    link: "/services/warehouse-shed",
  },
  {
    name: "Mild Steel (MS) Structure",
    span: "Custom Engineered",
    steel: "ISMB / ISMC / Angles",
    cladding: "Custom / Open",
    crane: "Heavy Gantry",
    link: "/services/ms-structure",
  },
  {
    name: "Tin Roofing & Sheeting",
    span: "Modular Slope",
    steel: "Cold-Formed Z/C Purlins",
    cladding: "AZ150 Galvalume / PUF",
    crane: "N/A",
    link: "/services/tin-roofing",
  },
  {
    name: "Pre-Engineered Building (PEB)",
    span: "Up to 120 FT",
    steel: "Grade 345 MPa Plates",
    cladding: "High-Tensile Profiles",
    crane: "Integrated Brackets",
    link: "/services/peb-structure",
  },
  {
    name: "Industrial Shed Repair",
    span: "Retrofit & Extension",
    steel: "IS 2062 Gussets / Plates",
    cladding: "Replacement Galvalume",
    crane: "N/A",
    link: "/services/repair-renovation",
  },
];

function ServicesHubPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="IN-HOUSE FABRICATION CAPABILITIES"
        title="Industrial Shed &amp; Structural Steel Services"
        description="Heavy-duty clear-span factory sheds, column-free logistics warehouses, modular pipe trusses, and PEB portal frames engineered to IS 800:2007 structural standards."
      />

      {/* 1. Vertical Architectural Service List */}
      <Services />

      {/* 2. Technical Comparison Matrix Table */}
      <section className="bg-white py-24 sm:py-32 border-b border-[#0B0D0F]/10 text-[#0B0D0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl border-b border-[#0B0D0F]/15 pb-6 mb-12">
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block mb-2">
              TECHNICAL MATRIX
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold uppercase">
              Specification Comparison Matrix
            </h2>
          </div>

          <div className="overflow-x-auto border border-[#0B0D0F]/15">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#0B0D0F] text-white uppercase tracking-wider text-[0.6875rem]">
                <tr>
                  <th className="p-4">SERVICE DISCIPLINE</th>
                  <th className="p-4">CLEAR SPAN</th>
                  <th className="p-4">PRIMARY STEEL</th>
                  <th className="p-4">ROOF CLADDING</th>
                  <th className="p-4">CRANE SUPPORT</th>
                  <th className="p-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0B0D0F]/10 bg-[#F3F1EC]">
                {serviceMatrix.map((item) => (
                  <tr key={item.name} className="hover:bg-white transition-colors">
                    <td className="p-4 font-bold text-[#0B0D0F]">
                      <Link to={item.link} className="hover:text-[#B08A4A] transition-colors">
                        {item.name}
                      </Link>
                    </td>
                    <td className="p-4 text-[#525860] tabular-nums">{item.span}</td>
                    <td className="p-4 text-[#525860]">{item.steel}</td>
                    <td className="p-4 text-[#525860]">{item.cladding}</td>
                    <td className="p-4 text-[#525860]">{item.crane}</td>
                    <td className="p-4 text-right">
                      <Link
                        to={item.link}
                        className="font-bold text-[#0B0D0F] hover:text-[#B08A4A] transition-colors inline-flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ArrowRight className="size-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 3. Estimator Calculator */}
      <section className="bg-warm-paper py-24 sm:py-32 border-b border-[#0B0D0F]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimatorWidget />
        </div>
      </section>

      {/* 4. Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
