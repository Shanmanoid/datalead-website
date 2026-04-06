import { motion } from 'motion/react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface StylizedAvatarProps {
  name: string
  role?: string
  size?: number
  gradient?: string
  className?: string
}

function hashString(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
    hash = hash & hash
  }
  return Math.abs(hash)
}

const GRADIENTS = [
  ['#3b82f6', '#6366f1'],
  ['#8b5cf6', '#a855f7'],
  ['#06b6d4', '#14b8a6'],
  ['#10b981', '#34d399'],
  ['#f59e0b', '#f97316'],
  ['#ef4444', '#f43f5e'],
]

export function StylizedAvatar({
  name,
  size = 120,
  gradient,
  className,
}: StylizedAvatarProps) {
  const reducedMotion = useReducedMotion()
  const hash = hashString(name)
  const [c1, c2] = gradient
    ? [gradient, gradient]
    : GRADIENTS[hash % GRADIENTS.length]

  const half = size / 2
  const initials = name
    .split(' ')
    .map(w => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  // Deterministic geometric shapes based on hash
  const shapeCount = 3 + (hash % 3)
  const shapes = Array.from({ length: shapeCount }, (_, i) => {
    const seed = hash + i * 137
    const cx = half + ((seed % 60) - 30)
    const cy = half + (((seed >> 3) % 60) - 30)
    const r = 10 + (seed % 20)
    const rotation = seed % 360
    return { cx, cy, r, rotation }
  })

  return (
    <div className={cn('relative', className)} style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
        <defs>
          <linearGradient id={`avatar-grad-${hash}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c1} />
            <stop offset="100%" stopColor={c2} />
          </linearGradient>
          <clipPath id={`avatar-clip-${hash}`}>
            <circle cx={half} cy={half} r={half - 2} />
          </clipPath>
        </defs>

        {/* Background circle */}
        <circle
          cx={half} cy={half} r={half - 2}
          fill={`url(#avatar-grad-${hash})`}
          opacity={0.15}
        />
        <circle
          cx={half} cy={half} r={half - 2}
          fill="none"
          stroke={c1}
          strokeWidth={2}
          opacity={0.3}
        />

        {/* Geometric shapes */}
        <g clipPath={`url(#avatar-clip-${hash})`}>
          {shapes.map((s, i) => {
            const Wrapper = reducedMotion ? 'g' : motion.g
            return (
              <Wrapper
                key={i}
                {...(!reducedMotion && {
                  animate: { rotate: [s.rotation, s.rotation + 20, s.rotation] },
                  transition: { duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' },
                })}
                style={{ transformOrigin: `${s.cx}px ${s.cy}px` }}
              >
                {i % 3 === 0 ? (
                  <circle cx={s.cx} cy={s.cy} r={s.r} fill={c1} opacity={0.1} />
                ) : i % 3 === 1 ? (
                  <rect
                    x={s.cx - s.r / 2} y={s.cy - s.r / 2}
                    width={s.r} height={s.r}
                    rx={s.r * 0.2}
                    fill={c2} opacity={0.08}
                    transform={`rotate(${s.rotation} ${s.cx} ${s.cy})`}
                  />
                ) : (
                  <polygon
                    points={`${s.cx},${s.cy - s.r} ${s.cx + s.r * 0.87},${s.cy + s.r * 0.5} ${s.cx - s.r * 0.87},${s.cy + s.r * 0.5}`}
                    fill={c1} opacity={0.06}
                  />
                )}
              </Wrapper>
            )
          })}
        </g>

        {/* Initials */}
        <text
          x={half}
          y={half}
          textAnchor="middle"
          dominantBaseline="central"
          className="font-bold"
          fill={c1}
          fontSize={size * 0.3}
          opacity={0.8}
        >
          {initials}
        </text>
      </svg>
    </div>
  )
}
