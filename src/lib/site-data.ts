import logo from "@/assets/logo.png";

import hero1 from "@/assets/gen/hero-1.jpg";
import hero2 from "@/assets/gen/hero-2.jpg";
import hero3 from "@/assets/gen/hero-3.jpg";
import svcIndustrial from "@/assets/gen/svc-industrial.jpg";
import svcWarehouse from "@/assets/gen/svc-warehouse.jpg";
import svcMs from "@/assets/gen/svc-ms.jpg";
import svcRoofing from "@/assets/gen/svc-roofing.jpg";
import svcPeb from "@/assets/gen/svc-peb.jpg";
import svcRepair from "@/assets/gen/svc-repair.jpg";
import stepSite from "@/assets/gen/step-site.jpg";
import stepMeasure from "@/assets/gen/step-measure.jpg";
import stepDesign from "@/assets/gen/step-design.jpg";
import stepInstall from "@/assets/gen/step-install.jpg";
import proj1 from "@/assets/gen/proj-1.jpg";
import proj2 from "@/assets/gen/proj-2.jpg";
import proj3 from "@/assets/gen/proj-3.jpg";
import proj4 from "@/assets/gen/proj-4.jpg";
import khurshidPhoto from "@/assets/khurshid.jpg";
import abdulPhoto from "@/assets/abdul.jpg";

export const images = {
  hero1,
  hero2,
  hero3,
  svcIndustrial,
  svcWarehouse,
  svcMs,
  svcRoofing,
  svcPeb,
  svcRepair,
  stepSite,
  stepMeasure,
  stepDesign,
  stepInstall,
  proj1,
  proj2,
  proj3,
  proj4,
};

export const company = {
  name: "Tin Shade Noida",
  tagline: "Professional Tin Shed & MS Structure",
  phone: "+91-8527977714",
  phoneHref: "tel:+918527977714",
  whatsapp: "https://wa.me/918527977714",
  whatsappText:
    "https://wa.me/918527977714?text=Hi%20Tin%20Shade%20Noida%2C%20I%20want%20a%20quotation%20for%20a%20shed%20project.",
  email: "tinshade.noida@gmail.com",
  instagram: "https://www.instagram.com/tin_shade_wearhouse",
  address: "D179 Sector 10, Noida, Uttar Pradesh",
  hours: "Mon – Sun · 8:00 AM – 8:00 PM",
  since: "2010",
  mapEmbed:
    "https://www.google.com/maps?q=D179%20Sector%2010%20Noida%20Uttar%20Pradesh&output=embed",
  logo,
};

export const nav = [
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Get Quote", to: "/quote" },
  { label: "Contact", to: "/contact" },
] as const;

export const heroSlides = [
  {
    image: hero1,
    alt: "Large industrial tin shed warehouse with blue metal roofing built in Noida",
  },
  {
    image: hero2,
    alt: "Interior of a long-span pre-engineered steel warehouse shed under construction",
  },
  {
    image: hero3,
    alt: "Fabricator welding a mild steel structural beam on a Noida project site",
  },
];

export const heroStats = [
  { value: 500, suffix: "+", label: "Projects completed" },
  { value: 15, suffix: "+", label: "Years of experience" },
  { text: "PAN INDIA", label: "India • All Major Cities" },
];

export const trustStats = [
  { value: 500, suffix: "+", label: "Projects completed" },
  { value: 15, suffix: "+", label: "Years of experience" },
  { value: 6, suffix: "+", label: "Shed categories" },
  { text: "PAN INDIA", label: "Pan India Coverage" },
];

export const trustPoints = [
  "Experienced in-house fabrication team",
  "Quality steel and sheet material selection",
  "Professional on-site installation",
  "Free on-site measurement",
  "Transparent written quotation",
  "Timely project execution",
];

export type NeedId =
  | "industrial"
  | "warehouse"
  | "ms"
  | "roofing"
  | "peb"
  | "repair";

