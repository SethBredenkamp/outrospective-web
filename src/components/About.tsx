import { ArrowUpRight } from "lucide-react";
import Link from 'next/link'
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28 lg:px-10 lg:py-40">
      <div className="brand-orbit pointer-events-none absolute -right-[24rem] top-12 size-[52rem] opacity-70" />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-primary">Our perspective</p>
          <h2 className="display mt-5 max-w-5xl text-[clamp(3rem,6.4vw,6.5rem)] leading-[0.94] text-foreground">
            Where Perspective<br />Becomes Progress.
          </h2>
        </Reveal>
        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <Reveal>
            <div className="flex h-full flex-col rounded-[2rem] border border-white/[0.08] bg-[var(--surface)]/72 p-8 shadow-[0_2rem_6rem_oklch(0_0_0/0.16)] sm:p-10 lg:p-12">
              <span className="display text-[clamp(2.3rem,4vw,4rem)] text-foreground">Outward thinkers</span>
              <p className="mt-7 text-[0.98rem] leading-8 text-foreground/62">
                The name began as a happy accident on a stage-race trail run, then grew into a way
                of working. Unlike &quot;introspective,&quot; which turns inward, outrospective means looking
                out: seeing through different lenses, listening closely and staying open to the
                unexpected. We bring that curiosity to every brief—challenging comfortable
                assumptions, connecting disciplines and creating work that is strategically clear,
                creatively distinctive and built to perform in the real world.
              </p>
              <Link href="/contact" className="mt-10 inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-foreground">
                Work with us <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex min-h-[34rem] h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[oklch(0.095_0.01_45)] p-8 sm:p-10 lg:p-12">
              <div className="brand-orbit absolute -bottom-52 -right-44 size-[38rem] opacity-90" />
              <div className="absolute inset-0 hero-grain opacity-35" />
              <div className="relative flex items-center justify-between text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-foreground/42">
                <span>Out / Look</span><span>Since 01</span>
              </div>
              <div className="relative">
                <p className="display text-[clamp(4.5rem,10vw,9rem)] uppercase leading-[0.72] text-foreground">See</p>
                <p className="display ml-[12%] text-[clamp(4.5rem,10vw,9rem)] uppercase leading-[0.82] text-transparent [-webkit-text-stroke:1px_oklch(0.965_0.012_75/0.72)]">Beyond</p>
              </div>
              <p className="relative max-w-xs text-sm leading-6 text-foreground/52">Empathy reveals the real problem. Curiosity expands what is possible. Craft makes the answer undeniable.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
