import { Download, Instagram, Youtube, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-steel-deep text-steel-foreground border-t border-steel-line" role="contentinfo">
      {/* 4-Column Layout */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        
        {/* Column 1: COMPANY */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
            COMPANY
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-steel-muted">
            <li>
              <Link to="/about" className="transition-colors hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="transition-colors hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="transition-colors hover:text-white">
                Catalog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-6">
            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-2 rounded-xs border border-primary/30 bg-primary/10 px-3.5 py-2 font-display text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="size-3.5" />
              Download Brochure (51 Pages)
            </a>
          </div>
        </div>

        {/* Column 2: SERVICES */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
            SERVICES
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-steel-muted">
            <li>
              <Link to="/services" className="transition-colors hover:text-white">
                Industrial Shed
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-white">
                Warehouse Shed
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-white">
                Godown Shed
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-white">
                MS Structure
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-white">
                Roofing
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-white">
                Mezzanine
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: CONTACT */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
            CONTACT
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-steel-muted">
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 shrink-0 text-primary" />
              <span>Noida, Uttar Pradesh</span>
            </li>
            <li>
              <a
                href={company.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-primary" />
                <span>+91 85279 77714</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-primary" />
                <span>{company.email}</span>
              </a>
            </li>
            <li className="font-mono text-xs text-steel-muted/80 pt-1">
              Mon – Sun · 8:00 AM – 8:00 PM
            </li>
          </ul>
        </div>

        {/* Column 4: SOCIAL */}
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-primary">
            SOCIAL
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-steel-muted">
            <li>
              <a
                href={company.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-red-400"
              >
                <Youtube className="size-4 shrink-0 text-red-500" />
                <span>YouTube (@DeepEnterprises-yu2vo)</span>
              </a>
            </li>
            <li>
              <a
                href={company.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-pink-400"
              >
                <Instagram className="size-4 shrink-0 text-pink-400" />
                <span>Instagram (@tinshadenoidawale)</span>
              </a>
            </li>
            <li>
              <a
                href={company.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-whatsapp"
              >
                <MessageCircle className="size-4 shrink-0 text-whatsapp" />
                <span>WhatsApp (+91 85279 77714)</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-line bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs text-steel-muted sm:px-6 lg:px-8">
          <p>© Tin Shade Noida Wale. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <span className="eyebrow rounded-xs border border-primary/30 bg-primary/10 px-2 py-0.5 text-[0.6rem] font-bold text-primary">
              PAN INDIA
            </span>
            Industrial Steel · Fabrication · Erection · Warehouse · Roofing
          </p>
        </div>
      </div>
    </footer>
  );
}
