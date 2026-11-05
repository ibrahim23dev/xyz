import { researchInterests } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading id="research-title" eyebrow="Research interests" title="Areas I am exploring"
        intro="These are areas of interest and study, not claims of completed research." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {researchInterests.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 0.08}>
            <article className="group h-full rounded-2xl border border-gold/30 bg-white/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl">
              <span className="font-serif text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl leading-snug text-forest">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{r.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
