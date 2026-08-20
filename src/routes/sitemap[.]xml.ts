import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { locations } from "@/data/locations";
import { posts } from "@/data/blog";
import { services } from "@/lib/site";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "https://torontobestmoving.ca";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
        
          "/",
          "/services",
          ...services.map((s) => `/services/${s.slug}`),
          "/locations",
          ...locations.map((l) => `/locations/${l.slug}`),
          "/about",
          "/contact",
          "/blog",
          ...posts.map((p) => `/blog/${p.slug}`),
          "/hiring",
          "/quote",
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n  </url>`),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
