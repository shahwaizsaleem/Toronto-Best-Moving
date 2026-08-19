import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Section, SectionHeading } from "@/components/site/Section";
import { locations } from "@/data/locations";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    const title = `${service.title} in Toronto & the GTA | Toronto Best Moving`;
    return {
      meta: [
        { title },
        { name: "description", content: service.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: service.description.slice(0, 155) },
        { property: "og:url", content: `/services/${params.service}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.service}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Services", item: "/services" },
              { name: service.title, item: `/services/${params.service}` },
            ]),
          ),
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs
            invert
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: service.title },
            ]}
          />
          <h1 className="mt-5 max-w-2xl text-4xl md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            {service.short}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="prose-body max-w-2xl">
            <p className="text-base">{service.description}</p>
            <h2 className="mt-8 font-display text-2xl text-foreground">What is included</h2>
            <ul className="mt-4 space-y-3">
              {service.points.map((p: string) => (
                <li key={p} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <h2 className="mt-10 font-display text-2xl text-foreground">Where we provide it</h2>
            <p className="mt-3 text-sm">
              This service is available across all of our GTA service areas. Choose your city for
              local details and access notes.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {locations.map((l) => (
                <Link
                  key={l.slug}
                  to="/locations/$city"
                  params={{ city: l.slug }}
                  className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          <aside className="h-fit surface-card p-6">
            <h2 className="font-display text-lg">Other services</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$service"
                    params={{ service: s.slug }}
                    className="font-semibold transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                  <p className="text-xs text-muted-foreground">{s.short}</p>
                </li>
              ))}
            </ul>
            <Link
              to="/quote"
              className="mt-6 inline-flex w-full justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
            >
              Get a free quote
            </Link>
          </aside>
        </div>
      </Section>

      <CtaBand title={`Need ${service.title.toLowerCase()}?`} />
    </>
  );
}
