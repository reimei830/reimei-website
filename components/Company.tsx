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
