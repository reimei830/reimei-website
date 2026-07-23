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
                { href: '/columns', label: 'コラム' },
                { href: '/taxsim', label: '法人税シミュレーター' },
                { href: '/contact', label: 'お問い合わせ' },
                { href: '/privacy', label: 'プライバシーポリシー' },
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
