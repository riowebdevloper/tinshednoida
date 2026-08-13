import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Assistant } from "./Assistant";
import { MobileCta } from "./MobileCta";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main-content" className="pb-16 sm:pb-0">{children}</main>
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
    <section className="relative isolate overflow-hidden bg-steel-deep px-5 pb-14 pt-24 text-steel-foreground sm:px-6 lg:px-10 lg:pb-20 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow flex items-center gap-3 text-primary">
          <span className="h-px w-10 bg-primary" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold uppercase leading-[0.98] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
