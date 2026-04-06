import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ContactForm } from '@/components/ui/ContactForm'
import { ParticleField } from '@/components/visuals/backgrounds/ParticleField'
import { siteConfig } from '@/config/site'

export default function ContactPage() {
  const { t } = useTranslation('contact')

  const contactItems = [
    { icon: MapPin, label: t('info.address'), value: siteConfig.contact.address, color: '#3b82f6' },
    { icon: Phone, label: t('info.phone'), value: siteConfig.contact.phone, color: '#10b981' },
    { icon: Mail, label: t('info.email'), value: siteConfig.contact.email, color: '#8b5cf6' },
    { icon: Clock, label: t('info.hours'), value: t('info.hoursValue'), color: '#f59e0b' },
  ]

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-brand-dark to-brand overflow-hidden">
        <ParticleField particleCount={25} speed={0.15} className="opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
                {contactItems.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-surface-elevated border border-border hover:shadow-md transition-all duration-300 group"
                  >
                    <motion.div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}12` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon size={22} color={item.color} />
                    </motion.div>
                    <div>
                      <div className="text-sm font-medium text-text-muted">{item.label}</div>
                      <div className="text-text-primary font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map embed */}
              <div className="mt-6 h-48 md:h-64 rounded-xl border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4!2d49.8671!3d40.4093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzMzLjUiTiA0OcKwNTInMDEuNiJF!5e0!3m2!1sen!2saz!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DataLead Office Location - Baku, Azerbaijan"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
