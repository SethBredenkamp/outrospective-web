import { Award } from "lucide-react";
import Image from 'next/image'
import founder from '@/endpoints/seed/image-post1.webp'
import pioneers from '@/endpoints/seed/image-post3.webp'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-28 lg:px-10">
      <div className="pointer-events-none absolute -right-72 top-8 size-[40rem] rounded-full ember-gradient opacity-35" />
      <div className="mx-auto max-w-[1400px]">
        <h2 className="display mb-14 text-[clamp(2.2rem,5vw,4.8rem)] text-foreground">
          Where Perspective Becomes Progress.
        </h2>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div>
            <span className="display text-5xl text-foreground">Pioneers</span>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              The name was a rather happy accident — born on a stage race trail run with a good
              friend and co-collaborator, shaped by a favourite album, and deepened through a bit
              of research. Unlike &quot;introspective,&quot; which turns inward, outrospective is about
              looking outward — seeing the world through different lenses, walking in others&apos;
              shoes, and staying endlessly curious. It&apos;s about empathy, learning, and challenging
              our own perspectives. That ethos guides everything we do: collaborating openly,
              thinking beyond the obvious, and delivering work that truly works.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full border border-border bg-[var(--surface)] text-primary">
                <Award size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Award-winning perspective</p>
                <p className="text-xs text-muted-foreground">Recognised for work that moves brands and people forward.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative min-h-80 overflow-hidden rounded-3xl border border-border">
              <Image
                src={founder}
                alt="Abstract architectural form"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative mt-8 min-h-80 overflow-hidden rounded-3xl border border-border">
              <Image
                src={pioneers}
                alt="Abstract illuminated surface"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
