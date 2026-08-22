import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceDetailView, type ServiceDetailData } from "@/components/site/ServiceDetailView";
import { FinalCta } from "@/components/site/FinalCta";
import svcMs from "@/assets/gen/svc-ms.jpg";

const title = "Mild Steel (MS) Structure Fabrication & Steel Framing — Tin Shade Noida";
const description =
  "Custom mild steel framing, tubular trusses, crane gantry beams, and heavy industrial columns fabricated to IS 2062 standards.";

export const Route = createFileRoute("/services/ms-structure")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/ms-structure" }],
  }),
  component: MsStructurePage,
});

const data: ServiceDetailData = {
  slug: "ms-structure",
  name: "Mild Steel (MS) Structural Framework Fabrication",
  eyebrow: "PRECISION HEAVY STEEL FRAMING",
  tagline:
    "Precision-welded mild steel columns, heavy tubular trusses, rafters, purlins, and custom structural frameworks fabricated directly in our Noida yard and erected on site.",
  overview:
    "From heavy crane gantry supports to custom plant frameworks, Tin Shade Noida fabricates robust structural steel frameworks using certified IS 2062 mild steel. Every joint is arc-welded by certified welders and inspected for structural plumb-line accuracy.",
  image: svcMs,
  spanReach: "Custom Engineered (Up to 120ft)",
  steelGrade: "IS 2062 E250 / E350 Mild Steel",
  eavesHeight: "Custom (Up to 40 Feet)",
  standardCode: "IS 816 Metal Arc Welding Code",
  applications: [
    "Crane Gantry Girder Columns",
    "Heavy Modular Pipe Trusses",
    "Industrial Plant Framing",
    "Commercial Building Canopies",
  ],
  constructionProcess: [
    {
      step: "01",
      title: "Structural Cleat & Base-Plate Detailing",
      desc: "Plasma cutting of heavy base plates, gusset stiffeners, and rafter connection brackets to CAD specifications.",
    },
    {
      step: "02",
      title: "Continuous Arc Welding to IS 816",
      desc: "Full penetration web and flange welding with high-strength filler wire and visual weld inspection.",
    },
    {
      step: "03",
      title: "On-Site Alignment & Torque Bolting",
      desc: "Hydraulic crane lifting, plumb alignment verification, and 8.8 grade high-tensile bolt tightening.",
    },
  ],
  benefits: [
    "High load-bearing capacity designed for heavy industrial machinery and equipment",
    "Custom fabrication matching complex architectural and site elevation requirements",
    "Dual-coat red-oxide zinc phosphate primer applied before transit",
    "Direct yard pricing with zero subcontracting markups",
  ],
  materials: [
    {
      title: "Structural Sections",
      desc: "ISMB Beams, ISMC Channels, Equal Angles, and heavy Circular Hollow Sections (CHS).",
    },
    {
      title: "Fasteners & Connections",
      desc: "Grade 8.8 and 10.9 high-tensile structural bolts, anchor bolts, and gusset plates.",
    },
    {
      title: "Anti-Corrosion Priming",
      desc: "Zinc phosphate red oxide primer conforming to IS 2074 standards.",
    },
  ],
  relatedProjectIds: ["selected-page-03", "selected-page-43", "ms-fabrication"],
  relatedVideoId: "J_Y8IzAllCk",
  catalogPageRange: "Pages 29 – 38",
  faqs: [
    {
      q: "What welding standards are followed during fabrication?",
      a: "All welding follows IS 816 (Code of Practice for use of Metal Arc Welding for General Construction in Mild Steel).",
    },
    {
      q: "Do you supply Mill Test Certificates (MTC) for the steel?",
      a: "Yes. Every batch of IS 2062 structural steel procured for your project comes with an authentic mill test certificate.",
    },
    {
      q: "Can you fabricate on-site if transport of oversized trusses is restricted?",
      a: "Yes. For spans exceeding road transport limits, our master fabrication crew sets up mobile welding and cutting rigs directly on your site.",
    },
  ],
};

function MsStructurePage() {
  return (
    <SiteLayout>
      <ServiceDetailView data={data} />
      <FinalCta />
    </SiteLayout>
  );
}
