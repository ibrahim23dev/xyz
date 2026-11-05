export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-gold/60 bg-white/50 px-8 py-14 text-center">
      <p className="font-serif text-2xl text-forest">{title}</p>
      <p className="mx-auto mt-3 max-w-md text-sm text-charcoal/70">{message}</p>
    </div>
  );
}
