import { useEffect, useState } from "react";
import { Download, Menu, Phone, X, MessageCircle, FileText, ArrowRight } from "lucide-react";
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
      {/* ──────── HIGH-UTILITY INDUSTRIAL TOP BAR ──────── */}
      <div
        className={`hidden overflow-hidden bg-charcoal text-paper border-b border-white/10 transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs font-mono">
          {/* Active Noida Yard Status Indicator */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-safety font-bold">
              <span className="size-2 rounded-full bg-safety animate-pulse" aria-hidden="true" />
              Active Fabrication Yard:
            </span>
            <span className="text-paper/85">D179 Sector 10, Noida · Pan-India Crane Erection</span>
          </div>

          {/* Quick Contact & Document Download */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+918527977714"
              className="inline-flex items-center gap-1.5 text-paper hover:text-safety transition-colors"
            >
              <Phone className="size-3.5 text-safety" aria-hidden="true" />
              <span>+91 85279 77714</span>
            </a>

            <span className="h-3 w-px bg-white/20" aria-hidden="true" />

            <a
              href={company.whatsappText}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex items-center gap-1.5 text-paper hover:text-safety transition-colors"
            >
              <MessageCircle className="size-3.5 text-safety" aria-hidden="true" />
              <span>WhatsApp Direct</span>
            </a>

            <span className="h-3 w-px bg-white/20" aria-hidden="true" />

            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-1.5 font-bold text-safety hover:text-white transition-colors"
            >
              <Download className="size-3.5" aria-hidden="true" />
              <span>51-Page Work Catalog (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* ──────── MAIN ARCHITECTURAL NAVIGATION BAR ──────── */}
      <div
        className={`border-b border-border bg-paper/95 backdrop-blur-md transition-all duration-200 ${
          scrolled ? "shadow-card py-2.5" : "py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo & Real Engineering Tagline */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:outline-none rounded-xs p-0.5"
            aria-label={`${company.name} home`}
          >
            <img
              src={company.logo}
              alt="Tin Shade Noida"
              className={`w-auto object-contain transition-all duration-200 ${
                scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"
              }`}
            />
            <div className="leading-tight hidden sm:block">
              <span className="block font-display text-lg sm:text-xl font-extrabold uppercase tracking-wide text-charcoal group-hover:text-oxide transition-colors">
                {company.name}
              </span>
              <span className="block font-mono text-xs text-muted-foreground tracking-normal">
                Industrial Shed & Structural Steel Fabrication
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 font-display text-sm font-bold uppercase tracking-wider text-charcoal">
            {nav.map((item) => {
              const isActive = item.to ? currentPath === item.to : false;
              
              if (item.hash) {
                return (
                  <Link
                    key={item.label}
                    to="/"
                    hash={item.hash}
                    className="px-3.5 py-2 transition-colors hover:text-oxide text-charcoal/80"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to ?? "/"}
                  className={`px-3.5 py-2 transition-colors hover:text-oxide ${
                    isActive ? "text-oxide border-b-2 border-oxide" : "text-charcoal/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Direct Single Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+918527977714"
              className="inline-flex size-9 items-center justify-center rounded-xs border border-charcoal/30 bg-surface text-charcoal hover:bg-charcoal hover:text-paper transition-colors"
              title="Call Master Fabricator: +91 85279 77714"
              aria-label="Call +91 85279 77714"
            >
              <Phone className="size-4" />
            </a>

            <Link
              to="/quote"
              className="btn-primary"
            >
              <span>Get a Quote</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link
              to="/quote"
              className="rounded-xs bg-safety px-3 py-1.5 font-display text-xs font-bold text-charcoal border border-charcoal/20"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-xs border border-border bg-surface p-2 text-charcoal hover:bg-charcoal hover:text-paper transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ──────── MOBILE FULLSCREEN DRAWER ──────── */}
      {open && (
        <div className="fixed inset-0 top-[60px] z-50 bg-charcoal text-paper flex flex-col justify-between p-6 overflow-y-auto lg:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <div className="border-b border-white/15 pb-4">
              <span className="font-mono text-xs font-bold text-safety block mb-1">
                YARD LOCATION · NOIDA SECTOR 10
              </span>
              <p className="text-sm text-paper/80">
                Direct structural fabrication and nationwide crane erection.
              </p>
            </div>

            <nav className="flex flex-col gap-3 font-display text-xl font-bold uppercase">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to ?? "/"}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="py-2 border-b border-white/10 hover:text-safety transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/15 space-y-3">
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xs bg-safety py-3 font-display text-sm font-bold text-charcoal uppercase"
            >
              <span>Get Structural Quotation</span>
              <ArrowRight className="size-4" />
            </Link>

            <a
              href="tel:+918527977714"
              className="w-full flex items-center justify-center gap-2 rounded-xs border border-white/20 bg-charcoal-deep py-2.5 font-display text-xs font-bold uppercase text-paper"
            >
              <Phone className="size-3.5 text-safety" />
              <span>Call: +91 85279 77714</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
