import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X, Phone } from "lucide-react";
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
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
          ? "bg-[#0A1128]/95 backdrop-blur-md border-b border-indigo-200/20 py-2.5 shadow-2xl"
          : "bg-gradient-to-b from-[#0A1128]/95 via-[#0A1128]/60 to-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-12">
          
          {/* Brand Logo & Name */}
          <Link
            to="/"
            className="flex items-center gap-3 focus-visible:outline-none shrink-0 group"
            aria-label={`${company.name} home`}
          >
            <img
              src={company.logo}
              alt="Tin Shade Noida Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight">
              <span className="block font-display text-base sm:text-lg font-bold tracking-tight text-white uppercase">
                {company.name}
              </span>
              <span className="block font-mono-tag text-[0.625rem] text-[#F59E0B] font-bold">
                EST. 2010 · NOIDA YARD DIRECT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-bold tracking-widest text-[#C7D2FE] font-display">
            {navItems.map((item) => {
              const isActive = currentPath === item.to || currentPath.startsWith(item.to + "/");
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`transition-colors relative py-1 hover:text-white ${
                    isActive ? "text-white font-extrabold" : "text-[#8E9CB8]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#F59E0B]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA: Red Quote Button & Phone */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="tel:+918527977714"
              className="hidden lg:flex items-center gap-2 font-mono text-xs text-[#C7D2FE] hover:text-white transition-colors"
            >
              <Phone className="size-3.5 text-[#F59E0B]" />
              <span>+91 85279 77714</span>
            </a>

            <Link
              to="/quote"
              className="btn-red-primary text-xs py-2 px-4 shadow-md"
            >
              <span>GET A QUOTE</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/quote"
              className="btn-red-primary text-[0.6875rem] py-1.5 px-3"
            >
              <span>QUOTE</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="p-2 text-white border border-indigo-200/20 bg-[#101B3B] hover:bg-[#1E3A8A] rounded-[2px]"
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X className="size-5 text-[#F59E0B]" /> : <Menu className="size-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ──────── MOBILE NAVIGATION DRAWER ──────── */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#0A1128]/98 border-b border-indigo-200/20 backdrop-blur-xl px-6 py-8 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="font-editorial-title text-xl text-white hover:text-[#F59E0B] tracking-tight uppercase"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-6 border-t border-indigo-200/20 flex flex-col gap-3 font-mono text-xs">
              <a
                href="tel:+918527977714"
                className="btn-yellow-primary text-xs w-full flex items-center justify-center gap-2"
              >
                <Phone className="size-3.5" />
                <span>DIRECT CALL: +91 85279 77714</span>
              </a>

              <Link
                to="/quote"
                className="btn-red-primary text-xs w-full flex items-center justify-center gap-2"
              >
                <span>CALCULATE BOQ ESTIMATE</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
