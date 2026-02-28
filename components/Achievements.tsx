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
