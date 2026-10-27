import { motion } from 'framer-motion'
import imgAdventuresOfCroak from '../assets/projects/project-adventures-of-croak.png'
import imgExtremaBuddies from '../assets/projects/project-extrema-buddies.webp'
import imgScienceBonds from '../assets/projects/project-science-bonds.webp'
import imgHumanBodyAtlas from '../assets/projects/project-human-body-atlas.webp'
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
  | { type: 'flow'; caption: string; steps: string[] }

type Project = {
  title: string
  subtitle?: string
  tag?: string
  origin: string
  tech: string[]
  highlights: string[]
  role: string
  outcomes: string[]
  links: ProjectLink[]
  visual: ProjectVisual
}

const projects: Project[] = [
  {
    title: 'Extrema Buddies',
    subtitle: 'Creature-care game · Ontario Science Centre',
    tag: 'co-op project · OSC',
    origin:
      'A Tamagotchi-style game where you adopt and care for an extremophile — a Pompeii worm or a brine shrimp — and learn how real organisms survive extreme environments. It became the biggest codebase I have ever owned, so I spent as much time on architecture, tests and documentation as on gameplay.',
    tech: ['Godot 4.7', 'GDScript', 'GUT', 'Web export', 'EN / FR localization'],
    highlights: [
      'Creature-centric architecture: each species owns its stats, decay, cooldowns and save data, with a thin session orchestrator on top.',
      'Physics-based salinity minigame with pooled salt particles that switch to MultiMesh rendering under load, plus a procedurally generated phototaxis maze.',
      'Persistent saves across 3 slots with offline stat decay applied on load.',
      'Fully bilingual (English and French) from one branch, with French-specific font and layout remaps so longer copy still fits.',
    ],
    role: 'Lead developer. I wrote the large majority of the code (850+ commits), designed the species architecture, and documented it so new developers can add a creature from a checklist.',
    outcomes: [
      '100+ automated GUT tests covering game logic, saves and French layouts.',
      'Two playable species shipped as English and French web builds sized for mobile portrait play.',
      'Architecture and per-system docs written for handoff to future co-op students.',
    ],
    links: [],
    visual: {
      type: 'image',
      src: imgExtremaBuddies,
      alt: 'Extrema Buddies: title screen, a Pompeii worm in its hydrothermal vent habitat, and the care menu',
    },
  },
  {
    title: 'Science Bonds',
    subtitle: 'Word-matching kiosk game · OSC × Ontario Power Generation',
    tag: 'co-op project · OSC',
    origin:
      'A word-grouping puzzle built for an Ontario Power Generation event. Visitors find the hidden science connections between words before they run out of hearts or time. It had to survive a full day of walk-up play on a touchscreen kiosk with no one babysitting it.',
    tech: ['React 18', 'Vite', 'Motion', 'Node.js', 'SQLite', 'PapaParse'],
    highlights: [
      'Touch-first React UI with animated rope connections, hearts, a 5-minute timer, fact pop-ups and audio.',
      'Puzzle boards load from CSV so science educators can write new content without touching code.',
      'Privacy-friendly telemetry: game start/end events go to a small local Node + SQLite server, and nothing leaves the kiosk.',
      'Kiosk hardening: an error boundary and a reset-confirm flow so the game recovers on its own without staff stepping in.',
    ],
    role: 'Sole developer. Built the game, the content pipeline and the telemetry server, and deployed it on-site.',
    outcomes: [
      'Deployed live at the Ontario Power Generation event.',
      'Session telemetry (outcome, duration, groups found) gives the team real data on how visitors actually play.',
    ],
    links: [],
    visual: {
      type: 'image',
      src: imgScienceBonds,
      alt: 'Science Bonds kiosk: title screen, the 16-word game board, and a fun-fact pop-up after a match',
    },
  },
  {
    title: 'Human Body Atlas',
    subtitle: '3D interactive anatomy explorer · OSC',
    tag: 'co-op project · OSC',
    origin:
      'A browser-based 3D model of the human body where visitors toggle body systems on and off and tap touchpoints to learn what each organ does. The challenge was making detailed 3D models load fast and stay usable for everyone, including people who cannot use a mouse.',
    tech: ['Three.js', 'JavaScript', 'glTF + Meshopt', 'Tween.js', 'Vite'],
    highlights: [
      'Body-system toggles and interactive touchpoints with smooth animated camera transitions.',
      'Compressed glTF models with baked textures to keep load times low on exhibit hardware.',
      'Full keyboard navigation and keyboard orbit controls for accessibility, alongside touch and mouse.',
      'Bilingual OSC branding (English and French).',
    ],
    role: 'Sole developer. I built the scene, loaders, interaction systems and content data from scratch.',
    outcomes: [
      'A self-contained web interactive that runs in any modern browser, with no plugins or installs.',
      'Data-driven systems and touchpoints, so new content is a config change, not new code.',
    ],
    links: [],
    visual: {
      type: 'image',
      src: imgHumanBodyAtlas,
      alt: 'Human Body Atlas: 3D model of the human body showing skeletal, digestive and cardiovascular systems',
    },
  },
  {
    title: 'Hypertrofit',
    subtitle: 'AI fitness & nutrition coach',
    origin:
      'I wanted to see if I could build something that felt like a real conversation, not just a form with extra steps. The challenge was keeping the AI grounded — it\'s easy for a fitness chatbot to hallucinate nonsense. That problem led me to RAG.',
    tech: ['Python', 'FastAPI', 'Vue.js', 'Docker', 'OpenRouter'],
    highlights: [
      'Full-stack fitness coach: Vue 3 + Composition API on the front, async FastAPI on the back, wired for real chat flows.',
      'Grounds answers with a RAG pipeline over a markdown knowledge base (TF-IDF retrieval) so responses stay tied to real content.',
      'Backed by automated tests and a GitHub Actions workflow so changes ship with confidence.',
    ],
    role: 'Solo developer. Designed the architecture and built the frontend, API, retrieval pipeline, tests and deployment.',
    outcomes: [
      '100/100 Lighthouse performance score with automated Railway + Netlify deploys.',
      'Hybrid RAG retrieval over 800+ knowledge chunks keeps answers grounded in real content.',
      '57-test suite running in GitHub Actions on every push.',
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
    origin:
      'I built this to learn Go properly — not just syntax, but how to structure a real project in a language with strong opinions about it. A CLI todo app is small enough to finish but has enough moving parts to force good decisions.',
    tech: ['Go', 'Cobra', 'SQLite'],
    highlights: [
      'Terminal todo app with CRUD, SQLite persistence, and a tidy split between commands and internal logic.',
      'Cobra subcommands for add, list, and complete, with filters for pending vs completed tasks.',
      'Single binary you can build for macOS, Linux, or Windows.',
    ],
    role: 'Solo developer. Self-directed project to learn idiomatic Go project structure.',
    outcomes: [
      'Ships as a single cross-platform binary with automatic schema creation.',
      'Clean separation of command, logic and database layers that I now reuse in other projects.',
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/JoeyRudd/CLI-ToDo-App', external: true }],
    visual: { type: 'terminal' },
  },
  {
    title: 'Adventures of Croak',
    subtitle: '2D platformer · Godot Engine',
    tag: 'course project',
    origin:
      "Built for my game development course at York. The brief was loose enough that I could focus on what actually matters in a platformer: movement feel. I kept iterating on the character controller until it felt right, then shipped it to itch.io so real people could play it.",
    tech: ['Godot Engine', 'GDScript'],
    highlights: [
      'State-based character controller (idle, run, jump, wall-slide) tuned for responsive platforming.',
      'Modular scenes for UI, particles, and gameplay so features stay maintainable.',
      'Released on itch.io — my course deliverable turned into something strangers can actually play.',
    ],
    role: 'Solo developer for a York game development course: design, code, tuning and release.',
    outcomes: [
      'Published on itch.io and playable by anyone in the browser.',
      'Movement physics run comfortably inside a 16 ms frame budget; playtesting feedback drove each tuning pass.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/JoeyRudd/adventures-of-croak', external: true },
      { label: 'Play on itch.io', href: 'https://joeyrudd.itch.io/adventures-of-croak', external: true },
    ],
    visual: {
      type: 'image',
      src: imgAdventuresOfCroak,
      alt: 'Adventures of Croak: pixel-art platformer gameplay',
    },
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

function FlowVisual({ caption, steps }: { caption: string; steps: string[] }) {
  return (
    <figure className="overflow-hidden rounded-md border border-card-border bg-surface p-5">
      <figcaption className="mb-4 font-mono text-[11px] uppercase tracking-wide text-fg/50">{caption}</figcaption>
      <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
        {steps.map((step, i) => (
          <li key={step} className="flex flex-1 items-center gap-2 sm:flex-col sm:items-stretch">
            <div className="flex flex-1 items-center justify-center rounded-md border border-card-border bg-surface-2 px-3 py-4 text-center text-xs font-medium text-fg/85">
              {step}
            </div>
            {i < steps.length - 1 ? (
              <span aria-hidden className="text-accent sm:hidden">↓</span>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  )
}

function ProjectVisualBlock({ visual }: { visual: ProjectVisual }) {
  if (visual.type === 'terminal') {
    return <CliTerminalVisual />
  }
  if (visual.type === 'flow') {
    return <FlowVisual caption={visual.caption} steps={visual.steps} />
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
      {project.tag ? (
        <p className="mb-2 font-mono text-[length:var(--text-sm)] text-text-muted">
          {project.tag}
        </p>
      ) : null}
      <h3 className="text-xl font-semibold text-fg">{project.title}</h3>
      {project.subtitle ? (
        <p className="mt-1 text-sm text-fg/55">{project.subtitle}</p>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-fg/70 italic">{project.origin}</p>
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
      <p className="mt-5 text-sm leading-relaxed text-fg/80">
        <span className="font-mono text-xs uppercase tracking-wide text-accent">My role · </span>
        {project.role}
      </p>
      <p className="mt-4 font-mono text-xs uppercase tracking-wide text-accent">Outcomes</p>
      <ul className="mt-2 list-inside list-disc space-y-1.5 text-left text-sm leading-relaxed text-fg/75">
        {project.outcomes.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
      {project.links.length === 0 ? (
        <p className="mt-4 text-xs text-fg/50">
          © 2026 Ontario Science Centre. All rights reserved. Screenshots shown with permission; source code is private.
        </p>
      ) : null}
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
