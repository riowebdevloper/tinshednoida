import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceDetailView, type ServiceDetailData } from "@/components/site/ServiceDetailView";
import { FinalCta } from "@/components/site/FinalCta";
import svcWarehouse from "@/assets/gen/svc-warehouse.jpg";

const title = "Warehouse Shed & Logistics Godown Construction — Tin Shade Noida";
const description =
  "Large clear-span warehouse and storage shed construction up to 120ft column-free span for logistics hubs and fulfillment centers across India.";

export const Route = createFileRoute("/services/warehouse-shed")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/warehouse-shed" }],
  }),
  component: WarehouseShedPage,
});

const data: ServiceDetailData = {
  slug: "warehouse-shed",
  name: "Warehouse Shed & Logistics Godown Construction",
  eyebrow: "COLUMN-FREE LOGISTICS INFRASTRUCTURE",
  tagline:
    "Large clear-span warehouse roofing and enclosures engineered to maximize usable floor area for high-density racking, forklift movement, and logistics storage.",
  overview:
    "Tin Shade Noida constructs high-cube warehouse and godown sheds designed for optimal storage logistics. With clear spans up to 120 feet without internal obstructing pillars, our structures allow maximum pallet racking density, wide driveway lanes, and fast turnaround.",
  image: svcWarehouse,
  spanReach: "Up to 120 FT Clear Span",
  steelGrade: "IS 2062 Prime Mild Steel",
  eavesHeight: "20 – 36 Feet",
  standardCode: "IS 875 (Wind & Dead Load)",
  applications: [
    "E-Commerce Fulfillment Centers",
    "Third-Party Logistics (3PL) Parks",
    "Cold Storage & FMCG Godowns",
    "Agricultural Mandi Storage Sheds",
  ],
  constructionProcess: [
    {
      step: "01",
      title: "Warehouse Racking Layout & Span Sizing",
      desc: "Coordinating internal column grid spacing with high-density racking and forklift turning radius.",
    },
    {
      step: "02",
      title: "Heavy Truss Fabrication in Noida Yard",
      desc: "Welding Warren and Pratt modular tubular pipe trusses and heavy eaves columns to IS 816 welding standards.",
    },
    {
      step: "03",
      title: "Fast-Track Crane Assembly & Daylighting",
      desc: "Hydraulic crane lifting, installation of continuous roof gutters, downspouts, and translucent polycarbonate lighting sheets.",
    },
  ],
  benefits: [
    "100% column-free interior floor area for smooth material and vehicle handling",
    "High eaves clearance (up to 36 ft) for multi-tier heavy pallet storage racking",
    "Integrated heavy-gauge galvanized rainwater gutters and downspout drainage systems",
    "Natural lighting polycarbonate panels reducing daytime electricity costs",
  ],
  materials: [
    {
      title: "Truss Chords & Columns",
      desc: "Heavy-gauge circular hollow sections (CHS) and rectangular hollow sections (RHS) for maximum torsional rigidity.",
    },
    {
      title: "Purlins & Girts",
      desc: "High-tensile cold-formed galvanized Z and C purlins preventing sagging over long spans.",
    },
    {
      title: "Roofing Sheets",
      desc: "0.50mm Galvalume trapezoidal profile sheets with anti-capillary grooves and UV-resistant fasteners.",
    },
  ],
  relatedProjectIds: ["selected-page-02", "selected-page-28", "warehouse-greater-noida"],
  relatedVideoId: "f2xmWKtkxME",
  catalogPageRange: "Pages 16 – 28",
  faqs: [
    {
      q: "What is the maximum clear span available without intermediate columns?",
      a: "We regularly construct modular structural trusses with up to 120 feet clear span without any internal columns.",
    },
    {
      q: "How do you protect warehouse goods from heavy monsoon leaks?",
      a: "All roof sheets feature overlapping anti-capillary siphons and are fastened with class 3 self-drilling screws with EPDM bonded washers. We also install heavy-gauge galvanized valley gutters.",
    },
    {
      q: "Can you incorporate insulated PUF panels for temperature-sensitive inventory?",
      a: "Yes. We offer 40mm to 100mm PUF/PIR insulated sandwich panels for cold rooms and temperature-controlled warehouses.",
    },
  ],
};

function WarehouseShedPage() {
  return (
    <SiteLayout>
      <ServiceDetailView data={data} />
      <FinalCta />
    </SiteLayout>
  );
}
