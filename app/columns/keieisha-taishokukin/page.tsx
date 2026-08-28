import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '経営者の退職金はいくら取れる?退職所得控除と共済・iDeCoの出口戦略2026',
  description:
    '経営者・一人法人の退職金設計を解説。退職所得控除と2分の1課税の計算例、功績倍率法による損金算入の目安、小規模企業共済・iDeCo・経営セーフティ共済の使い分け、2026年施行の10年ルールと受け取り順序まで整理しました。',
  alternates: {
    canonical: '/columns/keieisha-taishokukin',
  },
  openGraph: {
    title: '経営者の退職金はいくら取れる?退職所得控除と共済・iDeCoの出口戦略2026',
    description:
      '退職所得控除の計算例、功績倍率法、共済・iDeCoの使い分け、2026年施行の10年ルールまで。経営者の退職金設計を解説。',
    url: 'https://reimei.tech/columns/keieisha-taishokukin',
  },
}

export default function KeieishaTaishokukinPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '経営者の退職金はいくら取れる?退職所得控除と共済・iDeCoの出口戦略2026',
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
            経営者の退職金はいくら取れる?
            <br />
            退職所得控除と共済・iDeCoの出口戦略【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">公開: 2026年8月28日 / 株式会社黎明</p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              <Link href="/columns/furoushotoku-kojin-keieisha" className="text-neon-blue hover:text-white transition-colors duration-200">
                前回の記事
              </Link>
              で、経営者の資産形成は「法人で運用して、最後は退職金で受け取る」のが王道ルートだと書きました。
              本記事はその出口である<span className="text-white font-medium">退職金</span>の設計編です。
              退職金がなぜ税制上「別格」なのか、いくらまで出せるのか、原資をどう積むのか、
              そして2026年に施行された<span className="text-white font-medium">「10年ルール」</span>で
              何が変わったのかまでを整理します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">退職金が「別格」な理由 — 3つの優遇</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-8">
            <p>退職金(退職所得)には、給与や配当にはない3つの優遇が重なっています。</p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="text-white font-medium">退職所得控除</span> —
                勤続20年以下は「40万円×勤続年数」、20年を超えると
                「800万円+70万円×(勤続年数−20年)」。勤続30年なら1,500万円までが無税です。
              </li>
              <li>
                <span className="text-white font-medium">2分の1課税</span> —
                控除を引いた残りの<span className="text-white font-medium">半分にしか</span>課税されません。
              </li>
              <li>
                <span className="text-white font-medium">分離課税</span> —
                他の所得と合算されないため、退職する年に役員報酬があっても累進税率が跳ね上がりません。
              </li>
            </ol>
          </section>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">計算例(勤続30年・退職金3,000万円)</th>
                  <th className="py-3 font-medium">金額</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4">退職所得控除(800万+70万×10年)</td>
                  <td className="py-3 whitespace-nowrap">1,500万円</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4">課税退職所得((3,000万−1,500万)×1/2)</td>
                  <td className="py-3 whitespace-nowrap">750万円</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4">所得税・住民税の概算</td>
                  <td className="py-3 whitespace-nowrap">約186万円</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium">実効税率</td>
                  <td className="py-3 text-white font-medium whitespace-nowrap">約6%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              同じ3,000万円を役員報酬の上乗せで受け取れば、所得税・住民税・社会保険料で
              4割以上が消えるゾーンです。それが退職金なら約6%。
              この差が「法人に利益を残して退職金で受け取る」戦略の根拠です。
            </p>
            <p className="text-xs text-gray-500">
              ※役員としての勤続年数が5年以下の場合は「特定役員退職手当等」となり、2分の1課税が使えません。
              短期で退任する予定がある場合は要注意です。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">いくらまで出せる? — 功績倍率法と損金算入</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              役員退職金は金額を自由に決められますが、
              <span className="text-white font-medium">不相当に高額な部分は損金不算入</span>になります。
              実務では次の<span className="text-white font-medium">功績倍率法</span>が広く使われています。
            </p>
            <p className="text-white font-medium text-center py-2">
              最終報酬月額 × 役員在任年数 × 功績倍率
            </p>
            <p>
              功績倍率は社長で3.0倍前後が実務上の目安とされます(判例ベース)。
              たとえば最終報酬月額80万円・在任30年・倍率3.0なら
              80万×30×3.0=<span className="text-white font-medium">7,200万円</span>が一つの上限目安です。
            </p>
            <p>
              ここで効いてくるのが役員報酬の水準です。退職直前だけ報酬を上げても否認リスクがあるため、
              退職金から逆算して<span className="text-white font-medium">現役時代の報酬月額を計画的に決めておく</span>
              必要があります。報酬の決め方は
              <Link href="/columns/yakuin-hoshu-kimekata" className="text-neon-blue hover:text-white transition-colors duration-200">
                役員報酬の決め方
              </Link>
              を参照してください。支給時は株主総会の決議と議事録も忘れずに。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">原資のつくり方 — 4つの積み場所</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">制度</th>
                  <th className="py-3 pr-4 font-medium">拠出上限</th>
                  <th className="py-3 pr-4 font-medium">拠出時の扱い</th>
                  <th className="py-3 font-medium">ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">小規模企業共済</td>
                  <td className="py-3 pr-4 whitespace-nowrap">月7万円</td>
                  <td className="py-3 pr-4">全額所得控除(個人)</td>
                  <td className="py-3">
                    一括受取は退職所得扱い。任意解約は20年未満で元本割れのため、退任・廃業まで続ける前提で
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">iDeCo</td>
                  <td className="py-3 pr-4 whitespace-nowrap">月2.3万円→6.2万円へ</td>
                  <td className="py-3 pr-4">全額所得控除(個人)</td>
                  <td className="py-3">
                    運用益も非課税。一時金受取は退職所得扱い。2027年1月引落分から上限が大幅拡大(後述)
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">経営セーフティ共済</td>
                  <td className="py-3 pr-4 whitespace-nowrap">累計800万円</td>
                  <td className="py-3 pr-4">損金(法人)</td>
                  <td className="py-3">
                    解約手当金は益金になるため、退職金の損金とぶつけて相殺するのが定番の出口
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">法人内留保・運用</td>
                  <td className="py-3 pr-4 whitespace-nowrap">上限なし</td>
                  <td className="py-3 pr-4">法人税課税後の利益</td>
                  <td className="py-3">
                    退職金の支給時に大きな損金が立ち、それまでの法人税の一部が実質的に取り返せる
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12">
            ※小規模企業共済・iDeCoは個人の所得控除、セーフティ共済は法人の損金と、効く場所が違う点に注意。
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">2026〜2027年の改正で何が変わったか</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>退職金設計に直結する改正が2つ続いています。</p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="text-white font-medium">「10年ルール」の施行(2026年1月〜)</span> —
                iDeCoなどの一時金を受け取った後に会社の退職金を受け取る場合、
                これまでは<span className="text-white font-medium">5年</span>空ければ退職所得控除を両方フルに使えましたが、
                改正後は<span className="text-white font-medium">前年以前9年内(実質10年)</span>に受け取ったiDeCo一時金と
                勤続期間が重複する分の控除が調整(減額)されるようになりました。
              </li>
              <li>
                <span className="text-white font-medium">iDeCo拠出限度額の引き上げ(2027年1月引落分〜)</span> —
                企業年金のない会社役員・会社員の上限が月2.3万円から
                <span className="text-white font-medium">月6.2万円</span>に拡大します(2026年12月施行)。
                加入可能年齢も70歳未満に広がり、経営者が退職金原資を個人側で積む力が大きく上がります。
              </li>
            </ol>
            <p>
              つまり「積める額は増えるが、出口の順序はよりシビアになる」のが2026年以降の環境です。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">受け取り順序の設計 — 順番で税額が変わる</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              退職所得控除の重複調整は<span className="text-white font-medium">受け取る順番で適用ルールが違います</span>。
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white font-medium">iDeCoが先 → 退職金が後</span>:
                10年ルールの対象。控除をフルに2回使うには、iDeCo一時金の受取から10年以上空けて退職金を受け取る必要があります。
                例: 60歳でiDeCoを一時金受取 → 70歳以降に役員退任で退職金。
              </li>
              <li>
                <span className="text-white font-medium">退職金が先 → iDeCoが後</span>:
                従来どおり<span className="text-white font-medium">19年ルール</span>(前年以前19年内)が適用されるため、
                この順序で両方の控除を使い切るのは現実的にはかなり困難です。
              </li>
            </ul>
            <p>
              引退時期をコントロールできる経営者にとっては、
              <span className="text-white font-medium">「iDeCoを60歳前後で先に受け取り、役員退任(退職金)を10年以上あとに置く」</span>
              が改正後の基本形になります。逆に、退任時期が近い方は一時金にこだわらず、
              iDeCoの年金受取(雑所得・公的年金等控除)との組み合わせも比較する価値があります。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">退職金から逆算した役員報酬を無料で試算できます</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              功績倍率法の上限は「最終報酬月額」で決まるため、退職金設計は現役時代の役員報酬設計と一体です。
              当社の法人税シミュレーターは、役員報酬を動かしながら法人税等・社会保険料・所得税・住民税と
              手取り額を即時計算できます。登録不要・無料で、データはすべて端末内で処理されます。
            </p>
            <Link
              href="/taxsim"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              法人税シミュレーター2026で役員報酬を試算する →
            </Link>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">まとめ — 退職金設計の5ステップ</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <ol className="list-decimal list-inside space-y-3">
              <li>役員在任年数と報酬月額から、功績倍率法で退職金の上限目安を把握する</li>
              <li>小規模企業共済(月7万円)とiDeCoの控除枠を毎年埋める</li>
              <li>法人側はセーフティ共済と内部留保で原資を積む</li>
              <li>iDeCo一時金と退職金の受取を10年以上離す前提で、引退年齢から逆算する</li>
              <li>支給時は株主総会決議・議事録を整え、退職の実態(退任・分掌変更)を明確にする</li>
            </ol>
            <p>
              退職金は金額が大きいぶん、設計の巧拙が数百万円単位の差になります。
              「いくら積むか」だけでなく<span className="text-white font-medium">「いつ・どの順で受け取るか」</span>まで
              決めて初めて設計は完成します。
            </p>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものであり、個別の税務アドバイスではありません。
              税率・制度(退職所得控除、共済、iDeCo等)は執筆時点(2026年8月)の情報であり、今後変更される可能性があります。
              功績倍率や過大退職金の判定、受け取り方の選択は個別事情により結論が変わるため、
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
              <Link href="/columns/yakuin-hoshu-kimekata" className="text-neon-blue hover:text-white transition-colors duration-200">
                あわせて読みたい: 役員報酬はいくらにする?一人法人の決め方 →
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
