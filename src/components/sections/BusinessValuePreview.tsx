import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import {
  Shield, Brain, GitBranch, TrendingDown, CheckCircle, ArrowRight,
  AlertTriangle, Clock, CloudOff, Gavel, ChevronRight, X, Check
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Link } from 'react-router'
import { Button } from '@/components/ui/Button'

const domains = [
  { key: 'missionCritical', icon: Shield, gradient: 'from-blue-500 to-indigo-600' },
  { key: 'aiPlatforms', icon: Brain, gradient: 'from-emerald-500 to-teal-600' },
  { key: 'dataEngineering', icon: GitBranch, gradient: 'from-orange-500 to-amber-600' },
  { key: 'modernization', icon: TrendingDown, gradient: 'from-purple-500 to-violet-600' },
]

const riskStats = [
  { key: 'downtime', icon: Clock, color: 'text-red-500', bg: 'bg-red-500/10' },
  { key: 'aiFail', icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { key: 'cloudOverspend', icon: CloudOff, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  { key: 'fines', icon: Gavel, color: 'text-rose-500', bg: 'bg-rose-500/10' },
]

const pillars = ['prevention', 'protection', 'preparedness', 'response', 'recovery', 'governance']

export function BusinessValuePreview() {
  const { t } = useTranslation('business-value')

  return (
    <>
      {/* Hero Section */}
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

          {/* Risk Reality Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {riskStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <ScrollReveal key={stat.key} delay={i * 0.1} className="h-full">
                  <div className="h-full flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-elevated border border-border hover:border-red-500/20 transition-all duration-300 text-center">
                    <div className={`w-10 h-10 rounded-full ${stat.bg} flex items-center justify-center mb-3`}>
                      <Icon size={20} className={stat.color} />
                    </div>
                    <div className="text-2xl font-bold text-text-primary mb-1">
                      {t(`riskReality.stats.${stat.key}.value`)}
                    </div>
                    {t(`riskReality.stats.${stat.key}.unit`) && (
                      <div className="text-sm font-medium text-text-secondary mb-2">
                        {t(`riskReality.stats.${stat.key}.unit`)}
                      </div>
                    )}
                    <p className="text-xs text-text-muted mt-auto">
                      {t(`riskReality.stats.${stat.key}.label`)}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
          <ScrollReveal>
            <p className="mt-6 text-center text-sm font-semibold text-red-500/80">
              {t('riskReality.conclusion')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Domain Cards — Expanded */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={t('domains.title')}
              subtitle={t('domains.subtitle')}
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {domains.map((domain, i) => {
              const Icon = domain.icon
              const deliverItems = t(`domains.${domain.key}.deliver.items`, { returnObjects: true }) as string[]
              const impactItems = t(`domains.${domain.key}.impact.items`, { returnObjects: true }) as string[]
              return (
                <ScrollReveal key={domain.key} delay={i * 0.1} className="h-full">
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="group h-full flex flex-col p-6 rounded-2xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.gradient} flex items-center justify-center shrink-0`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-primary">
                          {t(`domains.${domain.key}.title`)}
                        </h3>
                        <p className="text-sm text-text-secondary mt-1">
                          {t(`domains.${domain.key}.tagline`)}
                        </p>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="mb-4 flex-1">
                      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        {t(`domains.${domain.key}.deliver.title`)}
                      </h4>
                      <div className="space-y-1.5">
                        {deliverItems.slice(0, 4).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                            <ChevronRight size={14} className="mt-0.5 shrink-0 text-brand" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Impact */}
                    <div className="pt-4 border-t border-border mt-auto">
                      <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                        {t(`domains.${domain.key}.impact.title`)}
                      </h4>
                      <div className="space-y-1.5">
                        {impactItems.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                            <CheckCircle size={12} className="mt-0.5 shrink-0 text-brand" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Operational Performance Metrics (Mission-Critical) */}
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

      {/* Case Studies Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={t('domains.missionCritical.caseStudy.label')}
              subtitle=""
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {domains.map((domain, i) => {
              const resultItems = t(`domains.${domain.key}.caseStudy.results.items`, { returnObjects: true }) as string[]
              const Icon = domain.icon
              return (
                <ScrollReveal key={domain.key} delay={i * 0.1} className="h-full">
                  <div className="h-full flex flex-col p-6 rounded-2xl bg-surface-elevated border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${domain.gradient} flex items-center justify-center shrink-0`}>
                        <Icon size={16} className="text-white" />
                      </div>
                      <h4 className="font-semibold text-text-primary text-sm">
                        {t(`domains.${domain.key}.title`)}
                      </h4>
                    </div>
                    <p className="text-xs text-text-muted mb-3 italic">
                      {t(`domains.${domain.key}.caseStudy.context`)}
                    </p>
                    <div className="space-y-2 flex-1">
                      {resultItems.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle size={14} className="mt-0.5 shrink-0 text-green-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-text-muted font-medium">
                      {t(`domains.${domain.key}.caseStudy.results.conclusion`)}
                    </p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Six Pillars of Resilience + Operational Cycle */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={t('framework.title')}
              subtitle={t('framework.subtitle')}
            />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar} delay={i * 0.08} className="h-full">
                <div className="h-full flex flex-col items-center text-center p-4 rounded-xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center mb-3">
                    <span className="text-brand font-bold text-sm">{i + 1}</span>
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm mb-1">
                    {t(`framework.steps.${pillar}.title`)}
                  </h4>
                  <p className="text-xs text-text-secondary mt-auto">
                    {t(`framework.steps.${pillar}.desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Operational Cycle */}
          <ScrollReveal>
            <div className="mt-12">
              <h4 className="text-lg font-bold text-text-primary text-center mb-6">
                {t('framework.cycle.title')}
              </h4>
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                {(t('framework.cycle.steps', { returnObjects: true }) as string[]).map((step, i, arr) => (
                  <div key={i} className="flex items-center gap-2 md:gap-4">
                    <div className="px-5 py-2.5 rounded-xl bg-brand/10 text-brand font-semibold text-sm border border-brand/20">
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <ArrowRight size={18} className="text-brand/50" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dell Case Study */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-surface-elevated border border-border shadow-sm">
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-3">
                  {t('dellCaseStudy.title')}
                </span>
                <h3 className="text-xl font-bold text-text-primary">
                  {t('dellCaseStudy.subtitle')}
                </h3>
              </div>

              <p className="text-sm text-text-secondary text-center mb-6">
                {t('dellCaseStudy.challenge')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text-primary text-sm mb-3">
                    {t('dellCaseStudy.whyDataLead.title')}
                  </h4>
                  <div className="space-y-2">
                    {(t('dellCaseStudy.whyDataLead.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-brand" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm mb-3">
                    {t('dellCaseStudy.impact.title')}
                  </h4>
                  <div className="space-y-2">
                    {(t('dellCaseStudy.impact.items', { returnObjects: true }) as string[]).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              title={t('comparison.title')}
              subtitle=""
            />
          </ScrollReveal>

          <div className="mt-12 max-w-5xl mx-auto">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-2 gap-4 mb-4">
              <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/10 text-center">
                <span className="text-sm font-semibold text-red-500/80">{t('comparison.colInternal')}</span>
              </div>
              <div className="p-3 rounded-xl bg-brand/5 border border-brand/10 text-center">
                <span className="text-sm font-semibold text-brand">{t('comparison.colDataLead')}</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-3">
              {(t('comparison.rows', { returnObjects: true }) as Array<{
                internalTitle: string; internalDesc: string;
                dataLeadTitle: string; dataLeadDesc: string;
              }>).map((row, i) => (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-surface-elevated border border-border h-full">
                      <div className="flex items-start gap-2 h-full">
                        <X size={16} className="mt-0.5 shrink-0 text-red-400" />
                        <div>
                          <h5 className="text-sm font-semibold text-text-primary">{row.internalTitle}</h5>
                          <p className="text-xs text-text-muted mt-1">{row.internalDesc}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-brand/5 border border-brand/10 h-full">
                      <div className="flex items-start gap-2 h-full">
                        <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                        <div>
                          <h5 className="text-sm font-semibold text-text-primary">{row.dataLeadTitle}</h5>
                          <p className="text-xs text-text-muted mt-1">{row.dataLeadDesc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
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

          {/* CTA */}
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
