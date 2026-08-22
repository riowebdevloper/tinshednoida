import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Ruler } from "lucide-react";
import { company } from "@/lib/site-data";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white text-slate-900 sm:hidden shadow-2xl">
      <a
        href={company.phoneHref}
        className="flex flex-col items-center justify-center gap-1 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors"
      >
        <Phone className="size-4 text-amber-600" />
        <span>Call Yard</span>
      </a>
      
      <a
        href={company.whatsappText}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 border-x border-slate-200 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-slate-800 hover:text-emerald-600 transition-colors"
      >
        <MessageCircle className="size-4 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

      <Link
        to="/quote"
        className="flex flex-col items-center justify-center gap-1 bg-[#0E2A47] text-white py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-wider"
      >
        <Ruler className="size-4 text-amber-400" />
        <span>Get Quote</span>
      </Link>
    </div>
  );
}
