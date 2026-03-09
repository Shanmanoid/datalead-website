import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTABanner } from '@/components/sections/CTABanner'
import { Target, Eye, Award, Users, Quote } from 'lucide-react'

const timelineEvents = [
  { yearKey: 'about:timeline.y1.year', titleKey: 'about:timeline.y1.title', descKey: 'about:timeline.y1.desc' },
  { yearKey: 'about:timeline.y2.year', titleKey: 'about:timeline.y2.title', descKey: 'about:timeline.y2.desc' },
  { yearKey: 'about:timeline.y3.year', titleKey: 'about:timeline.y3.title', descKey: 'about:timeline.y3.desc' },
  { yearKey: 'about:timeline.y4.year', titleKey: 'about:timeline.y4.title', descKey: 'about:timeline.y4.desc' },
]

const valueGradients = [
  'from-blue-500 to-indigo-600',
  'from-violet-500 to-purple-600',
  'from-emerald-500 to-teal-600',
  'from-orange-500 to-red-600',
]

export default function AboutPage() {
  const { t } = useTranslation(['about', 'common'])

  const values = [
    { icon: Target, titleKey: 'about:values.expertise.title', descKey: 'about:values.expertise.desc' },
    { icon: Eye, titleKey: 'about:values.innovation.title', descKey: 'about:values.innovation.desc' },
    { icon: Award, titleKey: 'about:values.quality.title', descKey: 'about:values.quality.desc' },
    { icon: Users, titleKey: 'about:values.partnership.title', descKey: 'about:values.partnership.desc' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('about:hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('about:hero.subtitle')}</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading title={t('about:mission.title')} />
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-8 space-y-4 text-text-secondary leading-relaxed text-center max-w-3xl mx-auto">
              <p>{t('about:mission.text1')}</p>
              <p>{t('about:mission.text2')}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-10 relative rounded-2xl bg-gradient-to-br from-brand/10 via-brand/5 to-brand-light/10 border border-brand/20 p-10 text-center">
              {/* Decorative quote icon */}
              <Quote size={48} className="text-brand/15 absolute top-4 left-6" />
              <blockquote className="relative text-xl md:text-2xl font-medium text-text-primary italic leading-relaxed">
                "{t('about:mission.quote')}"
              </blockquote>
              <div className="mt-4 h-1 w-16 bg-gradient-to-r from-brand to-brand-light rounded-full mx-auto" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('about:values.title')} subtitle={t('about:values.subtitle')} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group relative p-6 rounded-2xl bg-surface-elevated border border-border text-center h-full hover:shadow-xl hover:border-brand/30 transition-all duration-300 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${valueGradients[i]}`} />
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${valueGradients[i]} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      {t(value.titleKey)}
                    </h3>
                    <p className="text-sm text-text-secondary">{t(value.descKey)}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t('about:timeline.title')} subtitle={t('about:timeline.subtitle')} />
          <div className="mt-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand via-brand-light to-border hidden md:block" />
            {timelineEvents.map((event, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.15}>
                <div className={`flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <span className="inline-block text-sm font-bold text-white bg-brand px-3 py-1 rounded-full">{t(event.yearKey)}</span>
                    <h3 className="text-xl font-semibold text-text-primary mt-2">{t(event.titleKey)}</h3>
                    <p className="text-sm text-text-secondary mt-2">{t(event.descKey)}</p>
                  </div>
                  <div className="hidden md:flex w-5 h-5 rounded-full bg-brand border-4 border-surface shadow-lg shrink-0" />
                  <div className="flex-1 hidden md:block" />
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
