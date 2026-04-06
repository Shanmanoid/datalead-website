import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Shield, Eye, Target, Zap, RotateCcw, Scale } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const PILLARS = [
  { key: 'prevention', icon: Shield, color: '#3b82f6', angle: 0 },
  { key: 'protection', icon: Eye, color: '#8b5cf6', angle: 60 },
  { key: 'preparedness', icon: Target, color: '#06b6d4', angle: 120 },
  { key: 'response', icon: Zap, color: '#f59e0b', angle: 180 },
  { key: 'recovery', icon: RotateCcw, color: '#10b981', angle: 240 },
  { key: 'governance', icon: Scale, color: '#ef4444', angle: 300 },
]

interface PillarsDiagramProps {
  className?: string
}

export function PillarsDiagram({ className }: PillarsDiagramProps) {
  const { t } = useTranslation('business-value')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const reducedMotion = useReducedMotion()

  const cx = 200
  const cy = 200
  const radius = 140

  return (
    <div ref={ref} className={cn('flex justify-center', className)}>
      <svg viewBox="0 0 400 400" className="w-full max-w-[500px]" role="img" aria-label="Six pillars of enterprise data resilience">
        {/* Center hub */}
        <motion.circle
          cx={cx} cy={cy} r={45}
          className="fill-brand/10 dark:fill-brand/20"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        />
        <motion.circle
          cx={cx} cy={cy} r={45}
          fill="none"
          className="stroke-brand"
          strokeWidth={2}
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1 }}
        />
        {/* Connection lines — drawn first so they are behind everything */}
        {PILLARS.map((pillar, i) => {
          const angleRad = (pillar.angle - 90) * (Math.PI / 180)
          const startX = cx + 48 * Math.cos(angleRad)
          const startY = cy + 48 * Math.sin(angleRad)
          const endX = cx + (radius - 32) * Math.cos(angleRad)
          const endY = cy + (radius - 32) * Math.sin(angleRad)

          return (
            <motion.line
              key={`line-${pillar.key}`}
              x1={startX} y1={startY} x2={endX} y2={endY}
              stroke={pillar.color}
              strokeWidth={1}
              strokeDasharray="4 3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
            />
          )
        })}

        {/* Center hub text — on top of lines */}
        <text x={cx} y={cy - 6} textAnchor="middle" className="fill-text-primary text-[11px] font-bold">
          Enterprise
        </text>
        <text x={cx} y={cy + 8} textAnchor="middle" className="fill-text-primary text-[11px] font-bold">
          Resilience
        </text>

        {/* Pillar nodes */}
        {PILLARS.map((pillar, i) => {
          const angleRad = (pillar.angle - 90) * (Math.PI / 180)
          const px = cx + radius * Math.cos(angleRad)
          const py = cy + radius * Math.sin(angleRad)
          const Icon = pillar.icon

          return (
            <motion.g
              key={pillar.key}
              initial={reducedMotion ? {} : { scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, delay: 0.5 + i * 0.15 }}
            >
              <circle cx={px} cy={py} r={32} fill={pillar.color} opacity={0.08} />
              <circle cx={px} cy={py} r={26} fill="none" stroke={pillar.color} strokeWidth={1.5} opacity={0.5} />
              <foreignObject x={px - 12} y={py - 12} width={24} height={24}>
                <div className="flex items-center justify-center">
                  <Icon size={20} color={pillar.color} />
                </div>
              </foreignObject>
              <text
                x={px} y={py + 40}
                textAnchor="middle"
                className="fill-text-secondary text-[8px] font-semibold uppercase tracking-wider"
              >
                {t(`framework.steps.${pillar.key}.title`, pillar.key)}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
