import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, Ruler } from "lucide-react";
import { company } from "@/lib/site-data";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-[#0A101D] text-white sm:hidden shadow-2xl backdrop-blur-lg">
      <a
        href={company.phoneHref}
        className="flex flex-col items-center justify-center gap-1 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors"
      >
        <Phone className="size-4 text-amber-400" />
        <span>Call Yard</span>
      </a>
      
      <a
        href={company.whatsappText}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-1 border-x border-white/10 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-slate-300 hover:text-emerald-400 transition-colors"
      >
        <MessageCircle className="size-4 text-emerald-400" />
        <span>WhatsApp</span>
      </a>

      <Link
        to="/quote"
        className="flex flex-col items-center justify-center gap-1 bg-amber-400 py-2.5 font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-slate-950"
      >
        <Ruler className="size-4 text-slate-950" />
        <span>Get Quote</span>
      </Link>
    </div>
  );
}
