import { type ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={cn(
        'rounded-2xl p-6 bg-surface-elevated border border-border',
        'shadow-sm transition-shadow duration-300',
        hover && 'hover:shadow-xl cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
