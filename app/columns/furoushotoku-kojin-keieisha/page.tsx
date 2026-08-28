import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '不労所得はどうつくる?年収1200万円の個人と会社経営者の最適解2026',
  description:
    '高配当株・インデックス投資・不動産・REITなど代表的な8つの不労所得を、給与年収1200万円の個人と会社経営者(法人)それぞれの税率から比較。共済・退職金出口まで含めた経営者の設計手順も解説します。',
  alternates: {
    canonical: '/columns/furoushotoku-kojin-keieisha',
  },
  openGraph: {
    title: '不労所得はどうつくる?年収1200万円の個人と会社経営者の最適解2026',
    description:
      '代表的な8つの不労所得を個人・法人の税率から比較。経営者の「共済→NISA→法人内運用→退職金」設計まで解説。',
    url: 'https://reimei.tech/columns/furoushotoku-kojin-keieisha',
  },
}

export default function FuroushotokuKojinKeieishaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '不労所得はどうつくる?年収1200万円の個人と会社経営者の最適解2026',
    datePublished: '2026-08-28',
    dateModified: '2026-08-28',
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
            不労所得はどうつくる?
            <br />
            年収1,200万円の個人と会社経営者の最適解【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">公開: 2026年8月28日 / 株式会社黎明</p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              同じ「不労所得がほしい」でも、給与年収1,200万円の会社員と、役員報酬を自分で決められる会社経営者とでは、
              最適な手段がまったく違います。理由はシンプルで、
              <span className="text-white font-medium">手元に残る額を決めるのは利回りより先に税率</span>だからです。
              本記事では代表的な8つの方法を、個人・法人それぞれの向き不向きとあわせて整理します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">前提: まず自分の「税率」を知る</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-8">
            <p>
              年収1,200万円の給与所得者の場合、給与所得控除(上限195万円)や社会保険料控除などを差し引いた課税所得はおおむね800万〜900万円前後。
              このゾーンの所得税率は23〜33%で、住民税10%を合わせると
              <span className="text-white font-medium">追加で稼いだ1万円のうち約33〜43%が税金</span>になります。
            </p>
          </section>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">立場</th>
                  <th className="py-3 pr-4 font-medium">限界税率の目安</th>
                  <th className="py-3 font-medium">内訳</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">個人(給与年収1,200万円)</td>
                  <td className="py-3 pr-4 whitespace-nowrap">約33〜43%</td>
                  <td className="py-3">所得税23〜33% + 住民税10%。総合課税の副収入にはこの税率が乗る</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">法人(中小法人)</td>
                  <td className="py-3 pr-4 whitespace-nowrap">約25〜34%</td>
                  <td className="py-3">所得800万円以下は法人税15%で実効約25%、800万円超は実効約33〜34%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              つまり高年収の個人が総合課税で副収入を積み上げるのは税率的に分が悪く、
              <span className="text-white font-medium">「分離課税(約20%)の金融所得」か「非課税枠(NISA等)」に寄せる</span>
              のが定石。一方、経営者は法人と個人の2つの財布を使い分けられるため、選択肢が大きく広がります。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">不労所得をつくる8つの方法</h2>

          <h3 className="text-xl font-bold text-white mb-4">1. 高配当株・連続増配株 — 個人◎ / 法人△</h3>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              配当利回り3〜4%台の銘柄や連続増配株を保有し、配当を受け取る王道。個人なら申告分離課税20.315%で完結し、
              給与の高い税率と切り離せるのが最大の利点です。NISA成長投資枠(年240万円)に載せれば配当も値上がり益も非課税になります。
            </p>
            <p>
              一方、法人で上場株を持つと、持株比率5%以下の配当は益金不算入が20%しか効かず、配当の8割に法人税がかかります。
              上場株の配当目当てなら個人口座が基本です。
            </p>
          </section>

          <h3 className="text-xl font-bold text-white mb-4">2. インデックス投資+取り崩し — 個人◎ / 法人○</h3>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              「配当を受け取る」のではなく、全世界株や米国株のインデックスファンドを積み立てて、
              必要になったら定率(年3〜4%)で取り崩す方式。分配金を出さないぶん課税が繰り延べられ、
              トータルの効率は高配当戦略を上回ることが多いです。
            </p>
            <p>
              新NISAの生涯投資枠1,800万円をまず埋めるのが最優先。年収1,200万円なら年360万円の満額積立も現実的で、
              最短5年で枠が埋まります。取り崩しは証券会社の定率売却サービスで自動化できます。
            </p>
          </section>

          <h3 className="text-xl font-bold text-white mb-4">3. 不動産投資(現物) — 個人○ / 法人◎</h3>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              融資でレバレッジをかけられる唯一の手法で、年収1,200万円は金融機関の融資が引きやすい属性です。
              管理会社に運営を委託すれば手間は月数時間程度になります。
            </p>
            <p>
              ただし個人の不動産所得は<span className="text-white font-medium">総合課税</span>のため、
              高年収者は家賃収入に33〜43%の税率が乗ります。規模を拡大するなら、所得800万円までの軽減税率・
              減価償却の任意計上・相続対策まで使える法人保有が有利。「1棟目から法人」か
              「課税所得900万円超で法人化」が実務上よく使われる目安です。
            </p>
          </section>

          <h3 className="text-xl font-bold text-white mb-4">4. REIT(不動産投資信託) — 個人○ / 法人△</h3>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              現物不動産の「融資・管理・流動性の低さ」を全部外したければREIT。数万円から分散でき、
              分配金利回りは4%前後。個人なら分離課税20.315%、NISA成長投資枠も使えます。
              ただしJ-REITの分配金は配当控除の対象外で、価格は株式市場と連動しやすい点は理解しておくべきです。
            </p>
          </section>

          <h3 className="text-xl font-bold text-white mb-4">5. 債券(米国債・社債) — 個人○ / 法人○</h3>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              満期と利率が決まっているため、不労所得の中では最もキャッシュフローが読みやすい資産。
              米ドル建て債券なら利回り4%前後が狙えますが、為替リスクを負います。
              株式中心のポートフォリオの値動きをならす「守りの不労所得」という位置づけが適切で、
              これ単体で増やす資産ではありません。個人は申告分離課税20.315%です。
            </p>
          </section>

          <h3 className="text-xl font-bold text-white mb-4">6. 太陽光発電・駐車場などの実物運用 — 法人○(要検討)</h3>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              固定価格買取(FIT)型の太陽光は売電単価の低下で新規の妙味が薄れ、現在は中古案件の売買が中心。
              駐車場・トランクルーム・コインランドリーなどは「事業」の色が濃く、完全な不労とは言えません。
              減価償却を厚く取れるため、
              <span className="text-white font-medium">利益の出ている法人の税負担平準化とセットで検討する</span>
              のが現実的な使い方です。
            </p>
          </section>

          <h3 className="text-xl font-bold text-white mb-4">7. ストック型コンテンツ — 個人○ / 法人◎</h3>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              電子書籍の印税、動画講座、ソフトウェアやテンプレートの販売など、
              <span className="text-white font-medium">一度作れば売れ続ける資産</span>。
              初期は完全に「労働」ですが、当たれば元手ゼロで月数万〜数十万円が続きます。
              本業の専門知識をそのまま商品化できる経営者・専門職と相性がよく、
              法人で受ければ経費と相殺しつつ所得800万円以下の軽減税率に収められます。
            </p>
          </section>

          <h3 className="text-xl font-bold text-white mb-4">8. 貸付型クラウドファンディング — 少額まで</h3>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              1万円から年利4〜8%を謳う商品が多く手軽に見えますが、運用中は解約できず、事業者の目利きに全面依存し、
              過去には元本毀損や行政処分の事例もあります。使うなら余裕資金の一部・複数事業者に分散が原則。
              ポートフォリオの主役にする資産ではありません。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">一覧比較</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">方法</th>
                  <th className="py-3 pr-4 font-medium">目安利回り</th>
                  <th className="py-3 pr-4 font-medium">初期資金</th>
                  <th className="py-3 pr-4 font-medium">個人(年収1,200万)</th>
                  <th className="py-3 font-medium">法人・経営者</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white whitespace-nowrap">高配当株</td>
                  <td className="py-3 pr-4 whitespace-nowrap">3〜4%</td>
                  <td className="py-3 pr-4 whitespace-nowrap">10万円〜</td>
                  <td className="py-3 pr-4">◎ NISA+分離課税</td>
                  <td className="py-3">△ 益金不算入が薄い</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white whitespace-nowrap">インデックス+取り崩し</td>
                  <td className="py-3 pr-4 whitespace-nowrap">3〜7%</td>
                  <td className="py-3 pr-4 whitespace-nowrap">1万円〜</td>
                  <td className="py-3 pr-4">◎ 最優先でNISA枠</td>
                  <td className="py-3">○ 余剰資金の運用先</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white whitespace-nowrap">現物不動産</td>
                  <td className="py-3 pr-4 whitespace-nowrap">3〜6%</td>
                  <td className="py-3 pr-4 whitespace-nowrap">数百万円〜</td>
                  <td className="py-3 pr-4">○ 融資属性は強い</td>
                  <td className="py-3">◎ 法人保有で税効率</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white whitespace-nowrap">REIT</td>
                  <td className="py-3 pr-4 whitespace-nowrap">約4%</td>
                  <td className="py-3 pr-4 whitespace-nowrap">数万円〜</td>
                  <td className="py-3 pr-4">○</td>
                  <td className="py-3">△</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white whitespace-nowrap">債券</td>
                  <td className="py-3 pr-4 whitespace-nowrap">1〜5%</td>
                  <td className="py-3 pr-4 whitespace-nowrap">数万円〜</td>
                  <td className="py-3 pr-4">○ 守り枠</td>
                  <td className="py-3">○ 余剰資金の置き場</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white whitespace-nowrap">太陽光・駐車場等</td>
                  <td className="py-3 pr-4 whitespace-nowrap">6〜10%</td>
                  <td className="py-3 pr-4 whitespace-nowrap">数百万円〜</td>
                  <td className="py-3 pr-4">△</td>
                  <td className="py-3">○ 償却とセット</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white whitespace-nowrap">ストック型コンテンツ</td>
                  <td className="py-3 pr-4 whitespace-nowrap">青天井</td>
                  <td className="py-3 pr-4 whitespace-nowrap">ほぼゼロ</td>
                  <td className="py-3 pr-4">○</td>
                  <td className="py-3">◎ 本業の知見を商品化</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white whitespace-nowrap">貸付型クラファン</td>
                  <td className="py-3 pr-4 whitespace-nowrap">4〜8%</td>
                  <td className="py-3 pr-4 whitespace-nowrap">1万円〜</td>
                  <td className="py-3 pr-4">△ 少額まで</td>
                  <td className="py-3">△ 少額まで</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">会社経営者だけが使える「仕組み」</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              経営者の不労所得づくりは、個別の運用商品より先に
              <span className="text-white font-medium">「法人と個人、どちらの財布で受けるか」の設計</span>で差がつきます。
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white font-medium">役員報酬の最適化</span> —
                報酬を上げるほど所得税・住民税・社会保険料の負担が累進的に増えます。
                生活に必要な分だけ個人に移し、残りは法人に留保して運用するのが基本形。詳しくは
                <Link href="/columns/yakuin-hoshu-kimekata" className="text-neon-blue hover:text-white transition-colors duration-200">
                  役員報酬の決め方
                </Link>
                を参照してください。
              </li>
              <li>
                <span className="text-white font-medium">資産管理法人</span> —
                不動産や事業投資を本業法人と切り離して持つ器。所得分散(家族役員への報酬)、相続・事業承継対策、
                本業への影響遮断が狙い。維持コスト(法人住民税の均等割 年7万円〜+税理士報酬)を上回る規模になってから。
              </li>
              <li>
                <span className="text-white font-medium">退職金(退職所得控除)</span> —
                法人に貯めた利益の最終出口。勤続20年超なら控除が年70万円に増え、控除後の半分にしか課税されない別格の優遇。
                「法人で運用 → 退職金で受け取る」は経営者の王道ルートです。
              </li>
              <li>
                <span className="text-white font-medium">小規模企業共済</span> —
                月最大7万円(年84万円)が全額所得控除、受取時は退職所得扱い。経営者の「じぶん退職金」として最初に埋めるべき枠。
              </li>
              <li>
                <span className="text-white font-medium">経営セーフティ共済(倒産防止共済)</span> —
                掛金(累計800万円まで)が損金になり、40か月以上で全額戻る簿外資産。利益の波をならす調整弁として機能します。
              </li>
              <li>
                <span className="text-white font-medium">社宅制度</span> —
                自宅を法人契約の社宅にすれば家賃の相当部分を損金化でき、可処分所得が実質的に増えます。
                厳密には不労所得ではなく「固定費の圧縮」ですが、効果は配当数十万円分に相当します。
              </li>
            </ul>
            <p>
              <span className="text-white font-medium">経営者のモデルルート:</span>{' '}
              ①小規模企業共済・iDeCoの控除枠を埋める → ②個人のNISA枠1,800万円を埋める →
              ③法人の余剰利益で不動産・債券・事業投資 → ④最後は退職金で低税率のまま個人へ移す。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">法人と個人のバランスを無料で試算できます</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              「法人に残すか、個人に移すか」の損益分岐は、売上・経費・役員報酬の水準で大きく変わります。
              当社の法人税シミュレーターは、役員報酬を動かしながら法人税等・社会保険料・所得税・住民税と
              手取り額を即時計算できます。登録不要・無料で、データはすべて端末内で処理されます。
            </p>
            <Link
              href="/taxsim"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              法人税シミュレーター2026で試算する →
            </Link>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">まとめ — 立場別の現実解</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              <span className="text-white font-medium">年収1,200万円の個人:</span>{' '}
              総合課税の副収入を増やすより、NISA(年360万円)を満額で埋め、超えた分は特定口座のインデックス+高配当株。
              融資属性を活かすなら不動産を1〜2戸、ただし規模拡大の前に法人化を検討。
            </p>
            <p>
              <span className="text-white font-medium">会社経営者:</span>{' '}
              商品選びの前に「共済 → NISA → 法人内運用 → 退職金出口」の順で器を設計する。
              個別の利回りを1%上げる努力より、受け皿の税率を10%下げる設計のほうが確実に効きます。
            </p>
            <p>
              どちらの立場でも共通するのは、不労所得は
              <span className="text-white font-medium">「高利回り商品を探すゲーム」ではなく「税率の低い置き場所に資産を移す作業」</span>
              だということ。まず自分の限界税率を把握し、非課税枠と分離課税から埋めていくのが、遠回りに見えて最短ルートです。
            </p>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものであり、特定の金融商品の勧誘や個別の税務・投資アドバイスではありません。
              記載の利回りは市場環境により変動する目安であり、税率・制度(NISA、共済、法人税率等)は執筆時点(2026年)の情報です。
              法人の実効税率・益金不算入・退職所得控除などの適用条件は、資本金・持株比率・勤続年数等によって異なります。
              実行にあたっては税理士・FP等の専門家にご相談ください。投資判断はご自身の責任でお願いします。
            </p>
          </section>

          <div className="mt-10 space-y-2">
            <p>
              <Link href="/columns/yakuin-hoshu-kimekata" className="text-neon-blue hover:text-white transition-colors duration-200">
                あわせて読みたい: 役員報酬はいくらにする?一人法人の決め方と税金・社会保険のバランス →
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
