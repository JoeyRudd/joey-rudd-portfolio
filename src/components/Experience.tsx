import { publicImagePath } from '../constants'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="experience"
      className={`section-reveal mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20 ${
        visible ? 'section-reveal--visible' : ''
      }`}
      aria-labelledby="experience-heading"
    >
      <SectionHeading id="experience-heading" num="03">
        Where I&apos;ve worked
      </SectionHeading>
      <ul className="mt-10 space-y-8">
        <li className="card-elevated p-6 sm:p-7">
          <p className="font-mono text-[length:var(--text-sm)] text-text-muted">Jan 2026 to Dec 2026</p>
          <div className="mt-3 flex flex-wrap items-start gap-3 sm:gap-4">
            <span className="inline-flex shrink-0 overflow-hidden rounded-md border border-card-border bg-surface-2 px-3 py-2">
              <img
                src={publicImagePath('Ontario_Science_Centre_Logo.png')}
                alt="Ontario Science Centre logo"
                className="h-7 w-auto max-w-[min(100%,10rem)] object-contain object-left sm:h-8"
                width={160}
                height={40}
              />
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-fg">Developer / Ops</h3>
              <p className="mt-0.5 text-fg/80">Ontario Science Centre · Toronto, ON</p>
            </div>
          </div>
          <ul className="mt-4 max-w-prose list-inside list-disc space-y-2 text-left text-sm leading-relaxed text-fg/75">
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
