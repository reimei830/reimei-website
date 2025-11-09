export default function Company() {
  return (
    <section id="company" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-reimei-blue mb-4">会社概要</h2>
          <p className="text-xl text-gray-600">Company Information</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4 font-bold text-gray-700 bg-gray-50 w-1/3">会社名</td>
                  <td className="py-4 px-4 text-gray-600">
                    株式会社黎明
                    <br />
                    <span className="text-sm text-gray-500">Reimei Inc.</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-gray-700 bg-gray-50">設立</td>
                  <td className="py-4 px-4 text-gray-600">2020年10月2日</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-gray-700 bg-gray-50">代表者</td>
                  <td className="py-4 px-4 text-gray-600">堀内 黎希</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-gray-700 bg-gray-50">所在地</td>
                  <td className="py-4 px-4 text-gray-600">
                    〒454-0972
                    <br />
                    愛知県名古屋市中川区服部2丁目308
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-gray-700 bg-gray-50">電話番号</td>
                  <td className="py-4 px-4 text-gray-600">
                    <a href="tel:08036257174" className="text-reimei-blue hover:underline">
                      052-893-6763
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-gray-700 bg-gray-50">営業時間</td>
                  <td className="py-4 px-4 text-gray-600">9:00〜18:00</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-gray-700 bg-gray-50">事業内容</td>
                  <td className="py-4 px-4 text-gray-600">
                    製造業向けの自動化設備の電気設計施工
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-start">
                        <span className="text-reimei-blue mr-2">•</span>
                        PLC設計・開発
                      </li>
                      <li className="flex items-start">
                        <span className="text-reimei-blue mr-2">•</span>
                        協働ロボット・産業用ロボット統合
                      </li>
                      <li className="flex items-start">
                        <span className="text-reimei-blue mr-2">•</span>
                        自動化制御システム構築
                      </li>
                      <li className="flex items-start">
                        <span className="text-reimei-blue mr-2">•</span>
                        Modbus通信システム開発
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 採用情報セクション */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-reimei-blue to-reimei-light-blue rounded-lg shadow-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">採用情報</h3>
          <p className="text-lg mb-6">
            製造業の自動化に情熱を持つエンジニアを募集しています
          </p>
          <p className="mb-8">
            PLC設計、ロボット制御、電気設計などの経験者歓迎。<br />
            一緒に日本のものづくりの未来を創りませんか？
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-reimei-blue px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
          >
            採用について問い合わせる
          </a>
        </div>
      </div>
    </section>
  )
}
