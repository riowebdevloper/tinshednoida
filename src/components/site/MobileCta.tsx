import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

export function MobileCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0A1128]/95 backdrop-blur-md border-t border-indigo-200/20 p-2 px-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 font-display text-[0.6875rem] font-bold uppercase tracking-wider">
        
        {/* Call Button in Yellow */}
        <a
          href={company.phoneHref}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#F59E0B] text-[#0A1128] hover:bg-[#FBBF24] font-extrabold rounded-[2px]"
          aria-label="Call yard directly"
        >
          <Phone className="size-3.5 text-[#0A1128]" />
          <span>CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={company.whatsappText}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#25D366] text-black hover:bg-[#1EBE5D] font-bold rounded-[2px]"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="size-3.5" />
          <span>WHATSAPP</span>
        </a>

        {/* Quote Button in Precision Red */}
        <Link
          to="/quote"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#DC2626] text-white hover:bg-[#EF4444] font-extrabold rounded-[2px] shadow-sm"
          aria-label="Request quote"
        >
          <span>QUOTE</span>
          <ArrowRight className="size-3" />
        </Link>

      </div>
    </div>
  );
}
