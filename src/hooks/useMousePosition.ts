import { useEffect, useRef } from 'react'

export interface MousePosition {
  x: number
  y: number
}

/**
 * Returns a ref containing the current mouse position in viewport coordinates.
 * Uses a single document-level mousemove listener, throttled to rAF — no React
 * state updates, so nothing re-renders on every mouse move.
 */
export function useMousePosition(): React.RefObject<MousePosition> {
  const posRef = useRef<MousePosition>({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)
  const latestRef = useRef<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    function onMove(e: MouseEvent) {
      latestRef.current = { x: e.clientX, y: e.clientY }
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          posRef.current = latestRef.current
          rafRef.current = null
        })
      }
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      document.removeEventListener('mousemove', onMove)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return posRef
}
