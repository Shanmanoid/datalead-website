import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { AlertTriangle, CheckCircle, TrendingUp, DollarSign } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Metric {
  label: string
  before: string
  after: string
}

interface CaseStudyVisualProps {
  company?: string
  metrics?: Metric[]
  quote?: string
  author?: string
  className?: string
}

const DEFAULT_METRICS: Metric[] = [
  { label: 'Annual Cost', before: '$12M+', after: '$4M' },
  { label: 'Delivery Speed', before: '1x', after: '3x faster' },
  { label: 'Data Downtime', before: '120h/yr', after: '<4h/yr' },
  { label: 'Platform Coverage', before: '40%', after: '95%' },
]

export function CaseStudyVisual({
  company = 'Dell Technologies',
  metrics = DEFAULT_METRICS,
  quote,
  author,
  className,
}: CaseStudyVisualProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className={cn('w-full', className)}>
      {/* Company header */}
      <motion.div
        className="text-center mb-8"
        initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/20 text-brand text-sm font-bold">
          <TrendingUp size={16} />
          {company} Case Study
        </span>
      </motion.div>

      {/* Before / After grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Before */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/5 p-6"
          initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={20} className="text-red-500" />
            <span className="text-sm font-bold text-red-500 uppercase tracking-wider">Before</span>
          </div>
          <div className="space-y-3">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="flex justify-between items-center py-2 border-b border-red-500/10 last:border-0"
                initial={reducedMotion ? {} : { opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <span className="text-xs text-text-muted">{m.label}</span>
                <span className="text-sm font-bold text-red-500">{m.before}</span>
              </motion.div>
            ))}
          </div>
          {/* Background decoration */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-red-500/5" />
        </motion.div>

        {/* After */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6"
          initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={20} className="text-emerald-500" />
            <span className="text-sm font-bold text-emerald-500 uppercase tracking-wider">After DataLead</span>
          </div>
          <div className="space-y-3">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="flex justify-between items-center py-2 border-b border-emerald-500/10 last:border-0"
                initial={reducedMotion ? {} : { opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <span className="text-xs text-text-muted">{m.label}</span>
                <span className="text-sm font-bold text-emerald-500">{m.after}</span>
              </motion.div>
            ))}
          </div>
          {/* Background decoration */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-emerald-500/5" />
        </motion.div>
      </div>

      {/* Quote */}
      {quote && (
        <motion.blockquote
          className="relative bg-surface-alt dark:bg-surface-elevated rounded-2xl p-6 border border-border/50"
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <DollarSign size={32} className="text-brand/10 absolute top-4 right-4" />
          <p className="text-sm text-text-secondary italic leading-relaxed">
            "{quote}"
          </p>
          {author && (
            <p className="mt-3 text-xs font-semibold text-text-muted">
              — {author}
            </p>
          )}
        </motion.blockquote>
      )}
    </div>
  )
}
