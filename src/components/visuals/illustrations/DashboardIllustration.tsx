import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface DashboardIllustrationProps {
  className?: string
}

export function DashboardIllustration({ className }: DashboardIllustrationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  const bars = [
    { x: 40, h: 60, color: '#3b82f6' },
    { x: 70, h: 85, color: '#6366f1' },
    { x: 100, h: 45, color: '#8b5cf6' },
    { x: 130, h: 70, color: '#06b6d4' },
    { x: 160, h: 95, color: '#10b981' },
  ]

  const pieSegments = [
    { start: 0, end: 120, color: '#3b82f6' },
    { start: 120, end: 220, color: '#10b981' },
    { start: 220, end: 300, color: '#f59e0b' },
    { start: 300, end: 360, color: '#8b5cf6' },
  ]

  const linePoints = '230,140 250,125 270,130 290,110 310,115 330,95 350,100 370,80'

  return (
    <div ref={ref} className={cn('w-full', className)}>
      <svg viewBox="0 0 400 230" className="w-full max-w-[500px] mx-auto" role="img" aria-label="Dashboard illustration with charts and metrics">
        {/* Dashboard frame */}
        <rect x="10" y="10" width="380" height="210" rx="12" className="fill-surface-alt dark:fill-surface-elevated" />
        <rect x="10" y="10" width="380" height="210" rx="12" fill="none" className="stroke-border" strokeWidth="1" />

        {/* Top bar */}
        <rect x="10" y="10" width="380" height="30" rx="12" className="fill-brand/5" />
        <rect x="10" y="28" width="380" height="12" className="fill-brand/5" />
        {/* Dots */}
        <circle cx="30" cy="25" r="4" fill="#ef4444" opacity={0.7} />
        <circle cx="45" cy="25" r="4" fill="#f59e0b" opacity={0.7} />
        <circle cx="60" cy="25" r="4" fill="#10b981" opacity={0.7} />

        {/* Bar chart */}
        {bars.map((bar, i) => (
          <motion.rect
            key={i}
            x={bar.x}
            y={190 - bar.h}
            width={20}
            height={bar.h}
            rx={4}
            fill={bar.color}
            opacity={0.7}
            initial={{ height: 0, y: 190 }}
            animate={isInView ? { height: bar.h, y: 190 - bar.h } : {}}
            transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
          />
        ))}
        {/* Bar chart baseline */}
        <line x1="30" y1="190" x2="190" y2="190" className="stroke-border" strokeWidth="1" />

        {/* Pie chart */}
        {pieSegments.map((seg, i) => {
          const cx = 290, cy = 100, r = 35
          const startRad = (seg.start - 90) * (Math.PI / 180)
          const endRad = (seg.end - 90) * (Math.PI / 180)
          const largeArc = seg.end - seg.start > 180 ? 1 : 0
          const x1 = cx + r * Math.cos(startRad)
          const y1 = cy + r * Math.sin(startRad)
          const x2 = cx + r * Math.cos(endRad)
          const y2 = cy + r * Math.sin(endRad)
          const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`

          return (
            <motion.path
              key={i}
              d={d}
              fill={seg.color}
              opacity={0.6}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
          )
        })}

        {/* Line chart */}
        <motion.polyline
          points={linePoints}
          fill="none"
          stroke="#10b981"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.8 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
        />

        {/* KPI cards */}
        {[
          { x: 220, y: 150, value: '99.98%', label: 'Uptime', color: '#10b981' },
          { x: 310, y: 150, value: '4 min', label: 'Response', color: '#3b82f6' },
        ].map((kpi, i) => (
          <motion.g
            key={kpi.label}
            initial={reducedMotion ? {} : { opacity: 0, y: kpi.y + 10 }}
            animate={isInView ? { opacity: 1, y: kpi.y } : {}}
            transition={{ delay: 1 + i * 0.2 }}
          >
            <rect x={kpi.x} y={kpi.y} width={70} height={40} rx={6} fill={kpi.color} opacity={0.08} />
            <rect x={kpi.x} y={kpi.y} width={70} height={40} rx={6} fill="none" stroke={kpi.color} strokeWidth={0.5} opacity={0.3} />
            <text x={kpi.x + 35} y={kpi.y + 18} textAnchor="middle" className="text-[11px] font-bold" fill={kpi.color}>
              {kpi.value}
            </text>
            <text x={kpi.x + 35} y={kpi.y + 32} textAnchor="middle" className="text-[8px]" fill={kpi.color} opacity={0.7}>
              {kpi.label}
            </text>
          </motion.g>
        ))}

        {/* Animated scanning line */}
        {!reducedMotion && (
          <motion.line
            x1="10" y1="0" x2="390" y2="0"
            stroke="var(--color-brand)"
            strokeWidth="1"
            opacity={0.1}
            animate={{ y1: [40, 220, 40], y2: [40, 220, 40] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </svg>
    </div>
  )
}
