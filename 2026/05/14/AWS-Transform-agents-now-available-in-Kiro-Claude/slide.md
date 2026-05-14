---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Transform エージェントが Kiro、Claude、Cursor、Codex で利用可能に

複数の開発環境からシームレスにアクセス可能

**発表日: 2026年5月14日**

---

## 概要

### 主な特徴

- **複数開発環境対応**: Kiro、Claude、Cursor、Codex から直接アクセス可能
- **MCP サーバー統合**: Model Context Protocol による自動統合
- **統一された状態管理**: IDE、ウェブコンソール間で一貫した状態を維持
- **IAM 認証対応**: 既存の AWS 認証情報でシームレスに連携

### 対応基盤

- Windows 環境の変換
- VMware ワークロードの移行
- メインフレームの現代化

---

## 前提・背景

### 開発環境の多様化による課題

- 開発者が複数の IDE やツールを使用
- 各ツール間でのコンテキスト喪失やデータ不一致
- 変換作業の効率性低下

### AWS Transform の進化

- 2025年にエンタープライズ向けで利用開始
- 20年の AWS 移行・現代化経験をベースに開発
- AI エージェントによる自動化で開発時間を大幅削減

### 市場動向

- アジェンティック AI への急速なシフト
- 開発ツールチェーンの統合化
- 企業の技術負債削減の加速

---

## 変更内容・新機能

### 1. 複数開発環境での利用可能

- **Kiro Power**: Kiro マーケットプレイスで公開
- **Agent Plugins**: GitHub で公開、Claude や Cursor で利用可能
- **MCP サーバー**: Model Context Protocol による標準的な統合
- **Codex**: 直接統合で利用可能

### 2. 統合作業フロー

開発者は以下のフローで効率的に作業可能:

1. **IDE で開始**: Agentic IDE で変換ジョブを開始
2. **コンソール監視**: Web コンソールで進捗を監視・管理
3. **IDE で完結**: 結果を IDE で確認・検証

すべて同一のジョブに対して一貫した状態を保持

### 3. IAM 認証サポート

- 既存の AWS 認証情報で直接ログイン
- Transform 環境、ワークスペース、ジョブ作成が可能
- エンタープライズセキュリティ標準に準拠

---

## 効果・メリット

### 生産性向上

- **開発体験の統一**: 好みの開発環境で一貫したツール体験
- **コンテキスト喪失の排除**: IDE ⇔ コンソール間のシームレス連携
- **学習曲線の軽減**: 既知の開発環境で AWS Transform を利用可能

### 企業導入メリット

- **認証統合**: IAM ベースで既存セキュリティ体系と連携
- **スケーラビリティ**: 複数開発環境対応で組織全体への展開が容易
- **柔軟性**: 企業文化に合わせた IDE 選択が可能

### ビジネス効果

- **時間削減**: 変換プロセスの簡素化で開発時間を短縮
- **コスト削減**: 自動化による人的コスト減
- **品質向上**: AI エージェントの一貫した変換ルール適用

---

## 実装・利用方法

### 入手方法

| ツール | 入手先 | 対応状況 |
|--------|--------|--------|
| Kiro Power | Kiro マーケットプレイス | 一般提供 |
| Agent Plugins | GitHub | 一般提供 |
| MCP サーバー | GitHub | 一般提供 |

### 対応ユースケース

- **Windows モダナイゼーション**: .NET ⇒ Blazor + Aurora PostgreSQL への自動変換
- **カスタム変換**: 組織固有のコーディング規則を学習・適用
- **メインフレーム現代化**: レガシーシステムから AWS ネイティブアーキテクチャへの移行
- **VMware 環境の移行**: オンプレミス VM から AWS へのシームレス移行

---

## ユースケース・活用例

### ケース 1: 分散チームの連携

複数拠点の開発チームが各自の好みの IDE で作業:
- 東京チーム: Claude を IDE として使用
- NY チーム: Cursor を使用
- 全員が同一の Transform ジョブに対して作業可能

### ケース 2: DevOps パイプラインへの組み込み

MCP 経由でプログラマティックに統合:
```
CI/CD パイプライン → AWS Transform MCP → 自動変換実行
```

### ケース 3: エンタープライズ規模の移行

組織固有の技術スタック（例: 社内フレームワーク）を学習させて、全ソースコードを自動化

---

## まとめ

### AWS Transform の新しい活用段階へ

- **複数開発環境対応**: 開発者の生産性向上
- **統一された状態管理**: チーム間の連携効率化
- **エンタープライズ対応**: IAM 認証で企業内展開が容易

### 次のステップ

1. 現在の開発環境に合わせた IDE 選択
2. GitHub または Kiro マーケットプレイスから取得
3. パイロットプロジェクトで検証開始
4. 本番環境への段階的展開

### 期待される効果

- 技術負債削減の加速化
- エンジニアの生産性向上
- クラウド移行プロジェクトの効率化

---

## 参考リソース

- **AWS 公式発表**: https://aws.amazon.com/about-aws/whats-new/2026/04/aws-transform-developer-tools/
- **AWS Transform ホームページ**: https://aws.amazon.com/transform/
- **GitHub - Agent Plugins**: https://github.com/awslabs/agent-plugins/tree/main/plugins/aws-transform/
- **GitHub - MCP サーバー**: https://github.com/awslabs/mcp/tree/main/src/aws-transform-mcp-server
- **Mainframe modernization ガイド**: https://repost.aws/articles/ARue7jnmK4RUSaQH0NkZ4wng/mainframe-modernization-with-aws-a-complete-guide-for-2026

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**