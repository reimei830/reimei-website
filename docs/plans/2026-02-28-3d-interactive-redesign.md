# 3D Interactive Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the Reimei Tech website from a light-themed B2B site into a dark, 3D-interactive experience with a Three.js robot arm model in the Hero, glowing card effects, and marquee animations.

**Architecture:** Phase-based approach — dark theme first (touching all components), then 3D model in Hero, then progressive enhancement of each section. React Three Fiber for 3D, Framer Motion for scroll animations, CSS for glow/glassmorphism effects.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 3, Framer Motion, React Three Fiber, @react-three/drei, Three.js

---

## Task 1: Install 3D dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install Three.js ecosystem packages**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm install three @react-three/fiber @react-three/drei
```

**Step 2: Install Three.js type definitions**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm install -D @types/three
```

**Step 3: Verify installation**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm ls three @react-three/fiber @react-three/drei
```
Expected: All three packages listed without errors.

**Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add Three.js, React Three Fiber, and Drei dependencies"
```

---

## Task 2: Dark theme — Tailwind config and global CSS

**Files:**
- Modify: `tailwind.config.js`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Step 1: Update Tailwind color palette**

In `tailwind.config.js`, extend the colors object to add dark theme tokens:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'reimei-blue': '#003f87',
        'reimei-light-blue': '#00a7e1',
        'reimei-green': '#6b7c3c',
        'reimei-orange': '#f5a623',
        // Dark theme tokens
        'dark-bg': '#0a0a0f',
        'dark-bg-secondary': '#111827',
        'dark-card': '#1a1a2e',
        'dark-border': '#1e293b',
        'neon-blue': '#00a7e1',
        'neon-blue-dim': '#0077a3',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 167, 225, 0.3)',
        'neon-strong': '0 0 40px rgba(0, 167, 225, 0.5)',
        'neon-text': '0 0 10px rgba(0, 167, 225, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 167, 225, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 167, 225, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
```

**Step 2: Update globals.css with dark base styles**

Replace `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-dark-bg text-gray-100;
  }

  ::selection {
    @apply bg-neon-blue/30 text-white;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    @apply bg-dark-bg;
  }
  ::-webkit-scrollbar-thumb {
    @apply bg-dark-border rounded-full;
  }
  ::-webkit-scrollbar-thumb:hover {
    @apply bg-neon-blue/50;
  }
}

@layer utilities {
  .text-glow {
    text-shadow: 0 0 20px rgba(0, 167, 225, 0.5);
  }
  .text-glow-strong {
    text-shadow: 0 0 30px rgba(0, 167, 225, 0.7), 0 0 60px rgba(0, 167, 225, 0.3);
  }
  .border-glow {
    box-shadow: 0 0 15px rgba(0, 167, 225, 0.2), inset 0 0 15px rgba(0, 167, 225, 0.05);
  }
  .glass {
    @apply bg-white/5 backdrop-blur-xl border border-white/10;
  }
  .glass-card {
    @apply bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl;
  }
}
```

**Step 3: Update layout.tsx body class**

In `app/layout.tsx`, update the body tag:

Change:
```tsx
<body className={inter.className}>{children}</body>
```
To:
```tsx
<body className={`${inter.className} bg-dark-bg text-gray-100 antialiased`}>{children}</body>
```

**Step 4: Verify build compiles**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm run build
```
Expected: Build succeeds (page rendering may look wrong — colors only, no content changes yet).

**Step 5: Commit**

```bash
git add tailwind.config.js app/globals.css app/layout.tsx
git commit -m "feat: add dark theme foundation — Tailwind config, global CSS, layout"
```

---

## Task 3: Dark theme — Header component

**Files:**
- Modify: `components/Header.tsx`

**Step 1: Update Header to dark theme**

Replace `components/Header.tsx` with the dark-themed version:

```tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
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
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      }`}
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
                className="relative text-gray-300 hover:text-neon-blue font-medium transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:shadow-neon"
            >
              お問い合わせ
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg transition-all duration-300 text-gray-300 hover:text-neon-blue"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-dark-bg/95 backdrop-blur-xl rounded-b-2xl border-t border-white/5">
            <div className="flex flex-col space-y-3 px-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-neon-blue hover:bg-white/5 font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 font-bold py-3 px-4 rounded-lg transition-all duration-300 text-center"
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
```

**Step 2: Verify dev server renders correctly**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm run dev
```
Expected: Header is transparent on dark background, becomes blurred dark on scroll.

