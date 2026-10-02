'use client'

import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { LogoStrip } from '@/components/LogoStrip';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Insights } from '@/components/Insights';
import { CtaBand } from '@/components/CtaBand';
import { TransitionRail } from '@/components/TransitionRail';

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero />
      <TransitionRail />
      <LogoStrip />
      <Intro />
      <Portfolio />
      <Services />
      <About />
      <Insights />
      <CtaBand />
    </main>
  )
}
