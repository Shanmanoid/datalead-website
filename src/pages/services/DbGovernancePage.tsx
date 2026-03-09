import { Scale } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function DbGovernancePage() {
  return (
    <ServiceDetailLayout
      titleKey="services.governance.title"
      descriptionKey="services.governance.description"
      problemKey="services.governance.problem"
      solutionKey="services.governance.solution"
      features={[
        'services.governance.f1',
        'services.governance.f2',
        'services.governance.f3',
        'services.governance.f4',
      ]}
      technologies={['Oracle', 'PostgreSQL', 'DataSunrise', 'Vault']}
      icon={<Scale size={32} />}
    />
  )
}
