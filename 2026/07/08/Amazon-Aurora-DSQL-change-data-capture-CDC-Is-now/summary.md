# Amazon Aurora DSQL 変更データキャプチャ機能が一般提供開始

Amazon Aurora DSQL change data capture (CDC) Is now generally available

**カテゴリ:** What's New  
**公開日:** 2026-07-08  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-aurora-dsql-cdc-ga/)

---

## 要約

Amazon Aurora DSQL の変更データキャプチャ（CDC）機能が一般提供開始となりました。この機能により、データベースの変更をリアルタイムで Amazon Kinesis Data Streams にストリーミングできるようになります。インフラストラクチャ管理不要で、複数の AWS サービスとの統合が可能です。このアップデートは、イベント駆動型アーキテクチャやマイクロサービス環境でリアルタイムデータ同期が必要な組織に特に有用です。

---

## このアップデートで何が変わったか

### コア機能

- ✅ **CDC 機能が一般提供開始**
  2026年5月のプレビュー段階から本番対応へ

- ✅ **リアルタイムデータベース変更のストリーミング**
  データベースの Insert、Update、Delete 操作を自動キャプチャ

- ✅ **Kinesis Data Streams への統合**
  構造化 JSON 形式のイベントを配信

### 管理・運用

- ✅ **完全マネージドサービス**
  インフラストラクチャ管理不要

- ✅ **ゼロパフォーマンス影響**
  データベースワークロードに影響なし

- ✅ **グローバル対応**
  Aurora DSQL 利用可能なすべてのリージョンで利用可能

### 統合先

- ✅ **AWS Lambda** - イベント駆動処理
- ✅ **Amazon S3** - Amazon Data Firehose 経由でのデータ配信
- ✅ **Amazon Redshift** - リアルタイム分析
- ✅ **Amazon OpenSearch Service** - 検索・分析

---

## 主な利用シナリオ

### 1. マイクロサービス間のデータ同期

- **課題**: サービス間でのリアルタイムデータ同期が複雑
- **解決**: CDC で変更イベントをリアルタイム配信
- **効果**: 一貫性のあるデータを各サービスで即座に利用可能

### 2. イベント駆動ワークフロー

- **例**: 注文テーブルへの INSERT イベント → Lambda で自動処理
- **効果**: 開発が簡潔、スケーラブル、保守性向上

### 3. リアルタイム分析・ダッシュボード

- **構成**: Aurora DSQL CDC → Kinesis → Firehose → Redshift
- **効果**: ダッシュボード、BI ツールでリアルタイムデータを可視化

### 4. コンプライアンス・監査

- **用途**: データベース操作の完全な追跡ログ
- **効果**: 規制要件への対応、セキュリティ監査

---

## 技術仕様

### 対応操作

| 操作 | サポート | 詳細 |
|------|---------|------|
| INSERT | ✅ | 新規行の挿入をキャプチャ |
| UPDATE | ✅ | 既存行の更新をキャプチャ |
| DELETE | ✅ | 行の削除をキャプチャ |

### データフォーマット

- **形式**: JSON
- **スキーマ情報**: スキーマ名、テーブル名を含む
- **メタデータ**: タイムスタンプ、操作種別

### パフォーマンス

- **インパクト**: ゼロ（データベース性能に影響なし）
- **遅延**: ほぼリアルタイム
- **スケーラビリティ**: 自動スケーリング対応

### 料金

- **単位**: DPU（分散処理ユニット）ベース
- **Kinesis**: 別途標準料金
- **AWS Free Tier**: 初期無料利用可能

---

## 利点・メリット

### ビジネス面

| メリット | 説明 |
|---------|------|
| **開発効率化** | カスタム ETL パイプライン開発の不要 |
| **コスト削減** | 管理負荷の削減、保守コスト削減 |
| **市場対応力** | リアルタイムデータ処理で迅速な意思決定 |
| **スケーラビリティ** | 増加する負荷に自動対応 |

### 技術面

| メリット | 説明 |
|---------|------|
| **シンプルな実装** | マネージドサービスで複雑性を軽減 |
| **高可用性** | AWS インフラによる 99.99% SLA |
| **セキュリティ** | IAM、暗号化、VPC 対応 |
| **運用効率** | AWS がインフラ管理・スケーリング対応 |

---

## 導入のポイント

### メリット

✅ **完全マネージド** - インフラ構築・管理が不要  
✅ **スケーラビリティ** - 自動スケーリングで負荷対応  
✅ **コスト効率** - 必要な分だけの従量課金  
✅ **開発効率** - 標準的な AWS サービスとの統合で実装が簡潔  
✅ **グローバル対応** - すべてのリージョンで利用可能  

### 検討項目

⚠️ **既存システムとの互換性確認** - Aurora DSQL への移行計画  
⚠️ **パイプラインの設計** - Kinesis 消費者の実装方法  
⚠️ **運用プロセス** - 監視・アラート設定  
⚠️ **コスト試算** - DPU 使用量の見積もり  

---

## 次のステップ

### 1. 情報収集・検討（1-2 週間）

- 自社のユースケースを洗い出し
- 既存システムの CDC 対応可能性を確認
- コスト試算を実施

### 2. パイロット構築（2-4 週間）

- Aurora DSQL 環境の構築
- CDC ストリーミングの有効化
- 簡単な Kinesis コンシューマの実装
- テスト・検証

### 3. 本番展開（1-2 ヶ月）

- 監視・アラート設定
- ドキュメント作成
- チームトレーニング
- 段階的な本番化

---

## 関連リソース

### 公式ドキュメント

- [元記事: Amazon Aurora DSQL change data capture (CDC) Is now generally available](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-aurora-dsql-cdc-ga/)
- [Change data capture streams ドキュメント](https://docs.aws.amazon.com/aurora-dsql/latest/userguide/cdc-streams.html)
- [Getting Started Blog](https://aws.amazon.com/blogs/database/getting-started-with-change-data-capture-in-amazon-aurora-dsql)

### 関連サービス

- [Amazon Aurora DSQL](https://aws.amazon.com/rds/aurora/dsql/)
- [Amazon Kinesis Data Streams](https://aws.amazon.com/kinesis/data-streams/)
- [Amazon Data Firehose](https://aws.amazon.com/kinesis/data-firehose/)
- [AWS Lambda](https://aws.amazon.com/lambda/)

---

**最終更新**: 2026-07-09  
**ステータス**: 一般提供（GA）
