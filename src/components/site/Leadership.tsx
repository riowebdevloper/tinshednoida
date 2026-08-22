import { ArrowRight, Phone, Award, ShieldCheck, Heart, Wrench } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, leadership } from "@/lib/site-data";

export function Leadership() {
  const { founder, nextGen } = leadership;

  return (
    <section className="bg-warm-paper py-24 sm:py-36 border-b border-[#0B0D0F]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Eyebrow */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#B08A4A]" />
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
              THE PEOPLE BEHIND TIN SHADE
            </span>
          </div>

          <h2 className="font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B0D0F] tracking-tight uppercase leading-[1.05]">
            BUILT BY EXPERIENCE. <br />
            CARRIED FORWARD BY FAMILY.
          </h2>
        </div>

        {/* ──────── EDITORIAL ASYMMETRICAL PORTRAIT COMPOSITION ──────── */}
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Overlapping Editorial Portraits (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
              
              {/* Founder Portrait (Large Primary) */}
              <div className="sm:col-span-7 arch-card-light overflow-hidden bg-white p-2.5 shadow-2xl border border-[#0B0D0F]/15">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0B0D0F]">
                  <img
                    src="/khurshid.jpg"
                    alt="MD Khurshid - Founder"
                    className="size-full object-cover grayscale contrast-110"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0B0D0F]/90 text-white font-mono text-[0.6875rem] font-bold px-3 py-1 uppercase tracking-widest">
                    FOUNDER · MD KHURSHID
                  </div>
                </div>
                <div className="p-3 pt-4">
                  <span className="font-mono text-xs text-[#B08A4A] font-bold uppercase block">
                    30+ YEARS MASTER FABRICATOR
                  </span>
                  <p className="text-xs text-[#525860] font-sans mt-1">
                    Direct oversight of welding, truss geometry, and raw steel quality in Noida yard.
                  </p>
                </div>
              </div>

              {/* Next Generation Portrait (Offset Secondary) */}
              <div className="sm:col-span-5 arch-card-light overflow-hidden bg-white p-2.5 shadow-xl border border-[#0B0D0F]/15 sm:-ml-8 sm:-mb-6 relative z-10">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0B0D0F]">
                  <img
                    src="/abdul.jpg"
                    alt="Abdul - Project Engineer"
                    className="size-full object-cover grayscale contrast-110"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0B0D0F]/90 text-white font-mono text-[0.6875rem] font-bold px-3 py-1 uppercase tracking-widest">
                    NEXT GEN · ABDUL
                  </div>
                </div>
                <div className="p-3 pt-4">
                  <span className="font-mono text-xs text-[#B08A4A] font-bold uppercase block">
                    PROJECT ENGINEER
                  </span>
                  <p className="text-xs text-[#525860] font-sans mt-1">
                    CAD calculations, BOQ estimations, and turnkey on-site crane coordination.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-editorial-title text-2xl font-extrabold text-[#0B0D0F] uppercase">
                A Partnership Grounded in Craft &amp; Integrity
              </h3>

              <p className="text-sm sm:text-base text-[#525860] font-sans leading-relaxed">
                Founded with a practical understanding of industrial construction and a commitment to dependable workmanship, MD Khurshid has built Tin Shade around trust, quality and long-term relationships with clients.
              </p>

              <p className="text-sm sm:text-base text-[#525860] font-sans leading-relaxed">
                Abdul represents the next generation of Tin Shade, bringing a modern approach to project coordination, technology, customer experience and the continued growth of the business.
              </p>
            </div>

            {/* Visual Story: FOUNDATION → EXPERIENCE → FUTURE */}
            <div className="pt-4 border-t border-[#0B0D0F]/15 space-y-3 font-mono text-xs text-[#0B0D0F]">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#B08A4A]">01. FOUNDATION:</span>
                <span>Direct hands-on metal arc welding in Noida since 2010</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#B08A4A]">02. EXPERIENCE:</span>
                <span>500+ executed industrial sheds across North India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#B08A4A]">03. FUTURE:</span>
                <span>High-precision PEB structures and digital BOQ accuracy</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="tel:+918527977714"
                className="btn-arch-primary text-xs"
              >
                <Phone className="size-3.5" />
                <span>Speak Directly with Leadership</span>
              </a>

              <Link
                to="/about/founders"
                className="btn-arch-dark-outline text-xs"
              >
                <span>Full Founder Story &rarr;</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
