---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon Aurora Serverlessが高速スケーリングに対応、エージェント型AIやバースト性ワークロードを支援

Amazon Aurora serverless now scales faster to support agentic AI and other bursty workloads

**What's New** | 2026-09-30T17:50:00

---

## 概要

- Amazon Aurora serverlessのスケーリングが高速化され、エージェント型AIなどのバースト性ワークロードに適したアップデートとなっております。

---

## 前提・背景

### 関連する最近の動向

- **Amazon Aurora serverless now scales faster to support agentic AI and other bursty workloads - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-serverless-instant-12-acu-scaling)

- **Aurora serverless: Faster performance, enhanced scaling, and still scales down to zero | AWS Database Blog**
  [詳細](https://aws.amazon.com/blogs/database/aurora-serverless-fast...

---

## 変更内容・新機能

- Amazon Aurora serverlessは、現在の容量に最大16ACUを1秒以内に追加し、ワークロードの成長に応じて最大256ACUまでスケールアップするより大きなステップでのスケーリングを実現いたしました。
- ワークロードが終了すると自動的にゼロまでスケールダウンし、使用した分だけお支払いいただきます。
- この機能はプラットフォームバージョン3または4で稼働するすべてのAurora serverlessクラスターでデフォルトで有効となっております。
- このアップデートは、活動のバーストや長いアイドル期間、予測不可能なトラフィックパターンを持つエージェント型AIアプリケーションやその他のバースト性ワークロードに特に適しております。

---

## まとめ

- Amazon Aurora serverless now scales faster to support agentic AI and other bursty workloads について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-serverless-instant-16-acu-scaling/)

### 関連情報

- [Amazon Aurora serverless now scales faster to support agentic AI and other bursty workloads - AWS](https://aws.amazon.com/about-aws/whats-new/2026/08/aurora-serverless-instant-12-acu-scaling)
- [Aurora serverless: Faster performance, enhanced scaling, and still scales down to zero | AWS Database Blog](https://aws.amazon.com/blogs/database/aurora-serverless-faster-performance-enhanced-scaling-and-still-scales-down-to-zero)
- [RDS Serverless / Aurora Serverless v2 | Complete 2026 Guide: ACU Pricing, Scale to Zero](https://www.usage.ai/blogs/aws/rds/aurora-serverless-v2)