import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTABanner } from '@/components/sections/CTABanner'
import { GridPattern } from '@/components/visuals/backgrounds/GridPattern'
import { Building2, Landmark, Briefcase, Banknote, Radio, Globe, Factory, Brain } from 'lucide-react'
import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'
import { publicPath } from '@/utils/publicPath'

interface ClientEntry {
  name: string
  logo: string
}

const clientGroups: {
  titleKey: string
  icon: LucideIcon
  gradient: string
  clients: ClientEntry[]
}[] = [
  {
    titleKey: 'clients:sectors.government',
    icon: Landmark,
    gradient: 'from-blue-500 to-indigo-600',
    clients: [
      { name: 'Ministry of Economy', logo: '/images/clients/iqtisadiyyat.png' },
      { name: 'State Tax Service', logo: '/images/clients/dvx.png' },
      { name: 'State Customs Committee', logo: '/images/clients/dgk.png' },
      { name: 'Ministry of Education', logo: '/images/clients/tehsil.png' },
      { name: 'State Property Committee', logo: '/images/clients/emlak.png' },
      { name: 'Ministry of Health', logo: '/images/clients/healt.png' },
      { name: 'AZAL', logo: '/images/clients/azal.png' },
      { name: 'ADSEA', logo: '/images/clients/adsea.png' },
      { name: 'State Exam Center', logo: '/images/clients/dim.svg' },
      { name: 'AQTA', logo: '/images/clients/aqta.png' },
    ],
  },
  {
    titleKey: 'clients:sectors.banking',
    icon: Building2,
    gradient: 'from-emerald-500 to-teal-600',
    clients: [
      { name: 'PASHA Bank', logo: '/images/clients/pashabank.png' },
      { name: 'PASHA Technology', logo: '/images/clients/pasha-technology-1.svg' },
      { name: 'UNIBank', logo: '/images/clients/unibank.png' },
      { name: 'Bank Respublika', logo: '/images/clients/bankresp.svg' },
      { name: 'GoldenPay', logo: '/images/clients/hesab.png' },
    ],
  },
  {
    titleKey: 'clients:sectors.enterprise',
    icon: Briefcase,
    gradient: 'from-orange-500 to-red-600',
    clients: [
      { name: 'Azerişıq', logo: '/images/clients/azerisiq.png' },
      { name: 'KATECH', logo: '/images/clients/katech.png' },
      { name: 'AİSTGroup', logo: '/images/clients/aist.png' },
    ],
  },
]

export default function ClientsPage() {
  const { t } = useTranslation('clients')

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-brand-dark to-brand overflow-hidden">
        <GridPattern className="opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('industries.title')} subtitle="" />
          {(() => {
            const items = t('industries.items', { returnObjects: true }) as string[]
            const icons = [Banknote, Radio, Globe, Factory, Brain]
            const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444']
            return (
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {items.map((item, i) => {
                  const Icon = icons[i % icons.length]
                  const color = colors[i % colors.length]
                  return (
                    <ScrollReveal key={i} delay={i * 0.1} className="h-full">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="h-full flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-surface-elevated hover:shadow-lg transition-all duration-300 group"
                      >
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: `${color}12` }}
                        >
                          <Icon size={28} color={color} />
                        </div>
                        <span className="text-sm font-semibold text-text-primary leading-tight">
                          {item}
                        </span>
                      </motion.div>
                    </ScrollReveal>
                  )
                })}
              </div>
            )
          })()}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('section.title')} subtitle={t('section.subtitle')} />
          <div className="mt-12 space-y-12">
            {clientGroups.map((group, gi) => {
              const GroupIcon = group.icon
              return (
                <ScrollReveal key={gi} delay={gi * 0.1}>
                  <div className="relative rounded-2xl bg-surface-alt border border-border overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${group.gradient}`} />
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center`}>
                          <GroupIcon size={20} className="text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-text-primary">{t(group.titleKey)}</h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {group.clients.map(client => (
                          <div
                            key={client.name}
                            className="group flex flex-col items-center justify-center h-36 rounded-xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300 p-5"
                          >
                            <img
                              src={publicPath(client.logo)}
                              alt={client.name}
                              className="h-16 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
                            />
                            <span className="text-xs font-medium text-text-secondary text-center leading-tight">
                              {client.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
