import { useEffect, useRef, memo } from 'react'
import { cn } from '@/utils/cn'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MatrixRainProps {
  speed?: number
  density?: number
  opacity?: number
  className?: string
  color?: string
}

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]=/\\*+-.,:;'

export const MatrixRain = memo(function MatrixRain({
  speed = 1,
  density = 0.8,
  opacity = 0.06,
  className,
  color,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const isVisibleRef = useRef(true)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reducedMotion) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let columns: number[] = []
    const fontSize = 14
    const isMobile = window.innerWidth < 768

    const effectiveDensity = isMobile ? density * 0.4 : density

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      const colCount = Math.floor((canvas.offsetWidth / fontSize) * effectiveDensity)
      columns = Array.from({ length: colCount }, () =>
        Math.random() * canvas.offsetHeight / fontSize
      )
    }

    resize()
    window.addEventListener('resize', resize)

    const computedStyle = getComputedStyle(document.documentElement)
    const brandColor = color || computedStyle.getPropertyValue('--color-brand').trim() || '#1a56db'

    const draw = () => {
      if (!isVisibleRef.current) {
        animRef.current = requestAnimationFrame(draw)
        return
      }

      ctx.fillStyle = `rgba(${document.documentElement.classList.contains('dark') ? '15,23,42' : '255,255,255'}, 0.08)`
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      ctx.fillStyle = brandColor
      ctx.globalAlpha = opacity
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < columns.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = (i / effectiveDensity) * fontSize
        const y = columns[i] * fontSize

        ctx.globalAlpha = opacity * (0.3 + Math.random() * 0.7)
        ctx.fillText(char, x, y)

        if (y > canvas.offsetHeight && Math.random() > 0.975) {
          columns[i] = 0
        }
        columns[i] += speed * (0.5 + Math.random() * 0.5)
      }

      ctx.globalAlpha = 1
      animRef.current = requestAnimationFrame(draw)
    }

    // IntersectionObserver to pause offscreen
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting },
      { threshold: 0 }
    )
    observer.observe(canvas)

    animRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      observer.disconnect()
    }
  }, [speed, density, opacity, color, reducedMotion])

  if (reducedMotion) return null

  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute inset-0 w-full h-full pointer-events-none', className)}
      aria-hidden="true"
    />
  )
})
