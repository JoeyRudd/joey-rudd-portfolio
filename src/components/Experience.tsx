import { motion } from 'framer-motion'
import { publicImagePath } from '../constants'
import { fadeUp, slideLeft, staggerContainer } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20"
      aria-labelledby="experience-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading id="experience-heading" num="03">
          Where I&apos;ve worked
        </SectionHeading>
      </motion.div>

      {/* Timeline wrapper */}
      <div className="mt-10 flex gap-6">
        {/* Left column: line + node */}
        <div className="relative flex flex-col items-center pt-1">
          {/* Pulsing node */}
          <div className="timeline-node" aria-hidden />
          {/* Animated line drawing down */}
          <motion.div
            className="mt-2 w-px flex-1"
            style={{
              background: 'linear-gradient(to bottom, var(--color-accent), transparent)',
            }}
            variants={{
              hidden: { scaleY: 0, originY: 0 },
              visible: {
                scaleY: 1,
                originY: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
              },
            }}
          />
        </div>

        {/* Right column: card */}
        <motion.div variants={slideLeft} className="min-w-0 flex-1 pb-4">
          <div className="card-elevated card-glow-border relative overflow-hidden p-6 sm:p-7">
            <p className="font-mono text-[length:var(--text-sm)] text-text-muted">
              Jan 2026 to Dec 2026
            </p>
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
                Developed interactive STEM games in Godot, including core gameplay loops, UI flows,
                and data-driven content that supports engaging learning through play.
              </li>
              <li>
                Built browser-based games with React using component-driven architecture, state
                management, and responsive layouts for smooth, accessible experiences across devices.
              </li>
              <li>
                Created real-time 3D interactives with Three.js, tuning scene structure, materials,
                and input handling so visitors can explore scientific concepts intuitively in the
                browser.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
