import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://reimei.tech'),
  title: {
    default: '株式会社黎明 | PLC設計・協働ロボット統合 | 愛知県名古屋市',
    template: '%s | 株式会社黎明'
  },
  description: '製造業向け自動化設備の電気設計施工。PLC設計と協働ロボット統合で生産性向上を実現。トヨタ自動車、三菱自動車など大手企業への導入実績多数。愛知県名古屋市を拠点に全国対応。',
  keywords: [
    'PLC設計',
    '協働ロボット',
    '自動化設備',
    '電気設計',
    'FAIRINO',
    'WAGO',
    '三菱電機',
    'KEYENCE',
    '名古屋',
    '製造業',
    'ロボット統合',
    '生産自動化',
    '制御システム',
    '愛知県'
  ],
  authors: [{ name: '株式会社黎明' }],
  creator: '株式会社黎明',
  publisher: '株式会社黎明',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://reimei.tech',
    siteName: '株式会社黎明',
    title: '株式会社黎明 | PLC設計・協働ロボット統合',
    description: '製造業向け自動化設備の電気設計施工。PLC設計と協働ロボット統合で生産性向上を実現。',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '株式会社黎明 - 製造業向け自動化設備',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社黎明 | PLC設計・協働ロボット統合',
    description: '製造業向け自動化設備の電気設計施工。PLC設計と協働ロボット統合で生産性向上を実現。',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '株式会社黎明',
    alternateName: 'REIMEI Inc.',
    url: 'https://reimei.tech',
    logo: 'https://reimei.tech/logo-200.png',
    description: '製造業向け自動化設備の電気設計施工',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '中川区服部2丁目308',
      addressLocality: '名古屋市',
      addressRegion: '愛知県',
      postalCode: '454-0976',
      addressCountry: 'JP',
    },
    telephone: '+81-52-893-6763',
    email: 'r.horiuchi@reimei.tech',
    foundingDate: '2020',
    areaServed: 'JP',
  }

  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="HVAloi2T9yBPlsNuv4HDVcntaln9fw-OoFpGxB8nRtE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}