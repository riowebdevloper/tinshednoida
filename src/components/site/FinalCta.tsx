import { ArrowRight, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section
      id="cta"
      className="content-auto relative isolate overflow-hidden bg-steel-deep text-steel-foreground py-20 lg:py-28 border-b border-steel-line"
    >
      {/* Blueprint grid effect */}
      <div className="pointer-events-none absolute inset-0 grid-blueprint opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        <Reveal className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-xs border border-primary/40 bg-primary/10 px-3.5 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-primary">
            <Sparkles className="size-3.5" />
            FREE SITE VISIT & CONSULTATION ACROSS INDIA
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase leading-tight tracking-tight text-white">
            READY TO BUILD
            <span className="block text-primary">YOUR NEXT SHED?</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base sm:text-xl text-steel-muted leading-relaxed">
            Get a free site visit and quotation for your industrial or commercial structure.
          </p>

          {/* 3 Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* CALL NOW */}
            <a
              href="tel:+918527977714"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm border border-steel-line bg-steel px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:border-primary hover:bg-steel/80 hover:scale-102"
            >
              <Phone className="size-4.5 text-primary" />
              CALL NOW
            </a>

            {/* WHATSAPP */}
            <a
              href={company.whatsappText}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-whatsapp px-7 py-4 font-display text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:opacity-95 hover:scale-102"
            >
              <MessageCircle className="size-4.5" />
              WHATSAPP
            </a>

            {/* GET FREE QUOTE */}
            <Link
              to="/quote"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg transition-all hover:opacity-95 hover:scale-102"
            >
              GET FREE QUOTE
              <ArrowRight className="size-4.5" />
            </Link>
          </div>

          {/* Direct Contact Links Strip */}
          <div className="pt-8 border-t border-steel-line/70 flex flex-wrap items-center justify-center gap-6 text-sm text-steel-muted">
            <a
              href="tel:+918527977714"
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Phone className="size-4 text-primary" />
              <span>+91 85279 77714</span>
            </a>

            <span className="hidden sm:inline text-steel-line">|</span>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <Mail className="size-4 text-primary" />
              <span>{company.email}</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
