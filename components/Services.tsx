export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-reimei-blue mb-4">事業内容</h2>
          <p className="text-xl text-gray-600">製造業向け自動化設備の電気設計施工</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* PLC設計 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-reimei-blue text-white p-4 rounded-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">PLC設計</h3>
            </div>
            <p className="text-gray-600 mb-6">
              製造現場の自動化に欠かせないPLC（プログラマブルロジックコントローラー）の設計・開発を行います。
              豊富な経験と技術力で、お客様のニーズに最適な制御システムを提供します。
            </p>
            <div className="border-t pt-6">
              <h4 className="font-bold text-gray-800 mb-3">対応メーカー</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-reimei-light-blue text-white px-3 py-1 rounded-full text-sm">三菱電機</span>
                <span className="bg-reimei-light-blue text-white px-3 py-1 rounded-full text-sm">KEYENCE</span>
                <span className="bg-reimei-light-blue text-white px-3 py-1 rounded-full text-sm">TOYOPUC</span>
              </div>
              <h4 className="font-bold text-gray-800 mt-4 mb-3">特徴</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-reimei-blue mr-2">✓</span>
                  ロボット統合制御に精通
                </li>
                <li className="flex items-start">
                  <span className="text-reimei-blue mr-2">✓</span>
                  Modbus通信システム構築
                </li>
                <li className="flex items-start">
                  <span className="text-reimei-blue mr-2">✓</span>
                  高速・高精度な制御プログラム
                </li>
              </ul>
            </div>
          </div>

          {/* 協働ロボット統合 */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-reimei-light-blue text-white p-4 rounded-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">協働ロボット統合</h3>
            </div>
            <p className="text-gray-600 mb-6">
              協働ロボットと産業用ロボットを活用した自動化設備を設計・製作します。
              小物部品の搬送検査、洗浄部品のプレ乾燥など、様々な用途に対応可能です。
            </p>
            <div className="border-t pt-6">
              <h4 className="font-bold text-gray-800 mb-3">対応ロボット</h4>
              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-sm font-semibold text-gray-700">協働ロボット</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-reimei-green text-white px-3 py-1 rounded-full text-sm">FAIRINO</span>
                    <span className="bg-reimei-green text-white px-3 py-1 rounded-full text-sm">JAKA</span>
                    <span className="bg-reimei-green text-white px-3 py-1 rounded-full text-sm">ELITE</span>
                    <span className="bg-reimei-green text-white px-3 py-1 rounded-full text-sm">DENSO</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mt-3">産業用ロボット</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="bg-reimei-green text-white px-3 py-1 rounded-full text-sm">FANUC</span>
                    <span className="bg-reimei-green text-white px-3 py-1 rounded-full text-sm">ナチ</span>
                    <span className="bg-reimei-green text-white px-3 py-1 rounded-full text-sm">Kawasaki</span>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-gray-800 mb-3">強み</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-reimei-light-blue mr-2">✓</span>
                  コストパフォーマンスの高い設備製作
                </li>
                <li className="flex items-start">
                  <span className="text-reimei-light-blue mr-2">✓</span>
                  幅広いメーカー対応
                </li>
                <li className="flex items-start">
                  <span className="text-reimei-light-blue mr-2">✓</span>
                  柔軟な仕様変更・カスタマイズ
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
