---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS Step Functions
28の新しいサービス統合を追加

**発表日: 2026年3月26日**

---

## 概要

### 何が変わったか

- **28の新しいサービス統合** を追加
- **1,100以上の新しいAPIアクション** が利用可能に
- **Amazon Bedrock AgentCore** との統合で AI エージェント実行を自動化
- **Amazon S3 Vectors** でドキュメント取り込みパイプラインを自動化
- **AWS Lambda 耐久実行 API** でワークフローから直接管理

---

## 前提・背景

### 課題と動向

- ワークフローから AWS サービスを操作する際に統合コードを記述する必要があった
- AI エージェントの本番運用が複雑化
- ドキュメント処理パイプラインの自動化が求められている
- Lambda 関数の耐久実行とべき等性が重要

### Step Functions の位置付け

- 220以上の AWS サービスをオーケストレーション可能
- 分散アプリケーション開発の標準ツール
- エンタープライズワークフロー自動化の中心

---

## 主な新機能

### 1. Amazon Bedrock AgentCore 統合

- **AI エージェントランタイムを直接呼び出し可能**
  - 組み込みリトライ機能付きで信頼性向上
  - エラーハンドリングが自動化される

- **複数エージェントの並列実行**
  - Map ステートで複数エージェントを同時実行
  - スケーラブルなマルチエージェントワークフロー

- **エージェントインフラストラクチャの自動プロビジョニング**
  - ワークフローステップとしてインフラ管理
  - 作成、更新、削除を自動化

---

## 主な新機能

### 2. Amazon S3 Vectors サポート

- **ドキュメント取り込みパイプラインの自動化**
  - AI アプリケーション用ナレッジベース生成
  - RAG システム構築の効率化

- **コード不要で実装可能**
  - Step Functions GUI で直接設定

---

## 主な新機能

### 3. AWS Lambda 耐久実行 API

- **Lambda 耐久関数のべき等呼び出し**
  - 実行名を指定して同一性を保証
  - 重複実行を防止

- **ワークフローからの直接管理**
  - 耐久実行状態をステップから監視
  - ワークフロー内で耐久実行を制御

---

## 対象ユーザー

### 受益者グループ

- **AIエージェント開発者**
  - エージェント運用の複雑さを軽減
  - スケーラブルなマルチエージェントシステム構築

- **データエンジニア**
  - ドキュメント処理パイプラインの自動化
  - ETL/ELT ワークフローの効率化

- **ソリューションアーキテクト**
  - 複雑なワークフロー統合を簡素化
  - インテグレーションコスト削減

- **エンタープライズユーザー**
  - 分散アプリケーション開発の加速
  - 運用効率の向上

---

## 効果・メリット

### ビジネスインパクト

- **開発効率の向上**
  - 統合コード記述が不要に
  - Time-to-market の短縮

- **運用複雑性の削減**
  - 自動リトライとエラーハンドリング
  - インフラプロビジョニングの自動化

- **スケーラビリティの強化**
  - 複数エージェント並列実行
  - 1,100以上の新しい API アクション活用

- **高い可用性**
  - 組み込みリトライ機能
  - べき等実行の保証

---

## ユースケース

### 実装例

- **AI エージェントベースのカスタマーサポート**
  - 複数の専門エージェントを並列実行
  - Step Functions で統制

- **企業文書の自動分類と検索**
  - S3 Vectors で知識ベース構築
  - RAG ベースの質問応答システム

- **マイクロサービス間のワークフロー**
  - Lambda 耐久実行による信頼性向上
  - べき等性の保証で重複処理回避

---

## 提供状況

### 一般提供（GA）

- 全 AWS リージョンで利用可能
  - AWS Step Functions が利用可能な地域すべてで提供
  - 対象サービスのリージョン可用性に従う

---

## まとめ

### 重要ポイント

1. **28の新サービス統合** により、ワークフロー機能を大幅に拡張
2. **Amazon Bedrock AgentCore** とのネイティブ統合で AI エージェント運用が簡素化
3. **Amazon S3 Vectors** でドキュメント処理パイプラインを自動化
4. **Lambda 耐久実行** により分散トランザクションの信頼性向上

### 次のステップ

- Developer Guide で Step Functions SDK 統合の詳細を確認
- パイロットプロジェクトで新機能を検証
- 既存ワークフローの最適化を検討

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-step-functions-sdk-integrations/
- **AWS Step Functions Developer Guide**: https://docs.aws.amazon.com/step-functions/latest/dg/integrate-services.html
- **AWS SDK Service Integrations**: https://docs.aws.amazon.com/step-functions/latest/dg/supported-services-awssdk.html
- **Amazon Bedrock AgentCore**: https://aws.amazon.com/bedrock/agentcore/
- **AWS Step Functions Documentation**: https://docs.aws.amazon.com/step-functions/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**