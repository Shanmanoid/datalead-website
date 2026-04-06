import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { ArrowLeft, AlertTriangle, Lightbulb, ChevronDown, Database, Layers, Zap, Network, Code, BarChart3, Shield, Box, Server, Settings, GitBranch, Cpu } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { CTABanner } from '@/components/sections/CTABanner'
import { GridPattern } from '@/components/visuals/backgrounds/GridPattern'
import { ProcessFlow } from '@/components/sections/ProcessFlow'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

const techMeta: Record<string, { icon: LucideIcon; gradient: string }> = {
  'Oracle': { icon: Database, gradient: 'from-red-500 to-orange-500' },
  'PostgreSQL': { icon: Database, gradient: 'from-blue-500 to-indigo-500' },
  'MS-SQL': { icon: Database, gradient: 'from-sky-500 to-blue-600' },
  'MongoDB': { icon: Database, gradient: 'from-green-500 to-emerald-500' },
  'MySQL': { icon: Database, gradient: 'from-amber-500 to-orange-500' },
  'IOMETE': { icon: Layers, gradient: 'from-cyan-500 to-blue-500' },
  'Apache Spark': { icon: Zap, gradient: 'from-orange-500 to-red-500' },
  'Apache Spark MLlib': { icon: Cpu, gradient: 'from-orange-500 to-rose-500' },
  'Kubernetes': { icon: Network, gradient: 'from-blue-500 to-indigo-600' },
  'Apache Iceberg': { icon: Layers, gradient: 'from-teal-500 to-cyan-500' },
  'Cloudera': { icon: Server, gradient: 'from-orange-500 to-amber-500' },
  'Apache Hadoop': { icon: Server, gradient: 'from-yellow-500 to-amber-600' },
  'Python': { icon: Code, gradient: 'from-blue-500 to-yellow-500' },
  'TensorFlow': { icon: Cpu, gradient: 'from-orange-500 to-amber-500' },
  'Power BI': { icon: BarChart3, gradient: 'from-yellow-500 to-amber-500' },
  'Tableau': { icon: BarChart3, gradient: 'from-blue-500 to-cyan-500' },
  'Looker': { icon: BarChart3, gradient: 'from-violet-500 to-purple-500' },
  'DataSunrise': { icon: Shield, gradient: 'from-emerald-500 to-teal-500' },
  'Oracle TDE': { icon: Shield, gradient: 'from-red-500 to-rose-500' },
  'Vault': { icon: Shield, gradient: 'from-slate-500 to-gray-600' },
  'Redis': { icon: Database, gradient: 'from-red-500 to-rose-500' },
  'Cassandra': { icon: Database, gradient: 'from-teal-500 to-blue-500' },
  'HBase': { icon: Database, gradient: 'from-indigo-500 to-violet-500' },
  'PgBouncer': { icon: Settings, gradient: 'from-blue-400 to-blue-600' },
  'Patroni': { icon: GitBranch, gradient: 'from-violet-500 to-indigo-500' },
  'pgBackRest': { icon: Server, gradient: 'from-green-500 to-teal-500' },
  'dbt': { icon: Code, gradient: 'from-orange-500 to-red-500' },
  'Airflow': { icon: Network, gradient: 'from-teal-500 to-emerald-500' },
  'AWS DMS': { icon: Network, gradient: 'from-amber-500 to-orange-500' },
}

const defaultTechMeta = { icon: Box, gradient: 'from-gray-500 to-slate-500' }

interface ServiceDetailProps {
  titleKey: string
  descriptionKey: string
  problemKey: string
  solutionKey: string
  features: string[]
  technologies: string[]
  icon: ReactNode
}

export function ServiceDetailLayout({
  titleKey,
  descriptionKey,
  problemKey,
  solutionKey,
  features,
  technologies,
  icon,
}: ServiceDetailProps) {
  const { t } = useTranslation(['services-detail', 'common'])

  // Convert features into ProcessFlow steps
  const featureSteps = features.map(fk => ({
    title: t(fk),
  }))

  return (
    <>
      {/* Hero with GridPattern */}
      <section className="relative py-20 bg-gradient-to-br from-brand-dark to-brand overflow-hidden">
        <GridPattern className="opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            {t('backToServices', { ns: 'common' })}
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
              {icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{t(titleKey, { ns: 'common' })}</h1>
              <p className="text-white/80 mt-2 text-lg">{t(descriptionKey, { ns: 'common' })}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution — visual cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem */}
            <ScrollReveal direction="left">
              <div className="h-full rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
                <div className="h-3 bg-gradient-to-r from-red-500 to-orange-500" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <AlertTriangle size={24} className="text-accent" />
                    </div>
                    <div>
                      <Badge variant="accent">{t('serviceDetail.problem', { ns: 'common' })}</Badge>
                      <h2 className="text-xl font-bold text-text-primary mt-1">
                        {t('serviceDetail.whyNeed', { ns: 'common' })}
                      </h2>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{t(problemKey)}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Solution */}
            <ScrollReveal direction="right">
              <div className="h-full rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow">
                <div className="h-3 bg-gradient-to-r from-brand to-emerald-500" />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
                      <Lightbulb size={24} className="text-brand" />
                    </div>
                    <div>
                      <Badge variant="brand">{t('serviceDetail.solution', { ns: 'common' })}</Badge>
                      <h2 className="text-xl font-bold text-text-primary mt-1">
                        {t('serviceDetail.whatWeProvide', { ns: 'common' })}
                      </h2>
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{t(solutionKey)}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 flex justify-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="text-text-muted"
            >
              <ChevronDown size={28} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features — ProcessFlow visual */}
      <section className="py-20 bg-gradient-to-b from-surface to-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text-primary text-center mb-12">
              {t('serviceDetail.keyFeatures', { ns: 'common' })}
            </h2>
          </ScrollReveal>
          <ProcessFlow steps={featureSteps} />
        </div>
      </section>

      {/* Technologies — enhanced grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-text-primary mb-12">
              {t('serviceDetail.technologies', { ns: 'common' })}
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, i) => {
              const meta = techMeta[tech] || defaultTechMeta
              const Icon = meta.icon
              return (
                <ScrollReveal key={tech} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="group relative flex flex-col items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-surface-elevated border border-border hover:border-brand/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${meta.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className="text-xs font-semibold text-text-primary leading-tight text-center px-2">
                      {tech}
                    </span>
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
