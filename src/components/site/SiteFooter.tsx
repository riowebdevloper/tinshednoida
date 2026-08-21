import { Download, Instagram, Youtube, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, nav, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-steel-deep text-steel-foreground" role="contentinfo">
      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12 lg:px-10">
        {/* Brand + Tagline + Social */}
        <div className="md:col-span-5 lg:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src={company.logo}
              alt="Tin Shade Noida"
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
            <span className="font-display text-lg font-bold text-white">{company.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-muted">
            Professional tin shed, MS structure, PEB structure, warehouse and industrial roofing
            solutions — Pan India since {company.since}.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Tin Shade Noida on Instagram"
              className="group flex size-9 items-center justify-center rounded-sm border border-steel-line bg-steel/60 text-steel-muted transition-all hover:border-pink-500/60 hover:bg-pink-500/10 hover:text-pink-400"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={company.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="Tin Shade Noida on YouTube"
              className="group flex size-9 items-center justify-center rounded-sm border border-steel-line bg-steel/60 text-steel-muted transition-all hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-400"
            >
              <Youtube className="size-4" />
            </a>
            <a
              href={company.whatsappText}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Tin Shade Noida"
              className="group flex size-9 items-center justify-center rounded-sm border border-steel-line bg-steel/60 text-steel-muted transition-all hover:border-whatsapp/60 hover:bg-whatsapp/10 hover:text-whatsapp"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>

          {/* Download Brochure */}
          <a
            href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
            download="TIN_SHADE_NOIDA_CATALOG.pdf"
            className="mt-6 inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/10 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Download className="size-3.5" />
            Download Project Brochure (4.5MB)
          </a>
        </div>

        {/* Navigate */}
        <nav className="md:col-span-3 lg:col-span-2" aria-label="Footer navigation">
          <p className="eyebrow text-primary">Navigate</p>
          <ul className="mt-4 space-y-2.5 text-sm text-steel-muted">
            {nav.map((item) => (
              <li key={item.to}>
                <Link className="transition-colors hover:text-steel-foreground" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div className="md:col-span-4 lg:col-span-3">
          <p className="eyebrow text-primary">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm text-steel-muted">
            {services.map((service) => (
              <li key={service.code} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-primary/60 shrink-0" />
                {service.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-12 lg:col-span-3">
          <p className="eyebrow text-primary">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-steel-muted">
            <li>
              <a
                href={company.phoneHref}
                className="flex items-start gap-2.5 transition-colors hover:text-steel-foreground"
              >
                <Phone className="size-4 mt-0.5 shrink-0 text-primary" />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-2.5 transition-colors hover:text-steel-foreground"
              >
                <Mail className="size-4 mt-0.5 shrink-0 text-primary" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 mt-0.5 shrink-0 text-primary" />
              {company.address}
            </li>
            <li className="text-xs text-steel-muted/80">{company.hours}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-steel-muted lg:px-10">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="eyebrow rounded-sm border border-primary/30 bg-primary/10 px-2 py-0.5 text-[0.6rem] font-bold text-primary">
              PAN INDIA
            </span>
            Industrial Shed · MS Structure · PEB · Warehouse · Roofing
          </p>
        </div>
      </div>
    </footer>
  );
}
