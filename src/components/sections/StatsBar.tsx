import { useTranslation } from 'react-i18next'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/site'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, count } = useAnimatedCounter(value)

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-brand">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-text-secondary mt-1 font-medium">{label}</div>
    </div>
  )
}

export function StatsBar() {
  const { t } = useTranslation('home')

  const stats = [
    { value: siteConfig.stats.yearsExperience, suffix: '+', label: t('stats.years') },
    { value: siteConfig.stats.clients, suffix: '+', label: t('stats.clients') },
    { value: siteConfig.stats.projects, suffix: '+', label: t('stats.projects') },
    { value: 24, suffix: '/7', label: t('stats.support') },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-surface to-surface-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
