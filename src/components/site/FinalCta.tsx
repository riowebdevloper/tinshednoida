import { ArrowRight, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section
      aria-label="Final Engineering Call to Action"
      className="relative bg-[#0A1128] text-white py-24 sm:py-36 lg:py-44 border-t border-indigo-200/20 overflow-hidden"
    >
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 arch-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] bg-[#1E3A8A]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1 bg-[#101B3B] border border-indigo-200/25 rounded-[2px]">
          <span className="size-2 rounded-full bg-[#DC2626] animate-pulse" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold tracking-widest">
            START YOUR STRUCTURAL PROJECT TODAY
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-editorial-title text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase text-white leading-[1.03] tracking-tight mb-6">
          READY TO BUILD <br />
          <span className="text-[#F59E0B]">SOMETHING STRONG?</span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-base sm:text-lg text-[#C7D2FE] font-sans leading-relaxed mb-10">
          Get direct yard pricing, certified IS 2062 prime steel, and turnkey hydraulic crane erection. Talk directly with our master fabricators in Noida Sector 10.
        </p>

        {/* 3 High-Energy Conversion Triggers: Red, Yellow & Green/WhatsApp */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          
          <Link
            to="/quote"
            className="btn-red-primary text-sm py-4 px-8"
          >
            <span>CALCULATE PROJECT BOQ</span>
            <ArrowRight className="size-4" />
          </Link>

          <a
            href="tel:+918527977714"
            className="btn-yellow-primary text-sm py-4 px-8"
          >
            <Phone className="size-4" />
            <span>CALL: +91 85279 77714</span>
          </a>

          <a
            href="https://wa.me/918527977714?text=Hi%20Tin%20Shade%20Noida,%20I%20need%20a%20turnkey%20shed%20quote%20for%20my%20site."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy-outline text-sm py-4 px-8 hover:bg-[#25D366] hover:border-[#25D366] hover:text-black transition-colors"
          >
            <MessageSquare className="size-4 text-[#25D366]" />
            <span>WHATSAPP DRAWING</span>
          </a>

        </div>

        {/* Trust Badges in Safety Yellow */}
        <div className="pt-8 border-t border-indigo-200/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 font-mono text-xs text-[#8E9CB8]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-[#F59E0B]" />
            <span>IS 800:2007 Structural Compliance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#F59E0B] font-bold">✓</span>
            <span>Direct Noida Sector 10 Yard</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#F59E0B] font-bold">✓</span>
            <span>500+ Projects Across India</span>
          </div>
        </div>

      </div>
    </section>
  );
}
