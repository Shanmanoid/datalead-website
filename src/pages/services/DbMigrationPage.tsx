import { ArrowRightLeft } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function DbMigrationPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.migration.title"
      descriptionKey="services.migration.description"
      problemKey="services.migration.problem"
      solutionKey="services.migration.solution"
      features={[
        'services.migration.f1',
        'services.migration.f2',
        'services.migration.f3',
        'services.migration.f4',
      ]}
      technologies={['Oracle', 'PostgreSQL', 'MS-SQL', 'MySQL', 'AWS DMS']}
      icon={<ArrowRightLeft size={32} />}
    />
  )
}
