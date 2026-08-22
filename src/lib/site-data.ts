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
  email: "tinshadenoidawale1@gmail.com",
  brochurePdf: "/catalog/tin-shade-noida-catalog.pdf",
  instagram: "https://www.instagram.com/tinshadenoidawale/",
  instagramHandle: "@tinshadenoidawale",
  youtube: "https://www.youtube.com/@DeepEnterprises-yu2vo",
  youtubeHandle: "@DeepEnterprises-yu2vo",
  address: "D179 Sector 10, Noida, Uttar Pradesh",
  hours: "Mon – Sun · 8:00 AM – 8:00 PM",
  since: "2010",
  mapEmbed:
    "https://www.google.com/maps?q=D179%20Sector%2010%20Noida%20Uttar%20Pradesh&output=embed",
  logo,
};

export const nav = [
  { label: "Services", to: "/services" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "About", to: "/about" as const },
  { label: "Catalog", to: "/catalog" as const },
  { label: "Videos", to: "/" as const, hash: "videos" },
  { label: "Contact", to: "/contact" as const },
];

export const heroSlides = [
  {
    image: "/images/hero/hero-slide-01.webp",
    fallback: "/images/hero/hero-slide-01.jpg",
    language: "Industrial Factory Shed",
    langCode: "factory",
    alt: "Heavy-duty industrial factory shed and steel framework under construction",
    title: "Heavy-Duty Industrial Shed Fabrication",
    reachLabel: "Noida & Pan India",
  },
  {
    image: "/images/hero/hero-slide-02.webp",
    fallback: "/images/hero/hero-slide-02.jpg",
    language: "Clear-Span Warehouse",
    langCode: "warehouse",
    alt: "Column-free clear span commercial warehouse and logistics shed facility",
    title: "Large Clear-Span Warehouse Structures",
    reachLabel: "High-Cube Racking Compatible",
  },
  {
    image: "/images/hero/hero-slide-03.webp",
    fallback: "/images/hero/hero-slide-03.jpg",
    language: "On-Site Crane Erection",
    langCode: "erection",
    alt: "Active on-site heavy crane erection of industrial structural steel trusses",
    title: "Crane Erection & Structural Assembly",
    reachLabel: "In-House Experienced Crew",
  },
  {
    image: "/images/hero/hero-slide-04.webp",
    fallback: "/images/hero/hero-slide-04.jpg",
    language: "Turnkey Industrial Plant",
    langCode: "plant",
    alt: "Modern industrial manufacturing plant and steel warehouse facility exterior",
    title: "Turnkey Industrial Facilities",
    reachLabel: "Complete Design to Handover",
  },
];

export const trustStrip = [
  { id: "pan-india", label: "PAN INDIA SERVICE", sub: "Active Onsite Setups Nationwide" },
  { id: "quality-materials", label: "QUALITY MATERIALS", sub: "IS 2062 Grade Steel & Prime Sheets" },
  { id: "experienced-team", label: "EXPERIENCED TEAM", sub: "In-House Welders & Erectors" },
  { id: "site-fabrication", label: "SITE FABRICATION", sub: "Custom On-Site Fit & Arc Welding" },
  { id: "ontime-execution", label: "ON-TIME EXECUTION", sub: "Committed Fixed Timelines" },
];

export const whyBuildWithUs = [
  {
    number: "01",
    title: "In-House Fabrication",
    description:
      "No middlemen or subcontractors. Our own certified fabricators, welders, and equipment handle structural steel directly on your site.",
  },
  {
    number: "02",
    title: "Quality Materials",
    description:
      "Engineered with IS 2062 certified mild steel sections, heavy tubular trusses, and prime color-coated Galvalume / GI roofing sheets.",
  },
  {
    number: "03",
    title: "Experienced Site Team",
    description:
      "Hands-on supervision on every project ensuring correct slope calculation, structural balance, and leak-proof fitting for heavy monsoons.",
  },
  {
    number: "04",
    title: "Transparent Quotations",
    description:
      "Itemized bill of quantities with steel weight estimates and material specifications before work begins — zero surprise charges.",
  },
  {
    number: "05",
    title: "Pan India Execution",
    description:
      "From Noida and Delhi NCR to industrial manufacturing hubs across India, our crew mobilizes quickly to deliver turnkey structures.",
  },
];

