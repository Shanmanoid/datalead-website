import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { publicPath } from '@/utils/publicPath'

interface ClientItem {
  name: string
  logo: string
}

const clients: ClientItem[] = [
  { name: 'Ministry of Economy', logo: '/images/clients/iqtisadiyyat.png' },
  { name: 'State Tax Service', logo: '/images/clients/dvx.png' },
  { name: 'PASHA Bank', logo: '/images/clients/pashabank.png' },
  { name: 'UNIBank', logo: '/images/clients/unibank.png' },
  { name: 'Azerişıq', logo: '/images/clients/azerisiq.png' },
  { name: 'AZAL', logo: '/images/clients/azal.png' },
  { name: 'State Customs Committee', logo: '/images/clients/dgk.png' },
  { name: 'AQTA', logo: '/images/clients/aqta.png' },
]

export function ClientLogoGrid() {
  const { t } = useTranslation('home')

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('customers.title')} subtitle={t('customers.subtitle')} />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <ScrollReveal key={client.name} delay={i * 0.05} className="h-full">
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ duration: 0.2 }}
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
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
