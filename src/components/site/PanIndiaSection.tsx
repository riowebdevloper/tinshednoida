import { Globe2, MapPin, Navigation, ShieldCheck } from "lucide-react";
import { areas, company } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function PanIndiaSection() {
  return (
    <section
      id="pan-india"
      className="content-auto relative isolate overflow-hidden bg-steel-deep text-steel-foreground py-16 lg:py-24 border-b border-steel-line"
    >
      {/* Blueprint grid effect */}
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-20" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl border-b border-steel-line pb-8">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            Nationwide Reach
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl text-white tracking-tight">
            FROM NOIDA TO
            <span className="block text-primary">PAN INDIA.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-steel-muted leading-relaxed">
            Industrial shed, warehouse, roofing and steel fabrication solutions for projects across India.
          </p>
        </Reveal>

        {/* Regional Coverage Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <Reveal
              as="div"
              key={area.name}
              delay={i * 60}
              className="group flex items-center justify-between rounded-sm border border-steel-line bg-steel p-4 sm:p-5 transition-all duration-200 hover:border-primary hover:bg-steel/80 shadow-card"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xs bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="size-5" />
                </div>
                <div className="min-w-0">
                  <strong className="block font-display text-base font-bold uppercase text-white truncate">
                    {area.name}
                  </strong>
                  <span className="block font-mono text-xs text-steel-muted truncate">
                    {area.note}
                  </span>
                </div>
              </div>

              <span className="font-mono text-xs text-primary font-semibold shrink-0 pl-2">
                ACTIVE
              </span>
            </Reveal>
          ))}
        </div>

        {/* Onsite Mobilization Banner */}
        <Reveal delay={200} className="mt-8 rounded-sm border border-primary/30 bg-primary/10 p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-sm sm:text-base font-bold uppercase text-white">
                Direct On-Site Crew Mobilization
              </h3>
              <p className="text-xs sm:text-sm text-steel-muted">
                Our own welding and structural erection crew travels directly to your project location with equipment.
              </p>
            </div>
          </div>

          <a
            href={company.whatsappText}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xs bg-primary px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Check Availability for Your City →
          </a>
        </Reveal>

      </div>
    </section>
  );
}
