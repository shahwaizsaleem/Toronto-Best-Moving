import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/locations", label: "Locations" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/hiring", label: "Hiring" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
  to="/"
  className="flex items-center gap-2.5"
  aria-label={`${site.name} home`}
>
  <img
    src={logo}
    alt="Toronto Best Moving"
    className="h-10 w-auto object-contain"
  />

  <span className="leading-tight">
    <span className="block font-display text-base font-semibold tracking-tight">
      Toronto Best Moving
    </span>
    <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
      Greater Toronto Area
    </span>
  </span>
</Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-[0.8rem] font-semibold uppercase tracking-[0.09em] text-foreground/75 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-foreground/80 transition-colors hover:text-accent"
          >
            {site.phone}
          </a>
          <Link
            to="/quote"
            className="rounded-md bg-accent px-4 py-2.5 text-[0.78rem] font-bold uppercase tracking-[0.09em] text-accent-foreground transition-all hover:brightness-110"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground/80 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 py-4">
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md bg-accent px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-accent-foreground"
              >
                Free Quote
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
