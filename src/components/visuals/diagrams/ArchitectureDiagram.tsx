import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LAYERS = [
  {
    label: 'Data Sources',
    items: ['RDBMS', 'APIs', 'IoT', 'Files', 'Streams'],
    color: '#6366f1',
    y: 0,
  },
  {
    label: 'Ingestion',
    items: ['Kafka', 'Spark', 'Airflow', 'DMS'],
    color: '#8b5cf6',
    y: 1,
  },
  {
    label: 'Storage',
    items: ['Data Lake', 'Iceberg', 'Delta', 'Object Store'],
    color: '#06b6d4',
    y: 2,
  },
  {
    label: 'Processing',
    items: ['Spark', 'dbt', 'SQL Engine', 'ML Runtime'],
    color: '#10b981',
    y: 3,
  },
  {
    label: 'Serving',
    items: ['BI', 'APIs', 'Dashboards', 'AI Models'],
    color: '#f59e0b',
    y: 4,
  },
]

interface ArchitectureDiagramProps {
  className?: string
}

export function ArchitectureDiagram({ className }: ArchitectureDiagramProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className={cn('w-full', className)}>
      <div className="flex flex-col gap-3">
        {LAYERS.map((layer, i) => (
          <motion.div
            key={layer.label}
            className="relative"
            initial={reducedMotion ? {} : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div
              className="flex items-center gap-4 p-4 rounded-xl border transition-shadow hover:shadow-md"
              style={{
                borderColor: `${layer.color}30`,
                backgroundColor: `${layer.color}05`,
              }}
            >
              {/* Layer label */}
              <div
                className="shrink-0 w-24 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: layer.color }}
              >
                {layer.label}
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item, j) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1.5 rounded-md text-xs font-medium"
                    style={{
                      backgroundColor: `${layer.color}12`,
                      color: layer.color,
                    }}
                    initial={reducedMotion ? {} : { scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: 'spring', delay: 0.3 + i * 0.15 + j * 0.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Flow arrow */}
              {i < LAYERS.length - 1 && (
                <div className="absolute -bottom-3 left-14 z-10">
                  <motion.div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: layer.color }}
                    animate={!reducedMotion ? { y: [0, 3, 0] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                      <path d="M 2 3 L 5 7 L 8 3" strokeWidth="1.5" stroke="white" fill="none" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
