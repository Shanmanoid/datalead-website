import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, Compass, Wrench, HeadphonesIcon, BarChart3, ArrowRight } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const STEPS = [
  { key: 'assessment', label: 'Assessment', icon: Search, color: '#3b82f6' },
  { key: 'design', label: 'Design', icon: Compass, color: '#8b5cf6' },
  { key: 'implementation', label: 'Implementation', icon: Wrench, color: '#06b6d4' },
  { key: 'operations', label: 'Operations', icon: HeadphonesIcon, color: '#f59e0b' },
  { key: 'monitoring', label: 'Monitoring', icon: BarChart3, color: '#10b981' },
]

interface EngagementFlowProps {
  className?: string
}

export function EngagementFlow({ className }: EngagementFlowProps) {
  const { t } = useTranslation('business-value')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className={cn('w-full', className)}>
      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-center justify-between gap-2">
        {STEPS.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.key} className="flex items-center gap-2 flex-1">
              <motion.div
                className="flex flex-col items-center gap-3 flex-1"
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {/* Number */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: step.color }}
                >
                  {i + 1}
                </div>
                {/* Icon box */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform hover:scale-110"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <Icon size={28} color={step.color} />
                </div>
                {/* Label */}
                <span className="text-xs font-semibold text-text-secondary text-center leading-tight">
                  {step.label}
                </span>
              </motion.div>

              {/* Arrow connector */}
              {i < STEPS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.4, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  <ArrowRight size={20} className="text-text-muted shrink-0" />
                </motion.div>
              )}
            </div>
          )
        })}
      </div>

      {/* Mobile: vertical flow */}
      <div className="md:hidden flex flex-col gap-4">
        {STEPS.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.key}
              className="flex items-center gap-4"
              initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                style={{ backgroundColor: step.color }}
              >
                {i + 1}
              </div>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${step.color}15` }}
              >
                <Icon size={24} color={step.color} />
              </div>
              <span className="text-sm font-medium text-text-primary">
                {t(`engagement.steps.${step.key}`, step.key)}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
