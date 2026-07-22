import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'コラム',
  description:
    '株式会社黎明のコラム一覧。一人法人・マイクロ法人向けの会計・税務情報などをお届けします。',
  alternates: {
    canonical: '/columns',
  },
}

const ARTICLES = [
  {
    href: '/columns/kigyo-junbi-matome',
    title: '一人法人の起業準備まとめ — 設立から会計まで7ステップ【2026年版】',
    description:
      '法人化の判断、会社設立、設立後の届出、法人口座、ドメイン・メール、会計ソフトまで。一人起業の準備を時系列に整理した完全ガイドです。',
    date: '2026年7月22日',
  },
  {
    href: '/columns/houjin-setsuritsu-guide',
    title: '一人で法人を設立するには?株式会社・合同会社の違いと設立手順【2026年版】',
    description:
      '個人事業主のままか法人化するかの判断基準、株式会社と合同会社の費用・特徴の違い、設立の5ステップを解説します。',
    date: '2026年7月22日',
  },
  {
    href: '/columns/setsuritsugo-tetsuduki',
    title: '法人設立後にやる手続きチェックリスト — 税務署・年金事務所・自治体への届出【2026年版】',
    description:
      '法人設立届出書・青色申告承認申請・社会保険の新規適用など、期限つきの届出をチェックリスト形式で整理しました。',
    date: '2026年7月22日',
  },
  {
    href: '/columns/houjin-kouza-guide',
    title: '一人法人の法人口座はどこで開く?ネット銀行の比較と審査対策【2026年版】',
    description:
      'ネット銀行・メガバンク・信用金庫の比較と、法人口座の審査で見られるポイント・対策を解説します。',
    date: '2026年7月22日',
  },
  {
    href: '/columns/domain-email-guide',
    title: '起業したら独自ドメインとメールを整備しよう — 選び方と取得手順【2026年版】',
    description:
      '.co.jp / .jp / .comの選び方と費用の目安、取得の手順、独自ドメインメールの作り方を一人法人・個人事業主向けに解説します。',
    date: '2026年7月22日',
  },
  {
    href: '/columns/kakutei-shinkoku-soft-hikaku',
    title: '個人事業主の確定申告ソフトはどれを選ぶ?やよい・マネーフォワード・freeeを比較【2026年版】',
    description:
      '無料で始められるソフト、青色申告65万円控除への対応、自動仕訳の強さから、個人事業主・フリーランスに合う確定申告ソフトの選び方を解説します。',
    date: '2026年7月22日',
  },
  {
    href: '/columns/kaikei-soft-hikaku',
    title: '一人法人の会計ソフトはどれを選ぶ?freee・マネーフォワード・弥生を比較【2026年版】',
    description:
      'インボイス制度・電子帳簿保存法への対応、料金、簿記知識の要否から、一人法人に合うクラウド会計ソフトの選び方を解説します。',
    date: '2026年7月22日',
  },
]

export default function ColumnsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">コラム</h1>
          <p className="text-gray-400 mb-12">
            一人法人・マイクロ法人向けの会計・税務情報などをお届けします。
          </p>

          <div className="space-y-6">
            {ARTICLES.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="glass-card block p-6 sm:p-8 hover:border-neon-blue/40 transition-colors duration-200 group"
              >
                <p className="text-xs text-gray-500 mb-2">{article.date}</p>
                <h2 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-200 mb-3">
                  {article.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
