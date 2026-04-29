import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import ProjectGrid from "@/components/ProjectGrid/ProjectGrid";
import AboutSection from "@/components/AboutSection/AboutSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
import MarqueeStrip from "@/components/MarqueeStrip/MarqueeStrip";
import ServiceAreas from "@/components/ServiceAreas/ServiceAreas";
import { PROJECTS } from "@/lib/constants";
import { buildMetadata, homepageFaqJsonLd, speakableJsonLd, KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Best Interior Designer Hyderabad | Gachibowli, Madhapur, Kondapur, Miyapur, Bachupally, Financial District",
  description: "Vinay Interiors — Hyderabad's #1 interior design & architecture studio since 2014. Modular kitchens, wardrobes, false ceilings, office interiors & home automation. Serving Gachibowli, Madhapur, HITEC City, Kondapur, Miyapur, Bachupally, Tellapur, Financial District, Nanakaramguda, Nallagandla & Manikonda. 200+ projects. Free consultation — Call +91 9866618370.",
  path: "/",
  keywords: KEYWORDS,
});

export default function Home() {
  return (
    <>
      {/* FAQ rich-result schema — powers Google rich snippets in search results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqJsonLd) }}
      />
      {/* Speakable + mentions schema — used by Google SGE, AI Overviews, and voice search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <Hero />
      <MarqueeStrip />
      <ProjectGrid projects={PROJECTS.slice(0, 4)} />
      <AboutSection />
      <MarqueeStrip />
      <ServicesSection />
      <Testimonials />
      <ServiceAreas />
      <CTASection />
    </>
  );
}
