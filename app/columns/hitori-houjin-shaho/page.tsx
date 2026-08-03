import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '一人法人の社会保険料はいくら?協会けんぽの仕組みと計算方法2026',
  description:
    '一人法人・マイクロ法人の社会保険(健康保険・厚生年金)を解説。加入義務、協会けんぽの令和8年度料率、標準報酬月額の仕組み、賞与の上限、保険料を試算する方法までまとめました。',
  alternates: {
    canonical: '/columns/hitori-houjin-shaho',
  },
  openGraph: {
    title: '一人法人の社会保険料はいくら?協会けんぽの仕組みと計算方法2026',
    description:
      '加入義務、令和8年度の料率、標準報酬月額の仕組み、賞与の上限までを一人法人向けに解説。',
    url: 'https://reimei.tech/columns/hitori-houjin-shaho',
  },
}

export default function HitoriHoujinShahoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '一人法人の社会保険料はいくら?協会けんぽの仕組みと計算方法2026',
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
            一人法人の社会保険料はいくら?
            <br />
            協会けんぽの仕組みと計算方法【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">公開: 2026年8月3日 / 株式会社黎明</p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              法人を設立して役員報酬を受け取ると、
              <span className="text-white font-medium">たとえ社長一人だけの会社でも社会保険(健康保険・厚生年金)への加入が義務</span>
              になります。個人事業主時代の国民健康保険・国民年金とは制度も計算方法もまったく別物で、
              「会社負担」と「本人負担」を合わせると役員報酬のおよそ3割に相当する大きな固定費です。
              本記事では、一人法人の社会保険料がどう決まるのかを順を追って解説します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">加入する制度と保険料率(令和8年度)</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-8">
            <p>
              一人法人(健康保険組合のない中小企業)が加入するのは、
              全国健康保険協会(<span className="text-white font-medium">協会けんぽ</span>)の健康保険と、厚生年金保険です。
              保険料は「標準報酬月額 × 保険料率」で計算し、会社と本人が半分ずつ負担(労使折半)します。
            </p>
          </section>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">保険</th>
                  <th className="py-3 pr-4 font-medium">料率(労使合計)</th>
                  <th className="py-3 font-medium">備考</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">健康保険</td>
                  <td className="py-3 pr-4">約9.2〜10.6%(都道府県別)</td>
                  <td className="py-3">
                    協会けんぽは47都道府県ごとに料率が異なる。令和8年度は例えば東京都9.85%、愛知県9.93%、大阪府10.13%
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">子ども・子育て支援金</td>
                  <td className="py-3 pr-4">0.23%</td>
                  <td className="py-3">令和8年度から健康保険料に上乗せして徴収される新しい拠出金</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">介護保険</td>
                  <td className="py-3 pr-4">1.62%</td>
                  <td className="py-3">40歳以上65歳未満の被保険者のみ上乗せ</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">厚生年金</td>
                  <td className="py-3 pr-4">18.3%</td>
                  <td className="py-3">全国一律。平成29年以降は18.3%で固定されている</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12">
            ※料率は令和8年度(2026年度)のもの。協会けんぽの料率は毎年3月分から改定されます。
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">「標準報酬月額」という考え方</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              社会保険料は毎月の給与額そのものではなく、給与を等級表に当てはめた
              <span className="text-white font-medium">標準報酬月額</span>に料率を掛けて計算します。
              等級には上限があり、健康保険は月額139万円(第50等級)、厚生年金は月額65万円(第32等級)が上限です。
              つまり<span className="text-white font-medium">役員報酬をどれだけ上げても、上限を超えた部分には社会保険料がかからない</span>
              構造になっています。
            </p>
            <p>
              賞与についても同様に上限があり、標準賞与額は
              <span className="text-white font-medium">健康保険が年間累計573万円まで、厚生年金が1回の支給につき150万円まで</span>
              が保険料の対象です。この上限の存在が、月額報酬と役員賞与の配分によって社会保険料の総額が変わる理由です。
              詳しくは
              <Link href="/columns/yakuin-hoshu-kimekata" className="text-neon-blue hover:text-white transition-colors duration-200">
                役員報酬の決め方の記事
              </Link>
              で解説しています。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">計算例: 役員報酬月80万円・愛知県・40歳以上の場合</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>イメージをつかむために、ざっくりとした概算例を示します。</p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                健康保険+子育て支援金+介護保険: 9.93% + 0.23% + 1.62% = 11.78% → 月額約9.4万円(労使合計)
              </li>
              <li>厚生年金: 上限の標準報酬月額65万円 × 18.3% → 月額約11.9万円(労使合計)</li>
              <li>
                合計すると<span className="text-white font-medium">月額約21万円・年間約256万円</span>。
                半分は会社負担(損金)、半分は本人の給与から天引きされます
              </li>
            </ul>
            <p className="text-gray-400 text-sm">
              ※等級への当てはめや端数処理を省略した概算です。正確な金額は協会けんぽの保険料額表をご確認ください。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">国保・国民年金との違い — 法人化で何が変わるか</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white font-medium">保険料の決まり方</span> —
                国保は前年の所得と世帯人数で決まりますが、社会保険は役員報酬の額で決まります。
                報酬設定しだいで保険料をコントロールできるのが大きな違いです。
              </li>
              <li>
                <span className="text-white font-medium">年金の手厚さ</span> —
                国民年金(基礎年金のみ)に対し、厚生年金は基礎年金+報酬比例部分の2階建て。
                保険料が高い分、将来の受給額も増えます。
              </li>
              <li>
                <span className="text-white font-medium">扶養の概念</span> —
                社会保険には被扶養者制度があり、配偶者や子を保険料の追加負担なしで扶養に入れられます。
                国保にはこの仕組みがなく、加入者ごとに保険料がかかります。
              </li>
              <li>
                <span className="text-white font-medium">給付</span> —
                健康保険には傷病手当金・出産手当金があります(国保は原則なし)。
                これらの給付額は標準報酬月額に連動するため、報酬を極端に下げると給付も薄くなります。
              </li>
            </ul>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">あなたの条件で社会保険料を試算できます</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              当社の法人税シミュレーターは、協会けんぽ令和8年度の47都道府県別料率を内蔵し、
              役員報酬・役員賞与を入力するだけで社会保険料(会社負担・本人負担)と手取り額を即時計算します。
              介護保険の有無、賞与の上限、子ども・子育て支援金にも対応。登録不要・無料です。
            </p>
            <Link
              href="/taxsim"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              法人税シミュレーター2026で社会保険料を試算する →
            </Link>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものであり、社会保険・税務のアドバイスではありません。
              料率・制度は執筆時点(2026年・令和8年度)の情報です。
              個別の手続き・判断にあたっては社会保険労務士・税理士等の専門家にご相談ください。
            </p>
          </section>

          <div className="mt-10 space-y-2">
            <p>
              <Link href="/columns/setsuritsugo-tetsuduki" className="text-neon-blue hover:text-white transition-colors duration-200">
                あわせて読みたい: 法人設立後にやる手続きチェックリスト →
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
