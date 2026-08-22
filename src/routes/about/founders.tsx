import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Leadership } from "@/components/site/Leadership";
import { FinalCta } from "@/components/site/FinalCta";
import { company, leadership } from "@/lib/site-data";
import { Wrench, Compass, ShieldCheck, CheckCircle2, Factory, Heart, Award, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const title = "The People Behind Tin Shade | Founders MD Khurshid & Abdul";
const description =
  "Built on experience, carried forward by family. Meet founder MD Khurshid and project engineer Abdul leading Tin Shade Noida.";

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
  const { founder, nextGen } = leadership;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="THE PEOPLE BEHIND TIN SHADE"
        title="Built on Experience. Carried Forward by Family."
        description="A father-son partnership rooted in hands-on metal craftsmanship, rigorous IS engineering codes, and long-term client relationships across India."
      />

      {/* 1. Main Leadership Section */}
      <Leadership />

      {/* 2. Visual Story: FOUNDATION → EXPERIENCE → FUTURE */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl border-b border-slate-200 pb-5 mb-10">
            <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
              HERITAGE &amp; VISION
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              One Foundation. One Family. One Vision.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-sans">
              From the experience of one generation to the energy of the next, Tin Shade continues to grow with the same focus on strong structures, honest communication, and customer satisfaction.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            
            {/* Step 1: Foundation */}
            <div className="corp-card p-6 bg-[#F8FAFC]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                  PHASE 01
                </span>
                <Wrench className="size-4 text-[#0E2A47]" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Foundation &amp; Craft
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
                Hands-on arc welding, precision flame cutting, and truss alignment learned on the ground over three decades of direct fabrication work.
              </p>
            </div>

            {/* Step 2: Experience */}
            <div className="corp-card p-6 bg-[#F8FAFC]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                  PHASE 02
                </span>
                <Award className="size-4 text-[#0E2A47]" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                500+ Executed Projects
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
                Proven track record across manufacturing hubs, cold storages, logistics warehouses, and commercial rooftop shelters in North India and beyond.
              </p>
            </div>

            {/* Step 3: Future */}
            <div className="corp-card p-6 bg-[#F8FAFC]">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                  PHASE 03
                </span>
                <Compass className="size-4 text-[#0E2A47]" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Engineering &amp; Future
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
                Modern 2D/3D CAD load calculations, transparent digital BOQ estimations, high-tensile fasteners, and fast-track turnkey execution.
              </p>
            </div>

          </div>

          {/* Direct Yard Invitation */}
          <div className="mt-12 p-6 sm:p-8 rounded-xs border border-slate-200 bg-[#0E2A47] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="space-y-1">
              <span className="font-mono text-xs text-amber-400 font-bold uppercase">
                DIRECT ACCESS TO LEADERSHIP
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                Speak Directly with MD Khurshid or Abdul
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                No call center agents or sales middlemen. Your structural inquiry is handled directly by our engineering leadership.
              </p>
            </div>

            <div className="flex gap-3 shrink-0">
              <a
                href="tel:+918527977714"
                className="btn-corp-primary"
              >
                <span>Call +91 85279 77714</span>
              </a>
              <Link
                to="/quote"
                className="btn-corp-navy-outline"
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
