import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { Button } from './Button'
import { cn } from '@/utils/cn'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const { t } = useTranslation('contact')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-green-500 mb-4" />
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {t('form.successTitle')}
        </h3>
        <p className="text-text-secondary">{t('form.successMessage')}</p>
      </div>
    )
  }

  const inputClass = cn(
    'w-full px-4 py-3.5 rounded-lg bg-surface border border-border',
    'text-text-primary placeholder:text-text-muted',
    'focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent',
    'transition-all duration-200'
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            {t('form.name')} *
          </label>
          <input
            {...register('name')}
            className={cn(inputClass, errors.name && 'border-accent')}
            placeholder={t('form.namePlaceholder')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            {t('form.email')} *
          </label>
          <input
            {...register('email')}
            type="email"
            className={cn(inputClass, errors.email && 'border-accent')}
            placeholder={t('form.emailPlaceholder')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            {t('form.phone')}
          </label>
          <input
            {...register('phone')}
            className={inputClass}
            placeholder={t('form.phonePlaceholder')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            {t('form.company')}
          </label>
          <input
            {...register('company')}
            className={inputClass}
            placeholder={t('form.companyPlaceholder')}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          {t('form.service')}
        </label>
        <select {...register('service')} className={inputClass}>
          <option value="">{t('form.servicePlaceholder')}</option>
          <option value="db-support">{t('form.serviceOptions.dbSupport')}</option>
          <option value="postgresql">{t('form.serviceOptions.postgresql')}</option>
          <option value="data-platform">{t('form.serviceOptions.platform')}</option>
          <option value="etl">{t('form.serviceOptions.etl')}</option>
          <option value="bi">{t('form.serviceOptions.bi')}</option>
          <option value="other">{t('form.serviceOptions.other')}</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          {t('form.message')} *
        </label>
        <textarea
          {...register('message')}
          rows={5}
          className={cn(inputClass, 'resize-none', errors.message && 'border-accent')}
          placeholder={t('form.messagePlaceholder')}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        <Send size={18} className="mr-2" />
        {t('form.submit')}
      </Button>
    </form>
  )
}
