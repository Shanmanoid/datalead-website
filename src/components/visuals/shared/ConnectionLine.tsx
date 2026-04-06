import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface ConnectionLineProps {
  from: { x: number; y: number }
  to: { x: number; y: number }
  animated?: boolean
  dashed?: boolean
  color?: string
  strokeWidth?: number
  curved?: boolean
}

export function ConnectionLine({
  from,
  to,
  animated = true,
  dashed = false,
  color = 'var(--color-brand)',
  strokeWidth = 1.5,
  curved = false,
}: ConnectionLineProps) {
  const reducedMotion = useReducedMotion()
  const shouldAnimate = animated && !reducedMotion

  const d = curved
    ? `M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${Math.min(from.y, to.y) - 30} ${to.x} ${to.y}`
    : `M ${from.x} ${from.y} L ${to.x} ${to.y}`

  if (!shouldAnimate) {
    return (
      <path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={dashed ? '6 4' : undefined}
        opacity={0.4}
      />
    )
  }

  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      strokeDasharray="8 4"
      initial={{ strokeDashoffset: 24, opacity: 0.2 }}
      animate={{ strokeDashoffset: [24, 0], opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    />
  )
}
