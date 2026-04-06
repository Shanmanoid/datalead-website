import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface FloatingNodeProps {
  x: number
  y: number
  label: string
  icon?: React.ReactNode
  color?: string
  size?: number
  delay?: number
}

export function FloatingNode({
  x,
  y,
  label,
  icon,
  color = 'var(--color-brand)',
  size = 48,
  delay = 0,
}: FloatingNodeProps) {
  const reducedMotion = useReducedMotion()
  const half = size / 2

  const Wrapper = reducedMotion ? 'g' : motion.g

  return (
    <Wrapper
      {...(!reducedMotion && {
        animate: { y: [y - 3, y + 3, y - 3] },
        transition: { duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay },
      })}
    >
      <rect
        x={x - half}
        y={y - half}
        width={size}
        height={size}
        rx={size * 0.25}
        fill={color}
        opacity={0.1}
      />
      <rect
        x={x - half}
        y={y - half}
        width={size}
        height={size}
        rx={size * 0.25}
        fill="none"
        stroke={color}
        strokeWidth={1}
        opacity={0.3}
      />
      {icon && (
        <foreignObject x={x - 10} y={y - 10} width={20} height={20}>
          <div className="flex items-center justify-center w-full h-full text-brand">
            {icon}
          </div>
        </foreignObject>
      )}
      <text
        x={x}
        y={y + half + 14}
        textAnchor="middle"
        className="fill-text-secondary text-[10px] font-medium"
      >
        {label}
      </text>
    </Wrapper>
  )
}
