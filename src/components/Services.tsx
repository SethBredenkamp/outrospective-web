import { motion } from 'framer-motion'
import { Gem, Clapperboard, Layers, Share2, type LucideIcon } from "lucide-react";
import { services } from "@/data/site";
import { CurtainReveal } from './CurtainReveal'
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = { Gem, Clapperboard, Layers, Share2 };

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-72 top-24 h-[40rem] w-[40rem] rounded-full ember-gradient opacity-20 blur-[2px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <CurtainReveal>
          <div className="grid gap-6 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-primary">Capabilities</p>
              <h2 className="display mt-4 text-[clamp(2.8rem,5.4vw,5.3rem)] leading-none text-foreground">Our Services</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-foreground/58">
              Four connected disciplines. One senior team responsible for the whole picture.
            </p>
          </div>
        </CurtainReveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Gem;
            return (
              <Reveal key={service.title} delay={i * 0.06} x={i % 2 === 0 ? -44 : 44} y={18}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[var(--surface)] p-7 shadow-[0_1.5rem_4rem_oklch(0_0_0/0.14)] sm:min-h-[25rem] sm:p-8"
                >
                  <span className="absolute inset-0 -translate-y-full ember-gradient opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <Icon size={26} strokeWidth={1.4} className="text-primary transition-colors duration-500 group-hover:text-[var(--ink)]" />
                      <span className="text-[0.65rem] font-semibold tracking-[0.3em] text-muted-foreground transition-colors duration-500 group-hover:text-[var(--ink)]/70">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="display mt-auto pt-16 text-[1.65rem] leading-[1.05] text-foreground transition-colors duration-500 group-hover:text-[var(--ink)]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold text-primary transition-colors duration-500 group-hover:text-[var(--ink)]">
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-[var(--ink)]/80">
                      {service.body}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
