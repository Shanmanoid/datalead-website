import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { CheckCircle } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface Step {
  title: string
  description?: string
}

interface ProcessFlowProps {
  steps: Step[]
  color?: string
  className?: string
}

export function ProcessFlow({
  steps,
  color = '#3b82f6',
  className,
}: ProcessFlowProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className={cn('w-full', className)}>
      {/* Desktop: horizontal */}
      <div className="hidden md:grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(steps.length, 4)}, 1fr)` }}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl border border-border/50 bg-surface-alt/50 dark:bg-surface-elevated/50 hover:shadow-md transition-shadow">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: color }}
              >
                <CheckCircle size={20} />
              </div>
              <h4 className="text-sm font-semibold text-text-primary">{step.title}</h4>
              {step.description && (
                <p className="text-xs text-text-muted leading-relaxed">{step.description}</p>
              )}
            </div>
            {/* Connector */}
            {i < steps.length - 1 && (
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                <motion.div
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${color}30` }}
                  animate={!reducedMotion ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile: vertical */}
      <div className="md:hidden space-y-3">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-4"
            initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: color }}
              >
                {i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px h-8 mt-1" style={{ backgroundColor: `${color}30` }} />
              )}
            </div>
            <div className="pb-3">
              <h4 className="text-sm font-semibold text-text-primary">{step.title}</h4>
              {step.description && (
                <p className="text-xs text-text-muted mt-1">{step.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
