import type { Metadata } from 'next'

import { EditorialPageHero } from '@/components/EditorialPageHero'
import { PageClosingCta } from '@/components/PageClosingCta'
import { Reveal } from '@/components/Reveal'
import { services } from '@/data/site'

const outputs = [
  ['Campaign platforms', 'Editorial systems', 'Social-first toolkits', 'Film & motion'],
  ['Positioning', 'Identity systems', 'Verbal identity', 'Brand governance'],
  ['Experience strategy', 'UX & UI design', 'Prototyping', 'Design systems'],
  ['Audience architecture', 'Channel planning', 'Content operations', 'Measurement design'],
]

export const metadata: Metadata = {
  title: 'Services',
  description: 'Strategy, brand, campaigns, digital products and connected channel systems.',
}

export default function ServicesPage() {
  return (
    <main>
      <EditorialPageHero
        eyebrow="What we do"
        title={['Thinking that', 'moves things.']}
        intro="We bring strategy, creative and technology into the same room—then turn a sharper point of view into work designed to travel."
      />
      <section className="px-6 pb-24 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-[1400px] divide-y divide-border border-y border-border">
          {services.map((service, index) => (
            <Reveal key={service.title} x={index % 2 === 0 ? -56 : 56} y={18}>
              <article className="grid gap-8 py-12 lg:grid-cols-[8rem_1fr_1fr] lg:gap-14 lg:py-20">
                <p className="text-sm text-primary">{service.number}</p>
                <div>
                  <h2 className="display max-w-xl text-[clamp(2.6rem,5vw,5rem)] leading-[0.9]">{service.title}</h2>
                  <p className="display mt-6 text-xl text-primary">{service.tagline}</p>
                  <p className="mt-5 max-w-xl leading-[1.75] text-muted-foreground">{service.body}</p>
                </div>
                <ul className="self-end divide-y divide-border text-sm text-foreground/75">
                  {outputs[index].map((output) => <li key={output} className="py-4">{output}</li>)}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <PageClosingCta title="Build one connected advantage." />
    </main>
  )
}
