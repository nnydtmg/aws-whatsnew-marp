# Amazon Bedrock の新しいコンソール体験 - Anthropic・OpenAI互換APIに対応

**公開日:** 2026年6月5日  
**カテゴリ:** AWS Blog  
**元記事:** https://aws.amazon.com/blogs/aws/try-the-new-console-experience-in-amazon-bedrock-optimized-for-anthropic-and-openai-compatible-apis/

---

## 📋 要約

Amazon Bedrockが新しいコンソール体験を発表しました。最新のGPT、Claude、オープンウェイトモデルに対応し、OpenAIおよびAnthropic互換APIを使用することで、評価から本番環境への迅速な移行が実現できます。このアップデートは特に、生成AIアプリケーションを構築・最適化したいデータサイエンティスト、MLエンジニア、アプリケーション開発者に有益です。

---

## 🎯 このアップデートで何が変わったか

### 新しいコンソール

Amazon Bedrockの新しいコンソール体験が発表されました。これは高性能、信頼性、セキュリティのために構築された次世代推論エンジン上で最新のAIモデルを実験、反復、スケーリングすることを可能にするものです。

### bedrock-mantleエンドポイント最適化

新しいコンソールはbedrock-mantleエンドポイント向けに最適化されており、以下をサポートしています：
- OpenAI Responses API
- OpenAI Chat Completions API
- Anthropicメッセージ API

GPT、Claude、オープンウェイトモデルすべてに対応しています。

### モデルカード機能

新しいモデルカード機能により、ユーザーは以下を単一ビューで実現できます：
- 完全なモデルカタログの閲覧
- 機能の比較
- モダリティサポート情報
- コンテキストウィンドウの確認
- 適用可能なサービスクォータの確認
- 最大3モデルの並列比較

### プロジェクトベースのワークフロー

ユーザーは以下を合理化されたワークフローで実行できます：
- 評価の実行
- 使用状況の洞察をレビュー
- 生成AIアプリケーション構築のライフサイクルに対応した運用

### ライブドキュメンテーション機能

以下の要素が自動で入力されます：
- コードサンプル
- SDKスニペット
- APIリファレンス

これらはプロジェクト変数で自動入力され、コンソールから直接アプリケーションにコピーして実行できます。

---

## 🚀 主な機能

### 1. 統一されたAPI仕様

**OpenAI互換API**
- Responses API
- Chat Completions API
- 既存のOpenAI SDKで動作

**Anthropic互換API**
- Messages API
- 既存のAnthropic SDKで動作

### 2. モデルカタログ

- GPT-5.5（OpenAI最新）
- Claude Opus 4.6（Anthropic最新）
- オープンウェイトモデル
- 各モデルの詳細情報・比較機能

### 3. プロジェクト管理

- プロジェクト単位での組織化
- 推論リクエスト数の表示
- エラー発生状況の可視化
- トークン使用量の分析
- リクエスト/分の監視
- 最近使用したモデルの一覧

### 4. 開発支援機能

- 自動生成されるコードサンプル
- SDK別のスニペット
- プログラミング言語の選択
- IAM認証またはBedrockAPIキー認証
- AI Coding Agent（Claude Code、Cline、Cursor、OpenCode）の統合

### 5. CloudWatch統合

- bedrock-mantleエンドポイントのメトリクス監視
- アラーム設定
- 容量計画

---

## 🌍 利用可能なリージョン

bedrock-mantleエンドポイントは以下のリージョンで利用可能：

**米国**
- US East (N. Virginia)
- US East (Ohio)
- US West (Oregon)

**アジア太平洋**
- Jakarta
- Mumbai
- Sydney
- Tokyo

**ヨーロッパ**
- Frankfurt
- Ireland
- London
- Milan
- Stockholm

**南米**
- São Paulo

---

## 💼 利用シナリオ

### データサイエンティスト向け

- 複数のAIモデルを容易に比較・検証
- Jupyter NotebookやPythonコードでの迅速なプロトタイピング
- CloudWatchメトリクスでパフォーマンス分析

### MLエンジニア向け

- 開発環境から本番環境への継続的な移行
- プロジェクト単位での管理・運用
- 統一APIによるモデル切り替え

### アプリケーション開発者向け

- 既存のOpenAI/Anthropic SDKの再利用
- IAM認証による安全な認証
- 最小限のコード変更で統合

### エンタープライズ向け

- 監視・ログ・アラートの統合
- マルチリージョン対応
- コスト最適化（トークン使用量の可視化）

---

## ⭐ メリット・効果

### 開発効率の向上

- ✅ 複数のドキュメント検索が不要
- ✅ APIリファレンスが自動入力される
- ✅ 最小限のコード変更で複数モデル対応が可能
- ✅ コピー&ペーストで即座にテスト可能

### ビジネスの加速

- ✅ PoC（概念実証）のリードタイムが短縮
- ✅ 本番環境への移行が迅速
- ✅ 複数のAIアプリケーションを同時管理

### コスト最適化

- ✅ トークン使用量の可視化
- ✅ モデル別の使用状況分析
- ✅ 最適なモデル選択に基づく効率化

### 信頼性とセキュリティ

- ✅ bedrock-mantleエンドポイントで高性能を実現
- ✅ IAM認証で統合された権限管理
- ✅ CloudWatch統合で監視・アラート

---

## 🔗 参考リソース

- **元記事**: [Try the new console experience in Amazon Bedrock | AWS News Blog](https://aws.amazon.com/blogs/aws/try-the-new-console-experience-in-amazon-bedrock-optimized-for-anthropic-and-openai-compatible-apis/)

- **What's New記事**: [Amazon Bedrock launches a redesigned console | AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-redesigned-console-optimized-openai-anthropic-compatible-apis)

- **CloudWatch統計**: [Amazon Bedrock adds CloudWatch metrics | AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-supports-cloudwatch-metrics-bedrock-mantle-endpoint)

- **Amazon Bedrock**: https://aws.amazon.com/bedrock/

- **ドキュメント**: https://docs.aws.amazon.com/bedrock/

---

## 📝 お知らせ

このコンテンツは AWS What's New で発表された情報を日本語で要約したものです。詳細な最新情報については、公式ドキュメントをご参照ください。ご質問やご不明な点は、AWS サポートまでお問い合わせください。