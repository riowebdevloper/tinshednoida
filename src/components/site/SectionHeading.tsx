import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`eyebrow flex items-center gap-3 text-primary ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 rule-accent" />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-3xl font-extrabold uppercase leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {sub ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p> : null}
    </div>
  );
}
