import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Phone } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { company, quoteOptions } from "@/lib/site-data";
import { submitLead } from "@/lib/leads.functions";

type Answers = {
  need: string;
  size: string;
  place: string;
  timeline: string;
};

const steps = [
  { key: "need", label: "Select Structure Requirement", options: quoteOptions.need },
  { key: "size", label: "Estimated Covered Area", options: quoteOptions.size },
  { key: "place", label: "Site Location", options: quoteOptions.place },
  { key: "timeline", label: "Execution Timeline", options: quoteOptions.timeline },
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

  const total = steps.length + 1;
  const isDetails = stepIndex === steps.length;
  const progress = Math.round(((stepIndex + (isDetails ? 1 : 0)) / total) * 100);

  function choose(key: keyof Answers, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStepIndex((i) => Math.min(i + 1, steps.length));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    try {
      const res = await send({
        data: {
          name: String(form.get("name") ?? ""),
          phone: String(form.get("phone") ?? ""),
          location: answers.place ?? String(form.get("location") ?? "Pan India"),
          requirementType: answers.need ?? "Industrial Shed",
          message: `Need: ${answers.need ?? "-"} | Size: ${answers.size ?? "-"} | Timeline: ${answers.timeline ?? "-"} | Notes: ${String(form.get("message") ?? "")}`,
          source: "quote-wizard",
          company: String(form.get("company") ?? ""),
        },
      });
      setStatus("done");
      if (res?.whatsappUrl) {
        window.open(res.whatsappUrl, "_blank");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="quote" className="bg-navy-obsidian py-14 sm:py-20 border-b border-white/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-white/10 pb-5 mb-8">
          <span className="font-mono text-xs font-semibold text-sky-400 uppercase tracking-tight block mb-1">
            GUIDED ESTIMATION WIZARD
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
            Get Your Structural Quotation
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-sans">
            Select your project parameters to receive an itemized estimate and schedule a free on-site survey.
          </p>
        </div>

        <div className="spec-plate-navy overflow-hidden shadow-2xl">
          {/* Progress Bar */}
          <div className="h-1 w-full bg-white/10">
            <div
              className="h-full bg-amber-400 transition-all duration-300"
              style={{ width: `${status === "done" ? 100 : progress}%` }}
            />
          </div>

          <div className="p-6 sm:p-8">
            {status === "done" ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <CheckCircle2 className="size-12 text-emerald-400" />
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Request Dispatched to Noida Yard
                </h3>
                <p className="max-w-md text-xs sm:text-sm text-slate-300 font-sans">
                  Abdul or MD Khurshid will review your specifications and contact you shortly.
                </p>
              </div>
            ) : isDetails ? (
              <form onSubmit={onSubmit} className="space-y-4 font-mono text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {steps.map((step) => {
                    const value = answers[step.key];
                    return value ? (
                      <span
                        key={step.key}
                        className="rounded-xs bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-300 border border-sky-400/20"
                      >
                        {value}
                      </span>
                    ) : null;
                  })}
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-white pt-2">
                  Contact Information for Quotation
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-slate-300 uppercase mb-1 font-semibold">
                      Your Name
                    </label>
                    <input
                      name="name"
                      required
                      minLength={2}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xs border border-white/15 bg-[#080D1A] px-3.5 py-2.5 text-xs text-white outline-none focus:border-sky-400 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 uppercase mb-1 font-semibold">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      name="phone"
                      required
                      inputMode="tel"
                      placeholder="+91 Mobile Number"
                      className="w-full rounded-xs border border-white/15 bg-[#080D1A] px-3.5 py-2.5 text-xs text-white outline-none focus:border-sky-400 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1 font-semibold">
                    Additional Site Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Clear span requirements, eaves height, crane support needs, etc."
                    className="w-full rounded-xs border border-white/15 bg-[#080D1A] px-3.5 py-2.5 text-xs text-white outline-none focus:border-sky-400 font-sans"
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: "none" }}
                  className="hidden"
                />

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStepIndex(steps.length - 1)}
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    <ArrowLeft className="size-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-elite"
                  >
                    {status === "sending" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <ArrowRight className="size-4" />
                    )}
                    <span>Submit &amp; Send to WhatsApp</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4 font-mono text-xs text-slate-400 border-b border-white/10 pb-2">
                  <span>
                    Step {stepIndex + 1} of {total}
                  </span>
                  {stepIndex > 0 ? (
                    <button
                      type="button"
                      onClick={() => setStepIndex((i) => i - 1)}
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <ArrowLeft className="size-3.5" />
                      <span>Back</span>
                    </button>
                  ) : null}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {steps[stepIndex]!.label}
                </h3>

                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {steps[stepIndex]!.options.map((option) => {
                    const selected = answers[steps[stepIndex]!.key] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => choose(steps[stepIndex]!.key, option)}
                        className={`rounded-xs border p-3.5 text-left font-display text-sm font-bold uppercase tracking-wide transition-all ${
                          selected
                            ? "border-sky-400 bg-sky-500/20 text-white shadow-xs"
                            : "border-white/10 bg-[#080D1A] text-slate-300 hover:border-white/20 hover:text-white"
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
