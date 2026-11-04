---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EC2 Capacity Managerがリアルタイムサポート可能性チェックとフルフィルメントメトリクスを提供

New features for Amazon EC2 Capacity Manager

**What's New** | 2026-11-04T07:00:00

---

## 概要

- Amazon EC2 Capacity Managerにリアルタイムのサポート可能性チェックとキャパシティフルフィルメントメトリクスが追加されました。
- 本機能は、AWS Unified Operationsをご利用のグローバル企業に適しています。

---

## 前提・背景

### 関連する最近の動向

- **New features for Amazon EC2 Capacity Manager - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-capacity-manager-supportability-and-fulfillment/)

- **Plan and measure EC2 flexibility with Amazon EC2 Capacity Manager**
  [詳細](https://aws.amazon.com/blogs/compute/plan-and-measure-ec2-flexibility-with-amazon-ec2-capacity-manager)

- **Check supportability - Amaz...

---

## 変更内容・新機能

- 新機能として、Amazon EC2 Capacity Managerにリアルタイムのサポート可能性チェックが追加されました。
- 本チェックは、各インスタンスタイプとアベイラビリティーゾーンがリクエストをどの程度サポートできるかをHigh、Medium、Lowでスコアリングします。
- インスタンスの起動や予約を行わずに、最適な容量を見つけることができます。
- あわせて、リクエスト量に対する提供量を示すキャパシティフルフィルメントメトリクスが追加されました。
- 本アップデートは、数百のアカウントで数千のワークロードを実行するグローバル企業に適しています。
- AWS Unified Operationsをご利用のミッションクリティカルなワークロードを運用するお客様向けです。
- サポート可能性チェックは、オンデマンドまたはSpotのマーケットタイプ、必要容量、AZ、インスタンスタイプを指定して実行できます。
- 1回のチェックで最大10AZ（複数リージョン可）、最大100組み合わせを評価可能です。
- フルフィルメントメトリクスは組織、アカウント、リージョン、タグ付きワークロー

---

## まとめ

- New features for Amazon EC2 Capacity Manager について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-capacity-manager-supportability-and-fulfillment/)

### 関連情報

- [New features for Amazon EC2 Capacity Manager - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/ec2-capacity-manager-supportability-and-fulfillment/)
- [Plan and measure EC2 flexibility with Amazon EC2 Capacity Manager](https://aws.amazon.com/blogs/compute/plan-and-measure-ec2-flexibility-with-amazon-ec2-capacity-manager)
- [Check supportability - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-manager-supportability.html)
- [Monitor capacity fulfillment - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/capacity-manager-fulfillment.html)
- [EC2 Capacity Manager metrics](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/cm-metrics-units.html)