import { ArrowRight, MapPin, Wrench, Compass } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, leadership } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Leadership() {
  const { founder, nextGen } = leadership;

  return (
    <section id="about" className="bg-paper text-charcoal py-16 sm:py-20 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ──────── SECTION HEADER: DIRECT TITLE (NO REPETITIVE EYEBROW AT ALL) ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/15 pb-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal tracking-tight">
              Master Fabricators &amp; Yard Leadership
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
              Direct master fabricators with in-house workshop machinery in Noida Sector 10. When you hire Tin Shade Noida, the men running the project are on the yard floor and site cranes every single day.
            </p>
          </div>

          <div className="rounded-xs border border-border bg-surface p-3.5 font-mono text-xs text-charcoal shrink-0">
            <p className="font-semibold text-charcoal">Yard &amp; Workshop:</p>
            <p className="text-oxide font-bold mt-0.5">D179 Sector 10, Noida, UP</p>
            <p className="text-muted-foreground text-[0.6875rem] mt-0.5">Mon–Sat: 8:00 AM – 8:00 PM</p>
          </div>
        </div>

        {/* ──────── 2 LEADERSHIP PROFILES (STRUCTURALLY DIFFERENT FORMATS) ──────── */}
        <div className="mt-10 grid gap-8 lg:grid-cols-12 items-start">

          {/* 01. Founder: MD Khurshid (7 cols — Field & Yard Craftsmanship Focus) */}
          <div className="lg:col-span-7 rounded-xs border border-charcoal/20 bg-card p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              {founder.photo && (
                <div className="aspect-[16/10] overflow-hidden rounded-xs bg-charcoal border border-border">
                  <img
                    src={founder.photo}
                    alt={`${founder.name} — Master Fabricator & Founder`}
                    className="size-full object-cover object-[center_15%]"
                  />
                </div>
              )}

              <div className="mt-5">
                <div className="flex items-center justify-between border-b border-border pb-2.5 mb-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-charcoal font-semibold">
                    <Wrench className="size-3.5 text-oxide" />
                    <span>MD Khurshid · Master Fabricator &amp; Founder</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-charcoal bg-safety px-2 py-0.5 rounded-xs tabular-nums">
                    30+ Yrs On Site
                  </span>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-charcoal/85 font-sans">
                  <p>
                    MD Khurshid began structural steel cutting and arc welding in 1995. Rather than managing from a remote office, he spends six days a week on the fabrication shop floor in Noida Sector 10 and at active crane erection sites across Northern India.
                  </p>
                  <p>
                    He personally inspects beam alignments, rafter beveling, continuous weld penetration to IS 816 standards, and oversees every heavy crane lifting operation to guarantee zero structural defects before handover.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-border font-mono text-xs text-muted-foreground flex items-center justify-between">
              <span>Daily Focus: Shop Welding, Crane Rigging &amp; Alignment</span>
              <span className="text-charcoal font-semibold">Yard Floor Active</span>
            </div>
          </div>

          {/* 02. Next Gen: Abdul (5 cols — CAD Modeling & BOQ Estimation Focus) */}
          <div className="lg:col-span-5 rounded-xs border border-charcoal/20 bg-card p-6 sm:p-7 flex flex-col justify-between shadow-xs">
            <div>
              {nextGen.photo && (
                <div className="aspect-[4/3] overflow-hidden rounded-xs bg-charcoal border border-border">
                  <img
                    src={nextGen.photo}
                    alt={`${nextGen.name} — Project Engineer & Estimator`}
                    className="size-full object-cover object-[center_15%]"
                  />
                </div>
              )}

              <div className="mt-5">
                <div className="flex items-center justify-between border-b border-border pb-2.5 mb-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-charcoal font-semibold">
                    <Compass className="size-3.5 text-oxide" />
                    <span>Abdul · Project Engineer &amp; Estimator</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-charcoal/85 font-sans">
                  <p>
                    Abdul bridges modern engineering computation with physical yard fabrication. He conducts on-site digital laser surveys, runs wind and dead load moments against IS 875 codes, and produces detailed 2D/3D CAD fabrication drawings.
                  </p>
                  <p>
                    He manages client technical consultations, delivers itemized BOQ estimates within 24 hours, and oversees raw steel procurement to certified IS 2062 specifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-border font-mono text-xs text-muted-foreground flex items-center justify-between">
              <span>Daily Focus: 2D/3D CAD, BOQ &amp; Laser Surveys</span>
              <span className="text-charcoal font-semibold">24-Hr Estimates</span>
            </div>
          </div>

        </div>

        {/* ──────── DIRECT YARD VISIT CALLOUT ──────── */}
        <div className="mt-10 rounded-xs border border-charcoal bg-charcoal text-paper p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="font-mono text-xs font-semibold uppercase text-safety">
                INSPECTION INVITATION · NOIDA SECTOR 10 YARD
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                Inspect Raw Steel Stock &amp; Active Welding in Person
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-steel-muted font-sans">
                We invite industrial plant owners, architects, and structural consultants to visit our yard, inspect our IS 2062 mild steel channels, and watch ongoing truss fabrication before placing an order.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2.5">
              <Link
                to="/quote"
                className="btn-primary w-full text-center"
              >
                <span>Schedule a Yard Visit</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>

      <TrussDivider type="warren" className="mt-14" />
    </section>
  );
}