export const needs: {
  id: NeedId;
  icon: string;
  label: string;
  short: string;
  body: string;
  useCases: string[];
  image: string;
  alt: string;
  benefits: string[];
  specifications: string;
  quoteOptionNeed: string;
}[] = [
  {
    id: "industrial",
    icon: "factory",
    label: "Industrial Shed",
    short: "Factories & workshops",
    body: "Heavy-duty shed structures for factories, workshops and production units — engineered for machine loads, ventilation and daily industrial use.",
    useCases: ["Manufacturing units", "Workshops", "Machine sheds", "Loading bays"],
    image: svcIndustrial,
    alt: "Industrial factory shed with grey cladding and blue roof",
    benefits: [
      "Heavy-duty MS structural frames rated for industrial machinery",
      "Custom ridge ventilators & translucent daylighting panels",
      "Weatherproof GI & colour-coated trapezoidal sheeting",
    ],
    specifications: "Span up to 100ft clear span • IS 2062 Grade Steel • Primer & Anti-rust coating",
    quoteOptionNeed: "Industrial Shed",
  },
  {
    id: "warehouse",
    icon: "warehouse",
    label: "Warehouse Shed",
    short: "Storage & logistics",
    body: "Large clear-span warehouse roofing and enclosures that maximise usable floor area for storage, racking and vehicle movement.",
    useCases: ["Godowns", "Logistics hubs", "Cold-chain storage", "Distribution yards"],
    image: svcWarehouse,
    alt: "Long-span warehouse shed with loading docks and trucks",
    benefits: [
      "Maximised column-free clear span floor area for forklift movement",
      "High eaves clearance for multi-tier heavy storage racking",
      "Integrated rainwater gutters & downspout drainage systems",
    ],
    specifications: "Eaves height 15-30ft • High-tensile purlins • Polycarbonate lighting roof sheets",
    quoteOptionNeed: "Warehouse",
  },
  {
    id: "ms",
    icon: "frame",
    label: "MS Structure",
    short: "Steel framework",
    body: "Mild steel columns, trusses, mezzanine floors and platforms fabricated and erected on site with accurate fit and rust-proof treatment.",
    useCases: ["Mezzanine floors", "Platforms", "Staircases", "Support frames"],
    image: svcMs,
    alt: "Mild steel structural framework of an industrial building",
    benefits: [
      "Heavy ISI-marked steel channel, angle and pipe truss fabrication",
      "Precision on-site welding and bolting alignment",
      "Double primer & epoxy protective rust-proof coating",
    ],
    specifications: "IS 2062 Grade Mild Steel • Certified welders • Customized structural engineering",
    quoteOptionNeed: "MS Structure",
  },
  {
    id: "roofing",
    icon: "roof",
    label: "Tin Roofing",
    short: "Sheets & covers",
    body: "Corrugated and trapezoidal roofing sheet installation with correct slope, overlap and drainage so the structure stays leak-free in heavy rain.",
    useCases: ["Rooftop sheds", "Terrace covers", "Parking sheds", "Shop fronts"],
    image: svcRoofing,
    alt: "Workers installing galvanised tin roofing sheets on a rooftop",
    benefits: [
      "High-tensile colour-coated GI & Galvalume roofing sheets",
      "100% leak-proof self-drilling screw fastening with EPDM washers",
      "Custom slope calculations for heavy Indian monsoon drainage",
    ],
    specifications: "Sheet thickness 0.45mm - 0.60mm • UV resistant • Leak-proof guaranteed fit",
    quoteOptionNeed: "Tin Roofing",
  },
  {
    id: "peb",
    icon: "building",
    label: "PEB Structure",
    short: "Pre-engineered buildings",
    body: "Pre-engineered building frames for wide-span industrial and commercial projects — faster erection with a lighter, stronger structure.",
    useCases: ["Wide-span sheds", "Plants", "Commercial units", "Godown expansion"],
    image: svcPeb,
    alt: "Pre-engineered steel building frame being erected with a crane",
    benefits: [
      "Factory-made tapered I-beams for optimal strength-to-weight ratio",
      "50% faster on-site crane erection timeline",
      "Flexible future expansion & modular structural design",
    ],
    specifications: "High-yield steel (345 MPa) • Bolted connections • Z/C Purlins",
    quoteOptionNeed: "PEB Structure",
  },
  {
    id: "repair",
    icon: "wrench",
    label: "Repair / Renovation",
    short: "Fix & upgrade",
    body: "Replacement of rusted or leaking sheets, structural strengthening and complete renovation of existing sheds without full rebuilding.",
    useCases: ["Leakage repair", "Sheet replacement", "Rust treatment", "Shed extension"],
    image: svcRepair,
    alt: "Worker replacing rusted tin roof sheets with new galvanised panels",
    benefits: [
      "Fast replacement of damaged or corroded roof sheets",
      "Structural reinforcement for older sagging trusses",
      "Waterproofing & anti-rust treatment application",
    ],
    specifications: "On-site survey & repair execution • Minimal operational downtime",
    quoteOptionNeed: "Other",
  },
];

