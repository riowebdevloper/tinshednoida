import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X, Phone, Download } from "lucide-react";
import { company } from "@/lib/site-data";

const navItems = [
  { label: "SERVICES", to: "/services" as const },
  { label: "PROJECTS", to: "/projects" as const },
  { label: "VIDEOS", to: "/videos" as const },
  { label: "CATALOG", to: "/catalog" as const },
  { label: "ABOUT", to: "/about" as const },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0D0F]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl"
          : "bg-gradient-to-b from-[#0B0D0F]/80 via-[#0B0D0F]/30 to-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3.5 focus-visible:outline-none shrink-0 group"
            aria-label={`${company.name} home`}
          >
            <img
              src={company.logo}
              alt="Tin Shade Noida Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-103"
            />
            <div className="leading-tight">
              <span className="block font-display text-base sm:text-lg font-bold tracking-tight text-white uppercase">
                {company.name}
              </span>
              <span className="block font-mono-tag text-[0.625rem] text-[#8C9398]">
                EST. 2010 · NOIDA YARD
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-widest text-slate-300 font-display">
            {navItems.map((item) => {
              const isActive = currentPath === item.to || currentPath.startsWith(item.to + "/");
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`transition-colors relative py-1 hover:text-white ${
                    isActive ? "text-white font-bold" : "text-[#8C9398]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#B08A4A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:+918527977714"
              className="hidden lg:flex items-center gap-2 font-mono text-xs text-[#8C9398] hover:text-white transition-colors"
            >
              <Phone className="size-3 text-[#B08A4A]" />
              <span>+91 85279 77714</span>
            </a>

            <Link
              to="/quote"
              className="btn-arch-primary py-2.5 px-4 text-xs font-bold"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex size-10 items-center justify-center border border-white/15 bg-white/5 text-white hover:bg-white/10 rounded-[2px]"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

        </div>
      </div>

      {/* ──────── FULL-SCREEN MOBILE OVERLAY DRAWER ──────── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 bg-[#0B0D0F] border-t border-white/10 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <nav className="space-y-6 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block font-editorial-title text-2xl tracking-tight text-white hover:text-[#B08A4A] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <Link
              to="/quote"
              className="btn-arch-primary w-full text-center justify-center py-3.5"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="size-4" />
            </Link>

            <a
              href="tel:+918527977714"
              className="flex items-center justify-center gap-2 py-3 text-xs font-mono text-[#8C9398] border border-white/15 hover:text-white"
            >
              <Phone className="size-3.5 text-[#B08A4A]" />
              <span>CALL YARD: +91 85279 77714</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