export type NeedId =
  | "industrial"
  | "warehouse"
  | "godown"
  | "ms"
  | "roofing"
  | "mezzanine";

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
    short: "Factories & Workshops",
    body: "Heavy-duty clear-span shed structures for manufacturing units, machine shops, processing factories, and industrial plants.",
    useCases: ["Manufacturing Plants", "Machine Workshops", "Fabrication Units", "Heavy Industrial Bays"],
    image: svcIndustrial,
    alt: "Industrial manufacturing factory shed built with structural steel",
    benefits: [
      "Heavy-duty MS structural frames rated for overhead cranes and machine vibration",
      "Custom ridge ventilators & translucent polycarbonate daylighting panels",
      "Weatherproof GI & colour-coated trapezoidal sheeting",
    ],
    specifications: "Span up to 100ft clear span • IS 2062 Grade Steel • Anti-rust primer & epoxy coating",
    quoteOptionNeed: "Industrial Shed",
  },
  {
    id: "warehouse",
    icon: "warehouse",
    label: "Warehouse Shed",
    short: "Logistics & Storage Hubs",
    body: "Large clear-span warehouse roofing and enclosures engineered to maximize usable floor area for high-density racking and forklift movement.",
    useCases: ["Logistics Parks", "E-Commerce Fulfillment Hubs", "Cold Storage Yards", "Bulk Storage Facilities"],
    image: svcWarehouse,
    alt: "Long-span commercial warehouse shed facility",
    benefits: [
      "Column-free clear span floor area for smooth material and vehicle handling",
      "High eaves clearance (15–32 ft) for multi-tier heavy storage racking",
      "Integrated heavy-gauge rainwater gutters & downspout drainage systems",
    ],
    specifications: "Eaves height 15–32 ft • High-tensile purlins • Polycarbonate lighting roof sheets",
    quoteOptionNeed: "Warehouse Shed",
  },
  {
    id: "godown",
    icon: "building",
    label: "Godown Shed",
    short: "Commercial & Agricultural Storage",
    body: "Cost-effective, secure, and durable storage sheds designed for commercial inventory, agricultural produce, and raw materials.",
    useCases: ["Agricultural Mandi Godowns", "Raw Material Storage", "Finished Goods Depots", "Commercial Stockyards"],
    image: svcPeb,
    alt: "Commercial storage godown shed structure",
    benefits: [
      "Weather-sealed wall cladding and roofing protecting inventory from rain and humidity",
      "Wide rolling shutter access bays for truck loading and unloading",
      "Economical structural design offering fast setup and high durability",
    ],
    specifications: "Modular structural spans • Anti-rodent & pest-resistant boundary seals • Fast turnaround",
    quoteOptionNeed: "Godown Shed",
  },
  {
    id: "ms",
    icon: "frame",
    label: "MS Steel Structure",
    short: "Steel Framing & Trusses",
    body: "Precision-welded mild steel columns, heavy tubular trusses, rafters, purlins, and custom structural frameworks fabricated directly on site.",
    useCases: ["Heavy Trusses & Columns", "Crane Gantry Beams", "Industrial Canopies", "Commercial Frameworks"],
    image: svcMs,
    alt: "Mild steel structural framework under construction",
    benefits: [
      "Heavy ISI-marked steel channel, angle and pipe truss fabrication",
      "Precision on-site arc welding and high-strength bolted connections",
      "Double primer & epoxy protective rust-proof treatment",
    ],
    specifications: "IS 2062 Grade Mild Steel • Certified welders • Customized structural engineering",
    quoteOptionNeed: "MS Steel Structure",
  },
  {
    id: "roofing",
    icon: "roof",
    label: "Roofing & PUF Panel",
    short: "Sheets & Thermal Insulation",
    body: "Corrugated and trapezoidal color-coated Galvalume / GI sheets, thermal PUF insulated sandwich panels, and waterproof roof replacements.",
    useCases: ["Insulated Cold Storage", "Factory Roof Overhauls", "Commercial Terrace Sheds", "Thermal Proofing"],
    image: svcRoofing,
    alt: "Workers installing roofing and insulated PUF panels",
    benefits: [
      "High-tensile colour-coated GI & Galvalume roofing sheets (0.45mm – 0.60mm)",
      "Thermal PUF sandwich panels maintaining controlled indoor temperatures",
      "100% leak-proof screw fastening with UV-resistant EPDM washers",
    ],
    specifications: "Sheet thickness 0.45mm – 0.60mm • PUF density 40±2 kg/m³ • 100% leak-proof fit",
    quoteOptionNeed: "Roofing & PUF Panel",
  },
  {
    id: "mezzanine",
    icon: "wrench",
    label: "Mezzanine Floor",
    short: "Multi-Tier Usable Space",
    body: "Heavy load-bearing mild steel mezzanine floor platforms and intermediate storage levels that double your facility's usable square footage.",
    useCases: ["Industrial Office Platforms", "Multi-Tier Storage Mezzanines", "Machine Operating Decks", "Showroom Floors"],
    image: "/images/selected/selected-43.jpg",
    alt: "Heavy steel mezzanine floor structure inside industrial building",
    benefits: [
      "Custom engineered load capacity (300 kg/sqm to 1500+ kg/sqm)",
      "Chequered steel plate or heavy deck sheet flooring with safety handrails",
      "Integrated staircase, pallet loading gates, and modular expansion design",
    ],
    specifications: "Load capacity 300–1500 kg/m² • Heavy I-beam main girders • Safety handrails & stairs",
    quoteOptionNeed: "Mezzanine Floor",
  },
];

