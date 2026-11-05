import { EmptyState } from "@/components/ui/EmptyState";
import { SectionHeading } from "@/components/ui/SectionHeading";

const topics = [
  "Understanding Al-Fiqh in Contemporary Society",
  "Islamic Jurisprudence and Modern Legal Systems",
  "Women's Rights in Islamic Law",
  "Islamic Family Law",
  "Comparative Legal Studies",
  "Contemporary Legal Challenges",
];

export function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading id="blog-title" eyebrow="Blog & academic insights" title="Notes on law and jurisprudence"
        intro="Planned topics are listed below. No articles are presented as published work until they are written and reviewed." />
      <ul className="mb-10 flex flex-wrap gap-2">
        {topics.map((t) => <li key={t} className="rounded-full bg-forest/5 px-4 py-1.5 text-sm text-forest">{t}</li>)}
      </ul>
      <EmptyState title="Articles are coming soon" message="Each article will include a title, cover image, category, date, reading time, and related articles." />
    </section>
  );
}
