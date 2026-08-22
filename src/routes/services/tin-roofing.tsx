import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ServiceDetailView, type ServiceDetailData } from "@/components/site/ServiceDetailView";
import { FinalCta } from "@/components/site/FinalCta";
import svcRoofing from "@/assets/gen/svc-roofing.jpg";

const title = "Tin Roofing & Color-Coated Galvalume Sheeting  -  Tin Shade Noida";
const description =
  "Industrial tin roofing, color-coated Galvalume sheets, PUF thermal insulation panels, and commercial terrace sheds across India.";

export const Route = createFileRoute("/services/tin-roofing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services/tin-roofing" }],
  }),
  component: TinRoofingPage,
});

const data: ServiceDetailData = {
  slug: "tin-roofing",
  name: "Tin Roofing & Color-Coated Galvalume Sheeting",
  eyebrow: "WEATHERPROOF ROOFING & INSULATION",
  tagline:
    "Corrugated and trapezoidal color-coated Galvalume / GI sheets, thermal PUF insulated sandwich panels, and waterproof roof replacements for factories and warehouses.",
  overview:
    "Tin Shade Noida delivers high-performance industrial roofing installations. We use 0.50mm to 0.60mm high-tensile AZ150 Galvalume and PPGL color-coated sheets that resist corrosion, reflect solar radiation, and maintain complete waterproofing through heavy monsoons.",
  image: svcRoofing,
  spanReach: "Modular Custom Coverage",
  steelGrade: "AZ150 Galvalume / PPGL & GI",
  eavesHeight: "Custom Slope Pitch",
  standardCode: "IS 277 / IS 14246 Sheeting Code",
  applications: [
    "Factory Roof Overhauls & Re-Sheeting",
    "Commercial Terrace Utility Sheds",
    "Insulated Cold Storage Roofing",
    "Curved Parking Lot Canopies",
  ],
  constructionProcess: [
    {
      step: "01",
      title: "Slope & Wind Uplift Calculation",
      desc: "Determining proper roof pitch (minimum 1:10) and purlin spacing to ensure rapid rainwater run-off and wind uplift safety.",
    },
    {
      step: "02",
      title: "Purlin Alignment & Anti-Corrosion Prep",
      desc: "Fastening cold-rolled galvanized purlins and applying protective coats to all structural steel contact points.",
    },
    {
      step: "03",
      title: "Sheet Fixing with EPDM Self-Drilling Screws",
      desc: "Precision overlap alignment, self-drilling fastener torque control, and fitting ridge caps, gutters, and flashing.",
    },
  ],
  benefits: [
    "100% leak-proof fastening with UV-resistant EPDM bonded washer screws",
    "High solar reflectivity reducing indoor temperature buildup during summers",
    "Available in wide selection of colors (Off-White, Sky Blue, Mist Green, Dark Blue)",
    "Fast installation with minimal disruption to ongoing factory operations",
  ],
  materials: [
    {
      title: "Galvalume Roofing Sheets",
      desc: "55% Al-Zn alloy coated steel sheets (0.50mm - 0.60mm) providing 4x lifespan over standard galvanized iron.",
    },
    {
      title: "PUF Sandwich Panels",
      desc: "Rigid polyurethane foam core (40±2 kg/m³ density) with pre-painted steel facings for thermal and acoustic insulation.",
    },
    {
      title: "EPDM Fasteners & Flashing",
      desc: "Hex-head corrosion-resistant self-drilling screws with weather-sealing EPDM washers.",
    },
  ],
  relatedProjectIds: ["selected-page-07", "selected-page-22", "rooftop-tin-shade"],
  relatedVideoId: "BbsedKkhB8U",
  catalogPageRange: "Pages 39 - 45",
  faqs: [
    {
      q: "What sheet thickness do you recommend for an industrial factory?",
      a: "We recommend a minimum of 0.50mm high-tensile Galvalume sheet (AZ150 coating) for superior durability against wind and corrosion.",
    },
    {
      q: "Can you replace an old leaking roof without stopping our plant production?",
      a: "Yes. We execute section-by-section phased roof replacements with temporary safety netting to keep your factory operating safely.",
    },
    {
      q: "How do you handle heavy rainwater discharge?",
      a: "We fabricate and install customized heavy-gauge galvanized rainwater gutters and PVC/GI downspouts sized to maximum regional rainfall intensity.",
    },
  ],
};

function TinRoofingPage() {
  return (
    <SiteLayout>
      <ServiceDetailView data={data} />
      <FinalCta />
    </SiteLayout>
  );
}
