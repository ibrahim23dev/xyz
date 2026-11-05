import { certificates } from "@/data/portfolio";
import { EmptyState } from "@/components/ui/EmptyState";
import { Reveal } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certificates() {
  return (
    <section id="certificates" className="bg-forest py-28 text-ivory">
      <div className="mx-auto max-w-6xl px-6">
        <div className="[&_h2]:text-ivory [&_p]:text-ivory/70 [&_p:first-child]:text-gold">
          <SectionHeading id="certificates-title" eyebrow="Certificates & achievements" title="Verified credentials" />
        </div>
        {certificates.length === 0 ? (
          <EmptyState title="No certificates added yet" message="Genuine certificates will appear here with issuer, date, credential ID, and a verification link." />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.08}>
                <article className="h-full rounded-2xl border border-gold/25 bg-forest-dark/60 p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-widest text-gold">{c.category}</span>
                    <SampleBadge verified={c.verified} />
                  </div>
                  <h3 className="mt-4 text-xl text-ivory">{c.title}</h3>
                  <p className="mt-2 text-sm text-ivory/70">{c.issuer}</p>
                  <p className="mt-1 text-sm text-ivory/50">Issued: {c.issueDate}</p>
                  {c.credentialId && <p className="mt-1 text-sm text-ivory/50">ID: {c.credentialId}</p>}
                  {c.verificationUrl && (
                    <a href={c.verificationUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-gold underline underline-offset-4">Verify credential</a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
