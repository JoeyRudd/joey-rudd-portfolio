import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

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
          Where I&apos;m headed
        </SectionHeading>
      </motion.div>
      <motion.article
        variants={fadeUp}
        className="card-elevated card-glow-border mt-8 space-y-4 p-6 sm:p-7"
      >
        <p className="text-base leading-relaxed text-fg/80">
          I&apos;m currently on a co-op placement at the Ontario Science Centre, where I&apos;m building
          interactive games and experiences that make STEM concepts engaging and accessible for young
          visitors.
        </p>
        <p className="text-base leading-relaxed text-fg/80">
          Looking ahead, I want to keep pushing into spaces where technology and education overlap.
          I&apos;m drawn to roles where I can build things people genuinely interact with, whether
          that&apos;s games, full-stack applications, or immersive web experiences. I&apos;m
          continuing to grow my skills in React, Three.js, and Godot, and I&apos;m always looking for
          projects that challenge me both technically and creatively.
        </p>
      </motion.article>
    </motion.section>
  )
}
