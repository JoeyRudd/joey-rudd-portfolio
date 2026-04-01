import { useCallback, useEffect, useRef, useState } from 'react'

const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export function useKonamiCode() {
  const [activated, setActivated] = useState(false)
  const bufferRef = useRef<string[]>([])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      bufferRef.current.push(e.key)
      if (bufferRef.current.length > KONAMI.length) {
        bufferRef.current.shift()
      }
      if (
        bufferRef.current.length === KONAMI.length &&
        bufferRef.current.every((k, i) => k === KONAMI[i])
      ) {
        setActivated(true)
        bufferRef.current = []
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const reset = useCallback(() => {
    setActivated(false)
    bufferRef.current = []
  }, [])

  return { activated, reset }
}
