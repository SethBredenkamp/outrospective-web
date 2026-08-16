import { clientLogos } from "@/data/site";

export function LogoStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-[var(--surface)]/32">
      <div className="mx-auto max-w-[1400px] px-6 py-9 lg:px-10">
        <p className="text-center text-[0.56rem] font-semibold uppercase tracking-[0.32em] text-foreground/35">Selected collaborations</p>
        <div className="mt-7 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {clientLogos.map((logo) => (
            <span
              key={logo}
              className="text-center text-lg font-semibold tracking-[-0.035em] text-foreground/42 grayscale transition-all duration-300 hover:text-foreground/82 lg:text-xl"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
