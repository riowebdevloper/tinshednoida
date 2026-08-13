import { journey } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Journey() {
  return (
    <section
      id="journey"
      className="content-auto relative isolate overflow-hidden bg-steel-deep py-16 text-steel-foreground lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            The journey
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
            From empty plot to
            <span className="block text-primary">finished shed</span>
          </h2>
          <p className="mt-3 text-base text-steel-muted">
            Scroll through a typical project — the same sequence we follow on every site.
          </p>
        </Reveal>

        <div className="no-scrollbar mt-10 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-6 lg:gap-3 lg:overflow-visible lg:px-0">
          {journey.map((stage, i) => (
            <Reveal
              key={stage.label}
              delay={i * 70}
              variant="scale"
              className="group relative min-w-[70%] shrink-0 snap-start overflow-hidden rounded-sm sm:min-w-[42%] lg:min-w-0"
            >
              <img
                src={stage.image}
                alt={stage.alt}
                loading="lazy"
                decoding="async"
                width={1280}
                height={960}
                className="aspect-4/5 w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.16_0.035_260/0.92),transparent_55%)]"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="font-display text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-sm font-semibold uppercase leading-tight text-steel-foreground">
                  {stage.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
