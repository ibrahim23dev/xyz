import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="home" className="geometric-accent relative isolate min-h-[760px] overflow-hidden bg-forest-dark pt-24 text-ivory md:min-h-screen">
      <div className="absolute -right-40 top-24 -z-10 h-[34rem] w-[34rem] rounded-full border border-gold/10" />
      <div className="absolute -right-24 top-40 -z-10 h-[27rem] w-[27rem] rounded-full border border-gold/10" />
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_.85fr] md:gap-16 md:px-10 lg:px-16">
        <Reveal>
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.24em] text-gold sm:text-xs">
              <span className="h-px w-9 bg-gold" /> Academic portfolio <span className="text-ivory/45">|</span> {profile.university}
            </p>
            <h1 className="mt-7 font-serif text-6xl leading-[.98] tracking-tight text-ivory sm:text-7xl lg:text-[6.6rem]">{profile.name}</h1>
            <p className="mt-6 text-xs uppercase tracking-[.18em] text-ivory/70 sm:text-sm">LL.M. Student <span className="mx-2 text-gold">|</span> {profile.specialization}</p>
            <div className="my-7 h-px w-20 bg-gold" />
            <h2 className="max-w-2xl font-serif text-3xl leading-[1.2] text-ivory/95 sm:text-4xl lg:text-[2.8rem]">Exploring the Intersection of Law, Justice &amp; Islamic Jurisprudence.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/65 sm:text-base">{profile.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#about" className="inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-medium text-forest-dark transition hover:bg-ivory">Explore My Journey <ArrowDown size={15} /></a>
              <a href="#education" className="inline-flex items-center gap-2 rounded-sm border border-ivory/30 px-5 py-3 text-sm text-ivory transition hover:border-gold hover:text-gold">View Academic Profile <ArrowUpRight size={15} /></a>
              <a href={profile.cvPath} download className="inline-flex items-center gap-2 px-3 py-3 text-sm text-gold transition hover:text-ivory"><Download size={15} /> Download CV</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-[430px] md:ml-auto">
            <div className="absolute -inset-3 translate-x-3 translate-y-3 border border-gold/50" />
            <div className="relative aspect-[4/5] overflow-hidden bg-forest">
              <Image src="/my.png" alt="Mehejabin Jui" fill priority sizes="(max-width: 768px) 86vw, 430px" className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 border-l-2 border-gold bg-forest-dark/85 px-5 py-4 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-[.22em] text-gold">Academic affiliation</p>
                <p className="mt-1 font-serif text-lg text-ivory">{profile.university}</p>
                <p className="mt-1 text-xs text-ivory/65">{profile.specialization}</p>
              </div>
            </div>
            <p className="mt-6 text-right text-[10px] uppercase tracking-[.2em] text-ivory/45">Law · Scholarship · Justice</p>
          </div>
        </Reveal>
      </div>
      <a href="#about" aria-label="Scroll to academic journey" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[.25em] text-ivory/45 transition hover:text-gold md:flex"><span className="h-px w-8 bg-gold/60" /> Discover <span className="h-px w-8 bg-gold/60" /></a>
    </section>
  );
}
