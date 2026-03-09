import { useTranslation } from 'react-i18next'
import { cn } from '@/utils/cn'

const languages = [
  { code: 'az', label: 'AZ' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  return (
    <div className="flex items-center gap-1 bg-surface-alt rounded-lg p-1">
      {languages.map(lang => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={cn(
            'px-2.5 py-1 text-xs font-semibold rounded-md transition-all duration-200 cursor-pointer',
            i18n.language === lang.code
              ? 'bg-brand text-white shadow-sm'
              : 'text-text-muted hover:text-text-primary'
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
