import { Link } from "@tanstack/react-router";
import { company, nav, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-steel text-steel-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center shrink-0">
              <img
                src={company.logo}
                alt="Tin Shade Noida — Shelter Solutions"
                className="h-12 w-auto object-contain mix-blend-screen"
                loading="lazy"
              />
            </div>
            <span className="font-display text-lg font-bold text-white">{company.name}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-steel-muted">
            Leading manufacturer of tin sheds, MS structures and industrial roofing solutions across
            Noida, Greater Noida and Pan India since {company.since}.
          </p>
        </div>

        <nav>
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

        <div>
          <p className="eyebrow text-primary">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm text-steel-muted">
            {services.map((service) => (
              <li key={service.code}>{service.label}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-steel-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-xs text-steel-muted lg:px-10">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.address} · {company.phone}</p>
        </div>
      </div>
    </footer>
  );
}
