'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function CountUp({ end, duration = 2, suffix = '', className = '' }: CountUpProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          const controls = animate(count, end, { duration })
          return controls.stop
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end, duration, isVisible])

  return (
    <div ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  )
}