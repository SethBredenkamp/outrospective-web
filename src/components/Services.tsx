import { motion } from 'framer-motion'
import { Gem, Clapperboard, Layers, Share2, type LucideIcon } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = { Gem, Clapperboard, Layers, Share2 };

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -right-72 top-24 h-[40rem] w-[40rem] rounded-full ember-gradient opacity-20 blur-[2px]" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="display text-center text-[clamp(2rem,4.6vw,3.6rem)] text-foreground">
            Our Services
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Gem;
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-[var(--surface)] p-8"
                >
                  <span className="absolute inset-0 -translate-y-full ember-gradient opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <Icon size={26} strokeWidth={1.4} className="text-primary transition-colors duration-500 group-hover:text-[var(--ink)]" />
                      <span className="text-[0.65rem] font-semibold tracking-[0.3em] text-muted-foreground transition-colors duration-500 group-hover:text-[var(--ink)]/70">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="display mt-12 text-2xl text-foreground transition-colors duration-500 group-hover:text-[var(--ink)]">
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
