import { Phone } from "lucide-react";
import { QuoteButton } from "./Section";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready to plan your move?",
  body = "Send us your addresses and dates and we will come back with a clear written estimate — no obligation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-page flex flex-col items-start gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">{body}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <QuoteButton />
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-md border border-navy-foreground/25 px-6 py-3 text-sm font-semibold tracking-wide text-navy-foreground transition-colors hover:bg-navy-foreground/10"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call now
          </a>
        </div>
      </div>
    </section>
  );
}
