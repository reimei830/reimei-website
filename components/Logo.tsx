'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

export default function Logo({ size = 'medium', className = '' }: LogoProps) {
  const sizes = {
    small: { width: 96, height: 49 },
    medium: { width: 192, height: 98 },
    large: { width: 384, height: 197 },
  }

  const { width, height } = sizes[size]
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Particle count scales with size
  const particleCount = size === 'large' ? 16 : size === 'medium' ? 10 : 6
  const particles = isHovered
    ? Array.from({ length: particleCount }, (_, i) => {
        const angle = (i / particleCount) * Math.PI * 2
        const distance = (size === 'large' ? 80 : size === 'medium' ? 50 : 30) + Math.random() * 30
        return {
          id: i,
          startX: Math.cos(angle) * distance,
          startY: Math.sin(angle) * distance,
          delay: i * 0.03,
        }
      })
    : []

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={mounted ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Always-on neon glow (subtle pulse) */}
      <div
        className="absolute inset-0 animate-logo-glow rounded-lg pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,167,225,0.3) 0%, transparent 70%)',
          filter: 'blur(12px)',
          transform: isHovered ? 'scale(1.5)' : 'scale(1.1)',
          opacity: isHovered ? 0.7 : 0.25,
          transition: 'all 0.5s ease',
        }}
      />

      {/* Shine sweep (triggers on hover) */}
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none z-20">
        <div
          className={isHovered ? 'animate-shine' : ''}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, transparent 40%, rgba(0,167,225,0.2) 45%, rgba(255,255,255,0.25) 50%, rgba(0,167,225,0.2) 55%, transparent 60%)',
            transform: 'translateX(-100%)',
          }}
        />
      </div>

      {/* Main logo video */}
      <video
        ref={videoRef}
        src="/logo-animation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="relative z-10"
        style={{
          width,
          height,
          objectFit: 'contain',
          filter: isHovered
            ? 'drop-shadow(0 0 12px rgba(0,167,225,0.7)) drop-shadow(0 0 30px rgba(0,167,225,0.4)) brightness(1.2)'
            : 'drop-shadow(0 0 6px rgba(0,167,225,0.3)) drop-shadow(0 0 15px rgba(0,167,225,0.1))',
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'all 0.4s ease',
        }}
      />

      {/* Converging particles on hover */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-neon-blue z-20 pointer-events-none"
            style={{
              width: size === 'large' ? 4 : 3,
              height: size === 'large' ? 4 : 3,
              boxShadow: '0 0 8px rgba(0,167,225,0.9), 0 0 16px rgba(0,167,225,0.4)',
              left: '50%',
              top: '50%',
            }}
            initial={{
              x: p.startX,
              y: p.startY,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: p.delay,
              ease: 'easeIn',
            }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
