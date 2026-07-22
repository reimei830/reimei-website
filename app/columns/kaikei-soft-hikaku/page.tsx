import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '一人法人の会計ソフト比較2026 | freee・マネーフォワード・弥生',
  description:
    '一人法人・マイクロ法人向けにfreee会計・マネーフォワード クラウド会計・弥生会計 Nextを比較。インボイス制度・電子帳簿保存法への対応、料金、簿記知識の要否から自社に合う会計ソフトの選び方を解説します。',
  alternates: {
    canonical: '/columns/kaikei-soft-hikaku',
  },
  openGraph: {
    title: '一人法人の会計ソフト比較2026 | freee・マネーフォワード・弥生',
    description:
      '一人法人・マイクロ法人向けにクラウド会計ソフト3社を比較。インボイス・電帳法対応、料金、選び方を解説。',
    url: 'https://reimei.tech/columns/kaikei-soft-hikaku',
  },
}

/*
 * link.pixel があるものはA8.netアフィリエイトリンク設置済み。
 * リンク文言(link.label)はA8素材の規定どおり改変しないこと。
 * freee・マネーフォワードはA8承認後に link を差し替える。PR表記は冒頭に設置済み。
 */
const SOFTWARES = [
  {
    name: 'freee会計',
    price: '月額3,000円前後〜(ひとり法人向けプラン・年払い時)',
    knowledge: '簿記知識が少なくても使いやすい(◯×形式の入力)',
    strengths: [
      '銀行口座・クレジットカード連携による自動仕訳が強力',
      '請求書発行から記帳・決算書作成までワンストップ',
      '人事労務(給与計算・社会保険)への拡張が同一プラットフォームで完結',
    ],
    caution: '従来の簿記の流儀(仕訳帳ベース)に慣れた人には独特の操作感',
    link: {
      href: 'https://www.freee.co.jp/accounting/',
      label: 'freee会計 公式サイトで詳細を見る',
      rel: 'nofollow noopener',
    },
  },
  {
    name: 'マネーフォワード クラウド会計',
    price: '月額3,000円前後〜(スモールビジネスプラン・年払い時)',
    knowledge: '簿記の基礎知識があるとスムーズ(仕訳ベースの画面構成)',
    strengths: [
      '仕訳帳ベースの伝統的な操作感で、税理士との連携がしやすい',
      '会計・請求書・経費・給与などモジュールが豊富で拡張性が高い',
      '金融機関との連携数が多く、明細の自動取得が幅広い',
    ],
    caution: '機能が多いぶん、最初の設定項目はやや多め',
    link: {
      href: 'https://biz.moneyforward.com/accounting/',
      label: 'マネーフォワード クラウド会計 公式サイトで詳細を見る',
      rel: 'nofollow noopener',
    },
  },
  {
    name: '弥生会計 Next',
    price: '月額2,000〜3,000円程度(プラン・キャンペーンにより変動)',
    knowledge: '簿記知識があるとスムーズ。新世代UIで初心者にも配慮',
    strengths: [
      '老舗・弥生の新世代クラウド会計。銀行明細やレシートの自動取込に対応',
      '「弥生給与 Next」など同シリーズ製品との連携でバックオフィスを揃えやすい',
      '全国の税理士事務所での採用実績が多く、顧問契約時の互換性が高い',
    ],
    caution: '比較的新しい製品のため、従来のデスクトップ版弥生会計とは操作感が異なる',
    link: {
      href: 'https://px.a8.net/svt/ejp?a8mat=4B86GY+CKHGJ6+35XE+6IP2Q',
      label: '法人向けクラウド会計ソフト「弥生会計 Next」はこちら',
      rel: 'nofollow sponsored noopener',
      pixel: 'https://www16.a8.net/0.gif?a8mat=4B86GY+CKHGJ6+35XE+6IP2Q',
    },
  },
]

