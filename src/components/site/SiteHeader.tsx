import { useEffect, useState } from "react";
import { Download, Menu, Phone, X, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, nav } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      {/* utility bar — collapses away on scroll */}
      <div
        className={`hidden overflow-hidden bg-steel-deep text-steel-foreground transition-all duration-300 lg:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-steel-muted lg:px-10">
          <div className="flex items-center gap-5">
            <span>{company.address}</span>
            <span className="h-3 w-px bg-steel-line" />
            <a className="transition-colors hover:text-primary" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="eyebrow text-primary">Free site visit across India</span>
            <span className="h-3 w-px bg-steel-line" />
            <span>{company.hours}</span>
            <span className="h-3 w-px bg-steel-line" />
            <a
              href="/catalog/tin-shade-noida-catalog.pdf"
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-1.5 text-steel-muted transition-colors hover:text-primary"
            >
              <Download className="size-3" />
              Download Brochure
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-border bg-background/90 backdrop-blur-md transition-shadow ${
          scrolled ? "shadow-card" : ""
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-10 ${
            scrolled ? "py-2" : "py-3"
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
            aria-label={`${company.name} home`}
          >
            <div className="flex items-center justify-center transition-transform hover:scale-102">
              <img
                src={company.logo}
                alt="Tin Shade Noida — Shelter Solutions"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-9 sm:h-10" : "h-11 sm:h-13"
                }`}
              />
            </div>
            <span className="leading-tight hidden sm:block">
              <span className="block font-display text-lg font-bold uppercase tracking-wide text-foreground">
                {company.name}
              </span>
              <span className="eyebrow block text-[0.6rem] text-muted-foreground">
                {company.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {nav.map((item) =>
              item.hash ? (
                <Link
                  key={`${item.to}-${item.label}`}
                  to={item.to}
                  hash={item.hash}
                  activeProps={{ className: "text-foreground" }}
                  className="relative rounded-sm px-3 py-2 font-display text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-foreground hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={`${item.to}-${item.label}`}
                  to={item.to}
                  activeProps={{ className: "text-foreground" }}
                  className="relative rounded-sm px-3 py-2 font-display text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-foreground hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={company.phoneHref}
              className="hidden items-center gap-2 rounded-sm border border-border px-4 py-2.5 font-display text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary md:inline-flex"
            >
              <Phone className="size-4" />
              Call now
            </a>
            <Link
              to="/quote"
              className="hidden items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Get quote
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground xl:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto bg-background px-5 pb-10 pt-4 xl:hidden">
          <nav className="divide-y divide-border">
            {nav.map((item) =>
              item.hash ? (
                <Link
                  key={`${item.to}-${item.label}`}
                  to={item.to}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-xl font-medium uppercase tracking-wide text-foreground"
                >
                  {item.label}
                  <span className="text-primary">→</span>
                </Link>
              ) : (
                <Link
                  key={`${item.to}-${item.label}`}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-xl font-medium uppercase tracking-wide text-foreground"
                >
                  {item.label}
                  <span className="text-primary">→</span>
                </Link>
              ),
            )}
          </nav>
          <div className="mt-6 grid gap-3">
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-sm bg-primary px-5 py-4 font-display text-base font-semibold uppercase tracking-wide text-primary-foreground"
            >
              Get free quote
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={company.phoneHref}
                className="flex items-center justify-center gap-2 rounded-sm border border-border px-4 py-3.5 font-display text-sm font-semibold uppercase text-foreground"
              >
                <Phone className="size-4" /> Call
              </a>
              <a
                href={company.whatsappText}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-sm bg-whatsapp px-4 py-3.5 font-display text-sm font-semibold uppercase text-primary-foreground"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </div>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">{company.address}</p>
          <p className="mt-1 text-sm text-muted-foreground">{company.hours}</p>
        </div>
      ) : null}
    </header>
  );
}
