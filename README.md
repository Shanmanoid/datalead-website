# DataLead Consulting Website

Corporate website for **DataLead Consulting** — an enterprise data resilience and AI-ready platforms company based in Baku, Azerbaijan.

**Live:** https://datalead.az/datalead/

## Tech Stack

- **Framework:** React 19 + TypeScript 5.9
- **Build:** Vite 7.3
- **Styling:** Tailwind CSS 4.2
- **Routing:** React Router 7 (lazy-loaded pages)
- **i18n:** i18next (English + Azerbaijani)
- **Forms:** React Hook Form + Zod
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Testing:** Vitest
- **Deployment:** Docker + Nginx + GitHub Actions CI/CD

## Local Development

**Prerequisites:** Node.js 22+ (see `.nvmrc`)

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173/datalead/
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests (Vitest) |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
  App.tsx                  # Router setup, theme provider
  main.tsx                 # Entry point, i18n init
  index.css                # Tailwind + custom theme tokens

  config/
    routes.tsx             # Lazy-loaded page imports
    i18n.ts                # i18next configuration
    site.ts                # Company metadata (contact, social, stats)

  pages/
    HomePage.tsx           # Landing page
    AboutPage.tsx          # Mission, values, timeline
    ServicesPage.tsx        # 12 services with category filtering
    ContactPage.tsx        # Contact form + info
    ClientsPage.tsx        # Customer logos by sector
    PortfolioPage.tsx      # Case studies
    TeamPage.tsx           # Team members
    DocsPage.tsx           # FAQ / documentation
    NotFoundPage.tsx       # 404
    services/              # 11 service detail pages + shared layout

  components/
    layout/                # Header, Footer, RootLayout, PageTransition
    sections/              # HeroSection, BusinessValuePreview, ServiceCard, etc.
    ui/                    # Button, Card, Badge, ContactForm, etc.

  hooks/                   # useTheme, useScrollAnimation, useAnimatedCounter
  utils/                   # constants (services data), cn, publicPath
  types/                   # TypeScript interfaces

public/
  locales/
    en/                    # English translations (11 JSON files)
    az/                    # Azerbaijani translations (11 JSON files)
  images/                  # Logos, client logos, partner logos
```

## Internationalization (i18n)

The site supports **English** and **Azerbaijani**. Translation files are in `public/locales/{lang}/`.

**Namespaces:** `common`, `home`, `about`, `services-detail`, `contact`, `clients`, `portfolio`, `team`, `docs`, `business-value`, `partners`

To add/edit translations:
1. Edit the JSON file in `public/locales/en/` (English)
2. Add the corresponding translation in `public/locales/az/` (Azerbaijani)
3. Use in components: `const { t } = useTranslation('namespace')`

Language is auto-detected from browser and stored in `localStorage` key `datalead-lang`.

## Base Path

The app is served under `/datalead/` base path (configured in `vite.config.ts` and `App.tsx` BrowserRouter basename). All routes are relative to this base.

## Deployment

### Docker (Production)

The project uses a 2-stage Docker build (Node 22 builder + Alpine with rsync).

```bash
# Build and deploy via CI/CD (GitHub Actions)
# Pushes to `master` → production (datalead.az)
# Pushes to `dev` → staging (dev.datalead.az)
```

### CI/CD Pipeline (GitHub Actions)

Pipeline: **Lint → Test → Build Docker → Push to GHCR → Deploy to VPS**

**Required GitHub Secrets:**

| Secret | Description |
|--------|-------------|
| `VPS_HOST` | VPS IP address |
| `VPS_USER` | SSH username for deployment |
| `VPS_SSH_KEY` | Private SSH key for VPS |
| `GHCR_TOKEN` | GitHub PAT with `packages:read` scope |
| `GHCR_USER` | GitHub username for container registry |

See `.env.example` for full documentation.

### Nginx

Nginx configs are in `nginx/`:
- `datalead.conf` — production (datalead.az)
- `datalead-dev.conf` — staging (dev.datalead.az)

These expect the built static files in `/var/www/datalead-website/` (production) and `/var/www/dev.datalead-website/` (staging).

### VPS Setup

On the VPS, the deployment expects:
1. Docker installed
2. Nginx installed and configured
3. Project cloned to `/opt/datalead-website` (for docker-compose files)
4. Static file directories: `/var/www/datalead-website/` and `/var/www/dev.datalead-website/`

## Services

The site showcases 12 services in 2 categories:

**Database (8):** DB Support, PostgreSQL, DWH & Data Lakes, NoSQL, DB Migration, DBA Training, DB Security, AI/ML

**Platform (4):** Data Platform (IOMETE), ETL Pipeline, BI & Analytics, DB Governance

## Reference Documents

The `reference-docs/` directory contains source presentations and PDFs used for website content. These are reference materials only and not part of the build.

## Key Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build config, base path, plugins |
| `tsconfig.app.json` | TypeScript config (strict, path aliases) |
| `tailwind.config` | Integrated via Vite plugin (v4) |
| `.mcp.json` | MCP servers (Playwright, Vercel, Figma) |
| `Dockerfile` | Multi-stage build |
| `docker-compose.yml` | Production deployment |
| `docker-compose.dev.yml` | Dev/staging deployment |