export const services = needs.map((need, index) => ({
  code: String(index + 1).padStart(2, "0"),
  ...need,
}));

export const projectCategories = [
  "All",
  "Industrial Shed",
  "Warehouse",
  "MS Structure",
  "Tin Roofing",
  "PEB Structure",
  "Completed Projects",
  "Under Construction",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const catalogPages = Array.from({ length: 51 }, (_, i) => {
  const pageNum = i + 1;
  const padNum = String(pageNum).padStart(2, "0");
  const selectedPages = [1, 2, 3, 7, 14, 19, 22, 28, 32, 36, 43, 47, 50];
  return {
    page: pageNum,
    title: `Tin Shade Noida Catalog — Page ${padNum}`,
    image: `/images/catalog/catalog-page-${padNum}.jpg`,
    isSelected: selectedPages.includes(pageNum),
  };
});

export const projects: {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "All" | "Completed Projects">;
  location: string;
  summary: string;
  scope: string[];
  material: string;
  image: string;
  alt: string;
  featured?: boolean;
  pageNumber?: number;
  completedProject?: boolean;
}[] = [
  {
    id: "selected-page-01",
    title: "Industrial Storage & Fabrication Shed",
    category: "Industrial Shed",
    location: "Noida Industrial Hub",
    summary:
      "Heavy-duty industrial tin shed built with structural steel trusses and weather-resistant roofing sheets.",
    scope: ["Structural Steel Framing", "GI Sheet Installation", "Gutter & Rain Drain System", "On-site Erection"],
    material: "MS Pipe Trusses, Colour Coated GI Roofing Sheets",
    image: "/images/selected/selected-01.jpg",
    alt: "Industrial storage shed structure built by Tin Shade Noida",
    featured: true,
    pageNumber: 1,
    completedProject: true,
  },
  {
    id: "selected-page-02",
    title: "Clear-Span Warehouse Shed Facility",
    category: "Warehouse",
    location: "Greater Noida Industrial Area",
    summary:
      "Spacious clear-span warehouse enclosure designed for high-density inventory storage and vehicle access.",
    scope: ["Layout & Anchor Setting", "Heavy Beam Erection", "Trapezoidal Roofing", "Skylight Panels"],
    material: "High Tensile Purlins, Translucent Daylighting Sheets",
    image: "/images/selected/selected-02.jpg",
    alt: "Clear-span warehouse shed facility constructed in Greater Noida",
    pageNumber: 2,
    completedProject: true,
  },
  {
    id: "selected-page-03",
    title: "Heavy MS Structural Framing",
    category: "MS Structure",
    location: "Sector 10, Noida",
    summary:
      "Precision-welded mild steel structural framework engineered for long service life and high stability.",
    scope: ["Custom Cutting & Welding", "Column Anchor Setting", "Truss Alignment", "Anti-Rust Primer"],
    material: "IS 2062 Structural Steel Channels & Angles",
    image: "/images/selected/selected-03.jpg",
    alt: "Heavy MS structural framing for commercial unit",
    pageNumber: 3,
    completedProject: true,
  },
  {
    id: "selected-page-07",
    title: "Commercial Rooftop Tin Shelter",
    category: "Tin Roofing",
    location: "Delhi NCR",
    summary:
      "Durable rooftop shed providing 100% rain and heat protection for commercial building terraces.",
    scope: ["Terrace Anchoring", "Truss Assembly", "Leakproof Screw Fastening", "Side Ridge Flashing"],
    material: "Color-Coated Galvanized Sheets, Heavy MS Beams",
    image: "/images/selected/selected-07.jpg",
    alt: "Commercial rooftop tin shelter structure",
    pageNumber: 7,
    completedProject: true,
  },
  {
    id: "selected-page-14",
    title: "Wide-Span Factory Building Shed",
    category: "Industrial Shed",
    location: "Ghaziabad Industrial Zone",
    summary:
      "Custom industrial workshop shed with side cladding and high eaves clearance for heavy machinery.",
    scope: ["Foundation Plates", "Gantry Beam Support", "Wall Cladding", "Roof Ridge Vent"],
    material: "Heavy Gauge GI Sheets, Tubular MS Steel Trusses",
    image: "/images/selected/selected-14.jpg",
    alt: "Wide-span factory building shed with side wall cladding",
    pageNumber: 14,
    completedProject: true,
  },
  {
    id: "selected-page-19",
    title: "Pre-Engineered Building (PEB) Warehouse",
    category: "PEB Structure",
    location: "Ecotech III, Greater Noida",
    summary:
      "Factory-fabricated PEB steel building assembled rapidly on site with high structural integrity.",
    scope: ["PEB Primary Frame Erection", "Secondary Z-Purlins", "Double Wall Cladding", "Eaves Gutters"],
    material: "Tapered Web I-Beams, High Yield Bolted Frames",
    image: "/images/selected/selected-19.jpg",
    alt: "PEB pre-engineered building warehouse structure",
    pageNumber: 19,
  },
  {
    id: "selected-page-22",
    title: "Curved Parking Shed Canopy",
    category: "Tin Roofing",
    location: "Noida Sector 62",
    summary:
      "Aesthetically designed curved metal parking canopy protecting multi-car parking bays.",
    scope: ["Curved Pipe Bending", "Ground Anchoring", "Sheet Curve Fixing", "Rust-proof Paint"],
    material: "MS Round Pipe Trusses, Profiled Sheet Cover",
    image: "/images/selected/selected-22.jpg",
    alt: "Curved parking shed canopy in Noida",
    pageNumber: 22,
  },
  {
    id: "selected-page-28",
    title: "High-Bay Logistics Godown Shed",
    category: "Warehouse",
    location: "Surajpur Industrial Area",
    summary:
      "Column-free interior space designed for logistics, container loading, and pallet racking.",
    scope: ["High Column Erection", "Truss Alignment", "Rainwater Downspout Installation"],
    material: "GI Trapezoidal Sheeting, ISI Grade Steel",
    image: "/images/selected/selected-28.jpg",
    alt: "High-bay logistics godown shed facility",
    pageNumber: 28,
  },
  {
    id: "selected-page-32",
    title: "Heavy Machine Shop Shed Enclosure",
    category: "Industrial Shed",
    location: "Faridabad Industrial Sector",
    summary:
      "Industrial shelter engineered with vibration resistance and daylight ventilation panels.",
    scope: ["Heavy Column Base Fabrication", "Truss System", "Daylight Sheet Placement"],
    material: "Polycarbonate Skylight Sheets, Structural MS",
    image: "/images/selected/selected-32.jpg",
    alt: "Heavy machine shop shed enclosure",
    pageNumber: 32,
  },
  {
    id: "selected-page-36",
    title: "Agricultural & Raw Material Godown",
    category: "Warehouse",
    location: "Noida Extension",
    summary:
      "Weatherproof large-capacity storage shed for bulk goods and materials.",
    scope: ["Site Leveling Support", "Structural Erection", "Leakproof Roofing"],
    material: "Heavy Duty Corrugated GI Sheets",
    image: "/images/selected/selected-36.jpg",
    alt: "Agricultural & raw material godown shed",
    pageNumber: 36,
  },
  {
    id: "selected-page-43",
    title: "Terrace Utility & Mezzanine Shed",
    category: "MS Structure",
    location: "Noida Sector 18",
    summary:
      "Custom terrace extension creating covered operational space on an existing structure.",
    scope: ["Mezzanine Support Beam", "Terrace Frame Erection", "Protective Sheeting"],
    material: "MS Channels, Heavy Angles, Zinc Primed Steel",
    image: "/images/selected/selected-43.jpg",
    alt: "Terrace utility & mezzanine shed structure",
    pageNumber: 43,
  },
  {
    id: "selected-page-47",
    title: "Custom Factory Extension Shed",
    category: "Industrial Shed",
    location: "Pan India Site",
    summary:
      "Seamless extension connected to existing manufacturing building to double storage capacity.",
    scope: ["Existing Roof Joinery", "New Column Erection", "Flashing & Waterproofing"],
    material: "Trapezoidal GI Sheets, Heavy MS Beams",
    image: "/images/selected/selected-47.jpg",
    alt: "Custom factory extension shed",
    pageNumber: 47,
  },
  {
    id: "selected-page-50",
    title: "Full Project Catalog Handover Shed",
    category: "Tin Roofing",
    location: "Noida Sector 10",
    summary:
      "Complete turnkey shed project delivered with structural guarantees and clean finish.",
    scope: ["Full Fabrication", "Roofing Sheeting", "Final Inspection & Leak Test"],
    material: "ISI Grade MS Steel & Premium GI Roofing",
    image: "/images/selected/selected-50.jpg",
    alt: "Completed turnkey shed project by Tin Shade Noida",
    pageNumber: 50,
    completedProject: true,
  },
  {
    id: "factory-shed-sector-63",
    title: "Factory Shed & Cladding",
    category: "Industrial Shed",
    location: "Noida, Sector 63",
    summary:
      "Complete factory shed with side cladding, ventilation openings and a shutter bay for a manufacturing unit.",
    scope: [
      "Foundation coordination",
      "MS column & truss erection",
      "Roof sheeting",
      "Side cladding",
    ],
    material: "MS columns, tubular trusses, colour-coated trapezoidal sheets",
    image: proj1,
    alt: "Completed industrial factory shed with grey cladding and blue roof in Noida",
  },
  {
    id: "warehouse-greater-noida",
    title: "Clear-Span Warehouse",
    category: "Warehouse",
    location: "Greater Noida",
    summary:
      "Wide clear-span storage warehouse designed for racking layout and forklift movement with roof lighting sheets.",
    scope: [
      "Structural layout",
      "Clear-span trusses",
      "Translucent roof lighting",
      "Gutter & drainage",
    ],
    material: "Heavy MS sections, galvanised purlins, poly-carbonate light sheets",
    image: proj2,
    alt: "Interior of a completed warehouse shed with racking and steel roof trusses",
  },
  {
    id: "rooftop-tin-shade",
    title: "Rooftop Tin Shade",
    category: "Tin Roofing",
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
    category: "Tin Roofing",
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
    category: "PEB Structure",
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
  {
    label: "Empty site",
    image: stepSite,
    alt: "Empty levelled industrial plot ready for shed construction",
  },
  { label: "Measurement", image: stepMeasure, alt: "Site engineer measuring an industrial plot" },
  {
    label: "Structural planning",
    image: stepDesign,
    alt: "Steel shed structural drawings on a workshop table",
  },
  { label: "Fabrication", image: hero3, alt: "Fabricator welding a steel beam on site" },
  { label: "Installation", image: stepInstall, alt: "Crane lifting a steel roof truss into place" },
  {
    label: "Completed shed",
    image: proj1,
    alt: "Completed industrial shed handed over to the client",
  },
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

export interface ProjectVideo {
  id: string;
  platform: "youtube" | "instagram";
  title: string;
  description: string;
  embedUrl: string;
  originalUrl: string;
  thumbnail: string;
  channel?: string;
  service: string;
  location: string;
  duration?: string;
  quoteOptionNeed: string;
}

export function getYouTubeEmbedUrl(url: string | undefined | null): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    let videoId: string | null = null;
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v");
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/embed/")[1]?.split("/")[0] || null;
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1]?.split("/")[0] || null;
      }
    }
    if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.substring(1).split("/")[0] || null;
    }
    if (!videoId) return null;
    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    if (typeof url === "string" && /^[a-zA-Z0-9_-]{11}$/.test(url)) {
      return `https://www.youtube.com/embed/${url}`;
    }
    return null;
  }
}

