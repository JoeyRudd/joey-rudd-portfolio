import { publicImagePath, RESUME_PATH } from '../constants'

const ctaClass =
  'inline-flex items-center justify-center rounded-sm border border-card-border px-5 py-2.5 text-sm font-medium text-fg transition-[opacity,transform] duration-200 ease hover:border-accent hover:text-accent motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto w-full max-w-[860px] px-4 pt-28 pb-20 sm:px-6 sm:pt-32 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      <h1
        id="hero-heading"
        className="font-sans text-5xl font-semibold tracking-tight text-fg sm:text-6xl md:text-7xl md:leading-[1.05]"
      >
        Joey Rudd
      </h1>
      <div className="mt-4 flex flex-col gap-6 md:mt-8 md:flex-row md:items-start md:gap-10">
        <div className="order-2 flex-1 min-w-0 md:order-1">
          <p className="max-w-2xl text-lg leading-relaxed text-fg/85 sm:text-xl">
            Third-year computer science student at York. I build full-stack web apps, educational games
            in Godot, and interactive 3D work with Three.js. I&apos;m currently a software developer
            intern at the Ontario Science Centre.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#about" className={ctaClass}>
              About me
            </a>
            <a href={RESUME_PATH} download className={ctaClass}>
              Download resume
            </a>
          </div>
        </div>
        <img
          src={publicImagePath('joey.png')}
          alt="Joey Rudd"
          className="order-1 aspect-[4/5] w-40 max-w-[200px] shrink-0 object-cover object-top rounded-2xl border border-card-border shadow-[0_2px_12px_rgba(0,0,0,0.35)] mx-auto md:order-2 md:mx-0 md:aspect-auto md:h-[13rem] md:w-44"
          loading="eager"
          fetchPriority="high"
          width={200}
          height={250}
        />
      </div>
    </section>
  )
}
