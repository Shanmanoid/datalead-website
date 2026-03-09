import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-brand mb-4">404</h1>
        <p className="text-xl text-text-secondary mb-8">{t('notFound.message')}</p>
        <Link to="/">
          <Button>
            <Home size={18} className="mr-2" />
            {t('notFound.backHome')}
          </Button>
        </Link>
      </div>
    </section>
  )
}
