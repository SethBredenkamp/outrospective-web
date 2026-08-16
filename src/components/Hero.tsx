"use client";

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function Hero() {
  const reduceMotion = useReducedMotion();
  const smokeVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    let animationFrame = 0;

    const smoothStep = (value: number) => value * value * (3 - 2 * value);

    const syncSmokeFade = () => {
      const video = smokeVideoRef.current;

      if (video && Number.isFinite(video.duration) && video.duration > 0) {
        const fadeIn = smoothStep(Math.min(1, video.currentTime / 1.4));
        const fadeOut = smoothStep(Math.min(1, (video.duration - video.currentTime) / 1.8));
        video.style.opacity = String(0.68 * Math.max(0, Math.min(fadeIn, fadeOut)));
      }

      animationFrame = requestAnimationFrame(syncSmokeFade);
    };

    animationFrame = requestAnimationFrame(syncSmokeFade);

    return () => cancelAnimationFrame(animationFrame);
  }, [reduceMotion]);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-24 pt-32 lg:px-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={smokeVideoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-0 motion-reduce:hidden"
        >
          <source src="/outrospective-hero.mp4" type="video/mp4" />
        </video>
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [0, 0.15, 0] }}
          transition={{ duration: 9, ease: "easeInOut", repeat: Infinity }}
          className="pointer-events-none absolute inset-0 origin-bottom-right scale-[0.8] sm:scale-[0.84] lg:scale-[0.82]"
        >
          <Image
            src="/hero-hand-restored.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 5, -3, 0],
                  y: [0, -10, -4, 0],
                  rotate: [0, 1.8, -1.1, 0],
                  scale: [1, 1.015, 0.995, 1],
                }
          }
          transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
          className="pointer-events-none absolute right-[-6%] top-[20%] h-[29%] w-[54%] origin-bottom sm:right-[2%] sm:top-[17%] sm:h-[31%] sm:w-[41%] md:right-[5%] md:w-[36%] lg:right-[8%] lg:top-[14%] lg:h-[34%] lg:w-[31%]"
        >
            <Image
              src="/hero-butterfly-animated.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 72vw"
              className="origin-right translate-y-[5%] scale-[1.5] object-contain sm:scale-[1.6] lg:scale-[1.7]"
            />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.105_0.01_45/0.82)_0%,oklch(0.105_0.01_45/0.72)_35%,oklch(0.105_0.01_45/0.1)_68%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.08_0.01_45/0.22),transparent_55%,oklch(0.105_0.01_45/0.92))]" />
        <div className="absolute inset-0 hero-grain opacity-25" />
      </div>

      <div className="mx-auto w-full max-w-[1400px]">
        <div className="max-w-[52rem]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-primary">
              <span className="h-px w-8 bg-primary" />
              A different point of view changes everything
            </span>
            <h1 className="display mt-7 text-[clamp(3.1rem,7.1vw,7rem)] uppercase leading-[0.89] text-foreground">
              Beyond Perspective.
              <br />
              Into Possibility.
            </h1>
            <p className="mt-8 max-w-[42rem] text-[0.98rem] leading-[1.75] text-foreground/76 lg:text-lg">
              Unlike &quot;introspective,&quot; which turns inward, outrospective is about looking
              outward — seeing the world through different lenses, walking in others&apos; shoes,
              and staying endlessly curious. It&apos;s about empathy, learning, and challenging our
              own perspectives.
            </p>

            <div className="mt-11 flex flex-wrap items-center gap-4">
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

      <a
        href="#work-intro"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-foreground/50 transition-colors hover:text-primary md:flex"
      >
        Scroll to discover
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
