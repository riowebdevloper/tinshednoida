import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Leadership } from "@/components/site/Leadership";
import { FinalCta } from "@/components/site/FinalCta";
import { company, leadership } from "@/lib/site-data";
import { Wrench, Compass, ShieldCheck, Factory, Award, ArrowRight, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

const title = "The People Behind Tin Shade | Founders MD Khurshid & Abdul";
const description =
  "Built by experience, carried forward by family. Meet founder MD Khurshid and project engineer Abdul leading Tin Shade Noida.";

export const Route = createFileRoute("/about/founders")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about/founders" }],
  }),
  component: FoundersPage,
});

function FoundersPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="THE PEOPLE BEHIND TIN SHADE"
        title="Built by Experience. Carried Forward by Family."
        description="A father-son partnership rooted in hands-on metal craftsmanship, rigorous IS engineering codes, and long-term client relationships across India."
      />

      {/* 1. Main Leadership Editorial Section */}
      <Leadership />

      {/* 2. Visual Story: FOUNDATION → EXPERIENCE → FUTURE */}
      <section className="bg-white py-24 sm:py-32 border-b border-[#0B0D0F]/10 text-[#0B0D0F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl border-b border-[#0B0D0F]/15 pb-6 mb-12">
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block mb-2">
              HERITAGE &amp; VISION
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold uppercase">
              One Foundation. One Family. One Vision.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#525860] font-sans">
              From the experience of one generation to the energy of the next, Tin Shade continues to grow with the same focus on strong structures, honest communication, and customer satisfaction.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Step 1: Foundation */}
            <div className="p-8 bg-[#F3F1EC] border border-[#0B0D0F]/10 space-y-3">
              <div className="flex items-center justify-between border-b border-[#0B0D0F]/10 pb-3 mb-2 font-mono text-xs">
                <span className="font-bold text-[#B08A4A]">01. FOUNDATION</span>
                <Wrench className="size-4 text-[#0B0D0F]" />
              </div>
              <h3 className="font-editorial-title text-lg font-bold uppercase">
                Direct Arc Mastery
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#525860] font-sans">
                Hands-on arc welding, precision flame cutting, and truss alignment learned on the ground over three decades of direct fabrication work.
              </p>
            </div>

            {/* Step 2: Experience */}
            <div className="p-8 bg-[#F3F1EC] border border-[#0B0D0F]/10 space-y-3">
              <div className="flex items-center justify-between border-b border-[#0B0D0F]/10 pb-3 mb-2 font-mono text-xs">
                <span className="font-bold text-[#B08A4A]">02. EXPERIENCE</span>
                <Award className="size-4 text-[#0B0D0F]" />
              </div>
              <h3 className="font-editorial-title text-lg font-bold uppercase">
                500+ Executed Sheds
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#525860] font-sans">
                Proven track record across manufacturing hubs, cold storages, logistics warehouses, and commercial rooftop shelters in North India and beyond.
              </p>
            </div>

            {/* Step 3: Future */}
            <div className="p-8 bg-[#F3F1EC] border border-[#0B0D0F]/10 space-y-3">
              <div className="flex items-center justify-between border-b border-[#0B0D0F]/10 pb-3 mb-2 font-mono text-xs">
                <span className="font-bold text-[#B08A4A]">03. FUTURE</span>
                <Compass className="size-4 text-[#0B0D0F]" />
              </div>
              <h3 className="font-editorial-title text-lg font-bold uppercase">
                Engineering &amp; Speed
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#525860] font-sans">
                Modern 2D/3D CAD load calculations, transparent digital BOQ estimations, high-tensile fasteners, and fast-track turnkey execution.
              </p>
            </div>

          </div>

          {/* Direct Yard Contact */}
          <div className="mt-14 p-8 bg-[#0B0D0F] text-white border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1.5">
              <span className="font-mono text-xs text-[#B08A4A] font-bold uppercase">
                DIRECT ACCESS TO LEADERSHIP
              </span>
              <h4 className="font-editorial-title text-xl sm:text-2xl font-bold uppercase text-white">
                Speak Directly with MD Khurshid or Abdul
              </h4>
              <p className="text-xs sm:text-sm text-[#8C9398] font-sans">
                No call center agents or sales middlemen. Your structural inquiry is handled directly by our engineering leadership.
              </p>
            </div>

            <div className="flex gap-4 shrink-0">
              <a
                href="tel:+918527977714"
                className="btn-arch-primary"
              >
                <span>Call +91 85279 77714</span>
              </a>
              <Link
                to="/quote"
                className="btn-arch-secondary"
              >
                <span>Request Quote</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
