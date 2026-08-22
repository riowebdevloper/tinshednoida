import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

export function MobileCta() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0B0D0F]/95 backdrop-blur-md border-t border-white/15 p-2 px-3 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 font-display text-[0.6875rem] font-bold uppercase tracking-wider">
        
        {/* Call Button */}
        <a
          href={company.phoneHref}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-white/10 text-white hover:bg-white/20 border border-white/15 rounded-[2px]"
          aria-label="Call yard directly"
        >
          <Phone className="size-3.5 text-[#B08A4A]" />
          <span>CALL</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={company.whatsappText}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#16A34A] text-white hover:bg-[#15803D] rounded-[2px]"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="size-3.5" />
          <span>WHATSAPP</span>
        </a>

        {/* Quote Button */}
        <Link
          to="/quote"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 bg-[#B08A4A] text-[#0B0D0F] hover:bg-[#C59D5B] font-extrabold rounded-[2px]"
          aria-label="Request quote"
        >
          <span>QUOTE</span>
          <ArrowRight className="size-3" />
        </Link>

      </div>
    </div>
  );
}
