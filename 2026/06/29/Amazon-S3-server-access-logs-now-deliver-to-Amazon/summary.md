# Amazon S3 サーバーアクセスログが CloudWatch Logs と S3 Tables に配信対応

Amazon S3 server access logs now deliver to Amazon CloudWatch Logs and Amazon S3 Tables

**カテゴリ:** What's New
**公開日:** 2026-06-29
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-s3-cloudwatch-logs-tables/)

このページでは、AWS What's Newで発表された「Amazon S3 server access logs now deliver to Amazon CloudWatch Logs and Amazon S3 Tables」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon S3のサーバーアクセスログが、CloudWatch LogsおよびApache Iceberg形式のS3 Tablesへの配信に対応しました。これにより、ユーザーはリアルタイムのクエリ実行、アラーム設定、クロスアカウント集約、KMS暗号化、およびSQL標準クエリによる監査分析が可能になります。

## このアップデートで何が変わったか

### CloudWatch Logs への配信

- **新機能**: Amazon S3のサーバーアクセスログが Amazon CloudWatch Logs へ直接配信可能
- **即座のクエリ実行**: CloudWatch Logs クエリランタイムでログを即座に分析
- **アラーム設定**: エラー率や異常なパターンに対するアラーム設定が可能
- **クロスアカウント・クロスリージョン集約**: 複数のアカウント・リージョンのログを一元化
- **KMS暗号化**: AWS Key Management Service による暗号化サポート

### S3 Tables への配信（Iceberg形式）

- **新機能**: ログを Apache Iceberg 形式の Amazon S3 Tables にミラーリング可能
- **追加ストレージコスト不要**: ミラーリング機能に追加コストは発生しない
- **標準クエリエンジン対応**: Amazon Athena、Amazon Redshift などで即座にクエリ可能
- **SQL標準クエリ**: SQL標準クエリによる柔軟な分析が可能

### 既存機能との互換性

- **汎用バケットへの配信**: 既存のS3汎用バケットへの無料配信機能は引き続き利用可能
- **シームレスな統合**: 既存の設定を変更することなく新機能を追加可能

## 対象ユーザー

- **セキュリティ監視**: S3アクセスログの詳細監視が必要な組織
- **コンプライアンス**: アクセス監査ログの一元化が必要な企業
- **パフォーマンス最適化**: アクセスパターンの分析が必要なユーザー
- **コスト最適化**: ストレージコストの削減を検討している組織

## 主な効果

### 運用効率の向上

- **一元化**: ログの配信先を CloudWatch Logs と S3 Tables で一元化
- **リアルタイム対応**: 即座のアラーム設定で問題を迅速に検出
- **簡素化**: ログ配信先の統合により管理負荷を軽減

### 分析能力の強化

- **多彩な分析ツール**: Athena、Redshift など複数のツールでの分析が可能
- **標準化**: Iceberg形式による標準化されたデータ形式
- **柔軟性**: SQL標準クエリによる自由度の高い分析

### セキュリティと監査の強化

- **詳細な監視**: エラー率の監視、トラフィックパターンの分析
- **インシデント調査**: クロスアカウント・クロスリージョン間での調査が容易
- **コンプライアンス**: 監査ログの取得と分析が効率化

### コスト最適化

- **追加コスト不要**: S3 Tables へのミラーリングに追加ストレージコストなし
- **効率的な分析**: SQL標準クエリによる効率的なコスト分析
- **最適化の実施**: コスト要因の特定から改善まで迅速に実施

## 詳細情報

### 配信先の特徴比較

| 項目 | CloudWatch Logs | S3 Tables (Iceberg) |
|------|-----------------|---------------------|
| クエリ実行 | 即座のクエリ実行 | SQL標準クエリ |
| アラーム | アラーム設定可能 | アラーム設定不可 |
| ストレージコスト | CloudWatch Logs料金 | 追加コスト不要 |
| クエリエンジン | CloudWatch Logs | Athena, Redshift等 |
| 暗号化 | KMS対応 | 標準のS3暗号化 |

### ユースケース

#### セキュリティ監視

- 不正アクセスや異常なアクセスパターンの検出
- エラー率の即座の監視
- コンプライアンス監査に必要なアクセス履歴の一元化

#### パフォーマンス最適化

- S3へのアクセスパターンの可視化
- ボトルネックの特定
- トラフィック最適化

#### コスト最適化

- 高アクセスオブジェクトの特定
- ストレージティアの最適化
- 不要なアクセスの削減

### 対応リージョン

- **利用可能**: 全てのAWSリージョン（除外地域を除く）
- **利用開始**: 2026年6月29日より本日から
- **除外リージョン**: AWS中国リージョン、AWS GovCloud（US）リージョン

## 参考リンク

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-s3-cloudwatch-logs-tables/
- **Amazon S3 ドキュメント（サーバーアクセスログ）**: https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html
- **CloudWatch Logs ドキュメント（S3 Tables 統合）**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/s3-tables-integration.html
- **Amazon Athena**: https://aws.amazon.com/athena/
- **Amazon S3 Tables**: https://aws.amazon.com/s3/tables/
- **AWS Storage Blog**: https://aws.amazon.com/blogs/storage/
