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
  AlertCircle,
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
    <section id="contact" className="bg-[#0A1128] text-white py-16 sm:py-24 border-b border-indigo-200/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ──────── SECTION HEADER ──────── */}
        <div className="border-b border-indigo-200/15 pb-5 mb-10">
          <span className="font-mono text-xs font-semibold text-[#F59E0B] uppercase tracking-tight block mb-1">
            YARD &amp; HEADQUARTERS
          </span>
          <h2 className="font-editorial-title text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
            Consult With Our Master Fabricators
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#8E9CB8] font-sans max-w-2xl">
            Schedule a physical yard inspection in Sector 10 Noida, or request a senior project engineer site visit across India.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Yard Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#101B3B] border border-indigo-200/20 p-6 sm:p-8 rounded-[3px] shadow-xl space-y-6">
              <span className="font-mono text-xs font-bold text-[#F59E0B] uppercase tracking-wider block border-b border-indigo-200/15 pb-3">
                DIRECT COMMUNICATIONS DESK
              </span>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="text-[#8E9CB8] block mb-1 uppercase">Direct Phone Line:</span>
                  <a
                    href="tel:+918527977714"
                    className="font-editorial-title text-xl font-bold text-white hover:text-[#F59E0B] transition-colors block"
                  >
                    +91 85279 77714
                  </a>
                  <a
                    href="tel:+919899793714"
                    className="font-editorial-title text-lg font-bold text-[#C7D2FE] hover:text-[#F59E0B] transition-colors block mt-0.5"
                  >
                    +91 98997 93714
                  </a>
                </div>

                <div className="pt-3 border-t border-indigo-200/15">
                  <span className="text-[#8E9CB8] block mb-1 uppercase">Technical Support Email:</span>
                  <a
                    href="mailto:tinshadenoida@gmail.com"
                    className="text-white hover:text-[#F59E0B] font-bold text-xs"
                  >
                    tinshadenoida@gmail.com
                  </a>
                </div>

                <div className="pt-3 border-t border-indigo-200/15">
                  <span className="text-[#8E9CB8] block mb-1 uppercase">Fabrication Shop &amp; Yard:</span>
                  <p className="text-white font-sans text-xs leading-relaxed">
                    D179 Sector 10, Noida, Gautam Buddha Nagar, Uttar Pradesh 201301, India
                  </p>
                </div>

                <div className="pt-3 border-t border-indigo-200/15">
                  <span className="text-[#8E9CB8] block mb-1 uppercase">Operational Hours:</span>
                  <p className="text-white font-sans text-xs">
                    Monday – Saturday: 08:00 AM – 08:00 PM IST
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-indigo-200/15 flex flex-col gap-3">
                <a
                  href="https://wa.me/918527977714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy-outline text-xs w-full flex items-center justify-center gap-2 hover:bg-[#25D366] hover:border-[#25D366] hover:text-black"
                >
                  <MessageCircle className="size-4 text-[#25D366]" />
                  <span>INSTANT WHATSAPP DRAWINGS</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Engineering Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#101B3B] border border-indigo-200/20 p-6 sm:p-10 rounded-[3px] shadow-2xl">
            <span className="font-mono text-xs font-bold text-[#F59E0B] uppercase tracking-wider block border-b border-indigo-200/15 pb-3 mb-6">
              SUBMIT FORMAL PROJECT INQUIRY
            </span>

            {status === "sent" ? (
              <div className="py-12 text-center space-y-4">
                <div className="size-14 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center mx-auto text-[#25D366]">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="font-editorial-title text-2xl font-extrabold text-white uppercase">
                  Inquiry Dispatched
                </h3>
                <p className="text-sm text-[#C7D2FE] font-sans max-w-md mx-auto">
                  Your project details have been logged with our chief engineering desk. We will call you within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-navy-outline text-xs mt-4"
                >
                  <span>Submit Another Inquiry</span>
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5 font-mono text-xs">
                {validationError && (
                  <div className="border border-red-500/30 bg-red-950/20 p-3 text-red-400 font-sans text-xs flex items-center gap-2 rounded-[2px]">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-white uppercase mb-1.5 font-bold">
                      Full Name <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      className="w-full border border-indigo-200/20 bg-[#0A1128] px-4 py-3 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
                    />
                  </div>
                  <div>
                    <label className="block text-white uppercase mb-1.5 font-bold">
                      10-Digit Mobile Number <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      className="w-full border border-indigo-200/20 bg-[#0A1128] px-4 py-3 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-white uppercase mb-1.5 font-bold">
                      Site Location / City <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      name="location"
                      required
                      placeholder="e.g. Greater Noida Ecotech 3"
                      className="w-full border border-indigo-200/20 bg-[#0A1128] px-4 py-3 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
                    />
                  </div>
                  <div>
                    <label className="block text-white uppercase mb-1.5 font-bold">
                      Structure Discipline
                    </label>
                    <select
                      name="requirementType"
                      className="w-full border border-indigo-200/20 bg-[#0A1128] px-4 py-3 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
                    >
                      {quoteOptions.need.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0A1128] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white uppercase mb-1.5 font-bold">
                    Project Scope &amp; Clear Span Dimensions <span className="text-[#F59E0B]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Enter estimated covered area (sq ft), clear span width, eaves height, crane capacity needs, or specific requirements..."
                    className="w-full border border-indigo-200/20 bg-[#0A1128] px-4 py-3 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-red-primary text-xs w-full sm:w-auto"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>DISPATCHING SPECIFICATION...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT FOR DIRECT YARD ESTIMATE</span>
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
