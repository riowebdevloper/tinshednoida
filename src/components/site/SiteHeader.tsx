import { useEffect, useState } from "react";
import { Download, Menu, Phone, X, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
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
        className={`hidden overflow-hidden bg-[#060A14] text-slate-300 border-b border-white/5 transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="size-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
              Direct Fabrication Yard:
            </span>
            <span className="text-slate-300">D179 Sector 10, Noida · Turnkey Pan-India Crane Erection</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+918527977714"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              title="Call +91 85279 77714"
            >
              <Phone className="size-3.5 text-amber-400" aria-hidden="true" />
              <span className="tabular-nums">+91 85279 77714</span>
            </a>

            <span className="h-3 w-px bg-white/10" aria-hidden="true" />

            <a
              href={company.whatsappText}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Direct"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="size-3.5 text-emerald-400" aria-hidden="true" />
              <span>WhatsApp Direct</span>
            </a>

            <span className="h-3 w-px bg-white/10" aria-hidden="true" />

            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-1.5 text-sky-400 hover:text-white transition-colors"
            >
              <Download className="size-3.5" aria-hidden="true" />
              <span>51-Page Work Catalog (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* ──────── ARCHITECTURAL NAVY GLASS NAVBAR ──────── */}
      <div
        className={`navy-glass border-b border-white/10 transition-all duration-200 ${
          scrolled ? "py-2.5 shadow-2xl" : "py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          
          {/* Brand Logo & Tagline */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none rounded-xs p-0.5 group"
            aria-label={`${company.name} home`}
          >
            <img
              src={company.logo}
              alt="Tin Shade Noida Logo"
              className={`w-auto object-contain transition-all duration-200 ${
                scrolled ? "h-9 sm:h-10" : "h-10 sm:h-11"
              }`}
            />
            <div className="leading-tight hidden sm:block">
              <span className="block font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                {company.name}
              </span>
              <span className="block font-mono text-[0.6875rem] text-slate-400 tracking-tight">
                Industrial Shed &amp; Structural Steel Fabrication
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 font-display text-sm font-semibold tracking-wide text-slate-200">
            {nav.map((item) => {
              const isActive = item.to ? currentPath === item.to : false;
              
              if (item.hash) {
                return (
                  <Link
                    key={item.label}
                    to="/"
                    hash={item.hash}
                    className="px-3.5 py-1.5 transition-colors hover:text-white text-slate-300 rounded-xs hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to ?? "/"}
                  className={`px-3.5 py-1.5 transition-colors rounded-xs ${
                    isActive
                      ? "text-white bg-sky-500/15 border border-sky-400/30 text-sky-300 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Single Primary Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+918527977714"
              className="inline-flex size-9 items-center justify-center rounded-xs border border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
              title="Call Yard: +91 85279 77714"
              aria-label="Call +91 85279 77714"
            >
              <Phone className="size-4" />
            </a>

            <Link
              to="/quote"
              className="btn-elite"
            >
              <span>Get a Quote</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <Link
              to="/quote"
              className="rounded-xs bg-amber-400 px-3 py-1.5 font-display text-xs font-bold text-slate-950"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="rounded-xs border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ──────── MOBILE DRAWER ──────── */}
      {open && (
        <div className="fixed inset-0 top-[60px] z-50 bg-[#0A101D] text-white flex flex-col justify-between p-6 overflow-y-auto lg:hidden animate-in fade-in duration-150">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-amber-400 block font-semibold">
                YARD: D179 SECTOR 10, NOIDA
              </span>
              <p className="text-xs text-slate-400 mt-1 font-sans">
                Direct structural fabrication &amp; nationwide crane erection.
              </p>
            </div>

            <nav className="flex flex-col gap-2 font-display text-lg font-bold tracking-wide">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to ?? "/"}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="py-2.5 border-b border-white/5 text-slate-200 hover:text-amber-400 transition-colors"
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
              className="w-full btn-elite text-center justify-center py-3"
            >
              <span>Get a Structural Quote</span>
              <ArrowRight className="size-4" />
            </Link>

            <div className="flex gap-2 font-mono text-xs">
              <a
                href="tel:+918527977714"
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xs border border-white/15 bg-white/5 py-2.5 text-white"
              >
                <Phone className="size-3.5 text-amber-400" />
                <span className="tabular-nums">+91 85279 77714</span>
              </a>
              <a
                href={company.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 rounded-xs border border-emerald-500/30 bg-emerald-500/10 py-2.5 text-emerald-400"
              >
                <MessageCircle className="size-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
