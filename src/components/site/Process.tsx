import { processSteps } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="content-auto bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            How we work
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Five steps, zero surprises
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            From your first call to final handover, you always know what happens next.
          </p>
        </Reveal>

        <ol className="relative mt-12 grid gap-6 lg:grid-cols-5">
          <span
            className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-border lg:left-0 lg:top-7 lg:h-px lg:w-full"
            aria-hidden
          />
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.step}
              delay={i * 90}
              className="relative flex gap-4 lg:flex-col lg:gap-5"
            >
              <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-primary bg-background font-display text-sm font-bold text-primary lg:size-14 lg:text-base">
                {step.step}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold uppercase leading-tight text-foreground lg:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
