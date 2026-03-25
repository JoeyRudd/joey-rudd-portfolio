import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#resume', label: 'Resume' },
] as const

const linkClass =
  'rounded-sm text-sm font-medium text-fg/90 transition-[opacity,transform] duration-200 ease hover:text-accent motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
    <header
      className={`fixed top-0 right-0 left-0 z-50 ${
        scrolled
          ? 'border-b border-card-border/80 bg-bg/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-[860px] items-center justify-between gap-4 px-4 py-4 sm:px-6"
        aria-label="Primary"
      >
        <a
          href="#hero"
          className={`font-medium ${linkClass}`}
          onClick={() => setMobileOpen(false)}
        >
          Joey Rudd
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={linkClass}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-fg transition-[opacity,transform] duration-200 ease hover:text-accent motion-reduce:transition-none md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
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
      </nav>

      <div
        id="mobile-nav"
        className={`border-t border-card-border bg-bg/95 backdrop-blur-md md:hidden ${
          mobileOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="mx-auto flex max-w-[860px] flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`block py-2 ${linkClass}`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
