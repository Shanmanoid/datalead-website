import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTABanner } from '@/components/sections/CTABanner'
import { ParticleField } from '@/components/visuals/backgrounds/ParticleField'
import { InteractiveTimeline } from '@/components/sections/InteractiveTimeline'
import { DataFlowIllustration } from '@/components/visuals/illustrations/DataFlowIllustration'
import { Target, Eye, Award, Users, Rocket, Globe, Layers, Zap } from 'lucide-react'
import { motion } from 'motion/react'

const valueGradients = [
  'from-blue-500 to-indigo-600',
  'from-violet-500 to-purple-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-600',
]

const valueColors = ['#3b82f6', '#8b5cf6', '#10b981', '#f97316']

export default function AboutPage() {
  const { t } = useTranslation(['about', 'common'])

  const values = [
    { icon: Target, titleKey: 'about:values.expertise.title', descKey: 'about:values.expertise.desc' },
    { icon: Eye, titleKey: 'about:values.innovation.title', descKey: 'about:values.innovation.desc' },
    { icon: Award, titleKey: 'about:values.quality.title', descKey: 'about:values.quality.desc' },
    { icon: Users, titleKey: 'about:values.partnership.title', descKey: 'about:values.partnership.desc' },
  ]

  const timelineEvents = [
    { year: t('about:timeline.y1.year'), title: t('about:timeline.y1.title'), description: t('about:timeline.y1.desc'), icon: Rocket, color: '#3b82f6' },
    { year: t('about:timeline.y2.year'), title: t('about:timeline.y2.title'), description: t('about:timeline.y2.desc'), icon: Globe, color: '#8b5cf6' },
    { year: t('about:timeline.y3.year'), title: t('about:timeline.y3.title'), description: t('about:timeline.y3.desc'), icon: Layers, color: '#10b981' },
    { year: t('about:timeline.y4.year'), title: t('about:timeline.y4.title'), description: t('about:timeline.y4.desc'), icon: Zap, color: '#f59e0b' },
  ]

  return (
    <>
      {/* Hero with particle field */}
      <section className="relative py-20 bg-gradient-to-br from-brand-dark to-brand overflow-hidden">
        <ParticleField particleCount={30} speed={0.2} className="opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('about:hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('about:hero.subtitle')}</p>
        </div>
      </section>

      {/* Mission — text + illustration */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeading title={t('about:mission.title')} />
              <div className="mt-6 text-text-secondary leading-relaxed space-y-4">
                <p>{t('about:mission.text1')}</p>
                <p>{t('about:mission.text2')}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <DataFlowIllustration />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values — larger icons with animations */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('about:values.title')} subtitle={t('about:values.subtitle')} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative p-6 rounded-2xl bg-surface-elevated border border-border text-center h-full hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${valueGradients[i]}`} />
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg"
                      style={{ backgroundColor: `${valueColors[i]}15` }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                      >
                        <Icon size={32} color={valueColors[i]} />
                      </motion.div>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {t(value.titleKey)}
                    </h3>
                    <p className="text-sm text-text-secondary">{t(value.descKey)}</p>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline — Interactive */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('about:timeline.title')} subtitle={t('about:timeline.subtitle')} />
          <div className="mt-12">
            <InteractiveTimeline events={timelineEvents} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
