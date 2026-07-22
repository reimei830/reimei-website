import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '個人事業主の確定申告ソフト比較2026 | やよい・マネーフォワード・freee',
  description:
    '個人事業主・フリーランス向けに、やよいの白色申告オンライン・マネーフォワード クラウド確定申告・freee会計を比較。無料で始められるソフト、青色申告65万円控除への対応、インボイス対応から選び方を解説します。',
  alternates: {
    canonical: '/columns/kakutei-shinkoku-soft-hikaku',
  },
  openGraph: {
    title: '個人事業主の確定申告ソフト比較2026 | やよい・マネーフォワード・freee',
    description:
      '個人事業主・フリーランス向けに確定申告ソフト3社を比較。無料プラン・青色申告対応・選び方を解説。',
    url: 'https://reimei.tech/columns/kakutei-shinkoku-soft-hikaku',
  },
}

/*
 * A8.netアフィリエイトリンク設置済み(やよい白色・マネーフォワード確定申告)。
 * リンク文言はA8素材の規定どおり改変しないこと。1x1画像はインプレッション計測用。
 */

export default function KakuteiShinkokuSoftHikakuPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '個人事業主の確定申告ソフト比較2026 | やよい・マネーフォワード・freee',
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
            PR:本記事にはプロモーション(広告)が含まれます
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4">
            個人事業主の確定申告ソフトはどれを選ぶ?
            <br />
            やよい・マネーフォワード・freeeを比較【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            公開: 2026年7月22日 / 株式会社黎明
          </p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              個人事業主・フリーランスの確定申告は、ソフト選びで作業時間が大きく変わります。
              白色申告か青色申告か、青色申告なら65万円控除(e-Tax申告)を狙うのか——
              自分の申告形態に合ったソフトを選ぶことが、コストと手間を最小にする近道です。
            </p>
            <p>
              本記事では、確定申告ソフトの定番「やよい(弥生)」「マネーフォワード クラウド確定申告」「freee会計」の
              3つを個人事業主の視点で比較します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">3社比較の要点</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">ソフト</th>
                  <th className="py-3 pr-4 font-medium">料金の目安</th>
                  <th className="py-3 font-medium">向いている人</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">やよいの白色申告オンライン</td>
                  <td className="py-3 pr-4">フリープランはずっと無料</td>
                  <td className="py-3">まず無料で始めたい白色申告の人</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">マネーフォワード クラウド確定申告</td>
                  <td className="py-3 pr-4">月額1,000円前後〜(年払い時)</td>
                  <td className="py-3">銀行・カード連携で自動化したい人、青色申告の人</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">freee会計(個人)</td>
                  <td className="py-3 pr-4">月額1,000円前後〜(年払い時)</td>
                  <td className="py-3">簿記知識ゼロで◯×形式で進めたい人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12">
            ※料金は2026年7月時点の目安です。最新の料金・キャンペーンは各公式サイトでご確認ください。
            3社とも青色申告(65万円控除・e-Tax)とインボイス制度に対応するプランがあります。
          </p>

          <section className="glass-card p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">やよいの白色申告オンライン</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li>フリープランは期間限定ではなく、ずっと無料で使える</li>
              <li>老舗・弥生シリーズの安定した操作性とサポート</li>
              <li>のちに青色申告へ移行する場合も「やよいの青色申告オンライン」へスムーズ</li>
            </ul>
            <p className="text-gray-400 text-sm mb-6">
              注意点: 白色申告専用のため、青色申告の65万円控除を狙う場合は青色申告オンラインを選ぶ
            </p>
            <p>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4B86GY+CKHGJ6+35XE+601S2"
                rel="nofollow sponsored noopener"
                target="_blank"
                className="inline-block px-6 py-3 rounded-lg bg-neon-blue/10 border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-200"
              >
                やよいの白色申告オンライン
              </a>
              <img
                style={{ border: 0 }}
                width={1}
                height={1}
                src="https://www16.a8.net/0.gif?a8mat=4B86GY+CKHGJ6+35XE+601S2"
                alt=""
              />
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">マネーフォワード クラウド確定申告</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li>銀行口座・クレジットカード・電子マネーとの連携数が多く、明細取得→自動仕訳が強力</li>
              <li>家計簿アプリ「マネーフォワード ME」との連携で公私の資金管理がしやすい</li>
              <li>確定申告書の作成からe-Tax提出までワンストップ</li>
            </ul>
            <p className="text-gray-400 text-sm mb-6">
              注意点: 無料で使える範囲は仕訳件数などに制限があり、本格利用は有料プラン前提
            </p>
            <p>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4B86GY+CJW0XE+4JGQ+BWVTE"
                rel="nofollow sponsored noopener"
                target="_blank"
                className="inline-block px-6 py-3 rounded-lg bg-neon-blue/10 border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-200"
              >
                無料の確定申告自動化ソフト マネーフォワード クラウド確定申告
              </a>
              <img
                style={{ border: 0 }}
                width={1}
                height={1}
                src="https://www17.a8.net/0.gif?a8mat=4B86GY+CJW0XE+4JGQ+BWVTE"
                alt=""
              />
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">freee会計(個人プラン)</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
              <li>簿記用語を知らなくても、◯×形式の質問に答えるだけで申告書ができる</li>
              <li>スマホアプリの完成度が高く、レシート撮影→自動仕訳がスムーズ</li>
              <li>開業届の作成(freee開業)も無料で使える</li>
            </ul>
            <p className="text-gray-400 text-sm mb-6">
              注意点: 従来の仕訳帳ベースの操作に慣れた人には独特の操作感
            </p>
            <a
              href="https://www.freee.co.jp/kojin/"
              rel="nofollow noopener"
              target="_blank"
              className="inline-block px-6 py-3 rounded-lg bg-neon-blue/10 border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-200"
            >
              freee会計(個人向け)公式サイトで詳細を見る
            </a>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">選び方の指針</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              <span className="text-white font-medium">開業したばかりで、まずコストゼロで始めたい</span>
              なら やよいの白色申告オンライン。無料のまま確定申告まで完了でき、事業が育ったら青色申告版へ移行できます。
            </p>
            <p>
              <span className="text-white font-medium">取引件数が多く、記帳を自動化して時短したい</span>
              なら マネーフォワード クラウド確定申告。連携金融機関の広さは3社でも随一です。
            </p>
            <p>
              <span className="text-white font-medium">簿記の知識に不安がある</span>
              なら freee会計。質問に答える感覚で申告書まで辿り着けます。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">
              法人化(法人成り)を検討している方へ
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              事業が育ってきたら、法人化することで税負担を抑えられる場合があります。
              一人法人向けの会計ソフトの選び方は、こちらの記事で解説しています。
            </p>
            <Link
              href="/columns/kaikei-soft-hikaku"
              className="text-neon-blue hover:text-white transition-colors duration-200"
            >
              一人法人の会計ソフトはどれを選ぶ?freee・マネーフォワード・弥生を比較【2026年版】 →
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
