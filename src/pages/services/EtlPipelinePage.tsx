import { Workflow } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function EtlPipelinePage() {
  return (
    <ServiceDetailLayout
      titleKey="services.etl.title"
      descriptionKey="services.etl.description"
      problemKey="services.etl.problem"
      solutionKey="services.etl.solution"
      features={[
        'services.etl.f1',
        'services.etl.f2',
        'services.etl.f3',
        'services.etl.f4',
      ]}
      technologies={['Apache Spark', 'dbt', 'IOMETE', 'Airflow']}
      icon={<Workflow size={32} />}
    />
  )
}
