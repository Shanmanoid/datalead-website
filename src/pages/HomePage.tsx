import { useTranslation } from 'react-i18next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsBar } from '@/components/sections/StatsBar'
import { InfographicCard } from '@/components/sections/InfographicCard'
import { ClientLogoGrid } from '@/components/sections/ClientLogoGrid'
import { CTABanner } from '@/components/sections/CTABanner'
import { BusinessValuePreview } from '@/components/sections/BusinessValuePreview'
import { EngagementFlow } from '@/components/visuals/diagrams/EngagementFlow'
import { ArchitectureDiagram } from '@/components/visuals/diagrams/ArchitectureDiagram'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { services } from '@/utils/constants'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

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
              <InfographicCard
                key={service.id}
                iconName={service.icon}
                titleKey={service.titleKey}
                descriptionKey={service.descriptionKey}
                path={service.path}
                category={service.category}
                index={i}
              />
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

      {/* Architecture Overview */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="text-sm font-semibold text-brand uppercase tracking-wider">
                {t('home:about.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-4">
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
              <ArchitectureDiagram />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Engagement Flow */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('home:approach.title', 'Our Approach')}
            subtitle={t('home:approach.subtitle', 'A proven methodology for delivering enterprise data solutions')}
          />
          <div className="mt-12">
            <EngagementFlow />
          </div>
        </div>
      </section>

      <ClientLogoGrid />
      <CTABanner />
    </>
  )
}
