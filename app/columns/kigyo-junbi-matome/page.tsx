import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '一人法人の起業準備まとめ2026 | 設立から会計まで7ステップ',
  description:
    '法人化の判断、会社設立、設立後の届出、法人口座、独自ドメイン・メール、会計ソフトまで。一人で起業するときに必要な準備を7つのステップで時系列に整理した完全ガイドです。',
  alternates: {
    canonical: '/columns/kigyo-junbi-matome',
  },
  openGraph: {
    title: '一人法人の起業準備まとめ2026 | 設立から会計まで7ステップ',
    description:
      '法人化の判断から会計ソフト導入まで、一人起業の準備を7ステップで時系列に整理。',
    url: 'https://reimei.tech/columns/kigyo-junbi-matome',
  },
}

const STEPS = [
  {
    step: 1,
    title: '法人化するか決める',
    body:
      '個人事業主のままか、法人を作るか。税金・社会保険・信用の3つの観点で比較します。利益がおおむね600〜800万円を超えたあたりが検討ラインですが、役員報酬の設定や消費税の課税方式で損益分岐は変わるため、実際の数字での試算が欠かせません。',
    link: { href: '/columns/houjin-setsuritsu-guide', label: '法人設立ガイド(判断基準の詳細)' },
  },
  {
    step: 2,
    title: '会社を設立する',
    body:
      '株式会社(設立費用約20〜25万円)か合同会社(約6〜10万円)かを選び、定款作成→資本金払込→法務局への登記申請と進みます。無料の設立支援サービスを使えば書類作成はフォーム入力で完結します。',
    link: { href: '/columns/houjin-setsuritsu-guide', label: '株式会社・合同会社の違いと設立手順' },
  },
  {
    step: 3,
    title: '設立後の届出を済ませる',
    body:
      '税務署(設立届・青色申告承認申請など)、自治体、年金事務所への届出。社会保険の新規適用届は設立から5日以内と期限が最短なので最優先です。青色申告の承認申請を忘れると初年度の特典を失います。',
    link: { href: '/columns/setsuritsugo-tetsuduki', label: '設立後の手続きチェックリスト' },
  },
  {
    step: 4,
    title: '法人口座を開設する',
    body:
      '審査があるため早めに動きます。一人法人はまずネット銀行で1口座確保が定番。審査では自社サイトや独自ドメインメールなど「事業の実態」が見られるため、ステップ5と並行で進めるのが効率的です。',
    link: { href: '/columns/houjin-kouza-guide', label: '法人口座の開設ガイドと審査対策' },
  },
  {
    step: 5,
    title: '独自ドメインとメールを整備する',
    body:
      '名刺・請求書・口座審査・取引先とのやり取り、すべてに効いてくる事業の「顔」です。ドメイン取得は数千円から。メールはGoogle Workspace等と組み合わせれば1日で整います。',
    link: { href: '/columns/domain-email-guide', label: '独自ドメインとメールの整備手順' },
  },
  {
    step: 6,
    title: '会計ソフトを導入する',
    body:
      '記帳は設立日から発生します。法人口座・クレジットカードとの連携を最初に設定しておくと、日々の経理はほぼ自動化できます。決算直前に慌てて導入するのが一番高くつきます。',
    link: { href: '/columns/kaikei-soft-hikaku', label: '一人法人の会計ソフト比較' },
  },
  {
    step: 7,
    title: '(個人事業主でいく場合)確定申告の準備をする',
    body:
      'ステップ1で「まだ法人化しない」と判断した場合も、確定申告ソフトの導入と青色申告の準備は早いほど得です。無料で始められるソフトもあります。',
    link: { href: '/columns/kakutei-shinkoku-soft-hikaku', label: '個人事業主の確定申告ソフト比較' },
  },
]

export default function KigyoJunbiMatomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '一人法人の起業準備まとめ2026 | 設立から会計まで7ステップ',
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
            一人法人の起業準備まとめ
            <br />
            設立から会計まで7ステップ【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            公開: 2026年7月22日 / 株式会社黎明
          </p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              一人で起業するときにやることは、実はほぼ決まっています。
              このページでは、<span className="text-white font-medium">法人化の判断から会計ソフトの導入まで</span>を
              時系列の7ステップに整理しました。各ステップの詳細は個別記事で解説しています。
              上から順に進めれば、抜け漏れなく事業を始められます。
            </p>
            <p className="text-gray-400 text-sm">
              当社(株式会社黎明)自身が一人法人としてこの手順で立ち上げた経験をもとにまとめています。
            </p>
          </section>

          <div className="space-y-6 mb-12">
            {STEPS.map((s) => (
              <section key={s.step} className="glass-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-neon-blue/10 border border-neon-blue/40 text-neon-blue flex items-center justify-center font-bold">
                    {s.step}
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">{s.body}</p>
                    <Link
                      href={s.link.href}
                      className="text-neon-blue hover:text-white transition-colors duration-200"
                    >
                      {s.link.label} →
                    </Link>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">迷ったら数字で決める</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              起業準備で一番大きな分かれ道はステップ1の「法人化するかどうか」です。
              当社では、売上・経費・役員報酬を入力するだけで法人税等・消費税・社会保険料・手取り額を
              その場で試算できる「法人税シミュレーター2026」を無料公開しています。
              感覚ではなく実際の数字で比較してから決めましょう。
            </p>
            <a
              href="/taxsim"
              className="inline-block px-6 py-3 rounded-lg bg-neon-blue/10 border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-200"
            >
              法人税シミュレーター2026を使ってみる(無料)
            </a>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものであり、税務・法務・労務に関する専門的アドバイスではありません。
              個別の判断については各分野の専門家にご相談ください。
            </p>
          </section>

          <div className="mt-10">
            <Link
              href="/columns"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              ← コラム一覧へ戻る
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
