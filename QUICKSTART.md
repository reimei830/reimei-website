# 株式会社黎明ウェブサイト - クイックスタートガイド

## 🚀 最速でウェブサイトを公開する手順

### 1. ファイルの準備（5分）

1. ダウンロードした `reimei-tech-complete.tar.gz` を解凍
2. ターミナル（コマンドプロンプト）を開く
3. プロジェクトフォルダに移動:
   ```bash
   cd reimei-tech
   ```
4. 依存関係をインストール:
   ```bash
   npm install
   ```

### 2. ローカルで確認（3分）

開発サーバーを起動:
```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いて確認

問題なければ Ctrl+C で停止

### 3. GitHubにアップロード（10分）

1. [GitHub](https://github.com)にログイン
2. 新しいリポジトリ作成（名前: `reimei-website`）
3. ターミナルで実行:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/reimei-website.git
git push -u origin main
```

**YOUR_USERNAME** を自分のGitHubユーザー名に変更してください。

### 4. Vercelでデプロイ（5分）

1. [Vercel](https://vercel.com)にアクセス
2. GitHubアカウントでサインアップ
3. 「Add New」→「Project」
4. `reimei-website` リポジトリを選択して「Import」
5. 「Deploy」をクリック

→ 数分で `xxx.vercel.app` のURLでサイトが公開されます

### 5. ドメイン設定（15分）

#### Vercel側の設定:
1. プロジェクト「Settings」→「Domains」
2. `reimei.tech` を追加
3. 表示されるDNS設定情報をメモ

#### ドメインレジストラ側の設定:
ドメインを取得したサービス（お名前.com等）で以下を設定:

**Aレコード:**
- ホスト名: @（または空欄）
- 値: 76.76.21.21
- TTL: 3600

**CNAMEレコード（www用）:**
- ホスト名: www
- 値: cname.vercel-dns.com
- TTL: 3600

保存後、数分〜48時間でDNSが反映されます。

### 6. 完了！

https://reimei.tech にアクセスして確認

---

## 📝 今後の更新方法

1. ファイルを編集
2. `git add .`
3. `git commit -m "更新内容"`
4. `git push`

→ Vercelが自動的に再デプロイします

---

## 📚 詳細ドキュメント

- **詳しいデプロイ手順**: `DEPLOY.md` を参照
- **プロジェクト構成**: `README.md` を参照

---

## ⏱️ 所要時間の目安

| ステップ | 時間 |
|---------|------|
| 1. ファイル準備 | 5分 |
| 2. ローカル確認 | 3分 |
| 3. GitHub | 10分 |
| 4. Vercel | 5分 |
| 5. ドメイン設定 | 15分 |
| **合計** | **約40分** |

※ DNS反映待ち時間は含まず

---

## 🆘 困ったら

1. `DEPLOY.md` のトラブルシューティングを確認
2. エラーメッセージをGoogle検索
3. Vercelのデプロイログを確認

成功をお祈りします！🎉
