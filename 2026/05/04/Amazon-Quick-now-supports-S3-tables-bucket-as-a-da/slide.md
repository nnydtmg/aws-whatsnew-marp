---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon Quickが S3テーブルバケットをサポート
Apache Icebergテーブルでダッシュボード構築が可能に

**発表日: 2026年5月4日**

---

## 概要

### Amazon Quick の新機能

- **S3テーブルバケット対応**: Amazon S3に保存されたApache Icebergテーブルをデータソースとして直接利用可能
- **ダッシュボード構築**: 中間ウェアハウスを介さずに直接分析できる環境を実現
- **会話型分析**: 自然言語による質問形式でデータレイクにアクセス可能

### データアーキテクチャの簡素化

- 中間データウェアハウス不要
- OLAP層の廃止
- レイクハウスアーキテクチャでのシームレスなデータ操作

---

## 前提・背景

### 市場の課題

- **従来のデータウェアハウス**: 複雑な ETL/ELT パイプラインが必要
- **遅延の発生**: データソースから分析環境までの準リアルタイム性に欠ける
- **アーキテクチャの複雑化**: 複数層の中間処理による運用コスト増加

### AWS の対応動向

- **S3 Tables**: 2024年12月に発表、Apache Iceberg ネイティブのテーブルストレージ
- **ゼロ-ETL**: Salesforce、SAP などの大型SaaSからの直接連携
- **IAM ベース認可**: AWS Glue Data Catalogとの統合で権限管理を簡素化

---

## 主な機能

### 1. S3テーブルバケット統合

- Amazon S3に保存されるApache Icebergテーブルを直接サポート
- ダッシュボードの構築、会話型分析、データ探索が可能
- 管理者による一度の権限設定で、作成者がすぐにデータセット作成を開始できる

### 2. ゼロ-ETLとの連携

| データソース | 特徴 |
|-----------|------|
| Salesforce | リアルタイム顧客データ |
| SAP | ERP データの直接取得 |
| Amazon Kinesis Data Firehose | ストリーミングデータ |

---

## 主な機能（続き）

### 3. Dataset Q&A との統合

- S3テーブルバケットのデータセットが完全にアクセス可能
- 自然言語の質問に対してAIが自動的に回答
- データレイクをソースとした高速なインサイト取得

### 4. グローバルな可用性

- Amazon Quickが利用可能なすべてのAWSリージョンで提供
- 地域によるサービス制限なし

---

## 効果・メリット

### ビジネス効果

- ✅ **分析時間の短縮**: 中間ウェアハウスの廃止で最小限のパイプライン依存
- ✅ **準リアルタイムインサイト**: ゼロ-ETLにより最新データで意思決定が可能
- ✅ **運用コスト削減**: 複雑な ETL パイプライン管理が不要

### 技術的メリット

- ✅ **簡素化されたアーキテクチャ**: レイクハウスアプローチで統一
- ✅ **スケーラビリティ**: Apache Iceberg によるオープン標準対応
- ✅ **セキュリティ**: IAM ベースの統一的な権限管理

---

## ユースケース

### 例1: 金融機関

- **売上分析**: Salesforceの営業データ → S3 Tables → Amazon Quick で即座にダッシュボード化
- **リスク管理**: SAP財務データをリアルタイムに可視化

### 例2: 小売業

- **在庫管理**: Amazon Kinesis Data FirehoseでPOS データを S3 Tables へ
- **顧客分析**: Dataset Q&A で「昨月の売上トップ商品は？」に自動回答

### 例3: SaaS企業

- **プロダクト分析**: ユーザー行動ログをS3 Tables に集約
- **ビジネスレポート**: 自然言語による月次レポート自動生成

---

## まとめ

### Amazon Quick の進化

- **S3テーブルバケット対応**により、データソースから分析まで、中間処理を最小化
- **Apache Iceberg** による オープン標準の採用でベンダーロックインを回避
- **Dataset Q&A** との統合で、非技術者も容易にデータ活用が可能

### 推奨される次のステップ

1. **評価**: 自社のデータアーキテクチャにおける活用シーン特定
2. **パイロット**: S3 Tables と Amazon Quick の連携を試験運用
3. **展開**: 本番環境での段階的な移行

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/quick-direct-query-s3-tables/
- **Amazon Quick ドキュメント**: https://docs.aws.amazon.com/quicksight/
- **Amazon S3 Tables**: https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-tables.html
- **Apache Iceberg**: https://iceberg.apache.org/

### 関連情報

- [Simplified permissions for Amazon S3 Tables and Iceberg Views](https://aws.amazon.com/about-aws/whats-new/2026/03/gdc-simplified-permissions-s3tables-iceberg-views/)
- [Amazon S3 Tables Complete Guide](https://www.oflight.co.jp/en/columns/aws-s3-tables-iceberg-analytics-guide-2026)
- [Amazon S3 Tables Now Support Apache Iceberg V3](https://medium.com/@shahsoumil519/amazon-s3-tables-now-support-apache-iceberg-v3-a-quick-guide-with-spark-a88180f43aad)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**