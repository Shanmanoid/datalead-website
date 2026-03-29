import { BrainCircuit } from 'lucide-react'
import { ServiceDetailLayout } from './ServiceDetailLayout'

export default function AiMlPage() {
  return (
    <ServiceDetailLayout
      titleKey="services.aiml.title"
      descriptionKey="services.aiml.description"
      problemKey="services.aiml.problem"
      solutionKey="services.aiml.solution"
      features={[
        'services.aiml.f1',
        'services.aiml.f2',
        'services.aiml.f3',
        'services.aiml.f4',
        'services.aiml.f5',
        'services.aiml.f6',
        'services.aiml.f7',
      ]}
      technologies={['Python', 'TensorFlow', 'Apache Spark MLlib', 'IOMETE', 'Kubernetes']}
      icon={<BrainCircuit size={32} />}
    />
  )
}
