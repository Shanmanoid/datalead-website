import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeContext, useThemeProvider } from '@/hooks/useTheme'
import { RootLayout } from '@/components/layout/RootLayout'
import {
  HomePage,
  AboutPage,
  ServicesPage,
  ContactPage,
  TeamPage,
  ClientsPage,
  PortfolioPage,
  DocsPage,
  NotFoundPage,
  DbSupportPage,
  PostgresqlPage,
  DwhDataLakesPage,
  NoSqlPage,
  DbMigrationPage,
  DbaTrainingPage,
  DbSecurityPage,
  AiMlPage,
  DataPlatformPage,
  EtlPipelinePage,
  BiAnalyticsPage,
  DbGovernancePage,
} from '@/config/routes'

function LoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-brand border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  const themeValue = useThemeProvider()

  return (
    <ThemeContext.Provider value={themeValue}>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/db-support" element={<DbSupportPage />} />
              <Route path="services/postgresql" element={<PostgresqlPage />} />
              <Route path="services/dwh-data-lakes" element={<DwhDataLakesPage />} />
              <Route path="services/nosql" element={<NoSqlPage />} />
              <Route path="services/db-migration" element={<DbMigrationPage />} />
              <Route path="services/dba-training" element={<DbaTrainingPage />} />
              <Route path="services/db-security" element={<DbSecurityPage />} />
              <Route path="services/ai-ml" element={<AiMlPage />} />
              <Route path="services/data-platform" element={<DataPlatformPage />} />
              <Route path="services/etl-pipeline" element={<EtlPipelinePage />} />
              <Route path="services/bi-analytics" element={<BiAnalyticsPage />} />
              <Route path="services/db-governance" element={<DbGovernancePage />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="clients" element={<ClientsPage />} />
              <Route path="docs" element={<DocsPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
