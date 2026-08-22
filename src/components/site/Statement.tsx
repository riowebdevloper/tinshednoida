import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Compass } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Statement() {
  return (
    <section className="bg-warm-paper py-20 sm:py-32 border-b border-[#0B0D0F]/10 relative overflow-hidden arch-grid-pattern-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-[#B08A4A]" />
          <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
            FOUNDATIONAL PHILOSOPHY
          </span>
        </div>

        {/* Large Editorial Statement */}
        <div className="max-w-5xl">
          <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-7xl font-extrabold text-[#0B0D0F] tracking-tight leading-[1.08] uppercase">
            WE DON'T JUST <br />
            BUILD SHEDS. <br />
            <span className="text-[#B08A4A]">WE BUILD THE SPACE</span> <br />
            WHERE BUSINESS GROWS.
          </h2>

          <div className="mt-12 pt-8 border-t border-[#0B0D0F]/15 grid gap-8 md:grid-cols-12 items-start">
            
            <p className="md:col-span-7 text-base sm:text-lg text-[#525860] leading-relaxed font-sans">
              For over 15 years, Tin Shade Noida has engineered industrial infrastructure with a zero-compromise mindset. From heavy prime steel trusses fabricated in our Noida yard to precision crane erection on demanding industrial plots across India, we build assets engineered to outlast generations.
            </p>

            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-3 font-mono text-xs text-[#0B0D0F] font-bold">
                <ShieldCheck className="size-4 text-[#B08A4A] shrink-0" />
                <span>IS 2062 Certified Prime Steel Only</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#0B0D0F] font-bold">
                <Factory className="size-4 text-[#B08A4A] shrink-0" />
                <span>Direct Fabrication Shop in Noida Sector 10</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#0B0D0F] font-bold">
                <Compass className="size-4 text-[#B08A4A] shrink-0" />
                <span>Up to 120ft Clear Span Column-Free</span>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-display text-xs font-bold text-[#0B0D0F] hover:text-[#B08A4A] transition-colors uppercase tracking-wider"
                >
                  <span>Our Story &amp; Craftsmanship</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
