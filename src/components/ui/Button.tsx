import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/utils/cn'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.1 }}
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand',
        {
          'bg-brand text-white hover:bg-brand-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5':
            variant === 'primary',
          'bg-surface-alt text-text-primary hover:bg-border dark:hover:bg-border':
            variant === 'secondary',
          'border-2 border-brand text-brand hover:bg-brand hover:text-white':
            variant === 'outline',
          'text-text-secondary hover:text-text-primary hover:bg-surface-alt':
            variant === 'ghost',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
