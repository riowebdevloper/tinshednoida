import { useState } from "react";
import { ArrowRight, HardHat, Phone, MessageCircle, CheckCircle2, ShieldCheck, Mail, MapPin } from "lucide-react";
import { company, needs } from "@/lib/site-data";
import { useNavigate } from "@tanstack/react-router";

export function FinalCta() {
  const [projectType, setProjectType] = useState("Industrial Shed");
  const [area, setArea] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    
    // Format WhatsApp message with parameters
    const text = encodeURIComponent(
      `Hello Tin Shade Noida Team,\n\nI want to schedule a site survey & quotation:\n` +
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
    <section id="quote" className="bg-charcoal text-paper py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
      
      {/* Background blueprint drafting grid */}
      <div className="absolute inset-0 cad-grid-dark opacity-15 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Direct Fabrication Value Proposition (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-xs border border-safety/40 bg-charcoal-deep px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-safety">
              <HardHat className="size-3.5" />
              DIRECT YARD QUOTATION DISPATCH
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Get an Itemized Structural Quotation
            </h2>

            <p className="text-base text-steel-muted leading-relaxed font-sans">
              Share your project requirements or land dimensions. Master fabricator MD Khurshid and project engineer Abdul will review your specs, calculate IS 2062 tonnages, and schedule a physical site inspection.
            </p>

            {/* Direct Provenance Points */}
            <div className="space-y-2.5 pt-2 font-mono text-xs text-paper/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-safety shrink-0" />
                <span>Free Senior Engineer Site Visit in Noida, Greater Noida &amp; NCR</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-safety shrink-0" />
                <span>Itemized BOQ with Mild Steel Tonnage &amp; 0.50mm Sheet Breakdown</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-safety shrink-0" />
                <span>24-Hour Digital Drawing &amp; Cost Estimation Turnaround</span>
              </div>
            </div>

            {/* Yard Contact Stamp */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-steel-muted">
              <span className="text-white font-bold">Yard Office:</span>
              <span>D179 Sector 10, Noida, UP</span>
              <span>·</span>
              <a href="tel:+918527977714" className="text-safety hover:underline">+91 85279 77714</a>
            </div>
          </div>

          {/* Right Column: Single Clear Quotation Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-xs border border-white/20 bg-charcoal-deep p-6 sm:p-8 shadow-elevated">
              
              <div className="border-b border-white/15 pb-4 mb-6">
                <span className="font-mono text-xs font-bold text-safety uppercase tracking-wider block mb-1">
                  OFFICIAL INQUIRY FORM
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Request Site Survey &amp; BOQ
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xs bg-charcoal border border-safety text-center space-y-3">
                  <CheckCircle2 className="size-10 text-safety mx-auto" />
                  <h4 className="font-display text-xl font-bold text-white">Inquiry Dispatched</h4>
                  <p className="text-xs font-mono text-steel-muted">
                    Your project details have been forwarded to our Noida engineering yard. Abdul will contact you within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs font-mono text-safety underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  
                  <div>
                    <label className="block text-steel-muted uppercase mb-1.5 font-bold">
                      01. Structure Type
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xs border border-white/20 bg-charcoal px-3.5 py-2.5 text-sm text-white focus:border-safety focus:outline-none"
                    >
                      {needs.map((n) => (
                        <option key={n.id} value={n.label}>
                          {n.label} ({n.short})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-steel-muted uppercase mb-1.5 font-bold">
                        02. Approx Area (Sq Ft)
                      </label>
                      <input
                        type="text"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="e.g. 5,000"
                        className="w-full rounded-xs border border-white/20 bg-charcoal px-3.5 py-2 text-sm text-white placeholder:text-steel-muted/50 focus:border-safety focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-steel-muted uppercase mb-1.5 font-bold">
                        03. Site Location
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Noida Sec 63"
                        className="w-full rounded-xs border border-white/20 bg-charcoal px-3.5 py-2 text-sm text-white placeholder:text-steel-muted/50 focus:border-safety focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-steel-muted uppercase mb-1.5 font-bold">
                      04. Your Phone Number <span className="text-safety">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 Mobile Number"
                      className="w-full rounded-xs border border-white/20 bg-charcoal px-3.5 py-2.5 text-sm text-white placeholder:text-steel-muted/50 focus:border-safety focus:outline-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xs bg-safety py-3.5 font-display text-sm font-bold uppercase tracking-wider text-charcoal shadow-md transition-transform hover:-translate-y-0.5"
                  >
                    <span>Dispatch Quotation Request</span>
                    <ArrowRight className="size-4" />
                  </button>

                  <p className="text-[0.6875rem] text-steel-muted text-center pt-1 font-sans">
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
