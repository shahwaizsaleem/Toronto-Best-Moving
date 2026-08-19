import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Section } from "@/components/site/Section";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Moving Guides & Tips for Toronto and the GTA | Toronto Best Moving" },
      {
        name: "description",
        content:
          "Practical moving guides for Toronto and GTA residents: checklists, condo moving tips, packing fragile items, booking timelines and family moves.",
      },
      { property: "og:title", content: "Moving Guides & Tips for Toronto and the GTA" },
      { property: "og:description", content: "Practical moving advice for Toronto and GTA residents." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs invert items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
          <h1 className="mt-5 max-w-2xl text-4xl md:text-5xl">Moving guides &amp; tips</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy-foreground/75">
            Practical advice written for people moving within Toronto and the Greater Toronto Area.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="surface-card flex flex-col p-6"
            >
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                {p.category}
              </span>
              <h2 className="mt-3 font-display text-lg leading-snug">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <span className="mt-5 text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · {p.readTime}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
