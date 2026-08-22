import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, MessageCircle, AlertCircle } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
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
    "1,000 - 5,000 sq ft",
    "5,000 - 10,000 sq ft",
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
    "1 - 3 months",
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Answers>({
    need: "",
    size: "",
    place: "",
    timeline: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    function handleNeedSelection(e: Event) {
      const customEvent = e as CustomEvent<{ need: string }>;
      if (customEvent.detail?.need) {
        setAnswers((prev) => ({ ...prev, need: customEvent.detail.need }));
        setStepIndex(1);
      }
    }
    window.addEventListener("tsn-select-quote-need", handleNeedSelection);
    return () => window.removeEventListener("tsn-select-quote-need", handleNeedSelection);
  }, []);

  const totalSteps = steps.length + 1; // 4 questions + 1 contact form
  const isQuestionStep = stepIndex < steps.length;
  const isDetails = stepIndex === steps.length;
  const currentStep = isQuestionStep ? steps[stepIndex] : null;

  function selectOption(key: (typeof steps)[number]["key"], val: string) {
    setAnswers((prev) => ({ ...prev, [key]: val }));
    setStepIndex((prev) => prev + 1);
  }

  function goBack() {
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
    }
  }

  function resetForm() {
    setAnswers({
      need: "",
      size: "",
      place: "",
      timeline: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setStepIndex(0);
    setStatus("idle");
    setValidationError(null);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setValidationError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const botField = String(data.get("company_url") ?? "").trim();

    if (botField) return;

    if (!name || name.length < 2) {
      setValidationError("Please enter your full name.");
      return;
    }

    if (!phone || !indianPhoneRegex.test(phone)) {
      setValidationError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("submitting");

    const fullMessage = [
      answers.need && `Requirement: ${answers.need}`,
      answers.size && `Size: ${answers.size}`,
      answers.place && `Location: ${answers.place}`,
      answers.timeline && `Timeline: ${answers.timeline}`,
      message && `Notes: ${message}`,
    ]
      .filter(Boolean)
      .join(" | ");

    try {
      const res = await send({
        data: {
          name,
          phone,
          location: answers.place || "Not specified",
          requirementType: answers.need || "General Quote",
          message: fullMessage,
          source: "quote-wizard",
          email,
        },
      });

      setStatus("success");
      if (res?.whatsappUrl) {
        window.open(res.whatsappUrl, "_blank");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      id="quote"
      className="bg-[#101B3B] border border-indigo-200/25 p-6 sm:p-10 rounded-[3px] shadow-2xl text-white relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 size-72 bg-[#1E3A8A]/15 blur-3xl pointer-events-none" />

      {/* ──────── TOP PROGRESS BAR IN SAFETY YELLOW ──────── */}
      <div className="mb-8 border-b border-indigo-200/15 pb-6">
        <div className="flex items-center justify-between font-mono text-xs text-[#8E9CB8] mb-3">
          <span className="font-bold text-[#F59E0B] tracking-wider uppercase">
            {status === "success" ? "BOQ DISPATCHED" : `STEP 0${stepIndex + 1} OF 0${totalSteps}`}
          </span>
          <span className="text-[#C7D2FE]">
            {status === "success" ? "100%" : `${Math.round(((stepIndex + 1) / totalSteps) * 100)}% COMPLETED`}
          </span>
        </div>

        {/* Progress Track */}
        <div className="h-1.5 w-full bg-[#0A1128] overflow-hidden rounded-[1px]">
          <div
            className="h-full bg-[#F59E0B] transition-all duration-500 ease-out"
            style={{
              width: status === "success" ? "100%" : `${((stepIndex + 1) / totalSteps) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* ──────── STEP CONTENT ──────── */}
      {status === "success" ? (
        /* SUCCESS CONFIRMATION */
        <div className="py-10 text-center space-y-6">
          <div className="size-16 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center mx-auto text-[#25D366]">
            <CheckCircle2 className="size-8" />
          </div>

          <div className="space-y-2">
            <h3 className="font-editorial-title text-2xl sm:text-4xl font-extrabold text-white uppercase">
              Specification Received
            </h3>
            <p className="text-sm text-[#C7D2FE] font-sans max-w-md mx-auto">
              Our master engineering desk in Noida Sector 10 is reviewing your requirements. We will connect with initial steel tonnage and timeline within 2 hours.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={resetForm}
              className="btn-navy-outline text-xs"
            >
              <span>CALCULATE ANOTHER ESTIMATE</span>
            </button>
            <a
              href="tel:+918527977714"
              className="btn-red-primary text-xs"
            >
              <span>SPEAK DIRECTLY: +91 85279 77714</span>
            </a>
          </div>
        </div>
      ) : (
        <div>
          {isQuestionStep && currentStep ? (
            /* QUESTIONS STEP (1 to 4) */
            <div className="space-y-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#F59E0B] uppercase">
                  {currentStep.label}
                </span>
                <h3 className="font-editorial-title text-2xl sm:text-3xl font-extrabold text-white uppercase mt-1">
                  {currentStep.desc}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentStep.options.map((opt) => {
                  const isSelected = answers[currentStep.key] === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => selectOption(currentStep.key, opt)}
                      className={`p-4 text-left border rounded-[2px] font-mono text-xs font-bold transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-[#0A1128] border-[#F59E0B] text-white shadow-md pl-5"
                          : "bg-[#0A1128]/70 border-indigo-200/20 text-[#C7D2FE] hover:border-indigo-200/50 hover:text-white"
                      }`}
                    >
                      <span>{opt}</span>
                      <ArrowRight
                        className={`size-3.5 ${
                          isSelected ? "text-[#F59E0B]" : "text-[#8E9CB8] opacity-50"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {stepIndex > 0 && (
                <div className="pt-4 border-t border-indigo-200/15">
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8E9CB8] hover:text-white transition-colors"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>PREVIOUS STEP</span>
                  </button>
                </div>
              )}
            </div>
          ) : isDetails ? (
            /* STEP 5: CONTACT DETAILS */
            <form onSubmit={onSubmit} className="space-y-5 font-mono text-xs">
              
              {/* Active Parameters Pills */}
              <div className="flex flex-wrap gap-1.5 border-b border-indigo-200/15 pb-4">
                {steps.map((step) => {
                  const value = answers[step.key];
                  return value ? (
                    <span
                      key={step.key}
                      className="bg-[#0A1128] px-3 py-1 text-xs font-bold text-white border border-indigo-200/20 rounded-[2px]"
                    >
                      {value}
                    </span>
                  ) : null;
                })}
              </div>

              <div className="pt-2">
                <span className="font-mono text-xs font-bold text-[#F59E0B] uppercase">
                  STEP 5: CONTACT DETAILS
                </span>
                <h3 className="font-editorial-title text-xl sm:text-2xl font-extrabold text-white uppercase mt-1">
                  Where should we dispatch your quotation?
                </h3>
              </div>

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
                    minLength={2}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full border border-indigo-200/20 bg-[#0A1128] px-4 py-3 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
                  />
                </div>
                <div>
                  <label className="block text-white uppercase mb-1.5 font-bold">
                    Phone Number <span className="text-[#F59E0B]">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 10-Digit Mobile"
                    className="w-full border border-indigo-200/20 bg-[#0A1128] px-4 py-3 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white uppercase mb-1.5 font-bold">
                  Email Address (Optional)
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="e.g. rajesh@company.com"
                  className="w-full border border-indigo-200/20 bg-[#0A1128] px-4 py-3 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
                />
              </div>

              <div>
                <label className="block text-white uppercase mb-1.5 font-bold">
                  Project Details &amp; Dimensions (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Clear span requirements, eaves height, crane support needs, site plot address..."
                  className="w-full border border-indigo-200/20 bg-[#0A1128] px-4 py-3 text-xs text-white outline-none focus:border-[#F59E0B] font-sans rounded-[2px]"
                />
              </div>

              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="company_url"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div className="pt-4 flex items-center justify-between gap-4 border-t border-indigo-200/15">
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-1.5 text-[#8E9CB8] hover:text-white transition-colors"
                >
                  <ArrowLeft className="size-3.5" />
                  <span>BACK</span>
                </button>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-red-primary text-xs"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      <span>DISPATCHING SPECIFICATION...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT FOR BOQ CALCULATION</span>
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          ) : null}
        </div>
      )}
    </div>
  );
}
