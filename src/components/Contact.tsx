import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

const EMAIL = 'emailjoeyrudd@gmail.com'

const links = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: 'LinkedIn', value: 'linkedin.com/in/joeyrudd', href: 'https://linkedin.com/in/joeyrudd', external: true },
  { label: 'GitHub', value: 'github.com/JoeyRudd', href: 'https://github.com/JoeyRudd', external: true },
] as const

export function Contact() {
  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:pb-28 sm:pt-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading id="contact-heading" num="07">
          Get in touch
        </SectionHeading>
      </motion.div>
      <motion.p variants={fadeUp} className="mt-6 max-w-prose text-base leading-relaxed text-fg/75">
        Open to co-op, internship and new-grad developer roles. The fastest way to reach me is email.
      </motion.p>
      <motion.ul variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="card-elevated block p-5 transition-colors duration-150 hover:border-accent"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-accent">{link.label}</p>
              <p className="mt-2 break-all text-sm text-fg/85">{link.value}</p>
            </a>
          </li>
        ))}
      </motion.ul>
      <div className="mt-12 border-t border-card-border pb-4 pt-8" aria-hidden />
    </motion.section>
  )
}
