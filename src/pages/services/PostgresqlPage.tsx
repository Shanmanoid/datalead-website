import { Database } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function PostgresqlPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.postgresql.title"
      descriptionKey="services.postgresql.description"
      problemKey="services.postgresql.problem"
      solutionKey="services.postgresql.solution"
      features={[
        'services.postgresql.f1',
        'services.postgresql.f2',
        'services.postgresql.f3',
        'services.postgresql.f4',
      ]}
      technologies={['PostgreSQL', 'PgBouncer', 'Patroni', 'pgBackRest']}
      icon={<Database size={32} />}
    />
  )
}
