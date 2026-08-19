import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted" | "navy";
  id?: string;
}) {
  const toneClass =
    tone === "navy"
      ? "bg-navy text-navy-foreground"
      : tone === "muted"
        ? "bg-slate-soft"
        : "bg-background";
  return (
    <section id={id} className={`${toneClass} py-16 md:py-24 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2
        className={`text-3xl md:text-4xl ${invert ? "text-navy-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-base ${invert ? "text-navy-foreground/75" : "text-muted-foreground"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}

export function QuoteButton({
  className = "",
  label = "Get a free quote",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <Link
      to="/quote"
      className={`inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-accent-foreground transition-all hover:brightness-110 hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function GhostButton({
  href,
  to,
  children,
  className = "",
}: {
  href?: string;
  to?: string;
  children: ReactNode;
  className?: string;
}) {
  const cls = `inline-flex items-center gap-2 rounded-md border border-current/25 px-6 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-current/8 ${className}`;
  if (to) {
    return (
      <Link to={to as never} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
