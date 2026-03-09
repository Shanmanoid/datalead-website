import { ShieldCheck } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function DbSecurityPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.security.title"
      descriptionKey="services.security.description"
      problemKey="services.security.problem"
      solutionKey="services.security.solution"
      features={[
        'services.security.f1',
        'services.security.f2',
        'services.security.f3',
        'services.security.f4',
      ]}
      technologies={['DataSunrise', 'Oracle TDE', 'PostgreSQL', 'Vault']}
      icon={<ShieldCheck size={32} />}
    />
  )
}
