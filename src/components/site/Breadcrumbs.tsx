import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string; params?: Record<string, string> };

export function Breadcrumbs({ items, invert = false }: { items: Crumb[]; invert?: boolean }) {
  const base = invert ? "text-navy-foreground/70" : "text-muted-foreground";
  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${base}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {i > 0 ? <ChevronRight className="h-3 w-3 opacity-50" aria-hidden="true" /> : null}
            {item.to ? (
              <Link
                to={item.to}
                params={item.params as never}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ) : (
              <span className={invert ? "text-navy-foreground" : "text-foreground"} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}
