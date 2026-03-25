export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-[860px] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="experience-heading"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-fg/50">Experience</p>
      <h2
        id="experience-heading"
        className="mt-2 text-3xl font-medium tracking-tight text-fg sm:text-4xl"
      >
        Where I&apos;ve worked
      </h2>
      <ul className="mt-10 space-y-10">
        <li className="border-l border-card-border pl-6">
          <p className="text-sm text-fg/55">Jan 2026 to Dec 2026</p>
          <div className="mt-1 flex flex-wrap items-start gap-3 sm:gap-4">
            <span className="mt-0.5 inline-flex shrink-0 overflow-hidden rounded-lg border border-card-border bg-fg px-3 py-2">
              <img
                src="/images/Ontario_Science_Centre_Logo.svg.png"
                alt="Ontario Science Centre logo"
                className="h-7 w-auto max-w-[min(100%,10rem)] object-contain object-left sm:h-8"
                width={160}
                height={40}
              />
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-medium text-fg">Developer / Ops</h3>
              <p className="mt-0.5 text-fg/80">Ontario Science Centre · Toronto, ON</p>
            </div>
          </div>
          <ul className="mt-3 max-w-prose list-inside list-disc space-y-2 text-sm leading-relaxed text-fg/75">
            <li>
              Developed interactive STEM games in Godot, including core gameplay loops, UI flows, and
              data-driven content that supports engaging learning through play.
            </li>
            <li>
              Built browser-based games with React using component-driven architecture, state
              management, and responsive layouts for smooth, accessible experiences across devices.
            </li>
            <li>
              Created real-time 3D interactives with Three.js, tuning scene structure, materials, and
              input handling so visitors can explore scientific concepts intuitively in the browser.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
