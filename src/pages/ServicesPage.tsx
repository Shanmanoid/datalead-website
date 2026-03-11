import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { CTABanner } from '@/components/sections/CTABanner'
import { services } from '@/utils/constants'
import { cn } from '@/utils/cn'

const categories = ['all', 'database', 'platform'] as const

export default function ServicesPage() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory)

  const getCategoryCount = (cat: string) =>
    cat === 'all' ? services.length : services.filter(s => s.category === cat).length

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('servicesPage.hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('servicesPage.hero.subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-6 py-2.5 rounded-xl text-base font-semibold transition-all cursor-pointer',
                  activeCategory === cat
                    ? 'bg-brand text-white shadow-lg shadow-brand/25'
                    : 'bg-surface-alt text-text-secondary hover:bg-border hover:text-text-primary'
                )}
              >
                {t(`servicesPage.filters.${cat}`)}
                <span className={cn(
                  'ml-2 text-sm',
                  activeCategory === cat ? 'text-white/70' : 'text-text-muted'
                )}>
                  ({getCategoryCount(cat)})
                </span>
              </motion.button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((service, i) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ServiceCard service={service} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
