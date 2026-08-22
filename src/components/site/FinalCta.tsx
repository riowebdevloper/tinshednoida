import { useState } from "react";
import { ArrowRight, HardHat, CheckCircle2 } from "lucide-react";
import { company, needs } from "@/lib/site-data";

export function FinalCta() {
  const [projectType, setProjectType] = useState("Industrial Factory Shed");
  const [area, setArea] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    const text = encodeURIComponent(
      `Hello Tin Shade Noida Team,\n\nI want to schedule a site inspection & quotation:\n` +
      `• Project Type: ${projectType}\n` +
      `• Estimated Area: ${area || "To be measured on site"} Sq. Ft.\n` +
      `• Site Location: ${location || "Noida / NCR"}\n` +
      `• Contact Phone: ${phone}\n\n` +
      `Please contact me to confirm the site inspection.`
    );

    window.open(`https://wa.me/918527977714?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-charcoal text-paper py-16 sm:py-20 border-b border-white/10 relative overflow-hidden">
      
      {/* Background blueprint grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-15 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          
          {/* Left Column: Direct Yard Provenance (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-safety">
              <HardHat className="size-3.5" />
              <span>DIRECT YARD QUOTATION DISPATCH</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Request an Itemized Structural Quotation
            </h2>

            <p className="text-sm sm:text-base text-steel-muted leading-relaxed font-sans">
              Share your project specifications or land dimensions. Master fabricator MD Khurshid and project engineer Abdul will review your drawings, calculate IS 2062 mild steel tonnages, and schedule a physical site inspection.
            </p>

            {/* Direct Provenance Points in IBM Plex Mono */}
            <div className="space-y-2 pt-2 font-mono text-xs text-paper/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-safety shrink-0" />
                <span>Free Senior Engineer Site Visit in Noida, Greater Noida &amp; NCR</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-safety shrink-0" />
                <span>Itemized BOQ with Mild Steel Tonnage &amp; 0.50mm Sheet Breakdown</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-3.5 text-safety shrink-0" />
                <span>24-Hour Digital Drawing &amp; Cost Estimation Turnaround</span>
              </div>
            </div>

            {/* Yard Contact Stamp */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs font-mono text-steel-muted">
              <span className="text-white font-semibold">Yard Office:</span>
              <span>D179 Sector 10, Noida, UP</span>
              <span>·</span>
              <span className="text-safety tabular-nums">+91 85279 77714</span>
            </div>
          </div>

          {/* Right Column: Single Clear Quotation Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-xs border border-white/20 bg-charcoal-deep p-5 sm:p-7">
              
              <div className="border-b border-white/10 pb-3 mb-5">
                <span className="font-mono text-xs font-semibold text-safety uppercase block mb-0.5">
                  OFFICIAL INQUIRY FORM
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  Schedule Site Survey &amp; BOQ
                </h3>
              </div>

              {submitted ? (
                <div className="p-5 rounded-xs bg-charcoal border border-safety text-center space-y-2.5">
                  <CheckCircle2 className="size-8 text-safety mx-auto" />
                  <h4 className="font-display text-lg font-bold text-white">Inquiry Dispatched</h4>
                  <p className="text-xs font-mono text-steel-muted">
                    Your details have been forwarded to our Noida yard engineers. Abdul will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-1 text-xs font-mono text-safety underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 font-mono text-xs">
                  
                  <div>
                    <label className="block text-steel-muted uppercase mb-1 font-semibold">
                      Structure Type
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xs border border-white/20 bg-charcoal px-3 py-2 text-xs text-white focus:border-safety focus:outline-none"
                    >
                      {needs.map((n) => (
                        <option key={n.id} value={n.label}>
                          {n.label} ({n.short})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-steel-muted uppercase mb-1 font-semibold">
                        Approx Area (Sq Ft)
                      </label>
                      <input
                        type="text"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="e.g. 5,000"
                        className="w-full rounded-xs border border-white/20 bg-charcoal px-3 py-2 text-xs text-white placeholder:text-steel-muted/50 focus:border-safety focus:outline-none tabular-nums"
                      />
                    </div>

                    <div>
                      <label className="block text-steel-muted uppercase mb-1 font-semibold">
                        Site Location
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Noida Sec 63"
                        className="w-full rounded-xs border border-white/20 bg-charcoal px-3 py-2 text-xs text-white placeholder:text-steel-muted/50 focus:border-safety focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-steel-muted uppercase mb-1 font-semibold">
                      Phone Number <span className="text-safety">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 Mobile Number"
                      className="w-full rounded-xs border border-white/20 bg-charcoal px-3 py-2 text-xs text-white placeholder:text-steel-muted/50 focus:border-safety focus:outline-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-1.5 inline-flex items-center justify-center gap-2 rounded-xs bg-safety py-3 font-display text-sm font-bold uppercase tracking-wide text-charcoal hover:bg-yellow-400 transition-colors"
                  >
                    <span>Dispatch Quotation Request</span>
                    <ArrowRight className="size-3.5" />
                  </button>

                  <p className="text-[0.6875rem] text-steel-muted text-center pt-0.5 font-sans">
                    Direct line to master fabricators · No spam · Instant WhatsApp confirmation
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
