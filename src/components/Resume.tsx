import { RESUME_PATH } from '../constants'

const btnClass =
  'inline-flex items-center justify-center rounded-sm border border-card-border px-5 py-2.5 text-sm font-medium text-fg transition-[opacity,transform] duration-200 ease hover:border-accent hover:text-accent motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

export function Resume() {
  return (
    <section
      id="resume"
      className="mx-auto w-full max-w-[860px] px-4 py-16 sm:px-6 sm:py-24"
      aria-labelledby="resume-heading"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-fg/50">Resume</p>
      <h2 id="resume-heading" className="mt-2 text-3xl font-medium tracking-tight text-fg sm:text-4xl">
        CV
      </h2>
      <p className="mt-6 max-w-prose text-base leading-relaxed text-fg/75">
        Download a copy or preview below.
      </p>
      <div className="mt-6">
        <a href={RESUME_PATH} download className={btnClass}>
          Download resume
        </a>
      </div>
      <div className="mt-10 overflow-hidden border border-card-border">
        <iframe
          title="Resume PDF preview"
          src={`${RESUME_PATH}#toolbar=0`}
          className="h-[min(70vh,720px)] w-full bg-fg/5"
        />
      </div>
    </section>
  )
}
