import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Assistant } from "./Assistant";
import { MobileCta } from "./MobileCta";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-navy-obsidian text-white selection:bg-amber-400 selection:text-slate-950">
      <SiteHeader />
      <main id="main-content" className="pb-16 sm:pb-0">
        {children}
      </main>
      <SiteFooter />
      <Assistant />
      <MobileCta />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-obsidian px-5 pb-14 pt-20 text-white sm:px-6 lg:px-10 lg:pb-20 lg:pt-28 border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-30" aria-hidden />
      <div className="absolute -top-32 -left-32 size-[400px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-sky-400 uppercase tracking-tight mb-2">
          <span className="size-1.5 rounded-full bg-sky-400" />
          <span>{eyebrow}</span>
        </div>
        <h1 className="mt-1 max-w-4xl font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300 font-sans">
          {description}
        </p>
      </div>
    </section>
  );
}
