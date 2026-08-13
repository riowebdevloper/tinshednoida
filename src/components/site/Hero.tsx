import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { company, heroSlides, heroStats } from "@/lib/site-data";
import { Counter } from "./Counter";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 7000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      aria-label="Hero — Industrial Sheds &amp; MS Structures"
      className="relative isolate flex min-h-[92svh] flex-col justify-end overflow-hidden bg-steel-deep text-steel-foreground"
    >
      {heroSlides.map((slide, i) => (
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          decoding={i === 0 ? "sync" : "async"}
          width={1920}
          height={1088}
          className={`pointer-events-none absolute inset-0 size-full object-cover transition-opacity duration-[1200ms] ${
            i === index ? "opacity-100 ken-burns" : "opacity-0"
          }`}
        />
      ))}

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,oklch(0.16_0.035_260/0.94)_0%,oklch(0.16_0.035_260/0.78)_45%,oklch(0.16_0.035_260/0.35)_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-50" aria-hidden />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:px-6 lg:px-10 lg:pb-16 lg:pt-36">
        <p className="eyebrow flex items-center gap-3 text-primary">
          <span className="h-px w-10 bg-primary" />
          15+ years of industrial expertise
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-[2.6rem] font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl">
          We build sheds
          <span className="block text-primary">that last.</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-muted sm:text-lg">
          Industrial sheds, warehouse roofing and MS steel structures engineered for strength,
          durability and long-term performance.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="/quote"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get free quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/projects"
            className="group inline-flex items-center justify-center gap-2 rounded-sm border border-steel-line bg-steel/40 px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-steel-foreground backdrop-blur-sm transition-colors hover:border-primary"
          >
            Explore our projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={company.whatsappText}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm px-3 py-4 font-display text-sm font-semibold uppercase tracking-wide text-steel-muted transition-colors hover:text-whatsapp"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
        </div>

        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-sm border border-steel-line bg-steel-line sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-steel-deep/70 px-5 py-5 backdrop-blur-sm">
              <dt className="font-display text-3xl font-bold leading-none text-steel-foreground sm:text-4xl">
                {"value" in stat && stat.value !== undefined ? (
                  <>
                    <Counter value={stat.value} />
                    <span className="text-primary">{stat.suffix}</span>
                  </>
                ) : (
                  <span className="text-primary">{stat.text}</span>
                )}
              </dt>
              <dd className="eyebrow mt-2 text-[0.6rem] text-steel-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="flex gap-2">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all ${
                  i === index ? "w-12 bg-primary" : "w-6 bg-steel-line hover:bg-steel-muted"
                }`}
              />
            ))}
          </div>
          <a
            href="#needs"
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-steel-muted transition-colors hover:text-primary sm:inline-flex"
          >
            Scroll
            <ChevronDown className="size-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
