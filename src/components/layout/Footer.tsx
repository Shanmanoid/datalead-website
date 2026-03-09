import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { siteConfig } from '@/config/site'

export function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-alt border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-text-secondary leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {[
                { path: '/about', label: t('nav.about') },
                { path: '/services', label: t('nav.services') },
                { path: '/portfolio', label: t('nav.portfolio') },
                { path: '/prices', label: t('nav.prices') },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2">
              {[
                { path: '/services/db-support', label: t('services.dbSupport.title') },
                { path: '/services/postgresql', label: t('services.postgresql.title') },
                { path: '/services/data-platform', label: t('services.platform.title') },
                { path: '/services/etl-pipeline', label: t('services.etl.title') },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">
              {t('footer.contactUs')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                {siteConfig.contact.address}
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-brand transition-colors"
                >
                  <Phone size={16} className="shrink-0 text-brand" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-brand transition-colors"
                >
                  <Mail size={16} className="shrink-0 text-brand" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {year} {siteConfig.name}. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/docs"
              className="text-sm text-text-muted hover:text-brand transition-colors"
            >
              {t('nav.docs')}
            </Link>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-brand transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-brand transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
