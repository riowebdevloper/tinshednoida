import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { NeedFinder } from "@/components/site/NeedFinder";
import { TrustBlock } from "@/components/site/TrustBlock";
import { Leadership } from "@/components/site/Leadership";
import { Services } from "@/components/site/Services";
import { Testimonials, Videos } from "@/components/site/Videos";
import { CatalogViewer } from "@/components/site/CatalogViewer";
import { company, testimonials } from "@/lib/site-data";

const title = "Tin Shade Noida | Tin Shed & MS Structure Manufacturer";
const description =
  "Industrial tin sheds, warehouse roofing and MS structure fabrication across Noida, Greater Noida and Pan India. Free site visit and quotation. Call +91-8527977714.";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  description,
  telephone: company.phone,
  email: company.email,
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "D179 Sector 10",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: ["Pan India", "Noida", "Greater Noida", "Delhi NCR"],
  foundingDate: company.since,
  sameAs: [company.instagram],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: String(testimonials.length),
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusiness) }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <NeedFinder />
      <TrustBlock />
      <Leadership />
      <Services />
      <CatalogViewer />
      <Videos />
      <Testimonials />
    </SiteLayout>
  );
}
