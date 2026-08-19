import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Truck } from "lucide-react";
import { locations } from "@/data/locations";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy-foreground/10">
              <Truck className="h-4.5 w-4.5" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-semibold">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/65">
            Professional residential and commercial moving services across Toronto and the Greater
            Toronto Area.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-navy-foreground/75">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              <a href={site.phoneHref} className="hover:text-accent">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>{site.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" aria-hidden="true" />
              <span>
                {site.address.street}, {site.address.city}, {site.address.region}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em]">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$service"
                  params={{ service: s.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em]">
            Service Areas
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-navy-foreground/70">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/locations/$city"
                  params={{ city: l.slug }}
                  className="transition-colors hover:text-accent"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em]">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/70">
            <li>
              <Link to="/about" className="hover:text-accent">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-accent">
                Moving Guides
              </Link>
            </li>
            <li>
              <Link to="/hiring" className="hover:text-accent">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/locations" className="hover:text-accent">
                All Locations
              </Link>
            </li>
          </ul>
          <Link
            to="/quote"
            className="mt-6 inline-flex rounded-md bg-accent px-5 py-3 text-[0.78rem] font-bold uppercase tracking-[0.09em] text-accent-foreground transition-all hover:brightness-110"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Serving Toronto and the Greater Toronto Area.</p>
        </div>
      </div>
    </footer>
  );
}
