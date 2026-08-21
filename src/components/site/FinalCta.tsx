import { ArrowRight, Calculator, HardHat, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section id="cta" className="bg-steel-deep text-steel-foreground py-16 lg:py-24 border-b border-steel-line">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-flex items-center gap-2 rounded-xs border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-primary">
          <HardHat className="size-3.5" />
          START YOUR STRUCTURAL PROJECT
        </div>

        <h2 className="mt-4 font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-tight text-white">
          NEED AN INDUSTRIAL SHED OR
          <span className="block text-primary">STEEL STRUCTURE BUILT?</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-steel-muted leading-relaxed">
          Share your land dimensions or architectural drawings. Our senior engineer will physically visit your site and provide an itemized BOQ quotation within 24 hours.
        </p>

        {/* Action Button Cluster */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+918527977714"
            className="inline-flex items-center justify-center gap-2 rounded-xs border border-steel-line bg-steel px-6 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-primary hover:bg-steel/80"
          >
            <Phone className="size-4 text-primary" />
            <span>Call: +91 85279 77714</span>
          </a>

          <a
            href={company.whatsappText}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xs bg-whatsapp px-6 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:opacity-95"
          >
            <MessageCircle className="size-4" />
            <span>Discuss on WhatsApp</span>
          </a>

          <Link
            to="/quote"
            className="inline-flex items-center justify-center gap-2 rounded-xs bg-primary px-7 py-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-elevated transition-transform hover:-translate-y-px"
          >
            <span>Request Free Site Visit</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Direct Contact Ledger */}
        <div className="mt-12 pt-8 border-t border-steel-line/70 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-steel-muted">
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold">Yard:</span>
            <span>D179 Sector 10, Noida, UP</span>
          </div>
          <span className="hidden sm:inline text-steel-line">·</span>
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold">Email:</span>
            <a href={`mailto:${company.email}`} className="text-primary hover:underline">{company.email}</a>
          </div>
          <span className="hidden sm:inline text-steel-line">·</span>
          <div className="flex items-center gap-1.5">
            <span className="text-white font-bold">Hours:</span>
            <span>Mon–Sun 8:00 AM – 8:00 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
}
