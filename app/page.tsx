import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Achievements from '@/components/Achievements'
import Company from '@/components/Company'

export const metadata: Metadata = {
  title: '株式会社黎明 | PLC設計・協働ロボット統合 | 愛知県名古屋市',
  description: '製造業向け自動化設備の電気設計施工。PLC設計と協働ロボット統合で生産性向上を実現。トヨタ自動車、三菱自動車など大手企業への導入実績多数。',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Achievements />
        <Company />
      </main>
      <Footer />
    </>
  )
}