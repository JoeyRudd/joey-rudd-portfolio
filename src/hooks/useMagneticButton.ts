import { useCallback, useRef, useState } from 'react'

const IS_TOUCH = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

const THRESHOLD = 80   // px — activation radius
const STRENGTH = 0.35  // pull multiplier

interface MagneticResult {
  ref: React.RefObject<HTMLAnchorElement | null>
  style: React.CSSProperties
  onMouseMove: (e: React.MouseEvent) => void
  onMouseLeave: () => void
}

/**
 * Magnetic pull effect for buttons/links.
 * Disabled on touch devices. Uses CSS transition for the spring-back.
 */
export function useMagneticButton(): MagneticResult {
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (IS_TOUCH || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < THRESHOLD) {
      setOffset({ x: dx * STRENGTH, y: dy * STRENGTH })
    }
  }, [])

  const onMouseLeave = useCallback(() => {
    if (IS_TOUCH) return
    setOffset({ x: 0, y: 0 })
  }, [])

  const style: React.CSSProperties = IS_TOUCH
    ? {}
    : {
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      }

  return { ref, style, onMouseMove, onMouseLeave }
}