export function getInstagramEmbedUrl(url: string | undefined | null): string | null {
  if (!url) return null;
  const cleanUrl = url.split("?")[0]!.replace(/\/+$/, "");
  if (cleanUrl.endsWith("/embed")) return `${cleanUrl}/`;
  return `${cleanUrl}/embed/`;
}

export const youtubeVideos: ProjectVideo[] = [
  {
    id: "mkRndWdXPdI",
    platform: "youtube",
    title: "टीन शेड बनवाने के लिए संपर्क करें — 8527977714, 9899793714 (Industrial Tin Shed Construction)",
    description:
      "Onsite video of industrial tin shed construction, heavy MS column framework, and durable color-coated roof sheet installation by Deep Enterprises.",
    embedUrl: "https://www.youtube-nocookie.com/embed/mkRndWdXPdI",
    originalUrl: "https://www.youtube.com/watch?v=mkRndWdXPdI",
    thumbnail: "https://i.ytimg.com/vi/mkRndWdXPdI/hqdefault.jpg",
    channel: "@DeepEnterprises-yu2vo",
    service: "Industrial Shed",
    location: "Noida & Delhi NCR",
    duration: "Onsite Reel",
    quoteOptionNeed: "Industrial Shed",
  },
  {
    id: "f2xmWKtkxME",
    platform: "youtube",
    title: "टीन शेड बनवाने के लिए संपर्क करें — 9899793714, 8527977714 (Heavy Industrial Structure)",
    description:
      "Wide-span industrial warehouse structure, heavy mild steel beam alignment, and fast-track shed erection on site.",
    embedUrl: "https://www.youtube-nocookie.com/embed/f2xmWKtkxME",
    originalUrl: "https://www.youtube.com/watch?v=f2xmWKtkxME",
    thumbnail: "https://i.ytimg.com/vi/f2xmWKtkxME/hqdefault.jpg",
    channel: "@DeepEnterprises-yu2vo",
    service: "Warehouse Shed",
    location: "Greater Noida Industrial Area",
    duration: "Onsite Reel",
    quoteOptionNeed: "Warehouse Shed",
  },
  {
    id: "J_Y8IzAllCk",
    platform: "youtube",
    title: "टीन शेड बनवाने के लिए संपर्क करें — 9899793714 (Industrial Framing & Roofing)",
    description:
      "Structural steel framing and roof truss alignment for industrial factory shed with precision arc welding.",
    embedUrl: "https://www.youtube-nocookie.com/embed/J_Y8IzAllCk",
    originalUrl: "https://www.youtube.com/watch?v=J_Y8IzAllCk",
    thumbnail: "https://i.ytimg.com/vi/J_Y8IzAllCk/hqdefault.jpg",
    channel: "@DeepEnterprises-yu2vo",
    service: "MS Structure",
    location: "Surajpur Industrial Area",
    duration: "Onsite Reel",
    quoteOptionNeed: "MS Structure",
  },
  {
    id: "BbsedKkhB8U",
    platform: "youtube",
    title: "Deep Enterprises — Rooftop Tin Shed & Metro Shade Contact: 9899793714",
    description:
      "Commercial rooftop tin shed structure, curved cantilever shade, and waterproof roof sheeting by Deep Enterprises.",
    embedUrl: "https://www.youtube-nocookie.com/embed/BbsedKkhB8U",
    originalUrl: "https://www.youtube.com/watch?v=BbsedKkhB8U",
    thumbnail: "https://i.ytimg.com/vi/BbsedKkhB8U/hqdefault.jpg",
    channel: "@DeepEnterprises-yu2vo",
    service: "Tin Roofing",
    location: "Sector 63, Noida",
    duration: "Onsite Reel",
    quoteOptionNeed: "Tin Roofing",
  },
  {
    id: "07Gt4hpEwtk",
    platform: "youtube",
    title: "टीन शेड बनवाएं — Deep Enterprises (Turbo Ventilator & Industrial Shade) 9899793714",
    description:
      "Complete industrial tin shade project handover with roof air ventilation turbo fans and heavy rain water gutters.",
    embedUrl: "https://www.youtube-nocookie.com/embed/07Gt4hpEwtk",
    originalUrl: "https://www.youtube.com/watch?v=07Gt4hpEwtk",
    thumbnail: "https://i.ytimg.com/vi/07Gt4hpEwtk/hqdefault.jpg",
    channel: "@DeepEnterprises-yu2vo",
    service: "Industrial Shed",
    location: "Ecotech Zone, Noida",
    duration: "Onsite Reel",
    quoteOptionNeed: "Industrial Shed",
  },
];

