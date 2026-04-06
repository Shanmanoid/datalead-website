import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTABanner } from '@/components/sections/CTABanner'
import { GridPattern } from '@/components/visuals/backgrounds/GridPattern'
import { StylizedAvatar } from '@/components/visuals/illustrations/StylizedAvatar'

const MEMBER_GRADIENTS = [
  ['#3b82f6', '#6366f1'],
  ['#8b5cf6', '#a855f7'],
  ['#10b981', '#14b8a6'],
  ['#f59e0b', '#f97316'],
  ['#06b6d4', '#0891b2'],
  ['#ef4444', '#f43f5e'],
]

const memberIds = ['m1', 'm2', 'm3', 'm4', 'm5', 'm6']

export default function TeamPage() {
  const { t } = useTranslation('team')

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-brand-dark to-brand overflow-hidden">
        <GridPattern className="opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('section.title')} subtitle={t('section.subtitle')} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberIds.map((id, i) => {
              const name = t(`members.${id}.name`)
              const expertise = t(`members.${id}.expertise`, { returnObjects: true }) as string[]
              const gradient = MEMBER_GRADIENTS[i]

              return (
                <ScrollReveal key={id} delay={i * 0.1} className="h-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative rounded-2xl bg-surface-elevated border border-border hover:shadow-xl hover:border-brand/30 transition-all duration-300 overflow-hidden h-full"
                  >
                    <div
                      className="h-2"
                      style={{ background: `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})` }}
                    />
                    <div className="p-6 text-center">
                      {/* Stylized Avatar */}
                      <div className="mx-auto mb-5">
                        <StylizedAvatar
                          name={name}
                          size={90}
                          gradient={gradient[0]}
                          className="mx-auto md:w-[120px] md:h-[120px]"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-text-primary">{name}</h3>
                      <p className="text-sm font-semibold mt-1" style={{ color: gradient[0] }}>
                        {t(`members.${id}.role`)}
                      </p>
                      <p className="text-sm text-text-secondary mt-3 leading-relaxed line-clamp-2">
                        {t(`members.${id}.bio`)}
                      </p>
                      {/* Expertise tags — larger */}
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {Array.isArray(expertise) && expertise.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1.5 rounded-full font-medium"
                            style={{ backgroundColor: `${gradient[0]}12`, color: gradient[0] }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
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
