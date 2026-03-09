import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { CTABanner } from '@/components/sections/CTABanner'
import { services } from '@/utils/constants'

export default function ServicesPage() {
  const { t } = useTranslation()

  const dbServices = services.filter(s => s.category === 'database')
  const platformServices = services.filter(s => s.category === 'platform')

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('servicesPage.hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('servicesPage.hero.subtitle')}</p>
        </div>
      </section>

      {/* Database & Infrastructure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('servicesPage.database.title')}
            subtitle={t('servicesPage.database.subtitle')}
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dbServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08} className="h-full">
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Data Platform (IOMETE) */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('servicesPage.platform.title')}
            subtitle={t('servicesPage.platform.subtitle')}
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.08} className="h-full">
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
