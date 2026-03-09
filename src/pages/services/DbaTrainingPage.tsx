import { GraduationCap } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function DbaTrainingPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.training.title"
      descriptionKey="services.training.description"
      problemKey="services.training.problem"
      solutionKey="services.training.solution"
      features={[
        'services.training.f1',
        'services.training.f2',
        'services.training.f3',
        'services.training.f4',
      ]}
      technologies={['Oracle', 'PostgreSQL', 'MS-SQL', 'MongoDB']}
      icon={<GraduationCap size={32} />}
    />
  )
}
