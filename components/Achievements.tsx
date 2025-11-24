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
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-5xl">🏆</span>
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 mb-4">
              導入実績
            </h2>
            <p className="text-xl text-gray-300">
              大手企業をはじめ、多くのお客様にご採用いただいています
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-center hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 border border-gray-700 hover:border-yellow-500/50 transform hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-white mb-2">{client.name}</h3>
                <p className="text-sm text-gray-400">{client.industry}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-lg p-8 md:p-12 text-gray-900 shadow-2xl shadow-yellow-500/50">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <CountUp end={6} duration={2} suffix="+" />
                </div>
                <div className="text-lg font-semibold">創業年数</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <CountUp end={100} duration={2.5} suffix="+" />
                </div>
                <div className="text-lg font-semibold">年間実績</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <CountUp end={20} duration={2} suffix="+" />
                </div>
                <div className="text-lg font-semibold">年間プロジェクト</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-12 bg-gray-800 rounded-lg p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 mb-6 text-center">
              対応可能な用途
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-reimei-blue to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/50">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-bold text-white mb-2">小物部品の搬送検査</h4>
                <p className="text-gray-400 text-sm">高精度な部品ハンドリングと自動検査システム</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-reimei-light-blue to-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h4 className="font-bold text-white mb-2">洗浄部品のプレ乾燥</h4>
                <p className="text-gray-400 text-sm">効率的な乾燥プロセスの自動化</p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-reimei-green to-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/50">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h4 className="font-bold text-white mb-2">自動化制御システム</h4>
                <p className="text-gray-400 text-sm">ロボットとPLCの統合制御</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}