import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Instagram,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
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
          company: String(formData.get("company") ?? ""),
          source: "website-contact",
        },
      });
      form.reset();
      setStatus("sent");
      if (res?.whatsappUrl) {
        window.open(res.whatsappUrl, "_blank");
      }
    } catch {
      setStatus("error");
    }
  }

  const channels = [
    { icon: Phone, label: "Direct Yard Hotline", value: company.phone, href: company.phoneHref },
    { icon: MessageCircle, label: "WhatsApp Instant", value: "+91 85279 77714", href: company.whatsappText },
    { icon: Mail, label: "Official Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Instagram, label: "Instagram On-Site Media", value: company.instagramHandle, href: company.instagram },
    { icon: MapPin, label: "Fabrication Yard & Workshop", value: company.address, href: undefined },
  ];

  return (
    <section className="bg-navy-obsidian py-16 sm:py-24 border-b border-white/10 relative">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        
        {/* Left Column: Direct Yard Communication (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-amber-400 mb-2">
              <span className="size-1.5 rounded-full bg-amber-400" />
              <span>DIRECT FABRICATOR CONSULTATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Talk Directly with Our Site Engineers
            </h2>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed font-sans">
              No junior call center agents. MD Khurshid and Abdul respond personally to structural queries, schedule laser site surveys, and prepare itemized BOQ estimates.
            </p>
          </div>

          <div className="spec-plate-navy p-5 space-y-4">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3.5 border-b border-white/5 pb-3.5 last:border-b-0 last:pb-0 font-mono text-xs">
                <div className="size-8 rounded-xs bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Icon className="size-4" />
                </div>
                <div>
                  <span className="text-[0.6875rem] text-slate-400 block uppercase font-semibold">
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-white font-medium hover:text-amber-400 transition-colors mt-0.5 block"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-white font-medium mt-0.5 block">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Working Hours Stamp */}
          <div className="p-4 rounded-xs border border-white/10 bg-[#0E1726] font-mono text-xs text-slate-300">
            <p className="text-white font-semibold">Operating Schedule:</p>
            <p className="text-slate-400 mt-1">Yard Open: Monday – Saturday (8:00 AM – 8:00 PM)</p>
            <p className="text-amber-400 mt-0.5">Crane Erection: 24/7 Night Shifts on Special Projects</p>
          </div>
        </div>

        {/* Right Column: Contact & Site Survey Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="spec-plate-navy p-6 sm:p-8">
            <div className="border-b border-white/10 pb-4 mb-6">
              <span className="font-mono text-xs font-semibold text-sky-400 uppercase block mb-1">
                ONLINE CONSULTATION REQUEST
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Request Free Site Visit &amp; Cost Estimation
              </h3>
            </div>

            {status === "sent" ? (
              <div className="p-6 rounded-xs bg-[#0B1320] border border-emerald-500 text-center space-y-3">
                <CheckCircle2 className="size-10 text-emerald-400 mx-auto" />
                <h4 className="font-display text-xl font-bold text-white">Inquiry Dispatched</h4>
                <p className="text-xs font-mono text-slate-300">
                  Your inquiry has been sent to our Noida Sector 10 engineers. We will call you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-xs font-mono text-amber-400 underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 font-mono text-xs">
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-slate-300 uppercase mb-1 font-semibold">
                      Your Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      minLength={2}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xs border border-white/15 bg-[#080D1A] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 uppercase mb-1 font-semibold">
                      Mobile / WhatsApp Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      name="phone"
                      required
                      inputMode="tel"
                      placeholder="+91 10-Digit Mobile"
                      className="w-full rounded-xs border border-white/15 bg-[#080D1A] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-slate-300 uppercase mb-1 font-semibold">
                      Site Location / City <span className="text-amber-400">*</span>
                    </label>
                    <input
                      name="location"
                      required
                      placeholder="e.g. Noida Phase 2, Greater Noida"
                      className="w-full rounded-xs border border-white/15 bg-[#080D1A] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 uppercase mb-1 font-semibold">
                      Structure Requirement
                    </label>
                    <select
                      name="requirementType"
                      className="w-full rounded-xs border border-white/15 bg-[#080D1A] px-3.5 py-2.5 text-xs text-white focus:border-sky-400 focus:outline-none"
                    >
                      {quoteOptions.need.map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1 font-semibold">
                    Project Details / Area Dimensions <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Describe clear span needs, land area (sq ft), eaves height, or overhead crane requirements..."
                    className="w-full rounded-xs border border-white/15 bg-[#080D1A] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none font-sans"
                  />
                </div>

                {validationError && (
                  <p className="text-red-400 font-mono text-xs">{validationError}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-elite w-full py-3.5 mt-2"
                >
                  {status === "sending" ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <ArrowRight className="size-4" />
                  )}
                  <span>Dispatch Consultation Request</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
