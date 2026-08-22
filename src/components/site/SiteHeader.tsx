import { useEffect, useState } from "react";
import { Download, Menu, Phone, X, MessageCircle, ArrowRight } from "lucide-react";
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
      {/* ──────── TOP YARD STATUS BAR ──────── */}
      <div
        className={`hidden overflow-hidden bg-charcoal text-paper border-b border-white/10 transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="size-1.5 rounded-full bg-safety" aria-hidden="true" />
            <span className="text-paper/90 font-medium">
              Yard: D179 Sector 10, Noida · Pan-India Crane Erection
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+918527977714"
              className="inline-flex items-center gap-1.5 text-paper hover:text-safety transition-colors"
              title="Call +91 85279 77714"
            >
              <Phone className="size-3.5 text-safety" aria-hidden="true" />
              <span className="tabular-nums">+91 85279 77714</span>
            </a>

            <span className="h-3 w-px bg-white/20" aria-hidden="true" />

            <a
              href={company.whatsappText}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Direct"
              className="inline-flex items-center gap-1.5 text-paper hover:text-safety transition-colors"
            >
              <MessageCircle className="size-3.5 text-safety" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <span className="h-3 w-px bg-white/20" aria-hidden="true" />

            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-1.5 font-medium text-safety hover:text-white transition-colors"
            >
              <Download className="size-3.5" aria-hidden="true" />
              <span>51-Page Work Catalog (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* ──────── MAIN NAVIGATION BAR ──────── */}
      <div
        className={`border-b border-border bg-paper/95 backdrop-blur-md transition-all duration-200 ${
          scrolled ? "py-2.5 shadow-xs" : "py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo & Tagline */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:outline-none rounded-xs p-0.5"
            aria-label={`${company.name} home`}
          >
            <img
              src={company.logo}
              alt="Tin Shade Noida"
              className={`w-auto object-contain transition-all duration-200 ${
                scrolled ? "h-9 sm:h-10" : "h-10 sm:h-11"
              }`}
            />
            <div className="leading-tight hidden sm:block">
              <span className="block font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-charcoal">
                {company.name}
              </span>
              <span className="block font-mono text-[0.6875rem] text-muted-foreground tracking-tight">
                Industrial Shed &amp; Structural Steel Fabrication
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 font-display text-sm font-bold uppercase tracking-wide text-charcoal">
            {nav.map((item) => {
              const isActive = item.to ? currentPath === item.to : false;
              
              if (item.hash) {
                return (
                  <Link
                    key={item.label}
                    to="/"
                    hash={item.hash}
                    className="px-3 py-1.5 transition-colors hover:text-oxide text-charcoal/80"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to ?? "/"}
                  className={`px-3 py-1.5 transition-colors hover:text-oxide ${
                    isActive ? "text-oxide border-b-2 border-oxide" : "text-charcoal/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Single Primary Action + Small Phone Icon */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+918527977714"
              className="inline-flex size-8 items-center justify-center rounded-xs border border-charcoal/30 bg-surface text-charcoal hover:bg-charcoal hover:text-paper transition-colors"
              title="Call Yard: +91 85279 77714"
              aria-label="Call +91 85279 77714"
            >
              <Phone className="size-3.5" />
            </a>

            <Link
              to="/quote"
              className="btn-primary"
            >
              <span>Get a Quote</span>
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Trigger */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link
              to="/quote"
              className="rounded-xs bg-safety px-3 py-1.5 font-display text-xs font-bold text-charcoal border border-charcoal/20"
            >
              Get Quote
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

      {/* ──────── MOBILE MENU DRAWER ──────── */}
      {open && (
        <div className="fixed inset-0 top-[58px] z-50 bg-charcoal text-paper flex flex-col justify-between p-6 overflow-y-auto lg:hidden animate-in fade-in duration-150">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-safety block font-medium">
                YARD: D179 SECTOR 10, NOIDA
              </span>
              <p className="text-xs text-paper/70 font-sans mt-0.5">
                Direct structural fabrication &amp; nationwide crane erection.
              </p>
            </div>

            <nav className="flex flex-col gap-2 font-display text-lg font-bold uppercase tracking-wide">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to ?? "/"}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="py-2 border-b border-white/5 hover:text-safety transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-xs bg-safety py-3 font-display text-sm font-bold text-charcoal uppercase tracking-wide"
            >
              <span>Get a Quote</span>
              <ArrowRight className="size-4" />
            </Link>

            <div className="flex gap-2">
              <a
                href="tel:+918527977714"
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xs border border-white/20 bg-charcoal-deep py-2 font-mono text-xs text-paper"
              >
                <Phone className="size-3.5 text-safety" />
                <span className="tabular-nums">+91 85279 77714</span>
              </a>
              <a
                href={company.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xs border border-white/20 bg-charcoal-deep py-2 font-mono text-xs text-paper"
              >
                <MessageCircle className="size-3.5 text-safety" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
