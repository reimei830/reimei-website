import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '役員報酬はいくらにする?一人法人の決め方と税金・社会保険のバランス2026',
  description:
    '一人法人の役員報酬の決め方を解説。定期同額給与のルール、変更できるタイミング、法人税と個人の税金・社会保険料のバランス、事前確定届出給与による役員賞与の活用まで整理しました。',
  alternates: {
    canonical: '/columns/yakuin-hoshu-kimekata',
  },
  openGraph: {
    title: '役員報酬はいくらにする?一人法人の決め方と税金・社会保険のバランス2026',
    description:
      '定期同額給与のルール、法人税と個人負担のバランス、事前確定届出給与の活用を解説。',
    url: 'https://reimei.tech/columns/yakuin-hoshu-kimekata',
  },
}

export default function YakuinHoshuKimekataPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '役員報酬はいくらにする?一人法人の決め方と税金・社会保険のバランス2026',
    datePublished: '2026-08-03',
    dateModified: '2026-08-03',
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
            役員報酬はいくらにする?
            <br />
            一人法人の決め方と税金・社会保険のバランス【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">公開: 2026年8月3日 / 株式会社黎明</p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              一人法人の経営で最も影響が大きい意思決定のひとつが
              <span className="text-white font-medium">役員報酬の金額</span>です。
              報酬を上げれば個人の手取りは増えますが、所得税・住民税・社会保険料も増えます。
              下げれば法人に利益が残り、法人税がかかります。
              つまり役員報酬は「法人と個人のどちらに、どんな税率でお金を残すか」を決めるダイヤルです。
              本記事では、金額を決める前に知っておくべきルールと、バランスの考え方を整理します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">大前提: 役員報酬は自由に変えられない</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              役員報酬を法人の経費(損金)にするには、税法上のルールに従う必要があります。
              一人法人で使うのは実質的に次の2つです。
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="text-white font-medium">定期同額給与</span> —
                毎月同じ金額を支払う役員報酬。金額を変更できるのは原則として
                <span className="text-white font-medium">事業年度開始から3か月以内</span>の改定だけです。
                期の途中で「今月は利益が出たから増額」といった変更をすると、増額分が損金不算入になります。
              </li>
              <li>
                <span className="text-white font-medium">事前確定届出給与(役員賞与)</span> —
                「いつ・いくら支給するか」を事前に税務署へ届け出て、
                <span className="text-white font-medium">届出どおりの日に届出どおりの金額</span>を支給するもの。
                1円でもずれると全額が損金不算入になる厳格な制度ですが、
                後述のとおり社会保険料の面で使い道があります。
              </li>
            </ol>
            <p>
              このルールがあるため、役員報酬は<span className="text-white font-medium">期首に1年分の業績を見込んで決める</span>
              ことになります。決めた金額は株主総会議事録(一人法人でも作成します)に残しておきましょう。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">報酬額で何が変わるか — 3つの負担を見る</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-8">
            <p>役員報酬の金額を動かすと、次の3つの負担が連動して変わります。</p>
          </section>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">負担</th>
                  <th className="py-3 pr-4 font-medium">報酬を上げると</th>
                  <th className="py-3 font-medium">ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">法人税等</td>
                  <td className="py-3 pr-4">減る(報酬は損金のため利益が圧縮される)</td>
                  <td className="py-3">
                    法人税は所得800万円以下の部分が軽減税率15%、超える部分が23.2%。
                    地方法人税・住民税・事業税も利益に連動
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">個人の税金</td>
                  <td className="py-3 pr-4">増える(所得税は累進課税)</td>
                  <td className="py-3">
                    所得税は5%〜45%の累進。給与所得控除を差し引いた後の所得に課税され、住民税は約10%
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">社会保険料</td>
                  <td className="py-3 pr-4">増える(会社負担+本人負担で報酬の約30%)</td>
                  <td className="py-3">
                    健康保険(協会けんぽ・都道府県別で約10%)+厚生年金18.3%を労使折半。
                    標準報酬月額に上限あり
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12">
            ※税率・料率は2026年(令和8年度)時点の概要です。詳細な条件は国税庁・協会けんぽの公表資料をご確認ください。
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">よくある3つの決め方</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="text-white font-medium">生活費基準</span> —
                個人の生活に必要な手取りから逆算する方法。最もシンプルで、初年度など業績が読めない時期に向きます。
                余った利益は法人に残し、法人税を払って内部留保します。
              </li>
              <li>
                <span className="text-white font-medium">税負担の合計最小化基準</span> —
                「法人税等+個人の税金+社会保険料」の合計が最小になる報酬額を探す方法。
                売上・経費の水準によって最適点は大きく動くため、
                シミュレーターで報酬額を動かしながら合計負担を比較するのが現実的です。
              </li>
              <li>
                <span className="text-white font-medium">将来基準</span> —
                厚生年金の受給額や融資審査(役員報酬は返済能力の説明材料になります)、
                住宅ローンの与信などを考えて、あえて高めに設定する方法。
                目先の税負担だけでなく、社会保険料は将来の年金給付に反映される点も考慮に入れます。
              </li>
            </ol>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">役員賞与(事前確定届出給与)で社会保険料が変わる理由</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              社会保険料には<span className="text-white font-medium">賞与の上限</span>があります。
              標準賞与額は健康保険が年間573万円まで、厚生年金が1回の支給につき150万円までしか保険料の計算対象になりません。
              このため、年収総額を同じにしたまま「毎月の報酬を下げて、年1回の賞与に寄せる」と、
              上限を超えた部分に社会保険料がかからず、社保負担が下がるケースがあります。
            </p>
            <p>
              ただし注意点も多い方法です。事前確定届出給与は
              <span className="text-white font-medium">届出どおりに支給しないと全額損金不算入</span>になるため、
              資金繰りが崩れると使えません。また月額報酬を下げると傷病手当金や出産手当金、
              将来の厚生年金額も下がります。メリットとリスクを数字で比べてから判断しましょう。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">報酬額ごとの手取りを無料で試算できます</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              当社の法人税シミュレーターは、売上・経費・役員報酬・役員賞与を入力すると、
              法人税等・消費税・社会保険料・所得税・住民税と手取り額を即時計算します。
              協会けんぽ令和8年度の47都道府県別料率、賞与の社会保険上限にも対応。
              登録不要・無料で、データはすべて端末内で処理されます。
            </p>
            <Link
              href="/taxsim"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              法人税シミュレーター2026で役員報酬を試算する →
            </Link>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">決めた後にやること</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <ul className="list-disc list-inside space-y-3">
              <li>株主総会議事録を作成し、報酬額の決議を書面に残す</li>
              <li>役員賞与を出す場合は、事前確定届出給与の届出書を期限内に税務署へ提出する</li>
              <li>
                社会保険の標準報酬月額を年金事務所に届け出る(報酬を変更した場合は月額変更届)。
                設立直後の手続きは
                <Link href="/columns/setsuritsugo-tetsuduki" className="text-neon-blue hover:text-white transition-colors duration-200">
                  設立後の手続きチェックリスト
                </Link>
                を参照
              </li>
              <li>毎月の源泉所得税の納付(納期の特例を申請していれば年2回)を忘れずに行う</li>
            </ul>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものであり、税務アドバイスではありません。
              税率・社会保険料率は執筆時点(2026年・令和8年度)の情報です。
              個別の判断にあたっては税理士・社会保険労務士等の専門家にご相談ください。
            </p>
          </section>

          <div className="mt-10 space-y-2">
            <p>
              <Link href="/columns/hitori-houjin-shaho" className="text-neon-blue hover:text-white transition-colors duration-200">
                あわせて読みたい: 一人法人の社会保険料はいくら?協会けんぽの仕組みと計算方法 →
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
