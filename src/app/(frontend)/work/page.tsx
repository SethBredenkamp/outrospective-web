import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { EditorialPageHero } from '@/components/EditorialPageHero'
import { PageClosingCta } from '@/components/PageClosingCta'
import { ProjectVisual } from '@/components/ProjectVisual'
import { Reveal } from '@/components/Reveal'
import { projects } from '@/data/site'

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'Brand, campaign, product and connected-growth work shaped by Outrospective.',
}

export default function WorkPage() {
  return (
    <main>
      <EditorialPageHero
        eyebrow="Selected work"
        title={['Proof, not', 'promises.']}
        intro="The work is where perspective becomes tangible: a clearer position, a more useful experience, a story people choose to carry forward."
      />
      <section className="px-6 pb-24 lg:px-10 lg:pb-36">
        <div className="mx-auto max-w-[1400px] space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.client} x={index % 2 === 0 ? -64 : 64} y={20}>
              <article id={project.slug} className="group grid scroll-mt-32 overflow-hidden rounded-[2.5rem] border border-border bg-[var(--surface)] lg:grid-cols-[0.9fr_1.1fr]">
                <div className="flex min-h-[25rem] flex-col justify-between p-8 lg:p-14">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-primary">
                    {String(index + 1).padStart(2, '0')} — {project.sector}
                  </p>
                  <div>
                    <h2 className="display text-[clamp(3rem,7vw,7rem)] leading-[0.86]">{project.client}</h2>
                    <p className="display mt-7 text-2xl text-foreground/90">{project.result}</p>
                    <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{project.detail}</p>
                    {project.scope && (
                      <ul className="mt-7 flex flex-wrap gap-2">
                        {project.scope.map((item) => (
                          <li key={item} className="rounded-full border border-border px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-foreground/62">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {project.clientUrl ? (
                    <Link href={project.clientUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      Visit client <ArrowUpRight className="transition-transform duration-500 group-hover:rotate-45" size={24} strokeWidth={1.2} />
                    </Link>
                  ) : (
                    <ArrowUpRight className="mt-10 transition-transform duration-500 group-hover:rotate-45" size={38} strokeWidth={1.2} />
                  )}
                </div>
                <div className="relative min-h-[24rem] overflow-hidden lg:min-h-[44rem]">
                  <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                    <ProjectVisual project={project} />
                  </div>
                  <div className="absolute inset-0 bg-primary/0 mix-blend-color transition-colors duration-700 group-hover:bg-primary/45" />
                </div>
              </article>
            </Reveal>
          ))}
          <p className="pt-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">Pan African Resources is a documented client partnership. Representative concepts remain clearly identified pending approved case-study material.</p>
        </div>
      </section>
      <PageClosingCta title="Make the next one impossible to ignore." />
    </main>
  )
}
