import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { Assistant } from "./Assistant";
import { MobileCta } from "./MobileCta";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0A1128] text-white selection:bg-[#F59E0B] selection:text-[#0A1128] flex flex-col justify-between">
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
    <section className="relative isolate overflow-hidden bg-[#0A1128] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 border-b border-indigo-200/15 arch-grid-pattern">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            {eyebrow}
          </span>
        </div>
        <h1 className="max-w-4xl font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.06]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#C7D2FE] font-sans">
          {description}
        </p>
      </div>
    </section>
  );
}
