# Vercelデプロイ完全ガイド

reimei.techドメインでウェブサイトを公開する手順を詳しく説明します。

## 前提条件

- reimei.techドメインを取得済み
- GitHubアカウント
- Node.js 18以上がインストール済み

---

## ステップ1: GitHubリポジトリの作成

### 1-1. GitHubでリポジトリ作成

1. [GitHub](https://github.com)にログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ設定:
   - **Repository name**: `reimei-website`（任意）
   - **Description**: 株式会社黎明公式ウェブサイト
   - **Public** / **Private**: お好みで選択
   - ✅ **Initialize this repository with a README**: チェックを**外す**
4. 「Create repository」をクリック

### 1-2. ローカルからプッシュ

ターミナル（コマンドプロンプト）で以下を実行:

```bash
# プロジェクトディレクトリに移動
cd reimei-tech

# Gitを初期化
git init

# すべてのファイルをステージング
git add .

# 最初のコミット
git commit -m "Initial commit: 株式会社黎明ウェブサイト"

# メインブランチに変更
git branch -M main

# リモートリポジトリを追加（YOUR_USERNAMEを実際のGitHubユーザー名に変更）
git remote add origin https://github.com/YOUR_USERNAME/reimei-website.git

# プッシュ
git push -u origin main
```

**注意**: GitHubのユーザー名とパスワード（またはパーソナルアクセストークン）が必要です。

---

## ステップ2: Vercelアカウント作成とプロジェクトインポート

### 2-1. Vercelアカウント作成

1. [Vercel](https://vercel.com)にアクセス
2. 「Sign Up」をクリック
3. 「Continue with GitHub」を選択
4. GitHubアカウントで認証

### 2-2. プロジェクトのインポート

1. Vercelダッシュボードで「Add New」→「Project」をクリック
2. 「Import Git Repository」セクションで、先ほど作成した`reimei-website`リポジトリを探す
3. 「Import」をクリック

### 2-3. プロジェクト設定

**Configure Project** 画面で以下を確認・設定:

- **Framework Preset**: Next.js（自動検出）
- **Root Directory**: `./`（変更不要）
- **Build and Output Settings**:
  - Build Command: `npm run build`
  - Output Directory: `out`
  - Install Command: `npm install`

**環境変数は不要です**

「Deploy」ボタンをクリック

### 2-4. デプロイ完了

数分待つと、デプロイが完了します。
Vercelが自動的にURLを生成します（例: `reimei-website-xxx.vercel.app`）

「Visit」をクリックして、サイトが正しく表示されることを確認してください。

---

## ステップ3: カスタムドメイン（reimei.tech）の設定

### 3-1. Vercelでドメインを追加

1. プロジェクトダッシュボードで「Settings」をクリック
2. 左メニューから「Domains」を選択
3. 「Add」ボタンをクリック
4. `reimei.tech` と入力して「Add」
5. サブドメイン `www.reimei.tech` も追加（推奨）

### 3-2. DNS設定情報を確認

Vercelが表示するDNS設定情報をメモします。
以下のいずれかの方法が表示されます:

**方法A: Aレコード（推奨）**
```
Type: A
Name: @
Value: 76.76.21.21
```

**方法B: CNAMEレコード**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

wwwサブドメイン用:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3-3. ドメインレジストラでDNS設定

reimei.techドメインを取得したレジストラ（お名前.com、ムームードメイン等）の管理画面で、DNS設定を変更します。

#### お名前.comの例:

1. [お名前.com Navi](https://www.onamae.com/)にログイン
2. 「ドメイン設定」→「DNS設定/転送設定」をクリック
3. `reimei.tech` を選択して「次へ」
4. 「DNSレコード設定を利用する」を選択
5. 既存の設定を削除（必要に応じて）
6. 新しいレコードを追加:

**Aレコード:**
- TYPE: A
- ホスト名: （空欄）
- VALUE: 76.76.21.21
- TTL: 3600

**CNAMEレコード（www用）:**
- TYPE: CNAME
- ホスト名: www
- VALUE: cname.vercel-dns.com
- TTL: 3600

7. 「追加」→「確認画面へ進む」→「設定する」

### 3-4. DNS反映を待つ

DNS設定は通常、数分〜48時間で反映されます。
Vercelダッシュボードで、ドメインの横にチェックマークが表示されれば完了です。

### 3-5. SSL証明書の自動設定

Vercelは自動的にSSL証明書（Let's Encrypt）を発行します。
数分後、`https://reimei.tech` でアクセス可能になります。

---

## ステップ4: 動作確認

以下のURLにアクセスして、サイトが正しく表示されることを確認:

- https://reimei.tech
- https://www.reimei.tech
- スマートフォンでも確認

---

## 今後の更新方法

### ローカルでの編集

1. ファイルを編集（例: `components/Services.tsx`）
2. ローカルで確認: `npm run dev`
3. 変更をコミット:

```bash
git add .
git commit -m "サービス内容を更新"
git push
```

### 自動デプロイ

GitHubにプッシュすると、Vercelが**自動的に**再デプロイします。
数分後、本番サイトに反映されます。

---

## トラブルシューティング

### ドメインが反映されない

- DNS設定が正しいか確認
- 最大48時間待つ
- `nslookup reimei.tech` でDNS解決を確認

### ビルドエラーが発生

- Vercelのデプロイログを確認
- ローカルで `npm run build` が成功するか確認
- Node.jsのバージョンを確認（18以上）

### 画像が表示されない

- `public/` フォルダに画像があるか確認
- ファイル名の大文字・小文字が正しいか確認

---

## サポート

技術的な問題が発生した場合:

- [Vercelドキュメント](https://vercel.com/docs)
- [Next.jsドキュメント](https://nextjs.org/docs)

---

## まとめ

✅ GitHubリポジトリ作成  
✅ Vercelでプロジェクトインポート  
✅ reimei.techドメイン設定  
✅ SSL証明書自動取得  
✅ 自動デプロイ設定完了

これで、`https://reimei.tech` で公式ウェブサイトが公開されました！
