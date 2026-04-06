import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface GlowOrbProps {
  cx: number
  cy: number
  r?: number
  color?: string
  pulseScale?: number
  duration?: number
}

export function GlowOrb({
  cx,
  cy,
  r = 6,
  color = 'var(--color-brand)',
  pulseScale = 1.6,
  duration = 2,
}: GlowOrbProps) {
  const reducedMotion = useReducedMotion()
  const id = `glow-${cx}-${cy}`

  return (
    <g>
      <defs>
        <radialGradient id={id}>
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      {!reducedMotion && (
        <motion.circle
          cx={cx}
          cy={cy}
          r={r * pulseScale}
          fill={`url(#${id})`}
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <circle cx={cx} cy={cy} r={r} fill={color} opacity={0.9} />
    </g>
  )
}
