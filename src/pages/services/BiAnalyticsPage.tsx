import { BarChart3 } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function BiAnalyticsPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.bi.title"
      descriptionKey="services.bi.description"
      problemKey="services.bi.problem"
      solutionKey="services.bi.solution"
      features={[
        'services.bi.f1',
        'services.bi.f2',
        'services.bi.f3',
        'services.bi.f4',
      ]}
      technologies={['Power BI', 'Tableau', 'Looker', 'IOMETE']}
      icon={<BarChart3 size={32} />}
    />
  )
}
