import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/utils/cn'

const kbSections = [
  {
    titleKey: 'docs:sections.operations.title',
    items: [
      { qKey: 'docs:sections.operations.q1', aKey: 'docs:sections.operations.a1' },
      { qKey: 'docs:sections.operations.q2', aKey: 'docs:sections.operations.a2' },
      { qKey: 'docs:sections.operations.q3', aKey: 'docs:sections.operations.a3' },
      { qKey: 'docs:sections.operations.q4', aKey: 'docs:sections.operations.a4' },
      { qKey: 'docs:sections.operations.q5', aKey: 'docs:sections.operations.a5' },
    ],
  },
  {
    titleKey: 'docs:sections.engineering.title',
    items: [
      { qKey: 'docs:sections.engineering.q1', aKey: 'docs:sections.engineering.a1' },
      { qKey: 'docs:sections.engineering.q2', aKey: 'docs:sections.engineering.a2' },
      { qKey: 'docs:sections.engineering.q3', aKey: 'docs:sections.engineering.a3' },
      { qKey: 'docs:sections.engineering.q4', aKey: 'docs:sections.engineering.a4' },
      { qKey: 'docs:sections.engineering.q5', aKey: 'docs:sections.engineering.a5' },
      { qKey: 'docs:sections.engineering.q6', aKey: 'docs:sections.engineering.a6' },
    ],
  },
  {
    titleKey: 'docs:sections.governance.title',
    items: [
      { qKey: 'docs:sections.governance.q1', aKey: 'docs:sections.governance.a1' },
      { qKey: 'docs:sections.governance.q2', aKey: 'docs:sections.governance.a2' },
      { qKey: 'docs:sections.governance.q3', aKey: 'docs:sections.governance.a3' },
      { qKey: 'docs:sections.governance.q4', aKey: 'docs:sections.governance.a4' },
      { qKey: 'docs:sections.governance.q5', aKey: 'docs:sections.governance.a5' },
      { qKey: 'docs:sections.governance.q6', aKey: 'docs:sections.governance.a6' },
    ],
  },
]

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-surface-elevated hover:bg-surface-alt transition-colors cursor-pointer"
      >
        <span className="font-medium text-text-primary pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={cn(
            'text-text-muted transition-transform shrink-0',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-5 bg-surface-alt text-text-secondary text-sm leading-relaxed border-t border-border">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function DocsPage() {
  const { t } = useTranslation('docs')

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-brand-dark to-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('hero.title')}</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {kbSections.map((section, si) => (
            <ScrollReveal key={si} delay={si * 0.1}>
              <div className="mb-12">
                <SectionHeading title={t(section.titleKey)} />
                <div className="mt-6 space-y-3">
                  {section.items.map((item, ii) => (
                    <AccordionItem
                      key={ii}
                      question={t(item.qKey)}
                      answer={t(item.aKey)}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}
