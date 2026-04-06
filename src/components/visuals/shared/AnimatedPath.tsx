import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface AnimatedPathProps {
  d: string
  stroke?: string
  strokeWidth?: number
  fill?: string
  duration?: number
  delay?: number
  className?: string
}

export function AnimatedPath({
  d,
  stroke = 'currentColor',
  strokeWidth = 2,
  fill = 'none',
  duration = 1.5,
  delay = 0,
  className,
}: AnimatedPathProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <path
        d={d}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        className={className}
      />
    )
  }

  return (
    <motion.path
      ref={ref}
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ duration, delay, ease: 'easeInOut' }}
    />
  )
}
