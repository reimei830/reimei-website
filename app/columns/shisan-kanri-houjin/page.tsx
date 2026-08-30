import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '本業法人と分けるべきか?資産管理法人の設立基準とメリット・デメリット2026',
  description:
    '資産管理法人(プライベートカンパニー)の設立判断を解説。個人と法人の税率差、家族への所得分散、相続対策のメリットから、維持コスト・社会保険の二以上勤務・上場株が不利になる注意点、不動産の3つの持たせ方まで整理しました。',
  alternates: {
    canonical: '/columns/shisan-kanri-houjin',
  },
  openGraph: {
    title: '本業法人と分けるべきか?資産管理法人の設立基準とメリット・デメリット2026',
    description:
      '税率差・所得分散・相続対策のメリットと、維持コスト・社保・上場株の注意点、不動産の3つの持たせ方を解説。',
    url: 'https://reimei.tech/columns/shisan-kanri-houjin',
  },
}

export default function ShisanKanriHoujinPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '本業法人と分けるべきか?資産管理法人の設立基準とメリット・デメリット2026',
    datePublished: '2026-08-30',
    dateModified: '2026-08-30',
    author: { '@type': 'Organization', name: '株式会社黎明' },
    publisher: { '@type': 'Organization', name: '株式会社黎明' },
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4">
            本業法人と分けるべきか?
            <br />
            資産管理法人の設立基準とメリット・デメリット【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">公開: 2026年8月30日 / 株式会社黎明</p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              <Link href="/columns/furoushotoku-kojin-keieisha" className="text-neon-blue hover:text-white transition-colors duration-200">
                不労所得のつくり方
              </Link>
              と
              <Link href="/columns/keieisha-taishokukin" className="text-neon-blue hover:text-white transition-colors duration-200">
                経営者の退職金設計
              </Link>
              で繰り返し登場した「器」が、本記事のテーマである
              <span className="text-white font-medium">資産管理法人(プライベートカンパニー)</span>です。
              不動産や投資資産を本業法人や個人から切り離して持つこの器は、うまく使えば税率・所得分散・相続の
              三方向で効きますが、維持コストと社会保険の設計を誤ると逆効果にもなります。
              設立すべきかどうかの判断基準から整理します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">資産管理法人とは — 何を入れる器か</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              資産管理法人は、事業ではなく<span className="text-white font-medium">資産の保有・運用を目的とする法人</span>です。
              本業の会社と分けて持つ理由は大きく2つ。①本業の業績や万一の倒産リスクから資産を遮断する、
              ②本業とは別の税務設計(所得分散・相続)を資産側だけに適用する、です。
            </p>
            <p>入れる資産には向き不向きがあります。</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white font-medium">収益不動産: ◎</span> —
                個人の不動産所得は総合課税(高所得者は最大55%)のため、法人に移す税メリットが最も大きい資産
              </li>
              <li>
                <span className="text-white font-medium">太陽光・実物資産: ○</span> —
                減価償却を法人の利益とぶつけられる
              </li>
              <li>
                <span className="text-white font-medium">上場株・投資信託: △</span> —
                個人なら分離課税20.315%+NISAで完結するうえ、法人が受け取る上場株の配当は
                持株比率5%以下だと益金不算入が20%しか効きません(詳細は
                <Link href="/columns/furoushotoku-kojin-keieisha" className="text-neon-blue hover:text-white transition-colors duration-200">
                  第1弾の記事
                </Link>
                )。上場株は原則個人口座が有利です
              </li>
            </ul>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">メリット — 効くのはこの4つ</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="text-white font-medium">税率差</span> —
                個人の総合課税は所得税・住民税あわせて最大55%。法人なら所得800万円以下は実効約25%、
                超えても約33〜34%で頭打ちです。家賃収入の規模が大きいほど差が開きます。
              </li>
              <li>
                <span className="text-white font-medium">家族への所得分散</span> —
                配偶者や親族を役員にして役員報酬を支払えば、一人に集中していた所得を分散でき、
                受け取る側にも給与所得控除(最低55万円)が付きます。実際に職務を担っていることが前提です。
              </li>
              <li>
                <span className="text-white font-medium">欠損金の繰越が10年</span> —
                個人(青色申告)の純損失の繰越は3年ですが、法人は10年。大規模修繕や空室期の赤字を
                長期で吸収できます。
              </li>
              <li>
                <span className="text-white font-medium">出口の選択肢が増える</span> —
                法人に貯めた利益は
                <Link href="/columns/keieisha-taishokukin" className="text-neon-blue hover:text-white transition-colors duration-200">
                  退職金(退職所得控除)
                </Link>
                で低税率のまま個人へ移せます。相続の場面では、不動産そのものではなく
                <span className="text-white font-medium">法人の株式</span>を承継する形になるため、
                暦年贈与などで生前に少しずつ移転しやすくなります。
              </li>
            </ol>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">デメリットと注意点</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white font-medium">維持コスト</span> —
                赤字でも法人住民税の均等割が年7万円〜かかり、決算・申告の税理士報酬(年20〜40万円程度)も
                ほぼ必須。<span className="text-white font-medium">年間で20〜50万円の固定費</span>を
                上回る節税効果が出る規模かどうかが第一関門です。
              </li>
              <li>
                <span className="text-white font-medium">個人へ戻すときに課税される</span> —
                法人に入れたお金を個人へ移すには役員報酬・配当・退職金のいずれかを通る必要があり、
                そこで再び課税されます。「法人に入れれば節税」ではなく「個人へ戻す時期と経路まで含めて設計」が正解です。
              </li>
              <li>
                <span className="text-white font-medium">社会保険の設計</span> —
                資産管理法人から役員報酬を出すと社会保険の加入義務が生じます。本業法人ですでに加入している場合は
                <span className="text-white font-medium">二以上勤務届</span>を出し、両社の報酬を合算した標準報酬で
                保険料を按分する手続きが必要です。手続きを増やしたくなければ、資産管理法人側は
                無報酬(社保加入なし)にして利益を法人に貯め、出口は退職金に寄せる設計も選べます。
              </li>
              <li>
                <span className="text-white font-medium">融資の借り換えは自動ではない</span> —
                個人名義で借りている物件を法人へ移すには、売買による移転と融資の組み直しが必要で、
                登録免許税・不動産取得税もかかります。既存物件の移転より
                <span className="text-white font-medium">「次の物件から法人で買う」</span>ほうが低コストです。
              </li>
            </ul>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">不動産の3つの持たせ方 — 保有方式が王道</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">方式</th>
                  <th className="py-3 pr-4 font-medium">仕組み</th>
                  <th className="py-3 pr-4 font-medium">法人に移せる所得</th>
                  <th className="py-3 font-medium">注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">管理料徴収方式</td>
                  <td className="py-3 pr-4">個人所有のまま、法人が管理料を受け取る</td>
                  <td className="py-3 pr-4 whitespace-nowrap">家賃の5%前後</td>
                  <td className="py-3">相場を超える管理料は税務調査で否認されやすい。効果は限定的</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">サブリース方式</td>
                  <td className="py-3 pr-4">法人が一括借り上げして転貸する</td>
                  <td className="py-3 pr-4 whitespace-nowrap">家賃の10〜15%程度</td>
                  <td className="py-3">空室リスクを法人が負う実態が必要。中間的な効果</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">保有方式(建物所有)</td>
                  <td className="py-3 pr-4">法人が物件そのものを所有する</td>
                  <td className="py-3 pr-4 whitespace-nowrap">家賃収入の全額</td>
                  <td className="py-3">効果最大。既存物件の移転にはコスト、新規購入なら最初から法人名義で</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12">
            ※管理料・サブリース料の水準は実態と相場に基づく必要があります。形式だけの契約は否認リスクがあります。
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">設立の目安 — いつ・どの形でつくるか</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>実務でよく使われる判断ラインは次のとおりです。</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                個人の課税所得が<span className="text-white font-medium">900万円を超えている</span>
                (所得税率33%区分に入り、法人実効税率との差が明確になる)
              </li>
              <li>
                家賃収入などの資産所得が<span className="text-white font-medium">年500万〜1,000万円規模</span>で、
                今後も物件を増やす予定がある
              </li>
              <li>報酬を出せる家族がいる、または相続を見据えた承継先がいる</li>
            </ul>
            <p>
              法人形態は、外部株主や上場の予定がない資産管理目的なら
              <span className="text-white font-medium">合同会社(定款認証不要・登録免許税6万円〜)</span>で十分なケースが
              多く、対外的な信用や将来の承継設計を重視するなら株式会社(定款認証+登録免許税15万円〜)を選びます。
              設立手順と設立後の届出は
              <Link href="/columns/houjin-setsuritsu-guide" className="text-neon-blue hover:text-white transition-colors duration-200">
                設立ガイド
              </Link>
              と
              <Link href="/columns/setsuritsugo-tetsuduki" className="text-neon-blue hover:text-white transition-colors duration-200">
                設立後の手続きチェックリスト
              </Link>
              、口座開設は
              <Link href="/columns/houjin-kouza-guide" className="text-neon-blue hover:text-white transition-colors duration-200">
                法人口座ガイド
              </Link>
              を参照してください。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">2026年時点の制度動向</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              「役員報酬を低く抑えて社会保険料を最小化する」いわゆるマイクロ法人的な設計について、
              廃止・終了といった情報が流れることがありますが、
              <span className="text-white font-medium">2026年8月時点で標準報酬月額の最低等級による加入の仕組みは存続</span>
              しています。一方で、厚生年金の標準報酬月額の<span className="text-white font-medium">上限</span>は
              2027年9月から段階的に引き上げられる(65万円→75万円)ことが決まっており、
              高額報酬側の社保負担は増える方向です。審議会では標準報酬の在り方の議論も続いているため、
              社保前提の設計は毎年見直すことをおすすめします。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">法人に残すか個人に移すかを無料で試算できます</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              資産管理法人の損益分岐は「法人に残す利益」と「役員報酬で個人へ移す額」のバランスで決まります。
              当社の法人税シミュレーターは、売上・経費・役員報酬を入力すると法人税等・社会保険料・
              所得税・住民税と手取り額を即時計算します。登録不要・無料で、データはすべて端末内で処理されます。
            </p>
            <Link
              href="/taxsim"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              法人税シミュレーター2026で試算する →
            </Link>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">まとめ — 判断の順序</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <ol className="list-decimal list-inside space-y-3">
              <li>年間の維持コスト(20〜50万円)を上回る節税効果が出る規模か試算する</li>
              <li>入れる資産を選ぶ — 不動産・実物資産は法人、上場株は個人(NISA優先)</li>
              <li>持たせ方を決める — 新規物件なら最初から法人保有方式</li>
              <li>社保の設計を決める — 二以上勤務で報酬を出すか、無報酬で退職金出口に寄せるか</li>
              <li>合同会社か株式会社かを選び、設立・届出・口座開設を進める</li>
            </ol>
            <p>
              資産管理法人は「つくれば節税になる箱」ではなく、
              <span className="text-white font-medium">個人・本業法人・資産法人の3つの財布の間で、
              所得をどこに発生させ、いつ誰に移すかを設計するための道具</span>です。
              規模が判断ラインに届いているなら、シリーズ第1弾・第2弾の出口設計とあわせて検討してみてください。
            </p>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものであり、個別の税務・法務アドバイスではありません。
              税率・制度は執筆時点(2026年8月)の情報であり、今後変更される可能性があります。
              管理料の水準、所得分散の妥当性、相続税評価などは個別事情により結論が変わるため、
              実行にあたっては税理士等の専門家にご相談ください。
            </p>
          </section>

          <div className="mt-10 space-y-2">
            <p>
              <Link href="/columns/furoushotoku-kojin-keieisha" className="text-neon-blue hover:text-white transition-colors duration-200">
                あわせて読みたい: 不労所得はどうつくる?年収1,200万円の個人と会社経営者の最適解 →
              </Link>
            </p>
            <p>
              <Link href="/columns/keieisha-taishokukin" className="text-neon-blue hover:text-white transition-colors duration-200">
                あわせて読みたい: 経営者の退職金はいくら取れる?退職所得控除と共済・iDeCoの出口戦略 →
              </Link>
            </p>
            <p>
              <Link href="/columns" className="text-neon-blue hover:text-white transition-colors duration-200">
                ← コラム一覧へ戻る
              </Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
