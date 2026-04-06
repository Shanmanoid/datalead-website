import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface TimelineEvent {
  year: string
  title: string
  description: string
  icon: LucideIcon
  color?: string
}

interface InteractiveTimelineProps {
  events: TimelineEvent[]
  className?: string
}

export function InteractiveTimeline({ events, className }: InteractiveTimelineProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className={cn('relative', className)}>
      {/* Animated vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
        <motion.div
          className="w-full h-full bg-gradient-to-b from-brand via-brand-light to-brand-dark"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </div>

      <div className="space-y-12">
        {events.map((event, i) => {
          const Icon = event.icon
          const color = event.color || '#3b82f6'
          const isLeft = i % 2 === 0

          return (
            <motion.div
              key={i}
              className={cn(
                'relative flex items-start gap-6',
                'md:gap-0',
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              )}
              initial={reducedMotion ? {} : {
                opacity: 0,
                x: isLeft ? -30 : 30,
              }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
            >
              {/* Node on timeline */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: color, border: '3px solid var(--color-surface)' }}
                  initial={reducedMotion ? {} : { scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', delay: 0.5 + i * 0.2 }}
                >
                  <Icon size={20} color="white" />
                </motion.div>
              </div>

              {/* Content card */}
              <div className={cn(
                'ml-16 md:ml-0 md:w-[calc(50%-40px)]',
                isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              )}>
                <div className="bg-surface dark:bg-surface-elevated rounded-xl p-5 border border-border/50 hover:shadow-lg transition-shadow">
                  {/* Year badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3"
                    style={{ backgroundColor: color }}
                  >
                    {event.year}
                  </span>
                  <h4 className="text-base font-bold text-text-primary mb-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
