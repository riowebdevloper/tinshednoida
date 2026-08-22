import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceDetailView, type ServiceDetailData } from "@/components/site/ServiceDetailView";
import { FinalCta } from "@/components/site/FinalCta";
import svcRepair from "@/assets/gen/svc-repair.jpg";

const title = "Industrial Shed Repair, Renovation & Strengthening — Tin Shade Noida";
const description =
  "Industrial shed leak repair, rusted sheet replacement, structural steel strengthening, and warehouse extensions across Noida & Pan India.";

export const Route = createFileRoute("/services/repair-renovation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/repair-renovation" }],
  }),
  component: RepairRenovationPage,
});

const data: ServiceDetailData = {
  slug: "repair-renovation",
  name: "Industrial Shed Repair & Structural Renovation",
  eyebrow: "RENOVATION & STRENGTHENING",
  tagline:
    "Expert structural steel repair, roof leak proofing, rusted sheet replacement, sagging truss reinforcement, and factory shed expansions.",
  overview:
    "Aging factory sheds and warehouses suffer from corrosion, fastener degradation, and storm damage. Tin Shade Noida's repair crew provides structural integrity audits, truss gusset reinforcement, leak-proof re-sheeting, and heavy gutter replacements with zero plant downtime.",
  image: svcRepair,
  spanReach: "Custom Structural Retrofit",
  steelGrade: "IS 2062 Prime Mild Steel",
  eavesHeight: "Existing Structure Retrofit",
  standardCode: "IS 800:2007 (Repair & Retrofit)",
  applications: [
    "Monsoon Leakage Repair & Re-Sealing",
    "Rusted Roof & Cladding Replacement",
    "Sagging Truss & Column Reinforcement",
    "Industrial Shed Expansions & Extensions",
  ],
  constructionProcess: [
    {
      step: "01",
      title: "Structural Audit & Leak Inspection",
      desc: "Physical inspection of beam deflections, rusted fastener holes, gutter overflow points, and weld fatigue.",
    },
    {
      step: "02",
      title: "Gusset Reinforcement & Anti-Rust Coating",
      desc: "Welding additional web stiffeners, replacing corroded bolts with high-tensile fasteners, and applying zinc primer.",
    },
    {
      step: "03",
      title: "Re-Sheeting & Waterproof Handover",
      desc: "Installing new 0.50mm Galvalume sheets, EPDM fasteners, oversized heavy gutters, and leak testing.",
    },
  ],
  benefits: [
    "Extends existing industrial shed life by 10–15+ years at a fraction of new build cost",
    "Executed in phased stages without interrupting internal factory manufacturing",
    "Replacement of old leaking screws with modern oversized EPDM washers",
    "Complete structural guarantee on all reinforced steelwork and re-sheeted roofs",
  ],
  materials: [
    {
      title: "Replacement Galvalume Sheets",
      desc: "Prime color-coated 0.50mm Galvalume sheets cut to exact lengths matching existing purlin spacings.",
    },
    {
      title: "Reinforcement Steel",
      desc: "IS 2062 mild steel angles, plates, and channels for gusset plate strengthening.",
    },
    {
      title: "Heavy-Gauge Gutters",
      desc: "Custom-bent 1.2mm – 1.6mm galvanized drainage gutters with high discharge capacity.",
    },
  ],
  relatedProjectIds: ["selected-page-47", "selected-page-50"],
  relatedVideoId: "07Gt4hpEwtk",
  catalogPageRange: "Pages 48 – 51",
  faqs: [
    {
      q: "Can you fix roof leaks without replacing the entire roof?",
      a: "Yes. If the underlying structural frame is sound, we can replace damaged sheets, install new flashing, or re-screw old fastener lines with oversized EPDM washers.",
    },
    {
      q: "How do you ensure worker safety during live factory roof repair?",
      a: "Our crew operates with safety harnesses, lifelines, and safety catch nets suspended underneath active repair zones.",
    },
    {
      q: "Do you offer emergency monsoon leak repair in Noida & NCR?",
      a: "Yes. Our Noida yard crew can deploy within 24 hours to inspect and execute urgent leak rectification.",
    },
  ],
};

function RepairRenovationPage() {
  return (
    <SiteLayout>
      <ServiceDetailView data={data} />
      <FinalCta />
    </SiteLayout>
  );
}
