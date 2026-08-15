import { ArrowRight, Mail } from "lucide-react";
import Image from 'next/image'

const footerColumns = [
  {
    heading: "Navigation",
    links: ["Home", "About", "Services", "Portfolio", "Insights"],
  },
  {
    heading: "Company",
    links: ["Studio", "Careers", "Press", "Contact"],
  },
];

const locations = [
  { city: "Cape Town", detail: "South Africa" },
  { city: "Scotland", detail: "United Kingdom" },
];

export function Footer() {
  return (
    <footer id="contact" className="px-6 pb-10 lg:px-10">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2.5rem] border border-border bg-[var(--surface)] pt-14">
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

        <div className="relative grid gap-12 px-8 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-14">
          <div>
            <h3 className="display text-2xl text-foreground">See what others don&apos;t</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-border bg-background/60 p-1.5 pl-5"
            >
              <Mail size={16} className="text-muted-foreground" />
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Your email address"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="ember-gradient flex size-9 shrink-0 items-center justify-center rounded-full text-primary-foreground transition-transform duration-300 hover:scale-105"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-8 flex gap-3">
              {["IG", "IN", "YT"].map((label) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={`Outrospective on ${label}`}
                  className="flex size-10 items-center justify-center rounded-full border border-border text-[0.65rem] font-semibold tracking-widest text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.heading} className="flex flex-col gap-3">
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-primary">
                {col.heading}
              </span>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#top"
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {link}
                </a>
              ))}
            </nav>
          ))}

          <div className="flex flex-col gap-4">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-primary">
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
              className="text-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              hello@outrospective.co
            </a>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden px-8 lg:px-14">
          <p className="display text-3d select-none text-[clamp(2.6rem,13.5vw,13rem)] leading-none">
            Outrospective
          </p>
        </div>

        <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-border px-8 py-6 text-xs text-muted-foreground lg:px-14">
          <p>© {new Date().getFullYear()} Outrospective. All rights reserved.</p>
          <p>Cape Town · Scotland</p>
        </div>
      </div>
    </footer>
  );
}
