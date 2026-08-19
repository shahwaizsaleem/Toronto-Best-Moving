import { createFileRoute, Link } from "@tanstack/react-router";
import commercialImg from "@/assets/commercial-move.jpg";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Section, SectionHeading } from "@/components/site/Section";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Moving Services in Toronto & the GTA | Toronto Best Moving" },
      {
        name: "description",
        content:
          "Residential, commercial, condo, packing, loading, local and long-distance moving services across Toronto and the Greater Toronto Area.",
      },
      { property: "og:title", content: "Moving Services in Toronto & the GTA" },
      {
        property: "og:description",
        content: "Full-service moving for homes, condos and businesses across Toronto and the GTA.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Services", item: "/services" },
          ]),
        ),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs invert items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          <h1 className="mt-5 max-w-2xl text-4xl md:text-5xl">Moving services across the GTA</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            Whatever the move looks like — a downtown condo, a suburban family home or an office that
            has to reopen on Monday — the planning matters as much as the lifting.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$service"
              params={{ service: s.slug }}
              className="surface-card flex flex-col p-7"
            >
              <h2 className="font-display text-xl">{s.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <span className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Read more
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={commercialImg}
              alt="Movers transporting labelled crates through a modern office lobby"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Not sure what you need?"
              title="Tell us about the move and we will recommend the right service"
              intro="Most enquiries end up as a combination — packing plus transport, or loading help plus a local move. The quote form takes about two minutes."
            />
            <Link
              to="/quote"
              className="mt-7 inline-flex rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              Get a free quote
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
