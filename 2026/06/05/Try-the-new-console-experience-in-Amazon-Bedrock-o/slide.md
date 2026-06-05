---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Bedrock の新しいコンソール体験

Anthropic・OpenAI互換APIに対応

**発表日: 2026年6月5日**

---

## 概要

### 3つのポイント

- **統一されたAPI対応**: OpenAI Responses API、OpenAI Chat Completions API、Anthropic Messages APIをサポート
- **迅速な移行**: 評価から本番環境への移行がシンプルになった
- **次世代推論エンジン**: bedrock-mantleエンドポイントで高性能・信頼性・セキュリティを実現

---

## 前提・背景

### 課題

- 複数のAIモデルプロバイダーのAPI仕様が異なる
- ドキュメントやAPIリファレンスが分散している
- 評価環境から本番環境への切り替えが複雑
- モデル選択に必要な情報が整理されていない

### ニーズ

- 標準API仕様での統一が求められている
- 開発効率を上げるための統合コンソールの必要性
- エンタープライズ向けAIアプリケーション開発の加速

---

## 主な機能

### 1. 新しいコンソール体験

- **bedrock-mantleエンドポイント**: GPT、Claude、オープンウェイトモデルをサポート
- **プロジェクトベースのワークフロー**: 評価から運用までの全ライフサイクルをサポート
- **統一されたUI**: 評価と本番環境の両方に対応

### 2. モデルカード機能

- 完全なモデルカタログを一覧表示
- 機能、モダリティ、コンテキストウィンドウを比較
- サービスクォータの表示
- 最大3モデルの並列比較

---

## 主な機能（続き）

### 3. プロジェクト管理

- プロジェクト単位での管理・組織化
- 推論リクエストとエラーの可視化
- 使用状況の洞察（トークン使用量、リクエスト/分など）
- ダッシュボードで最近使用したモデルを表示

### 4. ライブドキュメンテーション

- コードサンプル・SDKスニペットの自動生成
- APIリファレンスの自動入力
- プロジェクト変数で環境情報を自動設定
- コンソールから直接アプリケーションにコピー・実行可能

---

## API対応

### サポートされるAPI仕様

<div class="columns">
<div>

#### OpenAI 互換

- Responses API
- Chat Completions API
- 既存のOpenAI SDKで動作

</div>
<div>

#### Anthropic 互換

- Messages API
- 既存のAnthropic SDKで動作
- Claude全バージョン対応

</div>
</div>

### メリット

- 最小限のコード変更で移行可能
- IAM認証または Bedrock API キー認証に対応

---

## 利用可能なリージョン

### bedrock-mantleエンドポイント提供リージョン

<div class="columns-3">
<div>

#### 米国

- US East (N. Virginia)
- US East (Ohio)
- US West (Oregon)

</div>
<div>

#### アジア太平洋

- Jakarta
- Mumbai
- Sydney
- Tokyo

</div>
<div>

#### ヨーロッパ・南米

- Frankfurt
- Ireland
- London
- Milan
- Stockholm
- São Paulo

</div>
</div>

---

## ワークフロー

### 評価から本番化までのステップ

1. **プロジェクト作成**: 新規プロジェクトを作成
2. **モデル選択**: 複数モデルを評価・比較
3. **API選択**: OpenAI/Anthropic SDKを選択
4. **コード生成**: 自動生成されたコード・設定で検証
5. **本番デプロイ**: 同じbedrock-mantleエンドポイントで運用
6. **監視**: CloudWatchメトリクスで使用状況を監視

---

## メリット・効果

### 開発チームの効率化

- **時間短縮**: ドキュメント検索の削減
- **エラー削減**: APIリファレンスの自動入力
- **統一化**: 複数モデル対応の簡素化

### ビジネス効果

- **迅速なPoC**: 評価環境ですぐテスト可能
- **コスト最適化**: トークン使用量の可視化で最適化
- **スケーラビリティ**: 次世代推論エンジンで高性能を実現

---

## 対応モデル

### OpenAI モデル

- GPT-5.5（最新）
- GPT-4o その他最新モデル

### Anthropic モデル

- Claude Opus 4.6
- Claude 3.5 Sonnet
- Claude 3.5 Haiku

### オープンウェイト モデル

- Llama、Mistral など提供予定のモデル

---

## AI Coding Agent 対応

### 統合可能なツール

- Claude Code
- Cline
- Cursor
- OpenCode

### セットアップ方法

- 「Clients」セクションから統合を選択
- IAM認証またはBedrockAPIキー認証を指定
- 環境変数を設定してリクエストをルーティング

---

## まとめ

### 期待できる効果

✅ **開発効率向上**: 統一APIで複数モデル対応が簡単に
✅ **迅速な移行**: 評価環境から本番環境への切り替えがシンプル
✅ **高い信頼性**: bedrock-mantleエンドポイントで安定した運用
✅ **エンタープライズ対応**: CloudWatchメトリクスと統合された監視

### 次のステップ

1. AWS コンソールから新しいBedrock Mantleコンソールにアクセス
2. プロジェクトを作成してモデルを試す
3. API・SDKスニペットで統合をテスト
4. CloudWatchで監視・最適化を実施

---

## 参考リソース

- **元記事**: https://aws.amazon.com/blogs/aws/try-the-new-console-experience-in-amazon-bedrock-optimized-for-anthropic-and-openai-compatible-apis/
- **What's New記事**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-redesigned-console-optimized-openai-anthropic-compatible-apis
- **CloudWatch統合**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-bedrock-supports-cloudwatch-metrics-bedrock-mantle-endpoint
- **Amazon Bedrock**: https://aws.amazon.com/bedrock/
- **ドキュメント**: https://docs.aws.amazon.com/bedrock/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**