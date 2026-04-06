import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface DataFlowIllustrationProps {
  className?: string
}

export function DataFlowIllustration({ className }: DataFlowIllustrationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  const nodes = [
    { cx: 60, cy: 60, label: 'Source', color: '#3b82f6' },
    { cx: 170, cy: 40, label: 'Ingest', color: '#8b5cf6' },
    { cx: 280, cy: 60, label: 'Process', color: '#06b6d4' },
    { cx: 370, cy: 40, label: 'Serve', color: '#10b981' },
  ]

  // Curved connections between nodes (below the nodes)
  const connections = [
    { from: nodes[0], to: nodes[1], color: '#3b82f6' },
    { from: nodes[1], to: nodes[2], color: '#8b5cf6' },
    { from: nodes[2], to: nodes[3], color: '#06b6d4' },
  ]

  return (
    <div ref={ref} className={cn('w-full', className)}>
      <svg viewBox="0 0 430 140" className="w-full max-w-md mx-auto" role="img" aria-label="Data flow illustration">
        {/* Connection paths */}
        {connections.map((conn, i) => {
          const midX = (conn.from.cx + conn.to.cx) / 2
          const midY = Math.max(conn.from.cy, conn.to.cy) + 25
          const d = `M ${conn.from.cx} ${conn.from.cy} Q ${midX} ${midY} ${conn.to.cx} ${conn.to.cy}`

          return (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke={conn.color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
              transition={{ duration: 1, delay: i * 0.3, ease: 'easeInOut' }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.label}
            initial={reducedMotion ? {} : { scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: 'spring', delay: 0.3 + i * 0.2 }}
          >
            {/* Outer glow */}
            <circle cx={node.cx} cy={node.cy} r={22} fill={node.color} opacity={0.08} />
            {/* Ring */}
            <circle cx={node.cx} cy={node.cy} r={18} fill="none" stroke={node.color} strokeWidth={1.5} opacity={0.4} />
            {/* Inner dot */}
            <circle cx={node.cx} cy={node.cy} r={7} fill={node.color} opacity={0.7} />
            <circle cx={node.cx} cy={node.cy} r={3} fill="white" opacity={0.9} />
            {/* Label below */}
            <text
              x={node.cx} y={node.cy + 34}
              textAnchor="middle"
              className="text-[11px] font-semibold"
              fill={node.color}
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Animated flowing dots */}
        {!reducedMotion && connections.map((conn, i) => {
          const midX = (conn.from.cx + conn.to.cx) / 2
          const midY = Math.max(conn.from.cy, conn.to.cy) + 25
          const d = `M ${conn.from.cx} ${conn.from.cy} Q ${midX} ${midY} ${conn.to.cx} ${conn.to.cy}`
          return (
            <motion.circle
              key={`dot-${i}`}
              r={3}
              fill={conn.color}
              style={{ offsetPath: `path("${d}")` } as React.CSSProperties}
              initial={{ offsetDistance: '0%', opacity: 0 }}
              animate={isInView ? { offsetDistance: ['0%', '100%'], opacity: [0, 0.8, 0] } : {}}
              transition={{ duration: 2, delay: 1 + i * 0.5, repeat: Infinity, ease: 'linear' }}
            />
          )
        })}
      </svg>
    </div>
  )
}
