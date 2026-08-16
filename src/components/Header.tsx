'use client';

import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from "lucide-react";
import { navLinks } from '@/data/site'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10 lg:pt-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-[oklch(0.09_0.01_45/0.66)] px-5 py-3.5 shadow-[0_1rem_4rem_oklch(0_0_0/0.18)] backdrop-blur-2xl sm:px-6">
        <a href="#top" className="display flex items-center gap-2 text-base tracking-[-0.04em] text-foreground">
          OUTROSPECTIVE<span className="size-1.5 rounded-full bg-primary" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-foreground/62 transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="ember-gradient rounded-full px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-[transform,filter] hover:scale-[1.03] hover:brightness-110"
          >
            Contact Us
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-4 right-4 top-20 rounded-[1.75rem] border border-white/10 bg-[oklch(0.09_0.01_45/0.94)] p-8 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="ember-gradient mt-4 rounded-full py-3 text-sm font-semibold text-primary-foreground"
              >
                Contact Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
