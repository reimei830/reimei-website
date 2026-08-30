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
    href: '/columns/shisan-kanri-houjin',
    title: '本業法人と分けるべきか?資産管理法人の設立基準とメリット・デメリット【2026年版】',
    description:
      '税率差・家族への所得分散・相続対策のメリットから、維持コスト・社会保険の二以上勤務・上場株が不利になる注意点、不動産の3つの持たせ方まで整理しました。',
    date: '2026年8月30日',
  },
  {
    href: '/columns/keieisha-taishokukin',
    title: '経営者の退職金はいくら取れる?退職所得控除と共済・iDeCoの出口戦略【2026年版】',
    description:
      '退職所得控除と2分の1課税の計算例、功績倍率法による損金算入の目安、小規模企業共済・iDeCo・セーフティ共済の使い分け、2026年施行の10年ルールと受け取り順序まで整理しました。',
    date: '2026年8月28日',
  },
  {
    href: '/columns/furoushotoku-kojin-keieisha',
    title: '不労所得はどうつくる?年収1,200万円の個人と会社経営者の最適解【2026年版】',
    description:
      '高配当株・インデックス投資・不動産・REITなど代表的な8つの方法を、個人と法人それぞれの税率から比較。共済・退職金出口まで含めた経営者の設計手順も解説します。',
    date: '2026年8月28日',
  },
  {
    href: '/columns/yakuin-hoshu-kimekata',
    title: '役員報酬はいくらにする?一人法人の決め方と税金・社会保険のバランス【2026年版】',
    description:
      '定期同額給与のルール、変更できるタイミング、法人税と個人の税金・社会保険料のバランス、事前確定届出給与による役員賞与の活用まで整理しました。',
    date: '2026年8月3日',
  },
  {
    href: '/columns/hitori-houjin-shaho',
    title: '一人法人の社会保険料はいくら?協会けんぽの仕組みと計算方法【2026年版】',
    description:
      '加入義務、協会けんぽの令和8年度料率、標準報酬月額の仕組み、賞与の上限、国保・国民年金との違いを一人法人向けに解説します。',
    date: '2026年8月3日',
  },
  {
    href: '/columns/shouhizei-houshiki',
    title: '消費税はどの方式で納める?免税・2割特例・簡易課税・原則課税の違い【2026年版】',
    description:
      '免税事業者の条件、インボイス発行事業者の2割特例、簡易課税のみなし仕入率、原則課税との有利判定の考え方を解説します。',
    date: '2026年8月3日',
  },
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
