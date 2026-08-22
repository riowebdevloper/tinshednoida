import { ArrowRight, CheckCircle2, Download, FileText, HardHat, Layers, MapPin, Phone, ShieldCheck, Wrench, Factory, Ruler } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, projects, youtubeVideos } from "@/lib/site-data";
import { EstimatorWidget } from "./EstimatorWidget";
import { TrussDivider } from "./TrussDivider";

export interface ServiceDetailData {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  overview: string;
  image: string;
  spanReach: string;
  steelGrade: string;
  eavesHeight: string;
  standardCode: string;
  applications: string[];
  constructionProcess: { step: string; title: string; desc: string }[];
  benefits: string[];
  materials: { title: string; desc: string }[];
  relatedProjectIds: string[];
  relatedVideoId: string;
  catalogPageRange: string;
  faqs: { q: string; a: string }[];
}

export function ServiceDetailView({ data }: { data: ServiceDetailData }) {
  const relatedProjects = projects.filter((p) => data.relatedProjectIds.includes(p.id) || p.category.toLowerCase().includes(data.slug.split("-")[0]!)).slice(0, 3);
  const relatedVideo = youtubeVideos.find((v) => v.id === data.relatedVideoId) ?? youtubeVideos[0]!;

  return (
    <div className="bg-[#F8FAFC] text-slate-900">
      
      {/* ──────── 1. SERVICE HERO ──────── */}
      <section className="relative isolate overflow-hidden bg-[#0B192C] px-5 pb-16 pt-16 text-white sm:px-6 lg:px-10 lg:pb-20 lg:pt-20 border-b border-white/10">
        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-xs border border-white/20 bg-[#0E2A47] px-3 py-1 font-mono text-xs font-semibold text-amber-400 mb-3">
            <HardHat className="size-3.5" />
            <span>{data.eyebrow}</span>
          </div>

          <h1 className="max-w-4xl font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            {data.name}
          </h1>

          <p className="mt-4 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-slate-300 font-sans">
            {data.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              to="/quote"
              className="btn-corp-primary"
            >
              <span>Request Custom Quote</span>
              <ArrowRight className="size-4" />
            </Link>

            <a
              href="#estimator"
              className="btn-corp-navy-outline"
            >
              <Ruler className="size-4 text-amber-400" />
              <span>Calculate Steel Tonnage</span>
            </a>

            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="btn-corp-navy-outline text-xs"
            >
              <Download className="size-3.5 text-amber-400" />
              <span>Download 51-Page Catalog</span>
            </a>
          </div>

          {/* Quick Technical Bar in JetBrains Mono */}
          <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs text-slate-300">
            <div>
              <span className="text-slate-400 block text-[0.6875rem]">CLEAR SPAN</span>
              <strong className="text-white text-sm mt-0.5 block tabular-nums">{data.spanReach}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[0.6875rem]">STEEL GRADE</span>
              <strong className="text-white text-sm mt-0.5 block">{data.steelGrade}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[0.6875rem]">EAVES HEIGHT</span>
              <strong className="text-white text-sm mt-0.5 block tabular-nums">{data.eavesHeight}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[0.6875rem]">STANDARD CODE</span>
              <strong className="text-amber-400 text-sm mt-0.5 block">{data.standardCode}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── 2. OVERVIEW & REAL PHOTOGRAPHY ──────── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block">
                STRUCTURAL SPECIFICATIONS &amp; DESIGN
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Engineered for High Structural Integrity &amp; Durability
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-sans">
                {data.overview}
              </p>

              <div className="pt-2 space-y-2 font-mono text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                  <span>Fabricated with certified IS 2062 prime grade mild steel</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                  <span>Dual-coat anti-rust red oxide primer to IS 2074 standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-600 shrink-0" />
                  <span>Turnkey erection using dedicated 20T/40T hydraulic cranes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="corp-card overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-300 shadow-md">
                <img
                  src={data.image}
                  alt={data.name}
                  className="size-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────── 3. APPLICATIONS & USE CASES ──────── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl border-b border-slate-200 pb-5 mb-8">
            <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
              VERSATILE DEPLOYMENTS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Common Industrial Applications
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.applications.map((app, idx) => (
              <div key={idx} className="corp-card p-5 bg-white flex items-start gap-3">
                <div className="size-8 rounded-xs bg-amber-100 text-amber-800 flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900">
                    {app}
                  </h3>
                  <span className="text-[0.6875rem] font-mono text-slate-500 block mt-0.5">
                    Turnkey Erection Across India
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 4. CONSTRUCTION PROCESS & PHASES ──────── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl border-b border-slate-200 pb-5 mb-8">
            <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
              EXECUTION PROTOCOL
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Fabrication &amp; Crane Erection Phases
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {data.constructionProcess.map((proc, idx) => (
              <div key={idx} className="corp-card p-6 bg-[#F8FAFC]">
                <span className="font-mono text-2xl font-bold text-amber-700 block mb-2 tabular-nums">
                  {proc.step}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {proc.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 5. VERIFIED MATERIALS & QUALITY INCLUSIONS ──────── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block">
                PRIME RAW MATERIAL GRADES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Verified Structural Steel &amp; Sheeting
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-sans">
                Every component is sourced from certified prime mills with full Mill Test Certificates (MTC) verifying yield stress, chemical composition, and tensile strength.
              </p>

              <div className="space-y-3 pt-2">
                {data.materials.map((mat, idx) => (
                  <div key={idx} className="corp-card p-4 bg-white">
                    <h3 className="font-display text-sm font-bold text-slate-900">
                      {mat.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 font-sans">
                      {mat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-xs font-semibold text-[#0E2A47] uppercase tracking-tight block">
                ENGINEERING ADVANTAGES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Direct Yard Quality Inclusions
              </h2>

              <div className="corp-card p-6 bg-white space-y-3">
                {data.benefits.map((ben, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                      {ben}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────── 6. STEEL ESTIMATOR WIDGET ──────── */}
      <section id="estimator" className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimatorWidget />
        </div>
      </section>

      {/* ──────── 7. RELATED PROJECTS & CATALOG PAGES ──────── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5 mb-8">
            <div>
              <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
                AUTHENTIC CASE STUDIES
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Related Executed Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="btn-corp-secondary self-start md:self-auto text-xs"
            >
              <span>View All Projects</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((p) => (
              <div key={p.id} className="corp-card overflow-hidden bg-white flex flex-col justify-between">
                <div className="relative aspect-[4/3] bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="size-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-white/95 px-2 py-0.5 rounded-xs font-mono text-[0.6875rem] font-semibold text-slate-900 border border-slate-200">
                    {p.location}
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-mono text-xs text-amber-700 font-semibold block mb-1">
                      {p.category}
                    </span>
                    <h3 className="font-display font-bold text-base text-slate-900">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2 font-sans">
                      {p.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-500">{p.material}</span>
                    <Link to="/quote" className="font-bold text-[#0E2A47] hover:underline">
                      Quote &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Catalog Callout */}
          <div className="mt-10 p-6 rounded-xs border border-slate-200 bg-white flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-amber-700 uppercase block">
                51-PAGE WORK CATALOG SUBMITTAL
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900 mt-0.5">
                Technical Schedules: {data.catalogPageRange}
              </h3>
              <p className="text-xs text-slate-600 font-sans mt-1">
                View chord schedules, anchor bolt spacing charts, and photographic case studies in our official catalog.
              </p>
            </div>
            <Link
              to="/catalog"
              className="btn-corp-primary text-xs"
            >
              <FileText className="size-4" />
              <span>Browse Catalog (PDF)</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ──────── 8. FREQUENTLY ASKED QUESTIONS ──────── */}
      <section className="py-16 sm:py-20 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-slate-200 pb-5 mb-8 text-center">
            <span className="font-mono text-xs font-semibold text-amber-700 uppercase tracking-tight block mb-1">
              TECHNICAL CLARIFICATIONS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="py-5">
                <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 font-sans">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/quote"
              className="btn-corp-primary"
            >
              <span>Schedule Free On-Site Inspection &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
