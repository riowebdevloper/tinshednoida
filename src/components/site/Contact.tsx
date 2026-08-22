import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  HardHat,
} from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { company, quoteOptions } from "@/lib/site-data";
import { indianPhoneRegex, submitLead } from "@/lib/leads.functions";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [validationError, setValidationError] = useState<string | null>(null);
  const sendLead = useServerFn(submitLead);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidationError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const requirementType = String(formData.get("requirementType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || name.length < 2) {
      setValidationError("Please enter your full name.");
      return;
    }

    if (!phone || !indianPhoneRegex.test(phone)) {
      setValidationError("Please enter a valid phone number (10 digits).");
      return;
    }

    if (!location || location.length < 2) {
      setValidationError("Please enter your site location or city.");
      return;
    }

    if (!message || message.length < 4) {
      setValidationError("Please provide brief project details.");
      return;
    }

    setStatus("sending");
    try {
      const res = await sendLead({
        data: {
          name,
          phone,
          location,
          requirementType,
          message,
          source: "contact-page",
          company: String(formData.get("company") ?? ""),
        },
      });

      setStatus("sent");
      form.reset();

      if (res?.whatsappUrl) {
        window.open(res.whatsappUrl, "_blank");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-[#0B0D0F] text-white py-16 sm:py-24 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER ──────── */}
        <div className="border-b border-white/10 pb-5 mb-10">
          <span className="font-mono text-xs font-semibold text-[#B08A4A] uppercase tracking-tight block mb-1">
            YARD &amp; HEADQUARTERS
          </span>
          <h2 className="font-editorial-title text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Consult With Our Master Fabricators
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#8C9398] font-sans max-w-2xl">
            Schedule a physical yard inspection in Sector 10 Noida, or request a senior project engineer site visit across India.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Yard Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="arch-card-dark p-6 bg-[#14171A] border border-white/10 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#B08A4A]">
                <HardHat className="size-4" />
                <span>FABRICATION YARD &amp; WORKSHOP</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-[#C8CCD0]">
                <div className="flex items-start gap-3">
                  <MapPin className="size-4 text-[#B08A4A] mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-white font-display text-sm">D179 Sector 10, Noida</strong>
                    <span className="text-[#8C9398]">Uttar Pradesh - 201301, India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <Phone className="size-4 text-[#B08A4A] shrink-0" />
                  <div>
                    <span className="text-[#8C9398] block text-[0.6875rem]">Direct Hotline:</span>
                    <a href="tel:+918527977714" className="font-bold text-white text-sm hover:text-[#B08A4A] tabular-nums">
                      +91 85279 77714
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <MessageCircle className="size-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[#8C9398] block text-[0.6875rem]">Instant WhatsApp:</span>
                    <a href={company.whatsappText} target="_blank" rel="noreferrer" className="font-bold text-emerald-400 hover:underline">
                      Chat with Project Engineer
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <Mail className="size-4 text-[#B08A4A] shrink-0" />
                  <div>
                    <span className="text-[#8C9398] block text-[0.6875rem]">Official Email:</span>
                    <a href="mailto:contact@tinshednoida.com" className="text-white hover:text-[#B08A4A]">
                      contact@tinshednoida.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="arch-card-dark p-6 bg-[#14171A] border border-white/10 space-y-2">
              <span className="font-mono text-xs font-bold text-white uppercase block">
                Yard Operational Hours
              </span>
              <div className="space-y-1 text-xs font-mono text-[#8C9398]">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span className="font-semibold text-white">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-[#B08A4A] font-semibold">By Prior Appointment</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="arch-card-dark p-6 sm:p-8 bg-[#14171A] border border-white/10">
              
              <div className="border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-xs font-semibold uppercase text-[#B08A4A] block mb-0.5">
                  OFFICIAL ENGINEERING INQUIRY
                </span>
                <h3 className="font-editorial-title text-xl sm:text-2xl font-extrabold text-white uppercase">
                  Request Free Site Survey &amp; BOQ
                </h3>
              </div>

              {status === "sent" ? (
                <div className="p-6 bg-emerald-950/20 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="size-10 text-emerald-400 mx-auto" />
                  <h4 className="font-editorial-title text-xl font-bold text-white uppercase">Inquiry Dispatched Successfully</h4>
                  <p className="text-xs font-mono text-[#8C9398]">
                    Master fabricator MD Khurshid or Abdul will review your project parameters and contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs font-mono text-[#B08A4A] underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4 font-mono text-xs">
                  {validationError && (
                    <div className="border border-red-500/30 bg-red-950/20 p-3 text-red-400 font-sans text-xs">
                      {validationError}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-white uppercase mb-1 font-semibold">
                        Your Name <span className="text-[#B08A4A]">*</span>
                      </label>
                      <input
                        name="name"
                        required
                        placeholder="e.g. Rajesh Singhal"
                        className="w-full border border-white/15 bg-[#0B0D0F] px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#B08A4A] font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-white uppercase mb-1 font-semibold">
                        Phone Number <span className="text-[#B08A4A]">*</span>
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 Mobile Number"
                        className="w-full border border-white/15 bg-[#0B0D0F] px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#B08A4A] font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-white uppercase mb-1 font-semibold">
                        Site Location / City <span className="text-[#B08A4A]">*</span>
                      </label>
                      <input
                        name="location"
                        required
                        placeholder="e.g. Greater Noida Ecotech"
                        className="w-full border border-white/15 bg-[#0B0D0F] px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#B08A4A] font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-white uppercase mb-1 font-semibold">
                        Structure Requirement
                      </label>
                      <select
                        name="requirementType"
                        className="w-full border border-white/15 bg-[#0B0D0F] px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#B08A4A] font-sans"
                      >
                        {quoteOptions.need.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#0B0D0F] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white uppercase mb-1 font-semibold">
                      Project Details / Dimensions <span className="text-[#B08A4A]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="Covered area (sq ft), clear span width, eaves height, or overhead crane requirements..."
                      className="w-full border border-white/15 bg-[#0B0D0F] px-3.5 py-2.5 text-xs text-white outline-none focus:border-[#B08A4A] font-sans"
                    />
                  </div>

                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ display: "none" }}
                    className="hidden"
                  />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-arch-primary w-full py-3.5 mt-2"
                  >
                    {status === "sending" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <ArrowRight className="size-4" />
                    )}
                    <span>Submit Inquiry &amp; Request Survey</span>
                  </button>

                  <p className="text-[0.6875rem] text-[#8C9398] text-center font-sans">
                    Direct line to master fabricators · No spam · Instant WhatsApp copy
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
