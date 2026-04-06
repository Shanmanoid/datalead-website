import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/site'
import { StatCounter } from './StatCounter'
import { Clock, Users, FolderOpen, HeadphonesIcon } from 'lucide-react'

export function StatsBar() {
  const { t } = useTranslation('home')

  const stats = [
    { value: siteConfig.stats.yearsExperience, suffix: '+', label: t('stats.years'), icon: Clock, color: '#3b82f6' },
    { value: siteConfig.stats.clients, suffix: '+', label: t('stats.customers'), icon: Users, color: '#8b5cf6' },
    { value: siteConfig.stats.projects, suffix: '+', label: t('stats.projects'), icon: FolderOpen, color: '#10b981' },
    { value: 24, suffix: '/7', label: t('stats.support'), icon: HeadphonesIcon, color: '#f59e0b' },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-surface to-surface-alt border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map(stat => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
