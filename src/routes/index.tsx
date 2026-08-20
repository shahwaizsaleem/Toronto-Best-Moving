import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Building2, CheckCircle2, Clock, Phone, ShieldCheck, Star } from "lucide-react";
import heroImg from "@/assets/hero-movers.jpg";
import skylineImg from "@/assets/toronto-skyline.jpg";
import packingImg from "@/assets/packing.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { FaqList, faqSchema } from "@/components/site/Faq";
import { QuoteButton, Section, SectionHeading } from "@/components/site/Section";
import { locations } from "@/data/locations";
import { processSteps, services, site } from "@/lib/site";

const homeFaqs = [
  {
    q: "How do I get a moving quote?",
    a: "Complete the quote form with your addresses, date and home size. We review the details and send back a clear written estimate, usually with a couple of follow-up questions.",
  },
  {
    q: "Which areas do you serve?",
    a: "Toronto and the wider GTA, including Mississauga, Vaughan, Markham, Richmond Hill, Oakville, Milton, Pickering, Scarborough, North York, Etobicoke, Hamilton, Barrie, Innisfil, Kitchener and Waterloo.",
  },
  {
    q: "Do you provide packing materials?",
    a: "Yes. Cartons, tape, paper and protective materials are included with any packing service, and we can supply materials for a self-pack move as well.",
  },
  {
    q: "How far in advance should I book?",
    a: "Four to six weeks in peak season (May to September) and for month-end dates. Two to three weeks is often workable in the winter months.",
  },
  {
    q: "Do you move on weekends?",
    a: "Weekend and evening scheduling is available subject to availability. Weekend dates in summer book up first.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toronto Best Moving | Professional Movers in Toronto & GTA" },
      {
        name: "description",
        content:
          "Professional movers in Toronto and across the GTA. Residential, condo and commercial moving, packing and loading. Request your free moving quote today.",
      },
      { property: "og:title", content: "Movers in Toronto & the GTA | Toronto Best Moving" },
      {
        property: "og:description",
        content:
          "Residential, condo and commercial moving services across Toronto and the Greater Toronto Area.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(homeFaqs)) }],
  }),
  component: Home,
});

const trust = [
  { icon: ShieldCheck, title: "Careful handling", body: "Floor protection, blanket wrapping and disassembly as standard on every job." },
  { icon: Clock, title: "Schedules that hold", body: "Elevator windows, permits and access confirmed before move day, not on it." },
  { icon: Boxes, title: "Materials included", body: "Quality cartons, padding and specialty packing supplied with packing services." },
  { icon: Building2, title: "Homes and businesses", body: "Houses, condos, offices and retail units across Toronto and the GTA." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img
          src={heroImg}
          alt="Movers carrying a blanket-wrapped sofa from a home to a moving truck"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40"
          aria-hidden="true"
        />
        <div className="container-page relative py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl rise-in">
            <p className="eyebrow">Toronto &amp; the Greater Toronto Area</p>
            <h1 className="mt-4 text-4xl leading-[1.08] md:text-6xl">
              Moving made simple. Relocation done right.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/75 md:text-lg">
              Professional residential and commercial moving crews for houses, condos and offices
              across Toronto and the GTA — planned properly, protected carefully and finished on
              schedule.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <QuoteButton label="Get a free quote" />
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/30 px-6 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-navy-foreground/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Call now
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-sm text-navy-foreground/70">
              {["Residential & commercial", "Condo and high-rise specialists", "16 GTA service areas"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" /> {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Moving services for every kind of move"
            intro="From a one-bedroom condo downtown to a five-bedroom home in the suburbs or an office relocation over a weekend."
          />
          <div className="lg:justify-self-end">
            <Link
              to="/services"
              className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              View all services →
            </Link>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$service"
              params={{ service: s.slug }}
              className="surface-card group flex flex-col p-6"
            >
              <h3 className="font-display text-lg">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              <span className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="Preparation is what makes a move go well"
              intro="Most moves run long because something was not checked in advance: a parking restriction, an elevator window, a staircase that will not take the sofa. We check first."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {trust.map((t) => (
                <div key={t.title}>
                  <t.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-base">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-[var(--shadow-lift)]">
            <img
              src={packingImg}
              alt="Professional mover wrapping furniture in protective material inside a bright condo"
              width={1200}
              height={900}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How it works" title="Four steps from first enquiry to move day" />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="surface-card p-6">
              <span className="font-display text-3xl text-accent">0{i + 1}</span>
              <h3 className="mt-3 font-display text-base">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img
          src={skylineImg}
          alt="Toronto skyline at dusk"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy-deep/70" aria-hidden="true" />
        <div className="container-page relative py-16 md:py-24">
          <SectionHeading
            eyebrow="Service areas"
            title="16 communities across Toronto and the GTA"
            intro="Every area has its own page with local moving information, access notes and answers to common questions."
            invert
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {locations.map((l) => (
              <Link
                key={l.slug}
                to="/locations/$city"
                params={{ city: l.slug }}
                className="rounded-md border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:bg-navy-foreground/10"
              >
                {l.name}
              </Link>
            ))}
          </div>
          <Link
            to="/locations"
            className="mt-8 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Explore all service areas →
          </Link>
        </div>
      </section>

     <Section tone="muted">
  <SectionHeading
    eyebrow="Client feedback"
    title="What customers tell us"
    intro="See what our customers have to say about their moving experience."
  />

  <div className="mt-10 grid gap-5 md:grid-cols-3">
    {[
      {
        text: "The team was professional, punctual, and made our entire move stress-free. Highly recommended!",
        location: "Alan, Toronto",
      },
      {
        text: "Excellent service from start to finish. Everything arrived safely and the movers were very careful.",
        location: "Derek, Mississauga",
      },
      {
        text: "Great experience! The crew was friendly, efficient, and completed the move much faster than expected.",
        location: "Harry, Brampton",
      },
    ].map((testimonial, index) => (
      <blockquote key={index} className="surface-card p-6">
        <div className="flex gap-1 text-accent" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {testimonial.text}
        </p>

        <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/60">
          {testimonial.location}
        </footer>
      </blockquote>
    ))}
  </div>
</Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions about moving with us" />
          <FaqList faqs={homeFaqs} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
