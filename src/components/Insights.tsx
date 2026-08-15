import { motion } from 'framer-motion'
import { insights } from "@/data/site";
import { Reveal } from "./Reveal";
import Image from 'next/image'

export function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <h2 className="display text-center text-[clamp(1.9rem,4vw,3.2rem)] text-foreground">
            Thinking Outward
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {insights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <motion.a
                href="#blog"
                whileHover="hover"
                initial="rest"
                animate="rest"
                className="group relative block overflow-hidden rounded-[1.75rem] border border-border"
              >
                <motion.div
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-80 w-full"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.13_0_0/0.92),transparent_60%)]" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-primary">
                    {item.category}
                  </span>
                  <h3 className="display mt-3 text-lg leading-tight text-foreground">
                    {item.title}
                  </h3>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
