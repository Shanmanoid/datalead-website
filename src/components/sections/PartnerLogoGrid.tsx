import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { publicPath } from '@/utils/publicPath'

interface Partner {
  name: string
  description: string
  logo: string
}

const partners: Partner[] = [
  { name: 'IOMETE', description: 'Data Lakehouse Platform', logo: '/images/partners/partner_2.png' },
  { name: 'Denodo', description: 'Data Virtualization', logo: '/images/partners/partner_6.png' },
  { name: 'DataSunrise', description: 'Database Security', logo: '/images/partners/partner_4.png' },
  { name: 'SecureMaxTech', description: 'Security Solutions', logo: '/images/partners/partner_5.png' },
  { name: 'VanderLog', description: 'Cybersecurity', logo: '/images/partners/partner_1.png' },
  { name: 'Accelario', description: 'DB Test Data Management', logo: '/images/partners/partner_3.png' },
]

export function PartnerLogoGrid() {
  const { t } = useTranslation('home')

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('partners.title')} subtitle={t('partners.subtitle')} />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.1} className="h-full">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col items-center justify-center h-40 rounded-xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300 p-6 overflow-hidden"
              >
                <img
                  src={publicPath(partner.logo)}
                  alt={partner.name}
                  className="h-14 w-auto object-contain mb-3 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-bold text-text-primary mb-1 text-center">
                  {partner.name}
                </span>
                <span className="text-xs text-text-muted text-center">
                  {partner.description}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
