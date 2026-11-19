---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Systems Manager Parameter Store が API スループット制限を引き上げ

AWS Systems Manager Parameter Store raises API throughput limits

**What's New** | 2026-11-19T09:00:00

---

## 概要

- AWS Systems Manager Parameter Storeの5つのAPI操作のスループット制限が引き上げられ、バースト的なワークロードに対する余裕が拡大いたしました。
- 新しい制限は高スループット設定を有効にしたアカウントに追加費用なしで自動適用されます。

---

## 前提・背景

### 関連する最近の動向

- **AWS Systems Manager Parameter Store raises API throughput limits - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/parameter-store-raises-api-throughput-limits/)

- **Managing Parameter Store throughput - AWS Systems Manager**
  [詳細](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-throughput.html)

- **AWS Systems Manager endpoints an...

---

## 変更内容・新機能

新機能は、AWS Systems Manager Parameter Storeにおける5つのAPI操作のデフォルトスループット制限の引き上げでございます。高スループット設定を有効にしたアカウントでは、GetParametersByPathが100 TPSから500 TPSに、PutParameterが10 TPSから50 TPSに、DeleteParameterが5 TPSから50 TPSに、DescribeParametersが10 TPSから100 TPSに、GetParameterHistoryが10 TPSから100 TPSに変更されます。新しい制限は追加費用なしで高スループット層に自動適用され、カスタムAPI制限をお持ちのお客様はその制限を維持されます。本更新は、多数のAWS Lambda関数が同時に起動する際にパスで設定を読み込むアプリケーションに適しております。多くのパラメータを作成または更新するインフラストラクチャアズコードのデプロイメントに適しております。古いパラメータを一括削除するクリーンアップジョブに適しております。新しい制限はParameter Storeが利

---

## まとめ

- AWS Systems Manager Parameter Store raises API throughput limits について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/parameter-store-raises-api-throughput-limits/)

### 関連情報

- [AWS Systems Manager Parameter Store raises API throughput limits - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/parameter-store-raises-api-throughput-limits/)
- [Managing Parameter Store throughput - AWS Systems Manager](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-throughput.html)
- [AWS Systems Manager endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html)