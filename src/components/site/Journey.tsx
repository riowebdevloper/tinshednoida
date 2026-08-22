import { journey } from "@/lib/site-data";

export function Journey() {
  return (
    <section
      id="journey"
      className="bg-charcoal text-paper py-16 sm:py-20 border-b border-white/10 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 cad-grid-dark opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl border-b border-white/15 pb-5 mb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase leading-tight text-white">
            From Empty Plot to Completed Industrial Shed
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-steel-muted font-sans">
            Scroll through a typical execution workflow — the exact sequence we follow on every industrial site across India.
          </p>
        </div>

        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:gap-3 lg:overflow-visible">
          {journey.map((stage, i) => (
            <div
              key={stage.label}
              className="group relative min-w-[70%] shrink-0 snap-start overflow-hidden rounded-xs border border-white/15 bg-charcoal-deep sm:min-w-[42%] lg:min-w-0"
            >
              <img
                src={stage.image}
                alt={stage.alt}
                loading="lazy"
                decoding="async"
                width={1280}
                height={960}
                className="aspect-4/5 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-3.5">
                <span className="font-mono text-xs font-bold text-safety tabular-nums block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-sm font-bold uppercase leading-tight text-white mt-0.5">
                  {stage.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
