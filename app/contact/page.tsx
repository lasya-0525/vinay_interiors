import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = buildMetadata({
  title: "Contact Vinay Interiors | Free Consultation Hyderabad",
  description: "Get a free interior design site visit across Hyderabad. Serving Gachibowli, Madhapur, HITEC City, Kondapur, Miyapur, Bachupally & more. Call +91 9866618370 today.",
  path: "/contact",
  keywords: [
    "contact interior designer Hyderabad", "interior design consultation Hyderabad",
    "interior designer near me Hyderabad", "free interior design consultation Hyderabad",
    "interior designer Gachibowli contact", "interior designer LB Nagar contact",
    "interior designer Uppal contact", "interior designer Nagole contact",
    "interior designer Kothapet contact", "interior designer Saroornagar contact",
    "home interior design quote Hyderabad", "Vinay Interiors contact",
  ],
});

export default function ContactPage() {
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section style={{ background: "#111111", padding: "10rem 2.5rem 6rem", textAlign: "center" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.45em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "2rem" }}>Free Consultation · Hyderabad</p>
          <h1 style={{ fontFamily: "var(--font-playfair,'Playfair Display',Georgia,serif)", fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 1, color: "#ffffff" }}>
            Let&apos;s Build Something Exceptional
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", marginTop: "1.5rem", lineHeight: 1.7 }}>
            Interior design consultation · Free site visit · Hyderabad
          </p>
        </div>
      </section>

      {/* Body */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 2.5rem", display: "grid", gridTemplateColumns: "1fr", gap: "4rem" }} className="md:grid-cols-2">
        {/* Info */}
        <div>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", color: "#c5a46d", textTransform: "uppercase", marginBottom: "2rem" }}>Studio Info</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "3rem" }}>
            {[
              { label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
              { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
              { label: "Headquarters", value: SITE.address, href: undefined },
              { label: "Factory", value: SITE.factoryAddress, href: undefined },
            ].map(item => (
              <div key={item.label}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999999", marginBottom: "0.35rem" }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ fontSize: "1rem", color: "#111111", textDecoration: "none" }}>{item.value}</a>
                ) : (
                  <p style={{ fontSize: "1rem", color: "#111111" }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Map */}
          <div style={{ border: "1px solid rgba(0,0,0,0.1)", overflow: "hidden" }}>
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=banjara+hills+hyderabad&output=embed"
              style={{ width: "100%", height: "320px", display: "block", border: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </section>
    </>
  );
}
