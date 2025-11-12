export default function Achievements() {
  const clients = [
    { name: '三菱自動車工業株式会社', industry: '自動車製造' },
    { name: 'トヨタ自動車株式会社', industry: '自動車製造' },
    { name: 'スズキ株式会社', industry: '自動車製造' },
    { name: 'マツダ株式会社', industry: '自動車製造' },
  ]

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-reimei-blue mb-4">エンドユーザー</h2>
          <p className="text-xl text-gray-600">
            大手企業をはじめ、多くのお客様にご採用いただいています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{client.name}</h3>
              <p className="text-sm text-gray-600">{client.industry}</p>
            </div>
          ))}
        </div>

<div className="bg-gradient-to-r from-reimei-blue to-reimei-light-blue rounded-lg p-8 md:p-12 text-white">
  <div className="grid md:grid-cols-3 gap-8 text-center">
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2">100以上</div>
      <div className="text-lg">年の実績</div>
    </div>
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2">20以上</div>
      <div className="text-lg">プロジェクト</div>
    </div>
    <div>
      <div className="text-4xl md:text-5xl font-bold mb-2">99%</div>
      <div className="text-lg">顧客満足度</div>
    </div>
  </div>
</div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">対応可能な用途</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-reimei-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">小物部品の搬送検査</h4>
              <p className="text-gray-600 text-sm">高精度な部品ハンドリングと自動検査システム</p>
            </div>
            <div className="text-center">
              <div className="bg-reimei-light-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">洗浄部品のプレ乾燥</h4>
              <p className="text-gray-600 text-sm">効率的な乾燥プロセスの自動化</p>
            </div>
            <div className="text-center">
              <div className="bg-reimei-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">自動化制御システム</h4>
              <p className="text-gray-600 text-sm">ロボットとPLCの統合制御</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
