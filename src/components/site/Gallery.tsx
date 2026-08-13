import { gallery } from "@/lib/site-data";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="content-auto bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-10 bg-primary" />
            Gallery
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl">
            On site with our crew
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Fabrication, erection and finished structures from recent projects across India.
          </p>
        </Reveal>

        <div className="mt-10 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] lg:grid-cols-4">
          {gallery.map((item, i) => (
            <Reveal
              key={item.alt}
              delay={i * 50}
              variant="scale"
              className={`group relative overflow-hidden rounded-sm bg-steel-deep ${
                i % 5 === 0 ? "row-span-2" : ""
              } ${i % 7 === 3 ? "col-span-2" : ""}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                width={1280}
                height={960}
                className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