**Step 3: Commit**

```bash
git add components/Header.tsx
git commit -m "feat: convert Header to dark theme with transparent/blur states"
```

---

## Task 4: Dark theme — Hero section (placeholder, no 3D yet)

**Files:**
- Modify: `components/Hero.tsx`

**Step 1: Convert Hero to dark theme with two-column layout**

Replace `components/Hero.tsx` — this creates the dark layout structure. The 3D model will be added in Task 6.

```tsx
'use client'

import Link from 'next/link'

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

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-white">テクノロジーで</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400 text-glow">
                製造業の未来を
              </span>
              <br />
              <span className="text-white">創造する</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              PLC設計と協働ロボット統合で
              <br className="md:hidden" />
              生産性向上を実現
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right: 3D model placeholder — will be replaced in Task 6 */}
          <div className="hidden md:flex items-center justify-center h-[500px]">
            <div className="w-80 h-80 rounded-full border border-neon-blue/20 flex items-center justify-center animate-glow-pulse">
              <div className="w-60 h-60 rounded-full border border-neon-blue/10 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-neon-blue/5 flex items-center justify-center">
                  <span className="text-neon-blue/50 text-sm">3D Model</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
    </section>
  )
}
```

**Step 2: Verify in browser**

Run dev server and check Hero renders with dark background, grid pattern, and two-column layout.

**Step 3: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: convert Hero to dark theme with two-column layout for 3D model"
```

---

## Task 5: Dark theme — Services, Achievements, Company, Footer

**Files:**
- Modify: `components/Services.tsx`
- Modify: `components/Achievements.tsx`
- Modify: `components/Company.tsx`
- Modify: `components/Footer.tsx`

**Step 1: Update Services.tsx to dark theme**

Replace `components/Services.tsx`:

```tsx
'use client'

import { useState } from 'react'
import FadeIn from './FadeIn'

