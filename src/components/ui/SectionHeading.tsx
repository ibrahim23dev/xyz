export function SectionHeading({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="mb-12 max-w-3xl">
      <p className="flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-gold"><span className="h-px w-8 bg-gold" />{eyebrow}</p>
      <h2 id={id} className="mt-4 max-w-3xl font-serif text-4xl leading-[1.12] text-forest md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 max-w-2xl text-sm leading-7 text-charcoal/70 md:text-base">{intro}</p>}
    </header>
  );
}
