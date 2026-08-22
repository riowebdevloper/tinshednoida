import { ArrowRight, CheckCircle2, Download, FileText, Phone, ShieldCheck, Ruler } from "lucide-react";
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
    <div className="bg-[#0A1128] text-white">
      
      {/* ──────── 1. SERVICE HERO ──────── */}
      <section className="relative isolate overflow-hidden bg-[#0A1128] px-4 pb-20 pt-28 text-white sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 border-b border-indigo-200/15 arch-grid-pattern">
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#F59E0B]" />
            <span className="font-mono-tag text-[#F59E0B] text-xs font-bold">
              {data.eyebrow}
            </span>
          </div>

          <h1 className="max-w-4xl font-editorial-title text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.06]">
            {data.name}
          </h1>

          <p className="mt-5 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#C7D2FE] font-sans">
            {data.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/quote"
              className="btn-red-primary"
            >
              <span>Request Custom Quote</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <a
              href="#estimator"
              className="btn-yellow-primary"
            >
              <Ruler className="size-3.5" />
              <span>Calculate Steel Tonnage</span>
            </a>

            <a
              href={company.brochurePdf || "/catalog/tin-shade-noida-catalog.pdf"}
              download="TIN_SHADE_NOIDA_CATALOG.pdf"
              className="btn-navy-outline text-xs"
            >
              <Download className="size-3.5 text-[#F59E0B]" />
              <span>Download 51-Page Catalog</span>
            </a>
          </div>

          {/* Quick Technical Bar */}
          <div className="mt-12 pt-6 border-t border-indigo-200/15 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-[#8E9CB8]">
            <div>
              <span className="text-[#8E9CB8] block text-[0.6875rem] uppercase">CLEAR SPAN</span>
              <strong className="text-white text-sm mt-0.5 block tabular-nums">{data.spanReach}</strong>
            </div>
            <div>
              <span className="text-[#8E9CB8] block text-[0.6875rem] uppercase">STEEL GRADE</span>
              <strong className="text-white text-sm mt-0.5 block">{data.steelGrade}</strong>
            </div>
            <div>
              <span className="text-[#8E9CB8] block text-[0.6875rem] uppercase">EAVES HEIGHT</span>
              <strong className="text-white text-sm mt-0.5 block tabular-nums">{data.eavesHeight}</strong>
            </div>
            <div>
              <span className="text-[#8E9CB8] block text-[0.6875rem] uppercase">STANDARD CODE</span>
              <strong className="text-[#F59E0B] text-sm mt-0.5 block">{data.standardCode}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── 2. OVERVIEW & TECHNICAL BLUEPRINT ──────── */}
      <section className="py-16 sm:py-24 border-b border-indigo-200/15 bg-[#0A1128]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-semibold text-[#F59E0B] uppercase tracking-tight block">
                STRUCTURAL SPECIFICATIONS
              </span>
              <h2 className="font-editorial-title text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
                Direct Yard Engineering &amp; Certified Assembly
              </h2>
              <p className="text-sm sm:text-base text-[#C7D2FE] leading-relaxed font-sans">
                {data.overview}
              </p>

              <div className="pt-4 border-t border-indigo-200/15 grid sm:grid-cols-2 gap-4 font-mono text-xs text-white">
                {data.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 bg-[#101B3B] border border-indigo-200/20 rounded-[2px]">
                    <CheckCircle2 className="size-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#C7D2FE]">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#101B3B] border border-indigo-200/25 p-4 rounded-[3px] shadow-2xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black rounded-[2px]">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="size-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0A1128]/90 px-3 py-1 font-mono text-[0.6875rem] text-[#F59E0B] border border-indigo-200/20 rounded-[2px]">
                    PORTFOLIO: PAGES {data.catalogPageRange}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────── 3. ESTIMATOR WIDGET ──────── */}
      <div id="estimator" className="py-12 bg-[#0A1128] border-b border-indigo-200/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <EstimatorWidget />
        </div>
      </div>

    </div>
  );
}
