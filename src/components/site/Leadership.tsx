import { ArrowRight, MapPin, MessageCircle, Phone, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, leadership } from "@/lib/site-data";

export function Leadership() {
  const { founder, nextGen, story, cta } = leadership;

  return (
    <section id="about" className="bg-steel-deep text-steel-foreground py-16 lg:py-24 border-b border-steel-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-steel-line pb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                IN-HOUSE LEADERSHIP & ACCOUNTABILITY
              </span>
              <span className="text-steel-muted font-mono text-xs">/ Zero Subcontractors</span>
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold uppercase leading-tight tracking-tight text-white">
              DIRECT FABRICATORS, NOT BROKERS
            </h2>
            <p className="mt-3 text-base text-steel-muted leading-relaxed">
              When you hire Tin Shade Noida, you deal directly with master fabricators and site engineers. We own our yard, our welding gear, and our erection cranes.
            </p>
          </div>

          <div className="font-mono text-xs text-steel-muted">
            <p className="text-white font-bold">Yard & Office Location:</p>
            <p className="text-primary mt-0.5">D179 Sector 10, Noida, UP</p>
          </div>
        </div>

        {/* 2 Leadership Profiles Side by Side */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* 01. Founder: MD Khurshid */}
          <div className="rounded-xs border border-steel-line bg-steel p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {founder.photo && (
                <div className="aspect-[4/3] overflow-hidden rounded-xs bg-black border border-steel-line">
                  <img
                    src={founder.photo}
                    alt={`${founder.name} — ${founder.designation}`}
                    className="size-full object-cover object-[center_15%]"
                  />
                </div>
              )}

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    {founder.designation}
                  </span>
                  <span className="font-mono text-xs text-emerald-400 bg-steel-deep px-2.5 py-0.5 rounded-xs border border-steel-line">
                    30+ Yrs Experience
                  </span>
                </div>

                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  {founder.name}
                </h3>

                <div className="mt-4 space-y-2.5 text-sm leading-relaxed text-steel-muted">
                  {founder.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-steel-line font-mono text-xs text-steel-muted flex items-center justify-between">
              <span>Personal Site Supervision</span>
              <span className="text-white font-bold">Since 2010</span>
            </div>
          </div>

          {/* 02. Next Gen: Abdul */}
          <div className="rounded-xs border border-steel-line bg-steel p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {nextGen.photo && (
                <div className="aspect-[4/3] overflow-hidden rounded-xs bg-black border border-steel-line">
                  <img
                    src={nextGen.photo}
                    alt={`${nextGen.name} — ${nextGen.designation}`}
                    className="size-full object-cover object-[center_15%]"
                  />
                </div>
              )}

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
                    {nextGen.designation}
                  </span>
                  <span className="font-mono text-xs text-amber-400 bg-steel-deep px-2.5 py-0.5 rounded-xs border border-steel-line">
                    Modern Structural Tech
                  </span>
                </div>

                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  {nextGen.name}
                </h3>

                <div className="mt-4 space-y-2.5 text-sm leading-relaxed text-steel-muted">
                  {nextGen.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-steel-line font-mono text-xs text-steel-muted flex items-center justify-between">
              <span>Digital Drawings & Fast Estimates</span>
              <span className="text-white font-bold">24-Hr Turnaround</span>
            </div>
          </div>

        </div>

        {/* Company Heritage & Workshop Story */}
        <div className="mt-14 rounded-xs border border-primary/30 bg-steel p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                FROM NOIDA FABRICATION YARD TO PAN-INDIA SITES
              </span>
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                {story.heading}
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-steel-muted">
                {story.body}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/quote"
                className="flex items-center justify-center gap-2 rounded-xs bg-primary px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md transition-transform hover:-translate-y-px"
              >
                <span>{cta.getQuoteLabel}</span>
                <ArrowRight className="size-4" />
              </Link>

              <a
                href={company.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xs border border-steel-line bg-steel-deep px-6 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white hover:border-whatsapp hover:text-whatsapp transition-colors"
              >
                <MessageCircle className="size-4" />
                <span>{cta.talkToUsLabel}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
