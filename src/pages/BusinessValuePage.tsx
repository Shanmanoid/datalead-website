import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import {
  Shield, Brain, GitBranch, TrendingDown, ArrowRight,
  AlertTriangle, CheckCircle, ChevronRight, Users, Building2,
  Zap, Clock, Database, Server, BarChart3, Lock,
  Target, Eye, RefreshCw, ShieldCheck,
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router'

// --- Risk Reality Stats ---
function RiskStats() {
  const { t } = useTranslation('business-value')
  const stats = [
    { key: 'downtime', icon: Clock, color: 'text-red-500 bg-red-500/10' },
    { key: 'aiFail', icon: Brain, color: 'text-orange-500 bg-orange-500/10' },
    { key: 'cloudOverspend', icon: Server, color: 'text-amber-500 bg-amber-500/10' },
    { key: 'fines', icon: AlertTriangle, color: 'text-rose-500 bg-rose-500/10' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('riskReality.title')}
          subtitle={t('riskReality.subtitle')}
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <ScrollReveal key={stat.key} delay={i * 0.1} className="h-full">
                <div className="p-6 rounded-2xl bg-surface-elevated border border-border text-center h-full">
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-2xl font-bold text-brand mb-1">
                    {t(`riskReality.stats.${stat.key}.value`)}
                  </div>
                  <div className="text-xs font-medium text-text-secondary uppercase tracking-wide mb-2">
                    {t(`riskReality.stats.${stat.key}.unit`)}
                  </div>
                  <p className="text-sm text-text-secondary">
                    {t(`riskReality.stats.${stat.key}.label`)}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
        <ScrollReveal>
          <p className="mt-8 text-center text-lg font-semibold text-orange-500">
            {t('riskReality.conclusion')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

// --- Priorities ---
function Priorities() {
  const { t } = useTranslation('business-value')
  const items = [
    { key: 'regulatory', icon: Lock },
    { key: 'operational', icon: ShieldCheck },
    { key: 'continuity', icon: RefreshCw },
    { key: 'cost', icon: BarChart3 },
    { key: 'ai', icon: Brain },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('priorities.title')}
          subtitle={t('priorities.subtitle')}
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.key} delay={i * 0.08} className="h-full">
                <div className="p-5 rounded-2xl bg-surface-elevated border border-border text-center hover:border-brand/30 hover:shadow-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-1">
                    {t(`priorities.items.${item.key}.title`)}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {t(`priorities.items.${item.key}.desc`)}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// --- Resilience Framework ---
function ResilienceFramework() {
  const { t } = useTranslation('business-value')
  const steps = ['prevention', 'protection', 'preparedness', 'response', 'recovery', 'governance']
  const stepIcons = [Shield, Lock, Target, Zap, RefreshCw, Eye]
  const cycleSteps: string[] = t('framework.cycle.steps', { returnObjects: true }) as string[]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('framework.title')}
          subtitle={t('framework.subtitle')}
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <ScrollReveal key={step} delay={i * 0.08} className="h-full">
                <div className="p-4 rounded-2xl bg-surface-elevated border border-border text-center hover:border-brand/30 hover:shadow-md transition-all h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-1">
                    {t(`framework.steps.${step}.title`)}
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {t(`framework.steps.${step}.desc`)}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Continuous Cycle */}
        <ScrollReveal>
          <div className="mt-12">
            <h3 className="text-center text-sm font-semibold text-orange-500 uppercase tracking-wider mb-6">
              {t('framework.cycle.title')}
            </h3>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {cycleSteps.map((step: string, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="px-4 py-2 rounded-lg bg-brand/10 text-brand font-medium text-sm">
                    {step}
                  </span>
                  {i < cycleSteps.length - 1 && (
                    <ChevronRight size={16} className="text-text-muted" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// --- Domain Section ---
function DomainSection({ domainKey, anchor, icon: Icon, gradient }: {
  domainKey: string
  anchor: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  gradient: string
}) {
  const { t } = useTranslation('business-value')
  const deliverItems: string[] = t(`domains.${domainKey}.deliver.items`, { returnObjects: true }) as string[]
  const impactItems: string[] = t(`domains.${domainKey}.impact.items`, { returnObjects: true }) as string[]

  const hasPerformance = domainKey === 'missionCritical'

  return (
    <section id={anchor} className="py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Domain Header */}
        <ScrollReveal>
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
              <Icon size={24} className="text-white sm:hidden" />
              <Icon size={28} className="text-white hidden sm:block" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-primary">
                {t(`domains.${domainKey}.title`)}
              </h2>
              <p className="text-orange-500 font-medium mt-1">
                {t(`domains.${domainKey}.tagline`)}
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* What We Deliver */}
          <ScrollReveal delay={0.1}>
            <div className="p-6 rounded-2xl bg-surface-elevated border border-border h-full">
              <h3 className="text-lg font-bold text-text-primary mb-4">
                {t(`domains.${domainKey}.deliver.title`)}
              </h3>
              <ul className="space-y-3">
                {deliverItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <CheckCircle size={16} className="text-brand mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Performance Metrics or Why It Matters */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 rounded-2xl bg-surface-elevated border border-border h-full">
              {hasPerformance ? (
                <>
                  <h3 className="text-lg font-bold text-text-primary mb-4">
                    {t(`domains.${domainKey}.performance.title`)}
                  </h3>
                  <div className="space-y-4">
                    {['response', 'uptime', 'incidents', 'databases', 'data'].map(metric => (
                      <div key={metric}>
                        <div className="text-xl font-bold text-brand">
                          {t(`domains.${domainKey}.performance.metrics.${metric}.value`)}
                        </div>
                        <div className="text-xs text-text-secondary">
                          {t(`domains.${domainKey}.performance.metrics.${metric}.label`)}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-text-primary mb-4">
                    {t(`domains.${domainKey}.whyMatters.title`)}
                  </h3>
                  <ul className="space-y-3">
                    {(t(`domains.${domainKey}.whyMatters.items`, { returnObjects: true }) as string[]).map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </ScrollReveal>

          {/* Business Impact */}
          <ScrollReveal delay={0.3}>
            <div className="p-6 rounded-2xl bg-surface-elevated border border-border h-full">
              <h3 className="text-lg font-bold text-text-primary mb-4">
                {t(`domains.${domainKey}.impact.title`)}
              </h3>
              <ul className="space-y-3">
                {impactItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <ArrowRight size={16} className="text-orange-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Case Study */}
        <CaseStudy domainKey={domainKey} />
      </div>
    </section>
  )
}

// --- Case Study ---
function CaseStudy({ domainKey }: { domainKey: string }) {
  const { t } = useTranslation('business-value')
  const challengeItems: string[] = t(`domains.${domainKey}.caseStudy.challenge.items`, { returnObjects: true }) as string[]
  const interventionItems: string[] = t(`domains.${domainKey}.caseStudy.intervention.items`, { returnObjects: true }) as string[]
  const resultItems: string[] = t(`domains.${domainKey}.caseStudy.results.items`, { returnObjects: true }) as string[]

  return (
    <ScrollReveal>
      <div className="mt-10 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-surface-alt to-surface border border-border">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider">
            {t(`domains.${domainKey}.caseStudy.label`)}
          </span>
        </div>
        <p className="text-sm text-text-secondary mb-6 italic">
          {t(`domains.${domainKey}.caseStudy.context`)}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Challenge */}
          <div>
            <h4 className="text-base font-bold text-red-500 mb-3">
              {t(`domains.${domainKey}.caseStudy.challenge.title`)}
            </h4>
            <ul className="space-y-2">
              {challengeItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <AlertTriangle size={14} className="text-red-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-text-muted italic">
              {t(`domains.${domainKey}.caseStudy.challenge.summary`)}
            </p>
          </div>

          {/* Intervention */}
          <div>
            <h4 className="text-base font-bold text-brand mb-3">
              {t(`domains.${domainKey}.caseStudy.intervention.title`)}
            </h4>
            <ul className="space-y-2">
              {interventionItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle size={14} className="text-brand mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div>
            <h4 className="text-base font-bold text-emerald-500 mb-3">
              {t(`domains.${domainKey}.caseStudy.results.title`)}
            </h4>
            <ul className="space-y-2">
              {resultItems.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-center text-sm font-semibold text-orange-500">
          {t(`domains.${domainKey}.caseStudy.results.conclusion`)}
        </p>
      </div>
    </ScrollReveal>
  )
}

// --- Dell Case Study ---
function DellCaseStudy() {
  const { t } = useTranslation('business-value')
  const whyItems: string[] = t('dellCaseStudy.whyDataLead.items', { returnObjects: true }) as string[]
  const impactItems: string[] = t('dellCaseStudy.impact.items', { returnObjects: true }) as string[]

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('dellCaseStudy.title')}
          subtitle={t('dellCaseStudy.subtitle')}
        />
        <ScrollReveal>
          <div className="mt-10 p-6 md:p-8 rounded-2xl bg-surface-elevated border border-border">
            <p className="text-text-secondary mb-8">
              <span className="font-semibold text-text-primary">{t('dellCaseStudy.subtitle')}:</span>{' '}
              {t('dellCaseStudy.challenge')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-4">
                  {t('dellCaseStudy.whyDataLead.title')}
                </h3>
                <ul className="space-y-3">
                  {whyItems.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle size={16} className="text-brand mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text-primary mb-4">
                  {t('dellCaseStudy.impact.title')}
                </h3>
                <ul className="space-y-3">
                  {impactItems.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <CheckCircle size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// --- Comparison Table ---
function ComparisonTable() {
  const { t } = useTranslation('business-value')
  const rows = t('comparison.rows', { returnObjects: true }) as Array<{
    internalTitle: string; internalDesc: string; dataLeadTitle: string; dataLeadDesc: string
  }>

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('comparison.title')}
        />
        <ScrollReveal>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse min-w-[500px]">
              <thead>
                <tr>
                  <th className="p-3 sm:p-4 text-left text-xs sm:text-sm font-bold bg-gray-500/10 text-text-secondary rounded-tl-xl">
                    {t('comparison.colInternal')}
                  </th>
                  <th className="p-3 sm:p-4 text-left text-xs sm:text-sm font-bold bg-brand/10 text-brand rounded-tr-xl">
                    {t('comparison.colDataLead')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="p-3 sm:p-4 align-top">
                      <div className="text-xs sm:text-sm font-semibold text-text-secondary">{row.internalTitle}</div>
                      <div className="text-xs text-text-muted mt-1">{row.internalDesc}</div>
                    </td>
                    <td className="p-3 sm:p-4 align-top bg-brand/5">
                      <div className="text-xs sm:text-sm font-semibold text-brand">{row.dataLeadTitle}</div>
                      <div className="text-xs text-text-secondary mt-1">{row.dataLeadDesc}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// --- Why DataLead ---
function WhyDataLead() {
  const { t } = useTranslation('business-value')
  const pillars = [
    { key: 'team', icon: Users, gradient: 'from-blue-500 to-indigo-600' },
    { key: 'architecture', icon: Building2, gradient: 'from-emerald-500 to-teal-600' },
    { key: 'scale', icon: Database, gradient: 'from-orange-500 to-amber-600' },
    { key: 'expertise', icon: Shield, gradient: 'from-purple-500 to-violet-600' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('whyDataLead.title')}
          subtitle={t('whyDataLead.subtitle')}
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            const hasItems = pillar.key === 'team' || pillar.key === 'scale'
            return (
              <ScrollReveal key={pillar.key} delay={i * 0.1} className="h-full">
                <div className="p-6 rounded-2xl bg-surface-elevated border border-border h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-3">
                    {t(`whyDataLead.pillars.${pillar.key}.title`)}
                  </h3>
                  {hasItems ? (
                    <ul className="space-y-2">
                      {(t(`whyDataLead.pillars.${pillar.key}.items`, { returnObjects: true }) as string[]).map((item: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle size={14} className="text-brand mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-text-secondary">
                      {t(`whyDataLead.pillars.${pillar.key}.desc`)}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// --- Main Page ---
const domainConfigs = [
  { key: 'missionCritical', anchor: 'mission-critical', icon: Shield, gradient: 'from-blue-500 to-indigo-600' },
  { key: 'aiPlatforms', anchor: 'ai-platforms', icon: Brain, gradient: 'from-emerald-500 to-teal-600' },
  { key: 'dataEngineering', anchor: 'data-engineering', icon: GitBranch, gradient: 'from-orange-500 to-amber-600' },
  { key: 'modernization', anchor: 'modernization', icon: TrendingDown, gradient: 'from-purple-500 to-violet-600' },
]

export default function BusinessValuePage() {
  const { t } = useTranslation('business-value')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300)
      }
    }
  }, [location.hash])

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-orange-500/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-6"
              >
                {t('hero.badge')}
              </motion.span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                {t('hero.title')}{' '}
                <span className="text-brand">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="mt-6 text-lg text-text-secondary leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RiskStats />
      <Priorities />

      {/* Block B: Methodology */}
      <section className="pt-20 pb-4 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-4 uppercase tracking-wider">
                {t('methodology.title')}
              </span>
              <p className="text-text-secondary text-lg">
                {t('methodology.subtitle')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="bg-surface-alt">
        <ResilienceFramework />
      </div>

      {/* Block C: Capabilities */}
      <section className="pt-20 pb-8 bg-gradient-to-b from-surface-alt to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('domains.title')}
            subtitle={t('domains.subtitle')}
          />
        </div>
      </section>

      {/* Domain Sections */}
      {domainConfigs.map((config, i) => (
        <div key={config.key} className={i % 2 === 1 ? 'bg-gradient-to-b from-surface-alt to-surface' : ''}>
          <DomainSection
            domainKey={config.key}
            anchor={config.anchor}
            icon={config.icon}
            gradient={config.gradient}
          />
        </div>
      ))}

      <DellCaseStudy />
      <ComparisonTable />
      <WhyDataLead />

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand to-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-white/80 text-lg mb-8">
              {t('cta.subtitle')}
            </p>
            <Link to="/contact">
              <Button className="bg-white text-brand hover:bg-white/90 font-semibold px-8 py-3">
                {t('cta.button')}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
