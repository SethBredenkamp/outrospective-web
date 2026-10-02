import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

import { EditorialPageHero } from '@/components/EditorialPageHero'
import { PageClosingCta } from '@/components/PageClosingCta'
import { Reveal } from '@/components/Reveal'
import { insights } from '@/data/site'

const fieldNotes = [
  'A couple of days with the team at Barberton Mines',
  'Scottish-born, proudly South African',
  'People who inspire: responsible engineering in action',
]

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Perspectives on brands, design, technology, culture and connected growth.',
}

export default function InsightsPage() {
  return (
    <main>
      <EditorialPageHero
        eyebrow="Field notes"
        title={['Ideas worth', 'looking into.']}
        intro="Observations from the work, the world around it, and the people building a more interesting future."
      />
      <section className="px-6 pb-28 lg:px-10 lg:pb-40">
        <div className="mx-auto grid max-w-[1400px] gap-7 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <Reveal key={insight.title} delay={index * 0.05} x={index % 2 === 0 ? -46 : 46} y={16}>
              <article className="group overflow-hidden rounded-[2rem] border border-border bg-[var(--surface)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={`${insight.title} article cover`}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-7">
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-primary">{insight.category}</p>
                  <h2 className="display mt-5 text-2xl leading-tight">{insight.title}</h2>
                  <ArrowUpRight className="mt-8 transition-transform group-hover:rotate-45" strokeWidth={1.2} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-20 max-w-[1400px] border-t border-border">
          {fieldNotes.map((title, index) => (
            <Reveal key={title}>
              <article className="grid gap-5 border-b border-border py-9 sm:grid-cols-[5rem_1fr_auto] sm:items-center">
                <span className="text-xs text-primary">0{index + 4}</span>
                <h3 className="display text-2xl sm:text-3xl">{title}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Draft story</span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <PageClosingCta title="Bring a different lens." />
    </main>
  )
}
