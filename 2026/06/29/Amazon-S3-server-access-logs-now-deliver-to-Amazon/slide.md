---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon S3 サーバーアクセスログが CloudWatch Logs と S3 Tables に配信対応

Amazon S3 server access logs now deliver to Amazon CloudWatch Logs and Amazon S3 Tables

**What's New** | 2026-06-29

---

## 概要

- Amazon S3のサーバーアクセスログが、CloudWatch LogsおよびApache Iceberg形式のS3 Tablesへの配信に対応しました。
- これにより、ユーザーはリアルタイムのクエリ実行、アラーム設定、クロスアカウント集約、KMS暗号化、およびSQL標準クエリによる監査分析が可能になります。

---

## 前提・背景

### S3ログ配信の課題

- サーバーアクセスログの分析が複雑で、複数のツールが必要
- ログデータの一元化と監査の難しさ
- クロスアカウント・クロスリージョン環境でのログ管理の複雑さ

### 市場動向

- CloudWatch Logs との統合による一元化の需要
- Iceberg形式による標準化されたログ分析
- リアルタイムでのセキュリティ監視の重要性

---

## 主な機能

### 1. CloudWatch Logs への配信

- **即座のクエリ実行**: CloudWatch Logs クエリランタイムを使用した即座のデータ分析
- **アラーム設定**: エラー率や異常なアクセスパターンに対するアラーム設定
- **クロスアカウント・クロスリージョン集約**: 複数のアカウント・リージョンのログを一元化
- **KMS暗号化**: データ保護を強化するKMS暗号化のサポート

### 2. S3 Tables への配信（Iceberg形式）

- **追加ストレージコストなし**: ログのミラーリングに追加コストは発生しない
- **標準クエリエンジン対応**: Amazon Athena、Amazon Redshift、その他のIceberg互換エンジンで即座に利用可能
- **SQL標準クエリ**: SQL標準クエリによる柔軟な分析

---

## 効果・メリット

### 監視と分析

- **エラー率の監視**: エラー率のアラーム設定により、問題を迅速に検出
- **トラフィックパターンの監視**: アクセスパターンの異常検知
- **インシデント調査**: アカウント・リージョン間でのアクセスインシデント調査が容易

### 監査とコスト最適化

- **アクセスパターンの監査**: 詳細なアクセス監査ログの取得
- **使用傾向の分析**: 時系列でのデータアクセス傾向を分析
- **コスト要因の特定**: バケット全体のコスト要因を時系列で分析

---

## ユースケース

### セキュリティ監視

- 不正アクセスや異常なアクセスパターンの検出
- コンプライアンス監査に必要なアクセス履歴の一元化

### パフォーマンス最適化

- S3へのアクセスパターンの可視化
- ボトルネックの特定と改善

### コスト最適化

- 高アクセスオブジェクトの特定
- ストレージティアの最適化

---

## 対応リージョン

- **全てのAWSリージョン**で本日より利用可能
- **除外**: AWS中国リージョン、AWS GovCloud（US）リージョン

---

## まとめ

### 主な利点

1. **一元化**: CloudWatch Logs と S3 Tables の統合による ログ配信の一元化
2. **リアルタイム分析**: 即座のクエリ実行とアラーム設定が可能
3. **コスト効率**: 追加ストレージコスト不要で複数の配信先に対応
4. **標準化**: Iceberg形式による標準化されたデータ形式

### 次のステップ

1. 既存のS3ログ配信設定をレビュー
2. CloudWatch Logs への配信設定を有効化
3. S3 Tables への配信を検討
4. Athena などでのクエリを試行

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-s3-cloudwatch-logs-tables/
- **Amazon S3 ドキュメント**: https://docs.aws.amazon.com/AmazonS3/latest/userguide/ServerLogs.html
- **CloudWatch Logs ドキュメント**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/s3-tables-integration.html
- **Amazon Athena**: https://aws.amazon.com/athena/
- **S3 Tables**: https://aws.amazon.com/s3/tables/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**