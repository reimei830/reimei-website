# 株式会社黎明 公式ウェブサイト

製造業向け自動化設備の電気設計施工を行う株式会社黎明の公式ウェブサイトです。

## 技術スタック

- **フレームワーク**: Next.js 16.0.1
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v3
- **ホスティング**: Vercel（推奨）

## 機能

- レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）
- PLC設計・協働ロボット統合の事業紹介
- 導入実績表示
- お問い合わせフォーム
- SEO最適化
- OGP対応（SNSシェア最適化）

## ローカル開発

### 必要な環境

- Node.js 18.0以上
- npm

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `out/` ディレクトリに出力されます。

## Vercelへのデプロイ手順

### 1. GitHubリポジトリの作成

1. [GitHub](https://github.com)にログイン
2. 新しいリポジトリを作成（例: `reimei-website`）
3. ローカルでGitを初期化してプッシュ:

```bash
cd reimei-tech
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/reimei-website.git
git push -u origin main
```

### 2. Vercelアカウント作成

1. [Vercel](https://vercel.com)にアクセス
2. GitHubアカウントでサインアップ

### 3. プロジェクトのインポート

1. Vercelダッシュボードで「Add New」→「Project」をクリック
2. GitHubリポジトリを選択
3. プロジェクト設定:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
4. 「Deploy」をクリック

### 4. カスタムドメインの設定

1. デプロイ完了後、プロジェクト設定から「Domains」を選択
2. `reimei.tech` を追加
3. 表示されるDNS設定を、ドメインレジストラで設定:
   - **Type**: A
   - **Name**: @
   - **Value**: Vercelが提供するIPアドレス
   
   または
   
   - **Type**: CNAME
   - **Name**: @
   - **Value**: cname.vercel-dns.com

4. DNS設定が反映されるまで待機（通常数分〜48時間）

### 5. SSL証明書の自動設定

Vercelは自動的にSSL証明書（Let's Encrypt）を設定します。
設定完了後、`https://reimei.tech` でアクセス可能になります。

## ファイル構成

```
reimei-tech/
├── app/
│   ├── layout.tsx          # ルートレイアウト（メタデータ設定）
│   ├── page.tsx            # トップページ
│   └── globals.css         # グローバルスタイル
├── components/
│   ├── Achievements.tsx    # 実績セクション
│   ├── Company.tsx         # 会社概要セクション
│   ├── Contact.tsx         # お問い合わせセクション
│   ├── Footer.tsx          # フッター
│   ├── Header.tsx          # ヘッダー・ナビゲーション
│   ├── Hero.tsx            # メインビジュアル
│   ├── Logo.tsx            # ロゴコンポーネント
│   └── Services.tsx        # 事業内容セクション
├── public/
│   ├── logo.png            # 会社ロゴ（オリジナル）
│   ├── logo-200.png        # ヘッダー用ロゴ
│   ├── logo-512.png        # 大サイズロゴ
│   ├── favicon.ico         # ファビコン
│   ├── apple-touch-icon.png # iOS用アイコン
│   └── og-image.png        # OGP画像
├── next.config.js          # Next.js設定
├── tailwind.config.js      # Tailwind CSS設定
├── tsconfig.json           # TypeScript設定
└── package.json            # パッケージ設定
```

## カスタマイズ

### 会社情報の変更

`components/Footer.tsx` と `components/Company.tsx` のファイル内の情報を編集してください。

### カラーの変更

`tailwind.config.js` でカスタムカラーを変更できます:

```javascript
colors: {
  'reimei-blue': '#003f87',      // メインの紺色
  'reimei-light-blue': '#00a7e1', // 水色
  'reimei-green': '#6b7c3c',      // 緑
  'reimei-orange': '#f5a623',     // オレンジ
}
```

## お問い合わせ

株式会社黎明  
Email: r.horiuchi@reimei-inc.com  
TEL: 052-893-6763

## ライセンス

© 2020-2025 株式会社黎明 (Reimei Inc.) All rights reserved.
