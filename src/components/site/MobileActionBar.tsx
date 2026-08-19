import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Fixed call + quote bar for small screens. */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-border lg:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 bg-navy py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-navy-foreground"
      >
        <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
      </a>
      <Link
        to="/quote"
        className="flex items-center justify-center bg-accent py-3.5 text-sm font-bold uppercase tracking-[0.08em] text-accent-foreground"
      >
        Free Quote
      </Link>
    </div>
  );
}
