import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Section } from "@/components/site/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Toronto Best Moving | GTA Movers" },
      {
        name: "description",
        content:
          "Contact Toronto Best Moving to discuss your residential or commercial move anywhere in Toronto and the Greater Toronto Area.",
      },
      { property: "og:title", content: "Contact Toronto Best Moving" },
      { property: "og:description", content: "Get in touch about your move across Toronto and the GTA." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs invert items={[{ label: "Home", to: "/" }, { label: "Contact Us" }]} />
          <h1 className="mt-5 max-w-2xl text-4xl md:text-5xl">Contact us</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            The fastest way to get a price is the quote form — it captures everything we need to give
            you an accurate estimate.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="surface-card p-6">
            <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg">Phone</h2>
            <a href={site.phoneHref} className="mt-1 block text-sm text-muted-foreground hover:text-accent">
              {site.phone}
            </a>
            <p className="mt-1 text-xs text-muted-foreground"></p>
          </div>
          <div className="surface-card p-6">
            <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg">Email</h2>
            <p className="mt-1 text-sm text-muted-foreground">{site.email}</p>
            <p className="mt-1 text-xs text-muted-foreground"></p>
          </div>
          <div className="surface-card p-6">
            <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
            <h2 className="mt-3 font-display text-lg">Service area</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Toronto and the Greater Toronto Area.
            </p>
            <Link to="/locations" className="mt-1 inline-block text-xs font-semibold text-accent">
              View all areas
            </Link>
          </div>
        </div>

        <div className="mt-8 surface-card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 text-accent" aria-hidden="true" />
            <div>
              <h2 className="font-display text-lg">Hours</h2>
              <p className="text-sm text-muted-foreground">{site.hours}</p>
            </div>
          </div>
          <Link
            to="/quote"
            className="inline-flex justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
          >
            Request a free quote
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
