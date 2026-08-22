import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import { Youtube, Instagram, Phone, Mail, MapPin, ArrowRight, Download, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#070809] text-white border-t border-white/10 pt-16 pb-12 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Ledger */}
        <div className="grid gap-10 lg:grid-cols-12 pb-14 border-b border-white/10">
          
          {/* Brand & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={company.logo}
                alt="Tin Shade Noida Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <span className="block font-editorial-title text-xl font-bold tracking-tight text-white uppercase">
                  {company.name}
                </span>
                <span className="block font-mono-tag text-[0.625rem] text-[#8C9398]">
                  TIN SHED &amp; MS STRUCTURE MANUFACTURER
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#8C9398] leading-relaxed max-w-sm font-sans pt-2">
              Engineering high-integrity industrial factory sheds, logistics warehouses, and heavy mild steel frameworks. In-house fabrication shop in Sector 10 Noida with turnkey hydraulic crane erection nationwide.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={company.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center border border-white/15 bg-white/5 text-[#8C9398] hover:text-white hover:border-red-500 transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="size-4 text-red-500" />
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center border border-white/15 bg-white/5 text-[#8C9398] hover:text-white hover:border-pink-500 transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="size-4 text-pink-500" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <span className="font-bold text-[#B08A4A] uppercase block tracking-widest text-[0.6875rem]">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-[#8C9398]">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services Hub</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
              <li><Link to="/videos" className="hover:text-white transition-colors">Project Action Videos</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">51-Page Work Catalog</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Tin Shade</Link></li>
              <li><Link to="/about/founders" className="hover:text-white transition-colors">Founders MD Khurshid &amp; Abdul</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Hub</Link></li>
            </ul>
          </div>

          {/* Direct Fabrication Yard Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs text-[#8C9398]">
            <span className="font-bold text-[#B08A4A] uppercase block tracking-widest text-[0.6875rem]">
              DIRECT YARD DESK
            </span>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-[#B08A4A] shrink-0 mt-0.5" />
                <span className="text-white">D179 Sector 10, Noida, Uttar Pradesh 201301</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#B08A4A] shrink-0" />
                <a href="tel:+918527977714" className="text-white hover:text-[#B08A4A]">+91 85279 77714 / 9899793714</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#B08A4A] shrink-0" />
                <span className="text-white">tinshadenoida@gmail.com</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#B08A4A] hover:underline"
              >
                <Download className="size-3.5" />
                <span>DOWNLOAD 51-PAGE WORK CATALOG (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Pan India Tag */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[0.6875rem] text-[#8C9398]">
          <div>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved. IS 2062 Certified Prime Mild Steel.
          </div>
          <div className="text-white font-bold tracking-wider uppercase">
            PAN INDIA CRANE ERECTION COVERAGE
          </div>
        </div>

      </div>
    </footer>
  );
}
