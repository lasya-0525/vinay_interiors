import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Vinay Interiors Hyderabad",
  description: "Browse our portfolio of premium interior design projects across Hyderabad — residential, commercial, modular kitchens, false ceilings, and more.",
};

const images = [
  { src: "/vinay/1.webp", alt: "Vinay Interiors Project 1" },
  { src: "/vinay/2.webp", alt: "Vinay Interiors Project 2" },
  { src: "/vinay/3.webp", alt: "Vinay Interiors Project 3" },
  { src: "/vinay/4.webp", alt: "Vinay Interiors Project 4" },
  { src: "/vinay/5.webp", alt: "Vinay Interiors Project 5" },
  { src: "/vinay/6.webp", alt: "Vinay Interiors Project 6" },
  { src: "/vinay/7.webp", alt: "Vinay Interiors Project 7" },
  { src: "/vinay/8.webp", alt: "Vinay Interiors Project 8" },
  { src: "/vinay/9.webp", alt: "Vinay Interiors Project 9" },
];

export default function GalleryPage() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "60px",
          textAlign: "center",
          background: "#0a0a0a",
        }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#c5a46d",
            marginBottom: "1rem",
          }}
        >
          Our Work
        </p>
        <h1
          style={{
            fontFamily: "var(--font-playfair, Georgia, serif)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 400,
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Gallery
        </h1>
      </section>

      {/* Grid */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem 6rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1rem",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              aspectRatio: "4/5",
              overflow: "hidden",
              background: "#111",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              priority={i < 3}
            />
          </div>
        ))}
      </section>
    </main>
  );
}
