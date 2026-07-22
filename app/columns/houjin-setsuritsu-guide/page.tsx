import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '一人で法人を設立するには?株式会社・合同会社の違いと設立手順2026',
  description:
    '個人事業主のままか法人化するかの判断基準、株式会社と合同会社の費用・特徴の違い、定款認証から登記までの設立手順を一人法人向けに解説します。',
  alternates: {
    canonical: '/columns/houjin-setsuritsu-guide',
  },
  openGraph: {
    title: '一人で法人を設立するには?株式会社・合同会社の違いと設立手順2026',
    description:
      '法人化の判断基準、株式会社と合同会社の違い、設立手順を一人法人向けに解説。',
    url: 'https://reimei.tech/columns/houjin-setsuritsu-guide',
  },
}

export default function HoujinSetsuritsuGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '一人で法人を設立するには?株式会社・合同会社の違いと設立手順2026',
    datePublished: '2026-07-22',
    dateModified: '2026-07-22',
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
            一人で法人を設立するには?
            <br />
            株式会社・合同会社の違いと設立手順【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            公開: 2026年7月22日 / 株式会社黎明
          </p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              事業が軌道に乗ってくると必ず出てくるのが「法人化(法人成り)すべきか」という悩みです。
              本記事では、個人事業主のままでいる場合との違い、株式会社と合同会社の選び方、
              そして一人で会社を設立する具体的な手順を解説します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">法人化すると何が変わるか</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              <span className="text-white font-medium">税金の構造が変わります。</span>
              個人事業主の所得税は利益が増えるほど税率が上がる累進課税(最高45%+住民税10%)ですが、
              法人税は所得800万円以下の部分が15%、それ以上でも23.2%とほぼ一定です。
              役員報酬として受け取る分には給与所得控除も使えるため、
              利益がおおむね600〜800万円を超えたあたりから法人化の節税メリットが出やすいと言われます。
            </p>
            <p>
              <span className="text-white font-medium">社会保険が変わります。</span>
              一人社長でも健康保険・厚生年金への加入が義務になります。国民健康保険・国民年金より
              保険料負担は増えることが多い一方、将来の年金は厚くなります。
            </p>
            <p>
              <span className="text-white font-medium">信用が変わります。</span>
              法人でないと取引できない企業や、法人であることが融資・採用で有利に働く場面は今も多くあります。
            </p>
            <p className="text-gray-400 text-sm">
              ※損益分岐は役員報酬の設定・消費税の課税方式・都道府県の社会保険料率によって大きく変わります。
              判断の前に、実際の数字でシミュレーションすることをおすすめします。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">株式会社と合同会社、どちらにする?</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">項目</th>
                  <th className="py-3 pr-4 font-medium">株式会社</th>
                  <th className="py-3 font-medium">合同会社</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">設立費用の目安</td>
                  <td className="py-3 pr-4">約20〜25万円(定款認証+登録免許税15万円〜)</td>
                  <td className="py-3">約6〜10万円(定款認証不要・登録免許税6万円〜)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">対外的な信用</td>
                  <td className="py-3 pr-4">高い(知名度・上場も可能)</td>
                  <td className="py-3">やや劣るが年々一般化</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">役員の任期・決算公告</td>
                  <td className="py-3 pr-4">任期あり(登記更新が必要)・公告義務あり</td>
                  <td className="py-3">任期なし・公告義務なし(維持コストが低い)</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">向いているケース</td>
                  <td className="py-3 pr-4">対企業取引・採用・将来の拡大を重視</td>
                  <td className="py-3">コスト最優先の一人会社・資産管理会社</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12">
            ※費用は2026年7月時点の目安です。電子定款を使うと収入印紙代4万円が不要になります。
            定款認証手数料は資本金額により異なります。
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">設立手順(5ステップ)</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-8">
            <ol className="list-decimal list-inside space-y-4">
              <li>
                <span className="text-white font-medium">基本事項を決める</span> —
                商号(会社名)・本店所在地・事業目的・資本金・決算期・役員構成。
                決算期は繁忙期を避けると後がラクです。資本金は1円から可能ですが、
                法人口座の審査や消費税免税の判定(1,000万円未満)を考えると現実的な額に。
              </li>
              <li>
                <span className="text-white font-medium">定款を作成する</span> —
                会社のルールブック。株式会社は公証役場での認証が必要(合同会社は不要)。
                電子定款にすれば印紙代4万円が節約できます。
              </li>
              <li>
                <span className="text-white font-medium">資本金を払い込む</span> —
                発起人個人の口座に資本金を振り込み、通帳のコピー等で払込を証明します。
              </li>
              <li>
                <span className="text-white font-medium">法務局に登記申請する</span> —
                申請した日が会社の設立日になります。オンライン申請も可能。
                登記完了まで数日〜2週間程度です。
              </li>
              <li>
                <span className="text-white font-medium">設立後の届出を行う</span> —
                税務署・自治体・年金事務所への届出が待っています(期限が短いものもあるので注意)。
                詳しくは
                <Link href="/columns/setsuritsugo-tetsuduki" className="text-neon-blue hover:text-white transition-colors duration-200">
                  設立後の手続きチェックリスト
                </Link>
                へ。
              </li>
            </ol>
            <p>
              なお、freee会社設立・マネーフォワード クラウド会社設立・弥生のかんたん会社設立など、
              書類作成を無料で支援するサービスを使うと、定款や登記書類の作成をフォーム入力だけで進められます。
              電子定款にも対応しているため、自力で書類を作るより安く早く済むことが多いです。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">
              法人化の損益分岐は「実際の数字」で確認を
            </h2>
            <p className="text-gray-300 leading-relaxed">
              当社では、売上・経費・役員報酬を入力するだけで法人税等・消費税・社会保険料・手取り額を
              その場で試算できる「法人税シミュレーター2026」を開発しています。
              個人事業主のままの場合と法人化した場合の手取りを比べてから決めるのが失敗しないコツです。
            </p>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p className="mb-2">
              免責事項: 本記事は一般的な情報提供を目的としたものであり、税務・法務に関する専門的アドバイスではありません。
              個別の判断については税理士・司法書士等の専門家にご相談ください。
            </p>
            <p>記載の費用・制度は執筆時点の情報です。最新の内容は公的機関等の公式情報をご確認ください。</p>
          </section>

          <div className="mt-10 space-y-2">
            <p>
              <Link href="/columns/kigyo-junbi-matome" className="text-neon-blue hover:text-white transition-colors duration-200">
                起業準備の全体像はこちら: 一人法人の起業準備まとめ →
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
