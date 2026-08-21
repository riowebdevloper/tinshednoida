import { useEffect, useState } from "react";
import { Download, Menu, Phone, X, MessageCircle, Calculator, FileText, ArrowRight } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { company, nav } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* ──────── HIGH-UTILITY ENGINEERING TOP BAR ──────── */}
      <div
        className={`hidden overflow-hidden bg-black text-white/90 border-b border-white/10 transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs font-mono">
          {/* Active sites status indicator */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              ACTIVE FABRICATION YARD:
            </span>
            <span className="text-white/80">D179 Sector 10, Noida · Pan India Erection</span>
          </div>

          {/* Quick contact and catalog download */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+918527977714"
              className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-primary"
            >
              <Phone className="size-3.5 text-primary" />
              <span>+91 85279 77714</span>
            </a>

            <span className="h-3 w-px bg-white/20" />

            <a
              href={`mailto:${company.email}`}
              className="text-white/80 transition-colors hover:text-primary"
            >
              {company.email}
            </a>

            <span className="h-3 w-px bg-white/20" />

            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-1.5 font-bold text-primary transition-colors hover:text-white"
            >
              <Download className="size-3.5" />
              51-Page Catalog PDF
            </a>
          </div>
        </div>
      </div>

      {/* ──────── MAIN ARCHITECTURAL NAVIGATION BAR ──────── */}
      <div
        className={`border-b border-border/80 bg-background/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-card py-2.5" : "py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo & Tagline */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label={`${company.name} home`}
          >
            <img
              src={company.logo}
              alt="Tin Shade Noida"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"
              }`}
            />
            <div className="leading-tight hidden sm:block">
              <span className="block font-display text-lg font-extrabold uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                {company.name}
              </span>
              <span className="block font-mono text-[0.65rem] text-muted-foreground uppercase tracking-widest">
                Structural Steel & Industrial Sheds
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 font-display text-sm font-bold uppercase tracking-wider text-foreground">
            {nav.map((item) => {
              const isActive = item.to ? currentPath === item.to : false;
              
              if (item.hash) {
                return (
                  <Link
                    key={item.label}
                    to="/"
                    hash={item.hash}
                    className="px-3.5 py-2 transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to ?? "/"}
                  className={`px-3.5 py-2 transition-colors hover:text-primary ${
                    isActive ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* WhatsApp */}
            <a
              href={company.whatsappText}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation"
              className="inline-flex items-center gap-1.5 rounded-xs border border-whatsapp/40 bg-whatsapp/10 px-3.5 py-2 font-display text-xs font-bold uppercase tracking-wide text-whatsapp transition-all hover:bg-whatsapp hover:text-white"
            >
              <MessageCircle className="size-4" />
              <span>WhatsApp</span>
            </a>

            {/* Request Quotation */}
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 rounded-xs bg-primary px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-xs transition-transform hover:-translate-y-px hover:shadow-md"
            >
              <span>Get Free Quotation</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+918527977714"
              className="flex size-9 items-center justify-center rounded-xs bg-primary text-primary-foreground"
              aria-label="Call Now"
            >
              <Phone className="size-4" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="flex size-9 items-center justify-center rounded-xs border border-border bg-card text-foreground"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ──────── MOBILE NAVIGATION DRAWER ──────── */}
      {open && (
        <div className="fixed inset-0 top-[60px] z-50 flex flex-col bg-background/98 p-6 backdrop-blur-xl lg:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-2 font-display text-lg font-bold uppercase tracking-wider text-foreground">
            {nav.map((item) => {
              if (item.hash) {
                return (
                  <Link
                    key={item.label}
                    to="/"
                    hash={item.hash}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-border/70 py-3.5 hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="size-4 text-primary" />
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to ?? "/"}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-border/70 py-3.5 hover:text-primary"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="size-4 text-primary" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 space-y-3">
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xs bg-primary py-3.5 font-display text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-md"
            >
              Request Free Site Quotation
              <ArrowRight className="size-4" />
            </Link>

            <a
              href={company.whatsappText}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xs bg-whatsapp py-3.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-md"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>

            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="flex w-full items-center justify-center gap-2 rounded-xs border border-border py-3 font-display text-xs font-bold uppercase tracking-wider text-foreground"
            >
              <Download className="size-4 text-primary" />
              Download 51-Page Work Catalog (PDF)
            </a>
          </div>

          <div className="mt-auto border-t border-border/80 pt-4 text-center font-mono text-xs text-muted-foreground">
            <p>D179 Sector 10, Noida, UP · Mon–Sun 8AM–8PM</p>
            <p className="mt-1 font-bold text-foreground">+91 85279 77714</p>
          </div>
        </div>
      )}
    </header>
  );
}
