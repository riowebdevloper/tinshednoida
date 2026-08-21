import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

export function FinalCta() {
  return (
    <section id="cta" className="bg-steel-deep text-steel-foreground py-16 lg:py-20 border-b border-steel-line">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white">
          Need an industrial shed?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-steel-muted leading-relaxed">
          Tell us your requirement — we visit your site and share a quotation.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+918527977714"
            className="inline-flex items-center gap-2 rounded-sm border border-steel-line px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="size-4" />
            +91 85279 77714
          </a>
          <a
            href={company.whatsappText}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-steel-line px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-px"
          >
            Get Quote
            <ArrowRight className="size-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
