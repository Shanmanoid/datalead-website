import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'brand' | 'accent'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold',
        {
          'bg-surface-alt text-text-secondary': variant === 'default',
          'bg-brand/10 text-brand': variant === 'brand',
          'bg-accent/10 text-accent': variant === 'accent',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
