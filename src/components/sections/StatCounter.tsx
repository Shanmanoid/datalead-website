import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import { cn } from '@/utils/cn'
import type { LucideIcon } from 'lucide-react'

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  icon: LucideIcon
  color?: string
  className?: string
}

export function StatCounter({
  value,
  label,
  suffix = '',
  icon: Icon,
  color = 'var(--color-brand)',
  className,
}: StatCounterProps) {
  const { ref, count } = useAnimatedCounter(value)
  const percentage = Math.min((count / value) * 100, 100)
  const circumference = 2 * Math.PI * 36

  return (
    <div ref={ref} className={cn('flex flex-col items-center gap-3', className)}>
      <div className="relative w-20 h-20 md:w-24 md:h-24">
        {/* Background ring */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-border/30 dark:text-border/20"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            fill="none"
            stroke={color}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percentage / 100)}
            className="transition-[stroke-dashoffset] duration-100 ease-out"
          />
        </svg>
        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={24} style={{ color }} />
        </div>
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-text-primary">
          {count}{suffix}
        </div>
        <div className="text-sm text-text-muted mt-1">
          {label}
        </div>
      </div>
    </div>
  )
}
