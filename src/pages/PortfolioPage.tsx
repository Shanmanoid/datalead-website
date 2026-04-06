import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CTABanner } from '@/components/sections/CTABanner'
import { ParticleField } from '@/components/visuals/backgrounds/ParticleField'
import { Database, ArrowRightLeft, Layers, BarChart3, Cloud } from 'lucide-react'
import { cn } from '@/utils/cn'

const categories = ['all', 'database', 'migration', 'platform', 'analytics']

const CATEGORY_VISUALS: Record<string, { icon: typeof Database; color: string }> = {
  database: { icon: Database, color: '#6366f1' },
  migration: { icon: ArrowRightLeft, color: '#f59e0b' },
  platform: { icon: Layers, color: '#10b981' },
  analytics: { icon: BarChart3, color: '#06b6d4' },
}

const projects = [
  { id: 'p1', titleKey: 'portfolio:projects.p1.title', descKey: 'portfolio:projects.p1.desc', category: 'database', techs: ['Oracle', 'PostgreSQL'] },
  { id: 'p2', titleKey: 'portfolio:projects.p2.title', descKey: 'portfolio:projects.p2.desc', category: 'migration', techs: ['Oracle', 'PostgreSQL', 'MS-SQL'] },
  { id: 'p3', titleKey: 'portfolio:projects.p3.title', descKey: 'portfolio:projects.p3.desc', category: 'platform', techs: ['IOMETE', 'Spark', 'dbt'] },
  { id: 'p4', titleKey: 'portfolio:projects.p4.title', descKey: 'portfolio:projects.p4.desc', category: 'analytics', techs: ['Power BI', 'Tableau'] },
  { id: 'p5', titleKey: 'portfolio:projects.p5.title', descKey: 'portfolio:projects.p5.desc', category: 'database', techs: ['MongoDB', 'Cassandra'] },
  { id: 'p6', titleKey: 'portfolio:projects.p6.title', descKey: 'portfolio:projects.p6.desc', category: 'platform', techs: ['IOMETE', 'Spark'] },
]

export default function PortfolioPage() {
  const { t } = useTranslation('portfolio')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-brand-dark to-brand overflow-hidden">
        <ParticleField particleCount={25} speed={0.15} className="opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('section.title')} subtitle={t('section.subtitle')} />

          {/* Filters */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer',
                  activeCategory === cat
                    ? 'bg-brand text-white shadow-md'
                    : 'bg-surface-alt text-text-secondary hover:bg-border'
                )}
              >
                {t(`filters.${cat}`)}
              </motion.button>
            ))}
          </div>

          {/* Projects with visual headers */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const visual = CATEGORY_VISUALS[project.category] || { icon: Cloud, color: '#64748b' }
                const Icon = visual.icon

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="rounded-2xl bg-surface-elevated border border-border hover:shadow-xl hover:border-brand/30 transition-all duration-300 h-full flex flex-col overflow-hidden">
                      {/* Visual header — 50% of card */}
                      <div
                        className="h-36 flex items-center justify-center relative"
                        style={{ background: `linear-gradient(135deg, ${visual.color}10, ${visual.color}20)` }}
                      >
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center"
                          style={{ backgroundColor: `${visual.color}15`, border: `1.5px solid ${visual.color}30` }}
                        >
                          <Icon size={32} color={visual.color} />
                        </div>
                        {/* Decorative dots */}
                        <div className="absolute inset-0 opacity-10">
                          <svg className="w-full h-full" aria-hidden="true">
                            <pattern id={`dots-${project.id}`} width="16" height="16" patternUnits="userSpaceOnUse">
                              <circle cx="8" cy="8" r="1" fill={visual.color} />
                            </pattern>
                            <rect width="100%" height="100%" fill={`url(#dots-${project.id})`} />
                          </svg>
                        </div>
                        <Badge variant="brand" className="absolute top-3 left-3">
                          {t(`filters.${project.category}`)}
                        </Badge>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-semibold text-text-primary mb-2">{t(project.titleKey)}</h3>
                        <p className="text-sm text-text-secondary flex-1 mb-4">{t(project.descKey)}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techs.map(tech => (
                            <span
                              key={tech}
                              className="text-xs px-2.5 py-1 rounded-full font-medium"
                              style={{ backgroundColor: `${visual.color}10`, color: visual.color }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

        </div>
      </section>

      <CTABanner />
    </>
  )
}
