import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface TechItem {
  name: string
  category: string
}

interface TechEcosystemProps {
  technologies: TechItem[]
  className?: string
}

const CATEGORY_COLORS: Record<string, string> = {
  'Databases': '#6366f1',
  'Platforms': '#10b981',
  'Analytics': '#f59e0b',
  'Security': '#ef4444',
  'DevOps': '#06b6d4',
  'Data Engineering': '#8b5cf6',
  'ML/AI': '#ec4899',
  'default': '#64748b',
}

export function TechEcosystem({ technologies, className }: TechEcosystemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const reducedMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Group by category
  const categories = Array.from(new Set(technologies.map(t => t.category)))

  const cx = 200
  const cy = 200

  return (
    <div ref={ref} className={cn('w-full', className)}>
      {/* Category legend */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer',
              activeCategory === cat
                ? 'text-white shadow-md scale-105'
                : activeCategory
                  ? 'opacity-40'
                  : 'opacity-80 hover:opacity-100'
            )}
            style={{
              backgroundColor: activeCategory === cat
                ? (CATEGORY_COLORS[cat] || CATEGORY_COLORS.default)
                : `${CATEGORY_COLORS[cat] || CATEGORY_COLORS.default}20`,
              color: activeCategory === cat
                ? 'white'
                : (CATEGORY_COLORS[cat] || CATEGORY_COLORS.default),
            }}
            onClick={() => setActiveCategory(prev => prev === cat ? null : cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Orbital visualization */}
      <svg viewBox="0 0 400 400" className="w-full max-w-[500px] mx-auto" role="img" aria-label="Technology ecosystem visualization">
        {/* Center node */}
        <motion.g
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <circle cx={cx} cy={cy} r={30} className="fill-brand/10 dark:fill-brand/20" />
          <circle cx={cx} cy={cy} r={30} fill="none" className="stroke-brand" strokeWidth={2} />
          <text x={cx} y={cy - 3} textAnchor="middle" className="fill-brand text-[9px] font-bold">
            DataLead
          </text>
          <text x={cx} y={cy + 8} textAnchor="middle" className="fill-brand text-[8px]">
            Stack
          </text>
        </motion.g>

        {/* Orbit rings */}
        {categories.map((cat, ringIndex) => {
          const ringRadius = 70 + ringIndex * 40
          const catTechs = technologies.filter(t => t.category === cat)
          const color = CATEGORY_COLORS[cat] || CATEGORY_COLORS.default
          const isActive = !activeCategory || activeCategory === cat

          return (
            <g key={cat}>
              {/* Ring */}
              <motion.circle
                cx={cx} cy={cy} r={ringRadius}
                fill="none"
                stroke={color}
                strokeWidth={isActive ? 1 : 0.5}
                strokeDasharray="3 6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: isActive ? 0.3 : 0.08 } : {}}
                transition={{ duration: 0.5 }}
              />

              {/* Tech nodes on ring */}
              {catTechs.map((tech, i) => {
                const angle = (i / catTechs.length) * Math.PI * 2 - Math.PI / 2
                const tx = cx + ringRadius * Math.cos(angle)
                const ty = cy + ringRadius * Math.sin(angle)

                return (
                  <motion.g
                    key={tech.name}
                    initial={reducedMotion ? {} : { scale: 0, opacity: 0 }}
                    animate={isInView ? {
                      scale: isActive ? 1 : 0.6,
                      opacity: isActive ? 1 : 0.2,
                    } : {}}
                    transition={{ type: 'spring', delay: 0.3 + (ringIndex * catTechs.length + i) * 0.05 }}
                  >
                    {/* Node background */}
                    <circle cx={tx} cy={ty} r={16} fill={color} opacity={0.12} />
                    <circle cx={tx} cy={ty} r={14} fill="none" stroke={color} strokeWidth={1} opacity={0.4} />
                    {/* Tech label */}
                    <text
                      x={tx} y={ty + 1}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-[7px] font-semibold"
                      fill={color}
                    >
                      {tech.name.length > 8 ? tech.name.slice(0, 7) + '..' : tech.name}
                    </text>
                  </motion.g>
                )
              })}
            </g>
          )
        })}
      </svg>
    </div>
  )
}
