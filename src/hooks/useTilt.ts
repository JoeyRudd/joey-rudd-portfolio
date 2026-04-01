import { useCallback, useRef } from 'react'

const IS_TOUCH = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

interface TiltOptions {
  strength?: number
  scale?: number
}

interface TiltResult {
  ref: React.RefObject<HTMLElement | null>
  spotlightRef: React.RefObject<HTMLDivElement | null>
  onMouseEnter: () => void
  onMouseMove: (e: React.MouseEvent) => void
  onMouseLeave: () => void
}

/**
 * 3D card tilt + spotlight glow effect.
 * - Caches getBoundingClientRect on mouseenter (not on every move)
 * - Flushes transform to DOM via rAF once per frame
 * - Disabled on touch devices
 */
export function useTilt({ strength = 12, scale = 1.02 }: TiltOptions = {}): TiltResult {
  const ref = useRef<HTMLElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const rectRef = useRef<DOMRect | null>(null)
  const rafRef = useRef<number | null>(null)
  const pendingRef = useRef<{ rotX: number; rotY: number; spotX: number; spotY: number } | null>(null)

  const onMouseEnter = useCallback(() => {
    if (IS_TOUCH || !ref.current) return
    rectRef.current = ref.current.getBoundingClientRect()
    if (ref.current) {
      ref.current.style.transition = 'none'
    }
  }, [])

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (IS_TOUCH || !rectRef.current) return

      const rect = rectRef.current
      const x = (e.clientX - rect.left) / rect.width   // 0..1
      const y = (e.clientY - rect.top) / rect.height    // 0..1
      const rotX = (y - 0.5) * -strength
      const rotY = (x - 0.5) * strength
      const spotX = e.clientX - rect.left
      const spotY = e.clientY - rect.top

      pendingRef.current = { rotX, rotY, spotX, spotY }

      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          const p = pendingRef.current
          if (!p) return
          if (ref.current) {
            ref.current.style.transform = `perspective(800px) rotateX(${p.rotX}deg) rotateY(${p.rotY}deg) scale3d(${scale}, ${scale}, ${scale})`
          }
          if (spotlightRef.current) {
            spotlightRef.current.style.background = `radial-gradient(300px circle at ${p.spotX}px ${p.spotY}px, rgba(0,200,255,0.07), transparent 70%)`
            spotlightRef.current.style.opacity = '1'
          }
          rafRef.current = null
        })
      }
    },
    [strength, scale],
  )

  const onMouseLeave = useCallback(() => {
    if (IS_TOUCH) return
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    pendingRef.current = null
    if (ref.current) {
      ref.current.style.transition = 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
      ref.current.style.transform = ''
    }
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = '0'
    }
    rectRef.current = null
  }, [])

  return { ref, spotlightRef, onMouseEnter, onMouseMove, onMouseLeave }
}
