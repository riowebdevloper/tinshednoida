import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Phone, MessageCircle, AlertCircle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { company } from "@/lib/site-data";
import { submitLead, indianPhoneRegex } from "@/lib/leads.functions";

type Answers = {
  need: string;
  size: string;
  place: string;
  timeline: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

const quoteStepOptions = {
  need: [
    "Industrial Shed",
    "Warehouse",
    "Tin Roofing",
    "MS Structure",
    "PEB Structure",
    "Repair / Renovation",
    "Other",
  ],
  size: [
    "Under 1,000 sq ft",
    "1,000 – 5,000 sq ft",
    "5,000 – 10,000 sq ft",
    "10,000+ sq ft",
    "Not sure",
  ],
  place: [
    "Noida / NCR",
    "North India (UP, HR, PB, Raj)",
    "West / Central India",
    "South India",
    "East / NE India",
    "Pan India / Other",
  ],
  timeline: [
    "Immediately",
    "Within 1 month",
    "1 – 3 months",
    "Just exploring",
  ],
};

const steps = [
  { key: "need", label: "STEP 1: WHAT DO YOU NEED?", desc: "Select the primary structure requirement for your site.", options: quoteStepOptions.need },
  { key: "size", label: "STEP 2: PROJECT SIZE", desc: "Estimated covered ground footprint or square footage.", options: quoteStepOptions.size },
  { key: "place", label: "STEP 3: SITE LOCATION", desc: "Location of the plot or industrial facility.", options: quoteStepOptions.place },
  { key: "timeline", label: "STEP 4: EXECUTION TIMELINE", desc: "When do you plan to commence site fabrication / erection?", options: quoteStepOptions.timeline },
] as const;

export function triggerQuoteForNeed(needOption: string) {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("tsn-select-quote-need", { detail: { need: needOption } });
    window.dispatchEvent(event);
    const elem = document.getElementById("quote");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export function QuoteWizard() {
  const send = useServerFn(submitLead);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState<string | null>(null);

  useEffect(() => {
    const handlePreselect = (e: CustomEvent<{ need: string }>) => {
      if (e.detail?.need) {
        setAnswers((prev) => ({ ...prev, need: e.detail.need }));
        setStepIndex(1);
      }
    };

    window.addEventListener("tsn-select-quote-need" as any, handlePreselect);
    return () => window.removeEventListener("tsn-select-quote-need" as any, handlePreselect);
  }, []);

  const total = steps.length + 1; // 5 steps total
  const isDetails = stepIndex === steps.length;
  const progress = Math.round(((stepIndex + (isDetails ? 1 : 0)) / total) * 100);

  function choose(key: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStepIndex((i) => Math.min(i + 1, steps.length));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValidationError(null);

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || name.length < 2) {
      setValidationError("Please enter your full name (at least 2 characters).");
      return;
    }

    if (!phone || !indianPhoneRegex.test(phone)) {
      setValidationError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("sending");
    try {
      const res = await send({
        data: {
          name,
          phone,
          email: email || undefined,
          location: answers.place ?? "Pan India",
          requirementType: answers.need ?? "Industrial Shed",
          size: answers.size ?? "-",
          timeline: answers.timeline ?? "-",
          message: `Need: ${answers.need ?? "-"} | Size: ${answers.size ?? "-"} | Timeline: ${answers.timeline ?? "-"} | Project Details: ${message || "Standard inquiry"}`,
          source: "quote-wizard",
          company: String(form.get("company") ?? ""),
        },
      });

      setStatus("done");
      if (res?.whatsappUrl) {
        setWhatsappRedirectUrl(res.whatsappUrl);
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="bg-warm-paper py-24 sm:py-36 border-b border-[#0B0D0F]/10 text-[#0B0D0F]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-[#0B0D0F]/15 pb-8 mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#B08A4A]" />
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
              ITEMIZED BOQ ESTIMATION
            </span>
          </div>
          <h2 className="font-editorial-title text-3xl sm:text-5xl font-extrabold text-[#0B0D0F] tracking-tight uppercase leading-[1.06]">
            REQUEST A FORMAL QUOTATION.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#525860] font-sans">
            Select your parameters below to receive an itemized structural BOQ and schedule a free senior engineer site survey.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="arch-card-light overflow-hidden bg-white border border-[#0B0D0F]/15 shadow-xl">
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-[#F3F1EC]">
            <div
              className="h-full bg-[#B08A4A] transition-all duration-300"
              style={{ width: `${status === "done" ? 100 : progress}%` }}
            />
          </div>

          <div className="p-6 sm:p-10">
            {status === "done" ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <div className="size-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 className="size-10" />
                </div>
                <div className="space-y-2 max-w-md">
                  <h3 className="font-editorial-title text-2xl font-extrabold text-[#0B0D0F] uppercase">
                    Thank you. Your enquiry has been received.
                  </h3>
                  <p className="text-sm text-[#525860] font-sans">
                    Our team will contact you shortly to review your specifications and schedule a site survey.
                  </p>
                </div>

                {whatsappRedirectUrl && (
                  <div className="mt-4 pt-4 border-t border-[#0B0D0F]/10 w-full max-w-sm">
                    <a
                      href={whatsappRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#16A34A] hover:bg-[#15803D] px-5 py-3 font-display text-xs font-bold text-white uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <MessageCircle className="size-4" />
                      <span>Also Open in WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>
            ) : isDetails ? (
              /* STEP 5: CONTACT DETAILS */
              <form onSubmit={onSubmit} className="space-y-5 font-mono text-xs">
                
                {/* Active Parameters Pills */}
                <div className="flex flex-wrap gap-1.5 border-b border-[#0B0D0F]/10 pb-4">
                  {steps.map((step) => {
                    const value = answers[step.key];
                    return value ? (
                      <span
                        key={step.key}
                        className="bg-[#F3F1EC] px-3 py-1 text-xs font-bold text-[#0B0D0F] border border-[#0B0D0F]/15"
                      >
                        {value}
                      </span>
                    ) : null;
                  })}
                </div>

                <div className="pt-2">
                  <span className="font-mono text-xs font-bold text-[#B08A4A] uppercase">
                    STEP 5: CONTACT DETAILS
                  </span>
                  <h3 className="font-editorial-title text-xl sm:text-2xl font-extrabold text-[#0B0D0F] uppercase mt-1">
                    Where should we dispatch your quotation?
                  </h3>
                </div>

                {validationError && (
                  <div className="border border-red-200 bg-red-50 p-3 text-red-700 font-sans text-xs flex items-center gap-2">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-[#0B0D0F] uppercase mb-1.5 font-bold">
                      Full Name <span className="text-[#B08A4A]">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      minLength={2}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full border border-[#0B0D0F]/20 bg-[#F3F1EC] px-4 py-3 text-xs text-[#0B0D0F] outline-none focus:border-[#0B0D0F] font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0B0D0F] uppercase mb-1.5 font-bold">
                      Phone Number <span className="text-[#B08A4A]">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 10-Digit Mobile"
                      className="w-full border border-[#0B0D0F]/20 bg-[#F3F1EC] px-4 py-3 text-xs text-[#0B0D0F] outline-none focus:border-[#0B0D0F] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#0B0D0F] uppercase mb-1.5 font-bold">
                    Email Address (Optional)
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="e.g. rajesh@company.com"
                    className="w-full border border-[#0B0D0F]/20 bg-[#F3F1EC] px-4 py-3 text-xs text-[#0B0D0F] outline-none focus:border-[#0B0D0F] font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[#0B0D0F] uppercase mb-1.5 font-bold">
                    Project Details &amp; Dimensions (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Clear span requirements, eaves height, crane support needs, site plot address..."
                    className="w-full border border-[#0B0D0F]/20 bg-[#F3F1EC] px-4 py-3 text-xs text-[#0B0D0F] outline-none focus:border-[#0B0D0F] font-sans"
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

                {status === "error" && (
                  <div className="border border-[#B08A4A] bg-amber-50 p-3 text-[#0B0D0F] font-sans text-xs">
                    Could not submit to server directly. Please call our yard desk at +91 85279 77714 or open in WhatsApp.
                  </div>
                )}

                <div className="flex items-center justify-between pt-5 border-t border-[#0B0D0F]/10">
                  <button
                    type="button"
                    onClick={() => setStepIndex(steps.length - 1)}
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#525860] hover:text-[#0B0D0F] transition-colors"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-arch-primary"
                  >
                    {status === "sending" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <ArrowRight className="size-4" />
                    )}
                    <span>REQUEST MY QUOTE</span>
                  </button>
                </div>
              </form>
            ) : (
              /* STEPS 1–4 */
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4 font-mono text-xs text-[#8C9398] border-b border-[#0B0D0F]/10 pb-3">
                  <span>
                    STEP {stepIndex + 1} OF {total}
                  </span>
                  {stepIndex > 0 ? (
                    <button
                      type="button"
                      onClick={() => setStepIndex((i) => i - 1)}
                      className="inline-flex items-center gap-1 text-[#0B0D0F] hover:text-[#B08A4A] transition-colors font-bold"
                    >
                      <ArrowLeft className="size-3.5" />
                      <span>Back</span>
                    </button>
                  ) : null}
                </div>

                <div>
                  <span className="font-mono text-xs font-bold text-[#B08A4A] uppercase">
                    {steps[stepIndex]!.label}
                  </span>
                  <p className="text-xs sm:text-sm text-[#525860] font-sans mt-1">
                    {steps[stepIndex]!.desc}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {steps[stepIndex]!.options.map((option) => {
                    const selected = answers[steps[stepIndex]!.key] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => choose(steps[stepIndex]!.key, option)}
                        className={`p-4 text-left font-editorial-title text-sm sm:text-base font-bold uppercase tracking-wide transition-all border ${
                          selected
                            ? "border-[#0B0D0F] bg-[#0B0D0F] text-white shadow-md"
                            : "border-[#0B0D0F]/15 bg-white text-[#0B0D0F] hover:border-[#0B0D0F] hover:bg-[#F3F1EC]"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
