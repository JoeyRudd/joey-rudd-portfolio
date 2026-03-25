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
  return (
    <section
      id="education"
      className="mx-auto w-full max-w-[860px] px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="education-heading"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-fg/50">Education</p>
      <h2
        id="education-heading"
        className="mt-2 text-3xl font-medium tracking-tight text-fg sm:text-4xl"
      >
        York University
      </h2>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-fg/85">
        <div>
          <p className="font-medium text-fg">Honours Bachelor of Computer Science</p>
          <p className="mt-1 text-fg/75">York University, Lassonde School of Engineering</p>
          <p className="mt-1 text-fg/75">Toronto, ON. Expected graduation May 2027</p>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-fg/50">Relevant coursework</p>
          <ul className="mt-3 list-inside list-disc space-y-1.5">
            {courses.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-fg/50">Skills</p>
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
