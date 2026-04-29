// Server component — no "use client" — renders directly in HTML for crawlers
import Link from "next/link";

const FAQS = [
  {
    q: "Who is the best interior designer in Hyderabad?",
    a: "Vinay Interiors is one of Hyderabad's most trusted interior design studios, with over 12 years of experience and 200+ completed projects. Based in Gachibowli, we serve the entire city — from Madhapur and HITEC City to Kondapur, Miyapur, Bachupally, Financial District, Nanakaramguda, Nallagandla, Manikonda, and beyond. Our team combines architectural thinking with precise material selection to deliver spaces that are both beautiful and enduring. Call +91 9866618370 for a free consultation.",
  },
  {
    q: "What interior design services does Vinay Interiors offer in Hyderabad?",
    a: "We offer eight specialised interior design services in Hyderabad: modular kitchen design, wardrobe and cupboard design, false ceiling design, office and commercial interiors, home theater design, main door elevation, home automation (smart home systems), and full turnkey renovation. Each service is delivered end-to-end — from concept and 3D visualisation to material procurement, site supervision, and final handover.",
  },
  {
    q: "How much does interior design cost in Hyderabad?",
    a: "Interior design costs in Hyderabad vary based on the scope, size, and materials selected. A modular kitchen typically ranges from ₹1.5 lakhs to ₹6 lakhs or more. A full 3BHK interior design project can range from ₹8 lakhs to ₹30 lakhs depending on the finish level. Office interiors are usually priced per square foot. Vinay Interiors provides transparent, itemised quotes with no hidden charges. Contact us at +91 9866618370 for a free site visit and estimate.",
  },
  {
    q: "Do you offer a free interior design consultation in Hyderabad?",
    a: "Yes. Vinay Interiors offers a completely free initial consultation and on-site visit across all areas in Hyderabad. Whether you are in Gachibowli, Kondapur, HITEC City, Miyapur, Bachupally, Manikonda, or anywhere else in Hyderabad, our design team will visit your home or office, understand your requirements, and provide honest advice and a detailed project estimate — at no charge.",
  },
  {
    q: "How long does a full home interior design project take?",
    a: "A typical 3BHK interior design project in Hyderabad takes between 45 and 90 days from design sign-off to final handover. The timeline depends on the size of the project, material availability, and site conditions. Vinay Interiors provides a clear project schedule from day one, with defined milestones and regular progress updates so you are never left in the dark.",
  },
  {
    q: "Do you provide turnkey interior design in Hyderabad?",
    a: "Yes. Vinay Interiors is a full-service turnkey interior design studio. We manage the entire project — design concept, 3D visualisation, material selection, vendor management, on-site execution, quality checks, and snagging — delivering a move-in-ready space. You do not need to coordinate with multiple vendors or supervise daily work. We handle everything.",
  },
  {
    q: "Which areas in Hyderabad does Vinay Interiors serve?",
    a: "Vinay Interiors serves all major neighbourhoods in Hyderabad with a primary focus on West Hyderabad, including Gachibowli, Madhapur, HITEC City, Raidurg, Kondapur, Kokapet, Nanakaramguda, Financial District, Tellapur, Miyapur, Bachupally, Medchal, Nallagandla, and Manikonda. We also regularly complete projects in Banjara Hills, Jubilee Hills, Begumpet, LB Nagar, Nagole, Uppal, Saroornagar, and Kothapet.",
  },
  {
    q: "Can you design a modular kitchen for my home in Hyderabad?",
    a: "Absolutely. Modular kitchen design is one of our core specialisations. We design contemporary modular kitchens in L-shape, U-shape, parallel, island, and straight configurations using high-quality shutters, hardware, and countertops suited to Indian cooking. We have designed and installed modular kitchens across Gachibowli, Madhapur, Kondapur, Miyapur, Bachupally, Financial District, and all of Hyderabad.",
  },
];

export default function HomeFAQ() {
  return (
    <section
      style={{ background: "#f8f6f2", padding: "7rem 2.5rem" }}
      aria-label="Frequently asked questions about interior design in Hyderabad"
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.42em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            Common Questions
          </p>
          <h2 style={{
            fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
            fontSize: "clamp(2rem,4.5vw,3.5rem)",
            lineHeight: 1.05,
            color: "#111111",
            marginBottom: "1rem",
          }}>
            Interior Design in Hyderabad — FAQs
          </h2>
          <p style={{ fontSize: "1rem", color: "#666666", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
            Everything you need to know about working with Vinay Interiors — Hyderabad&apos;s trusted design studio since 2014.
          </p>
        </div>

        {/* FAQ list */}
        <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {FAQS.map((faq, i) => (
            <li
              key={i}
              style={{
                borderTop: "1px solid rgba(0,0,0,0.08)",
                padding: "2.25rem 0",
              }}
            >
              <h3 style={{
                fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)",
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#111111",
                fontWeight: 600,
                marginBottom: "1rem",
                lineHeight: 1.35,
              }}>
                {faq.q}
              </h3>
              <p style={{
                fontSize: "0.95rem",
                lineHeight: 1.85,
                color: "#555555",
              }}>
                {faq.a}
              </p>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <div style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          paddingTop: "3rem",
          marginTop: "1rem",
          textAlign: "center",
        }}>
          <p style={{ fontSize: "1rem", color: "#666666", marginBottom: "1.5rem", lineHeight: 1.7 }}>
            Have a question not listed here? We&apos;re happy to help.
          </p>
          <Link
            href="/contact"
            className="btn-dark-hover"
            style={{
              display: "inline-flex", alignItems: "center",
              fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase",
              textDecoration: "none", padding: "1rem 2.25rem",
              background: "#111111", color: "#ffffff", fontWeight: 600,
            }}
          >
            Ask Us Anything →
          </Link>
        </div>
      </div>
    </section>
  );
}
