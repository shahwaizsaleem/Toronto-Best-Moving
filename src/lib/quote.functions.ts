import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(30),

  movingFrom: z
    .string()
    .trim()
    .min(2, "Please enter the origin address or city")
    .max(160),

  movingTo: z
    .string()
    .trim()
    .min(2, "Please enter the destination address or city")
    .max(160),

  movingDate: z
    .string()
    .trim()
    .min(1, "Please choose a moving date")
    .max(40),

  propertyType: z
    .string()
    .trim()
    .min(1, "Please select a property type")
    .max(60),

  bedrooms: z
    .string()
    .trim()
    .min(1, "Please select the number of bedrooms")
    .max(40),

  servicesNeeded: z
    .array(z.string().max(60))
    .max(12)
    .default([]),

  details: z
    .string()
    .trim()
    .max(2000)
    .default(""),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export const submitQuote = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => quoteSchema.parse(data))
  .handler(async ({ data }) => {
    const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];

    if (!accessKey) {
      throw new Error(
        "The quote form is not configured yet. Please call us or email us and we will help right away.",
      );
    }

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,

          subject: `New moving quote request — ${data.name}`,

          from_name: "Toronto Best Moving Website",

          email: data.email,
          replyto: data.email,

          "Full name": data.name,
          Phone: data.phone,
          "Moving from": data.movingFrom,
          "Moving to": data.movingTo,
          "Moving date": data.movingDate,
          "Property type": data.propertyType,
          Bedrooms: data.bedrooms,

          "Services required":
            data.servicesNeeded.join(", ") || "Not specified",

          "Additional details":
            data.details || "None provided",
        }),
      },
    );

    const result = (await response
      .json()
      .catch(() => null)) as {
      success?: boolean;
      message?: string;
    } | null;

    if (!response.ok || !result?.success) {
      throw new Error(
        result?.message ??
          "We could not send your request. Please try again or call us directly.",
      );
    }

    return { ok: true as const };
  });