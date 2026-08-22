import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Assistant } from "./Assistant";
import { MobileCta } from "./MobileCta";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-amber-500 selection:text-white flex flex-col justify-between">
      <div>
        <SiteHeader />
        <main id="main-content" className="pb-16 sm:pb-0">
          {children}
        </main>
      </div>
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
    <section className="relative isolate overflow-hidden bg-[#0B192C] px-5 pb-14 pt-16 text-white sm:px-6 lg:px-10 lg:pb-18 lg:pt-20 border-b border-white/10">
      <div className="relative mx-auto max-w-7xl">
        <span className="font-mono text-xs font-semibold text-amber-400 uppercase tracking-tight block mb-2">
          {eyebrow}
        </span>
        <h1 className="max-w-4xl font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300 font-sans">
          {description}
        </p>
      </div>
    </section>
  );
}
