import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, MapPin } from "lucide-react";
import condoImg from "@/assets/condo-move.jpg";
import familyImg from "@/assets/family-move.jpg";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqList, faqSchema } from "@/components/site/Faq";
import { Section, SectionHeading } from "@/components/site/Section";
import { getLocation, locations } from "@/data/locations";
import { services } from "@/lib/site";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const location = getLocation(params.city);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Location unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const l = loaderData.location;
    return {
      meta: [
        { title: l.metaTitle },
        { name: "description", content: l.metaDescription },
        { property: "og:title", content: l.metaTitle },
        { property: "og:description", content: l.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/locations/${params.city}` },
      ],
      links: [{ rel: "canonical", href: `/locations/${params.city}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(faqSchema(l.faqs)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Locations", item: "/locations" },
              { name: l.name, item: `/locations/${params.city}` },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            name: `Toronto Best Moving — ${l.name}`,
            description: l.metaDescription,
            areaServed: { "@type": "City", name: l.name, addressRegion: "ON", addressCountry: "CA" },
          }),
        },
      ],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { location: l } = Route.useLoaderData();
  const nearby = l.nearby.map((s: string) => getLocation(s)).filter(Boolean);

  const blocks = [
    { title: `Residential moving in ${l.name}`, body: l.residential, slug: "residential-moving" },
    { title: `Apartment and condo moving in ${l.name}`, body: l.condo, slug: "apartment-condo-moving" },
    { title: `Commercial moving in ${l.name}`, body: l.commercial, slug: "commercial-moving" },
    { title: `Packing and loading in ${l.name}`, body: l.packing, slug: "packing-unpacking" },
    { title: `Local moving in ${l.name}`, body: l.local, slug: "local-moving" },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img
          src={condoImg}
          alt={`Moving truck loading furniture in ${l.name}`}
          width={1400}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy-deep/75" aria-hidden="true" />
        <div className="container-page relative py-14 md:py-20">
          <Breadcrumbs
            invert
            items={[
              { label: "Home", to: "/" },
              { label: "Locations", to: "/locations" },
              { label: l.name },
            ]}
          />
          <p className="eyebrow mt-6 flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {l.region}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl md:text-5xl">{l.h1}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">{l.lead}</p>
          <Link
            to="/quote"
            className="mt-8 inline-flex rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
          >
            Get a free {l.name} moving quote
          </Link>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <div className="prose-body max-w-2xl">
              {l.intro.map((p: string) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl">Moving services available in {l.name}</h2>
            <div className="mt-6 space-y-7">
              {blocks.map((b) => (
                <article key={b.slug}>
                  <h3 className="font-display text-lg">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                  <Link
                    to="/services/$service"
                    params={{ service: b.slug }}
                    className="mt-2 inline-block text-xs font-bold uppercase tracking-[0.12em] text-accent"
                  >
                    More about this service
                  </Link>
                </article>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl">Local access notes for {l.name}</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {l.localNotes.map((n: { title: string; body: string }) => (
                <div key={n.title} className="surface-card p-5">
                  <h3 className="font-display text-base">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.body}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-12 font-display text-2xl">Neighbourhoods we serve in {l.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{l.housing}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {l.neighbourhoods.map((n: string) => (
                <li
                  key={n}
                  className="rounded-md border border-border bg-card px-3 py-1.5 text-xs font-semibold"
                >
                  {n}
                </li>
              ))}
            </ul>

            <div className="mt-12 overflow-hidden rounded-lg">
              <img
                src={familyImg}
                alt={`A family moving into a new home in ${l.name}`}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <h2 className="mt-12 font-display text-2xl">{l.name} moving questions</h2>
            <div className="mt-4">
              <FaqList faqs={l.faqs} />
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <div className="surface-card p-6">
              <h2 className="font-display text-lg">Request a quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us your {l.name} addresses and dates and we will send a clear written estimate.
              </p>
              <Link
                to="/quote"
                className="mt-5 inline-flex w-full justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                Get a free quote
              </Link>
            </div>
            <div className="surface-card p-6">
              <h2 className="font-display text-lg">Services</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {services.map((s) => (
                  <li key={s.slug} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <Link
                      to="/services/$service"
                      params={{ service: s.slug }}
                      className="hover:text-accent"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="font-display text-lg">Nearby areas</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {nearby.map((n: { slug: string; name: string } | undefined) => (
                  <li key={n!.slug}>
                    <Link
                      to="/locations/$city"
                      params={{ city: n!.slug }}
                      className="font-semibold hover:text-accent"
                    >
                      Movers in {n!.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/locations" className="font-semibold hover:text-accent">
                    All service areas
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Other areas"
          title={`Also moving near ${l.name}`}
          intro="We cover the wider GTA — choose another city for local details."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {locations
            .filter((o) => o.slug !== l.slug)
            .slice(0, 8)
            .map((o) => (
              <Link
                key={o.slug}
                to="/locations/$city"
                params={{ city: o.slug }}
                className="rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                {o.name}
              </Link>
            ))}
        </div>
      </Section>

      <CtaBand title={`Planning a move in ${l.name}?`} />
    </>
  );
}