export default function KaikeiSoftHikakuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '一人法人の会計ソフト比較2026 | freee・マネーフォワード・弥生',
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
          <p className="text-xs text-gray-500 border border-white/10 rounded px-3 py-2 mb-8 inline-block">
            PR:本記事にはプロモーション(広告)が含まれる場合があります
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4">
            一人法人の会計ソフトはどれを選ぶ?
            <br />
            freee・マネーフォワード・弥生を比較【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            公開: 2026年7月22日 / 株式会社黎明
          </p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              一人法人(マイクロ法人)の経理は、会計ソフト選びでかかる手間が大きく変わります。
              役員報酬の仕訳、社会保険料の処理、消費税の申告方式(2割特例・簡易課税・原則課税)への対応、
              そしてインボイス制度と電子帳簿保存法——これらを税理士に丸投げせず自社で回すなら、
              クラウド会計ソフトはほぼ必須です。
            </p>
            <p>
              本記事では、一人法人での利用を前提に、国内シェア上位の
              「freee会計」「マネーフォワード クラウド会計」「弥生会計 Next」の3つを比較します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">3社比較の要点</h2>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">ソフト</th>
                  <th className="py-3 pr-4 font-medium">料金の目安</th>
                  <th className="py-3 font-medium">簿記知識</th>
                </tr>
              </thead>
              <tbody>
                {SOFTWARES.map((s) => (
                  <tr key={s.name} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">{s.name}</td>
                    <td className="py-3 pr-4">{s.price}</td>
                    <td className="py-3">{s.knowledge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12 -mt-8">
            ※料金は2026年7月時点の目安です。プラン改定があるため、最新の料金は各公式サイトでご確認ください。
            インボイス制度・電子帳簿保存法には3社とも対応しています。
          </p>

          {SOFTWARES.map((s) => (
            <section key={s.name} className="glass-card p-6 sm:p-8 mb-8">
              <h2 className="text-xl font-bold text-white mb-4">{s.name}</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                {s.strengths.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="text-gray-400 text-sm mb-6">注意点: {s.caution}</p>
              <p>
                <a
                  href={s.link.href}
                  target="_blank"
                  rel={s.link.rel}
                  className="inline-block px-6 py-3 rounded-lg bg-neon-blue/10 border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-200"
                >
                  {s.link.label}
                </a>
                {'pixel' in s.link && (
                  <img style={{ border: 0 }} width={1} height={1} src={s.link.pixel} alt="" />
                )}
              </p>
            </section>
          ))}

          <h2 className="text-2xl font-bold text-white mb-6">選び方の指針</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              <span className="text-white font-medium">簿記に自信がない・経理に時間をかけたくない</span>
              なら freee会計。質問に答える感覚で記帳でき、決算書までの導線が最短です。
            </p>
            <p>
              <span className="text-white font-medium">税理士と連携する予定がある・仕訳ベースの操作に慣れている</span>
              なら マネーフォワード クラウド会計。従来の会計の流儀のまま、自動化の恩恵を受けられます。
            </p>
            <p>
              <span className="text-white font-medium">コストを抑えたい・税理士との互換性を重視したい</span>
              なら 弥生会計 Next。キャンペーンを活用すれば導入コストを抑えやすく、税理士事務所での弥生シリーズ採用実績の多さも安心材料です。
            </p>
            <p>
              いずれを選んでも、銀行口座・クレジットカードを法人名義で分離し、連携設定を最初に済ませることが
              自動化の効果を最大にするコツです。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">従業員を雇ったら: 給与計算ソフトも検討を</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              一人法人でも従業員を雇うと、毎月の給与計算・社会保険料の計算・年末調整が定常業務になります。
              手計算やExcelでの運用は保険料率の改定のたびに更新が必要でミスも起きやすいため、
              給与計算ソフトの導入がおすすめです。会計ソフトと同じシリーズで揃えると、
              仕訳連携までスムーズです。
            </p>
            <p>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4B86GY+CKHGJ6+35XE+6G4HE"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-block px-6 py-3 rounded-lg bg-neon-blue/10 border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-200"
              >
                弥生給与 Nextはこちら
              </a>
              <img
                style={{ border: 0 }}
                width={1}
                height={1}
                src="https://www18.a8.net/0.gif?a8mat=4B86GY+CKHGJ6+35XE+6G4HE"
                alt=""
              />
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">
              あわせて読みたい: 法人税・手取りのシミュレーション
            </h2>
            <p className="text-gray-300 leading-relaxed">
              当社では、売上・経費・役員報酬を入力するだけで法人税等・消費税・社会保険料・手取り額を
              その場で試算できる「法人税シミュレーター2026」を開発しています。
              会計ソフトで日々の記帳を自動化しつつ、税負担の全体像はシミュレーターで把握するのがおすすめです。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">
              個人事業主・フリーランスの方へ
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              まだ法人化していない個人事業主の方は、確定申告ソフトの比較記事をご覧ください。
              無料で始められるソフトも紹介しています。
            </p>
            <Link
              href="/columns/kakutei-shinkoku-soft-hikaku"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              個人事業主の確定申告ソフトはどれを選ぶ?やよい・マネーフォワード・freeeを比較【2026年版】 →
            </Link>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p className="mb-2">
              免責事項: 本記事は一般的な情報提供を目的としたものであり、税務・会計に関する専門的アドバイスではありません。
              個別の税務判断については税理士等の専門家にご相談ください。
            </p>
            <p>
              記載の料金・機能は執筆時点の情報です。最新の内容は各サービスの公式サイトをご確認ください。
            </p>
          </section>

          <div className="mt-10 space-y-2">
            <p>
              <Link
                href="/columns/kigyo-junbi-matome"
                className="text-neon-blue hover:text-white transition-colors duration-200"
              >
                起業準備の全体像はこちら: 一人法人の起業準備まとめ →
              </Link>
            </p>
            <p>
              <Link
                href="/columns"
                className="text-neon-blue hover:text-white transition-colors duration-200"
              >
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
