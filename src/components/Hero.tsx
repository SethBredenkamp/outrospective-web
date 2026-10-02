"use client";

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const ease = [0.22, 1, 0.36, 1] as const
const goldDust = Array.from({ length: 16 }, (_, index) => ({
  delay: (index * 0.73) % 5.6,
  duration: 6.8 + (index % 5) * 0.9,
  left: 8 + ((index * 19) % 88),
  size: 1 + (index % 3) * 0.7,
  top: 12 + ((index * 29) % 78),
}))

export function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const smokeVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = smokeVideoRef.current;

    if (!video) return;

    if (reduceMotion) {
      video.pause();
      return;
    }

    let animationFrame = 0;
    let videoFrame = 0;
    let active = false;
    let inViewport = true;
    let loopPause = false;
    let restartTimer = 0;

    const smoothStep = (value: number) => value * value * (3 - 2 * value);

    const updateSmokeFade = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        const fadeIn = smoothStep(Math.min(1, video.currentTime / 1.4));
        const fadeOut = smoothStep(Math.min(1, (video.duration - video.currentTime) / 1.8));
        video.style.opacity = String(0.68 * Math.max(0, Math.min(fadeIn, fadeOut)));
      }
    };

    const cancelFrame = () => {
      if (videoFrame && 'cancelVideoFrameCallback' in video) {
        video.cancelVideoFrameCallback(videoFrame);
        videoFrame = 0;
      }
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
    };

    const syncSmokeFade = () => {
      if (!active) return;

      updateSmokeFade();

      if ('requestVideoFrameCallback' in video) {
        videoFrame = video.requestVideoFrameCallback(syncSmokeFade);
      } else {
        animationFrame = requestAnimationFrame(syncSmokeFade);
      }
    };

    const setActive = (nextActive: boolean) => {
      if (active === nextActive) return;

      active = nextActive;
      cancelFrame();

      if (active) {
        void video.play().catch(() => undefined);
        syncSmokeFade();
      } else {
        video.pause();
      }
    };

    const reconcilePlayback = () => {
      if (loopPause) return;
      setActive(inViewport && !document.hidden);
    };

    const pauseBetweenLoops = () => {
      loopPause = true;
      active = false;
      cancelFrame();
      video.pause();
      video.style.opacity = '0';

      restartTimer = window.setTimeout(() => {
        loopPause = false;
        video.currentTime = 0;
        reconcilePlayback();
      }, 2200);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewport = entry?.isIntersecting ?? false;
        reconcilePlayback();
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    document.addEventListener('visibilitychange', reconcilePlayback);
    video.addEventListener('loadedmetadata', updateSmokeFade);
    video.addEventListener('ended', pauseBetweenLoops);
    reconcilePlayback();

    return () => {
      active = false;
      cancelFrame();
      observer.disconnect();
      window.clearTimeout(restartTimer);
      document.removeEventListener('visibilitychange', reconcilePlayback);
      video.removeEventListener('loadedmetadata', updateSmokeFade);
      video.removeEventListener('ended', pauseBetweenLoops);
    };
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-24 pt-32 lg:px-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          ref={smokeVideoRef}
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-0 motion-reduce:hidden"
        >
          <source src="/outrospective-hero.mp4" type="video/mp4" />
        </video>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-[14%] right-0 w-[62%] overflow-hidden mix-blend-screen">
          {goldDust.map((particle, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={
                reduceMotion
                  ? { opacity: 0.13 }
                  : {
                      opacity: [0, 0.1, 0.34, 0],
                      scale: [0.7, 1, 0.8],
                      x: [0, index % 2 === 0 ? 9 : -7],
                      y: [18, -58],
                    }
              }
              transition={{
                delay: particle.delay,
                duration: particle.duration,
                ease: 'linear',
                repeat: reduceMotion ? 0 : Infinity,
              }}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: particle.size,
                height: particle.size,
                boxShadow: '0 0 0.45rem oklch(0.82 0.16 76 / 0.72)',
              }}
              className="absolute rounded-full bg-[oklch(0.91_0.14_86)]"
            />
          ))}
        </div>
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : { opacity: [0.24, 0.42, 0.24], scale: [0.94, 1.06, 0.94] }
          }
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          className="pointer-events-none absolute bottom-[5%] right-[-22%] h-[38%] w-[78%] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.2_48/0.3)_0%,oklch(0.62_0.18_42/0.12)_30%,transparent_68%)] blur-3xl sm:bottom-[4%] sm:right-[-8%] sm:h-[48%] sm:w-[58%] lg:bottom-[-6%] lg:right-[1%] lg:h-[62%] lg:w-[52%]"
        />
        <motion.div
          aria-hidden="true"
          animate={reduceMotion ? undefined : { y: [0, -4, 0], rotate: [0, 0.12, 0] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          className="pointer-events-none absolute bottom-auto -right-[18%] top-[74svh] h-[22svh] w-[92%] origin-bottom-right sm:-bottom-[1%] sm:-right-[12%] sm:top-auto sm:h-[36%] sm:w-[72%] lg:-bottom-[4%] lg:-right-[4%] lg:h-[50%] lg:w-[56%]"
        >
          <Image
            src="/hero-hand-open-palm-v3.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 56vw, (min-width: 640px) 72vw, 92vw"
            className="origin-bottom-right object-contain object-bottom-right opacity-[0.74] [filter:saturate(.84)_sepia(.18)_hue-rotate(338deg)_contrast(1.08)_brightness(.68)] sm:opacity-[0.8] lg:opacity-[0.84]"
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
          className="pointer-events-none absolute right-[20%] top-[73svh] h-[22%] w-[38%] origin-bottom sm:right-[25%] sm:top-[61%] sm:h-[23%] sm:w-[30%] md:right-[27%] md:top-[59%] md:w-[27%] lg:right-[31%] lg:top-[62%] lg:h-[26%] lg:w-[24%]"
        >
            <Image
              src="/hero-butterfly-animated.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 30vw, 38vw"
              className="origin-bottom translate-y-[5%] scale-[1.3] object-contain sm:scale-[1.38] lg:scale-[1.5]"
            />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.105_0.01_45/0.82)_0%,oklch(0.105_0.01_45/0.72)_35%,oklch(0.105_0.01_45/0.1)_68%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.08_0.01_45/0.22),transparent_55%,oklch(0.105_0.01_45/0.92))]" />
        <div className="absolute inset-0 hero-grain opacity-25" />
      </div>

      <div className="mx-auto w-full max-w-[1400px]">
        <div className="max-w-[52rem]">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.18, ease }}
              className="inline-flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-primary"
            >
              <span className="h-px w-8 bg-primary" />
              Strategy · Brand · Digital · Growth
            </motion.span>
            <h1 className="display mt-7 text-[clamp(3.1rem,7.1vw,7rem)] uppercase leading-[0.89] text-foreground">
              {['Beyond Perspective.', 'Into Possibility.'].map((line, index) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    initial={reduceMotion ? false : { y: '112%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: reduceMotion ? 0 : 1.05, delay: 0.22 + index * 0.12, ease }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.56, ease }}
              className="mt-8 max-w-[42rem] text-[0.98rem] leading-[1.75] text-foreground/76 lg:text-lg"
            >
              A senior strategy, brand and digital partner for leaders navigating consequential
              change. We turn commercial ambition into distinctive systems built to move people —
              and the business — forward.
            </motion.p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.72, ease }}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="ember-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
              >
                Start a Project
                <ArrowUpRight size={18} />
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-8 py-4 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary"
              >
                <Play size={16} className="text-primary" />
                Explore Our Work
              </a>
            </motion.div>
            <motion.p
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: 0.9 }}
              className="mt-7 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-foreground/42"
            >
              Founded by Jim Faulds · Cape Town / Scotland
            </motion.p>
          </div>
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
