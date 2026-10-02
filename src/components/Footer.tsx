import { ArrowRight, Mail } from "lucide-react";
import Image from 'next/image'
import Link from 'next/link'

import { BrandMark } from '@/components/BrandMark'

const footerColumns = [
  {
    heading: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/work" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Capabilities", href: "/services" },
      { label: "Selected Work", href: "/work" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const locations = [
  { city: "Cape Town", detail: "South Africa" },
  { city: "Scotland", detail: "United Kingdom" },
];

export function Footer() {
  return (
    <footer id="contact" className="px-3 pb-3 sm:px-6 sm:pb-8 lg:px-10 lg:pb-10">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[1.75rem] border border-border bg-[var(--surface)] pt-10 sm:rounded-[2.5rem] sm:pt-14">
        <div className="pointer-events-none absolute -right-6 bottom-28 hidden h-[20rem] w-[20rem] rotate-[8deg] opacity-80 lg:block">
          <Image
            src="/butterfly-flight.png"
            alt=""
            aria-hidden="true"
            fill
            sizes="20rem"
            className="object-contain"
          />
        </div>

        <div className="relative grid grid-cols-2 gap-x-7 gap-y-12 px-6 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-14">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Outrospective home" className="mb-7 block w-48 text-foreground sm:w-56">
              <BrandMark className="h-auto w-full" />
            </Link>
            <h3 className="display text-2xl text-foreground">See what others don&apos;t</h3>
            <Link
              href="/contact"
              className="group mt-6 flex w-full max-w-sm items-center justify-between gap-4 rounded-full border border-border bg-background/60 py-1.5 pl-4 pr-1.5 transition-colors duration-300 hover:border-primary sm:pl-5"
            >
              <Mail size={16} className="text-muted-foreground" />
              <span className="mr-auto text-sm text-foreground">Start a conversation</span>
              <span className="ember-gradient flex size-9 shrink-0 items-center justify-center rounded-full text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.heading} className="flex min-w-0 flex-col gap-3">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-primary">
                {col.heading}
              </span>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="py-0.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}

          <div className="col-span-2 grid grid-cols-2 gap-4 border-t border-border pt-8 lg:col-span-1 lg:flex lg:border-0 lg:pt-0">
            <span className="col-span-2 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-primary">
              Studios
            </span>
            {locations.map((loc) => (
              <div key={loc.city}>
                <p className="text-sm font-semibold text-foreground">{loc.city}</p>
                <p className="text-xs text-muted-foreground">{loc.detail}</p>
              </div>
            ))}
            <a
              href="mailto:hello@outrospective.co"
              className="col-span-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              hello@outrospective.co
            </a>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden px-6 sm:mt-16 sm:px-8 lg:px-14">
          <p className="display text-3d select-none whitespace-nowrap text-[13.2vw] leading-none lg:text-[clamp(2.6rem,13.5vw,13rem)]">
            Outrospective
          </p>
        </div>

        <div className="relative flex flex-col items-start justify-between gap-2 border-t border-border px-6 py-5 text-[0.68rem] text-muted-foreground sm:flex-row sm:items-center sm:px-8 sm:text-xs lg:px-14">
          <p>© {new Date().getFullYear()} Outrospective. All rights reserved.</p>
          <p>Cape Town · Scotland</p>
        </div>
      </div>
    </footer>
  );
}
