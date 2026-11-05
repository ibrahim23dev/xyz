import { publications } from "@/data/portfolio";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  "Published Research Papers", "Conference Papers", "Academic Articles",
  "Ongoing Research", "Research Proposals", "Legal Case Studies",
] as const;

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading id="publications-title" eyebrow="Research & publications" title="Scholarship"
        intro="Publications appear here once verified. No citations are listed until they are confirmed." />
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <span key={c} className="rounded-full border border-gold/40 px-3 py-1 text-xs text-forest">{c}</span>
        ))}
      </div>

      {publications.length === 0 ? (
        <EmptyState title="No verified publications yet"
          message="Once papers, articles, or proposals are confirmed, they will be listed here with abstracts, venues, DOIs, and PDF downloads." />
      ) : (
        <ul className="grid gap-6">
          {publications.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <li className="rounded-2xl border border-gold/30 bg-white/70 p-7">
                <p className="text-xs uppercase tracking-widest text-gold">{p.category}</p>
                <h3 className="mt-2 text-xl text-forest">{p.title}</h3>
                <p className="mt-1 text-sm text-charcoal/60">{p.venue} · {p.date}</p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/80">{p.abstract}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  {p.doi && <a className="text-forest underline underline-offset-4" href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer">DOI</a>}
                  {p.url && <a className="text-forest underline underline-offset-4" href={p.url} target="_blank" rel="noopener noreferrer">Read online</a>}
                  {p.pdf && <a className="text-forest underline underline-offset-4" href={p.pdf} download>Download PDF</a>}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      )}
    </section>
  );
}