export const services = needs.map((need, index) => ({
  code: String(index + 1).padStart(2, "0"),
  ...need,
}));

export const projectCategories = [
  "All",
  "Industrial",
  "Warehouse",
  "Tin Shed",
  "MS Structure",
  "PEB",
  "Roofing",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All">;
  location: string;
  summary: string;
  scope: string[];
  material: string;
  image: string;
  alt: string;
  featured?: boolean;
}[] = [
  {
    id: "factory-shed-sector-63",
    title: "Factory Shed & Cladding",
    category: "Industrial",
    location: "Noida, Sector 63",
    summary:
      "Complete factory shed with side cladding, ventilation openings and a shutter bay for a manufacturing unit.",
    scope: ["Foundation coordination", "MS column & truss erection", "Roof sheeting", "Side cladding"],
    material: "MS columns, tubular trusses, colour-coated trapezoidal sheets",
    image: proj1,
    alt: "Completed industrial factory shed with grey cladding and blue roof in Noida",
    featured: true,
  },
  {
    id: "warehouse-greater-noida",
    title: "Clear-Span Warehouse",
    category: "Warehouse",
    location: "Greater Noida",
    summary:
      "Wide clear-span storage warehouse designed for racking layout and forklift movement with roof lighting sheets.",
    scope: ["Structural layout", "Clear-span trusses", "Translucent roof lighting", "Gutter & drainage"],
    material: "Heavy MS sections, galvanised purlins, poly-carbonate light sheets",
    image: proj2,
    alt: "Interior of a completed warehouse shed with racking and steel roof trusses",
  },
  {
    id: "rooftop-tin-shade",
    title: "Rooftop Tin Shade",
    category: "Tin Shed",
    location: "Noida",
    summary:
      "Terrace-level tin shade on MS channel framework, built to cover an existing rooftop working area.",
    scope: ["Terrace survey", "MS channel frame", "Corrugated sheeting", "Anti-rust coating"],
    material: "MS channels & angles, corrugated GI sheets",
    image: proj3,
    alt: "Rooftop tin shade structure on a commercial building terrace",
  },
  {
    id: "society-parking-shed",
    title: "Society Parking Shed",
    category: "Roofing",
    location: "Greater Noida",
    summary:
      "Curved parking canopy for a residential society, sized around existing parking bays and drive lanes.",
    scope: ["Bay measurement", "Curved truss fabrication", "Sheet fixing", "Finishing & painting"],
    material: "MS pipe trusses, curved profile roofing sheets",
    image: proj4,
    alt: "Curved metal parking shed canopy in a residential society",
  },
  {
    id: "peb-frame-project",
    title: "PEB Frame Erection",
    category: "PEB",
    location: "Ghaziabad",
    summary:
      "Pre-engineered portal frame structure erected with crane support for a wide-span commercial facility.",
    scope: ["Frame setting out", "Crane erection", "Bolted connections", "Purlin & bracing"],
    material: "Tapered PEB frames, high-tensile bolts, Z-purlins",
    image: svcPeb,
    alt: "PEB portal frame structure being erected on site",
  },
  {
    id: "ms-fabrication",
    title: "MS Structure Fabrication",
    category: "MS Structure",
    location: "Pan India",
    summary:
      "On-site fabrication of mild steel framework — columns, rafters and bracing — prepared for roof sheeting.",
    scope: ["Cutting & welding on site", "Column erection", "Rafter alignment", "Primer coating"],
    material: "ISI grade MS sections with rust-proof primer",
    image: svcMs,
    alt: "MS structural framework with columns and roof trusses against blue sky",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Tell us your requirement",
    body: "Call, WhatsApp or send the form. We understand the usage, size and site condition.",
  },
  {
    step: "02",
    title: "Site visit & measurement",
    body: "Our team visits your site free of cost, takes measurements and checks structural feasibility.",
  },
  {
    step: "03",
    title: "Design & quotation",
    body: "You get a structure plan, material specification and a clear written quotation — no hidden charges.",
  },
  {
    step: "04",
    title: "Fabrication & installation",
    body: "Steel is fabricated and erected on site by our own crew, followed by roof sheeting and finishing.",
  },
  {
    step: "05",
    title: "Final handover",
    body: "Site cleaning, leak check and walkthrough before we hand the completed structure over to you.",
  },
];

