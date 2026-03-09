import { ScrollReveal } from './ScrollReveal'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <ScrollReveal className={centered ? 'text-center' : ''}>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center justify-center">
        <span className="h-1 w-16 bg-gradient-to-r from-brand to-brand-light rounded-full" />
      </div>
    </ScrollReveal>
  )
}
