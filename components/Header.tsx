'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* ロゴ */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="small" />
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-reimei-blue transition-colors font-medium">
              事業内容
            </Link>
            <Link href="#achievements" className="text-gray-700 hover:text-reimei-blue transition-colors font-medium">
              実績
            </Link>
            <Link href="#company" className="text-gray-700 hover:text-reimei-blue transition-colors font-medium">
              会社概要
            </Link>
            <Link href="#contact" className="bg-reimei-blue text-white px-6 py-2 rounded-md hover:bg-reimei-light-blue transition-colors font-medium">
              お問い合わせ
            </Link>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="#services" className="text-gray-700 hover:text-reimei-blue py-2" onClick={() => setIsMenuOpen(false)}>
                事業内容
              </Link>
              <Link href="#achievements" className="text-gray-700 hover:text-reimei-blue py-2" onClick={() => setIsMenuOpen(false)}>
                実績
              </Link>
              <Link href="#company" className="text-gray-700 hover:text-reimei-blue py-2" onClick={() => setIsMenuOpen(false)}>
                会社概要
              </Link>
              <Link href="#contact" className="bg-reimei-blue text-white px-6 py-2 rounded-md hover:bg-reimei-light-blue text-center" onClick={() => setIsMenuOpen(false)}>
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
