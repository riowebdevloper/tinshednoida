import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { company, needs } from "@/lib/site-data";
import { needIcons } from "./needIcons";
import { Reveal } from "./Reveal";

export function NeedFinder() {
  const [activeId, setActiveId] = useState(needs[0]!.id);
  const active = needs.find((need) => need.id === activeId) ?? needs[0]!;

  return (
    <section
      id="needs"
      className="content-auto border-b border-border bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow flex items-center gap-3 text-primary">
              <span className="h-px w-10 bg-primary" />
              Start here
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
              What do you need?
            </h2>
            <p className="mt-3 max-w-lg text-base text-muted-foreground">
              Pick the structure closest to your requirement — we'll show you what it involves.
            </p>
          </div>
          <p className="hidden text-sm text-muted-foreground lg:block">
            Not sure yet?{" "}
            <Link
              className="font-semibold text-primary underline-offset-4 hover:underline"
              to="/quote"
            >
              Let us help you choose →
            </Link>
          </p>
        </Reveal>

        <div
          role="tablist"
          aria-label="Structure types"
          className="no-scrollbar mt-8 -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-6"
        >
          {needs.map((need) => {
            const Icon = needIcons[need.icon] ?? needIcons["factory"]!;
            const selected = need.id === activeId;
            return (
              <button
                key={need.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveId(need.id)}
                className={`group flex min-w-[9.5rem] snap-start flex-col items-start gap-3 rounded-sm border p-4 text-left transition-all duration-300 ${
                  selected
                    ? "-translate-y-1 border-primary bg-primary-soft shadow-card"
                    : "border-border bg-card hover:-translate-y-1 hover:border-primary/50"
                }`}
              >
                <Icon
                  className={`size-6 transition-colors ${selected ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`}
                />
                <span className="font-display text-sm font-semibold uppercase leading-tight text-foreground">
                  {need.label}
                </span>
                <span className="text-xs text-muted-foreground">{need.short}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid overflow-hidden rounded-sm border border-border bg-card lg:grid-cols-2">
          <div className="relative order-first aspect-16/10 overflow-hidden lg:order-last lg:aspect-auto lg:min-h-[24rem]">
            {needs.map((need) => (
              <img
                key={need.id}
                src={need.image}
                alt={need.alt}
                loading="lazy"
                decoding="async"
                width={1280}
                height={960}
                className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${
                  need.id === activeId ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="flex flex-col justify-center gap-5 p-6 sm:p-9">
            <div>
              <p className="eyebrow text-primary">{active.short}</p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
                {active.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {active.body}
              </p>
            </div>

            <ul className="grid gap-2 sm:grid-cols-2">
              {active.useCases.map((useCase) => (
                <li key={useCase} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="size-4 shrink-0 text-primary" />
                  {useCase}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Get a quote for this
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`${company.whatsapp}?text=${encodeURIComponent(`Hi Tin Shade Noida, I need a ${active.label} for my site.`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-whatsapp hover:text-whatsapp"
              >
                <MessageCircle className="size-4" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
