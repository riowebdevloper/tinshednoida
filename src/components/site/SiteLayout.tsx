import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Assistant } from "./Assistant";
import { MobileCta } from "./MobileCta";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
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
    <section className="relative isolate overflow-hidden bg-charcoal px-5 pb-12 pt-20 text-paper sm:px-6 lg:px-10 lg:pb-16 lg:pt-24 border-b border-white/10">
      <div className="pointer-events-none absolute inset-0 cad-grid-dark opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <p className="font-mono text-xs font-semibold text-safety uppercase tracking-tight">
          {eyebrow}
        </p>
        <h1 className="mt-2 max-w-4xl font-display text-3xl sm:text-5xl font-bold uppercase leading-[1.12] text-white">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-steel-muted font-sans">
          {description}
        </p>
      </div>
    </section>
  );
}
