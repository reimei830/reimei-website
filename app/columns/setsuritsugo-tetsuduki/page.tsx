import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '法人設立後にやる手続きチェックリスト2026 | 税務署・年金事務所・自治体',
  description:
    '法人設立後に必要な届出を期限つきで整理。法人設立届出書・青色申告承認申請・社会保険の新規適用など、一人法人が漏らしやすい手続きをチェックリスト形式で解説します。',
  alternates: {
    canonical: '/columns/setsuritsugo-tetsuduki',
  },
  openGraph: {
    title: '法人設立後にやる手続きチェックリスト2026 | 税務署・年金事務所・自治体',
    description:
      '法人設立後に必要な届出を期限つきでチェックリスト化。一人法人が漏らしやすい手続きを解説。',
    url: 'https://reimei.tech/columns/setsuritsugo-tetsuduki',
  },
}

const CHECKLIST = [
  {
    to: '税務署',
    items: [
      { name: '法人設立届出書', deadline: '設立から2ヶ月以内', note: '定款の写し等を添付' },
      {
        name: '青色申告の承認申請書',
        deadline: '設立から3ヶ月以内(※)',
        note: '欠損金の繰越控除など特典大。忘れると初年度は白色申告に',
      },
      {
        name: '給与支払事務所等の開設届出書',
        deadline: '開設から1ヶ月以内',
        note: '役員報酬を払うなら一人法人でも必要',
      },
      {
        name: '源泉所得税の納期の特例の承認申請書',
        deadline: '随時(適用は申請の翌月から)',
        note: '給与の支給人員が常時10人未満なら、源泉税の納付を年2回にまとめられる',
      },
    ],
  },
  {
    to: '都道府県・市区町村',
    items: [
      {
        name: '法人設立届出書(地方版)',
        deadline: '自治体により異なる(2週間〜1ヶ月程度が多い)',
        note: '都道府県税事務所と市区町村の両方(東京23区は都税事務所のみ)',
      },
    ],
  },
  {
    to: '年金事務所',
    items: [
      {
        name: '健康保険・厚生年金保険 新規適用届',
        deadline: '設立から5日以内',
        note: '一人社長でも役員報酬を払うなら強制加入。期限が最も短いので最優先',
      },
      {
        name: '被保険者資格取得届・被扶養者(異動)届',
        deadline: '事実発生から5日以内',
        note: '自分自身と扶養家族の分',
      },
    ],
  },
  {
    to: '(従業員を雇う場合)労基署・ハローワーク',
    items: [
      { name: '労働保険 保険関係成立届', deadline: '雇用から10日以内', note: '労災保険' },
      { name: '雇用保険 適用事業所設置届・資格取得届', deadline: '設置から10日以内など', note: '週20時間以上働く従業員が対象' },
    ],
  },
]

export default function SetsuritsugoTetsudukiPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '法人設立後にやる手続きチェックリスト2026 | 税務署・年金事務所・自治体',
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
            法人設立後にやる手続きチェックリスト
            <br />
            税務署・年金事務所・自治体への届出【2026年版】
          </h1>
          <p className="text-gray-500 text-sm mb-10">
            公開: 2026年7月22日 / 株式会社黎明
          </p>

          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              登記が完了して会社ができても、それで終わりではありません。
              税務署・自治体・年金事務所への届出には<span className="text-white font-medium">期限の短いものがあり</span>、
              特に社会保険の新規適用届は「設立から5日以内」です。
              一人法人が実際に必要になる手続きだけを、提出先ごとに整理しました。
            </p>
          </section>

          {CHECKLIST.map((group) => (
            <section key={group.to} className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6">{group.to}</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-300 border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                      <th className="py-3 pr-4 font-medium">届出</th>
                      <th className="py-3 pr-4 font-medium">期限</th>
                      <th className="py-3 font-medium">メモ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item) => (
                      <tr key={item.name} className="border-b border-white/5">
                        <td className="py-3 pr-4 text-white font-medium">{item.name}</td>
                        <td className="py-3 pr-4 whitespace-nowrap">{item.deadline}</td>
                        <td className="py-3">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <p className="text-xs text-gray-500 mb-12">
            ※青色申告の承認申請の期限は正確には「設立から3ヶ月」と「最初の事業年度終了日」のいずれか早い日の前日までです。
            期限・様式は変更されることがあるため、提出前に国税庁・日本年金機構等の公式情報をご確認ください。
            多くの届出はe-Tax・e-Govからオンライン提出できます。
          </p>

          <h2 className="text-2xl font-bold text-white mb-6">届出以外にやっておくこと</h2>
          <section className="space-y-4 text-gray-300 leading-relaxed mb-12">
            <p>
              <span className="text-white font-medium">法人口座の開設</span> —
              役員報酬の支払いにも売上の入金にも必須です。審査に時間がかかることがあるため早めに。
              詳しくは
              <Link href="/columns/houjin-kouza-guide" className="text-neon-blue hover:text-white transition-colors duration-200">
                法人口座の開設ガイド
              </Link>
              へ。
            </p>
            <p>
              <span className="text-white font-medium">インボイス登録の判断</span> —
              取引先が課税事業者中心なら、適格請求書発行事業者の登録を検討します。
              登録すると免税事業者ではいられなくなるため、2割特例等も含めて損得を確認してから。
            </p>
            <p>
              <span className="text-white font-medium">会計ソフトの導入</span> —
              設立直後から記帳は始まります。最初に連携まで済ませると後がラクです。
              選び方は
              <Link href="/columns/kaikei-soft-hikaku" className="text-neon-blue hover:text-white transition-colors duration-200">
                一人法人の会計ソフト比較
              </Link>
              へ。
            </p>
            <p>
              <span className="text-white font-medium">gBizIDの取得</span> —
              社会保険の電子申請など行政手続きに使う共通認証です。無料で取得できます。
            </p>
          </section>

          <section className="text-xs text-gray-500 leading-relaxed border-t border-white/10 pt-6">
            <p>
              免責事項: 本記事は一般的な情報提供を目的としたものであり、税務・労務に関する専門的アドバイスではありません。
              個別の判断については税理士・社会保険労務士等の専門家にご相談ください。
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
