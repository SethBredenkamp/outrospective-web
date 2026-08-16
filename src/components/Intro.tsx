import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section id="work-intro" className="relative overflow-hidden border-t border-white/[0.06] py-28 lg:py-40">
      <div className="brand-orbit pointer-events-none absolute -left-[22rem] top-1/2 size-[46rem] -translate-y-1/2 opacity-90 lg:-left-[17rem]" />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:px-10">
        <Reveal>
          <div className="max-w-sm lg:pl-8">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-primary">Outward by design</p>
            <p className="mt-6 text-sm leading-7 text-foreground/68">
              We bring strategy, design and technology into one connected practice—shaping brands
              and experiences that earn attention, build trust and create momentum.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-white/10 pt-5 text-[0.62rem] uppercase tracking-[0.2em] text-foreground/48">
              <span>Brand</span><span>Product</span><span>Network</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display text-[clamp(2.8rem,5.8vw,5.6rem)] leading-[0.96] text-foreground">
            Different thinking.
            <br />
            Meaningful impact.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
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