export const journey = [
  { label: "Empty site", image: stepSite, alt: "Empty levelled industrial plot ready for shed construction" },
  { label: "Measurement", image: stepMeasure, alt: "Site engineer measuring an industrial plot" },
  { label: "Structural planning", image: stepDesign, alt: "Steel shed structural drawings on a workshop table" },
  { label: "Fabrication", image: hero3, alt: "Fabricator welding a steel beam on site" },
  { label: "Installation", image: stepInstall, alt: "Crane lifting a steel roof truss into place" },
  { label: "Completed shed", image: proj1, alt: "Completed industrial shed handed over to the client" },
];

export const areas = [
  { name: "Noida / Gr. Noida", note: "Head office & hub" },
  { name: "Delhi NCR", note: "Capital region" },
  { name: "North India", note: "UP, HR, PB, Raj" },
  { name: "West & Central", note: "MH, Gujarat, MP" },
  { name: "South India", note: "TN, KA, TS, AP" },
  { name: "East & NE", note: "WB, Odisha, Bihar, NE" },
  { name: "Pan India", note: "All states & cities" },
];

export const faqCategories = [
  "General",
  "Pricing",
  "Material",
  "Installation",
  "Timeline",
  "Warranty",
  "Service Area",
] as const;

export type FaqCategory = (typeof faqCategories)[number];

