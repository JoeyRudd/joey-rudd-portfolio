import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

type Competency = {
  num: string
  title: string
  why: string
}

const competencies: Competency[] = [
  {
    num: '01',
    title: 'Collaboration & Leading with Influence',
    why: "Most of my CS work at York has been solo — coursework and personal projects where I was the only one in the room. At OSC, I work with science educators, writers, and designers who think completely differently than I do. That gap is actually where the good work happens. I want to go from someone who executes tasks to someone who helps a team make better decisions together.",
  },
  {
    num: '02',
    title: 'Effective Oral & Written Communication',
    why: "A developer who can't explain what they built — or why a trade-off matters — is only half useful. At OSC I'm regularly in meetings with science educators and museum staff who care about learning outcomes, not implementation details. Getting better at speaking their language has already made me more effective. I want to build that skill deliberately.",
  },
  {
    num: '03',
    title: 'Curiosity & Imagination',
    why: "Technical skills got me the job. Creative thinking will make the work matter. The best products I want to build aren't just accurate — they're engaging, fun, and something people want to come back to. I want to contribute ideas worth building, not just execute the ones someone else had.",
  },
]

export function Goals() {
  return (
    <motion.section
      id="goals"
      className="mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20"
      aria-labelledby="goals-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading id="goals-heading" num="05">
          Goals & vision
        </SectionHeading>
      </motion.div>

      <motion.p variants={fadeUp} className="mt-4 max-w-prose text-base leading-relaxed text-fg/75">
        The goal has always been the same: build things that actually help people. Not software that
        looks impressive from the outside — software that solves something real for whoever&apos;s
        on the other end. These are the three areas I&apos;m actively working on to get there.
      </motion.p>

      <div className="mt-10 space-y-5">
        {competencies.map((comp, i) => (
          <motion.article
            key={comp.title}
            variants={fadeUp}
            transition={{ delay: i * 0.08 }}
            className="card-elevated card-glow-border p-6 sm:p-7"
          >
            {/* Header */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 shrink-0 font-mono text-xs text-accent/60">{comp.num}</span>
              <h3 className="text-base font-semibold text-fg">{comp.title}</h3>
            </div>

            {/* Why */}
            <p className="mt-3 text-sm leading-relaxed text-fg/70 italic">{comp.why}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
