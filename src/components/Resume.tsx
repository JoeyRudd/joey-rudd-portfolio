import { RESUME_PATH } from '../constants'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { SectionHeading } from './SectionHeading'

export function Resume() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="resume"
      className={`section-reveal mx-auto w-full max-w-[860px] px-4 py-16 text-left sm:px-6 sm:pb-28 sm:pt-24 ${
        visible ? 'section-reveal--visible' : ''
      }`}
      aria-labelledby="resume-heading"
    >
      <SectionHeading id="resume-heading" num="07">
        CV
      </SectionHeading>
      <p className="mt-6 max-w-prose text-base leading-relaxed text-fg/75">
        Download a copy or preview below.
      </p>
      <div className="mt-6">
        <a href={RESUME_PATH} download className="btn-secondary">
          Download resume
        </a>
      </div>
      <div className="mt-10 overflow-hidden rounded-md border border-card-border">
        <iframe
          title="Resume PDF preview"
          src={`${RESUME_PATH}#toolbar=0`}
          className="h-[min(70vh,720px)] w-full bg-surface-2"
        />
      </div>
      <div className="mt-12 border-t border-card-border pb-4 pt-8" aria-hidden />
    </section>
  )
}
