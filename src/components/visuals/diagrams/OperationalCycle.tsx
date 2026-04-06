import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Search, Shield, Zap, RotateCcw } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const PHASES = [
  { key: 'assessment', icon: Search, color: '#3b82f6', angle: -90 },
  { key: 'preparedness', icon: Shield, color: '#8b5cf6', angle: 0 },
  { key: 'response', icon: Zap, color: '#f59e0b', angle: 90 },
  { key: 'recovery', icon: RotateCcw, color: '#10b981', angle: 180 },
]

interface OperationalCycleProps {
  className?: string
}

export function OperationalCycle({ className }: OperationalCycleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  const cx = 180
  const cy = 180
  const radius = 120

  return (
    <div ref={ref} className={cn('flex justify-center', className)}>
      <svg viewBox="0 0 360 360" className="w-full max-w-sm md:max-w-md" role="img" aria-label="Operational cycle: Assessment, Preparedness, Response, Recovery">
        {/* Rotating orbit ring */}
        <circle
          cx={cx} cy={cy} r={radius}
          fill="none"
          className="stroke-border/30 dark:stroke-border/20"
          strokeWidth={1}
          strokeDasharray="6 4"
        />

        {/* Animated orbit particle */}
        {!reducedMotion && (
          <motion.circle
            r={3}
            className="fill-brand"
            animate={{
              cx: PHASES.map((_, i) => {
                const a = ((i * 90) - 90) * (Math.PI / 180)
                return cx + radius * Math.cos(a)
              }).concat([cx + radius * Math.cos(-90 * Math.PI / 180)]),
              cy: PHASES.map((_, i) => {
                const a = ((i * 90) - 90) * (Math.PI / 180)
                return cy + radius * Math.sin(a)
              }).concat([cy + radius * Math.sin(-90 * Math.PI / 180)]),
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
        )}

        {/* Center label */}
        <circle cx={cx} cy={cy} r={35} className="fill-surface-alt dark:fill-surface-elevated" />
        <circle cx={cx} cy={cy} r={35} fill="none" className="stroke-border" strokeWidth={1} />
        <text x={cx} y={cy - 4} textAnchor="middle" className="fill-text-primary text-[10px] font-bold">
          Operational
        </text>
        <text x={cx} y={cy + 10} textAnchor="middle" className="fill-text-primary text-[10px] font-bold">
          Cycle
        </text>

        {/* Phase nodes */}
        {PHASES.map((phase, i) => {
          const angleRad = phase.angle * (Math.PI / 180)
          const px = cx + radius * Math.cos(angleRad)
          const py = cy + radius * Math.sin(angleRad)
          const Icon = phase.icon

          return (
            <motion.g
              key={phase.key}
              initial={reducedMotion ? {} : { scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, delay: i * 0.2 }}
            >
              <circle cx={px} cy={py} r={32} fill={phase.color} opacity={0.1} />
              <circle cx={px} cy={py} r={28} fill="none" stroke={phase.color} strokeWidth={2} opacity={0.6} />
              <foreignObject x={px - 12} y={py - 14} width={24} height={24}>
                <div className="flex items-center justify-center">
                  <Icon size={20} color={phase.color} />
                </div>
              </foreignObject>
              <text
                x={px} y={py + 20}
                textAnchor="middle"
                className="fill-text-secondary text-[9px] font-semibold uppercase tracking-wide"
              >
                {phase.key.charAt(0).toUpperCase() + phase.key.slice(1)}
              </text>
            </motion.g>
          )
        })}

        {/* Curved arrows between phases */}
        {PHASES.map((phase, i) => {
          const next = PHASES[(i + 1) % PHASES.length]
          const a1 = phase.angle * (Math.PI / 180)
          const a2 = next.angle * (Math.PI / 180)
          const aMid = ((phase.angle + next.angle) / 2 + (phase.angle > next.angle ? 180 : 0)) * (Math.PI / 180)

          const x1 = cx + (radius + 5) * Math.cos(a1 + 0.3)
          const y1 = cy + (radius + 5) * Math.sin(a1 + 0.3)
          const x2 = cx + (radius + 5) * Math.cos(a2 - 0.3)
          const y2 = cy + (radius + 5) * Math.sin(a2 - 0.3)
          const cpx = cx + (radius + 40) * Math.cos(aMid)
          const cpy = cy + (radius + 40) * Math.sin(aMid)

          return (
            <motion.path
              key={`arrow-${i}`}
              d={`M ${x1} ${y1} Q ${cpx} ${cpy} ${x2} ${y2}`}
              fill="none"
              stroke={phase.color}
              strokeWidth={1.5}
              strokeDasharray="4 3"
              opacity={0.4}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.2 }}
              markerEnd={`url(#arrow-${phase.color.slice(1)})`}
            />
          )
        })}

        <defs>
          {PHASES.map(phase => (
            <marker
              key={phase.color}
              id={`arrow-${phase.color.slice(1)}`}
              viewBox="0 0 10 10"
              refX="8" refY="5"
              markerWidth="6" markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={phase.color} opacity={0.6} />
            </marker>
          ))}
        </defs>
      </svg>
    </div>
  )
}
