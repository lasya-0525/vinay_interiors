import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { TEAM, TIMELINE } from "@/lib/constants";
import { AboutParallax } from "@/components/AboutParallax/AboutParallax";
import TeamCard from "@/components/TeamCard/TeamCard";


export const metadata: Metadata = buildMetadata({
  title: "About Vinay Interiors | Hyderabad Interior Design Studio Since 2014 | 200+ Projects",
  description: "Vinay Interiors is Hyderabad's trusted interior design studio since 2014. 200+ residential and commercial projects completed across Gachibowli, Madhapur, HITEC City, Kondapur, Miyapur, Bachupally, Tellapur, Financial District, Nanakaramguda, Nallagandla and Manikonda. Meet the team and explore our design philosophy.",
  path: "/about",
  keywords: [
    "about Vinay Interiors", "Vinay Interiors Hyderabad", "interior design studio Hyderabad",
    "best interior designer Hyderabad", "top interior design firm Hyderabad",
    "residential interior designer Hyderabad", "commercial interior designer Hyderabad",
    "architecture studio Hyderabad", "interior design studio Gachibowli",
    "interior design studio Madhapur", "interior designer HITEC City",
    "interior designer Kondapur", "interior designer Miyapur",
    "interior designer Bachupally", "interior designer Tellapur",
    "interior designer Financial District Hyderabad", "interior designer Nanakaramguda",
    "interior designer Nallagandla", "interior designer Manikonda",
    "interior design Telangana", "interior design studio since 2014 Hyderabad",
    "luxury interior designer Hyderabad", "premium interior design studio Hyderabad",
  ],
});

export default function AboutPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Dark hero */}
      <section style={{
        background: "#111111",
        padding: "10rem 2.5rem 7rem",
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          opacity: 0.08,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <div style={{ width: "28px", height: "1px", background: "#c5a46d" }} />
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#c5a46d", textTransform: "uppercase" }}>About the Studio</p>
            <div style={{ width: "28px", height: "1px", background: "#c5a46d" }} />
          </div>
          <h1 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.5rem,7vw,5.5rem)",
            lineHeight: 1, color: "#ffffff",
            margin: "0 auto 2.5rem",
            fontWeight: 700,
          }}>
            A Studio Built on Material Sensitivity
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", margin: "0 auto", maxWidth: "600px", lineHeight: 1.8 }}>
            We combine architectural thinking with interior detailing to craft immersive environments for homes, offices, and hospitality spaces.
          </p>
        </div>
      </section>

      {/* Philosophy — split layout */}
      <section style={{
        maxWidth: "900px", margin: "0 auto",
        padding: "10rem 2.5rem",
        textAlign: "center",
      }}>
        <div style={{ marginBottom: "5rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.5rem" }}>Our Philosophy</p>
          <h2 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.2rem,5vw,3.75rem)",
            lineHeight: 1.1, color: "#111111", marginBottom: "2.5rem",
          }}>
            Design That Endures
          </h2>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555555", marginBottom: "1.5rem", maxWidth: "700px", margin: "0 auto 1.5rem" }}>
            At Vinay Interiors, we believe exceptional spaces are born from restraint, material honesty, and deep attention to how people live.
          </p>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "#555555", marginBottom: "3.5rem", maxWidth: "700px", margin: "0 auto 3.5rem" }}>
            Every project begins with listening — understanding how light moves, how spaces are inhabited, and what aspirations lie behind the brief.
          </p>
          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap", justifyContent: "center" }}>
            {[{ n: "200+", l: "Projects" }, { n: "12+", l: "Years" }, { n: "50+", l: "Awards" }].map(s => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "2.5rem", color: "#111111", fontWeight: 600, lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c5a46d", marginTop: "0.5rem" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", marginTop: "6rem" }}>
          <div style={{ position: "relative", height: "600px", overflow: "hidden", borderRadius: "1.5rem", background: "#ece8e2" }} className="img-zoom">
            <div className="zoom-inner" style={{ position: "absolute", inset: 0 }}>
              <Image src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=1200" alt="Vinay Interiors studio" fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 80vw" />
            </div>
          </div>
          <div style={{
            position: "absolute", top: "2rem", right: "2rem",
            background: "rgba(17,17,17,0.9)", backdropFilter: "blur(12px)",
            border: "1px solid rgba(197,164,109,0.3)",
            padding: "1.25rem 1.5rem", textAlign: "center",
            borderRadius: "0.5rem",
          }}>
            <span style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "2.25rem", color: "#c5a46d", lineHeight: 1 }}>2014</span>
            <p style={{ fontSize: "0.5rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginTop: "0.3rem" }}>Est.</p>
          </div>
        </div>
      </section>

      {/* Parallax Content Flow */}
      <AboutParallax />

      {/* Team */}
      <section style={{ background: "#f8f6f2", padding: "7rem 2.5rem" }} aria-label="Team">
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ marginBottom: "5rem" }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.5rem" }}>The Team</p>
            <h2 style={{
              fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
              fontSize: "clamp(2.2rem,5vw,4.5rem)",
              lineHeight: 1, color: "#111111",
            }}>
              Crafted by Specialists
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "10rem 2.5rem" }} aria-label="Timeline">
        <div style={{ textAlign: "center", marginBottom: "6rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.5rem" }}>Journey</p>
          <h2 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2.2rem,5vw,3.75rem)",
            lineHeight: 1, color: "#111111",
          }}>
            Studio Timeline
          </h2>
        </div>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {TIMELINE.map((item) => (
              <li key={item.year} style={{
                display: "grid", gridTemplateColumns: "100px 1fr",
                gap: "3rem", padding: "3rem 0",
                borderTop: "1px solid rgba(0,0,0,0.07)",
                alignItems: "start",
                textAlign: "left",
              }}>
                <p style={{
                  fontFamily: "var(--font-playfair,Georgia,serif)",
                  fontSize: "1.5rem", color: "#c5a46d", fontWeight: 600,
                  lineHeight: 1,
                }}>{item.year}</p>
                <p style={{ fontSize: "1.05rem", color: "#555555", lineHeight: 1.85 }}>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ background: "#111111", padding: "6rem 2.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.4em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.5rem" }}>Start a Project</p>
        <h2 style={{
          fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
          fontSize: "clamp(2rem,4.5vw,3.75rem)",
          color: "#ffffff", marginBottom: "2.5rem", lineHeight: 0.95,
        }}>
          Let&apos;s Build Something Exceptional
        </h2>
        <Link
          href="/contact"
          className="btn-gold-hover"
          style={{
            display: "inline-flex", alignItems: "center",
            fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase",
            textDecoration: "none", padding: "1rem 2.25rem",
            border: "1px solid #c5a46d", color: "#c5a46d",
          }}
        >
          Book a Consultation →
        </Link>
      </section>
    </>
  );
}
