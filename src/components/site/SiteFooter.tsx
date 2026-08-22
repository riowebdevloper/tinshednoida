import { Download, Instagram, Youtube, Phone, MessageCircle, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal-deep text-paper border-t border-white/10" role="contentinfo">
      
      <TrussDivider dark type="warren" />

      {/* 4-Column Industrial Engineering Ledger */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        
        {/* Column 1: YARD PROVENANCE */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold uppercase tracking-wide text-white">
              {company.name}
            </span>
          </div>

          <p className="text-xs leading-relaxed text-steel-muted font-sans">
            In-house structural steel fabrication yard in Noida Sector 10. Direct master fabricators delivering industrial factories, clear-span warehouses, and heavy MS frameworks across India.
          </p>

          <div className="pt-2">
            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-2 rounded-xs border border-safety/30 bg-charcoal px-3.5 py-2 font-display text-xs font-bold uppercase tracking-wider text-safety hover:bg-safety hover:text-charcoal transition-colors"
            >
              <Download className="size-3.5" />
              <span>51-Page Work Catalog (PDF)</span>
            </a>
          </div>
        </div>

        {/* Column 2: STRUCTURAL SCOPE */}
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-safety">
            STRUCTURAL CAPABILITIES
          </h3>
          <ul className="mt-4 space-y-2 font-mono text-xs text-steel-muted">
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Industrial Factory Sheds
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Clear-Span Warehouses (Up to 120ft)
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Heavy MS Structures &amp; Trusses
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Pre-Engineered Buildings (PEB)
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                0.50mm Galvalume &amp; PUF Roofing
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Heavy-Duty Mezzanine Floors
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: YARD LOCATION & CONTACT */}
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-safety">
            YARD &amp; CONTACT
          </h3>
          <ul className="mt-4 space-y-3 font-mono text-xs text-steel-muted">
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 shrink-0 text-safety" />
              <span>D179 Sector 10, Noida, Uttar Pradesh 201301</span>
            </li>
            <li>
              <a
                href="tel:+918527977714"
                className="flex items-center gap-2.5 hover:text-white transition-colors text-paper"
              >
                <Phone className="size-4 shrink-0 text-safety" />
                <span>+91 85279 77714</span>
              </a>
            </li>
            <li>
              <a
                href={company.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors text-paper"
              >
                <MessageCircle className="size-4 shrink-0 text-safety" />
                <span>WhatsApp: +91 85279 77714</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="size-4 shrink-0 text-safety" />
                <span>{company.email}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: IS STANDARDS & SOCIAL */}
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-safety">
            IS CODE COMPLIANCE
          </h3>
          <div className="mt-4 rounded-xs border border-white/10 bg-charcoal p-3 font-mono text-[0.6875rem] text-steel-muted space-y-1.5">
            <p><strong className="text-paper">IS 2062:</strong> Structural Steel E250</p>
            <p><strong className="text-paper">IS 800:2007:</strong> General Construction in Steel</p>
            <p><strong className="text-paper">IS 875:</strong> Design Loads (Wind &amp; Dead)</p>
            <p><strong className="text-paper">IS 816:</strong> Metal Arc Welding Code</p>
            <p><strong className="text-paper">IS 2074:</strong> Red Oxide Zinc Phosphate Primer</p>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <a
              href={company.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube Channel"
              className="inline-flex size-8 items-center justify-center rounded-xs bg-charcoal text-paper hover:text-red-500 border border-white/15 transition-colors"
            >
              <Youtube className="size-4" />
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
              className="inline-flex size-8 items-center justify-center rounded-xs bg-charcoal text-paper hover:text-pink-400 border border-white/15 transition-colors"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={company.whatsappText}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Contact"
              className="inline-flex size-8 items-center justify-center rounded-xs bg-charcoal text-paper hover:text-safety border border-white/15 transition-colors"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

      </div>

      {/* ──────── BOTTOM METADATA BAR ──────── */}
      <div className="border-t border-white/10 bg-black/50 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 text-xs font-mono text-steel-muted sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Tin Shade Noida (Deep Enterprises). All Rights Reserved.</p>
          <p className="text-[0.6875rem]">
            Direct Yard: D179 Sector 10 Noida · Pan-India Crane Erection
          </p>
        </div>
      </div>
    </footer>
  );
}
