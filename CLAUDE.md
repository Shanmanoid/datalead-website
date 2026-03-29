# CLAUDE.md

## Build Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173/datalead/)
npm run build        # TypeScript check + Vite production build
npm run lint         # ESLint
npm run test         # Vitest
```

## Project Structure

- `src/pages/` — Page components (lazy-loaded via `config/routes.tsx`)
- `src/components/layout/` — Header, Footer, RootLayout
- `src/components/sections/` — HeroSection, BusinessValuePreview, ServiceCard, CTABanner, etc.
- `src/components/ui/` — Reusable UI: Button, Card, Badge, ContactForm, etc.
- `src/config/site.ts` — Company metadata (phone, email, address, stats)
- `src/utils/constants.ts` — Services data (12 services with categories)
- `public/locales/en/` and `public/locales/az/` — i18n translation JSON files

## Architecture Notes

- **Base path:** `/datalead/` (configured in `vite.config.ts` base and `App.tsx` BrowserRouter basename)
- **i18n:** i18next with HTTP backend loading from `public/locales/{lang}/{namespace}.json`. Language stored in localStorage key `datalead-lang`. Fallback: English.
- **Theme:** Dark/light mode via React Context (`hooks/useTheme.ts`), stored in localStorage key `datalead-theme`
- **Styling:** Tailwind CSS 4 with custom theme tokens defined in `src/index.css` (brand colors, surfaces, text)
- **Animations:** Motion library (Framer Motion) for scroll reveals and interactions
- **Forms:** React Hook Form + Zod validation (ContactForm)
- **Path alias:** `@/*` maps to `./src/*`

## i18n Namespaces

`common`, `home`, `about`, `services-detail`, `contact`, `clients`, `portfolio`, `team`, `docs`, `business-value`, `partners`

When adding new text, put it in the appropriate namespace JSON file in both `en/` and `az/` locale folders.

## Services Data

12 services defined in `src/utils/constants.ts` with categories `database` (8) and `platform` (4). Each has a detail page in `src/pages/services/` using the shared `ServiceDetailLayout` component.

## Deployment

Docker-based via GitHub Actions. Pushes to `master` deploy to production (datalead.az), pushes to `dev` deploy to staging (dev.datalead.az). See `.env.example` for required secrets.
