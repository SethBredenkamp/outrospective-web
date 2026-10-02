'use client';

import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { Menu, X } from "lucide-react";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { BrandMark } from '@/components/BrandMark'
import { navLinks } from '@/data/site'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setHydrated(true)
    const update = () => setScrolled(window.scrollY > 28)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header data-hydrated={hydrated} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10 lg:pt-6">
      <motion.div
        animate={{
          backgroundColor: scrolled ? 'oklch(0.95 0.008 75 / 0.94)' : 'oklch(0.09 0.01 45 / 0.64)',
          color: scrolled ? 'oklch(0.13 0.015 40)' : 'oklch(0.965 0.012 75)',
          paddingTop: scrolled ? '0.65rem' : '0.875rem',
          paddingBottom: scrolled ? '0.65rem' : '0.875rem',
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 px-5 shadow-[0_1rem_4rem_oklch(0_0_0/0.18)] backdrop-blur-2xl sm:px-6"
      >
        <Link href="/" aria-label="Outrospective home" className="block w-[10.75rem] sm:w-[12.5rem]">
          <BrandMark className="h-auto w-full" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={`relative text-xs font-medium transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-current after:transition-[width] ${pathname === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="ember-gradient rounded-full px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-[transform,filter] hover:scale-[1.03] hover:brightness-110"
          >
            Contact Us
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-current md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -16, scale: 0.98 }}
        aria-hidden={!mobileMenuOpen}
        className={`absolute left-4 right-4 top-20 rounded-[1.75rem] border border-white/10 bg-[oklch(0.09_0.01_45/0.96)] p-8 shadow-2xl backdrop-blur-2xl md:hidden ${mobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'}`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              tabIndex={mobileMenuOpen ? 0 : -1}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg text-foreground/75 hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            tabIndex={mobileMenuOpen ? 0 : -1}
            onClick={() => setMobileMenuOpen(false)}
            className="ember-gradient mt-4 rounded-full py-3 text-sm font-semibold text-primary-foreground"
          >
            Contact Us
          </Link>
        </nav>
      </motion.div>
    </header>
  );
}
