import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceDetailView, type ServiceDetailData } from "@/components/site/ServiceDetailView";
import { FinalCta } from "@/components/site/FinalCta";
import svcPeb from "@/assets/gen/svc-peb.jpg";

const title = "Pre-Engineered Building (PEB) Structure Fabrication  -  Tin Shade Noida";
const description =
  "High-tensile pre-engineered steel buildings (PEB) with tapered built-up frames, fast-track erection, and wide clear spans across India.";

export const Route = createFileRoute("/services/peb-structure")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/peb-structure" }],
  }),
  component: PebStructurePage,
});

const data: ServiceDetailData = {
  slug: "peb-structure",
  name: "Pre-Engineered Building (PEB) Structures",
  eyebrow: "FAST-TRACK MODULAR STEEL BUILDINGS",
  tagline:
    "Factory-engineered portal frame PEB structures featuring tapered built-up I-sections, high-tensile bolted connections, and rapid on-site crane assembly.",
  overview:
    "Pre-Engineered Buildings offer the optimal balance of material efficiency and construction speed. Tin Shade Noida manufactures PEB primary and secondary steel components with precision CNC detailing, enabling up to 40% faster on-site completion compared to conventional civil buildings.",
  image: svcPeb,
  spanReach: "Up to 120 FT Clear Span",
  steelGrade: "High-Tensile 345 MPa Plates",
  eavesHeight: "18 - 32 Feet",
  standardCode: "MBMA & IS 800:2007 (LSM)",
  applications: [
    "Large Scale Manufacturing Facilities",
    "Modern Logistics & Courier Distribution Hubs",
    "Heavy Equipment Warehouses",
    "Commercial Multi-Bay Industrial Sheds",
  ],
  constructionProcess: [
    {
      step: "01",
      title: "PEB Structural Design & Detailing",
      desc: "Optimizing tapered column and rafter web profiles to exact bending moment envelopes to reduce dead weight.",
    },
    {
      step: "02",
      title: "Shop Fabrication of Built-Up Sections",
      desc: "Submerged arc welding (SAW) of built-up I-sections, flange plate drilling, and zinc chromate primer coating.",
    },
    {
      step: "03",
      title: "On-Site Bolted Crane Assembly",
      desc: "High-tensile Grade 8.8 bolted portal frame assembly, Z-purlin installation, sag rods, and insulated cladding.",
    },
  ],
  benefits: [
    "Up to 40% faster completion compared to conventional RCC civil construction",
    "Lighter foundation requirements due to optimized tapered web steel profiles",
    "Easily expandable modular framing for future factory floor additions",
    "Complete turnkey project management from anchor design to final handover",
  ],
  materials: [
    {
      title: "Primary Built-Up Frames",
      desc: "High-strength steel plates (Grade 345 / 350 MPa) fabricated with submerged arc welding.",
    },
    {
      title: "Secondary Framing",
      desc: "Cold-formed galvanized Z & C purlins (minimum 275 gsm zinc coating) for roof and wall girts.",
    },
    {
      title: "High-Tensile Bolting",
      desc: "Grade 8.8 / 10.9 high-strength structural bolts with hardened washers.",
    },
  ],
  relatedProjectIds: ["selected-page-19", "peb-frame-project"],
  relatedVideoId: "mkRndWdXPdI",
  catalogPageRange: "Pages 46 - 51",
  faqs: [
    {
      q: "What makes PEB faster than conventional steel structures?",
      a: "PEB components are pre-cut, pre-drilled, and pre-welded in our workshop. On site, they are simply bolted together using mobile cranes with zero on-site cutting.",
    },
    {
      q: "Can PEB structures accommodate heavy cranes?",
      a: "Yes. PEB columns can be engineered with integrated crane brackets and heavy runway gantry beams for overhead cranes.",
    },
    {
      q: "Is it possible to expand a PEB shed in the future?",
      a: "Yes. PEB end-wall frames are designed for easy modular extension by adding additional bays without disrupting existing operations.",
    },
  ],
};

function PebStructurePage() {
  return (
    <SiteLayout>
      <ServiceDetailView data={data} />
      <FinalCta />
    </SiteLayout>
  );
}
