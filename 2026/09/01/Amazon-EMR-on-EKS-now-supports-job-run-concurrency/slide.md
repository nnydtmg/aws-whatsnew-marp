---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EMR on EKS がジョブ同時実行数制御に対応

Amazon EMR on EKS now supports job run concurrency controls

**What's New** | 2026-08-28T17:08:00

---

## 概要

- Amazon EMR on EKSは、仮想クラスター上のジョブ同時実行数とキュー深度を制御する新機能を提供いたします。
- 本機能は、共有環境でクラスターを保護し、重要なワークロードを安定稼働させたいお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EMR on EKS now supports job run concurrency controls - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-emr-eks)

- **Amazon EMR on EKS now supports job run concurrency controls**
  [詳細](https://aws-news.com/article/2026-08-31-amazon-emr-on-eks-now-supports-job-run-concurrency-controls)

- **15 AWS EMR cost optimization tips to slash your EMR spendin...

---

## 変更内容・新機能

- 新機能は、Amazon EMR on EKSのジョブラン同時実行制御と受付制御です。
- 仮想クラスターに同時実行数とキュー深度の上限を設定できます。
- キュー満杯時はStartJobRunがValidationExceptionを返し、トラフィックを制御できます。
- 本更新は、共有EKS環境で過負荷を防ぎたいお客様に適しております。
- 重要なワークロードを予測可能に実行したいマルチテナント利用者に有用です。

---

## まとめ

- Amazon EMR on EKS now supports job run concurrency controls について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-emr-eks/)

### 関連情報

- [Amazon EMR on EKS now supports job run concurrency controls - AWS](https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-emr-eks)
- [Amazon EMR on EKS now supports job run concurrency controls](https://aws-news.com/article/2026-08-31-amazon-emr-on-eks-now-supports-job-run-concurrency-controls)
- [15 AWS EMR cost optimization tips to slash your EMR spending (2026)](https://www.flexera.com/blog/finops/aws-emr-cost-optimization)