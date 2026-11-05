import { profile, skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 lg:px-16">
      <SectionHeading id="about-title" eyebrow="About the scholar" title="A considered approach to law & justice" intro="An academic path shaped by curiosity about legal traditions, their principles, and the lives they touch." />
      <div className="grid gap-14 md:grid-cols-[.78fr_1.4fr]">
        <Reveal>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm border border-gold/50 bg-white p-2 shadow-xl shadow-forest/10">
            <div className="relative h-full w-full overflow-hidden bg-cream">
              <Image src="/my.png" alt="Mehejabin Jui" fill sizes="(max-width: 768px) 80vw, 340px" className="object-cover object-center" />
            </div>
            <p className="absolute -bottom-5 -right-4 bg-forest px-5 py-3 font-serif text-sm text-ivory">{profile.specialization}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-5 leading-7 text-charcoal/75">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
            <h3 className="pt-4 font-serif text-2xl text-forest">Academic philosophy</h3>
            <p>{profile.philosophy}</p>
            <h3 className="pt-4 font-serif text-2xl text-forest">Professional aspirations</h3>
            <p>{profile.aspirations}</p>
          </div>

          <div className="mt-12 border-t border-gold/30 pt-8">
            <h3 className="font-serif text-2xl text-forest">Skills & expertise</h3>
            <p className="mt-2 text-sm text-charcoal/60">Proficiency levels are left blank until confirmed.</p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.title} className="rounded-xl border border-gold/30 bg-white/70 p-5">
                  <p className="text-xs uppercase tracking-widest text-gold">{g.title}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <li key={s.name} className="rounded-full bg-forest/5 px-3 py-1 text-sm text-forest">{s.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
