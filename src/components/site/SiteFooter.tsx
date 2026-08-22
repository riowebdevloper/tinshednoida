import { Download, Instagram, Youtube, Phone, MessageCircle, Mail, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import { TrussDivider } from "./TrussDivider";

export function SiteFooter() {
  return (
    <footer className="bg-[#050811] text-white border-t border-white/10" role="contentinfo">
      
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

          <p className="text-xs leading-relaxed text-slate-400 font-sans">
            In-house structural steel fabrication yard in Noida Sector 10. Direct master fabricators delivering industrial factories, clear-span warehouses, and heavy MS frameworks across India.
          </p>

          <div className="pt-2">
            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-2 rounded-xs border border-amber-400/30 bg-[#0E1726] px-3.5 py-2 font-display text-xs font-bold uppercase tracking-wider text-amber-400 hover:bg-amber-400 hover:text-slate-950 transition-colors"
            >
              <Download className="size-3.5" />
              <span>51-Page Work Catalog (PDF)</span>
            </a>
          </div>
        </div>

        {/* Column 2: STRUCTURAL SCOPE */}
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
            STRUCTURAL CAPABILITIES
          </h3>
          <ul className="mt-4 space-y-2 font-mono text-xs text-slate-400">
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
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
            YARD &amp; CONTACT
          </h3>
          <ul className="mt-4 space-y-3 font-mono text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 shrink-0 text-amber-400" />
              <span>D179 Sector 10, Noida, Uttar Pradesh 201301</span>
            </li>
            <li>
              <a
                href="tel:+918527977714"
                className="flex items-center gap-2.5 hover:text-white transition-colors text-white"
              >
                <Phone className="size-4 shrink-0 text-amber-400" />
                <span className="tabular-nums">+91 85279 77714</span>
              </a>
            </li>
            <li>
              <a
                href={company.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors text-emerald-400"
              >
                <MessageCircle className="size-4 shrink-0 text-emerald-400" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@tinshednoida.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors text-slate-300"
              >
                <Mail className="size-4 shrink-0 text-sky-400" />
                <span>contact@tinshednoida.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: IS STANDARDS & HOURS */}
        <div>
          <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-amber-400">
            ENGINEERING CODES
          </h3>
          <div className="mt-4 space-y-2 font-mono text-xs text-slate-400">
            <p><strong className="text-white">IS 2062:</strong> Prime Structural Mild Steel</p>
            <p><strong className="text-white">IS 800:2007:</strong> General Construction in Steel</p>
            <p><strong className="text-white">IS 875:</strong> Design Loads (Wind &amp; Dead)</p>
            <p><strong className="text-white">IS 816:</strong> Metal Arc Welding Protocol</p>
            <p><strong className="text-white">IS 2074:</strong> Red Oxide Zinc Phosphate Primer</p>
          </div>

          <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-3">
            <a
              href={company.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-red-400 transition-colors"
              title="YouTube"
            >
              <Youtube className="size-4" />
            </a>
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-pink-400 transition-colors"
              title="Instagram"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-white/10 bg-[#04060C] py-5 text-center text-xs font-mono text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {company.name}. Direct In-House Steel Fabrication Yard · Sector 10 Noida, UP.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>·</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>·</span>
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>·</span>
            <Link to="/catalog" className="hover:text-white transition-colors">Catalog (51 Pages)</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
