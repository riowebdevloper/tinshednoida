import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const indianPhoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$|^[0-9]{10,12}$/;

const leadSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  phone: z.string().trim().min(8, "Phone number is invalid").max(20),
  email: z.string().trim().email("Invalid email address").optional().or(z.literal("")),
  location: z.string().trim().min(2, "Location is required").max(160),
  requirementType: z.string().trim().optional(),
  size: z.string().trim().optional(),
  timeline: z.string().trim().optional(),
  message: z.string().trim().max(1200).optional(),
  source: z.string().trim().max(60).optional(),
  company: z.string().max(0).optional(), // honeypot
});

export type LeadPayload = z.infer<typeof leadSchema>;

export function buildWhatsAppUrl(payload: LeadPayload): string {
  const text =
    `*New Lead Inquiry - Tin Shade Noida*\n\n` +
    `👤 *Name:* ${payload.name}\n` +
    `📞 *Phone:* ${payload.phone}\n` +
    (payload.email ? `✉️ *Email:* ${payload.email}\n` : "") +
    `📍 *Location:* ${payload.location}\n` +
    (payload.requirementType ? `🏗️ *Requirement:* ${payload.requirementType}\n` : "") +
    (payload.size ? `📐 *Estimated Size:* ${payload.size}\n` : "") +
    (payload.timeline ? `⏱️ *Timeline:* ${payload.timeline}\n` : "") +
    (payload.message ? `📝 *Details:* ${payload.message}\n` : "") +
    `📌 *Source:* Website (${payload.source ?? "quote-wizard"})`;

  return `https://wa.me/918527977714?text=${encodeURIComponent(text)}`;
}

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.company) return { ok: true as const, source: "honeypot", whatsappUrl: "" };

    const formspreeEndpoint =
      process.env["VITE_FORMSPREE_ENDPOINT"] ||
      process.env["FORMSPREE_ENDPOINT"] ||
      "https://formspree.io/f/mzepgrov";

    let submitted = false;

    // Genuinely submit to Formspree
    if (formspreeEndpoint && !formspreeEndpoint.includes("XXXXXXXX")) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            phone: data.phone,
            email: data.email ?? "Not Provided",
            location: data.location,
            requirementType: data.requirementType ?? "Not Specified",
            size: data.size ?? "-",
            timeline: data.timeline ?? "-",
            message: data.message ?? "",
            source: data.source ?? "quote-wizard",
            submittedAt: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          submitted = true;
        }
      } catch (err) {
        console.warn("Formspree endpoint error:", err);
      }
    }

    // Secondary log to Supabase if configured
    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      await supabaseAdmin.from("leads").insert({
        name: data.name,
        phone: data.phone,
        location: data.location,
        message: `Requirement: ${data.requirementType ?? "-"} | Size: ${data.size ?? "-"} | Timeline: ${data.timeline ?? "-"} | Notes: ${data.message ?? "-"}`,
        source: data.source ?? "website",
      });
      submitted = true;
    } catch {
      // ignore
    }

    const whatsappUrl = buildWhatsAppUrl(data);
    return { ok: true as const, submitted, whatsappUrl };
  });
