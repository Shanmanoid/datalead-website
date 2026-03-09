import { Layers } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function NoSqlPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.nosql.title"
      descriptionKey="services.nosql.description"
      problemKey="services.nosql.problem"
      solutionKey="services.nosql.solution"
      features={[
        'services.nosql.f1',
        'services.nosql.f2',
        'services.nosql.f3',
        'services.nosql.f4',
      ]}
      technologies={['MongoDB', 'Cassandra', 'HBase', 'Redis']}
      icon={<Layers size={32} />}
    />
  )
}
