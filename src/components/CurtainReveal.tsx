'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function CurtainReveal({
  children,
  className,
  tone = 'ember',
}: {
  children: ReactNode
  className?: string
  tone?: 'ember' | 'ink'
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-12%' }}
      className={`relative overflow-hidden ${className ?? ''}`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -32 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
      {!reduceMotion ? (
        <motion.span
          aria-hidden="true"
          variants={{
            hidden: { scaleX: 1 },
            visible: { scaleX: 0 },
          }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
          className={`absolute inset-0 z-10 origin-right ${tone === 'ember' ? 'ember-gradient' : 'bg-[var(--ink)]'}`}
        />
      ) : null}
    </motion.div>
  )
}
