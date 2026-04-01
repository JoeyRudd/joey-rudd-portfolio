import { motion } from 'framer-motion'
import imgHypertrofit from '../assets/projects/project-hypertrofit.png'
import { useTilt } from '../hooks/useTilt'
import { fadeUp, staggerContainer } from '../utils/motion'
import { SectionHeading } from './SectionHeading'

type ProjectLink = {
  label: string
  href: string
  external?: boolean
}

type ProjectVisual =
  | { type: 'image'; src: string; alt: string }
  | { type: 'terminal' }

type Project = {
  title: string
  subtitle?: string
  tech: string[]
  highlights: string[]
  links: ProjectLink[]
  visual: ProjectVisual
}

const projects: Project[] = [
  {
    title: 'Hypertrofit',
    subtitle: 'AI fitness & nutrition coach',
    tech: ['Python', 'FastAPI', 'Vue.js', 'Docker', 'OpenRouter'],
    highlights: [
      'Full-stack fitness coach: Vue 3 + Composition API on the front, async FastAPI on the back, wired for real chat flows.',
      'Grounds answers with a RAG pipeline over a markdown knowledge base (TF-IDF retrieval) so responses stay tied to real content.',
      'Backed by automated tests and a GitHub Actions workflow so changes ship with confidence.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/JoeyRudd/ai-fitness-coach', external: true }],
    visual: {
      type: 'image',
      src: imgHypertrofit,
      alt: 'Hypertrofit app: dark-themed fitness coach chat interface',
    },
  },
  {
    title: 'Go CLI Task Manager',
    subtitle: 'No GUI, no problem',
    tech: ['Go', 'Cobra', 'SQLite'],
    highlights: [
      'Terminal todo app with CRUD, SQLite persistence, and a tidy split between commands and internal logic.',
      'Cobra subcommands for add, list, and complete, with filters for pending vs completed tasks.',
      'Single binary you can build for macOS, Linux, or Windows.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/JoeyRudd/CLI-ToDo-App', external: true }],
    visual: { type: 'terminal' },
  },
]

const imageClass =
  'aspect-[16/10] w-full rounded-md border border-card-border object-cover object-top'

function CliTerminalVisual() {
  const tools = ['Go', 'Cobra', 'SQLite'] as const

  return (
    <div className="overflow-hidden rounded-md border border-card-border bg-surface">
      <div className="flex items-center border-b border-card-border px-3 py-2.5">
        <span className="font-mono text-[11px] text-fg/45">todo — zsh</span>
      </div>
      <div className="space-y-1 px-4 py-4 font-mono text-[11px] leading-relaxed text-fg/80 sm:text-xs">
        <p>
          <span className="text-fg/60">$</span> ./todo add &quot;Finish the level design pass&quot;
        </p>
        <p className="text-fg/55">→ Task added · id 12</p>
        <p className="pt-3">
          <span className="text-fg/60">$</span> ./todo list --pending
        </p>
        <p className="text-fg/70">
          12 · Finish the level design pass <span className="text-fg/45">· pending</span>
        </p>
        <p className="text-fg/45">Press ↑ for history — tab completes flags</p>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-card-border px-4 py-3" aria-label="Tools used">
        {tools.map((name) => (
          <span key={name} className="tag-mono">
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectVisualBlock({ visual }: { visual: ProjectVisual }) {
  if (visual.type === 'terminal') {
    return <CliTerminalVisual />
  }
  return (
    <img
      src={visual.src}
      alt={visual.alt}
      className={imageClass}
      loading="lazy"
      decoding="async"
    />
  )
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { ref, spotlightRef, onMouseEnter, onMouseMove, onMouseLeave } = useTilt({ strength: 10 })

  return (
    <motion.article
      key={project.title}
      variants={fadeUp}
      transition={{ delay }}
      className="card-elevated card-glow-border relative overflow-hidden p-6 sm:p-7"
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
        <ProjectVisualBlock visual={project.visual} />
      </div>
      <h3 className="text-xl font-semibold text-fg">{project.title}</h3>
      {project.subtitle ? (
        <p className="mt-1 text-sm text-fg/55">{project.subtitle}</p>
      ) : null}
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li key={tech} className="tag-mono">
            {tech}
          </li>
        ))}
      </ul>
      <ul className="mt-5 list-inside list-disc space-y-2 text-left text-sm leading-relaxed text-fg/75">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="btn-secondary"
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20"
      aria-labelledby="projects-heading"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading id="projects-heading" num="04">
          Things I&apos;ve built
        </SectionHeading>
      </motion.div>
      <div className="mt-10 grid gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 0.1} />
        ))}
      </div>
    </motion.section>
  )
}
