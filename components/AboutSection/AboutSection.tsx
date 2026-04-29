"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      style={{
        maxWidth: "1280px", margin: "0 auto", padding: "10rem 2.5rem",
        display: "grid", gridTemplateColumns: "1fr", gap: "5rem",
        alignItems: "center"
      }}
      className="md:grid-cols-[1fr_0.8fr]"
      aria-label="About the studio"
    >
      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ position: "relative" }}
      >
        <div style={{ position: "relative", height: "640px", overflow: "hidden", borderRadius: "0.25rem" }}>
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200"
            alt="Vinay Interiors studio"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        {/* Year badge */}
        <div style={{
          position: "absolute", bottom: "-2rem", right: "2rem",
          background: "#111111", padding: "2rem", textAlign: "center",
          border: "1px solid rgba(197,164,109,0.3)"
        }}>
          <span style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "2.5rem", color: "#c5a46d", lineHeight: 1 }}>2014</span>
          <p style={{ fontSize: "0.5rem", letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginTop: "0.4rem" }}>Est. Since</p>
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.38em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.5rem" }}>Studio Profile</p>
        <h2 style={{ fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)", fontSize: "clamp(2.5rem,5vw,4rem)", lineHeight: 0.95, color: "#111111", marginBottom: "2.5rem" }}>
          Crafting Atmospheres <br /> for Modern Living
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555555", marginBottom: "1.5rem" }}>
          Vinay Interiors designs residential and commercial environments that combine technical precision with expressive material storytelling.
        </p>
        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#555555", marginBottom: "3rem" }}>
          We shape spatial flow, light behaviour, and tactile layers to create enduring value — from initial concept to final handover.
        </p>

        {/* Stats */}
        <div style={{ display: "flex", gap: "3.5rem", marginBottom: "3rem" }}>
          {[{ n: "200+", l: "Projects" }, { n: "12+", l: "Years" }, { n: "50+", l: "Awards" }].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: "var(--font-playfair,Georgia,serif)", fontSize: "2.25rem", color: "#111111", fontWeight: 600, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c5a46d", marginTop: "0.4rem" }}>{s.l}</div>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="link-gold-hover"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase",
            textDecoration: "none", color: "#111111", borderBottom: "1px solid #111111",
            paddingBottom: "3px",
          }}
        >
          Discover the Studio →
        </Link>
      </motion.div>
    </section>
  );
}
