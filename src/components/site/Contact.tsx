import { useState, type FormEvent } from "react";
import { CheckCircle2, Instagram, Loader2, Mail, MapPin, MessageCircle, Phone, RefreshCw } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
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
    { icon: Phone, label: "Call us", value: company.phone, href: company.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: company.phone, href: company.whatsapp },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Instagram, label: "Instagram", value: "@tin_shade_warehouse", href: company.instagram },
    { icon: MapPin, label: "Workshop & HQ", value: company.address },
  ];

  return (
    <>
      <section className="bg-steel py-16 text-steel-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 lg:px-10">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-extrabold uppercase leading-tight sm:text-3xl">
              Planning a shed or roofing project?
            </h2>
            <p className="mt-3 text-sm text-steel-muted">
              Share your location, shed size and purpose — get a free site visit and cost estimate today.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="size-4" /> {company.phone}
            </a>
            <a
              href={company.whatsappText}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-steel-line px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title={
                <>
                  Talk to the <span className="text-primary">site team</span>
                </>
              }
              sub="We answer every enquiry personally — usually within the hour."
            />
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4 py-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                    <Icon className="size-4" />
                  </span>
                  <span>
                    <span className="eyebrow block text-muted-foreground">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-foreground">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <Reveal
            as="form"
            variant="right"
            onSubmit={onSubmit}
            className="rounded-sm border border-border bg-card p-6 shadow-card sm:p-9"
          >
            <h3 className="font-display text-2xl font-bold uppercase text-foreground">
              Request a quotation
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Fill in your project details below to receive a written estimate and free site visit schedule.
            </p>

            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="sr-only"
            />

            {status === "sent" ? (
              <div className="mt-6 flex flex-col items-center gap-4 rounded-sm border border-whatsapp/30 bg-whatsapp/10 p-6 text-center">
                <CheckCircle2 className="size-12 text-whatsapp" />
                <div>
                  <h4 className="font-display text-xl font-bold uppercase text-foreground">
                    ENQUIRY RECEIVED
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thank you. Our team will review your requirement and contact you shortly.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 w-full">
                  <a
                    href={company.phoneHref}
                    className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 font-display text-sm font-semibold uppercase text-primary-foreground shadow-sm"
                  >
                    <Phone className="size-4" />
                    CALL US
                  </a>
                  <a
                    href={company.whatsappText}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-3 font-display text-sm font-semibold uppercase text-white shadow-sm"
                  >
                    <MessageCircle className="size-4" />
                    WHATSAPP US
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs font-semibold text-muted-foreground underline hover:text-foreground"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : status === "error" ? (
              <div className="mt-6 flex flex-col items-center gap-4 rounded-sm border border-destructive/30 bg-destructive/10 p-6 text-center">
                <div>
                  <h4 className="font-display text-lg font-bold uppercase text-destructive">
                    Something went wrong while sending your enquiry.
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Please try again or connect directly with our team on WhatsApp.
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-3 w-full">
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-5 py-3 font-display text-xs font-semibold uppercase text-foreground"
                  >
                    <RefreshCw className="size-4" />
                    TRY AGAIN
                  </button>
                  <a
                    href={company.whatsappText}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-3 font-display text-xs font-semibold uppercase text-white"
                  >
                    <MessageCircle className="size-4" />
                    CONTACT US ON WHATSAPP
                  </a>
                </div>
              </div>
            ) : (
              <>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Rahul Sharma" autoComplete="name" required />
                  <Field label="Phone number" name="phone" type="tel" placeholder="98xxxxxxxx" autoComplete="tel" required />

                  <div className="sm:col-span-2">
                    <label className="eyebrow block text-muted-foreground" htmlFor="requirementType">
                      Requirement type
                    </label>
                    <select
                      id="requirementType"
                      name="requirementType"
                      className="mt-2 w-full rounded-sm border border-input bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors focus:border-ring"
                    >
                      {quoteOptions.need.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <Field label="Location / site address" name="location" placeholder="e.g. Sector 63 Noida / Greater Noida" autoComplete="street-address" required />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="eyebrow block text-muted-foreground" htmlFor="message">
                      Project details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Shed size, purpose, timeline…"
                      className="mt-2 w-full rounded-sm border border-input bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
                    />
                  </div>
                </div>

                {validationError && (
                  <p className="mt-3 text-xs font-semibold text-destructive">{validationError}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-signal px-6 py-4 font-display text-sm font-semibold uppercase tracking-wider text-signal-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Sending enquiry…
                    </>
                  ) : (
                    "Send enquiry"
                  )}
                </button>
              </>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="eyebrow block text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 w-full rounded-sm border border-input bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
      />
    </div>
  );
}
