import { motion } from 'framer-motion'
import { ArrowUpRight, Play } from "lucide-react";
import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-32 lg:px-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/hero-butterfly.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.11_0.01_45)_0%,oklch(0.11_0.01_45/0.96)_36%,oklch(0.11_0.01_45/0.15)_72%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />
      </div>

      <div className="mx-auto w-full max-w-[1400px]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-primary">
              A different point of view changes everything
            </span>
            <h1 className="display mt-6 text-[clamp(3rem,7.3vw,7.2rem)] uppercase leading-[0.92] text-foreground">
              Beyond Perspective.
              <br />
              Into Possibility.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/80 lg:text-lg">
              Unlike &quot;introspective,&quot; which turns inward, outrospective is about looking
              outward — seeing the world through different lenses, walking in others&apos; shoes,
              and staying endlessly curious. It&apos;s about empathy, learning, and challenging our
              own perspectives.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="ember-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-8 py-4 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary"
              >
                <Play size={16} className="text-primary" />
                Explore Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
