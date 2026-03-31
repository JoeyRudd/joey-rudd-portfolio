import { publicImagePath } from '../constants'
import { useScrollReveal } from '../hooks/useScrollReveal'
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

export function Education() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="education"
      className={`section-reveal mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:py-20 ${
        visible ? 'section-reveal--visible' : ''
      }`}
      aria-labelledby="education-heading"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
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
      </div>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-fg/85">
        <div>
          <p className="font-medium text-fg">Honours Bachelor of Computer Science</p>
          <p className="mt-1 text-fg/75">York University, Lassonde School of Engineering</p>
          <p className="mt-1 text-fg/75">Toronto, ON. Expected graduation May 2027</p>
        </div>
        <div>
          <p className="font-mono text-[length:var(--text-sm)] text-text-muted">Relevant coursework</p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-left">
            {courses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[length:var(--text-sm)] text-text-muted">Skills</p>
          <p className="mt-3 text-sm leading-relaxed text-fg/75">
            <span className="font-medium text-fg/85">Languages:</span> Java, Python, JavaScript, Go, C,
            SQL, HTML/CSS
          </p>
          <p className="mt-2 text-sm leading-relaxed text-fg/75">
            <span className="font-medium text-fg/85">Frameworks & libraries:</span> FastAPI, Vue.js,
            Spring, JUnit, Tailwind CSS, SQLite
          </p>
          <p className="mt-2 text-sm leading-relaxed text-fg/75">
            <span className="font-medium text-fg/85">Tools:</span> Git, GitHub Actions, CI/CD,
            Unix/Linux, Docker, Netlify, Railway
          </p>
        </div>
      </div>
    </section>
  )
}
