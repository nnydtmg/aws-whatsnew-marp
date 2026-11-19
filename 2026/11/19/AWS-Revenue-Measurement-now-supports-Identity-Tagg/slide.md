---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Revenue Measurement が Identity Tagging をサポート

AWS Revenue Measurement now supports Identity Tagging

**What's New** | 2026-11-19T08:00:00

---

## 概要

- AWS Revenue MeasurementにIdentity Taggingが追加され、パートナーはIAMユーザーまたはロールへのタグ付けによりコード変更なしで収益帰属が可能になりました。
- 本機能はソリューションが駆動するAWS利用の帰属収益の可視性を求めるパートナーに適しています。

---

## 前提・背景

### 関連する最近の動向

- **AWS Partner Revenue Measurement: Tag or User Agent | Fours**
  [詳細](https://www.fours.com/resources/blog/aws-partner-revenue-measurement)

- **AWS Partner Revenue Measurement (PRM) Explained - MontyCloud**
  [詳細](https://montycloud.com/blog-aws-prm-deadline-2026-partner-guide)

- **Manual Implementation - AWS Partner Revenue Measurement**
  [詳細](https://docs.aws.amazon.com/PRM/l...

---

## 変更内容・新機能

AWS Revenue Measurement（旧 Partner Revenue Measurement）は、パートナーソリューションが駆動するAWS利用量を測定する機能です。今回、Identity Taggingが追加され、パートナーはソリューションが使用するIAMユーザーまたはロールにタグを付与することで、個別リソースへのタグ付けやSDK/API呼び出しの装飾なしに収益帰属が可能になりました。AWS Revenue Measurementはそのアイデンティティが作成したリソースの利用量をパートナー製品に帰属します。既存のResource Tagging、User Agent string、SaaS Account Taggingと併用でき、アーキテクチャに最適な方法を選択できます。本機能はすべての商用リージョンで一般提供されています。

---

## まとめ

- AWS Revenue Measurement now supports Identity Tagging について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/revenue-measurement-identity-tagging/)

### 関連情報

- [AWS Partner Revenue Measurement: Tag or User Agent | Fours](https://www.fours.com/resources/blog/aws-partner-revenue-measurement)
- [AWS Partner Revenue Measurement (PRM) Explained - MontyCloud](https://montycloud.com/blog-aws-prm-deadline-2026-partner-guide)
- [Manual Implementation - AWS Partner Revenue Measurement](https://docs.aws.amazon.com/PRM/latest/aws-prm-onboarding-guide/manual-tagging.html)
- [New Partner Revenue Measurement gives visibility into AWS service consumption - AWS](https://aws.amazon.com/about-aws/whats-new/2026/01/new-partner-revenue-measurement)
- [Onboarding guide for AWS Partner Revenue Measurement](https://docs.aws.amazon.com/PRM/latest/aws-prm-onboarding-guide/aws-prm-onboarding-guide.pdf)