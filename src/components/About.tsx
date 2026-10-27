import { motion } from 'framer-motion'
import whyMeVideo from '../assets/WhyMe.mp4'
import { fadeUp, staggerContainer } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

const introCards = [
  {
    label: 'My program',
    body: 'Honours Bachelor of Computer Science (Co-op) at York University’s Lassonde School of Engineering, expected graduation May 2028.',
  },
  {
    label: 'What I love about it',
    body: 'The mix of problem solving and creativity. My courses have pushed me to think through hard problems logically, and group projects have given me the chance to build genuinely cool things with other students.',
  },
  {
    label: 'Most rewarding co-op moment',
    body: 'Launching our interactive exhibits at Harbourfront Centre. Watching thousands of visitors use something our team built, then digging into the usage metrics afterwards, made the work feel real in a way no assignment ever has.',
  },
  {
    label: 'Career goal',
    body: 'To grow as a software developer after graduation. I’m still exploring which field I want to land in, and I’m using co-op and side projects to try different kinds of work before I commit.',
  },
]

export function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20"
      aria-labelledby="about-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading id="about-heading" num="01">
          About me
        </SectionHeading>
      </motion.div>

      <div className="mt-8 space-y-10">
        {/* About Me Video — featured in introduction as required */}
        <motion.div variants={fadeUp} className="space-y-3">
          <p className="font-mono text-sm text-text-muted">About Me — in my own words</p>
          <div className="overflow-hidden rounded-lg border border-card-border bg-surface">
            <video
              src={whyMeVideo}
              controls
              preload="metadata"
              className="w-full"
              aria-label="Joey Rudd — About Me video"
            />
          </div>
        </motion.div>

        {/* Intro */}
        <motion.p variants={fadeUp} className="text-base leading-relaxed text-fg/85">
          I&apos;m a Computer Science student at York University&apos;s Lassonde School of
          Engineering, currently working as a Developer at the Ontario Science Centre building
          interactive STEM games and digital experiences. I value integrity — following through on
          commitments and producing work I can stand behind. Curiosity keeps me moving forward, and
          a grounded upbringing in Burlington shaped how I treat people and how I approach
          everything I take on.
        </motion.p>

        {/* At a glance — program, why I love it, co-op highlight, career goal */}
        <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
          {introCards.map((card) => (
            <div key={card.label} className="card-elevated p-5">
              <p className="font-mono text-xs uppercase tracking-wide text-accent">{card.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg/80">{card.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
