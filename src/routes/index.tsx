import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { EstimatorWidget } from "@/components/site/EstimatorWidget";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { CatalogViewer } from "@/components/site/CatalogViewer";
import { Videos } from "@/components/site/Videos";
import { Leadership } from "@/components/site/Leadership";
import { FinalCta } from "@/components/site/FinalCta";
import { company, testimonials } from "@/lib/site-data";

const title = "Tin Shade Noida | Industrial Shed & Structural Steel Fabrication";
const description =
  "Industrial tin sheds, warehouse roofing, and heavy MS steel structure fabrication across Noida, Greater Noida, and Pan India. In-house crew, crane erection, and free site visit. Call +91-8527977714.";

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
  sameAs: [company.instagram, company.youtube],
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
      {/* 1. CINEMATIC HERO */}
      <Hero />

      {/* 2. ENGINEERING SPECIFICATION LEDGER */}
      <TrustStrip />

      {/* 3. CORE STRUCTURAL CAPABILITIES */}
      <Services />

      {/* 4. INTERACTIVE STEEL TONNAGE & ESTIMATOR CALCULATOR */}
      <section id="estimator" className="bg-[#F8FAFC] py-16 lg:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimatorWidget />
        </div>
      </section>

      {/* 5. PHOTOGRAPHIC PROJECT LEDGER */}
      <Projects />

      {/* 6. 51-PAGE CATALOG & 5-STAGE EXECUTION TIMELINE */}
      <CatalogViewer />

      {/* 7. ACTIVE ON-SITE VIDEO DOCUMENTATION */}
      <Videos />

      {/* 8. IN-HOUSE MASTER LEADERSHIP */}
      <Leadership />

      {/* 9. DIRECT B2B ACTION DISPATCH */}
      <FinalCta />
    </SiteLayout>
  );
}
