import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { CTABanner } from '@/components/sections/CTABanner'
import { pricingTiers } from '@/utils/constants'
import { cn } from '@/utils/cn'
import { Link } from 'react-router'

export default function PricesPage() {
  const { t } = useTranslation()

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('pricesPage.hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('pricesPage.hero.subtitle')}</p>
        </div>
      </section>

      {/* IOMETE Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('pricesPage.iomete.title')}
            subtitle={t('pricesPage.iomete.subtitle')}
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.id} delay={i * 0.1} className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    'relative rounded-2xl p-8 border h-full flex flex-col hover:shadow-xl transition-shadow duration-300',
                    tier.highlighted
                      ? 'border-brand shadow-xl bg-surface-elevated ring-2 ring-brand/20'
                      : 'border-border bg-surface-elevated'
                  )}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand text-white text-xs font-semibold rounded-full">
                      {t('pricesPage.popular')}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-text-primary">{t(tier.nameKey)}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-text-primary">{tier.price}</span>
                    {tier.id !== 'business' && (
                      <span className="text-text-muted ml-1">
                        {tier.id === 'enterprise' ? '/vCPU/yr' : ''}
                      </span>
                    )}
                  </div>
                  {tier.minKey && (
                    <p className="text-sm text-text-muted mt-1">{t(tier.minKey)}</p>
                  )}
                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.featuresKeys.map(fk => (
                      <li key={fk} className="flex items-start gap-2 text-sm text-text-secondary">
                        <Check size={16} className="text-brand mt-0.5 shrink-0" />
                        {t(fk)}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="mt-8">
                    <Button
                      variant={tier.highlighted ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      {t(tier.ctaKey)}
                    </Button>
                  </Link>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              {t('pricesPage.consulting.title')}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              {t('pricesPage.consulting.text')}
            </p>
            <Link to="/contact">
              <Button size="lg">{t('pricesPage.consulting.cta')}</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
