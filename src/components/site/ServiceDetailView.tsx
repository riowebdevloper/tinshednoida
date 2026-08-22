import { ArrowRight, CheckCircle2, Download, FileText, HardHat, Layers, MapPin, Phone, ShieldCheck, Wrench, Factory, Ruler } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, projects, youtubeVideos } from "@/lib/site-data";
import { EstimatorWidget } from "./EstimatorWidget";

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
    <div className="bg-warm-paper text-[#0B0D0F]">
      
      {/* ──────── 1. SERVICE HERO ──────── */}
      <section className="relative isolate overflow-hidden bg-[#0B0D0F] px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 border-b border-white/10 arch-grid-pattern">
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B08A4A]" />
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
              {data.eyebrow}
            </span>
          </div>

          <h1 className="max-w-4xl font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.06]">
            {data.name}
          </h1>

          <p className="mt-5 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#8C9398] font-sans">
            {data.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/quote"
              className="btn-arch-primary"
            >
              <span>Request Custom Quote</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <a
              href="#estimator"
              className="btn-arch-secondary"
            >
              <Ruler className="size-3.5 text-[#B08A4A]" />
              <span>Calculate Steel Tonnage</span>
            </a>

            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#8C9398] hover:text-white transition-colors py-2 px-1"
            >
              <Download className="size-3.5 text-[#B08A4A]" />
              <span>Download 51-Page Catalog</span>
            </a>
          </div>

          {/* Quick Technical Bar */}
          <div className="mt-12 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-[#8C9398]">
            <div>
              <span className="text-[#8C9398] block text-[0.6875rem] uppercase">CLEAR SPAN</span>
              <strong className="text-white text-sm mt-0.5 block tabular-nums">{data.spanReach}</strong>
            </div>
            <div>
              <span className="text-[#8C9398] block text-[0.6875rem] uppercase">STEEL GRADE</span>
              <strong className="text-white text-sm mt-0.5 block">{data.steelGrade}</strong>
            </div>
            <div>
              <span className="text-[#8C9398] block text-[0.6875rem] uppercase">EAVES HEIGHT</span>
              <strong className="text-white text-sm mt-0.5 block tabular-nums">{data.eavesHeight}</strong>
            </div>
            <div>
              <span className="text-[#8C9398] block text-[0.6875rem] uppercase">STANDARD CODE</span>
              <strong className="text-[#B08A4A] text-sm mt-0.5 block">{data.standardCode}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── 2. OVERVIEW & PHOTOGRAPHY ──────── */}
      <section className="py-24 sm:py-32 border-b border-[#0B0D0F]/10 bg-warm-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B08A4A]" />
                <span className="font-mono-tag text-[#B08A4A] text-xs font-bold">
                  STRUCTURAL SPECIFICATIONS
                </span>
              </div>
              <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold text-[#0B0D0F] uppercase leading-tight">
                Engineered for High Structural Integrity &amp; Longevity
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#525860] font-sans">
                {data.overview}
              </p>

              <div className="pt-2 space-y-2.5 font-mono text-xs text-[#0B0D0F]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-700 shrink-0" />
                  <span>Fabricated with certified IS 2062 prime grade mild steel</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-700 shrink-0" />
                  <span>Dual-coat anti-rust red oxide primer to IS 2074 standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-700 shrink-0" />
                  <span>Turnkey erection using dedicated hydraulic mobile crane fleets</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="arch-card-light overflow-hidden p-2.5 bg-white border border-[#0B0D0F]/15 shadow-xl">
                <div className="relative aspect-[4/3] bg-[#0B0D0F] overflow-hidden">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────── 3. APPLICATIONS ──────── */}
      <section className="py-24 sm:py-32 border-b border-[#0B0D0F]/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl border-b border-[#0B0D0F]/15 pb-6 mb-12">
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block mb-2">
              VERSATILE DEPLOYMENTS
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold text-[#0B0D0F] uppercase">
              Common Industrial Applications
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.applications.map((app, idx) => (
              <div key={idx} className="arch-card-light p-6 bg-[#F3F1EC] border border-[#0B0D0F]/10">
                <span className="font-mono text-2xl font-extrabold text-[#B08A4A] block mb-2 tabular-nums">
                  0{idx + 1}
                </span>
                <h3 className="font-editorial-title font-bold text-base text-[#0B0D0F] uppercase">
                  {app}
                </h3>
                <span className="text-xs font-mono text-[#8C9398] block mt-1">
                  Turnkey Execution Across India
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 4. EXECUTION PROCESS ──────── */}
      <section className="py-24 sm:py-32 border-b border-[#0B0D0F]/10 bg-warm-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl border-b border-[#0B0D0F]/15 pb-6 mb-12">
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block mb-2">
              EXECUTION PROTOCOL
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold text-[#0B0D0F] uppercase">
              Fabrication &amp; Crane Erection Phases
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {data.constructionProcess.map((proc, idx) => (
              <div key={idx} className="arch-card-light p-6 sm:p-8 bg-white border border-[#0B0D0F]/15">
                <span className="font-mono text-3xl font-extrabold text-[#B08A4A] block mb-2 tabular-nums">
                  {proc.step}
                </span>
                <h3 className="font-editorial-title text-lg font-bold text-[#0B0D0F] uppercase">
                  {proc.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#525860] font-sans">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 5. VERIFIED MATERIALS & QUALITY ──────── */}
      <section className="py-24 sm:py-32 border-b border-[#0B0D0F]/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block">
                PRIME RAW MATERIAL GRADES
              </span>
              <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold text-[#0B0D0F] uppercase">
                Verified Structural Steel &amp; Cladding
              </h2>
              <p className="text-xs sm:text-sm text-[#525860] font-sans">
                Every component is sourced from certified prime mills with full Mill Test Certificates (MTC) verifying yield stress, chemical composition, and tensile strength.
              </p>

              <div className="space-y-3 pt-2">
                {data.materials.map((mat, idx) => (
                  <div key={idx} className="p-4 border border-[#0B0D0F]/10 bg-[#F3F1EC]">
                    <h3 className="font-editorial-title text-sm font-bold text-[#0B0D0F] uppercase">
                      {mat.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#525860] font-sans">
                      {mat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block">
                ENGINEERING ADVANTAGES
              </span>
              <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold text-[#0B0D0F] uppercase">
                Direct Yard Quality Inclusions
              </h2>

              <div className="p-6 bg-[#F3F1EC] border border-[#0B0D0F]/10 space-y-3">
                {data.benefits.map((ben, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#0B0D0F] font-sans leading-relaxed">
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
      <section id="estimator" className="py-24 sm:py-32 border-b border-[#0B0D0F]/10 bg-warm-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimatorWidget />
        </div>
      </section>

      {/* ──────── 7. RELATED PROJECTS & CATALOG ──────── */}
      <section className="py-24 sm:py-32 border-b border-[#0B0D0F]/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#0B0D0F]/15 pb-6 mb-12">
            <div>
              <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block mb-2">
                AUTHENTIC CASE STUDIES
              </span>
              <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold text-[#0B0D0F] uppercase">
                Related Executed Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="btn-arch-dark-outline self-start md:self-auto text-xs"
            >
              <span>View All Projects</span>
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((p) => (
              <div key={p.id} className="arch-card-light overflow-hidden bg-[#F3F1EC] border border-[#0B0D0F]/15 flex flex-col justify-between">
                <div className="relative aspect-[4/3] bg-[#0B0D0F]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="size-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/85 text-white px-2 py-0.5 font-mono text-[0.6875rem] font-bold">
                    {p.location}
                  </div>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-mono text-xs text-[#B08A4A] font-bold uppercase block mb-1">
                      {p.category}
                    </span>
                    <h3 className="font-editorial-title font-bold text-base text-[#0B0D0F] uppercase">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#525860] line-clamp-2 font-sans">
                      {p.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#0B0D0F]/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-[#8C9398]">{p.material}</span>
                    <Link to="/quote" className="font-bold text-[#0B0D0F] hover:text-[#B08A4A]">
                      Quote &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Catalog Callout */}
          <div className="mt-12 p-6 sm:p-8 border border-[#0B0D0F]/15 bg-[#F3F1EC] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs font-bold text-[#B08A4A] uppercase block">
                51-PAGE WORK CATALOG SUBMITTAL
              </span>
              <h3 className="font-editorial-title text-xl font-bold text-[#0B0D0F] uppercase mt-1">
                Technical Schedules: {data.catalogPageRange}
              </h3>
              <p className="text-xs text-[#525860] font-sans mt-1">
                View chord schedules, anchor bolt spacing charts, and photographic case studies in our official catalog.
              </p>
            </div>
            <Link
              to="/catalog"
              className="btn-arch-primary text-xs"
            >
              <FileText className="size-4" />
              <span>Browse Catalog (PDF)</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ──────── 8. FAQS ──────── */}
      <section className="py-24 sm:py-32 border-b border-[#0B0D0F]/10 bg-warm-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#0B0D0F]/15 pb-6 mb-12 text-center">
            <span className="font-mono-tag text-[#B08A4A] text-xs font-bold block mb-2">
              TECHNICAL CLARIFICATIONS
            </span>
            <h2 className="font-editorial-title text-3xl sm:text-4xl font-extrabold text-[#0B0D0F] uppercase">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="divide-y divide-[#0B0D0F]/15 border-y border-[#0B0D0F]/15">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="py-6">
                <h3 className="font-editorial-title text-base sm:text-lg font-bold text-[#0B0D0F] uppercase">
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#525860] font-sans">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/quote"
              className="btn-arch-primary"
            >
              <span>Schedule Free On-Site Inspection &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
