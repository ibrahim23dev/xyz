import { degrees } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/SampleBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const placeholder = (v?: string, fallback = "To be added") => (v && v.trim() ? v : fallback);

export function Education() {
  return (
    <section id="education" className="bg-forest-dark py-28 text-ivory">
      <div className="mx-auto max-w-6xl px-6">
        <div className="[&_h2]:text-ivory [&_p]:text-ivory/70 [&_p]:text-gold">
          <SectionHeading id="education-title" eyebrow="Education" title="Legal education" />
        </div>

        <ol className="relative border-l border-gold/40 pl-8">
          {degrees.map((d, i) => (
            <Reveal key={d.degree} delay={i * 0.1}>
              <li className="relative mb-12 last:mb-0">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-gold bg-forest-dark" />
                <div className="rounded-sm border border-gold/25 bg-forest/40 p-7 md:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-widest text-gold">{d.status}</span>
                    <SampleBadge verified={d.verified} />
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-ivory md:text-3xl">{d.degree}</h3>
                  <p className="mt-1 text-ivory/80">{d.institution}</p>
                  {d.specialization && <p className="mt-1 text-sm text-gold">Specialization: {d.specialization}</p>}

                  <dl className="mt-6 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                    <Field label="Session" value={placeholder(d.session)} />
                    <Field label="Graduation year" value={placeholder(d.graduationYear, d.status === "Completed" ? "To be added" : "Not yet applicable")} />
                    <Field label="CGPA" value={placeholder(d.cgpa)} />
                    <Field label="Department" value={placeholder(d.department)} />
                  </dl>

                  {d.coursework && d.coursework.length > 0 && (
                    <div className="mt-6">
                      <p className="text-xs uppercase tracking-widest text-gold">Relevant coursework</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ivory/80">
                        {d.coursework.map((c) => <li key={c}>{c}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-ivory/50">{label}</dt>
      <dd className="mt-1 text-ivory/90">{value}</dd>
    </div>
  );
}
