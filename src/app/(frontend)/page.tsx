'use client'

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { LogoStrip } from '@/components/LogoStrip';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Portfolio } from '@/components/Portfolio';
import { Insights } from '@/components/Insights';
import { CtaBand } from '@/components/CtaBand';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="outrospective-site min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <LogoStrip />
      <Intro />
      <Portfolio />
      <Services />
      <About />
      <Insights />
      <CtaBand />
      <Footer />
    </main>
  )
}
