import { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

/** Lower particle count on devices with <= 4 CPU cores */
const PARTICLE_COUNT =
  typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 4 ? 40 : 80
const LINE_DIST = 120
const REPEL_DIST = 100
const REPEL_STRENGTH = 2.5
const SPEED = 0.4

function makeParticles(count: number, w: number, h: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * SPEED,
    vy: (Math.random() - 0.5) * SPEED,
    size: Math.random() * 1 + 1,
  }))
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    // Type-cast after guard: TS loses narrowing inside closures
    const cvs = canvas as HTMLCanvasElement

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const c2d = ctx as CanvasRenderingContext2D

    // Cached layout values — updated on resize, never read inside rAF loop
    let width = 0
    let height = 0
    let particles: Particle[] = []
    let mouseX = -9999
    let mouseY = -9999
    let rafId: number | null = null
    let paused = false

    const particleColor = theme === 'dark' ? 'rgba(0,200,255,' : 'rgba(0,168,212,'

    function resize() {
      const parent = cvs.parentElement
      if (!parent) return
      const rect = parent.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const dpr = window.devicePixelRatio || 1
      cvs.width = width * dpr
      cvs.height = height * dpr
      cvs.style.width = `${width}px`
      cvs.style.height = `${height}px`
      c2d.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = makeParticles(PARTICLE_COUNT, width, height)
    }

    function onMouseMove(e: MouseEvent) {
      const rect = cvs.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    function onMouseLeave() {
      mouseX = -9999
      mouseY = -9999
    }

    function tick() {
      if (paused) return
      c2d.clearRect(0, 0, width, height)

      for (const p of particles) {
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const distSq = dx * dx + dy * dy
        if (distSq < REPEL_DIST * REPEL_DIST && distSq > 0.01) {
          const dist = Math.sqrt(distSq)
          const force = ((REPEL_DIST - dist) / REPEL_DIST) * REPEL_STRENGTH
          p.vx += (dx / dist) * force * 0.05
          p.vy += (dy / dist) * force * 0.05
        }

        p.vx *= 0.98
        p.vy *= 0.98

        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (spd > SPEED * 3) {
          p.vx = (p.vx / spd) * SPEED * 3
          p.vy = (p.vy / spd) * SPEED * 3
        }
        if (spd < SPEED * 0.3) {
          p.vx += (Math.random() - 0.5) * 0.02
          p.vy += (Math.random() - 0.5) * 0.02
        }

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x += width
        if (p.x > width) p.x -= width
        if (p.y < 0) p.y += height
        if (p.y > height) p.y -= height

        c2d.beginPath()
        c2d.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        c2d.fillStyle = `${particleColor}0.45)`
        c2d.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINE_DIST) {
            const opacity = (1 - dist / LINE_DIST) * 0.12
            c2d.beginPath()
            c2d.moveTo(a.x, a.y)
            c2d.lineTo(b.x, b.y)
            c2d.strokeStyle = `${particleColor}${opacity.toFixed(3)})`
            c2d.lineWidth = 0.8
            c2d.stroke()
          }
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    // IntersectionObserver: pause the rAF loop when hero is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        paused = !entry.isIntersecting
        if (!paused && rafId === null) {
          rafId = requestAnimationFrame(tick)
        }
      },
      { threshold: 0 },
    )
    observer.observe(cvs)

    resize()
    rafId = requestAnimationFrame(tick)

    const parentEl = cvs.parentElement
    parentEl?.addEventListener('mousemove', onMouseMove, { passive: true })
    parentEl?.addEventListener('mouseleave', onMouseLeave, { passive: true })
    window.addEventListener('resize', resize, { passive: true })

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      observer.disconnect()
      parentEl?.removeEventListener('mousemove', onMouseMove)
      parentEl?.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
    />
  )
}
