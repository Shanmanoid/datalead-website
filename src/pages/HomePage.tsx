import { useTranslation } from 'react-i18next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { ServiceCard } from '@/components/sections/ServiceCard'
import { ClientLogoGrid } from '@/components/sections/ClientLogoGrid'
import { PartnerLogoGrid } from '@/components/sections/PartnerLogoGrid'
import { CTABanner } from '@/components/sections/CTABanner'
import { BusinessValuePreview } from '@/components/sections/BusinessValuePreview'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { services } from '@/utils/constants'
import { Link } from 'react-router'
import { ArrowRight, Database, Layers, Zap } from 'lucide-react'

const techCards = [
  { name: 'Oracle', descKey: 'home:techCards.oracle.desc', icon: Database, color: 'text-red-500 bg-red-500/10' },
  { name: 'PostgreSQL', descKey: 'home:techCards.postgresql.desc', icon: Database, color: 'text-blue-500 bg-blue-500/10' },
  { name: 'IOMETE', descKey: 'home:techCards.iomete.desc', icon: Layers, color: 'text-cyan-500 bg-cyan-500/10' },
  { name: 'Spark', descKey: 'home:techCards.spark.desc', icon: Zap, color: 'text-amber-500 bg-amber-500/10' },
]

export default function HomePage() {
  const { t } = useTranslation(['home', 'common'])
  const featuredServices = services.slice(0, 6)

  return (
    <>
      <HeroSection />
      <StatsBar />

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('home:servicesSection.title')}
            subtitle={t('home:servicesSection.subtitle')}
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <ServiceCard service={service} index={i} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services">
              <Button variant="outline">
                {t('home:servicesSection.viewAll')}
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BusinessValuePreview />

      {/* About Snippet */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider">
                {t('home:about.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-6">
                {t('home:about.title')}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {t('home:about.text')}
              </p>
              <Link to="/about">
                <Button variant="outline">
                  {t('common:learnMore')}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {techCards.map(card => {
                  const Icon = card.icon
                  return (
                    <div key={card.name} className="group p-6 rounded-2xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300">
                      <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <Icon size={20} />
                      </div>
                      <div className="text-xl font-bold text-text-primary mb-1">{card.name}</div>
                      <div className="text-sm text-text-secondary">{t(card.descKey)}</div>
                    </div>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ClientLogoGrid />
      <PartnerLogoGrid />
      <CTABanner />
    </>
  )
}
