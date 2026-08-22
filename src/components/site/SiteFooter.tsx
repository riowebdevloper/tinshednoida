import { Link } from "@tanstack/react-router";
import { company } from "@/lib/site-data";
import { Youtube, Instagram, Phone, Mail, MapPin, ArrowRight, Download, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#070D1E] text-white border-t border-indigo-200/15 pt-16 pb-12 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Ledger */}
        <div className="grid gap-10 lg:grid-cols-12 pb-14 border-b border-indigo-200/15">
          
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
                <span className="block font-mono-tag text-[0.625rem] text-[#F59E0B] font-bold">
                  TIN SHED &amp; MS STRUCTURE MANUFACTURER
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#8E9CB8] leading-relaxed max-w-sm font-sans pt-2">
              Engineering high-integrity industrial factory sheds, logistics warehouses, and heavy mild steel frameworks. In-house fabrication shop in Sector 10 Noida with turnkey hydraulic crane erection nationwide.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={company.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center border border-indigo-200/20 bg-[#101B3B] text-[#8E9CB8] hover:text-white hover:border-[#DC2626] transition-colors rounded-[2px]"
                aria-label="YouTube Channel"
              >
                <Youtube className="size-4 text-[#DC2626]" />
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-9 items-center justify-center border border-indigo-200/20 bg-[#101B3B] text-[#8E9CB8] hover:text-white hover:border-pink-500 transition-colors rounded-[2px]"
                aria-label="Instagram Profile"
              >
                <Instagram className="size-4 text-pink-500" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs">
            <span className="font-bold text-[#F59E0B] uppercase block tracking-widest text-[0.6875rem]">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-[#8E9CB8]">
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
          <div className="lg:col-span-4 space-y-3 font-mono text-xs text-[#8E9CB8]">
            <span className="font-bold text-[#F59E0B] uppercase block tracking-widest text-[0.6875rem]">
              DIRECT YARD DESK
            </span>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span className="text-white">D179 Sector 10, Noida, Uttar Pradesh 201301</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="size-4 text-[#F59E0B] shrink-0" />
                <a href="tel:+918527977714" className="text-white hover:text-[#F59E0B]">+91 85279 77714 / 9899793714</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="size-4 text-[#F59E0B] shrink-0" />
                <span className="text-white">tinshadenoida@gmail.com</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
                download="TIN_SHADE_NOIDA_CATALOG.pdf"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F59E0B] hover:underline"
              >
                <Download className="size-3.5" />
                <span>DOWNLOAD WORK PORTFOLIO (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Verification Note */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[#8E9CB8]">
          <div>
            &copy; {new Date().getFullYear()} {company.name}. All Rights Reserved. Engineered to IS 800:2007.
          </div>
          <div className="flex items-center gap-4">
            <span>GST &amp; MSME Registered Yard</span>
            <span>·</span>
            <span>Noida Sector 10</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
