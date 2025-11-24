'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/#services', label: '事業内容' },
    { href: '/#achievements', label: '実績' },
    { href: '/#company', label: '会社概要' },
  ]

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20' 
          : 'bg-white shadow-md'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 py-2">
          <Link href="/" className="flex items-center group">
            <div className="transform transition-transform duration-300 group-hover:scale-110">
              <Logo size="small" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-reimei-blue font-medium transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-reimei-blue to-reimei-light-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-reimei-blue to-reimei-light-blue text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/50'
                  : 'bg-reimei-blue text-white hover:bg-reimei-light-blue shadow-md'
              }`}
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'bg-white/50 backdrop-blur-lg'
                : 'bg-gray-100'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className={`md:hidden pb-4 transition-all duration-300 ${
              isScrolled
                ? 'bg-white/90 backdrop-blur-xl rounded-b-2xl border-t border-white/20'
                : 'bg-white'
            }`}
            style={{
              backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
            }}
          >
            <div className="flex flex-col space-y-3 px-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-reimei-blue hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-reimei-blue to-reimei-light-blue text-white hover:shadow-lg hover:shadow-blue-500/50 font-bold py-3 px-4 rounded-lg transition-all duration-300 text-center transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}