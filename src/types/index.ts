export interface Service {
  id: string
  icon: string
  titleKey: string
  descriptionKey: string
  path: string
  category: 'database' | 'platform'
}

export interface TeamMember {
  id: string
  nameKey: string
  roleKey: string
  image: string
}

export interface Client {
  id: string
  name: string
  logo: string
  sector: 'government' | 'banking' | 'enterprise'
}

export interface Partner {
  id: string
  name: string
  logo: string
  descriptionKey: string
  url: string
}

export interface PricingTier {
  id: string
  nameKey: string
  price: string
  minKey?: string
  featuresKeys: string[]
  highlighted?: boolean
  ctaKey: string
}

export interface PortfolioItem {
  id: string
  titleKey: string
  descriptionKey: string
  client: string
  category: string
  technologies: string[]
}