export const instagramVideos: ProjectVideo[] = [
  {
    id: "insta-1",
    platform: "instagram",
    title: "Terrace MS Framework & Tin Sheeting",
    description:
      "Terrace level MS framework setup and color-coated tin sheet installation work in progress.",
    embedUrl: "https://www.instagram.com/reel/DEkN6VxyAtc/embed/",
    originalUrl: "https://www.instagram.com/reel/DEkN6VxyAtc/",
    thumbnail: proj3,
    service: "Tin Roofing",
    location: "Sector 63, Noida",
    duration: "0:45",
    quoteOptionNeed: "Tin Roofing",
  },
  {
    id: "insta-2",
    platform: "instagram",
    title: "Mild Steel Heavy Roof Framework",
    description: "Mild steel column and truss alignment for heavy industrial roof framework.",
    embedUrl: "https://www.instagram.com/reel/DQ_bAPZiY3s/embed/",
    originalUrl: "https://www.instagram.com/reel/DQ_bAPZiY3s/",
    thumbnail: svcMs,
    service: "MS Structure",
    location: "Greater Noida Industrial Area",
    duration: "0:52",
    quoteOptionNeed: "MS Structure",
  },
  {
    id: "insta-3",
    platform: "instagram",
    title: "Industrial Workshop Shed Handover",
    description: "Industrial workshop shed handover walkthrough with shutter bay and rain gutters.",
    embedUrl: "https://www.instagram.com/reel/DVDUjJPCWAw/embed/",
    originalUrl: "https://www.instagram.com/reel/DVDUjJPCWAw/",
    thumbnail: proj1,
    service: "Industrial Shed",
    location: "Noida Industrial Area",
    duration: "0:48",
    quoteOptionNeed: "Industrial Shed",
  },
  {
    id: "insta-4",
    platform: "instagram",
    title: "Factory Shed Roof Sheet Fixing",
    description: "Fabrication crew fixing trapezoidal GI roof sheets with self-drilling screws.",
    embedUrl: "https://www.instagram.com/reel/DVDjwv_CTmo/embed/",
    originalUrl: "https://www.instagram.com/reel/DVDjwv_CTmo/",
    thumbnail: svcRoofing,
    service: "Industrial Shed",
    location: "Ecotech, Greater Noida",
    duration: "0:55",
    quoteOptionNeed: "Industrial Shed",
  },
  {
    id: "insta-5",
    platform: "instagram",
    title: "Warehouse Roof Sheeting & Daylighting",
    description: "Long-span warehouse roof sheeting and polycarbonate daylighting sheet fixing.",
    embedUrl: "https://www.instagram.com/reel/DTC7SdniW8W/embed/",
    originalUrl: "https://www.instagram.com/reel/DTC7SdniW8W/",
    thumbnail: svcWarehouse,
    service: "Warehouse Shed",
    location: "Surajpur Industrial Area",
    duration: "1:02",
    quoteOptionNeed: "Warehouse Shed",
  },
  {
    id: "insta-6",
    platform: "instagram",
    title: "On-site Arc Welding & Structural Erection",
    description: "On-site arc welding and structural steel fabrication by our experienced welders.",
    embedUrl: "https://www.instagram.com/reel/DVTCe6HCQiU/embed/",
    originalUrl: "https://www.instagram.com/reel/DVTCe6HCQiU/",
    thumbnail: hero3,
    service: "MS Structure",
    location: "Ghaziabad Industrial Area",
    duration: "1:10",
    quoteOptionNeed: "MS Structure",
  },
];

