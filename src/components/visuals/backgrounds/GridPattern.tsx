import { memo } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface GridPatternProps {
  className?: string
  animated?: boolean
}

export const GridPattern = memo(function GridPattern({
  className,
  animated = true,
}: GridPatternProps) {
  const reducedMotion = useReducedMotion()
  const shouldAnimate = animated && !reducedMotion

  return (
    <svg
      className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
      aria-hidden="true"
    >
      <defs>
        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            className="text-border/30 dark:text-border/20"
          />
        </pattern>
        <radialGradient id="grid-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="grid-mask">
          <rect width="100%" height="100%" fill="url(#grid-fade)" />
        </mask>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid-pattern)" mask="url(#grid-mask)" />

      {shouldAnimate && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              cx={`${20 + i * 15}%`}
              cy={`${30 + (i % 3) * 20}%`}
              r="2"
              className="fill-brand/30 dark:fill-brand-light/20"
              animate={{
                opacity: [0.2, 0.8, 0.2],
                r: [1.5, 3, 1.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.8,
              }}
            />
          ))}
        </>
      )}
    </svg>
  )
})
