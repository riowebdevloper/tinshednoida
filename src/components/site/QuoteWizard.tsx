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
    <section id="quote" className="bg-[#F8FAFC] py-14 sm:py-20 border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-5 mb-8">
          <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
            GUIDED FIVE-STEP ESTIMATION WIZARD
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Request an Itemized Structural Quotation
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-sans">
            Select your project parameters to receive an official written quotation and schedule a free senior engineer site survey.
          </p>
        </div>

        <div className="corp-card overflow-hidden bg-white border border-slate-300 shadow-md">
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-slate-100">
            <div
              className="h-full bg-[#0E2A47] transition-all duration-300"
              style={{ width: `${status === "done" ? 100 : progress}%` }}
            />
          </div>

          <div className="p-6 sm:p-8">
            {status === "done" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="size-10" />
                </div>
                <div className="space-y-1.5 max-w-md">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    Thank you. Your enquiry has been received.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans">
                    Our team will contact you shortly to review your specifications and schedule a site survey.
                  </p>
                </div>

                {whatsappRedirectUrl && (
                  <div className="mt-3 pt-3 border-t border-slate-200 w-full max-w-sm">
                    <a
                      href={whatsappRedirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xs bg-[#16A34A] hover:bg-[#15803D] px-4 py-3 font-display text-xs font-bold text-white uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <MessageCircle className="size-4" />
                      <span>Also Open in WhatsApp</span>
                    </a>
                  </div>
                )}
              </div>
            ) : isDetails ? (
              /* STEP 5: CONTACT DETAILS */
              <form onSubmit={onSubmit} className="space-y-4 font-mono text-xs">
                
                {/* Active Parameters Pills */}
                <div className="flex flex-wrap gap-1.5 border-b border-slate-100 pb-3">
                  {steps.map((step) => {
                    const value = answers[step.key];
                    return value ? (
                      <span
                        key={step.key}
                        className="rounded-xs bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800 border border-slate-200"
                      >
                        {value}
                      </span>
                    ) : null;
                  })}
                </div>

                <div className="pt-2">
                  <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                    STEP 5: CONTACT DETAILS
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                    Where should we send your quotation?
                  </h3>
                </div>

                {validationError && (
                  <div className="rounded-xs border border-red-200 bg-red-50 p-3 text-red-700 font-sans text-xs flex items-center gap-2">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-slate-700 uppercase mb-1 font-semibold">
                      Full Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      name="name"
                      required
                      minLength={2}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full rounded-xs border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#0E2A47] font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 uppercase mb-1 font-semibold">
                      Phone Number <span className="text-amber-600">*</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 10-Digit Mobile"
                      className="w-full rounded-xs border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#0E2A47] font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 uppercase mb-1 font-semibold">
                    Email Address (Optional)
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="e.g. rajesh@company.com"
                    className="w-full rounded-xs border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#0E2A47] font-sans"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 uppercase mb-1 font-semibold">
                    Project Details &amp; Dimensions (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Clear span requirements, eaves height, crane support needs, specific site landmarks..."
                    className="w-full rounded-xs border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-[#0E2A47] font-sans"
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
                  <div className="rounded-xs border border-amber-200 bg-amber-50 p-3 text-amber-900 font-sans text-xs">
                    Could not submit to server directly. Please call our yard desk at +91 85279 77714 or click below to send via WhatsApp.
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setStepIndex(steps.length - 1)}
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-corp-primary"
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
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 font-mono text-xs text-slate-500 border-b border-slate-200 pb-2">
                  <span>
                    Step {stepIndex + 1} of {total}
                  </span>
                  {stepIndex > 0 ? (
                    <button
                      type="button"
                      onClick={() => setStepIndex((i) => i - 1)}
                      className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
                    >
                      <ArrowLeft className="size-3.5" />
                      <span>Back</span>
                    </button>
                  ) : null}
                </div>

                <div>
                  <span className="font-mono text-xs font-bold text-amber-700 uppercase">
                    {steps[stepIndex]!.label}
                  </span>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    {steps[stepIndex]!.desc}
                  </p>
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {steps[stepIndex]!.options.map((option) => {
                    const selected = answers[steps[stepIndex]!.key] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => choose(steps[stepIndex]!.key, option)}
                        className={`rounded-xs border p-3.5 text-left font-display text-sm font-bold tracking-wide transition-all ${
                          selected
                            ? "border-[#0E2A47] bg-[#0E2A47] text-white shadow-xs"
                            : "border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50"
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