export const projectVideos: ProjectVideo[] = [...youtubeVideos, ...instagramVideos];

// Backward-compatible alias
export type ReelItem = ProjectVideo;
export const instagramReelsList = instagramVideos;
export const youtubeReelsList = youtubeVideos;
export const realReels = projectVideos;

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
    description:
      "Complete manufacturing factory shed with side wall cladding and roof ventilation.",
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
  { image: "/images/selected/selected-01.jpg", alt: "Industrial Storage & Fabrication Shed" },
  { image: "/images/selected/selected-02.jpg", alt: "Clear-Span Warehouse Shed Facility" },
  { image: "/images/selected/selected-03.jpg", alt: "Heavy MS Structural Framing" },
  { image: "/images/selected/selected-07.jpg", alt: "Commercial Rooftop Tin Shelter" },
  { image: "/images/selected/selected-14.jpg", alt: "Wide-Span Factory Building Shed" },
  { image: "/images/selected/selected-19.jpg", alt: "Pre-Engineered Building PEB Warehouse" },
  { image: "/images/selected/selected-22.jpg", alt: "Curved Parking Shed Canopy" },
  { image: "/images/selected/selected-28.jpg", alt: "High-Bay Logistics Godown Shed" },
  { image: "/images/selected/selected-32.jpg", alt: "Heavy Machine Shop Shed Enclosure" },
  { image: "/images/selected/selected-36.jpg", alt: "Agricultural & Raw Material Godown" },
  { image: "/images/selected/selected-43.jpg", alt: "Terrace Utility & Mezzanine Shed" },
  { image: "/images/selected/selected-47.jpg", alt: "Custom Factory Extension Shed" },
  { image: "/images/selected/selected-50.jpg", alt: "Full Project Catalog Handover Shed" },
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
  need: [
    "Industrial Shed",
    "Warehouse Shed",
    "Godown Shed",
    "MS Steel Structure",
    "Roofing & PUF Panel",
    "Mezzanine Floor",
  ],
  size: [
    "Under 1,000 sq ft",
    "1,000 – 5,000 sq ft",
    "5,000 – 10,000 sq ft",
    "10,000+ sq ft",
    "Not sure",
  ],
  place: [
    "Noida / NCR",
    "North India",
    "West / Central India",
    "South India",
    "East / NE India",
    "Pan India / Other",
  ],
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
      "Founded with a practical understanding of industrial construction and a commitment to dependable workmanship, MD Khurshid has built Tin Shade around trust, quality and long-term relationships with clients.",
    ],
    photo: khurshidPhoto,
  },
  nextGen: {
    name: "ABDUL",
    designation: "SON / NEXT GENERATION",
    paragraphs: [
      "Abdul represents the next generation of Tin Shade, bringing a modern approach to project coordination, technology, customer experience and the continued growth of the business.",
    ],
    photo: abdulPhoto,
  },
  connectionBadge: "FOUNDATION → FUTURE",
  story: {
    heading: "One Foundation. One Family. One Vision.",
    body: "From the experience of one generation to the energy of the next, Tin Shade continues to grow with the same focus on strong structures, honest communication and customer satisfaction.",
  },
  cta: {
    heading: "READY TO BUILD YOUR PROJECT?",
    getQuoteLabel: "GET A QUOTE",
    talkToUsLabel: "TALK TO US",
  },
};
