import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { company, leadership } from "@/lib/site-data";

export function Leadership() {
  const { founder, nextGen, story, cta } = leadership;

  return (
    <section id="about" className="bg-steel-deep text-steel-foreground py-16 lg:py-24 border-b border-steel-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Small section label */}
        <p className="text-xs font-bold uppercase tracking-widest text-steel-muted">About</p>
        <div className="mt-2 h-px w-12 bg-primary" />

        {/* Two profiles side by side */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Founder */}
          <div className="group">
            {founder.photo && (
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-black">
                <img
                  src={founder.photo}
                  alt={`${founder.name} — ${founder.designation}`}
                  className="size-full object-cover object-[center_12%]"
                />
              </div>
            )}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{founder.designation}</p>
              <h3 className="mt-1 font-display text-2xl font-bold uppercase text-white">
                {founder.name}
              </h3>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-steel-muted">
                {founder.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <p className="mt-4 text-xs text-steel-muted/70">
                Hands-on site leadership since {company.since}
              </p>
            </div>
          </div>

          {/* Next Gen */}
          <div className="group">
            {nextGen.photo && (
              <div className="aspect-[4/3] overflow-hidden rounded-sm bg-black">
                <img
                  src={nextGen.photo}
                  alt={`${nextGen.name} — ${nextGen.designation}`}
                  className="size-full object-cover object-[center_12%]"
                />
              </div>
            )}
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-400">{nextGen.designation}</p>
              <h3 className="mt-1 font-display text-2xl font-bold uppercase text-white">
                {nextGen.name}
              </h3>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-steel-muted">
                {nextGen.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
              <p className="mt-4 text-xs text-steel-muted/70">
                Digital coordination & modern project management
              </p>
            </div>
          </div>
        </div>

        {/* Story quote */}
        <div className="mt-14 border-t border-steel-line pt-10 max-w-3xl">
          <h4 className="font-display text-xl font-bold uppercase text-white">
            {story.heading}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-steel-muted">
            {story.body}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-px"
          >
            {cta.getQuoteLabel}
            <ArrowRight className="size-4" />
          </Link>
          <a
            href={company.whatsappText}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-steel-line px-5 py-2.5 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="size-4" />
            {cta.talkToUsLabel}
          </a>
        </div>

      </div>
    </section>
  );
}
