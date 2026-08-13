import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, Phone } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { company, quoteOptions } from "@/lib/site-data";
import { submitLead } from "@/lib/leads.functions";
import { Reveal } from "./Reveal";

type Answers = {
  need: string;
  size: string;
  place: string;
  timeline: string;
};

const steps = [
  { key: "need", label: "What do you need?", options: quoteOptions.need },
  { key: "size", label: "Approximate area", options: quoteOptions.size },
  { key: "place", label: "Where is the site?", options: quoteOptions.place },
  { key: "timeline", label: "When do you want to start?", options: quoteOptions.timeline },
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
    <section id="quote" className="content-auto bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="eyebrow flex items-center justify-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            Free quotation
            <span className="h-px w-10 bg-primary" />
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Get your shed quoted in 4 taps
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Answer four quick questions. We'll call you back with an estimate and schedule a free
            site visit.
          </p>
        </Reveal>

        <Reveal
          delay={80}
          className="mt-10 overflow-hidden rounded-sm border border-border bg-card shadow-card"
        >
          <div className="h-1 w-full bg-muted">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${status === "done" ? 100 : progress}%` }}
            />
          </div>

          <div className="p-6 sm:p-10">
            {status === "done" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle2 className="size-14 text-whatsapp" />
                <h3 className="font-display text-2xl font-bold uppercase text-foreground">
                  Request received
                </h3>
                <p className="max-w-md text-sm text-muted-foreground">
                  Thanks! Our team will call you shortly on the number you shared. For anything
                  urgent, call us directly.
                </p>
                <a
                  href={company.phoneHref}
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground"
                >
                  <Phone className="size-4" />
                  {company.phone}
                </a>
              </div>
            ) : isDetails ? (
              <form onSubmit={onSubmit} className="grid gap-5">
                <div className="flex flex-wrap gap-2">
                  {steps.map((step) => {
                    const value = answers[step.key];
                    return value ? (
                      <span
                        key={step.key}
                        className="rounded-sm bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {value}
                      </span>
                    ) : null;
                  })}
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-foreground sm:text-2xl">
                  Where should we send the quotation?
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-sm font-medium text-foreground">
                    Your name
                    <input
                      name="name"
                      required
                      minLength={2}
                      placeholder="Rahul Sharma"
                      className="rounded-sm border border-border bg-background px-4 py-3 text-base font-normal text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </label>
                  <label className="grid gap-1.5 text-sm font-medium text-foreground">
                    Phone / WhatsApp
                    <input
                      name="phone"
                      required
                      inputMode="tel"
                      placeholder="98xxxxxxxx"
                      className="rounded-sm border border-border bg-background px-4 py-3 text-base font-normal text-foreground outline-none transition-colors focus:border-primary"
                    />
                  </label>
                </div>

                <label className="grid gap-1.5 text-sm font-medium text-foreground">
                  Anything else we should know? (optional)
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Site condition, height required, deadline…"
                    className="rounded-sm border border-border bg-background px-4 py-3 text-base font-normal text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>

                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="hidden"
                />

                {status === "error" ? (
                  <p className="text-sm text-signal">
                    Something went wrong. Please call {company.phone} instead.
                  </p>
                ) : null}

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStepIndex(steps.length - 1)}
                    className="inline-flex items-center gap-2 rounded-sm border border-border px-4 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowLeft className="size-4" />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70 sm:flex-none"
                  >
                    {status === "sending" ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    )}
                    Send my request
                  </button>
                </div>
              </form>
            ) : (
              <div className="grid gap-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="eyebrow text-muted-foreground">
                    Step {stepIndex + 1} of {total}
                  </p>
                  {stepIndex > 0 ? (
                    <button
                      type="button"
                      onClick={() => setStepIndex((i) => i - 1)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                    >
                      <ArrowLeft className="size-4" />
                      Back
                    </button>
                  ) : null}
                </div>

                <h3 className="font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
                  {steps[stepIndex]!.label}
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {steps[stepIndex]!.options.map((option) => {
                    const selected = answers[steps[stepIndex]!.key] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => choose(steps[stepIndex]!.key, option)}
                        className={`rounded-sm border px-4 py-4 text-left font-display text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary ${
                          selected
                            ? "border-primary bg-primary-soft text-primary"
                            : "border-border bg-background text-foreground"
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
        </Reveal>
      </div>
    </section>
  );
}
