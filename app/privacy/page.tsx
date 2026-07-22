import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    '株式会社黎明のプライバシーポリシー。当社Webサイトおよびアプリ「法人税シミュレーター2026」における情報の取扱いについて説明します。',
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-gray-500 text-sm mb-10">制定日: 2026年7月22日 / 株式会社黎明</p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              株式会社黎明(以下「当社」)は、当社が運営するWebサイト(reimei.tech)および当社が提供する
              モバイルアプリケーション(以下「本アプリ」)における利用者の情報の取扱いについて、
              以下のとおりプライバシーポリシーを定めます。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-4">1. Webサイトにおける情報の取扱い</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              お問い合わせフォームからご連絡いただいた場合、お名前・会社名・メールアドレス・電話番号等を取得します。
              これらはお問い合わせへの対応のみに利用し、ご本人の同意なく第三者に提供することはありません。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-4">
            2. アプリ「法人税シミュレーター2026」における情報の取扱い
          </h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              <span className="text-white font-medium">入力データについて</span> —
              本アプリに入力された売上・経費・役員報酬などのデータは、
              <span className="text-white font-medium">すべてお使いの端末内でのみ処理され、当社のサーバーに送信・保存されることはありません</span>。
              当社が利用者の入力内容や計算結果を収集することは一切ありません。
            </p>
            <p>
              <span className="text-white font-medium">広告について</span> —
              本アプリ(ストア配信版)では、Google AdMobによる広告を表示します。
              広告の配信・計測・不正防止のため、Googleが広告ID(デバイスID)、IPアドレス、
              アプリ内の操作情報、クラッシュ等の診断情報を収集することがあります。
              Googleによるデータの取扱いについては
              <a
                href="https://policies.google.com/technologies/partner-sites?hl=ja"
                target="_blank"
                rel="noopener"
                className="text-neon-blue hover:text-white transition-colors duration-200"
              >
                Googleのポリシーと規約
              </a>
              をご確認ください。
            </p>
            <p>
              欧州経済領域(EEA)・英国等の利用者に対しては、同意管理プラットフォームにより
              広告に関する同意を取得します。広告IDは端末の設定からいつでもリセットまたは
              パーソナライズ広告のオプトアウトができます。
            </p>
            <p>
              <span className="text-white font-medium">対象年齢</span> —
              本アプリは18歳以上の事業者向けであり、13歳未満の児童を対象としていません。
              当社が児童の個人情報を意図的に収集することはありません。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-4">3. 第三者提供</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              当社は、法令に基づく場合を除き、利用者の情報をご本人の同意なく第三者に提供しません。
              前項に記載のとおり、広告配信に伴う情報の取得はGoogleにより行われます。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-4">4. 免責</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              本アプリの計算結果は概算のシミュレーションであり、税務アドバイスではありません。
              実際の申告・納税にあたっては税理士等の専門家にご相談ください。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-4">5. 改定</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              本ポリシーの内容は、法令の変更やサービス内容の変更に応じて改定することがあります。
              重要な変更がある場合は、本ページにて告知します。
            </p>
          </section>

          <h2 className="text-2xl font-bold text-white mb-4">6. お問い合わせ</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-10">
            <p>
              本ポリシーに関するお問い合わせは、
              <Link href="/contact" className="text-neon-blue hover:text-white transition-colors duration-200">
                お問い合わせフォーム
              </Link>
              よりご連絡ください。
            </p>
            <p className="text-gray-400 text-sm">
              株式会社黎明
              <br />
              愛知県名古屋市中川区服部2丁目308
            </p>
          </section>

          <div className="mt-10">
            <Link href="/" className="text-neon-blue hover:text-white transition-colors duration-200">
              ← トップページへ戻る
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
