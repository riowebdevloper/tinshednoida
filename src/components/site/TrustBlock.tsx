import { Check } from "lucide-react";
import { company, trustPoints, trustStats } from "@/lib/site-data";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

export function TrustBlock() {
  return (
    <section
      id="why-us"
      className="content-auto relative isolate overflow-hidden bg-steel-gradient py-16 text-steel-foreground lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal variant="left">
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-px w-10 bg-primary" />
              Why people choose us
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
              Built by a team that
              <span className="block text-primary">actually builds.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-steel-muted">
              Since {company.since}, Tin Shade Noida has fabricated and installed sheds, roofing and
              MS structures across Noida and industrial belts Pan India — with our own crew, on your site.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point, i) => (
                <Reveal
                  as="li"
                  key={point}
                  delay={i * 60}
                  className="flex items-start gap-3 border-l-2 border-primary/60 pl-3 text-sm text-steel-foreground"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {point}
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" className="grid grid-cols-2 gap-px self-start bg-steel-line">
            {trustStats.map((stat) => (
              <div key={stat.label} className="bg-steel-deep/60 px-5 py-8 sm:px-7 sm:py-10">
                <p className="font-display text-4xl font-bold leading-none sm:text-6xl">
                  {"value" in stat && stat.value !== undefined ? (
                    <>
                      <Counter value={stat.value} />
                      <span className="text-primary">{stat.suffix}</span>
                    </>
                  ) : (
                    <span className="text-primary">{stat.text}</span>
                  )}
                </p>
                <p className="eyebrow mt-3 text-[0.6rem] text-steel-muted">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
