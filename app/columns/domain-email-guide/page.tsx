import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '起業したら独自ドメインとメールを整備しよう | 取得手順と選び方2026',
  description:
    '一人法人・個人事業主向けに、独自ドメインの選び方(.co.jp / .com / .jp)と取得手順、独自ドメインメールの作り方を解説。フリーメールのままでは信用面で損をする理由と、費用の目安をまとめました。',
  alternates: {
    canonical: '/columns/domain-email-guide',
  },
  openGraph: {
    title: '起業したら独自ドメインとメールを整備しよう | 取得手順と選び方2026',
    description:
      '独自ドメインの選び方と取得手順、独自ドメインメールの作り方を一人法人・個人事業主向けに解説。',
    url: 'https://reimei.tech/columns/domain-email-guide',
  },
}

/*
 * A8.netアフィリエイトリンク設置済み(お名前.com)。
 * リンク文言はA8素材の規定どおり改変しないこと。1x1画像はインプレッション計測用。
 */

export default function DomainEmailGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '起業したら独自ドメインとメールを整備しよう | 取得手順と選び方2026',
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
            起業したら独自ドメインとメールを整備しよう
            <br />
            選び方と取得手順【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            公開: 2026年7月22日 / 株式会社黎明
          </p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              法人設立や開業をしたら、早めに整備したいのが<span className="text-white font-medium">独自ドメイン</span>です。
              名刺やメールアドレスが「〜@gmail.com」のままだと、取引先によっては信用面でマイナスに働くことがあります。
              銀行口座の開設やクレジットカードの審査でも、自社ドメインのWebサイト・メールアドレスの有無を
              確認されるケースがあります。
            </p>
            <p>
              当社(株式会社黎明)も設立時に「reimei.tech」を取得し、Webサイトとメールを独自ドメインで運用しています。
              本記事では、その経験も踏まえてドメインの選び方と取得手順をまとめます。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">ドメインの選び方</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm text-left text-gray-300 border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-gray-400">
                  <th className="py-3 pr-4 font-medium">種類</th>
                  <th className="py-3 pr-4 font-medium">特徴</th>
                  <th className="py-3 font-medium">費用の目安(年)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">.co.jp</td>
                  <td className="py-3 pr-4">日本の法人のみ登録可。信用度は最も高く、1法人1ドメインが原則</td>
                  <td className="py-3">4,000〜8,000円程度</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">.jp</td>
                  <td className="py-3 pr-4">日本国内に住所があれば個人でも取得可。国内向けの信頼感がある</td>
                  <td className="py-3">3,000〜4,000円程度</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">.com / .net</td>
                  <td className="py-3 pr-4">世界標準で誰でも取得可。取得費用が安く、海外取引にも違和感がない</td>
                  <td className="py-3">1,500〜2,500円程度</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">.tech / .io など</td>
                  <td className="py-3 pr-4">業種イメージを出せる新興ドメイン。IT系スタートアップに人気</td>
                  <td className="py-3">ドメインにより幅がある</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-12">
            ※費用は2026年7月時点の目安です。初年度割引と更新料が大きく異なる場合があるため、
            <span className="text-gray-400">更新料まで確認してから</span>取得するのがポイントです。
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">取得の手順</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-8">
            <p>
              ドメインは国内大手のレジストラ(登録事業者)で取得するのが確実です。
              希望の文字列を検索して空きを確認し、そのまま取得手続きに進みます。
              社名・屋号のローマ字表記や事業名など、<span className="text-white font-medium">短く・打ちやすく・読み間違えにくい</span>文字列がおすすめです。
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-300">
              <li>希望のドメイン名を検索して空き状況を確認</li>
              <li>空いていれば取得(Whois情報公開代行の設定を忘れずに)</li>
              <li>自動更新をONにする(更新忘れによる失効が最大の事故)</li>
              <li>DNSを設定してWebサイト・メールと接続</li>
            </ol>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <p className="text-gray-300 leading-relaxed mb-6">
              国内最大手のレジストラ「お名前.com」なら、.co.jpを含む主要なドメインをまとめて検索・取得できます。
            </p>
            <p>
              <a
                href="https://px.a8.net/svt/ejp?a8mat=4B86GY+C4ER76+50+2HHG82"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-block px-6 py-3 rounded-lg bg-neon-blue/10 border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/20 transition-colors duration-200"
              >
                ドメイン取るならお名前.com
              </a>
              <img
                style={{ border: 0 }}
                width={1}
                height={1}
                src="https://www19.a8.net/0.gif?a8mat=4B86GY+C4ER76+50+2HHG82"
                alt=""
              />
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-6">独自ドメインメールの作り方</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              ドメインを取得したら、メールアドレス(例: info@自社ドメイン)を作りましょう。主な方法は3つです。
            </p>
            <p>
              <span className="text-white font-medium">1. レジストラのメールオプション</span> —
              月数百円程度で手軽。まずはコストを抑えたい場合に。
            </p>
            <p>
              <span className="text-white font-medium">2. Google Workspace / Microsoft 365</span> —
              月1,000円前後/人。GmailやOutlookのUIで独自ドメインメールが使え、カレンダー・ストレージ・
              オンライン会議もまとめて揃うため、取引先とのやり取りが多いなら本命です。
            </p>
            <p>
              <span className="text-white font-medium">3. レンタルサーバー付属のメール</span> —
              Webサイトをレンタルサーバーで運用するなら、追加費用なしで使えることが多い選択肢です。
            </p>
            <p>
              いずれの場合も、送信ドメイン認証(SPF・DKIM・DMARC)の設定までやっておくと、
              送ったメールが迷惑メール扱いされるトラブルを防げます。
            </p>
          </section>

          <section className="glass-card p-6 sm:p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">あわせて読みたい: 起業後のバックオフィス整備</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              ドメインとメールが整ったら、次は経理まわりです。会計ソフトの選び方をまとめています。
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/columns/kaikei-soft-hikaku"
                  className="text-neon-blue hover:text-white transition-colors duration-200"
                >
                  一人法人の会計ソフトはどれを選ぶ?freee・マネーフォワード・弥生を比較【2026年版】 →
                </Link>
              </li>
              <li>
                <Link
                  href="/columns/kakutei-shinkoku-soft-hikaku"
                  className="text-neon-blue hover:text-white transition-colors duration-200"
                >
                  個人事業主の確定申告ソフトはどれを選ぶ?やよい・マネーフォワード・freeeを比較【2026年版】 →
                </Link>
              </li>
            </ul>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものです。
              記載の料金・仕様は執筆時点の情報のため、最新の内容は各サービスの公式サイトをご確認ください。
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