export const faqs: { category: FaqCategory; q: string; a: string }[] = [
  {
    category: "General",
    q: "Do you provide custom shed solutions?",
    a: "Yes. Every shed and roofing structure is custom-built on site based on your location, usage and size requirements.",
  },
  {
    category: "General",
    q: "Do you provide a free site visit?",
    a: "Yes. Site visits are free and include measurement, material recommendation and cost estimation.",
  },
  {
    category: "General",
    q: "Do you also take repair work?",
    a: "Yes. We handle leakage repair, rusted sheet replacement, structural strengthening and shed extensions.",
  },
  {
    category: "Pricing",
    q: "How much does a tin shed cost?",
    a: "Indicative rates: tin shed ₹150–250/sq ft, warehouse ₹200–350/sq ft, MS structure ₹180–300/sq ft. Final cost depends on span, height and material — the free site visit gives you an exact figure.",
  },
  {
    category: "Pricing",
    q: "Are there any hidden charges?",
    a: "No. The written quotation lists structure, material, labour and finishing. Anything extra is agreed with you before work starts.",
  },
  {
    category: "Material",
    q: "What materials do you use?",
    a: "ISI certified steel sections and roofing sheets with rust-proof treatment. Sheet gauge and profile are selected for your span and usage.",
  },
  {
    category: "Material",
    q: "Can I choose the sheet type and colour?",
    a: "Yes. Corrugated GI, trapezoidal colour-coated, insulated and translucent lighting sheets are all available options.",
  },
  {
    category: "Installation",
    q: "Is the structure fabricated on site?",
    a: "Yes. Fabrication happens on your site for accurate fit, which gives a stronger and better aligned structure than pre-made units.",
  },
  {
    category: "Installation",
    q: "Can you customise the structure layout?",
    a: "Yes. Height, span, slope, shutter openings, ventilation and lighting sheets are all planned around your usage.",
  },
  {
    category: "Timeline",
    q: "How long does installation take?",
    a: "Small shed up to 1,000 sq ft: 7–10 days. Medium shed: 15–20 days. Large warehouse: 25–35 days. MS structure: 10–15 days.",
  },
  {
    category: "Warranty",
    q: "How long does a shed last?",
    a: "With ISI grade steel and rust-proof treatment, our structures are built for 5+ years of durable service with basic maintenance.",
  },
  {
    category: "Warranty",
    q: "Will the structure withstand heavy rain?",
    a: "Yes. Slope, overlap and drainage are designed for Indian monsoon conditions, and we leak-check before handover.",
  },
  {
    category: "Service Area",
    q: "Which areas do you cover?",
    a: "We execute projects Pan India — including Noida, Greater Noida, Delhi NCR, and all major industrial and commercial hubs across India.",
  },
];

export const testimonials = [
  {
    quote:
      "Tin Shade Noida completed our factory shed exactly as promised. The structure is strong, ventilation is proper, and the work was finished on time.",
    name: "Rajesh Kumar",
    role: "Factory Owner",
    project: "Industrial Shed",
    location: "Noida, Sector 63",
    rating: 5,
  },
  {
    quote:
      "Excellent warehouse roofing work. The team was professional, used quality materials, and completed the project within the given deadline.",
    name: "Amit Sharma",
    role: "Warehouse Manager",
    project: "Warehouse Roofing",
    location: "Greater Noida",
    rating: 5,
  },
  {
    quote:
      "Very satisfied with the MS structure work. Best price in the market with top quality. I recommend Tin Shade Noida to everyone across India.",
    name: "Suresh Verma",
    role: "Business Owner",
    project: "MS Structure",
    location: "Ghaziabad",
    rating: 5,
  },
];

export interface VideoItem {
  id: string;
  url: string;
  label: string;
  category: string;
  serviceId: NeedId;
  image: string;
  duration: string;
  description: string;
  featured?: boolean;
}

export interface ReelItem {
  id: string;
  title: string;
  description: string;
  service: string;
  sourceType: "local" | "youtube" | "instagram";
  videoUrl?: string;
  posterUrl: string;
  youtubeId?: string;
  instagramUrl?: string;
  instagramId?: string;
  duration: string;
  location: string;
  quoteOptionNeed: string;
}

