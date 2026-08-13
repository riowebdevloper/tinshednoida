import { MessageCircle, Phone, Ruler } from "lucide-react";
import { company } from "@/lib/site-data";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-card/95 backdrop-blur sm:hidden">
      <a
        href={company.phoneHref}
        className="flex flex-col items-center gap-1 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-foreground"
      >
        <Phone className="size-5 text-primary" />
        Call
      </a>
      <a
        href={company.whatsappText}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center gap-1 border-x border-border py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-foreground"
      >
        <MessageCircle className="size-5 text-whatsapp" />
        WhatsApp
      </a>
      <a
        href="/quote"
        className="flex flex-col items-center gap-1 bg-primary py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-primary-foreground"
      >
        <Ruler className="size-5" />
        Get Quote
      </a>
    </div>
  );
}
