'use client'

import { motion, useReducedMotion } from 'framer-motion'

const phrases = ['Business strategy', 'Brand systems', 'Digital products', 'Connected growth']

export function TransitionRail() {
  const reduceMotion = useReducedMotion()
  const repeated = [...phrases, ...phrases]

  return (
    <section aria-label="Outrospective capabilities" className="relative z-10 overflow-hidden border-y border-white/10 ember-gradient text-[var(--ink)]">
      <motion.div
        animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
        className="flex w-max items-center py-5 will-change-transform sm:py-6"
      >
        {repeated.map((phrase, index) => (
          <div key={`${phrase}-${index}`} className="flex items-center">
            <span className="display whitespace-nowrap px-6 text-[clamp(1.25rem,2.4vw,2.5rem)] uppercase tracking-[-0.04em] sm:px-9">
              {phrase}
            </span>
            <span className="size-2 shrink-0 rounded-full bg-[var(--ink)]" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
