import { publicImagePath, RESUME_PATH } from '../constants'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { TypewriterRoles } from './TypewriterRoles'

export function Hero() {
  const { ref, visible } = useScrollReveal()

  return (
    <section
      ref={ref}
      id="hero"
      className={`relative mx-auto w-full max-w-[860px] overflow-hidden px-4 pt-28 pb-20 text-left sm:px-6 sm:pt-32 sm:pb-28 ${
        visible ? 'section-reveal section-reveal--visible' : 'section-reveal'
      }`}
      aria-labelledby="hero-heading"
    >
      <div className="relative z-[1]">
        <h1
          id="hero-heading"
          className="font-sans text-5xl font-bold tracking-tight text-fg sm:text-6xl md:text-7xl md:leading-[1.05]"
        >
          Joey Rudd
        </h1>
        <TypewriterRoles />
        <div className="mt-4 flex flex-col gap-8 md:mt-8 md:flex-row md:items-start md:gap-10">
          <div className="order-2 min-w-0 flex-1 md:order-1">
            <p className="max-w-2xl text-lg leading-relaxed text-fg/90 sm:text-xl">
              Third-year computer science student at York. I build full-stack web apps, educational games
              in Godot, and interactive 3D work with Three.js. I&apos;m currently a software developer
              intern at the Ontario Science Centre.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={RESUME_PATH} download className="btn-primary">
                Download resume
              </a>
              <a href="#about" className="btn-secondary">
                About me
              </a>
            </div>
          </div>
          <img
            src={publicImagePath('joey.png')}
            alt="Joey Rudd"
            className="order-1 aspect-[4/5] w-40 max-w-[200px] shrink-0 self-start rounded-lg border border-card-border object-cover object-top md:order-2 md:aspect-auto md:h-[13rem] md:w-44"
            loading="eager"
            fetchPriority="high"
            width={200}
            height={250}
          />
        </div>
      </div>
    </section>
  )
}
