import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { useKonamiCode } from '../hooks/useKonamiCode'

const STATS = [
  { label: 'Favourite game', value: 'Hollow Knight' },
  { label: 'Currently learning', value: 'Rust' },
  { label: 'Coffee per PR', bar: 80 },
  { label: 'Hours in Godot this wk', bar: 120 },
  { label: 'Bugs fixed today', value: 'yes' },
]

function Bar({ pct }: { pct: number }) {
  const filled = Math.min(Math.round(pct / 10), 10)
  const empty = 10 - filled
  return (
    <span>
      <span className="konami-bar-fill">{'█'.repeat(filled)}</span>
      <span className="konami-bar-empty">{'█'.repeat(empty)}</span>
      {'  '}
      {pct}%
    </span>
  )
}

export function KonamiEasterEgg() {
  const { activated, reset } = useKonamiCode()

  useEffect(() => {
    if (!activated) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') reset()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activated, reset])

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          className="konami-overlay"
          onClick={reset}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Secret easter egg terminal"
        >
          <motion.div
            className="konami-terminal"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>&gt; CHEAT CODE ACTIVATED<span className="konami-cursor" /></p>
            <p>&gt; Welcome, player 2.</p>
            <p>&gt; Unlocking secret stats...</p>
            <br />
            <p>{'  '}── SECRET STATS UNLOCKED ────────────────────</p>
            <br />
            {STATS.map((s) => (
              <p key={s.label}>
                {'  '}
                <span style={{ color: '#88ff88' }}>{s.label}:</span>
                {'  '}
                {''.padEnd(Math.max(0, 28 - s.label.length))}
                {'bar' in s ? <Bar pct={s.bar!} /> : s.value}
              </p>
            ))}
            <br />
            <p>&gt; Press <span style={{ color: '#88ff88' }}>ESC</span> or <span style={{ color: '#88ff88' }}>click outside</span> to return to reality</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
