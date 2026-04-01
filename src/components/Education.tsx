import { motion } from 'framer-motion'
import { publicImagePath } from '../constants'
import { fadeUp, staggerContainer, staggerFast } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

const courses = [
  'Data Structures',
  'Computer Architecture',
  'Software Tools',
  'Advanced OOP',
  'Computational Theory',
  'Software Design',
  'Database Systems',
  'Algorithm Design',
]

const skillGroups = [
  { label: 'Languages', items: ['Java', 'Python', 'JavaScript', 'Go', 'C', 'SQL', 'HTML/CSS'] },
  { label: 'Frameworks & libraries', items: ['FastAPI', 'Vue.js', 'Spring', 'JUnit', 'Tailwind CSS', 'SQLite'] },
  { label: 'Tools', items: ['Git', 'GitHub Actions', 'CI/CD', 'Unix/Linux', 'Docker', 'Netlify', 'Railway'] },
]

export function Education() {
  return (
    <motion.section
      id="education"
      className="mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20"
      aria-labelledby="education-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6"
      >
        <SectionHeading id="education-heading" num="02" className="min-w-0 flex-1">
          York University
        </SectionHeading>
        <span className="inline-flex w-fit shrink-0 overflow-hidden rounded-md border border-card-border bg-surface-2 px-3 py-2">
          <img
            src={publicImagePath('Logo_York_University.png')}
            alt="York University logo"
            className="h-8 w-auto max-w-[min(100%,11rem)] object-contain object-left sm:h-9"
            width={180}
            height={44}
          />
        </span>
      </motion.div>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-fg/85">
        <motion.div variants={fadeUp}>
          <p className="font-medium text-fg">Honours Bachelor of Computer Science</p>
          <p className="mt-1 text-fg/75">York University, Lassonde School of Engineering</p>
          <p className="mt-1 text-fg/75">Toronto, ON. Expected graduation May 2027</p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="font-mono text-[length:var(--text-sm)] text-text-muted">Relevant coursework</p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-left">
            {courses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="font-mono text-[length:var(--text-sm)] text-text-muted">Skills</p>
          <div className="mt-3 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 text-sm font-medium text-fg/85">{group.label}</p>
                <motion.ul
                  className="flex flex-wrap gap-2"
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {group.items.map((item) => (
                    <motion.li
                      key={item}
                      variants={fadeUp}
                      whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                      className="tag-mono cursor-default"
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
