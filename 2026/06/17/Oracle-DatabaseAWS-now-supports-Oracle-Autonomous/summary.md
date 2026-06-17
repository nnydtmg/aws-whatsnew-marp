# Oracle Database@AWS が Oracle Autonomous AI Database Serverless に対応

Oracle Database@AWS now supports Oracle Autonomous AI Database Serverless

**カテゴリ:** What's New
**公開日:** 2026-06-17T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/oracle-database-aws-autonomous-database-serverless/)

このページでは、AWS What's Newで発表された「Oracle Database@AWS now supports Oracle Autonomous AI Database Serverless」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Oracle Database@AWSがOracle Autonomous AI Database Serverless (ADB-S)のサポートを開始し、AWS Management Consoleから直接プロビジョニング可能な完全管理型データベースサービスが提供されるようになりました。このアップデートは、スケーラビリティ、自動管理、高可用性を求めるエンタープライズ組織やAI関連ワークロードを処理する必要があるお客様に特に適しています。

## このアップデートで何が変わったか

**新機能について:**
- Oracle Database@AWSがOracle Autonomous AI Database Serverless (ADB-S)をサポートするようになりました。
- ADB-Sは、Exadataインフラストラクチャ上で完全に管理されるOracleデータベースサービス
- パッチ適用、チューニング、スケーリングが自動的に処理される
- 米国東部(バージニア北部)および米国西部(オレゴン)のAWSリージョンで利用可能

## 主な特徴

### サーバーレスアーキテクチャ
- AWS Management Console、AWS CLI、またはAWS APIから直接プロビジョニングが可能
- 専用のExadataインフラストラクチャやVMクラスタのプロビジョニングが不要

### 複数のワークロードタイプをサポート
- **AI Transaction Processing**: トランザクション処理
- **AI Lakehouse**: データレイク用途
- **AI JSON Database**: JSON形式データ処理
- **Oracle APEX**: Webアプリケーション開発

### スケーリング機能
- コンピュートとストレージはワークロード需要に基づいて独立してスケーリング

### セキュリティ・信頼性
- Autonomous Data Guard（自動フェイルオーバー）
- Amazon S3への自動バックアップ
- リージョン間のディザスタリカバリ
- AWS Key Management Service (KMS) との統合
- Amazon CloudWatch との統合
- Amazon EventBridge との統合

## 対象ユーザー

**このアップデートに適した対象者:**
- スケーラブルなデータベースソリューションを必要とするエンタープライズ組織
- AI関連のワークロードを処理する必要があるユーザー
- インフラストラクチャ管理の負担を軽減したい組織
- AWS環境でOracleデータベースを運用したいお客様
- 高可用性とディザスタリカバリ機能を必要とするミッションクリティカルなアプリケーションを構築する組織

## ユースケース

- **AI/MLアプリケーション開発**: Vector Search、RAG対応
- **エンタープライズワークロード**: 高可用性が必要なシステム
- **開発・検証環境**: 迅速なプロトタイプ開発
- **既存Oracleシステムのクラウド化**: 段階的なマイグレーション

## メリット

### 運用面
- パッチ、チューニング、スケーリングの自動化
- インフラストラクチャ管理の負担軽減
- 初期投資の削減

### パフォーマンス
- Exadataベースの高いパフォーマンス
- 低遅延なレスポンス
- スケーラビリティで成長に対応

### コスト
- サーバーレス（従量課金）モデル
- AWS コミットメント活用可能
- リソース最適化

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/oracle-database-aws-autonomous-database-serverless/)
- [What's New for Oracle AI Database@AWS](https://docs.oracle.com/en-us/iaas/Content/database-at-aws/oaaws-whats-new.htm)
- [Oracle AI Database@AWS](https://aws.amazon.com/oracle/)
