import { ArrowRight, HardHat, Phone, Ruler, ArrowDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Tin Shade Noida — Industrial Steel Fabrication & Erection"
      className="relative w-full overflow-hidden bg-navy-obsidian text-white"
    >
      {/* ──────── CINEMATIC CRANE ERECTION VISUAL ──────── */}
      <div className="relative min-h-[72vh] lg:min-h-[80vh] w-full flex items-center justify-center">
        
        {/* Real On-Site Crane Hoisting Imagery */}
        <div className="absolute inset-0 size-full z-0 overflow-hidden">
          <picture>
            <source srcSet="/images/hero/hero-slide-03.webp" type="image/webp" />
            <source srcSet="/images/hero/hero-slide-03.jpg" type="image/jpeg" />
            <img
              src="/images/hero/hero-slide-03.webp"
              alt="Active on-site heavy crane erection of industrial structural steel trusses by Tin Shade Noida"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              width={1920}
              height={900}
              className="size-full object-cover object-center brightness-[0.32] contrast-[1.15]"
            />
          </picture>

          {/* Hairline blueprint grid */}
          <div className="absolute inset-0 blueprint-grid opacity-50" />

          {/* Deep Navy Vignette & Glow Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A] via-[#080D1A]/50 to-[#080D1A]/80" />
          <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Understated Yard Identification Tag */}
            <div className="inline-flex items-center gap-2 rounded-xs border border-sky-400/30 bg-sky-950/70 px-3 py-1 text-xs font-mono text-sky-300 mb-5 backdrop-blur-md">
              <HardHat className="size-3.5 text-amber-400" aria-hidden="true" />
              <span className="font-semibold">DIRECT FABRICATION YARD · NOIDA SECTOR 10</span>
            </div>

            {/* Main Signage Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Heavy-Duty Industrial Sheds &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Structural Steel Fabrication
              </span>
            </h1>

            {/* Description in Plus Jakarta Sans */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300 max-w-2xl font-sans font-normal">
              Direct structural fabrication from 2,000 to 100,000+ sq. ft. manufacturing plants, logistics godowns, and heavy crane gantries. In-house shop fabrication in Noida with nationwide turnkey crane erection.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/quote"
                className="btn-elite"
              >
                <span>Get a Structural Quote</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <a
                href="#estimator"
                className="btn-navy-outline"
              >
                <Ruler className="size-4 text-sky-400" aria-hidden="true" />
                <span>Interactive Steel Estimator</span>
              </a>
            </div>

            {/* Technical Metadata Ledger in JetBrains Mono */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-3.5 text-sky-400" />
                <span>IS 2062 Prime Mild Steel</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-amber-400" />
                <span>IS 800:2007 Structural Code</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-sky-400" />
                <span>Max <strong className="text-white tabular-nums">120 FT</strong> Clear-Span</span>
              </span>
            </div>

          </div>
        </div>

      </div>

      <TrussDivider dark type="warren" />
    </section>
  );
}
