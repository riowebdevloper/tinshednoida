import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Leadership } from "@/components/site/Leadership";
import { Journey } from "@/components/site/Journey";
import { FinalCta } from "@/components/site/FinalCta";
import { company } from "@/lib/site-data";
import { Wrench, ShieldCheck, CheckCircle2, Factory, HardHat, Sparkles } from "lucide-react";

const title = `About ${company.name} | Master Steel Fabricators Since ${company.since}`;
const description =
  "In-house structural steel fabrication yard in Noida Sector 10. Learn how MD Khurshid & Abdul deliver 500+ industrial sheds with zero broker markups.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const yardMachinery = [
    {
      equipment: "Heavy Hydraulic Mobile Cranes",
      capacity: "20T & 40T Lifting Capacity",
      usage: "On-site modular truss hoisting, high-bay column placement, and gantry girder installation.",
    },
    {
      equipment: "Multi-Station Arc & MIG Welding",
      capacity: "IS 816 Compliant Continuous Fillet",
      usage: "Full-penetration web-to-flange welding on heavy I-beams, purlins, and gusset joints.",
    },
    {
      equipment: "Automated Oxy-Fuel & Plasma Cutters",
      capacity: "Up to 50mm Plate Thickness",
      usage: "High-precision base-plate profiling, rafter beveling, and cleat slotting.",
    },
    {
      equipment: "Dual-Coat Red Oxide Primer Booth",
      capacity: "IS 2074 Certified Zinc Phosphate",
      usage: "Shop-applied protective anti-rust coating before transit to prevent weather oxidation.",
    },
  ];

  const advantages = [
    {
      title: "Direct Yard Pricing (0% Broker Margin)",
      desc: "Commercial shed aggregators sub-contract out work and add 20-30% markups. With Tin Shade Noida, you deal directly with the master fabricators cutting your steel.",
    },
    {
      title: "Full Material Provenance (IS 2062)",
      desc: "Every metric tonne of steel sourced for your project comes with original mill test certificates (MTC) verifying tensile strength, elongation, and yield stress.",
    },
    {
      title: "In-House Erection Crew & Cranes",
      desc: "We do not rely on ad-hoc daily labor. Our dedicated riggers and certified crane operators execute installations according to strict IS 800:2007 safety guidelines.",
    },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`DIRECT STRUCTURAL FABRICATION SINCE ${company.since}`}
        title="Master Fabricators, Not Sales Middlemen"
        description="Founded in 2010 by MD Khurshid, Tin Shade Noida operates a direct fabrication workshop in Sector 10 Noida, delivering 500+ industrial sheds with transparent pricing and engineering accountability."
      />

      {/* 1. Leadership Story */}
      <Leadership />

      {/* 2. In-House Yard Machinery & Capabilities */}
      <section className="bg-navy-obsidian py-16 sm:py-20 border-b border-white/10 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl border-b border-white/10 pb-5 mb-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-amber-400 mb-2">
              <Factory className="size-4" />
              <span>SHOP INFRASTRUCTURE &amp; RIGGING</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Noida Sector 10 Yard Machinery
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans">
              Take a look inside our in-house workshop. All cutting, fitting, and continuous arc welding take place under direct master supervision.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {yardMachinery.map((item) => (
              <div
                key={item.equipment}
                className="navy-card p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                    <span className="font-mono text-[0.6875rem] text-sky-400 font-semibold uppercase">
                      Equipment
                    </span>
                    <Wrench className="size-3.5 text-amber-400" />
                  </div>

                  <h3 className="font-display text-base font-bold text-white">
                    {item.equipment}
                  </h3>
                  
                  <p className="mt-1 font-mono text-xs text-amber-400 font-semibold">
                    {item.capacity}
                  </p>

                  <p className="mt-2 text-xs leading-relaxed text-slate-300 font-sans">
                    {item.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Execution Journey */}
      <Journey />

      {/* 4. Why Direct Fabrication Beats Middlemen */}
      <section className="bg-navy-obsidian py-16 sm:py-20 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl border-b border-white/10 pb-5 mb-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sky-400 mb-2">
              <ShieldCheck className="size-4" />
              <span>ACCOUNTABILITY PLEDGE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why Direct Fabrication Beats Middlemen
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {advantages.map((adv) => (
              <div key={adv.title} className="navy-card p-6">
                <div className="size-9 rounded-xs bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4">
                  <CheckCircle2 className="size-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {adv.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Direct Final CTA */}
      <FinalCta />
    </SiteLayout>
  );
}