export const localReels: ReelItem[] = [
  {
    id: "local-ms",
    title: "MS Structural Steel Fabrication",
    description: "On-site heavy MS column erection, truss alignment, and structural welding execution.",
    service: "MS Structure",
    sourceType: "local",
    videoUrl: "/videos/ms-fabrication.mp4",
    posterUrl: svcMs,
    duration: "0:30",
    location: "Sector 10, Noida",
    quoteOptionNeed: "MS Structure",
    instagramUrl: "https://www.instagram.com/reel/DVTCe6HCQiU/",
  },
  {
    id: "local-industrial",
    title: "Industrial Factory Shed Construction",
    description: "High clear-span factory shed erection with gantry beam integration and roof ventilation.",
    service: "Industrial Shed",
    sourceType: "local",
    videoUrl: "/videos/industrial-shed.mp4",
    posterUrl: svcIndustrial,
    duration: "0:45",
    location: "Ecotech III, Greater Noida",
    quoteOptionNeed: "Industrial Shed",
    instagramUrl: "https://www.instagram.com/reel/DVDjwv_CTmo/",
  },
  {
    id: "local-peb",
    title: "Pre-Engineered Building (PEB) Erection",
    description: "Precision PEB primary steel frame assembly and Z-purlin structural alignment.",
    service: "PEB Structure",
    sourceType: "local",
    videoUrl: "/videos/peb-structure.mp4",
    posterUrl: svcPeb,
    duration: "0:35",
    location: "Ghaziabad Industrial Area",
    quoteOptionNeed: "PEB Structure",
    instagramUrl: "https://www.instagram.com/reel/DVDUjJPCWAw/",
  },
  {
    id: "local-tin-roofing",
    title: "Tin & Polycarbonate Roofing Installation",
    description: "Color-coated trapezoidal GI tin sheet installation with ridge cap sealing.",
    service: "Tin Roofing",
    sourceType: "local",
    videoUrl: "/videos/tin-roofing.mp4",
    posterUrl: svcRoofing,
    duration: "0:25",
    location: "Surajpur, Greater Noida",
    quoteOptionNeed: "Tin Roofing",
    instagramUrl: "https://www.instagram.com/reel/DEkN6VxyAtc/",
  },
  {
    id: "local-warehouse",
    title: "Logistics Warehouse Shed Structure",
    description: "Clear-span 20,000+ sq ft warehouse structure built for high volume industrial storage.",
    service: "Warehouse Shed",
    sourceType: "local",
    videoUrl: "/videos/warehouse-shed.mp4",
    posterUrl: svcWarehouse,
    duration: "0:40",
    location: "Kasna, Greater Noida",
    quoteOptionNeed: "Warehouse Shed",
    instagramUrl: "https://www.instagram.com/reel/DTC7SdniW8W/",
  },
];

export const instagramReelsList: ReelItem[] = [
  {
    id: "insta-1",
    title: "Terrace MS Framework & Sheeting",
    description: "Terrace level MS framework setup and color-coated tin sheet installation work in progress.",
    service: "Tin Roofing",
    sourceType: "instagram",
    instagramUrl: "https://www.instagram.com/reel/DEkN6VxyAtc/",
    instagramId: "DEkN6VxyAtc",
    posterUrl: proj3,
    duration: "0:45",
    location: "Sector 63, Noida",
    quoteOptionNeed: "Tin Roofing",
  },
  {
    id: "insta-2",
    title: "Mild Steel Heavy Roof Framework",
    description: "Mild steel column and truss alignment for heavy industrial roof framework.",
    service: "MS Structure",
    sourceType: "instagram",
    instagramUrl: "https://www.instagram.com/reel/DQ_bAPZiY3s/",
    instagramId: "DQ_bAPZiY3s",
    posterUrl: svcMs,
    duration: "0:52",
    location: "Greater Noida Industrial Area",
    quoteOptionNeed: "MS Structure",
  },
  {
    id: "insta-3",
    title: "Industrial Workshop Handover",
    description: "Industrial workshop shed handover walkthrough with shutter bay and rain gutters.",
    service: "Industrial Shed",
    sourceType: "instagram",
    instagramUrl: "https://www.instagram.com/reel/DVDUjJPCWAw/",
    instagramId: "DVDUjJPCWAw",
    posterUrl: proj1,
    duration: "0:48",
    location: "Noida Industrial Area",
    quoteOptionNeed: "Industrial Shed",
  },
  {
    id: "insta-4",
    title: "Factory Shed Roof Fabrication",
    description: "Fabrication crew fixing trapezoidal GI roof sheets with self-drilling screws.",
    service: "Industrial Shed",
    sourceType: "instagram",
    instagramUrl: "https://www.instagram.com/reel/DVDjwv_CTmo/",
    instagramId: "DVDjwv_CTmo",
    posterUrl: svcRoofing,
    duration: "0:55",
    location: "Ecotech, Greater Noida",
    quoteOptionNeed: "Industrial Shed",
  },
  {
    id: "insta-5",
    title: "Warehouse Roof Sheeting & Daylighting",
    description: "Long-span warehouse roof sheeting and polycarbonate daylighting sheet fixing.",
    service: "Warehouse Shed",
    sourceType: "instagram",
    instagramUrl: "https://www.instagram.com/reel/DTC7SdniW8W/",
    instagramId: "DTC7SdniW8W",
    posterUrl: svcWarehouse,
    duration: "1:02",
    location: "Surajpur Industrial Area",
    quoteOptionNeed: "Warehouse Shed",
  },
  {
    id: "insta-6",
    title: "On-site Arc Welding & Erection",
    description: "On-site arc welding and structural steel fabrication by our experienced welders.",
    service: "MS Structure",
    sourceType: "instagram",
    instagramUrl: "https://www.instagram.com/reel/DVTCe6HCQiU/",
    instagramId: "DVTCe6HCQiU",
    posterUrl: hero3,
    duration: "1:10",
    location: "Ghaziabad Industrial Area",
    quoteOptionNeed: "MS Structure",
  },
];

