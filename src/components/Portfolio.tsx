'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'

import { ProjectVisual } from '@/components/ProjectVisual'
import { projects, type Project } from '@/data/site'

const ease = [0.22, 1, 0.36, 1] as const

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-8 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-[var(--ink)] shadow-[var(--shadow-deep)] ring-1 ring-white/[0.08]">
          <div className="relative lg:grid lg:grid-cols-[0.68fr_1.32fr]">
            <aside className="px-8 pb-9 pt-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:px-14 lg:py-14">
              <div>
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-primary">Proof, not promises</p>
                <h2 className="display mt-4 max-w-md text-[clamp(3rem,6vw,6.6rem)] leading-[0.86] text-foreground">
                  Work that moves business.
                </h2>
                <p className="mt-7 max-w-sm text-sm leading-[1.75] text-muted-foreground">
                  Senior strategy translated into brand, communication and digital systems people can see, use and believe in.
                </p>
              </div>

              <ol className="mt-10 hidden space-y-3 border-t border-white/10 pt-7 lg:block">
                {projects.map((project, index) => (
                  <li key={project.slug} className="flex items-center justify-between gap-5 text-sm text-foreground/42">
                    <span>{project.client}</span>
                    <span className="text-[0.58rem] tabular-nums tracking-[0.2em]">{String(index + 1).padStart(2, '0')}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-9 hidden items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-foreground/36 lg:flex">
                Scroll through the work <ArrowDown size={14} />
              </div>
            </aside>

            <div className="space-y-5 p-4 pt-0 sm:p-6 sm:pt-0 lg:space-y-7 lg:py-7 lg:pl-0 lg:pr-7">
              {projects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, x: 96, rotate: 1.4 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.95, delay: index * 0.05, ease }}
                >
                  <ProjectCard project={project} index={index} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isEmber = project.color === 'ember'
  const revealColor = isEmber ? 'oklch(0.69 0.21 43)' : 'oklch(0.96 0.008 78)'
  const onReveal = 'oklch(0.13 0.01 40)'

  return (
    <motion.a
      href={`/work#${project.slug}`}
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
      className="group relative block min-h-[31rem] overflow-hidden rounded-[2rem] bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:min-h-[72vh]"
    >
      <motion.div
        variants={{ rest: { scale: 1 }, hover: { scale: 1.045 } }}
        transition={{ duration: 0.9, ease }}
        className="absolute inset-0"
      >
        <ProjectVisual project={project} />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.08_0.01_45/0.02)_20%,oklch(0.08_0.01_45/0.92)_100%)]" />
      <motion.span
        aria-hidden
        variants={{ rest: { scaleY: 0 }, hover: { scaleY: 1 } }}
        transition={{ duration: 0.72, ease }}
        style={{ background: revealColor, transformOrigin: index % 2 === 0 ? 'bottom' : 'top' }}
        className="absolute inset-0"
      />

      <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-10">
        <div className="flex items-center justify-between gap-6">
          <motion.p
            variants={{ rest: { color: 'oklch(0.96 0.008 78 / 0.68)' }, hover: { color: onReveal } }}
            className="text-[0.58rem] font-semibold uppercase tracking-[0.28em]"
          >
            {String(index + 1).padStart(2, '0')} — {project.sector}
          </motion.p>
          <motion.span
            variants={{ rest: { color: 'oklch(0.96 0.008 78)', rotate: 0 }, hover: { color: onReveal, rotate: 45 } }}
            transition={{ duration: 0.45, ease }}
          >
            <ArrowUpRight size={34} strokeWidth={1.25} />
          </motion.span>
        </div>

        <div>
          <motion.p
            variants={{ rest: { color: 'oklch(0.96 0.008 78 / 0.62)' }, hover: { color: onReveal } }}
            className="text-[0.58rem] font-semibold uppercase tracking-[0.28em]"
          >
            {project.status === 'documented' ? 'Documented client partnership' : 'Representative case direction'}
          </motion.p>
          <motion.h3
            variants={{ rest: { color: 'oklch(0.97 0.005 80)' }, hover: { color: onReveal, y: -5 } }}
            transition={{ duration: 0.55, ease }}
            className="display mt-3 max-w-3xl text-[clamp(2.7rem,6vw,6.5rem)] leading-[0.86]"
          >
            {project.client}
          </motion.h3>
          <motion.div
            variants={{ rest: { color: 'oklch(0.97 0.005 80)' }, hover: { color: onReveal, y: -4 } }}
            transition={{ duration: 0.55, ease }}
            className="mt-6 max-w-xl"
          >
            <p className="display text-xl sm:text-2xl">{project.result}</p>
            <p className="mt-3 text-sm leading-relaxed opacity-75">{project.detail}</p>
          </motion.div>
        </div>
      </div>
    </motion.a>
  )
}
