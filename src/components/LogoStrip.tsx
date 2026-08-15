import { clientLogos } from "@/data/site";

export function LogoStrip() {
  return (
    <section className="border-y border-border bg-[var(--surface)]/40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-8 px-6 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {clientLogos.map((logo) => (
          <span
            key={logo}
            className="text-center text-xl font-semibold tracking-tight text-muted-foreground opacity-70 transition-opacity duration-300 hover:opacity-100 lg:text-2xl"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
