import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Section } from "@/components/site/Section";
import { quoteSchema } from "@/lib/quote.functions";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      {
        title: "Get a Free Moving Quote | Toronto Best Moving",
      },
      {
        name: "description",
        content:
          "Request a free moving quote for your Toronto or GTA move. Share your addresses, date and home size and we will send a clear written estimate.",
      },
      {
        property: "og:title",
        content: "Get a Free Moving Quote | Toronto Best Moving",
      },
      {
        property: "og:description",
        content: "Free, no-obligation moving estimates across the GTA.",
      },
      {
        property: "og:url",
        content: "/quote",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/quote",
      },
    ],
  }),
  component: QuotePage,
});

const propertyTypes = [
  "House",
  "Condo / Apartment",
  "Townhouse",
  "Office",
  "Storage unit",
  "Other",
];

const bedroomOptions = [
  "Studio",
  "1 bedroom",
  "2 bedrooms",
  "3 bedrooms",
  "4 bedrooms",
  "5+ bedrooms",
  "Not applicable",
];

const field =
  "mt-1.5 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30";

function QuotePage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const [error, setError] = useState<string | null>(null);

  const [fieldErrors, setFieldErrors] = useState<
    Record<string, string>
  >({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError(null);
    setFieldErrors({});

    const fd = new FormData(e.currentTarget);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      movingFrom: String(fd.get("movingFrom") ?? ""),
      movingTo: String(fd.get("movingTo") ?? ""),
      movingDate: String(fd.get("movingDate") ?? ""),
      propertyType: String(fd.get("propertyType") ?? ""),
      bedrooms: String(fd.get("bedrooms") ?? ""),
      servicesNeeded: fd.getAll("servicesNeeded").map(String),
      details: String(fd.get("details") ?? ""),
    };

    const parsed = quoteSchema.safeParse(payload);

    if (!parsed.success) {
      const errs: Record<string, string> = {};

      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);

        if (!errs[key]) {
          errs[key] = issue.message;
        }
      }

      setFieldErrors(errs);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            access_key: "0f19e44a-dbe5-472d-b049-6a3537fd1b25",

            subject: `New moving quote request — ${parsed.data.name}`,

            from_name: "Toronto Best Moving Website",

            email: parsed.data.email,

            replyto: parsed.data.email,

            name: parsed.data.name,

            phone: parsed.data.phone,

            "Moving from": parsed.data.movingFrom,

            "Moving to": parsed.data.movingTo,

            "Moving date": parsed.data.movingDate,

            "Property type": parsed.data.propertyType,

            Bedrooms: parsed.data.bedrooms,

            "Services required":
              parsed.data.servicesNeeded.join(", ") ||
              "Not specified",

            message:
              parsed.data.details ||
              "No additional details provided",
          }),
        }
      );

      const result = await response.json();

      console.log("Web3Forms response:", result);

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Web3Forms could not send the request."
        );
      }

      setStatus("success");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error("Web3Forms error:", err);

      setStatus("idle");

      setError(
        err instanceof Error
          ? err.message
          : "We could not send your request. Please try again."
      );
    }
  }

  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs
            invert
            items={[
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Get Free Quote",
              },
            ]}
          />

          <h1 className="mt-5 max-w-2xl text-4xl md:text-5xl">
            Get a free moving quote
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            Tell us about the move and we will send back a clear
            written estimate. No obligation, and your details go
            straight to our team.
          </p>
        </div>
      </section>

      <Section>
        {status === "success" ? (
          <div className="mx-auto max-w-2xl surface-card p-10 text-center">
            <CheckCircle2
              className="mx-auto h-12 w-12 text-accent"
              aria-hidden="true"
            />

            <h2 className="mt-5 font-display text-2xl">
              Your Quote Request Has Been Received!
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Thank you for contacting Toronto Best Moving.
              We've received your request and will get back to
              you shortly.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
              >
                Back to home
              </Link>

              <a
                href={site.phoneHref}
                className="rounded-md border border-border px-6 py-3 text-sm font-semibold"
              >
                Call {site.phone}
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="mx-auto max-w-3xl surface-card p-6 md:p-10"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Full name"
                name="name"
                error={fieldErrors["name"]}
              >
                <input
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className={field}
                />
              </Field>

              <Field
                label="Email"
                name="email"
                error={fieldErrors["email"]}
              >
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className={field}
                />
              </Field>

              <Field
                label="Phone"
                name="phone"
                error={fieldErrors["phone"]}
              >
                <input
                  name="phone"
                  type="tel"
                  required
                  maxLength={30}
                  className={field}
                />
              </Field>

              <Field
                label="Moving date"
                name="movingDate"
                error={fieldErrors["movingDate"]}
              >
                <input
                  name="movingDate"
                  type="date"
                  required
                  className={field}
                />
              </Field>

              <Field
                label="Moving from"
                name="movingFrom"
                error={fieldErrors["movingFrom"]}
              >
                <input
                  name="movingFrom"
                  type="text"
                  required
                  maxLength={160}
                  placeholder="Address or city"
                  className={field}
                />
              </Field>

              <Field
                label="Moving to"
                name="movingTo"
                error={fieldErrors["movingTo"]}
              >
                <input
                  name="movingTo"
                  type="text"
                  required
                  maxLength={160}
                  placeholder="Address or city"
                  className={field}
                />
              </Field>

              <Field
                label="Property type"
                name="propertyType"
                error={fieldErrors["propertyType"]}
              >
                <select
                  name="propertyType"
                  required
                  defaultValue=""
                  className={field}
                >
                  <option value="" disabled>
                    Select…
                  </option>

                  {propertyTypes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Number of bedrooms"
                name="bedrooms"
                error={fieldErrors["bedrooms"]}
              >
                <select
                  name="bedrooms"
                  required
                  defaultValue=""
                  className={field}
                >
                  <option value="" disabled>
                    Select…
                  </option>

                  {bedroomOptions.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <fieldset className="mt-7">
              <legend className="text-sm font-semibold">
                Services required
              </legend>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {services.map((s) => (
                  <label
                    key={s.slug}
                    className="flex items-center gap-2.5 text-sm text-muted-foreground"
                  >
                    <input
                      type="checkbox"
                      name="servicesNeeded"
                      value={s.title}
                      className="h-4 w-4 rounded border-input accent-[var(--accent)]"
                    />

                    {s.title}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-7">
              <label
                htmlFor="details"
                className="text-sm font-semibold"
              >
                Additional details
              </label>

              <textarea
                id="details"
                name="details"
                rows={5}
                maxLength={2000}
                placeholder="Elevators, stairs, parking, large items, flexible dates…"
                className={field}
              />
            </div>

            {error ? (
              <p
                role="alert"
                className="mt-5 rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-accent-foreground transition-all hover:brightness-110 disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                  Sending…
                </>
              ) : (
                "Request my free quote"
              )}
            </button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Your request is sent directly to our team by email.
              We never share your details.
            </p>
          </form>
        )}
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-semibold"
      >
        {label}
      </label>

      {children}

      {error ? (
        <p className="mt-1 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}