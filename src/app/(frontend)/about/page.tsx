import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { EditorialPageHero } from '@/components/EditorialPageHero'
import { PageClosingCta } from '@/components/PageClosingCta'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About',
  description: 'Outrospective is an independent strategy, design and technology partner.',
}

export default function AboutPage() {
  return (
    <main>
      <EditorialPageHero
        eyebrow="Where perspective becomes progress"
        title={['Look outward.', 'Move forward.']}
        intro="Our name is a working principle: step beyond the familiar, see the world through different lenses, and challenge the perspective that created the problem."
      />
      <section className="px-6 py-16 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-primary">The principle</p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="space-y-8 text-[clamp(1.8rem,3.4vw,3.6rem)] leading-[1.12] text-foreground/90">
              <p>Perspective is not a moodboard. It is the difference between adding noise and creating momentum.</p>
              <p className="text-foreground/42">We combine executive-level commercial clarity, creative instinct and technical depth to find the opportunity hiding in plain sight.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="px-6 py-16 lg:px-10 lg:py-28">
        <Reveal>
          <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[2.75rem] bg-[var(--surface)] lg:grid-cols-2">
            <div className="relative min-h-[32rem] overflow-hidden">
              <Image src="/outrospective-3d-reference.png" alt="Outrospective dimensional typography and butterfly artwork" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="flex flex-col justify-center p-9 lg:p-16">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-primary">Founder perspective</p>
              <h2 className="display mt-6 text-[clamp(3rem,6vw,6rem)] leading-[0.86]">Jim Faulds</h2>
              <p className="mt-8 text-xl leading-relaxed text-foreground/80">A marketeer, agency builder and creative strategist with more than 25 years&apos; executive experience turning complex business challenges into integrated growth, brand and digital programmes.</p>
              <p className="mt-6 leading-[1.75] text-muted-foreground">Jim built RMG Connect in South Africa, led JWT Cape Town and went on to lead JWT South Africa. Outrospective brings that scale of experience into a more direct model: senior attention, straight talk and the right specialists around the table when the work demands it.</p>
              <p className="mt-6 leading-[1.75] text-muted-foreground">That model is visible in a five-year partnership with Pan African Resources: helping elevate its presence and communication across investor and ESG narrative, stakeholder engagement, multimedia and AI-enabled storytelling.</p>
              <Link href="/work#pan-african-resources" className="mt-8 inline-flex w-fit border-b border-primary pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Explore the partnership
              </Link>
              <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/[0.08]">
                {[
                  ['25+', 'Years in the work'],
                  ['JWT', 'Former SA CEO'],
                  ['MIT', 'Sloan executive learning'],
                  ['01', 'Senior accountable lead'],
                ].map(([value, label]) => (
                  <div key={label} className="bg-[var(--ink)] p-5">
                    <p className="display text-2xl text-primary">{value}</p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-foreground/42">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      <PageClosingCta title="See the opportunity others miss." />
    </main>
  )
}
