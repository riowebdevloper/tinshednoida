import { ArrowRight, MapPin, MessageCircle, Phone, ShieldCheck, Wrench, Compass, HardHat } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, leadership } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Leadership() {
  const { founder, nextGen } = leadership;

  return (
    <section id="about" className="bg-paper text-charcoal py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ──────── SECTION HEADER ──────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/15 pb-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-oxide block mb-1">
              FATHER-SON CRAFTSMANSHIP &amp; YARD ACCOUNTABILITY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
              Direct Master Fabricators, Not Brokers
            </h2>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed font-sans">
              When you hire Tin Shade Noida, you deal directly with the men who own the yard, cut the steel, and supervise the crane hoists on your site.
            </p>
          </div>

          <div className="rounded-xs border border-border bg-surface p-4 font-mono text-xs text-charcoal shrink-0">
            <p className="font-bold text-charcoal uppercase">Fabrication Yard &amp; Office:</p>
            <p className="text-oxide font-bold mt-0.5">D179 Sector 10, Noida, UP</p>
            <p className="text-muted-foreground mt-1">Open Mon–Sat: 8:00 AM – 8:00 PM</p>
          </div>
        </div>

        {/* ──────── 2 LEADERSHIP PROFILES (DISTINCT DAILY ROLES) ──────── */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">

          {/* 01. Founder: MD Khurshid — Master Fabricator */}
          <div className="rounded-xs border border-charcoal/20 bg-card p-6 sm:p-8 flex flex-col justify-between shadow-card">
            <div>
              {founder.photo && (
                <div className="aspect-[4/3] overflow-hidden rounded-xs bg-charcoal border border-border">
                  <img
                    src={founder.photo}
                    alt={`${founder.name} — Master Fabricator & Founder`}
                    className="size-full object-cover object-[center_15%]"
                  />
                </div>
              )}

              <div className="mt-6">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Wrench className="size-4 text-oxide" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-charcoal">
                      Master Fabricator &amp; Founder
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-charcoal bg-safety px-2 py-0.5 rounded-xs border border-charcoal/20">
                    30+ Yrs On-Site Experience
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal">
                  MD Khurshid
                </h3>

                <div className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal/85 font-sans">
                  <p>
                    MD Khurshid started cutting and welding structural steel in 1995. He spends 6 days a week on the fabrication shop floor in Noida Sector 10 and at active erection sites across Northern India.
                  </p>
                  <p>
                    Rather than managing from behind a desk, Khurshid personally inspects beam alignments, rafter beveling, continuous weld penetration to IS 816, and oversees every heavy crane lifting operation.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border font-mono text-xs text-muted-foreground flex items-center justify-between">
              <span>Core Focus: Shop Welding &amp; Crane Erection</span>
              <span className="text-charcoal font-bold">Hands-On Supervision</span>
            </div>
          </div>

          {/* 02. Next Gen: Abdul — Project Engineer & Estimator */}
          <div className="rounded-xs border border-charcoal/20 bg-card p-6 sm:p-8 flex flex-col justify-between shadow-card">
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

              <div className="mt-6">
                <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Compass className="size-4 text-oxide" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-charcoal">
                      Project Engineer &amp; Estimator
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-white bg-oxide px-2 py-0.5 rounded-xs">
                    CAD Detailing &amp; Laser Surveys
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal">
                  Abdul
                </h3>

                <div className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal/85 font-sans">
                  <p>
                    Abdul bridges modern structural engineering software with the practical realities of the fabrication yard. He conducts on-site digital laser surveys, runs load calculations against IS 875 wind codes, and produces detailed 2D/3D fabrication drawings.
                  </p>
                  <p>
                    He directly handles client communications, delivers itemized BOQ estimates within 24 hours, and ensures that material procurement meets certified IS 2062 steel standards without delays.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border font-mono text-xs text-muted-foreground flex items-center justify-between">
              <span>Core Focus: 3D CAD, BOQ &amp; Client Coordination</span>
              <span className="text-charcoal font-bold">24-Hr Turnaround</span>
            </div>
          </div>

        </div>

        {/* ──────── DIRECT YARD ACTION BOX ──────── */}
        <div className="mt-14 rounded-xs border border-charcoal bg-charcoal text-paper p-6 sm:p-10 shadow-elevated">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-safety">
                VISIT OUR FABRICATION YARD IN NOIDA SECTOR 10
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Inspect Raw Steel Stock &amp; Active Welding in Person
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-steel-muted font-sans">
                We invite factory owners, architects, and structural consultants to visit our yard, inspect our IS 2062 steel channels, and watch ongoing truss fabrication before placing an order.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xs bg-safety px-6 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal shadow-md transition-transform hover:-translate-y-0.5 text-center"
              >
                <span>Schedule a Yard Visit</span>
                <ArrowRight className="size-4" />
              </Link>

              <a
                href={company.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xs border border-white/20 bg-charcoal-deep px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white hover:border-safety hover:text-safety transition-colors text-center"
              >
                <MessageCircle className="size-4 text-safety" />
                <span>Chat with Abdul on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      <TrussDivider type="warren" className="mt-16" />
    </section>
  );
}
