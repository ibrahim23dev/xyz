import { events } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Activities() {
  return (
    <section id="activities" className="bg-white/40 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading id="activities-title" eyebrow="Seminars & activities" title="Academic participation"
          intro="Only events with verified details should be listed. Entries below are editable samples." />
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-gold/30 bg-ivory p-7 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-forest px-3 py-1 text-xs text-gold">{e.participation}</span>
                  <SampleBadge verified={e.verified} />
                </div>
                <h3 className="mt-5 text-xl text-forest">{e.title}</h3>
                <dl className="mt-4 space-y-1 text-sm text-charcoal/70">
                  <div><dt className="inline font-medium">Organizer: </dt><dd className="inline">{e.organizer}</dd></div>
                  <div><dt className="inline font-medium">Date: </dt><dd className="inline">{e.date}</dd></div>
                  <div><dt className="inline font-medium">Venue: </dt><dd className="inline">{e.venue}</dd></div>
                </dl>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/75">{e.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
