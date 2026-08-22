import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Award, Wrench } from "lucide-react";

export function Leadership() {
  return (
    <section
      id="leadership"
      aria-label="Leadership & Founders"
      className="relative bg-[#0A1128] text-white py-24 sm:py-36 border-b border-indigo-200/15 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[#F59E0B]" />
          <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
            FOUNDERS & STRUCTURAL MASTERY
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-white leading-[1.05]">
            DIRECT YARD LEADERSHIP. <br />
            <span className="text-[#F59E0B]">ZERO BROKER INTERMEDIATION.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C7D2FE] font-sans leading-relaxed">
            When you contract Tin Shade, you deal directly with master fabricators and project engineers with 15+ years of verified steel erection experience.
          </p>
        </div>

        {/* ──────── DUAL FOUNDER PORTRAIT COMPOSITION IN NAVY SURFACE ──────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Founder 1: MD Khurshid */}
          <div className="bg-[#101B3B] border border-indigo-200/25 p-6 sm:p-10 rounded-[3px] shadow-2xl flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all duration-300">
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A1128] rounded-[2px] mb-8 border border-indigo-200/20">
                <picture>
                  <source srcSet="/images/founders/khurshid.webp" type="image/webp" />
                  <img
                    src="/images/founders/khurshid.jpg"
                    alt="MD Khurshid Master Structural Fabricator"
                    className="size-full object-cover object-top brightness-[0.90] contrast-[1.08] hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute top-3 right-3 bg-[#0A1128]/95 px-3 py-1 border border-indigo-200/30 font-mono text-xs text-[#F59E0B] font-bold rounded-[2px]">
                  15+ YEARS MASTERY
                </div>
              </div>

              <div className="font-mono text-xs text-[#F59E0B] font-bold uppercase tracking-widest mb-1">
                MANAGING DIRECTOR & MASTER FABRICATOR
              </div>
              <h3 className="font-editorial-title text-2xl sm:text-3xl font-extrabold text-white uppercase mb-4">
                MD Khurshid
              </h3>

              <p className="text-xs sm:text-sm text-[#C7D2FE] font-sans leading-relaxed mb-6">
                Direct supervisor of all in-shop MIG/arc welding, structural steel fit-up, and raw material procurement from primary Indian steel mills. Over 500 sheds engineered under his direct technical inspection.
              </p>

              <div className="space-y-2 pt-4 border-t border-indigo-200/15 font-mono text-xs text-[#8E9CB8]">
                <div className="flex items-center gap-2">
                  <Wrench className="size-3.5 text-[#F59E0B]" />
                  <span>Specialization: Heavy Portal Trusses & Crane Gantries</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-3.5 text-[#F59E0B]" />
                  <span>Certification: IS 800:2007 Structural Compliance</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-indigo-200/15">
              <a
                href="tel:+918527977714"
                className="btn-red-primary text-xs w-full flex items-center justify-center gap-2"
              >
                <Phone className="size-3.5" />
                <span>SPEAK DIRECTLY: +91 85279 77714</span>
              </a>
            </div>
          </div>

          {/* Founder 2: Abdul */}
          <div className="bg-[#101B3B] border border-indigo-200/25 p-6 sm:p-10 rounded-[3px] shadow-2xl flex flex-col justify-between hover:border-[#F59E0B]/50 transition-all duration-300">
            <div>
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A1128] rounded-[2px] mb-8 border border-indigo-200/20">
                <picture>
                  <source srcSet="/images/founders/abdul.webp" type="image/webp" />
                  <img
                    src="/images/founders/abdul.jpg"
                    alt="Abdul Project Engineer & Operations Lead"
                    className="size-full object-cover object-top brightness-[0.90] contrast-[1.08] hover:scale-105 transition-transform duration-700"
                  />
                </picture>
                <div className="absolute top-3 right-3 bg-[#0A1128]/95 px-3 py-1 border border-indigo-200/30 font-mono text-xs text-[#F59E0B] font-bold rounded-[2px]">
                  PAN INDIA OPERATIONS
                </div>
              </div>

              <div className="font-mono text-xs text-[#F59E0B] font-bold uppercase tracking-widest mb-1">
                CO-FOUNDER & CHIEF OF ON-SITE OPERATIONS
              </div>
              <h3 className="font-editorial-title text-2xl sm:text-3xl font-extrabold text-white uppercase mb-4">
                Abdul
              </h3>

              <p className="text-xs sm:text-sm text-[#C7D2FE] font-sans leading-relaxed mb-6">
                Leads mobile hydraulic crane mobilization, on-site laser foundation surveys, safety protocols, and client technical coordination across North India and regional corridors.
              </p>

              <div className="space-y-2 pt-4 border-t border-indigo-200/15 font-mono text-xs text-[#8E9CB8]">
                <div className="flex items-center gap-2">
                  <Award className="size-3.5 text-[#F59E0B]" />
                  <span>Role: Site Logistics, Rigging & Fast-Track Erection</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-3.5 text-[#F59E0B]" />
                  <span>Coverage: Delhi NCR, UP, Haryana, Rajasthan, Pan India</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-indigo-200/15">
              <Link
                to="/about/founders"
                className="btn-yellow-primary text-xs w-full flex items-center justify-center gap-2"
              >
                <span>VIEW COMPLETE FOUNDER DOSSIER</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
