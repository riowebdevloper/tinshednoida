import { ArrowRight, MapPin, Wrench, Compass, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, leadership } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Leadership() {
  const { founder, nextGen } = leadership;

  return (
    <section id="about" className="bg-navy-obsidian text-white py-16 sm:py-24 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ──────── SECTION HEADER ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sky-400 mb-2">
              <span className="size-1.5 rounded-full bg-sky-400" />
              <span>DIRECT MASTER FABRICATORS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Master Fabricators &amp; Yard Leadership
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Direct master fabricators with in-house workshop machinery in Noida Sector 10. When you hire Tin Shade Noida, the men running the project are on the yard floor and site cranes every single day.
            </p>
          </div>

          <div className="rounded-xs border border-white/10 bg-[#0E1726] p-4 font-mono text-xs text-slate-300 shrink-0">
            <p className="font-semibold text-white">Yard &amp; Workshop:</p>
            <p className="text-amber-400 font-bold mt-0.5">D179 Sector 10, Noida, UP</p>
            <p className="text-slate-400 text-[0.6875rem] mt-0.5">Mon–Sat: 8:00 AM – 8:00 PM</p>
          </div>
        </div>

        {/* ──────── 2 LEADERSHIP PROFILES (STRUCTURALLY DIFFERENT FORMATS) ──────── */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">

          {/* 01. Founder: MD Khurshid (7 cols — Field & Yard Craftsmanship Focus) */}
          <div className="lg:col-span-7 navy-card p-6 sm:p-7 flex flex-col justify-between">
            <div>
              {founder.photo && (
                <div className="aspect-[16/10] overflow-hidden rounded-xs bg-navy-deep border border-white/10">
                  <img
                    src={founder.photo}
                    alt={`${founder.name} — Master Fabricator & Founder`}
                    className="size-full object-cover object-[center_15%]"
                  />
                </div>
              )}

              <div className="mt-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-white font-semibold">
                    <Wrench className="size-4 text-amber-400" />
                    <span>MD Khurshid · Master Fabricator &amp; Founder</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-xs tabular-nums">
                    30+ Yrs On Site
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
                  <p>
                    MD Khurshid began structural steel cutting and arc welding in 1995. Rather than managing from a remote office, he spends six days a week on the fabrication shop floor in Noida Sector 10 and at active crane erection sites across Northern India.
                  </p>
                  <p>
                    He personally inspects beam alignments, rafter beveling, continuous weld penetration to IS 816 standards, and oversees every heavy crane lifting operation to guarantee zero structural defects before handover.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 font-mono text-xs text-slate-400 flex items-center justify-between">
              <span>Daily Focus: Shop Welding, Crane Rigging &amp; Alignment</span>
              <span className="text-amber-400 font-semibold">Yard Floor Active</span>
            </div>
          </div>

          {/* 02. Next Gen: Abdul (5 cols — CAD Modeling & BOQ Estimation Focus) */}
          <div className="lg:col-span-5 navy-card p-6 sm:p-7 flex flex-col justify-between">
            <div>
              {nextGen.photo && (
                <div className="aspect-[4/3] overflow-hidden rounded-xs bg-navy-deep border border-white/10">
                  <img
                    src={nextGen.photo}
                    alt={`${nextGen.name} — Project Engineer & Estimator`}
                    className="size-full object-cover object-[center_15%]"
                  />
                </div>
              )}

              <div className="mt-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-white font-semibold">
                    <Compass className="size-4 text-sky-400" />
                    <span>Abdul · Project Engineer &amp; Estimator</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
                  <p>
                    Abdul bridges modern engineering computation with physical yard fabrication. He conducts on-site digital laser surveys, runs wind and dead load moments against IS 875 codes, and produces detailed 2D/3D CAD fabrication drawings.
                  </p>
                  <p>
                    He manages client technical consultations, delivers itemized BOQ estimates within 24 hours, and oversees raw steel procurement to certified IS 2062 specifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 font-mono text-xs text-slate-400 flex items-center justify-between">
              <span>Daily Focus: 2D/3D CAD, BOQ &amp; Laser Surveys</span>
              <span className="text-sky-400 font-semibold">24-Hr Estimates</span>
            </div>
          </div>

        </div>

        {/* ──────── DIRECT YARD VISIT CALLOUT ──────── */}
        <div className="mt-12 rounded-xs border border-sky-400/30 bg-[#0E1726] p-6 sm:p-8 shadow-2xl">
          <div className="grid gap-6 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="font-mono text-xs font-semibold uppercase text-amber-400">
                INSPECTION INVITATION · NOIDA SECTOR 10 YARD
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                Inspect Raw Steel Stock &amp; Active Welding in Person
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 font-sans">
                We invite industrial plant owners, architects, and structural consultants to visit our yard, inspect our IS 2062 mild steel channels, and watch ongoing truss fabrication before placing an order.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <Link
                to="/quote"
                className="btn-elite w-full text-center"
              >
                <span>Schedule a Yard Visit</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      <TrussDivider dark type="warren" className="mt-14" />
    </section>
  );
}