export const youtubeReelsList: ReelItem[] = [
  {
    id: "yt-1",
    title: "Deep Enterprises Industrial Construction",
    description: "Official site execution video showing heavy steel structure erection and roof framing.",
    service: "Industrial Shed",
    sourceType: "youtube",
    youtubeId: "951bSvdn9Qc",
    posterUrl: proj1,
    duration: "1:15",
    location: "Pan India Projects",
    quoteOptionNeed: "Industrial Shed",
  },
  {
    id: "yt-2",
    title: "PEB Warehouse Erection Site Footage",
    description: "Pre-engineered building primary frame assembly and structural alignment walkthrough.",
    service: "PEB Structure",
    sourceType: "youtube",
    youtubeId: "dQw4w9WgXcQ",
    posterUrl: svcPeb,
    duration: "2:10",
    location: "Greater Noida",
    quoteOptionNeed: "PEB Structure",
  },
];

export const realReels: ReelItem[] = [...localReels, ...instagramReelsList, ...youtubeReelsList];

export const reels: VideoItem[] = [
  {
    id: "v1",
    url: "https://www.instagram.com/reel/DEkN6VxyAtc/",
    label: "Tin Shade Work",
    category: "REEL / PROJECT VIDEO",
    serviceId: "roofing",
    image: proj3,
    duration: "0:45",
    description: "Terrace level MS framework setup and tin sheet installation work in progress.",
    featured: true,
  },
  {
    id: "v2",
    url: "https://www.instagram.com/reel/DQ_bAPZiY3s/",
    label: "MS Structure",
    category: "REEL / PROJECT VIDEO",
    serviceId: "ms",
    image: svcMs,
    duration: "0:52",
    description: "Mild steel column and truss alignment for heavy industrial roof framework.",
  },
  {
    id: "v3",
    url: "https://www.instagram.com/reel/DSwV6FtibLE/",
    label: "Shed Construction",
    category: "REEL / PROJECT VIDEO",
    serviceId: "industrial",
    image: stepInstall,
    duration: "1:15",
    description: "On-site crane operation lifting heavy steel roof trusses into position.",
  },
  {
    id: "v4",
    url: "https://www.instagram.com/reel/DT-kWW0CdmC/",
    label: "Factory Shed",
    category: "REEL / PROJECT VIDEO",
    serviceId: "industrial",
    image: svcIndustrial,
    duration: "0:38",
    description: "Complete manufacturing factory shed with side wall cladding and roof ventilation.",
  },
  {
    id: "v5",
    url: "https://www.instagram.com/reel/DTC7SdniW8W/",
    label: "Warehouse Roofing",
    category: "REEL / PROJECT VIDEO",
    serviceId: "warehouse",
    image: svcWarehouse,
    duration: "1:02",
    description: "Long-span warehouse roof sheeting and polycarbonate daylighting sheet fixing.",
  },
  {
    id: "v6",
    url: "https://www.instagram.com/reel/DVDUjJPCWAw/",
    label: "Industrial Shed",
    category: "REEL / PROJECT VIDEO",
    serviceId: "industrial",
    image: proj1,
    duration: "0:48",
    description: "Industrial workshop shed handover walkthrough with shutter bay and gutters.",
  },
  {
    id: "v7",
    url: "https://www.instagram.com/reel/DVDjwv_CTmo/",
    label: "Tin Shade Noida",
    category: "REEL / PROJECT VIDEO",
    serviceId: "roofing",
    image: svcRoofing,
    duration: "0:55",
    description: "Fabrication crew fixing trapezoidal GI roof sheets with self-drilling screws.",
  },
  {
    id: "v8",
    url: "https://www.instagram.com/reel/DVTCe6HCQiU/",
    label: "MS Fabrication",
    category: "REEL / PROJECT VIDEO",
    serviceId: "ms",
    image: hero3,
    duration: "1:10",
    description: "On-site arc welding and structural steel fabrication by our experienced welders.",
  },
];

