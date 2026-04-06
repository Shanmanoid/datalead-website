import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Check, X, Minus } from 'lucide-react'
import { cn } from '@/utils/cn'

interface Feature {
  name: string
  warehouse: 'full' | 'partial' | 'none'
  lake: 'full' | 'partial' | 'none'
  lakehouse: 'full' | 'partial' | 'none'
}

const FEATURES: Feature[] = [
  { name: 'ACID Transactions', warehouse: 'full', lake: 'none', lakehouse: 'full' },
  { name: 'Unstructured Data', warehouse: 'none', lake: 'full', lakehouse: 'full' },
  { name: 'Cost-Effective Scale', warehouse: 'none', lake: 'full', lakehouse: 'full' },
  { name: 'BI & SQL Performance', warehouse: 'full', lake: 'partial', lakehouse: 'full' },
  { name: 'ML/AI Native', warehouse: 'none', lake: 'partial', lakehouse: 'full' },
  { name: 'Data Governance', warehouse: 'full', lake: 'none', lakehouse: 'full' },
  { name: 'Real-time Streaming', warehouse: 'none', lake: 'partial', lakehouse: 'full' },
  { name: 'Time Travel', warehouse: 'none', lake: 'none', lakehouse: 'full' },
]

const PLATFORMS = [
  { key: 'warehouse', label: 'Data Warehouse', color: '#6366f1' },
  { key: 'lake', label: 'Data Lake', color: '#06b6d4' },
  { key: 'lakehouse', label: 'Data Lakehouse', color: '#10b981' },
] as const

function StatusIcon({ status, color }: { status: 'full' | 'partial' | 'none'; color: string }) {
  if (status === 'full') return <Check size={18} color={color} strokeWidth={3} />
  if (status === 'partial') return <Minus size={18} className="text-text-muted" />
  return <X size={18} className="text-text-muted/40" />
}

interface ComparisonChartProps {
  className?: string
}

export function ComparisonChart({ className }: ComparisonChartProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className={cn('w-full overflow-x-auto', className)}>
      <div className="min-w-[500px]">
        {/* Header */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="text-sm font-medium text-text-muted">Feature</div>
          {PLATFORMS.map(p => (
            <div key={p.key} className="text-center">
              <span
                className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold text-white"
                style={{ backgroundColor: p.color }}
              >
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* Rows */}
        {FEATURES.map((feature, i) => (
          <motion.div
            key={feature.name}
            className="grid grid-cols-4 gap-2 py-3 border-b border-border/50 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="text-sm font-medium text-text-primary">
              {feature.name}
            </div>
            {PLATFORMS.map(p => (
              <div key={p.key} className="flex justify-center">
                <StatusIcon status={feature[p.key]} color={p.color} />
              </div>
            ))}
          </motion.div>
        ))}

        {/* Score bar */}
        <div className="grid grid-cols-4 gap-2 mt-6">
          <div className="text-sm font-bold text-text-primary">Score</div>
          {PLATFORMS.map(p => {
            const score = FEATURES.reduce((acc, f) => {
              if (f[p.key] === 'full') return acc + 1
              if (f[p.key] === 'partial') return acc + 0.5
              return acc
            }, 0)
            const percentage = (score / FEATURES.length) * 100

            return (
              <div key={p.key} className="flex flex-col items-center gap-2">
                <div className="w-full h-2.5 rounded-full bg-border/30 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: p.color }}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <span className="text-xs font-bold" style={{ color: p.color }}>
                  {score}/{FEATURES.length}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
