import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import {
  Shield, Brain, GitBranch, TrendingDown, CheckCircle, ArrowRight,
  AlertTriangle, Clock, CloudOff, Gavel,
  BrainCircuit, Eye, MessageSquare, BarChart3
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Link } from 'react-router'
import { Button } from '@/components/ui/Button'
import { PillarsDiagram } from '@/components/visuals/diagrams/PillarsDiagram'
import { OperationalCycle } from '@/components/visuals/diagrams/OperationalCycle'
import { CaseStudyVisual } from '@/components/visuals/illustrations/CaseStudyVisual'

const domains = [
  { key: 'missionCritical', icon: Shield, gradient: 'from-blue-500 to-indigo-600' },
  { key: 'aiPlatforms', icon: Brain, gradient: 'from-emerald-500 to-teal-600' },
  { key: 'dataEngineering', icon: GitBranch, gradient: 'from-orange-500 to-amber-600' },
  { key: 'modernization', icon: TrendingDown, gradient: 'from-purple-500 to-violet-600' },
  { key: 'mlAi', icon: BrainCircuit, gradient: 'from-rose-500 to-pink-600' },
]

const aiDomainIcons = [Eye, MessageSquare, BarChart3]

const riskStats = [
  { key: 'downtime', icon: Clock, color: '#ef4444' },
  { key: 'aiFail', icon: AlertTriangle, color: '#f59e0b' },
  { key: 'cloudOverspend', icon: CloudOff, color: '#f97316' },
  { key: 'fines', icon: Gavel, color: '#e11d48' },
]

export function BusinessValuePreview() {
  const { t } = useTranslation('business-value')

  return (
    <>
      {/* Hero Section with Risk Stats */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold">
                {t('hero.badge')}
              </span>
            </div>
            <SectionHeading
              title={t('hero.title')}
              subtitle={t('hero.subtitle')}
            />
          </ScrollReveal>

          {/* Risk Reality — visual stat cards with pulsing rings */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {riskStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <ScrollReveal key={stat.key} delay={i * 0.1} className="h-full">
                  <div className="h-full flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-elevated border border-border hover:shadow-lg transition-all duration-300 text-center group">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <Icon size={24} color={stat.color} />
                    </div>
                    <div className="text-2xl font-bold text-text-primary mb-1">
                      {t(`riskReality.stats.${stat.key}.value`)}
                    </div>
                    <div className="text-sm font-medium text-text-secondary mb-1">
                      {t(`riskReality.stats.${stat.key}.unit`)}
                    </div>
                    <p className="text-xs text-text-muted">
                      {t(`riskReality.stats.${stat.key}.label`)}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Domain Cards — more visual, less text */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={t('domains.title')}
              subtitle={t('domains.subtitle')}
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {domains.map((domain, i) => {
              const Icon = domain.icon
              return (
                <ScrollReveal key={domain.key} delay={i * 0.08} className="h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group h-full rounded-2xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className={`h-24 bg-gradient-to-br ${domain.gradient} flex items-center justify-center`}>
                      <Icon size={36} className="text-white/80" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-text-primary mb-1 leading-tight">
                        {t(`domains.${domain.key}.title`)}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {t(`domains.${domain.key}.tagline`)}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-gradient-to-br from-brand-dark to-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-white text-center mb-2">
              {t('domains.missionCritical.performance.title')}
            </h3>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {(['response', 'uptime', 'incidents', 'databases', 'data'] as const).map((metric, i) => (
              <ScrollReveal key={metric} delay={i * 0.08} className="h-full">
                <div className="h-full flex flex-col items-center justify-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {t(`domains.missionCritical.performance.metrics.${metric}.value`)}
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    {t(`domains.missionCritical.performance.metrics.${metric}.label`)}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solution Domains */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={t('domains.mlAi.aiDomains.title')}
              subtitle={t('domains.mlAi.aiDomains.subtitle')}
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {(t('domains.mlAi.aiDomains.items', { returnObjects: true }) as Array<{ title: string; desc: string }>).map((item, i) => {
              const Icon = aiDomainIcons[i]
              return (
                <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                  <div className="h-full flex flex-col rounded-2xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="h-24 bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                      <Icon size={36} className="text-white/80" />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Six Pillars — Interactive Diagram */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={t('framework.title')}
              subtitle={t('framework.subtitle')}
            />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <PillarsDiagram />
            <OperationalCycle />
          </div>
        </div>
      </section>

      {/* Dell Case Study — Visual */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <CaseStudyVisual
                company="Dell Technologies"
                quote={t('dellCaseStudy.quote.text')}
                author={`${t('dellCaseStudy.quote.author')}, ${t('dellCaseStudy.quote.company')}`}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why DataLead */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={t('whyDataLead.title')}
              subtitle={t('whyDataLead.subtitle')}
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(['team', 'architecture', 'scale', 'expertise'] as const).map((key, i) => (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="p-5 rounded-xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-md transition-all duration-300 h-full">
                  <h4 className="font-semibold text-text-primary mb-3 text-sm">
                    {t(`whyDataLead.pillars.${key}.title`)}
                  </h4>
                  {'desc' in (t(`whyDataLead.pillars.${key}`, { returnObjects: true }) as Record<string, unknown>) ? (
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {t(`whyDataLead.pillars.${key}.desc`)}
                    </p>
                  ) : (
                    <ul className="space-y-1.5">
                      {(t(`whyDataLead.pillars.${key}.items`, { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle size={10} className="mt-0.5 shrink-0 text-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button>
                  {t('cta.button')}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
