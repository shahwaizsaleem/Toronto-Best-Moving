import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Section, SectionHeading } from "@/components/site/Section";
import { site } from "@/lib/site";

export const Route = createFileRoute("/hiring")({
  head: () => ({
    meta: [
      { title: "Moving Jobs in Toronto & the GTA | Careers at Toronto Best Moving" },
      {
        name: "description",
        content:
          "Join the Toronto Best Moving crew. We are interested in hearing from movers, drivers and packers across Toronto and the Greater Toronto Area.",
      },
      { property: "og:title", content: "Careers at Toronto Best Moving" },
      { property: "og:description", content: "Moving jobs across Toronto and the GTA." },
      { property: "og:url", content: "/hiring" },
    ],
    links: [{ rel: "canonical", href: "/hiring" }],
  }),
  component: HiringPage,
});

const roles = [
  {
    title: "Mover / Crew Member",
    body: "Careful handling, protective wrapping, loading and unloading. Physically demanding work in homes and buildings across the GTA.",
  },
  {
    title: "Driver",
    body: "Safe operation of moving trucks across Toronto and the surrounding region, plus loading responsibility on site.",
  },
  {
    title: "Packer",
    body: "Professional packing of kitchens, fragile items, artwork and full households using proper materials and technique.",
  },
  {
    title: "Move Coordinator",
    body: "Handling enquiries, preparing estimates and scheduling crews, elevators and building access.",
  },
];

function HiringPage() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs invert items={[{ label: "Home", to: "/" }, { label: "Hiring" }]} />
          <h1 className="mt-5 max-w-2xl text-4xl md:text-5xl">Work with us</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            We are always interested in hearing from reliable movers, drivers and packers who take
            care of people's belongings the way they would their own.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Open roles" title="Positions we hire for" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {roles.map((r) => (
            <div key={r.title} className="surface-card p-6">
              <h2 className="font-display text-lg">{r.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 surface-card p-6">
          <h2 className="font-display text-lg">How to apply</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Send a short introduction and your relevant experience to {site.email}, or call{" "}
            {site.phone}. [Placeholder contact details — to be replaced with the company's real
            hiring contact.]
          </p>
        </div>
      </Section>

      <CtaBand
        title="Need a mover instead?"
        body="If you are planning a move rather than looking for work, request a free quote and we will get back to you."
      />
    </>
  );
}
