---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# AWS SAM Kiro Power
サーバーレスアプリケーション開発を加速

**発表日: 2026年3月13日**

---

## 概要

### AWS SAM Kiro Power の3つの主要機能

- **AIエージェント支援開発**: Kiro環境でAIが全開発ライフサイクルをサポート
- **ローカル開発環境**: SAM プロジェクト初期化からデプロイまで効率化
- **ベストプラクティス自動適用**: IAMセキュリティとLambda Powertoolsの推奨

### 対応するイベント駆動パターン

- Amazon EventBridge、Amazon MSK、Amazon Kinesis
- Amazon DynamoDB Streams、Amazon SQS

---

## 前提・背景

### 従来のサーバーレス開発の課題

- **開発効率の低下**: 複数のAWSサービスを組み合わせた構成が複雑
- **ベストプラクティスの適用漏れ**: セキュリティやログ設定のばらつき
- **ローカルテストの手間**: Lambda関数のローカルテスト環境構築が煩雑

### 市場の動向

- **AIエージェント型開発の普及**: Kiro等の開発支援ツールの活用拡大
- **インフラストラクチャコード化**: IaCツール（SAM、CDK）への需要増加
- **DevOps自動化の加速**: CI/CDパイプライン統合の重要性

---

## 主な機能と改善

### 1. AIエージェント統合開発環境

- **動的ガイダンス提供**: SAM開発に必要な知識をKiro内で自動ロード
- **コマンド実行エンジン**: `sam init`、`sam build`、`sam deploy`の自動実行
- **マルチステップオーケストレーション**: 複雑なプロジェクト構成を段階的に構築

### 2. サーバーレスアプリケーション構築支援

- **プロジェクト初期化**: 言語選択やテンプレート自動適用
- **ローカルテスト**: Lambda関数のローカル実行環境を自動構成
- **AWSへのデプロイ**: CloudFormationによる本番環境へのデプロイ自動化

---

## サポート対象のユースケース

### 対応するアーキテクチャパターン

<div class="columns-3">
<div>

#### 静的ウェブサイト

- S3 + CloudFront
- API Gateway連携

</div>
<div>

#### イベント駆動マイクロサービス

- EventBridge
- Lambda + DynamoDB
- MSK/Kinesis連携

</div>
<div>

#### フルスタックアプリケーション

- React/Vue フロントエンド
- Node.js/Python バックエンド
- 複数Lambda関数

</div>
</div>

---

## セキュリティと監視

### デフォルト適用されるベストプラクティス

- **IAM最小権限**: セキュリティベストプラクティスに基づいたポリシー生成
- **AWS Lambda Powertools**: 構造化ログと分散トレーシング自動設定
- **SAMリソース推奨**: CloudFormation設定の標準化

### 監視と運用

- **CloudWatch統合**: ログ集約とメトリクス監視
- **X-Ray トレーシング**: 分散リクエストの可視化
- **エラーハンドリング**: リトライ戦略と補償トランザクション対応

---

## 効果・メリット

### 開発チームへのメリット

- **開発生産性 30-50% 向上**: AIアシスタントによる開発時間短縮
- **品質向上**: ベストプラクティスの自動適用による不具合削減
- **学習曲線の緩和**: AI主導で AWS/SAM ベストプラクティスを習得

### 組織へのメリット

- **運用コスト削減**: 自動化による手作業削減
- **デプロイ時間短縮**: ワンクリックデプロイによる迅速なリリース
- **セキュリティ強化**: デフォルトセキュアな構成

---

## インストール・利用方法

### 導入手順

1. **Kiro IDE を起動**
   - 最新バージョンへアップデート

2. **SAM Kiro Power をインストール**
   - Kiro IDE から ワンクリックインストール
   - または Kiro Powers ページから選択

3. **プロンプトで指示**
   ```
   "Create a SAM project for order processing API with Node.js 22, 
   EventBridge integration, and DynamoDB storage"
   ```

4. **自動実行**
   - プロジェクト初期化 → ビルド → ローカルテスト → デプロイ

---

## 適用対象

### 最適な対象者

- **アプリケーション開発者**: Pythonエンジニア、JavaScriptエンジニア
- **ソリューションアーキテクト**: サーバーレスアーキテクチャ設計
- **クラウドエンジニア**: AWS運用・デプロイメント
- **スタートアップ・中堅企業**: 開発効率化を求める組織

### 対応プログラミング言語

- Node.js (JavaScript/TypeScript)
- Python
- Java
- .NET (C#)
- Go

---

## まとめ

### AWS SAM Kiro Power の位置づけ

- **AIエージェント時代のサーバーレス開発基盤**
- 開発生産性と品質の両立
- セキュリティベストプラクティスの自動適用

### 次のステップ

1. **パイロットプロジェクトの開始**
   - 小規模プロジェクトで効果検証

2. **チーム全体へのロールアウト**
   - 開発ガイドラインとしてSAM Kiro Powerを標準化

3. **他のKiro Powerとの連携**
   - Lambda Durable Functions Power との組み合わせ
   - AWS CDK Power との統合利用

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/03/aws-sam-kiro-power/
- **AWS SAM 公式ドキュメント**: https://docs.aws.amazon.com/serverless-application-model/
- **Kiro 開発者ガイド**: https://docs.aws.amazon.com/kiro/
- **GitHub - SAM Kiro Power**: https://github.com/aws/serverless-application-model

### 関連情報

- Lambda Durable Functions Kiro Power
- AWS Serverless MCP Server
- DEV Track Spotlight: Serverless Full-Stack in Action

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**