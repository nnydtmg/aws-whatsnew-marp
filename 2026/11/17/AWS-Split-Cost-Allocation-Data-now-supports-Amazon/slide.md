---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Split Cost Allocation DataがAmazon S3をサポート

AWS Split Cost Allocation Data now supports Amazon S3

**What's New** | 2026-11-17T08:00:00

---

## 概要

- AWSの分割コスト配賦データがAmazon S3に対応し、共有バケットのコストをプレフィックス単位で配賦できるようになりました。
- 複数チームでバケットを共有する組織のチャージバックおよびショーバックに有用です。

---

## 変更内容・新機能

Starting today, you can allocate the storage and request costs of a shared Amazon S3 general purpose bucket to the prefixes in that bucket in the AWS Cost and Usage Report (CUR). Organizations often store data for many teams, applications, or tenants in one bucket under different prefixes, such as marketing/ and finance/. Until now, attributing that bucket's bill to each prefix required custom pipelines built on S3 Inventory or Storage Lens reports and your own pricing logic. With Split Cost All

---

## ユースケース

Starting today, you can allocate the storage and request costs of a shared Amazon S3 general purpose bucket to the prefixes in that bucket in the AWS Cost and Usage Report (CUR). Organizations often store data for many teams, applications, or tenants in one bucket under different prefixes, such as m

---

## まとめ

- AWS Split Cost Allocation Data now supports Amazon S3 について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/split-cost-allocation-data-s3/)
