import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumbs, breadcrumbSchema } from "@/components/site/Breadcrumbs";
import { CtaBand } from "@/components/site/CtaBand";
import { Section } from "@/components/site/Section";
import { getPost, posts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} | Toronto Best Moving` },
        { name: "description", content: p.description },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.description,
            datePublished: p.date,
            author: { "@type": "Organization", name: "Toronto Best Moving" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", item: "/" },
              { name: "Blog", item: "/blog" },
              { name: p.title, item: `/blog/${params.slug}` },
            ]),
          ),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-page py-14 md:py-20">
          <Breadcrumbs
            invert
            items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.category }]}
          />
          <h1 className="mt-5 max-w-3xl text-3xl md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-navy-foreground/60">
            {new Date(post.date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readTime}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="prose-body max-w-2xl">
            <p className="text-base text-foreground">{post.intro}</p>
            {post.sections.map((s: { heading: string; body: string[] }) => (
              <div key={s.heading} className="mt-9">
                <h2 className="font-display text-2xl text-foreground">{s.heading}</h2>
                {s.body.map((b: string) => (
                  <p key={b.slice(0, 40)} className="mt-3 text-sm">
                    {b}
                  </p>
                ))}
              </div>
            ))}
          </article>

          <aside className="h-fit space-y-6 lg:sticky lg:top-24">
            <div className="surface-card p-6">
              <h2 className="font-display text-lg">Get a free quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Planning a move in the GTA? Send us the details and we will send back an estimate.
              </p>
              <Link
                to="/quote"
                className="mt-5 inline-flex w-full justify-center rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
              >
                Request a quote
              </Link>
            </div>
            <div className="surface-card p-6">
              <h2 className="font-display text-lg">More guides</h2>
              <ul className="mt-3 space-y-3 text-sm">
                {more.map((m) => (
                  <li key={m.slug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: m.slug }}
                      className="font-semibold hover:text-accent"
                    >
                      {m.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
