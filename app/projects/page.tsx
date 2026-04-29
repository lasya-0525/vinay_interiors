import type { Metadata } from "next";
import ProjectsClient from "@/components/projects-client";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { PROJECTS } from "@/lib/constants";
import { SwipeCarousel } from "@/components/SwipeCarousel/SwipeCarousel";

export const metadata: Metadata = buildMetadata({
  title: "Interior Design Portfolio Hyderabad | Vinay Interiors",
  description: "Browse 200+ luxury interior design projects in Hyderabad — residential villas, offices & renovations across Gachibowli, Madhapur, HITEC City, Jubilee Hills & more.",
  path: "/projects",
  keywords: [
    "interior design projects Hyderabad", "interior design portfolio Hyderabad",
    "residential interior design Hyderabad", "commercial interior design Hyderabad",
    "home renovation Hyderabad", "luxury villa interior Hyderabad",
    "interior design Gachibowli", "interior design Madhapur", "interior design LB Nagar",
    "interior design Nagole", "interior design Uppal", "interior design Kothapet",
    "interior design Saroornagar", "office interior design Hyderabad",
  ],
});

export default function ProjectsPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ]);

  const allProjectImages = PROJECTS.flatMap(p => p.gallery.slice(0, 1));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ background: "#111111", padding: "10rem 2.5rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.5rem" }}>Portfolio</p>
          <h1 style={{ fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)", fontSize: "clamp(3rem,7vw,5.5rem)", lineHeight: 0.9, color: "#ffffff", marginBottom: "2.5rem" }}>
            Interior Design Projects<br />
            <span style={{ color: "#c5a46d", fontStyle: "italic" }}>Hyderabad</span>
          </h1>
          <div style={{ marginBottom: "4rem" }}>
            <SwipeCarousel images={allProjectImages} />
          </div>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", maxWidth: "440px", lineHeight: 1.8 }}>
            A curated selection of residential, commercial, and interior design work across Hyderabad.
          </p>
        </div>
      </section>
      <section style={{ paddingTop: "4rem" }}>
        <ProjectsClient />
      </section>
    </>
  );
}
