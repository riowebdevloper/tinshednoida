import { ArrowRight, Phone, MessageCircle, Download, ShieldCheck, Mail, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section className="relative bg-[#0B0D0F] text-white py-24 sm:py-36 border-t border-white/10 overflow-hidden arch-grid-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#B08A4A]" />
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
              START YOUR PROJECT
            </span>
          </div>

          {/* Dramatic Large Headline */}
          <h2 className="font-editorial-title text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase leading-[1.04]">
            READY TO BUILD <br />
            <span className="text-[#B08A4A]">SOMETHING STRONG?</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#8C9398] font-sans leading-relaxed max-w-2xl">
            Whether you need a 2,500 sq.ft storage shed or a 100,000+ sq.ft industrial manufacturing complex, speak directly with our senior fabrication engineers in Noida.
          </p>

          {/* 3 Dramatic Primary Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/quote"
              className="btn-arch-primary py-4 px-8 text-sm"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="size-4" />
            </Link>

            <a
              href="tel:+918527977714"
              className="btn-arch-secondary py-4 px-8 text-sm"
            >
              <Phone className="size-4 text-[#B08A4A]" />
              <span>CALL NOW: +91 85279 77714</span>
            </a>

            <a
              href={company.whatsappText}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-4 px-6 border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 hover:text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors"
            >
              <MessageCircle className="size-4 text-emerald-400" />
              <span>WHATSAPP DIRECT</span>
            </a>
          </div>

          {/* Direct Address & Trust Strip */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-[#8C9398]">
            <div className="flex items-center gap-2">
              <MapPin className="size-3.5 text-[#B08A4A]" />
              <span>D179 Sector 10, Noida, UP 201301</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="size-3.5 text-[#B08A4A]" />
              <span>tinshadenoida@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-3.5 text-[#B08A4A]" />
              <span>IS 2062 Certified Prime Mild Steel</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
