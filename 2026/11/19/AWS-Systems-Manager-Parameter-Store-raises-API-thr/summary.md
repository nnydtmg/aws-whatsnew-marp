# AWS Systems Manager Parameter Store が API スループット制限を引き上げ

AWS Systems Manager Parameter Store raises API throughput limits

**カテゴリ:** What's New
**公開日:** 2026-11-19T09:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/parameter-store-raises-api-throughput-limits/)

このページでは、AWS What's Newで発表された「AWS Systems Manager Parameter Store raises API throughput limits」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Systems Manager Parameter Storeの5つのAPI操作のスループット制限が引き上げられ、バースト的なワークロードに対する余裕が拡大いたしました。新しい制限は高スループット設定を有効にしたアカウントに追加費用なしで自動適用されます。

## このアップデートで何が変わったか

新機能は、AWS Systems Manager Parameter Storeにおける5つのAPI操作のデフォルトスループット制限の引上げでございます。高スループット設定を有効にしたアカウントでは、GetParametersByPathが100 TPSから500 TPSに、PutParameterが10 TPSから50 TPSに、DeleteParameterが5 TPSから50 TPSに、DescribeParametersが10 TPSから100 TPSに、GetParameterHistoryが10 TPSから100 TPSに変更されます。新しい制限は追加費用なしで高スループット層に自動適用され、カスタムAPI制限をお持ちのお客様はその制限を維持されます。本更新は、多数のAWS Lambda関数が同時に起動する際にパスで設定を読み込むアプリケーションに適しております。多くのパラメータを作成または更新するインフラストラクチャアズコードのデプロイメントに適しております。古いパラメータを一括削除するクリーンアップジョブに適しております。新しい制限はParameter Storeが利用

## 詳細

新機能は、AWS Systems Manager Parameter Storeにおける5つのAPI操作のデフォルトスループット制限の引上げでございます。高スループット設定を有効にしたアカウントでは、GetParametersByPathが100 TPSから500 TPSに、PutParameterが10 TPSから50 TPSに、DeleteParameterが5 TPSから50 TPSに、DescribeParametersが10 TPSから100 TPSに、GetParameterHistoryが10 TPSから100 TPSに変更されます。新しい制限は追加費用なしで高スループット層に自動適用され、カスタムAPI制限をお持ちのお客様はその制限を維持されます。本更新は、多数のAWS Lambda関数が同時に起動する際にパスで設定を読み込むアプリケーションに適しております。多くのパラメータを作成または更新するインフラストラクチャアズコードのデプロイメントに適しております。古いパラメータを一括削除するクリーンアップジョブに適しております。新しい制限はParameter Storeが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/parameter-store-raises-api-throughput-limits/)