import type { SVGProps } from 'react'

type BrandMarkProps = SVGProps<SVGSVGElement> & {
  compact?: boolean
}

/**
 * Code-native reconstruction of the original mark in the supplied brand mockup.
 * The two horizon arcs are part of the identity, not decorative underlines.
 */
export function BrandMark({ compact = false, ...props }: BrandMarkProps) {
  return (
    <svg
      aria-label="Outrospective"
      role="img"
      viewBox={compact ? '0 0 47 40' : '0 0 358 40'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" stroke="var(--primary)" strokeLinecap="round">
        <path d="M2.5 34.5c5.6-7.2 17.8-7.2 23.4 0" strokeWidth="1.45" />
        {!compact && <path d="M121.6 34.5c5.6-7.2 17.8-7.2 23.4 0" strokeWidth="1.45" />}
      </g>
      {compact ? (
        <text
          fill="var(--primary)"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="25"
          fontWeight="300"
          letterSpacing="1.5"
          x="1"
          y="25"
        >
          O
        </text>
      ) : (
        <text
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="20.5"
          fontWeight="300"
          letterSpacing="5.8"
          x="1"
          y="24"
        >
          <tspan fill="currentColor">OUTR</tspan>
          <tspan fill="var(--primary)">O</tspan>
          <tspan fill="currentColor">SPECTIVE</tspan>
        </text>
      )}
    </svg>
  )
}
