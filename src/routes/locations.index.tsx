import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Section } from "@/components/site/Section";
import { locations } from "@/data/locations";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Moving Service Areas Across Toronto & the GTA | Toronto Best Moving" },
      {
        name: "description",
        content:
          "We serve 16 communities across Toronto and the GTA, from Barrie to Hamilton and Waterloo to Pickering. Find local moving information for your city.",
      },
      { property: "og:title", content: "Moving Service Areas Across Toronto & the GTA" },
      {
        property: "og:description",
        content: "Local moving services in 16 communities across Toronto and the Greater Toronto Area.",
      },
      { property: "og:url", content: "/locations" },
    ],
    links: [{ rel: "canonical", href: "/locations" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "Locations", item: "/locations" },
          ]),
        ),
      },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs invert items={[{ label: "Home", to: "/" }, { label: "Locations" }]} />
          <h1 className="mt-5 max-w-2xl text-4xl md:text-5xl">Our GTA service areas</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            Sixteen communities, each with different housing, access rules and logistics. Choose your
            city for local moving information and city-specific answers.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <Link
              key={l.slug}
              to="/locations/$city"
              params={{ city: l.slug }}
              className="surface-card flex flex-col p-6"
            >
              <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-accent">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {l.region}
              </span>
              <h2 className="mt-3 font-display text-xl">Movers in {l.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{l.lead}</p>
              <span className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-foreground/60">
                View {l.name} page
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand title="Moving within the GTA?" />
    </>
  );
}
