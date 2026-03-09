import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { Shield, Brain, GitBranch, TrendingDown, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

const domains = [
  {
    key: 'missionCritical',
    icon: Shield,
    gradient: 'from-blue-500 to-indigo-600',
    anchor: 'mission-critical',
  },
  {
    key: 'aiPlatforms',
    icon: Brain,
    gradient: 'from-emerald-500 to-teal-600',
    anchor: 'ai-platforms',
  },
  {
    key: 'dataEngineering',
    icon: GitBranch,
    gradient: 'from-orange-500 to-amber-600',
    anchor: 'data-engineering',
  },
  {
    key: 'modernization',
    icon: TrendingDown,
    gradient: 'from-purple-500 to-violet-600',
    anchor: 'modernization',
  },
]

export function BusinessValuePreview() {
  const { t } = useTranslation('business-value')

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('preview.title')}
          subtitle={t('preview.subtitle')}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, i) => {
            const Icon = domain.icon
            return (
              <ScrollReveal key={domain.key} delay={i * 0.1} className="h-full">
                <Link to={`/business-value#${domain.anchor}`} className="block h-full">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group h-full p-6 rounded-2xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {t(`preview.domains.${domain.key}.title`)}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {t(`preview.domains.${domain.key}.desc`)}
                    </p>
                    <div className="mt-4 flex items-center text-brand text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="mr-1">{t('preview.explore')}</span>
                      <ArrowRight size={14} />
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to="/business-value">
            <Button variant="outline">
              {t('preview.explore')}
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
