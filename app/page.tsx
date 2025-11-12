import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Achievements from '@/components/Achievements'
import Company from '@/components/Company'

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