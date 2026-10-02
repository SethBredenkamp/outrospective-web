import Image from 'next/image'
import { CurtainReveal } from './CurtainReveal'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src="/outrospective-3d-reference.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/20 to-background" />
      <div className="relative mx-auto max-w-[1400px] px-6 text-right lg:px-10">
        <CurtainReveal tone="ink">
          <h2 className="display text-[clamp(3rem,10vw,9rem)] uppercase leading-[0.9] text-foreground">
            Look Beyond...
            <br />
            Build What&apos;s Next.
          </h2>
        </CurtainReveal>
      </div>
    </section>
  );
}
