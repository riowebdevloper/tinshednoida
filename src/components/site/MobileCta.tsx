import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Ruler } from "lucide-react";
import { company } from "@/lib/site-data";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-charcoal/20 bg-charcoal text-paper sm:hidden shadow-elevated">
      <a
        href={company.phoneHref}
        className="flex flex-col items-center justify-center gap-1 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-paper hover:text-safety transition-colors"
      >
        <Phone className="size-4 text-safety" />
        <span>Call Yard</span>
      </a>
      
      <a
        href={company.whatsappText}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 border-x border-white/10 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-paper hover:text-safety transition-colors"
      >
        <MessageCircle className="size-4 text-safety" />
        <span>WhatsApp</span>
      </a>

      <Link
        to="/quote"
        className="flex flex-col items-center justify-center gap-1 bg-safety py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-charcoal"
      >
        <Ruler className="size-4 text-charcoal" />
        <span>Get Quote</span>
      </Link>
    </div>
  );
}
