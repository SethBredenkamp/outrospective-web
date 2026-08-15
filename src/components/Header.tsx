'use client';

import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from "lucide-react";
import { navLinks } from '@/data/site'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 lg:px-10">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between rounded-full border border-border bg-black/40 px-6 py-4 backdrop-blur-xl">
        <a href="#top" className="display text-lg tracking-wider text-foreground">
          OUTROSPECTIVE
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="ember-gradient rounded-full px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
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
            className="absolute top-24 left-6 right-6 rounded-3xl border border-border bg-black/90 p-8 backdrop-blur-2xl md:hidden"
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
