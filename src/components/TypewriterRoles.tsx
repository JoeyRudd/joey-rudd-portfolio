import { useEffect, useState } from 'react'

const WORDS = ['Full-Stack Developer', 'Game Dev', 'CS @ York'] as const
const TYPE_MS = 60
const DELETE_MS = 30
const PAUSE_MS = 1800

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function TypewriterRoles() {
  const [text, setText] = useState(() => (prefersReducedMotion() ? WORDS[0] : ''))
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (prefersReducedMotion()) return

    let wordIndex = 0
    let charIndex = 0
    let mode: 'typing' | 'pausing' | 'deleting' = 'typing'
    let timeoutId = 0
    let cancelled = false

    const tick = () => {
      if (cancelled) return
      const word = WORDS[wordIndex % WORDS.length]
      if (mode === 'typing') {
        if (charIndex < word.length) {
          charIndex += 1
          setText(word.slice(0, charIndex))
          timeoutId = window.setTimeout(tick, TYPE_MS)
        } else {
          mode = 'pausing'
          timeoutId = window.setTimeout(() => {
            mode = 'deleting'
            tick()
          }, PAUSE_MS)
        }
      } else if (mode === 'deleting') {
        if (charIndex > 0) {
          charIndex -= 1
          setText(word.slice(0, charIndex))
          timeoutId = window.setTimeout(tick, DELETE_MS)
        } else {
          wordIndex += 1
          mode = 'typing'
          timeoutId = window.setTimeout(tick, TYPE_MS)
        }
      }
    }

    timeoutId = window.setTimeout(tick, TYPE_MS)
    return () => {
      cancelled = true
      window.clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion()) return
    const id = window.setInterval(() => setShowCursor((c) => !c), 530)
    return () => window.clearInterval(id)
  }, [])

  return (
    <p className="mt-3 flex min-h-[1.75rem] flex-wrap items-baseline gap-0 text-lg font-medium text-fg sm:text-xl">
      <span>{text}</span>
      <span className="font-mono text-text-muted tabular-nums" aria-hidden>
        {showCursor ? '|' : '\u00a0'}
      </span>
    </p>
  )
}
