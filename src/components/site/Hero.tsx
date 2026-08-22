import { ArrowRight, HardHat, Phone, Ruler, ArrowDown } from "lucide-react";
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
      {/* ──────── ONE AUTHENTIC CRANE ERECTION VISUAL ──────── */}
      <div className="relative min-h-[68vh] lg:min-h-[74vh] w-full flex items-center justify-center">
        
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
              className="size-full object-cover object-center brightness-[0.40] contrast-[1.10]"
            />
          </picture>

          {/* Hairline blueprint grid */}
          <div className="absolute inset-0 cad-grid-dark opacity-30" />

          {/* Vignette gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/70" />
        </div>

        {/* Hero Content Overlay */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 w-full">
          <div className="max-w-3xl">
            
            {/* Understated Yard Identification Tag (Tight tracking, small 12px) */}
            <div className="inline-flex items-center gap-2 rounded-xs border border-white/20 bg-charcoal-deep/90 px-2.5 py-1 text-xs font-mono text-safety mb-4">
              <HardHat className="size-3 text-safety" aria-hidden="true" />
              <span>DIRECT FABRICATION YARD · NOIDA SECTOR 10</span>
            </div>

            {/* Main Signage Headline (Line-height 1.12, Barlow Condensed 700) */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-normal text-white uppercase">
              Heavy-Duty Industrial Sheds &amp;{" "}
              <span className="text-safety">Structural Steel Fabrication</span>
            </h1>

            {/* Description in IBM Plex Sans (weight 400, legible at job site) */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-paper/85 max-w-2xl font-sans">
              From 2,000 to 100,000+ sq. ft. manufacturing factories, logistics warehouses, and heavy MS frameworks. In-house fabrication shop in Noida Sector 10 with turnkey crane erection nationwide.
            </p>

            {/* Single Primary Action Cluster */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                to="/quote"
                className="btn-primary"
              >
                <span>Get a Quote</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <a
                href="#estimator"
                className="inline-flex items-center gap-2 rounded-xs border border-white/25 bg-charcoal/70 px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wide text-paper hover:border-safety hover:text-safety transition-colors"
              >
                <span>Steel Estimator</span>
                <ArrowDown className="size-3.5 text-safety" aria-hidden="true" />
              </a>
            </div>

            {/* Technical Metadata in IBM Plex Mono Tabular Nums */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-paper/75">
              <span className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-safety" />
                IS 2062 Certified Prime Steel
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-safety" />
                IS 800:2007 Structural Code
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-safety" />
                Spans Up to <strong className="text-paper tabular-nums">120 FT</strong> Column-Free
              </span>
            </div>

          </div>
        </div>

      </div>

      <TrussDivider dark type="warren" />
    </section>
  );
}
