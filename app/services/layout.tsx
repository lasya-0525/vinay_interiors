import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Interior Design Services Hyderabad | Vinay Interiors",
  description: "Modular kitchens, wardrobes, false ceilings & office interiors in Hyderabad. Gachibowli · Madhapur · HITEC City · Kondapur. Free consultation: +91 9866618370.",
  path: "/services",
  keywords: [
    "interior design services Hyderabad", "modular kitchen designer Hyderabad",
    "false ceiling Hyderabad", "gypsum ceiling Hyderabad", "POP ceiling Hyderabad",
    "wardrobe designer Hyderabad", "cupboard design Hyderabad",
    "office interior design Hyderabad", "home theater design Hyderabad",
    "home automation Hyderabad", "smart home Hyderabad", "main door elevation Hyderabad",
    "turnkey interior design Hyderabad", "full home renovation Hyderabad",
    // West Hyderabad
    "interior design services Gachibowli", "modular kitchen Gachibowli",
    "interior design services Madhapur", "modular kitchen Madhapur",
    "interior design services HITEC City", "office interior HITEC City",
    "interior design services Kondapur", "modular kitchen Kondapur",
    "interior design services Miyapur", "modular kitchen Miyapur",
    "interior design services Bachupally", "modular kitchen Bachupally",
    "interior design services Tellapur", "interior design Tellapur",
    "interior design services Financial District", "office interior Financial District",
    "interior design services Nanakaramguda",
    "interior design services Nallagandla",
    "interior design services Manikonda", "modular kitchen Manikonda",
    "interior design services Medchal",
    "interior design services Narsingi",
    "interior design services Raidurg", "interior design Kokapet",
    // East / South
    "interior design services LB Nagar", "interior design services Uppal",
    "interior design services Kothapet", "interior design services Nagole",
    "interior design services Saroornagar",
  ],
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
