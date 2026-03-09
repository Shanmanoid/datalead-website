import { Warehouse } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function DwhDataLakesPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.dwh.title"
      descriptionKey="services.dwh.description"
      problemKey="services.dwh.problem"
      solutionKey="services.dwh.solution"
      features={[
        'services.dwh.f1',
        'services.dwh.f2',
        'services.dwh.f3',
        'services.dwh.f4',
      ]}
      technologies={['Cloudera', 'Apache Hadoop', 'Apache Spark', 'IOMETE']}
      icon={<Warehouse size={32} />}
    />
  )
}