export const gallery = [
  { image: proj1, alt: "Completed industrial factory shed in Noida" },
  { image: proj2, alt: "Warehouse shed interior with steel trusses" },
  { image: svcMs, alt: "MS structural framework under construction" },
  { image: svcRoofing, alt: "Tin roofing sheet installation in progress" },
  { image: proj4, alt: "Curved parking shed canopy" },
  { image: hero2, alt: "Long-span steel warehouse interior" },
  { image: svcPeb, alt: "PEB steel frame erection with crane" },
  { image: proj3, alt: "Rooftop tin shade with MS framework" },
];

export const quoteOptions = {
  need: ["Industrial Shed", "Warehouse", "Tin Roofing", "MS Structure", "PEB Structure", "Other"],
  size: ["Under 1,000 sq ft", "1,000 – 5,000 sq ft", "5,000 – 10,000 sq ft", "10,000+ sq ft", "Not sure"],
  place: ["Noida / NCR", "North India", "West / Central India", "South India", "East / NE India", "Pan India / Other"],
  timeline: ["Immediately", "Within 1 month", "1 – 3 months", "Just exploring"],
};

export const leadership = {
  eyebrow: "THE PEOPLE BEHIND TIN SHADE",
  titleLine1: "BUILT ON EXPERIENCE.",
  titleLine2: "CARRIED FORWARD BY FAMILY.",
  subheading:
    "Tin Shade is built on years of hands-on experience, a commitment to quality workmanship, and a family-driven approach to every project.",
  founder: {
    name: "MD KHURSHID",
    designation: "FOUNDER",
    paragraphs: [
      "With years of hands-on experience in tin shed construction, MS structures and industrial roofing, MD Khurshid laid the foundation of Tin Shade with a focus on strong structures, quality workmanship and dependable service.",
    ],
    photo: khurshidPhoto,
  },
  nextGen: {
    name: "ABDUL",
    designation: "NEXT GENERATION / SON",
    paragraphs: [
      "Working alongside the foundation laid by his father, Abdul represents the next generation of Tin Shade, bringing a modern approach while carrying forward the values of quality, trust and customer-focused service.",
    ],
    photo: abdulPhoto,
  },
  connectionBadge: "FOUNDATION → FUTURE",
  story: {
    heading: "ONE FOUNDATION. ONE FAMILY. ONE VISION.",
    body: "From the experience of one generation to the energy of the next, Tin Shade continues to grow with the same focus on strong structures, honest communication and customer satisfaction.",
  },
  cta: {
    heading: "READY TO BUILD YOUR PROJECT?",
    getQuoteLabel: "GET A QUOTE",
    talkToUsLabel: "TALK TO US",
  },
};

