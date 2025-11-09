import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-reimei-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <h3 className="text-xl font-bold mb-4">株式会社黎明</h3>
            <p className="text-gray-300 mb-2">Reimei Inc.</p>
            <p className="text-gray-300">製造業向け自動化設備の電気設計施工</p>
          </div>

          {/* 所在地・連絡先 */}
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <p className="text-gray-300 mb-2">〒454-0972</p>
            <p className="text-gray-300 mb-2">愛知県名古屋市中川区服部2丁目308</p>
            <p className="text-gray-300 mb-2">TEL: 080-3625-7174</p>
            <p className="text-gray-300 mb-2">Email: r.horiuchi@reimei-inc.com</p>
            <p className="text-gray-300">営業時間: 9:00〜18:00</p>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className="text-xl font-bold mb-4">サイトマップ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="#achievements" className="text-gray-300 hover:text-white transition-colors">
                  実績
                </Link>
              </li>
              <li>
                <Link href="#company" className="text-gray-300 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2020-{new Date().getFullYear()} 株式会社黎明 (Reimei Inc.) All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
