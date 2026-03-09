import { Cloud } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function DataPlatformPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.platform.title"
      descriptionKey="services.platform.description"
      problemKey="services.platform.problem"
      solutionKey="services.platform.solution"
      features={[
        'services.platform.f1',
        'services.platform.f2',
        'services.platform.f3',
        'services.platform.f4',
      ]}
      technologies={['IOMETE', 'Kubernetes', 'Apache Spark', 'Apache Iceberg']}
      icon={<Cloud size={32} />}
    />
  )
}
