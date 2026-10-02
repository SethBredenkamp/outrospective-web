'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'

export function PageTransition() {
  const reduceMotion = useReducedMotion()
  const [complete, setComplete] = useState(false)

  if (reduceMotion || complete) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-4">
        {[0, 1, 2, 3].map((panel) => (
          <motion.div
            key={panel}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            onAnimationComplete={panel === 3 ? () => setComplete(true) : undefined}
            transition={{ duration: 1.15, delay: 0.18 + panel * 0.07, ease: [0.76, 0, 0.24, 1] }}
            style={{ transformOrigin: panel % 2 === 0 ? 'top' : 'bottom' }}
            className={panel === 1 || panel === 2 ? 'bg-[var(--ink)]' : 'ember-gradient'}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, letterSpacing: '0.5em' }}
        animate={{ opacity: [0, 1, 1, 0], letterSpacing: ['0.5em', '0.28em', '0.28em', '0.5em'] }}
        transition={{ duration: 1.05, times: [0, 0.22, 0.66, 1], ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center text-[0.65rem] font-semibold uppercase text-foreground"
      >
        Outrospective
      </motion.div>
    </div>
  )
}
