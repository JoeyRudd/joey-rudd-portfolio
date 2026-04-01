import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#goals', label: 'Goals' },
  { href: '#coursework', label: 'Coursework' },
  { href: '#resume', label: 'Resume' },
] as const

const SECTION_IDS = ['hero', 'about', 'education', 'experience', 'projects', 'goals', 'coursework', 'resume'] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const updateActive = () => {
      const offset = 140
      const y = window.scrollY + offset
      let current: (typeof SECTION_IDS)[number] = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= y) current = id
      }
      setActiveHref(`#${current}`)
    }
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-card-border backdrop-blur-[12px] transition-[background-color] duration-200 ${
        scrolled ? 'bg-[color-mix(in_srgb,var(--color-bg)_90%,transparent)]' : 'bg-[color-mix(in_srgb,var(--color-bg)_78%,transparent)]'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className="mx-auto flex max-w-[860px] items-center justify-between gap-4 px-4 py-4 sm:px-6"
        aria-label="Primary"
      >
        <a
          href="#hero"
          className={`font-sans text-sm font-semibold transition-colors duration-150 ${
            activeHref === '#hero' ? 'text-accent' : 'text-fg hover:text-fg/90'
          } motion-reduce:transition-none`}
          onClick={() => setMobileOpen(false)}
        >
          Joey Rudd
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden items-center gap-4 md:flex lg:gap-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`nav-link ${activeHref === href ? 'nav-link--active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{label}</span>
                  <span className="nav-link__line" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-sm p-2 text-fg transition-colors duration-150 ease hover:text-accent motion-reduce:transition-none md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="relative block h-3.5 w-5" aria-hidden>
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-[opacity,transform] duration-200 ease motion-reduce:transition-none ${
                  mobileOpen ? 'top-1.5 translate-y-0 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute top-1.5 left-0 block h-0.5 w-5 bg-current transition-[opacity,transform] duration-200 ease motion-reduce:transition-none ${
                  mobileOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-[opacity,transform] duration-200 ease motion-reduce:transition-none ${
                  mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-card-border bg-[color-mix(in_srgb,var(--color-bg)_92%,transparent)] backdrop-blur-[12px] md:hidden ${
          mobileOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="mx-auto flex max-w-[860px] flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link block py-2 ${activeHref === href ? 'nav-link--active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <span>{label}</span>
                <span className="nav-link__line" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  )
}
