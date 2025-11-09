import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://reimei.tech'),
  title: '株式会社黎明 | Reimei Inc. - 製造業向け自動化設備の電気設計施工',
  description: 'PLC設計と協働ロボット統合による製造業向け自動化設備を提供。トヨタ自動車、三菱自動車、スズキ自動車、川崎重工業への導入実績。',
  keywords: 'PLC設計,協働ロボット,FAIRINO,自動化設備,電気設計,三菱電機,KEYENCE,TOYOPUC,製造業,名古屋',
  openGraph: {
    title: '株式会社黎明 | Reimei Inc.',
    description: 'PLC設計と協働ロボット統合による製造業向け自動化設備を提供',
    url: 'https://reimei.tech',
    siteName: '株式会社黎明',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
