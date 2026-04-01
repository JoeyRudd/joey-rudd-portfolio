import { motion } from 'framer-motion'
import imgAdventuresOfCroak from '../assets/projects/project-adventures-of-croak.png'
import { useTilt } from '../hooks/useTilt'
import { fadeUp, staggerContainer } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

const imageClass =
  'aspect-[16/10] w-full rounded-md border border-card-border object-cover object-top'

export function Coursework() {
  const { ref, spotlightRef, onMouseEnter, onMouseMove, onMouseLeave } = useTilt({ strength: 8 })

  return (
    <motion.section
      id="coursework"
      className="mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20"
      aria-labelledby="coursework-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading id="coursework-heading" num="06">
          What I&apos;m exploring in school
        </SectionHeading>
      </motion.div>
      <motion.p
        variants={fadeUp}
        className="mt-4 max-w-prose text-base leading-relaxed text-fg/75"
      >
        Below is a course project I&apos;m proud to show publicly—built for my game development class
        at York, where we focused on design, feel, and shipping something playable.
      </motion.p>
      <motion.article
        variants={fadeUp}
        className="card-elevated card-glow-border relative mt-8 overflow-hidden p-6 sm:p-7"
        ref={ref as React.RefObject<HTMLElement & HTMLDivElement>}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {/* Spotlight glow */}
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-200"
          aria-hidden
        />
        <div className="mb-6">
          <img
            src={imgAdventuresOfCroak}
            alt="Adventures of Croak: pixel-art platformer gameplay"
            className={imageClass}
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="font-mono text-[length:var(--text-sm)] text-text-muted">
          course project · game development
        </p>
        <h3 className="mt-2 text-xl font-semibold text-fg">Adventures of Croak</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg/75">
          I developed this 2D platformer for my game development course at York—iterating on
          movement, level feel, and polish until it was worth putting on itch.io.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {['Godot Engine', 'GDScript'].map((tech) => (
            <li key={tech} className="tag-mono">
              {tech}
            </li>
          ))}
        </ul>
        <ul className="mt-5 list-inside list-disc space-y-2 text-left text-sm leading-relaxed text-fg/75">
          <li>
            State-based character controller (idle, run, jump, wall-slide) tuned for responsive
            platforming.
          </li>
          <li>Modular scenes for UI, particles, and gameplay so features stay maintainable.</li>
          <li>
            Released on itch.io with collectibles and grade-based scoring—my course deliverable
            turned into something strangers can actually play.
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://github.com/JoeyRudd/adventures-of-croak"
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://joeyrudd.itch.io/adventures-of-croak"
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            Play on itch.io
          </a>
        </div>
      </motion.article>
    </motion.section>
  )
}
