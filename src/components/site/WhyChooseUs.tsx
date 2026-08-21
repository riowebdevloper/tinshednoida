import { Check, ShieldCheck } from "lucide-react";
import { whyBuildWithUs } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="content-auto relative isolate overflow-hidden bg-background py-16 lg:py-24 border-b border-border"
    >
      {/* Subtle architectural grid pattern */}
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-10" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="max-w-3xl border-b border-border pb-8">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            Competitive Advantages
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight sm:text-5xl lg:text-6xl text-foreground tracking-tight">
            WHY BUILD WITH
            <span className="block text-primary">TIN SHADE?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Five core engineering principles that guarantee durable structures and transparent project execution.
          </p>
        </Reveal>

        {/* 5 Benefits Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyBuildWithUs.map((benefit, i) => (
            <Reveal
              as="div"
              key={benefit.number}
              delay={i * 70}
              className={`group relative rounded-sm border border-border bg-card p-6 sm:p-8 shadow-card transition-all duration-300 hover:border-primary hover:shadow-elevated flex flex-col justify-between ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-primary">
                    {benefit.number}
                  </span>
                  <div className="flex size-8 items-center justify-center rounded-xs bg-primary/10 text-primary">
                    <ShieldCheck className="size-4.5" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold uppercase text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-2">
                <Check className="size-4 text-primary shrink-0" />
                <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
                  Verified Standard
                </span>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
