# 🚀 reimei.tech デプロイチェックリスト

公開前に確認すべき項目のチェックリストです。

## ✅ 事前準備

- [ ] reimei.techドメインを取得済み
- [ ] GitHubアカウントを持っている
- [ ] Node.js 18以上がインストールされている
- [ ] プロジェクトファイルをダウンロード・解凍済み

## ✅ ローカル環境での確認

- [ ] `npm install` が正常に完了
- [ ] `npm run dev` で開発サーバーが起動
- [ ] http://localhost:3000 でサイトが正しく表示される
- [ ] すべてのセクションが表示されることを確認:
  - [ ] ヘッダー・ナビゲーション
  - [ ] ヒーローセクション（メインビジュアル）
  - [ ] 事業内容
  - [ ] 導入実績
  - [ ] 会社概要
  - [ ] お問い合わせフォーム
  - [ ] フッター
- [ ] モバイル表示の確認（ブラウザの開発者ツールで）
- [ ] お問い合わせフォームの動作確認
- [ ] `npm run build` が正常に完了

## ✅ GitHubへのアップロード

- [ ] GitHubで新しいリポジトリを作成
- [ ] `git init` でGitを初期化
- [ ] `git add .` ですべてのファイルを追加
- [ ] `git commit -m "Initial commit"` でコミット
- [ ] リモートリポジトリを追加
- [ ] `git push` でプッシュ完了
- [ ] GitHubでファイルが確認できる

## ✅ Vercelデプロイ

- [ ] Vercelアカウント作成（GitHubで認証）
- [ ] プロジェクトをインポート
- [ ] ビルド設定を確認:
  - [ ] Framework: Next.js
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: `out`
- [ ] デプロイ開始
- [ ] デプロイ成功の確認
- [ ] Vercelの一時URL（xxx.vercel.app）でサイトにアクセス可能

## ✅ カスタムドメイン設定

- [ ] Vercelで `reimei.tech` をドメインに追加
- [ ] Vercelで `www.reimei.tech` をドメインに追加（推奨）
- [ ] VercelのDNS設定情報をメモ
- [ ] ドメインレジストラ（お名前.com等）でDNS設定:
  - [ ] Aレコード（@, 76.76.21.21）
  - [ ] CNAMEレコード（www, cname.vercel-dns.com）
- [ ] DNS設定を保存

## ✅ DNS反映待ち・最終確認

- [ ] DNS反映を待つ（数分〜48時間）
- [ ] `https://reimei.tech` にアクセス可能
- [ ] `https://www.reimei.tech` にアクセス可能
- [ ] SSL証明書が有効（鍵マークが表示）
- [ ] すべてのセクションが正しく表示される
- [ ] スマートフォンで表示確認
- [ ] タブレットで表示確認
- [ ] デスクトップで表示確認
- [ ] お問い合わせフォームが機能する
- [ ] ナビゲーションのリンクが正しく動作
- [ ] ロゴと画像がすべて表示される

## ✅ SEO・SNS確認

- [ ] Google検索で「site:reimei.tech」を検索（数日後）
- [ ] Facebook Debugger でOGP確認: https://developers.facebook.com/tools/debug/
- [ ] Twitter Card Validator でOGP確認: https://cards-dev.twitter.com/validator

## ✅ 運用開始後

- [ ] Google Analyticsの設定（オプション）
- [ ] Google Search Consoleの登録（オプション）
- [ ] 社内・関係者に公開を通知
- [ ] 名刺やその他の印刷物のURL確認

---

## 📝 メモ欄

**デプロイ日時:**  
_________________

**Vercel一時URL:**  
_________________

**DNS設定完了日時:**  
_________________

**公開確認日時:**  
_________________

**その他メモ:**  
_________________
_________________
_________________

---

すべてのチェックが完了したら、公開成功です！🎉
