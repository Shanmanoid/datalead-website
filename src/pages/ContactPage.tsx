import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactForm } from '@/components/ui/ContactForm'
import { siteConfig } from '@/config/site'

export default function ContactPage() {
  const { t } = useTranslation('contact')

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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-surface-elevated border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-text-primary mb-6">
                  {t('formTitle')}
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: t('info.address'), value: siteConfig.contact.address },
                  { icon: Phone, label: t('info.phone'), value: siteConfig.contact.phone },
                  { icon: Mail, label: t('info.email'), value: siteConfig.contact.email },
                  { icon: Clock, label: t('info.hours'), value: t('info.hoursValue') },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-surface-elevated border border-border border-l-4 border-l-brand hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-brand" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-muted">{item.label}</div>
                      <div className="text-text-primary font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-6 h-64 rounded-xl bg-gradient-to-br from-surface-alt to-surface border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center text-text-muted">
                  <MapPin size={32} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">{t('mapPlaceholder')}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
