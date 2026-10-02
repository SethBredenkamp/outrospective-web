import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { Reveal } from '@/components/Reveal'

export function PageClosingCta({
  kicker = 'An ambitious brief deserves an uncommon response',
  title = 'Design what’s next.',
}: {
  kicker?: string
  title?: string
}) {
  return (
    <section className="px-6 py-20 lg:px-10 lg:py-32">
      <Reveal>
        <div className="ember-gradient relative mx-auto max-w-[1400px] overflow-hidden rounded-[2.75rem] px-8 py-16 text-[var(--ink)] lg:px-16 lg:py-24">
          <div className="absolute -right-24 -top-24 size-80 rounded-full border-[3rem] border-black/10" />
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em]">{kicker}</p>
          <div className="mt-7 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="display max-w-4xl text-[clamp(3.2rem,8vw,8rem)] uppercase leading-[0.82]">{title}</h2>
            <Link
              href="/contact"
              className="group flex size-20 shrink-0 items-center justify-center rounded-full border border-black/35 transition-colors hover:bg-black hover:text-primary lg:size-28"
              aria-label="Start a conversation"
            >
              <ArrowUpRight className="transition-transform group-hover:rotate-45" size={34} strokeWidth={1.2} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
