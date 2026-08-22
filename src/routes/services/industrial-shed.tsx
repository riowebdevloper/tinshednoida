import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceDetailView, type ServiceDetailData } from "@/components/site/ServiceDetailView";
import { FinalCta } from "@/components/site/FinalCta";
import svcIndustrial from "@/assets/gen/svc-industrial.jpg";

const title = "Industrial Factory Shed Fabrication & Crane Erection  -  Tin Shade Noida";
const description =
  "Heavy-duty industrial factory sheds fabricated with IS 2062 prime steel for manufacturing units, machine workshops, and industrial plants across India.";

export const Route = createFileRoute("/services/industrial-shed")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/industrial-shed" }],
  }),
  component: IndustrialShedPage,
});

const data: ServiceDetailData = {
  slug: "industrial-shed",
  name: "Industrial Factory Shed Fabrication",
  eyebrow: "HEAVY-DUTY INDUSTRIAL FABRICATION",
  tagline:
    "Heavy-duty clear-span factory sheds engineered for manufacturing plants, machine workshops, vibration-resistant machinery bays, and overhead crane gantries.",
  overview:
    "Tin Shade Noida designs and erects heavy-duty industrial factory sheds tailored to manufacturing workflows. Built with certified IS 2062 prime mild steel sections, our structures feature high load capacity, column-free spans up to 100ft, natural ridge ventilation, and leak-proof trapezoidal Galvalume cladding.",
  image: svcIndustrial,
  spanReach: "Up to 100 FT Clear Span",
  steelGrade: "IS 2062 Grade Mild Steel",
  eavesHeight: "15 - 30 Feet",
  standardCode: "IS 800:2007 General Construction",
  applications: [
    "Heavy Manufacturing Plants",
    "Precision Machine Workshops",
    "Automotive Assembly Bays",
    "Metal Fabrication Units",
  ],
  constructionProcess: [
    {
      step: "01",
      title: "Laser Level & Column Anchor Survey",
      desc: "Checking civil foundation pedestal levels, anchor bolt placements, and crane clearance routes on site.",
    },
    {
      step: "02",
      title: "Noida Yard Shop Fabrication & Primer",
      desc: "Precision oxy-fuel cutting, continuous arc welding to IS 816, and dual-coat red oxide zinc phosphate primer.",
    },
    {
      step: "03",
      title: "Hydraulic Crane Erection & Cladding",
      desc: "Turnkey hoisting with 20T/40T cranes, high-tensile bolted joint tightening, Galvalume sheeting, and ridge ventilation.",
    },
  ],
  benefits: [
    "High structural stability capable of supporting 5T to 20T overhead EOT cranes",
    "Ridge turbo-ventilators and translucent polycarbonate daylighting strips",
    "Weatherproof 0.50mm Galvalume & PPGL trapezoidal profile roof sheets",
    "Turnkey execution by in-house Noida yard crew without subcontractors",
  ],
  materials: [
    {
      title: "Structural Frame Steel",
      desc: "IS 2062 certified mild steel I-beams, heavy tubular pipes, channels, and equal angles.",
    },
    {
      title: "Roof & Side Cladding",
      desc: "0.50mm - 0.60mm high-tensile color-coated Galvalume sheets with EPDM leak-proof fasteners.",
    },
    {
      title: "Protective Primer",
      desc: "Dual-coat red-oxide zinc phosphate primer (IS 2074) for superior rust and weather resistance.",
    },
  ],
  relatedProjectIds: ["selected-page-01", "selected-page-14", "factory-shed-sector-63"],
  relatedVideoId: "mkRndWdXPdI",
  catalogPageRange: "Pages 01 - 15",
  faqs: [
    {
      q: "Can the factory shed structure support an overhead EOT crane?",
      a: "Yes. We design and fabricate custom crane gantry girder beams, brackets, and heavy ISMB column profiles engineered specifically for your crane's capacity (up to 40T).",
    },
    {
      q: "What is the typical completion timeline for a 10,000 sq.ft industrial shed?",
      a: "For a 10,000 sq.ft factory shed, shop fabrication and turnkey crane erection typically take between 20 and 30 working days.",
    },
    {
      q: "Do you provide on-site civil anchor foundation guidance?",
      a: "Yes. Our project engineer provides CAD foundation layout drawings detailing anchor bolt spacing, base plate gusset stiffeners, and pedestal depths before fabrication begins.",
    },
  ],
};

function IndustrialShedPage() {
  return (
    <SiteLayout>
      <ServiceDetailView data={data} />
      <FinalCta />
    </SiteLayout>
  );
}
