/** Marks content that has not yet been verified by the owner. */
export function SampleBadge({ verified }: { verified: boolean }) {
  if (verified) return null;
  return (
    <span className="inline-block rounded-full border border-gold/60 bg-gold/10 px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-forest">
      Editable sample
    </span>
  );
}
