export function TopologyBackground() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="topology"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="turbulence"
            baseFrequency="0.012 0.008"
            numOctaves={5}
            seed={7}
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              values="0.012 0.008;0.014 0.010;0.012 0.008"
              dur="90s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          {/* Tint to cyan (#00c8ff) */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0.784
                    0 0 0 0 1
                    0 0 20 -7 0"
            in="noise"
            result="tinted"
          />
          {/* Discrete quantization creates the contour-band effect */}
          <feComponentTransfer in="tinted">
            <feFuncA type="discrete" tableValues="0 0 0.16 0 0 0.10 0 0 0.13 0" />
          </feComponentTransfer>
        </filter>
      </defs>
      <rect width="100%" height="100%" filter="url(#topology)" />
    </svg>
  )
}
