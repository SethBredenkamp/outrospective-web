'use client'

import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function EditorialPageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string[]
  intro: string
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-40 lg:px-10 lg:pb-28 lg:pt-52">
      <div className="pointer-events-none absolute right-[-8rem] top-24 size-[28rem] rounded-full border border-primary/20 sm:size-[40rem]" />
      <div className="pointer-events-none absolute right-[10%] top-36 size-40 brand-orbit opacity-55" />
      <div className="mx-auto max-w-[1400px]">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-primary"
        >
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </motion.p>
        <h1 className="display mt-8 max-w-[78rem] text-[clamp(3.6rem,9vw,9rem)] uppercase leading-[0.82]">
          {title.map((line, index) => (
            <span key={line} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                initial={{ y: '115%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.08 + index * 0.11, ease }}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="ml-auto mt-12 max-w-2xl border-l border-primary/60 pl-6 text-lg leading-[1.75] text-foreground/70 lg:text-xl"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  )
}
