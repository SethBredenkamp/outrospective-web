import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -left-56 top-1/2 h-[46rem] w-[46rem] -translate-y-1/2 rounded-full ember-gradient opacity-25 blur-[10px]" />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:px-10">
        <Reveal>
          <p className="max-w-sm text-sm leading-relaxed text-foreground/80">
            A global team of search-first content marketers engineering semantic relevance and
            category signals for both the internet and the people reading it.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display text-[clamp(2rem,4.6vw,4rem)] text-foreground">
            Different thinking.
            <br />
            Meaningful impact.
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-full border border-primary/60 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Our Story
            </a>
            <a
              href="#services"
              className="rounded-full border border-primary/60 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Our Services
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
