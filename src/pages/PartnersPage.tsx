import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTABanner } from '@/components/sections/CTABanner'
import { ExternalLink } from 'lucide-react'

const partners: {
  name: string
  descKey: string
  url: string
  logo: string
}[] = [
  { name: 'IOMETE', descKey: 'partners:list.iomete', url: 'https://iomete.com', logo: '/images/partners/partner_2.png' },
  { name: 'Denodo', descKey: 'partners:list.denodo', url: 'https://denodo.com', logo: '/images/partners/partner_6.png' },
  { name: 'DataSunrise', descKey: 'partners:list.datasunrise', url: 'https://datasunrise.com', logo: '/images/partners/partner_4.png' },
  { name: 'SecureMaxTech', descKey: 'partners:list.securemax', url: 'https://securemaxtech.com', logo: '/images/partners/partner_5.png' },
  { name: 'VanderLog', descKey: 'partners:list.vanderlog', url: 'https://vanderlog.com', logo: '/images/partners/partner_1.png' },
  { name: 'Accelario', descKey: 'partners:list.accelario', url: 'https://accelario.com', logo: '/images/partners/partner_3.png' },
]

export default function PartnersPage() {
  const { t } = useTranslation('partners')

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('section.title')} subtitle={t('section.subtitle')} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <ScrollReveal key={partner.name} delay={i * 0.1}>
                <div className="group relative rounded-2xl bg-surface-elevated border border-border hover:shadow-xl hover:border-brand/30 transition-all duration-300 h-full overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-brand to-brand-light" />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                        />
                        <h3 className="text-xl font-bold text-text-primary">{partner.name}</h3>
                      </div>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-brand transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{t(partner.descKey)}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
