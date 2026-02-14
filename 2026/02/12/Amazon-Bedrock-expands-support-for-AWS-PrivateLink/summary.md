# Amazon Bedrock expands support for AWS PrivateLink

**カテゴリ:** What's New
**公開日:** 2026-02-12
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-expands-aws-privatelink-support-openai-api-endpoints/](https://aws.amazon.com/about-aws/whats-new/2026/02/amazon-bedrock-expands-aws-privatelink-support-openai-api-endpoints/)

---

## 要約

Amazon Bedrockが新しいProject Mantleベースのbedrock-mantleエンドポイントに対するAWS PrivateLink対応を拡張し、OpenAI API互換性を備えたプライベートアクセスが複数のグローバルリージョンで利用可能になりました。このアップデートは、セキュアなエンタープライズ環境で生成AIアプリケーションをスケーリングし、高性能なサーバーレス推論が必要な組織に特に有益です。

## 詳細

### AWS PrivateLink 対応の拡張

- AWS PrivateLinkを通じてbedrock-mantleエンドポイントにプライベートアクセス可能
- bedrock-mantleエンドポイントはProject Mantleという新しい分散推論エンジンによって駆動
- インターネットゲートウェイを経由しない安全な接続

### Project Mantle エンジン

- 大規模機械学習モデルサービングを実現
- 新しいモデルのオンボーディングを簡素化
- 高性能で信頼性の高いサーバーレス推論を提供

### OpenAI API 互換性

- OpenAI API形式での統一されたインターフェース
- デフォルトの顧客クォータが高く設定
- 自動容量管理と統合プールにより効率的なリソース管理

### 利用可能なリージョン

このAWS PrivateLink対応は、以下の複数のAWSリージョンで利用可能です：

- **北米**: 米国東部（バージニア北部）、米国東部（オハイオ州）、米国西部（オレゴン州）
- **アジア太平洋**: ジャカルタ、東京、ムンバイ、シドニー
- **ヨーロッパ**: フランクフルト、アイルランド、ロンドン、ミラノ、ストックホルム
- **南米**: サンパウロ

## ユースケース

### エンタープライズ向けAI導入

- エンタープライズグレードのセキュアなアクセスが必要な組織
- 金融機関での機密データ処理
- 医療業界のHIPAA準拠が必要なシステム
- 政府機関での規制要件対応

### 開発・統合シナリオ

- OpenAI APIからの移行が必要なシステム
- マルチモデル推論環境の構築
- 生成AIアプリケーションのスケーリングが必要な企業
- プライベートネットワーク環境での推論が必要なユースケース

## メリット

- **セキュリティ**: プライベートネットワークでインターネット経由でのアクセスが不要
- **統一インターフェース**: OpenAI API準拠で既存システムからの移行が容易
- **スケーラビリティ**: 自動容量管理による効率的なリソース運用
- **グローバル対応**: 複数リージョンでの統一されたサービス提供
- **エンタープライズグレード**: 高度なアクセス制御と信頼性