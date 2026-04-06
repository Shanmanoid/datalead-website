import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Database, Cloud, Layers } from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const GENERATIONS = [
  {
    gen: 'Gen 1',
    era: '1980s',
    title: 'Data Warehouse',
    icon: Database,
    color: '#6366f1',
    traits: ['Structured data', 'SQL/BI', 'ACID'],
  },
  {
    gen: 'Gen 2',
    era: '2010s',
    title: 'Data Lake',
    icon: Cloud,
    color: '#06b6d4',
    traits: ['Unstructured', 'Schema-on-read', 'Scalable'],
  },
  {
    gen: 'Gen 3',
    era: '2020s',
    title: 'Data Lakehouse',
    icon: Layers,
    color: '#10b981',
    traits: ['Unified', 'AI-ready', 'Open formats'],
  },
]

interface PlatformEvolutionProps {
  className?: string
}

export function PlatformEvolution({ className }: PlatformEvolutionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className={cn('w-full', className)}>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 relative">
        {/* Connecting line (desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-[2px]">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          {/* Animated particles along line */}
          {!reducedMotion && (
            <motion.div
              className="absolute top-[-3px] w-2 h-2 rounded-full bg-brand"
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </div>

        {GENERATIONS.map((gen, i) => {
          const Icon = gen.icon
          return (
            <motion.div
              key={gen.gen}
              className="flex-1 relative z-10"
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.3 }}
            >
              <div className="bg-surface dark:bg-surface-elevated border border-border rounded-2xl p-6 mx-2 text-center hover:shadow-lg transition-shadow group">
                {/* Era badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white mb-4"
                  style={{ backgroundColor: gen.color }}
                >
                  {gen.gen} · {gen.era}
                </div>

                {/* Icon */}
                <div
                  className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${gen.color}15` }}
                >
                  <Icon size={32} color={gen.color} />
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-text-primary mb-3">
                  {gen.title}
                </h4>

                {/* Traits */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {gen.traits.map(trait => (
                    <span
                      key={trait}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: `${gen.color}10`,
                        color: gen.color,
                      }}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
