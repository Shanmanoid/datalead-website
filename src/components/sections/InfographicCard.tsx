import { motion } from 'motion/react'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import {
  Database, Server, Layers, HardDrive, ArrowRightLeft,
  GraduationCap, Shield, Brain, Cloud, GitBranch, BarChart3, BookOpen,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  Database, Server, Layers, HardDrive, ArrowRightLeft,
  GraduationCap, Shield, Brain, Cloud, GitBranch, BarChart3, BookOpen,
}

const CATEGORY_COLORS = {
  database: { primary: '#6366f1', bg: '#6366f110' },
  platform: { primary: '#10b981', bg: '#10b98110' },
}

interface InfographicCardProps {
  iconName: string
  titleKey: string
  descriptionKey: string
  path: string
  category: 'database' | 'platform'
  index: number
  className?: string
}

export function InfographicCard({
  iconName,
  titleKey,
  descriptionKey,
  path,
  category,
  index,
  className,
}: InfographicCardProps) {
  const { t } = useTranslation('common')
  const reducedMotion = useReducedMotion()
  const Icon = ICON_MAP[iconName] || Database
  const colors = CATEGORY_COLORS[category]

  return (
    <Link to={path}>
      <motion.div
        className={cn(
          'group relative overflow-hidden rounded-2xl border border-border/50 bg-surface dark:bg-surface-elevated',
          'hover:shadow-xl hover:border-brand/20 transition-all duration-300 h-full',
          className
        )}
        initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover={reducedMotion ? {} : { y: -4 }}
      >
        {/* Visual area - 60% */}
        <div
          className="relative h-40 flex items-center justify-center overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${colors.bg}, transparent)` }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0">
            <svg className="w-full h-full opacity-10" aria-hidden="true">
              <pattern id={`card-grid-${iconName}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill={colors.primary} />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#card-grid-${iconName})`} />
            </svg>
          </div>

          {/* Main icon with animation */}
          <div className="relative">
            <motion.div
              className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ backgroundColor: `${colors.primary}15`, border: `1.5px solid ${colors.primary}30` }}
              whileHover={reducedMotion ? {} : { scale: 1.1, rotate: 3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon size={40} color={colors.primary} />
            </motion.div>

            {/* Decorative orbs */}
            <div
              className="absolute -top-3 -right-3 w-6 h-6 rounded-full opacity-30 group-hover:opacity-60 transition-opacity"
              style={{ backgroundColor: colors.primary }}
            />
            <div
              className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full opacity-20 group-hover:opacity-50 transition-opacity"
              style={{ backgroundColor: colors.primary }}
            />
          </div>

          {/* Category badge */}
          <div className="absolute top-3 right-3">
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: colors.primary }}
            >
              {category}
            </span>
          </div>
        </div>

        {/* Text area - 40% */}
        <div className="p-5">
          <h3 className="text-base font-bold text-text-primary group-hover:text-brand transition-colors mb-2">
            {t(titleKey)}
          </h3>
          <p className="text-sm text-text-muted line-clamp-2 mb-3">
            {t(descriptionKey)}
          </p>
          <div className="flex items-center gap-1 text-brand text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            {t('services.learnMore', 'Learn More')}
            <ArrowRight size={14} />
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
