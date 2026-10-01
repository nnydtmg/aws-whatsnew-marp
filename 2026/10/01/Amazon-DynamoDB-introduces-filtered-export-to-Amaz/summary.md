# Amazon DynamoDB が Amazon S3 へのフィルタ付きエクスポート機能を発表

Amazon DynamoDB introduces filtered export to Amazon S3

**カテゴリ:** What's New
**公開日:** 2026-10-01T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-introduces-filtered-export/)

このページでは、AWS What's Newで発表された「Amazon DynamoDB introduces filtered export to Amazon S3」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon DynamoDBはAmazon S3へのフィルタリングされたエクスポート機能を導入しました。この機能は分析やデータ復旧を行うお客様に適しています。キー条件式・フィルター式・投影式を使用し、エクスポートするアイテムと属性を精度に指定できます。フルエクスポートと増分エクスポートの両方で利用可能で、AWS GovCloud (US) を除くすべてのAWSリージョンで利用できます。

## このアップデートで何が変わったか

Amazon DynamoDB export to Amazon S3 にフィルタ付きエクスポート機能が追加されました。これまではテーブル全体または時間窓の増分データをまるごとエクスポートする必要がありましたが、新機能では使用用途に関連するデータのみを含むデータセットを生成できます。

利用可能リージョン: AWS GovCloud (US) を除くすべてのAWSリージョン

## 対象ユーザー

主な機能:
- キー条件式（Key Condition Expression）: キー属性に対する条件でエクスポート対象アイテムを選択
- フィルター式（Filter Expression）: 任意属性に対する条件でアイテムをさらに絞り込み
- 投影式（Projection Expression）: エクスポートに含める属性を選択
- フルエクスポートと増分エクスポートの両方に対応

## 活用シーン

ユースケース:
- 分析、データ共有、オフライン用途のためのテーブルデータエクスポート
- 粒度の細かいデータ復旧
- アカウント間でのデータの一部移動
- コンプライアンスルールを満たしながらの分析

## 詳細

Amazon DynamoDB export to Amazon S3 にフィルタ付きエクスポート機能が追加されました。これまではテーブル全体または時間窓の増分データをまるごとエクスポートする必要がありましたが、新機能では使用用途に関連するデータのみを含むデータセットを生成できます。

主な機能:
- キー条件式（Key Condition Expression）: キー属性に対する条件でエクスポート対象アイテムを選択
- フィルター式（Filter Expression）: 任意属性に対する条件でアイテムをさらに絞り込み
- 投影式（Projection Expression）: エクスポートに含める属性を選択
- フルエクスポートと増分エクスポートの両方に対応

ユースケース:
- 分析、データ共有、オフライン用途のためのテーブルデータエクスポート
- 粒度の細かいデータ復旧
- アカウント間でのデータの一部移動
- コンプライアンスルールを満たしながらの分析

利用可能リージョン: AWS GovCloud (US) を除くすべてのAWSリージョン

背景: これまでのDynamoDB export to S3はテーブル全体または増分データをまるごとエクスポートする必要があり、不要なデータも含まれてS3コストや後続処理の負荷が増えていた。フィルタリングが必要な場合はAWS Glueなどの別サービスで後処理する必要があった。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/amazon-dynamodb-introduces-filtered-export/)