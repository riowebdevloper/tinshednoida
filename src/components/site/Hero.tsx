import { ArrowRight, HardHat, Phone, Ruler, ArrowDown, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Tin Shade Noida — Industrial Steel Fabrication & Erection"
      className="relative w-full overflow-hidden bg-[#0B192C] text-white"
    >
      {/* ──────── AUTHENTIC CRANE ERECTION VISUAL ──────── */}
      <div className="relative min-h-[70vh] lg:min-h-[78vh] w-full flex items-center justify-center">
        
        {/* Real On-Site Crane Hoisting Imagery with natural lighting */}
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
              className="size-full object-cover object-center brightness-[0.38] contrast-[1.10]"
            />
          </picture>

          {/* Clean Vignette Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/60 to-[#0B192C]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Direct Yard Identification Tag */}
            <div className="inline-flex items-center gap-2 rounded-xs border border-white/20 bg-[#0E2A47]/90 px-3 py-1 text-xs font-mono text-amber-400 mb-4">
              <HardHat className="size-3.5" aria-hidden="true" />
              <span className="font-semibold">IN-HOUSE FABRICATION YARD · NOIDA SECTOR 10</span>
            </div>

            {/* Main Signage Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Heavy-Duty Industrial Sheds &amp;{" "}
              <span className="text-amber-400">
                Structural Steel Fabrication
              </span>
            </h1>

            {/* Description in Plus Jakarta Sans */}
            <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-200 max-w-2xl font-sans">
              From 2,000 to 100,000+ sq. ft. manufacturing factories, logistics warehouses, and heavy MS frameworks. In-house fabrication shop in Noida Sector 10 with turnkey crane erection nationwide.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/quote"
                className="btn-corp-primary"
              >
                <span>Get a Structural Quote</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <a
                href="#estimator"
                className="btn-corp-navy-outline"
              >
                <Ruler className="size-4 text-amber-400" aria-hidden="true" />
                <span>Interactive Steel Estimator</span>
              </a>
            </div>

            {/* Technical Metadata Ledger in JetBrains Mono */}
            <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-3.5 text-amber-400" />
                <span>IS 2062 Certified Prime Steel</span>
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-amber-400" />
                <span>IS 800:2007 Structural Code</span>
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-amber-400" />
                <span>Spans Up to <strong className="text-white tabular-nums">120 FT</strong> Column-Free</span>
              </span>
            </div>

          </div>
        </div>

      </div>

      <TrussDivider dark type="warren" />
    </section>
  );
}
