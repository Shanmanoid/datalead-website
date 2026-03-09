import { useTranslation } from 'react-i18next'
import { motion } from 'motion/react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTABanner } from '@/components/sections/CTABanner'
import { UserCog, Code2, Database, GitBranch, Layers, Shield } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface TeamMember {
  id: string
  icon: LucideIcon
  color: string
}

const teamMembers: TeamMember[] = [
  { id: 'm1', icon: UserCog, color: 'from-blue-500 to-indigo-600' },
  { id: 'm2', icon: Code2, color: 'from-violet-500 to-purple-600' },
  { id: 'm3', icon: Database, color: 'from-emerald-500 to-teal-600' },
  { id: 'm4', icon: GitBranch, color: 'from-orange-500 to-amber-600' },
  { id: 'm5', icon: Layers, color: 'from-cyan-500 to-blue-600' },
  { id: 'm6', icon: Shield, color: 'from-rose-500 to-red-600' },
]

export default function TeamPage() {
  const { t } = useTranslation('team')

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
          <SectionHeading title={t('section.title')} subtitle={t('section.subtitle')} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => {
              const Icon = member.icon
              const expertise = t(`members.${member.id}.expertise`, { returnObjects: true }) as string[]

              return (
                <ScrollReveal key={member.id} delay={i * 0.1} className="h-full">
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="group relative rounded-2xl bg-surface-elevated border border-border hover:shadow-xl hover:border-brand/30 transition-all duration-300 overflow-hidden h-full">
                    {/* Top gradient accent */}
                    <div className={`h-1.5 bg-gradient-to-r ${member.color}`} />
                    <div className="p-6 text-center">
                      {/* Icon with gradient background */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
                        <Icon size={36} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-text-primary">{t(`members.${member.id}.name`)}</h3>
                      <p className="text-sm text-brand font-semibold mt-1">{t(`members.${member.id}.role`)}</p>
                      <p className="text-sm text-text-secondary mt-3 leading-relaxed">{t(`members.${member.id}.bio`)}</p>
                      {/* Expertise tags */}
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {Array.isArray(expertise) && expertise.map((tag: string) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 bg-brand/10 text-brand rounded-full font-medium"
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
