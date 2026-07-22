import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '一人法人の法人口座はどこで開く?ネット銀行の比較と審査対策2026',
  description:
    '一人法人・マイクロ法人の法人口座開設を解説。ネット銀行・メガバンク・信用金庫の比較、審査で見られるポイント、開設までに準備しておくものをまとめました。',
  alternates: {
    canonical: '/columns/houjin-kouza-guide',
  },
  openGraph: {
    title: '一人法人の法人口座はどこで開く?ネット銀行の比較と審査対策2026',
    description:
      'ネット銀行・メガバンク・信用金庫の比較と、法人口座の審査で見られるポイントを解説。',
    url: 'https://reimei.tech/columns/houjin-kouza-guide',
  },
}

export default function HoujinKouzaGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '一人法人の法人口座はどこで開く?ネット銀行の比較と審査対策2026',
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
            一人法人の法人口座はどこで開く?
            <br />
            ネット銀行の比較と審査対策【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            公開: 2026年7月22日 / 株式会社黎明
          </p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              法人を設立したら、事業のお金は法人口座で管理するのが原則です。
              個人口座と混ざっていると経理が煩雑になるだけでなく、税務調査や融資の場面でも不利に働きます。
              ただし法人口座は<span className="text-white font-medium">開設審査があり</span>、
              設立直後の一人法人では断られることも珍しくありません。
              どこで開くか、審査で何を見られるかを整理します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">銀行タイプ別の比較</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">タイプ</th>
                  <th className="py-3 pr-4 font-medium">特徴</th>
                  <th className="py-3 font-medium">向いているケース</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">ネット銀行</td>
                  <td className="py-3 pr-4">
                    口座維持費無料・振込手数料が安い・オンライン完結で開設が速い。
                    GMOあおぞらネット銀行、住信SBIネット銀行、楽天銀行、PayPay銀行など
                  </td>
                  <td className="py-3">一人法人の最初の口座。会計ソフト連携も充実</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">メガバンク</td>
                  <td className="py-3 pr-4">信用度は高いが審査が厳しく、収益の見える事業実態を求められる</td>
                  <td className="py-3">大手企業との取引で口座の見栄えが必要な場合</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">信用金庫・地銀</td>
                  <td className="py-3 pr-4">地域密着で相談しやすく、将来の融資につながりやすい</td>
                  <td className="py-3">地元での事業、融資・補助金を視野に入れる場合</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12">
            ※手数料・サービス内容は変更されることがあります。最新の条件は各行の公式サイトでご確認ください。
          </p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              実務的には、<span className="text-white font-medium">まずネット銀行で1口座を確保し、
              事業が育ってから必要に応じてメガバンク・信金を追加</span>する流れが定番です。
              振込手数料の差は毎月効いてくるため、取引の多い一人法人ほどネット銀行のメリットが大きくなります。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">審査で見られるポイントと対策</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              法人口座の審査は、マネーロンダリング対策として「実在する事業か」を確認するものです。
              次の準備をしてから申し込むと通過率が上がります。
            </p>
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <span className="text-white font-medium">事業の実態を示せるようにする</span> —
                自社Webサイト・独自ドメインのメールアドレスは審査で確認されることが多い項目です。
                未整備なら先に
                <Link href="/columns/domain-email-guide" className="text-neon-blue hover:text-white transition-colors duration-200">
                  独自ドメインとメールの整備
                </Link>
                を済ませましょう。
              </li>
              <li>
                <span className="text-white font-medium">事業内容を具体的に説明できるようにする</span> —
                「何を・誰に・どう売るか」。請負契約書・発注書・見積書など取引の証跡があれば添付します。
              </li>
              <li>
                <span className="text-white font-medium">登記情報と申込内容を一致させる</span> —
                事業目的・本店所在地が実態と異なると確認が入ります。バーチャルオフィスの場合は
                審査が厳しめになる銀行もあるため、実態を説明できる資料を厚めに。
              </li>
              <li>
                <span className="text-white font-medium">資本金は現実的な額にする</span> —
                資本金1円でも設立はできますが、口座審査では事業の裏付けとして見られます。
              </li>
            </ol>
            <p className="text-gray-400 text-sm">
              必要書類の目安: 履歴事項全部証明書(登記簿謄本)、法人番号、代表者の本人確認書類、
              事業内容が分かる資料。銀行により異なります。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">口座ができたら: 会計ソフトと連携する</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              法人口座とクレジットカードを会計ソフトに連携すると、明細が自動で取り込まれ、
              記帳の手間が大きく減ります。口座開設とセットで済ませてしまいましょう。
            </p>
            <Link
              href="/columns/kaikei-soft-hikaku"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              一人法人の会計ソフトはどれを選ぶ?freee・マネーフォワード・弥生を比較【2026年版】 →
            </Link>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものです。審査基準は各金融機関の判断によります。
              記載の内容は執筆時点の情報のため、最新の条件は各行の公式サイトをご確認ください。
            </p>
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
