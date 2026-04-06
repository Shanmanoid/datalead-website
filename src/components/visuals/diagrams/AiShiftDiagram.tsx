import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { BarChart3, Brain, Clock, Zap, Gauge, Activity } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LEFT_ITEMS = [
  { label: 'Query-based', icon: BarChart3 },
  { label: 'Bursty workloads', icon: Clock },
  { label: 'Dashboard focus', icon: Gauge },
]

const RIGHT_ITEMS = [
  { label: 'Continuous compute', icon: Brain },
  { label: 'Always-on models', icon: Activity },
  { label: 'Autonomous decisions', icon: Zap },
]

interface AiShiftDiagramProps {
  className?: string
}

export function AiShiftDiagram({ className }: AiShiftDiagramProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className={cn('w-full', className)}>
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-center">
        {/* Human-driven side */}
        <motion.div
          className="space-y-4"
          initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-right">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-500/10 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
              Traditional Analytics
            </span>
            <p className="text-sm text-text-muted mt-2">Human-Driven</p>
          </div>
          {LEFT_ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="flex items-center gap-3 md:flex-row-reverse p-3 rounded-xl bg-slate-500/5 border border-slate-500/10"
                initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-500/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-slate-500" />
                </div>
                <span className="text-sm font-medium text-text-secondary">{item.label}</span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Center divider with animated arrow */}
        <div className="hidden md:flex flex-col items-center gap-4 py-8">
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-slate-400 to-brand"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.div
            className="w-14 h-14 rounded-full bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center shadow-lg"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', delay: 0.7 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.div>
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-brand to-emerald-500"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          />
          {!reducedMotion && (
            <motion.div
              className="absolute w-3 h-3 rounded-full bg-brand"
              animate={{ opacity: [0, 1, 0], y: [-60, 60] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </div>

        {/* Mobile divider */}
        <div className="md:hidden flex justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-emerald-500 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>

        {/* AI-driven side */}
        <motion.div
          className="space-y-4"
          initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              AI Era
            </span>
            <p className="text-sm text-text-muted mt-2">Machine-Driven</p>
          </div>
          {RIGHT_ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10"
                initial={reducedMotion ? {} : { opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-emerald-500" />
                </div>
                <span className="text-sm font-medium text-text-secondary">{item.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
