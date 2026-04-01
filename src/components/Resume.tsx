import { motion } from 'framer-motion'
import { RESUME_PATH } from '../constants'
import { fadeUp, staggerContainer } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

export function Resume() {
  return (
    <motion.section
      id="resume"
      className="mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:pb-28 sm:pt-24"
      aria-labelledby="resume-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading id="resume-heading" num="07">
          CV
        </SectionHeading>
      </motion.div>
      <motion.p variants={fadeUp} className="mt-6 max-w-prose text-base leading-relaxed text-fg/75">
        Download a copy or preview below.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-6">
        <a href={RESUME_PATH} download className="btn-secondary">
          Download resume
        </a>
      </motion.div>
      <motion.div
        variants={fadeUp}
        className="mt-10 overflow-hidden rounded-md border border-card-border"
      >
        <iframe
          title="Resume PDF preview"
          src={`${RESUME_PATH}#toolbar=0`}
          className="h-[min(70vh,720px)] w-full bg-surface-2"
        />
      </motion.div>
      <div className="mt-12 border-t border-card-border pb-4 pt-8" aria-hidden />
    </motion.section>
  )
}
