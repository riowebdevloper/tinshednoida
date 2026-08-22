import { ArrowRight, HardHat, Phone, ShieldCheck, Ruler, ArrowDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Tin Shade Noida — Industrial Steel Fabrication & Erection"
      className="relative w-full overflow-hidden bg-charcoal text-paper"
    >
      {/* ──────── HIGH-IMPACT REAL SITE EXECUTION HERO ──────── */}
      <div className="relative min-h-[72vh] lg:min-h-[78vh] w-full flex items-center justify-center">
        
        {/* Actual On-Site Crane Erection Visual */}
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
              className="size-full object-cover object-center brightness-[0.42] contrast-[1.12]"
            />
          </picture>

          {/* Technical blueprint grid overlay */}
          <div className="absolute inset-0 cad-grid-dark opacity-35" />

          {/* Vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/70" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Real Yard Identification Tag */}
            <div className="inline-flex items-center gap-2 rounded-xs border border-safety/40 bg-charcoal-deep/90 px-3 py-1.5 text-xs font-mono font-semibold text-safety backdrop-blur-md mb-4 shadow-sm">
              <HardHat className="size-3.5 text-safety" aria-hidden="true" />
              <span>DIRECT FABRICATION YARD · NOIDA SECTOR 10</span>
            </div>

            {/* Main Signage Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white uppercase">
              Heavy-Duty Industrial Sheds &amp;{" "}
              <span className="text-safety block sm:inline">Structural Steel Fabrication</span>
            </h1>

            {/* Material & Capability Description */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-paper/90 max-w-2xl font-sans">
              From 2,000 to 100,000+ sq. ft. manufacturing factories, logistics warehouses, and heavy MS frameworks. In-house fabrication shop in Noida Sector 10 with turnkey crane erection across India.
            </p>

            {/* Single Primary Action Cluster */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2.5 rounded-xs bg-safety px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-charcoal shadow-elevated transition-transform hover:-translate-y-0.5 active:translate-y-0 border border-charcoal/30 text-center"
              >
                <span>Get a Structural Quote</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <a
                href="#estimator"
                className="inline-flex items-center justify-center gap-2 rounded-xs border border-white/25 bg-charcoal/80 px-5 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-paper hover:border-safety hover:text-safety transition-colors backdrop-blur-sm text-center"
              >
                <span>Live Steel Estimator</span>
                <ArrowDown className="size-3.5 text-safety" aria-hidden="true" />
              </a>
            </div>

            {/* Real Field Provenance Stamp */}
            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-paper/75">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-safety" />
                IS 2062 Certified Prime Mild Steel
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-safety" />
                IS 800:2007 Structural Compliance
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-safety" />
                Max 120 Ft Column-Free Clear Span
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Signature CAD Elevation Truss Divider Transition */}
      <TrussDivider dark type="warren" />
    </section>
  );
}
