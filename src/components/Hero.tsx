import { motion } from 'framer-motion'
import { publicImagePath, RESUME_PATH } from '../constants'
import { useMagneticButton } from '../hooks/useMagneticButton'
import { useTilt } from '../hooks/useTilt'
import { ParticleField } from './ParticleField'
import { TypewriterRoles } from './TypewriterRoles'

function HeroImage() {
  const { ref, spotlightRef, onMouseEnter, onMouseMove, onMouseLeave } = useTilt({
    strength: 6,
    scale: 1.03,
  })

  return (
    <div
      className="relative order-1 shrink-0 self-start md:order-2"
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Spotlight glare */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-10 rounded-lg opacity-0 transition-opacity duration-200"
        aria-hidden
      />
      <img
        src={publicImagePath('joey.png')}
        alt="Joey Rudd"
        className="aspect-[4/5] w-40 max-w-[200px] rounded-lg border border-card-border object-cover object-top md:aspect-auto md:h-[13rem] md:w-44"
        loading="eager"
        fetchPriority="high"
        width={200}
        height={250}
      />
    </div>
  )
}

function MagneticCTA({
  href,
  download,
  className,
  children,
}: {
  href: string
  download?: boolean
  className: string
  children: React.ReactNode
}) {
  const { ref, style, onMouseMove, onMouseLeave } = useMagneticButton()

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      className={className}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full max-w-[860px] overflow-hidden px-4 pt-28 pb-20 text-left sm:px-6 sm:pt-32 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Interactive particle constellation */}
      <ParticleField />

      <div className="relative z-[1]">
        <motion.h1
          id="hero-heading"
          className="hero-name font-sans text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl md:leading-[1.05]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Joey Rudd
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <TypewriterRoles />
        </motion.div>

        <div className="mt-4 flex flex-col gap-8 md:mt-8 md:flex-row md:items-start md:gap-10">
          <div className="order-2 min-w-0 flex-1 md:order-1">
            <motion.p
              className="max-w-2xl text-lg leading-relaxed text-fg/90 sm:text-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Third-year computer science student at York. I build full-stack web apps, educational
              games in Godot, and interactive 3D work with Three.js. I&apos;m currently a software
              developer intern at the Ontario Science Centre.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticCTA href={RESUME_PATH} download className="btn-primary">
                Download resume
              </MagneticCTA>
              <MagneticCTA href="#about" className="btn-secondary">
                About me
              </MagneticCTA>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
