import { Star, Quote, Building2, MapPin } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="content-auto bg-background py-16 lg:py-24 border-b border-border"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl border-b border-border pb-8">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            Client Feedback
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl text-foreground tracking-tight">
            TRUSTED BY BUSINESSES
            <span className="block text-primary">& PLANT OWNERS.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Real feedback from factory owners, warehouse managers, and structural clients.
          </p>
        </Reveal>

        {/* Testimonials Cards Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              as="article"
              key={item.name}
              delay={i * 80}
              className="group relative flex flex-col justify-between rounded-sm border border-border bg-card p-6 sm:p-8 shadow-card transition-all duration-300 hover:border-primary hover:shadow-elevated"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400" aria-label="5 stars rating">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star key={starIdx} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90 font-normal">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* Client Info Footer */}
              <div className="mt-6 border-t border-border/70 pt-4 flex items-center justify-between">
                <div>
                  <strong className="block font-display text-base font-bold uppercase text-foreground">
                    {item.name}
                  </strong>
                  <span className="block text-xs text-muted-foreground font-medium">
                    {item.role} · {item.project}
                  </span>
                </div>

                <span className="flex items-center gap-1 font-mono text-[0.7rem] text-muted-foreground bg-muted px-2 py-1 rounded-xs">
                  <MapPin className="size-3 text-primary" />
                  {item.location}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
