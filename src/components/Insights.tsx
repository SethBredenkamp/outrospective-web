import { motion } from 'framer-motion'
import { insights } from "@/data/site";
import { Reveal } from "./Reveal";
import Image from 'next/image'
import Link from 'next/link'

export function Insights() {
  return (
    <section id="insights" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-9">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-primary">Ideas and field notes</p>
              <h2 className="display mt-4 text-[clamp(2.8rem,5vw,5rem)] leading-none text-foreground">Thinking Outward</h2>
            </div>
            <Link href="/posts" className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/52 transition-colors hover:text-primary">View all insights</Link>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {insights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Link href="/posts" className="group block">
                <motion.article
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                  className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] shadow-[0_1.5rem_4rem_oklch(0_0_0/0.14)]"
                >
                  <motion.div
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative h-[24rem] w-full"
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
                </motion.article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
