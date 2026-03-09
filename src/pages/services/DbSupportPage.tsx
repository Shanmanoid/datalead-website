import { Headset } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function DbSupportPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.dbSupport.title"
      descriptionKey="services.dbSupport.description"
      problemKey="services.dbSupport.problem"
      solutionKey="services.dbSupport.solution"
      features={[
        'services.dbSupport.f1',
        'services.dbSupport.f2',
        'services.dbSupport.f3',
        'services.dbSupport.f4',
      ]}
      technologies={['Oracle', 'PostgreSQL', 'MS-SQL', 'MongoDB', 'MySQL']}
      icon={<Headset size={32} />}
    />
  )
}
