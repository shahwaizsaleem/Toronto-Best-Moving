import { createFileRoute, Link } from "@tanstack/react-router";
import familyImg from "@/assets/family-move.jpg";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Section, SectionHeading } from "@/components/site/Section";
import { processSteps } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Toronto Best Moving | GTA Moving Company" },
      {
        name: "description",
        content:
          "Learn how Toronto Best Moving plans and carries out residential and commercial relocations across Toronto and the Greater Toronto Area.",
      },
      { property: "og:title", content: "About Toronto Best Moving" },
      {
        property: "og:description",
        content: "How we plan and carry out moves across Toronto and the GTA.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs invert items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
          <h1 className="mt-5 max-w-2xl text-4xl md:text-5xl">About Toronto Best Moving</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            A moving company built around preparation: understanding the property, the building and
            the day before a single item is lifted.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="prose-body max-w-xl">
            <h2 className="font-display text-2xl text-foreground">How we work</h2>
            <p>
              Toronto Best Moving provides residential and commercial moving services across Toronto
              and the Greater Toronto Area. We handle houses, condominiums, apartments, offices and
              retail spaces, along with packing, unpacking, loading and unloading.
            </p>
            <p>
              Our approach is simple: understand the specifics of both addresses before quoting, size
              the crew and truck honestly, protect the property properly and communicate clearly if
              anything changes on the day.
            </p>
            <p>
              [Placeholder — company background, founding details and team information to be added
              once supplied. We do not publish claims about experience, certifications or awards
              that have not been verified.]
            </p>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={familyImg}
              alt="A family carrying boxes into their new home"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Our process" title="What working with us looks like" />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <li key={s.title} className="surface-card p-6">
              <span className="font-display text-3xl text-accent">0{i + 1}</span>
              <h3 className="mt-3 font-display text-base">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
        <Link
          to="/services"
          className="mt-8 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          See what we offer →
        </Link>
      </Section>

      <CtaBand />
    </>
  );
}
