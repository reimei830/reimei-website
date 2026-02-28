'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import Logo from './Logo'

const GeometricBackground = dynamic(() => import('./GeometricBackground'), {
  ssr: false,
  loading: () => null,
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 167, 225, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 167, 225, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* 3D Geometric background effect */}
      <GeometricBackground />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-3xl" />

      {/* Centered text content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo size="large" />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-white">テクノロジーで</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400 text-glow">
            製造業の未来を
          </span>
          <br />
          <span className="text-white">創造する</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
          PLC設計と協働ロボット統合で
          <br className="md:hidden" />
          生産性向上を実現
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg font-bold text-lg bg-gradient-to-r from-neon-blue to-blue-500 text-white shadow-neon hover:shadow-neon-strong transition-all duration-300 transform hover:scale-105 text-center"
          >
            お問い合わせ
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 rounded-lg font-bold text-lg border border-white/20 text-gray-300 hover:text-neon-blue hover:border-neon-blue/50 transition-all duration-300 text-center"
          >
            サービス詳細
          </Link>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg-secondary to-transparent" />
    </section>
  )
}