export default function Services() {
  const [plcHover, setPlcHover] = useState(false)
  const [robotHover, setRobotHover] = useState(false)

  return (
    <section id="services" className="py-20 bg-dark-bg-secondary relative">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400 mb-4">
              事業内容
            </h2>
            <p className="text-xl text-gray-400">製造業向け自動化設備の電気設計施工</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PLC設計 */}
          <FadeIn delay={0.1} direction="left">
            <div
              className="relative"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setPlcHover(true)}
              onMouseLeave={() => setPlcHover(false)}
            >
              <div
                className="glass-card p-8 transition-all duration-500 transform-gpu"
                style={{
                  transform: plcHover
                    ? 'rotateY(-5deg) rotateX(5deg) translateY(-10px) scale(1.02)'
                    : 'rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)',
                  boxShadow: plcHover
                    ? '0 25px 50px -12px rgba(0, 167, 225, 0.3), 0 0 30px rgba(0, 167, 225, 0.1)'
                    : '0 0 0 rgba(0, 0, 0, 0)',
                  borderColor: plcHover ? 'rgba(0, 167, 225, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="bg-neon-blue/20 text-neon-blue p-4 rounded-lg transition-all duration-300"
                    style={{
                      transform: plcHover ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                      boxShadow: plcHover ? '0 0 20px rgba(0, 167, 225, 0.3)' : 'none',
                    }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">PLC設計</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  製造現場の自動化に欠かせないPLC（プログラマブルロジックコントローラー）の設計・開発を行います。
                  豊富な経験と技術力で、お客様のニーズに最適な制御システムを提供します。
                </p>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-bold text-gray-200 mb-3">対応メーカー</h4>
                  <div className="flex flex-wrap gap-2">
                    {['三菱電機', 'KEYENCE', 'TOYOPUC', 'WAGO'].map((name) => (
                      <span key={name} className="bg-neon-blue/10 text-neon-blue border border-neon-blue/20 px-3 py-1 rounded-full text-sm hover:bg-neon-blue/20 hover:shadow-neon transition-all duration-200">
                        {name}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-200 mt-4 mb-3">特徴</h4>
                  <ul className="space-y-2 text-gray-400">
                    {['ロボット統合制御に精通', 'Modbus通信システム構築', '高速・高精度な制御プログラム'].map((text) => (
                      <li key={text} className="flex items-start transition-all duration-200 hover:translate-x-2 hover:text-gray-300">
                        <span className="text-neon-blue mr-2">&#10003;</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* 協働ロボット統合 */}
          <FadeIn delay={0.2} direction="right">
            <div
              className="relative"
              style={{ perspective: '1000px' }}
              onMouseEnter={() => setRobotHover(true)}
              onMouseLeave={() => setRobotHover(false)}
            >
              <div
                className="glass-card p-8 transition-all duration-500 transform-gpu"
                style={{
                  transform: robotHover
                    ? 'rotateY(5deg) rotateX(5deg) translateY(-10px) scale(1.02)'
                    : 'rotateY(0deg) rotateX(0deg) translateY(0px) scale(1)',
                  boxShadow: robotHover
                    ? '0 25px 50px -12px rgba(0, 167, 225, 0.3), 0 0 30px rgba(0, 167, 225, 0.1)'
                    : '0 0 0 rgba(0, 0, 0, 0)',
                  borderColor: robotHover ? 'rgba(0, 167, 225, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="bg-neon-blue/20 text-neon-blue p-4 rounded-lg transition-all duration-300"
                    style={{
                      transform: robotHover ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
                      boxShadow: robotHover ? '0 0 20px rgba(0, 167, 225, 0.3)' : 'none',
                    }}
                  >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white ml-4">協働ロボット統合</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  協働ロボットと産業用ロボットを活用した自動化設備を設計・製作します。
                  小物部品の搬送検査、洗浄部品のプレ乾燥など、様々な用途に対応可能です。
                </p>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-bold text-gray-200 mb-3">対応ロボット</h4>
                  <div className="space-y-2 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-300">協働ロボット</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {['FAIRINO', 'JAKA', 'ELITE', 'DENSO'].map((name) => (
                          <span key={name} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-sm hover:bg-emerald-500/20 transition-all duration-200">
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mt-3">産業用ロボット</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {['FANUC', 'NACHI', 'Kawasaki', 'YASUKAWA'].map((name) => (
                          <span key={name} className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-sm hover:bg-emerald-500/20 transition-all duration-200">
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h4 className="font-bold text-gray-200 mb-3">強み</h4>
                  <ul className="space-y-2 text-gray-400">
                    {['コストパフォーマンスの高い設備製作', '幅広いメーカー対応', '柔軟な仕様変更・カスタマイズ'].map((text) => (
                      <li key={text} className="flex items-start transition-all duration-200 hover:translate-x-2 hover:text-gray-300">
                        <span className="text-neon-blue mr-2">&#10003;</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Update Achievements.tsx to dark theme with marquee**

Replace `components/Achievements.tsx`:

```tsx
'use client'

import FadeIn from './FadeIn'
import CountUp from './CountUp'

export default function Achievements() {
  const clients = [
    { name: 'トヨタ自動車', industry: '自動車製造' },
    { name: '三菱自動車', industry: '自動車製造' },
    { name: 'スズキ自動車', industry: '自動車製造' },
    { name: '川崎重工業', industry: '重工業' },
  ]

  return (
    <section id="achievements" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400 mb-4 text-glow">
              導入実績
            </h2>
            <p className="text-xl text-gray-400">
              大手企業をはじめ、多くのお客様にご採用いただいています
            </p>
          </div>
        </FadeIn>

        {/* Client marquee */}
        <FadeIn delay={0.1}>
          <div className="relative mb-12 overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-bg to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-bg to-transparent z-10" />

            <div className="flex animate-marquee gap-6">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 glass-card px-8 py-6 text-center min-w-[200px] hover:border-neon-blue/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-1">{client.name}</h3>
                  <p className="text-sm text-gray-500">{client.industry}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.2}>
          <div className="glass-card p-8 md:p-12 border-neon-blue/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-neon-blue text-glow">
                  <CountUp end={6} duration={2} suffix="+" />
                </div>
                <div className="text-lg font-semibold text-gray-300">創業年数</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-neon-blue text-glow">
                  <CountUp end={100} duration={2.5} suffix="+" />
                </div>
                <div className="text-lg font-semibold text-gray-300">年間実績</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-neon-blue text-glow">
                  <CountUp end={20} duration={2} suffix="+" />
                </div>
                <div className="text-lg font-semibold text-gray-300">年間プロジェクト</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Use cases */}
        <FadeIn delay={0.3}>
          <div className="mt-12 glass-card p-8">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400 mb-6 text-center">
              対応可能な用途
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: '小物部品の搬送検査', desc: '高精度な部品ハンドリングと自動検査システム', icon: 'M5 13l4 4L19 7' },
                { title: '洗浄部品のプレ乾燥', desc: '効率的な乾燥プロセスの自動化', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
                { title: '自動化制御システム', desc: 'ロボットとPLCの統合制御', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
              ].map((item) => (
                <div key={item.title} className="text-center group">
                  <div className="bg-neon-blue/10 text-neon-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-neon transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
```

**Step 3: Update Company.tsx to dark theme**

Replace `components/Company.tsx`:

```tsx
import Link from 'next/link'

export default function Company() {
  const companyInfo = [
    { label: '会社名', value: '株式会社黎明', sub: 'Reimei Inc.' },
    { label: '設立', value: '2020年10月2日' },
    { label: '代表者', value: '堀内 黎希' },
    { label: '所在地', value: '〒454-0972\n愛知県名古屋市中川区服部2丁目308' },
    { label: '電話番号', value: '052-893-6763', isPhone: true },
    { label: '営業時間', value: '9:00〜18:00' },
  ]

  return (
    <section id="company" className="py-20 bg-dark-bg-secondary relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400 mb-4">
            会社概要
          </h2>
          <p className="text-xl text-gray-400">Company Information</p>
        </div>

        <div className="max-w-4xl mx-auto glass-card overflow-hidden">
          <div className="p-8 md:p-12">
            <table className="w-full">
              <tbody className="divide-y divide-white/5">
                {companyInfo.map((item) => (
                  <tr key={item.label}>
                    <td className="py-4 px-4 font-bold text-gray-300 bg-white/5 w-1/3">{item.label}</td>
                    <td className="py-4 px-4 text-gray-400">
                      {item.isPhone ? (
                        <a href="tel:0528936763" className="text-neon-blue hover:text-blue-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <>
                          {item.value.split('\n').map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < item.value.split('\n').length - 1 && <br />}
                            </span>
                          ))}
                          {item.sub && (
                            <>
                              <br />
                              <span className="text-sm text-gray-500">{item.sub}</span>
                            </>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 px-4 font-bold text-gray-300 bg-white/5 w-1/3">事業内容</td>
                  <td className="py-4 px-4 text-gray-400">
                    製造業向けの自動化設備の電気設計施工
                    <ul className="mt-2 space-y-1 text-sm">
                      {['PLC設計・開発', '協働ロボット・産業用ロボット統合', '自動化制御システム構築', 'Modbus通信システム開発'].map((item) => (
                        <li key={item} className="flex items-start">
                          <span className="text-neon-blue mr-2">&bull;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recruitment */}
        <div className="mt-12 max-w-4xl mx-auto rounded-xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 167, 225, 0.15), rgba(59, 130, 246, 0.1))',
            border: '1px solid rgba(0, 167, 225, 0.2)',
          }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">採用情報</h3>
          <p className="text-lg mb-6 text-gray-300">
            製造業の自動化に情熱を持つエンジニアを募集しています
          </p>
          <p className="mb-8 text-gray-400">
            PLC設計、ロボット制御、電気設計などの経験者歓迎。
            <br />
            一緒に日本のものづくりの未来を創りませんか？
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg font-bold border border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:shadow-neon transition-all duration-300"
          >
            採用について問い合わせる
          </Link>
        </div>
      </div>
    </section>
  )
}
```

**Step 4: Update Footer.tsx to dark theme**

Replace `components/Footer.tsx`:

```tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">株式会社黎明</h3>
            <p className="text-gray-500 mb-2">Reimei Inc.</p>
            <p className="text-gray-500">製造業向け自動化設備の電気設計施工</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">お問い合わせ</h3>
            <p className="text-gray-500 mb-2">〒454-0972</p>
            <p className="text-gray-500 mb-2">愛知県名古屋市中川区服部2丁目308</p>
            <p className="text-gray-500 mb-2">TEL: 052-893-6763</p>
            <p className="text-gray-500">営業時間: 9:00〜18:00</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              {[
                { href: '/#services', label: '事業内容' },
                { href: '/#achievements', label: '実績' },
                { href: '/#company', label: '会社概要' },
                { href: '/contact', label: 'お問い合わせ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-neon-blue transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; 2020-{new Date().getFullYear()} 株式会社黎明 (Reimei Inc.) All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

**Step 5: Add marquee animation to globals.css**

Append to `app/globals.css`:

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
```

**Step 6: Verify full dark theme in browser**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm run dev
```
Expected: All sections render with dark backgrounds, blue neon accents, glass cards.

**Step 7: Verify build succeeds**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm run build
```

**Step 8: Commit**

```bash
git add components/Services.tsx components/Achievements.tsx components/Company.tsx components/Footer.tsx app/globals.css
git commit -m "feat: convert Services, Achievements, Company, Footer to dark theme"
```

---

## Task 6: Contact page dark theme

**Files:**
- Modify: `components/Contact.tsx`
- Modify: `app/contact/page.tsx`

**Step 1: Read current Contact component and page**

Read both files to understand current structure before modifying.

**Step 2: Update Contact.tsx and contact/page.tsx**

Apply the same dark theme patterns: `glass-card`, `text-gray-300/400`, `neon-blue` accents, `bg-dark-bg` backgrounds. Form inputs should use `bg-white/5 border-white/10 text-white` styling. Focus states should use `focus:border-neon-blue focus:ring-neon-blue/20`.

Keep the Google Forms integration logic unchanged — only update visual styles.

**Step 3: Verify contact page in browser**

**Step 4: Commit**

```bash
git add components/Contact.tsx app/contact/page.tsx
git commit -m "feat: convert Contact page to dark theme"
```

---

## Task 7: Create 3D Robot Arm component

**Files:**
- Create: `components/RobotArm3D.tsx`

**Step 1: Create the 3D robot arm component**

Create `components/RobotArm3D.tsx` — a stylized robot arm built from Three.js primitives (no external model files needed):

```tsx
'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function RobotArmModel() {
  const groupRef = useRef<THREE.Group>(null)

  // Slowly rotate the entire model
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3 + state.clock.elapsedTime * 0.1
    }
  })

  const metalMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#1a1a2e',
        metalness: 0.9,
        roughness: 0.2,
      }),
    []
  )

  const accentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#00a7e1',
        metalness: 0.8,
        roughness: 0.3,
        emissive: '#00a7e1',
        emissiveIntensity: 0.3,
      }),
    []
  )

  const jointMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#2a2a4a',
        metalness: 0.95,
        roughness: 0.1,
      }),
    []
  )

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, -1.5, 0]}>
        {/* Base */}
        <mesh material={metalMaterial} position={[0, 0, 0]}>
          <cylinderGeometry args={[1.2, 1.4, 0.4, 32]} />
        </mesh>
        <mesh material={accentMaterial} position={[0, 0.25, 0]}>
          <cylinderGeometry args={[0.8, 1.2, 0.1, 32]} />
        </mesh>

        {/* Base joint */}
        <mesh material={jointMaterial} position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.5, 16, 16]} />
        </mesh>

        {/* Lower arm */}
        <group position={[0, 0.5, 0]} rotation={[0, 0, 0.3]}>
          <mesh material={metalMaterial} position={[0, 1, 0]}>
            <boxGeometry args={[0.4, 2, 0.4]} />
          </mesh>
          <mesh material={accentMaterial} position={[0, 1, 0.21]}>
            <boxGeometry args={[0.3, 1.8, 0.02]} />
          </mesh>

          {/* Elbow joint */}
          <mesh material={jointMaterial} position={[0, 2, 0]}>
            <sphereGeometry args={[0.35, 16, 16]} />
          </mesh>

          {/* Upper arm */}
          <group position={[0, 2, 0]} rotation={[0, 0, -0.6]}>
            <mesh material={metalMaterial} position={[0, 0.8, 0]}>
              <boxGeometry args={[0.3, 1.6, 0.3]} />
            </mesh>
            <mesh material={accentMaterial} position={[0.16, 0.8, 0]}>
              <boxGeometry args={[0.02, 1.4, 0.2]} />
            </mesh>

            {/* Wrist joint */}
            <mesh material={jointMaterial} position={[0, 1.6, 0]}>
              <sphereGeometry args={[0.25, 16, 16]} />
            </mesh>

            {/* End effector / gripper */}
            <group position={[0, 1.6, 0]} rotation={[0, 0, 0.2]}>
              <mesh material={metalMaterial} position={[0, 0.3, 0]}>
                <boxGeometry args={[0.15, 0.6, 0.15]} />
              </mesh>
              {/* Gripper fingers */}
              <mesh material={accentMaterial} position={[-0.15, 0.7, 0]}>
                <boxGeometry args={[0.08, 0.3, 0.08]} />
              </mesh>
              <mesh material={accentMaterial} position={[0.15, 0.7, 0]}>
                <boxGeometry args={[0.08, 0.3, 0.08]} />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </Float>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00a7e1" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function RobotArm3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [4, 2, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-3, 3, -3]} intensity={0.5} color="#00a7e1" />
        <pointLight position={[3, -2, 3]} intensity={0.3} color="#3b82f6" />

        <RobotArmModel />
        <Particles />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 4}
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
```

**Step 2: Verify component compiles**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm run build
```
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add components/RobotArm3D.tsx
git commit -m "feat: create 3D robot arm component with Three.js primitives and particles"
```

---

## Task 8: Integrate 3D Robot Arm into Hero

**Files:**
- Modify: `components/Hero.tsx`

**Step 1: Update Hero to use dynamic import for RobotArm3D**

Replace the placeholder in Hero.tsx with the 3D component, using `next/dynamic` to lazy-load:

```tsx
'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'

const RobotArm3D = dynamic(() => import('./RobotArm3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-80 h-80 rounded-full border border-neon-blue/20 flex items-center justify-center animate-glow-pulse">
        <div className="w-60 h-60 rounded-full border border-neon-blue/10 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full bg-neon-blue/5" />
        </div>
      </div>
    </div>
  ),
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

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-white">テクノロジーで</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-blue-400 text-glow">
                製造業の未来を
              </span>
              <br />
              <span className="text-white">創造する</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              PLC設計と協働ロボット統合で
              <br className="md:hidden" />
              生産性向上を実現
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Right: 3D Robot model */}
          <div className="hidden md:block h-[500px]">
            <RobotArm3D />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg-secondary to-transparent" />
    </section>
  )
}
```

**Step 2: Verify 3D model renders in browser**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm run dev
```
Expected: Robot arm renders on right side of Hero, auto-rotates, draggable with mouse. Particles float in background.

**Step 3: Verify build succeeds**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm run build
```

**Step 4: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: integrate 3D robot arm model into Hero section with lazy loading"
```

---

## Task 9: Final polish and build verification

**Files:**
- All previously modified files

**Step 1: Run full build**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm run build
```
Expected: Build succeeds with no errors.

**Step 2: Run dev server and visual check**

Run:
```bash
cd C:/Users/horiu/reimei_website/reimei-tech && npm run dev
```

Visual checklist:
- [ ] Header: transparent on load, blurred dark on scroll
- [ ] Hero: dark background, grid pattern, 3D robot arm rotates on right
- [ ] Services: dark glass cards with neon glow on hover, 3D tilt effect
- [ ] Achievements: scrolling marquee, neon blue stats with glow, glass cards
- [ ] Company: dark table with glass card, recruitment CTA with blue tint
- [ ] Footer: dark with subtle borders, links turn neon blue on hover
- [ ] Contact page: dark themed form inputs and layout
- [ ] Mobile: responsive, hamburger menu works, no 3D on mobile (performance)

**Step 3: Fix any issues found during visual check**

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete 3D interactive redesign — dark theme, robot arm, glass effects"
```
