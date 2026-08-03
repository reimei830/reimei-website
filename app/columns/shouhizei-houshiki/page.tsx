import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '消費税はどの方式で納める?免税・2割特例・簡易課税・原則課税の違い2026',
  description:
    '一人法人・個人事業主の消費税の納税方式を解説。免税事業者の条件、インボイス発行事業者の2割特例、簡易課税のみなし仕入率、原則課税との有利判定の考え方を2026年時点の制度で整理しました。',
  alternates: {
    canonical: '/columns/shouhizei-houshiki',
  },
  openGraph: {
    title: '消費税はどの方式で納める?免税・2割特例・簡易課税・原則課税の違い2026',
    description:
      '免税の条件、2割特例、簡易課税のみなし仕入率、原則課税との有利判定を解説。',
    url: 'https://reimei.tech/columns/shouhizei-houshiki',
  },
}

export default function ShouhizeiHoushikiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '消費税はどの方式で納める?免税・2割特例・簡易課税・原則課税の違い2026',
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
            消費税はどの方式で納める?
            <br />
            免税・2割特例・簡易課税・原則課税の違い【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">公開: 2026年8月3日 / 株式会社黎明</p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              インボイス制度が始まって以降、一人法人・個人事業主にとって
              <span className="text-white font-medium">消費税をどの方式で納めるか</span>は、
              手残りに直結する重要な選択になりました。
              同じ売上でも、方式によって納税額が数十万円単位で変わることがあります。
              本記事では、4つの方式の仕組みと、どれを選ぶべきかの考え方を整理します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">4つの方式の全体像</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">方式</th>
                  <th className="py-3 pr-4 font-medium">納税額の計算</th>
                  <th className="py-3 font-medium">使える条件</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">免税</td>
                  <td className="py-3 pr-4">納税なし</td>
                  <td className="py-3">
                    基準期間(前々事業年度)の課税売上高が1,000万円以下で、インボイス発行事業者に登録していないこと等
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">2割特例</td>
                  <td className="py-3 pr-4">売上にかかる消費税 × 20%</td>
                  <td className="py-3">
                    免税事業者からインボイス発行事業者になった事業者の経過措置。
                    令和8年(2026年)9月30日を含む課税期間までの期間限定
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">簡易課税</td>
                  <td className="py-3 pr-4">売上にかかる消費税 × (1 − みなし仕入率)</td>
                  <td className="py-3">
                    基準期間の課税売上高5,000万円以下+事前届出。みなし仕入率は業種により40〜90%
                  </td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">原則課税</td>
                  <td className="py-3 pr-4">売上にかかる消費税 − 仕入・経費にかかった消費税</td>
                  <td className="py-3">誰でも選択可(デフォルトの方式)。仕入税額控除にはインボイスの保存が必要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12">
            ※2026年時点の制度概要です。適用条件の詳細は国税庁のインボイス制度・消費税の各種資料をご確認ください。
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">まず確認: 免税でいられるか、インボイスが必要か</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              出発点は「取引先がインボイス(適格請求書)を求めるかどうか」です。
              主要な取引先が課税事業者(企業)であれば、インボイスを発行できないと取引先側の仕入税額控除が制限されるため、
              実務上はインボイス発行事業者への登録=課税事業者になることを求められるケースが多いでしょう。
              一方、顧客が消費者中心(BtoC)であれば、基準期間の課税売上高1,000万円以下の間は免税のままでいる選択肢が有力です。
            </p>
            <p>
              なお、新設法人は基準期間がないため原則として設立1〜2期目は免税ですが、
              <span className="text-white font-medium">資本金1,000万円以上で設立すると初年度から課税事業者</span>になります。
              設立時の資本金設定については
              <Link href="/columns/houjin-setsuritsu-guide" className="text-neon-blue hover:text-white transition-colors duration-200">
                法人設立ガイド
              </Link>
              もあわせてご覧ください。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">2割特例は「使えるうちは最有力」— ただし期限あり</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              2割特例は、免税事業者からインボイス発行事業者になった小規模事業者向けの経過措置で、
              <span className="text-white font-medium">売上にかかる消費税の2割だけ納めればよい</span>という制度です。
              事前届出は不要で、申告時に適用するかどうかを選べます。
              サービス業の簡易課税(みなし仕入率50%=納税は5割)と比べても大幅に有利なことが多く、
              対象になるならまず検討すべき方式です。
            </p>
            <p>
              ただしこの特例は<span className="text-white font-medium">令和8年9月30日を含む課税期間まで</span>の期間限定です。
              終了後は簡易課税か原則課税を選ぶことになるため、
              「2割特例が使えなくなった後にどちらへ移行するか」を今のうちに試算しておくと安心です。
              簡易課税は適用したい課税期間の開始前までに届出が必要な点にも注意してください。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">簡易課税と原則課税の有利判定</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              判定の軸はシンプルで、<span className="text-white font-medium">課税仕入(消費税のかかる経費)が売上に対して多いかどうか</span>です。
            </p>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <span className="text-white font-medium">経費が少ない事業(コンサル・受託開発・設計など)</span> —
                人件費(給与)は課税仕入にならないため、原則課税だと控除できる仕入税額が小さく、納税額が大きくなりがち。
                みなし仕入率50%(第5種・サービス業)の簡易課税が有利になりやすい
              </li>
              <li>
                <span className="text-white font-medium">仕入・外注が多い事業(物販・建設・製造など)</span> —
                実際の課税仕入がみなし仕入率を上回るなら原則課税が有利。
                大きな設備投資をする期は、原則課税でないと支払った消費税の還付が受けられない点も重要
              </li>
              <li>
                <span className="text-white font-medium">簡易課税は2年縛り</span> —
                一度選択すると原則2年間は継続適用になるため、翌期の設備投資予定まで見て判断する
              </li>
            </ul>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">4方式の納税額を並べて比較できます</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              当社の法人税シミュレーターは、免税・2割特例・簡易課税(第5種)・原則課税の4方式に対応し、
              売上と経費を入力するだけで消費税の納税額を切り替えて比較できます。
              法人税・社会保険料・手取り額もまとめて計算されるため、方式選択の全体影響がひと目で分かります。
              登録不要・無料です。
            </p>
            <Link
              href="/taxsim"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              法人税シミュレーター2026で消費税を比較する →
            </Link>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものであり、税務アドバイスではありません。
              制度・税率は執筆時点(2026年)の情報です。適用可否や有利判定は事業の実態により異なるため、
              実際の選択にあたっては税理士等の専門家にご相談ください。
            </p>
          </section>

          <div className="mt-10 space-y-2">
            <p>
              <Link href="/columns/kaikei-soft-hikaku" className="text-neon-blue hover:text-white transition-colors duration-200">
                あわせて読みたい: 一人法人の会計ソフトはどれを選ぶ?freee・マネーフォワード・弥生を比較 →
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
