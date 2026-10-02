export function LogoStrip() {
  const proofPoints = [
    { value: '25+', label: 'years of executive experience' },
    { value: '01', label: 'senior partner from brief to build' },
    { value: '04', label: 'connected disciplines, one point of view' },
    { value: '02', label: 'perspectives: Cape Town and Scotland' },
  ]

  return (
    <section className="border-b border-white/[0.06] bg-[var(--surface)]/42">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-16">
        <p className="text-[0.56rem] font-semibold uppercase tracking-[0.32em] text-foreground/38">Senior by design</p>
        <div className="mt-7 grid grid-cols-2 border-l border-t border-white/[0.08] lg:grid-cols-4">
          {proofPoints.map((item) => (
            <div key={item.label} className="min-h-36 border-b border-r border-white/[0.08] p-5 sm:p-7">
              <span className="display text-[clamp(2rem,4vw,4rem)] leading-none text-primary">{item.value}</span>
              <p className="mt-4 max-w-[12rem] text-xs leading-5 text-foreground/52">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
