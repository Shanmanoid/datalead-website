import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Database, Headset, Layers, ArrowRightLeft, GraduationCap, ShieldCheck, BrainCircuit, Cloud, Workflow, BarChart3, Scale, Warehouse } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import type { Service } from '@/types'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  HeadsetIcon: Headset,
  DatabaseIcon: Database,
  WarehouseIcon: Warehouse,
  LayersIcon: Layers,
  ArrowRightLeftIcon: ArrowRightLeft,
  GraduationCapIcon: GraduationCap,
  ShieldCheckIcon: ShieldCheck,
  BrainCircuitIcon: BrainCircuit,
  CloudIcon: Cloud,
  WorkflowIcon: Workflow,
  BarChart3Icon: BarChart3,
  ScaleIcon: Scale,
}

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { t } = useTranslation()
  const Icon = iconMap[service.icon] || Database

  return (
    <Link to={service.path}>
      <Card className="h-full group overflow-hidden relative">
        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-brand-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand group-hover:shadow-lg group-hover:shadow-brand/25 transition-all duration-300">
          <Icon
            size={24}
            className="text-brand group-hover:text-white transition-colors duration-300"
          />
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          {t(service.titleKey)}
        </h3>
        <p className="text-sm text-text-secondary mb-4 leading-relaxed">
          {t(service.descriptionKey)}
        </p>
        <span className="inline-flex items-center text-sm font-medium text-brand group-hover:gap-2 transition-all">
          {t('learnMore')}
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </span>
      </Card>
    </Link>
  )
}
