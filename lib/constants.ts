export type ProjectCategory = "Residential" | "Commercial" | "Interior Design" | "Renovation";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  coverImage: string;
  heroImage: string;
  location: string;
  year: string;
  client: string;
  area: string;
  description: string;
  gallery: string[];
};

export const SITE = {
  name: "Vinay Interiors",
  legalName: "Vinay Interiors Hyderabad",
  siteUrl: "https://vinayinteriors.in",
  email: "vinayinteriors@gmail.com",
  phone: "+91 9866618370",
  address: "Gachibowli, Hyderabad - 500032, Telangana, India.",
  factoryAddress: "House No. 3-100/3, Alinagar, Chetlapotharam Village, Gaddapotharam Panchayat, Jinnaram Mandal, Sangareddy District, Hyderabad, Telangana - 502319.",
  social: {
    instagram: "https://instagram.com/vinayinteriors",
    behance: "https://behance.net",
    linkedin: "https://linkedin.com",
  },
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    title: "Cupboard",
    description: "Creating spaces that are comfortable, memorable, and inspiring.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Modular Kitchen",
    description: "Look and feel wonderful, comfortable and easy to clean.",
    image: "https://images.unsplash.com/photo-1556911220-e15224bbafb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "False Ceiling",
    description: "Designs that complement the interior environment precisely.",
    image: "https://images.unsplash.com/photo-1513506496266-3d24199b705a?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Office Interiors",
    description: "Transform your office spaces with top commercial interior design.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Home Theater",
    description: "Well designed and thought-out TV unit and cinema room designs.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Main Door Elevation",
    description: "We make your home appears attractive and safe from the entrance.",
    image: "https://images.unsplash.com/photo-1510000084732-1329abc39f67?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Pest Control",
    description: "Complete premise undertaking to get rid of pests effectively.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492ce74b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Home Automation",
    description: "Experience India's finest home automation for a smarter life.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The studio transformed our apartment into a calm, modern retreat. Every detail feels intentional.",
    name: "A. Reddy",
    role: "Homeowner, Hyderabad",
  },
  {
    quote:
      "Execution quality was exceptional, timelines were clear, and the final office is exactly what we envisioned.",
    name: "S. Khanna",
    role: "Founder, Retail Collective",
  },
  {
    quote:
      "From concept sketches to final lighting, the team delivered a sophisticated and practical design.",
    name: "M. Verma",
    role: "Villa Client",
  },
] as const;

export const TEAM = [
  {
    name: "Vinay Kumar",
    role: "Principal Designer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Ananya Rao",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Rahul Menon",
    role: "Project Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
  },
] as const;

export const TIMELINE = [
  { year: "2014", text: "Studio founded with a focus on bespoke residential interiors." },
  { year: "2018", text: "Expanded into hospitality and commercial architecture planning." },
  { year: "2021", text: "Introduced full turnkey project delivery and in-house visualization." },
  { year: "2025", text: "Completed 200+ premium interior and renovation projects." },
] as const;

export const PROJECTS: Project[] = [
  {
    slug: "serene-villa-retreat",
    title: "Serene Villa Retreat",
    category: "Residential",
    coverImage: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1600",
    location: "Jubilee Hills, Hyderabad",
    year: "2025",
    client: "Private Family",
    area: "7,200 sq.ft",
    description:
      "A layered villa interior with warm stone, oak detailing, and soft daylight choreography across social and private zones.",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=1200"
    ],
  },
  {
    slug: "urban-courtyard-house",
    title: "Urban Courtyard House",
    category: "Interior Design",
    coverImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1600",
    location: "Kokapet, Hyderabad",
    year: "2024",
    client: "R. Family",
    area: "5,600 sq.ft",
    description:
      "A contemporary family home where interior volumes open to planted courts, blending natural textures with clean geometry.",
    gallery: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=1200"
    ],
  },
  {
    slug: "atelier-office-suite",
    title: "Atelier Office Suite",
    category: "Commercial",
    coverImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1600",
    location: "HITEC City, Hyderabad",
    year: "2026",
    client: "DesignTech Labs",
    area: "9,800 sq.ft",
    description:
      "A premium workplace with sculpted lighting, acoustic detailing, and collaborative zones tailored for creative teams.",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1200"
    ],
  },
  {
    slug: "heritage-home-renewal",
    title: "Heritage Home Renewal",
    category: "Renovation",
    coverImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1600",
    location: "Begumpet, Hyderabad",
    year: "2023",
    client: "N. Family",
    area: "4,100 sq.ft",
    description:
      "A careful renovation preserving original character while introducing modern systems, natural finishes, and fluid planning.",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&q=80&w=1200"
    ],
  },
  {
    slug: "gallery-residence",
    title: "Gallery Residence",
    category: "Residential",
    coverImage: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=1600",
    location: "Gachibowli, Hyderabad",
    year: "2025",
    client: "K. Family",
    area: "6,400 sq.ft",
    description:
      "A minimal residence curated around art walls, custom lighting, and tactile materials with a restrained palette.",
    gallery: [
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c0862?auto=format&fit=crop&q=80&w=1200"
    ],
  },
  {
    slug: "premium-retail-gallery",
    title: "Premium Retail Gallery",
    category: "Commercial",
    coverImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
    location: "Banjara Hills, Hyderabad",
    year: "2024",
    client: "Maison Collective",
    area: "3,900 sq.ft",
    description:
      "A boutique retail interior with sculptural display fixtures, calibrated circulation, and cinematic material contrast.",
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=1200"
    ],
  },
];

export const PROJECT_FILTERS: Array<ProjectCategory | "All"> = [
  "All",
  "Residential",
  "Commercial",
  "Interior Design",
  "Renovation",
];
