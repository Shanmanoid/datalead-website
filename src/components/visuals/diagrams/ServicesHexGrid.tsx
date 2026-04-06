import { motion, useInView } from 'motion/react'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import {
  Database, Server, Layers, HardDrive, ArrowRightLeft,
  GraduationCap, Shield, Brain, Cloud, GitBranch, BarChart3, BookOpen,
} from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string; color?: string }>> = {
  Database, Server, Layers, HardDrive, ArrowRightLeft,
  GraduationCap, Shield, Brain, Cloud, GitBranch, BarChart3, BookOpen,
}

interface ServiceItem {
  id: string
  iconName: string
  titleKey: string
  path: string
  category: 'database' | 'platform'
}

interface ServicesHexGridProps {
  services: ServiceItem[]
  className?: string
}

const CATEGORY_COLORS = {
  database: '#6366f1',
  platform: '#10b981',
}

export function ServicesHexGrid({ services, className }: ServicesHexGridProps) {
  const { t } = useTranslation('common')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })
  const reducedMotion = useReducedMotion()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div ref={ref} className={cn('w-full', className)}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service, i) => {
          const Icon = ICON_MAP[service.iconName] || Database
          const color = CATEGORY_COLORS[service.category]
          const isHovered = hoveredId === service.id

          return (
            <Link
              key={service.id}
              to={service.path}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="relative group"
                initial={reducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200, delay: i * 0.06 }}
              >
                {/* Hexagonal card */}
                <div
                  className={cn(
                    'relative overflow-hidden rounded-2xl border p-6 text-center transition-all duration-300',
                    'hover:shadow-xl hover:-translate-y-1',
                    isHovered ? 'border-opacity-60' : 'border-opacity-20'
                  )}
                  style={{
                    borderColor: color,
                    background: isHovered
                      ? `linear-gradient(135deg, ${color}08, ${color}15)`
                      : undefined,
                  }}
                >
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${color}15, transparent 70%)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className="relative w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    <Icon size={32} color={color} />
                    {/* Animated ring on hover */}
                    {!reducedMotion && isHovered && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{ border: `2px solid ${color}` }}
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ scale: 1.3, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="relative text-sm font-bold text-text-primary group-hover:text-brand transition-colors">
                    {t(service.titleKey)}
                  </h3>

                  {/* Category badge */}
                  <div
                    className="relative mt-3 inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    {service.category}
                  </div>
                </div>
              </motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
