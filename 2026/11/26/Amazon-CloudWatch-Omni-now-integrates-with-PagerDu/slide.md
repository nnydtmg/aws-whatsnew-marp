---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon CloudWatch OmniがPagerDutyと連携、アラートからインシデントを自動作成

Amazon CloudWatch Omni now integrates with PagerDuty

**What's New** | 2026-11-25T20:00:00

---

## 概要

- Amazon CloudWatch OmniがPagerDutyと連携し、アラートからインシデントを自動作成できるようになりました。
- これにより、既存のオンコール体制で迅速かつ一貫した対応が可能になります。
- Amazon CloudWatch OmniのアラートがPagerDutyインシデントを自動作成し、既存のインシデント管理ワークフローへ通知を直接連携できます。
- 手動の通知ステップを省略し、一貫したインシデントワークフローを保証することで、平均解決時間（MTTR）を短縮します...

---

## 前提・背景

### 関連する最近の動向

- **Amazon CloudWatch Omni now integrates with PagerDuty - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-omni-pagerduty/)

- **Amazon CloudWatch Omni now integrates with PagerDuty | The AWS News Feed**
  [詳細](https://aws-news.com/article/2026-11-25-amazon-cloudwatch-omni-now-integrates-with-pagerduty)

- **This Month in AWS Observability: August –...

---

## 変更内容・新機能

Amazon CloudWatch OmniのアラートがPagerDutyインシデントを自動作成し、既存のインシデント管理ワークフローへ通知を直接連携できるようになりました。CloudWatch Omniはオープン標準を基盤としたフルマネージのAI動力オブザーバビリティ経験で、AIエージェント、アプリケーション、インフラの監視を統合します。PagerDutyはアラートを適切なオンコール担当者へルーティングし、対応を統括するインシデント管理プラットフォームです。Omniのアラートが発火すると、OmniがPagerDutyインシデントを作成します。PagerDuty側では、既存のオンコールスケジュールとエスカレーションポリシーに従ってクリティカルなアラートが適切な担当者に届きます。Omniアラートには重大度、影響を受けたサービス、Omni上の関連データへのリンクが含まれ、担当者が診断に必要なコンテキストを取得できます。手動の通知ステップを省略し一貫したワークフローを確保することでMTTRを短縮します。対象はCloudWatch OmniとPagerDutyをご利用のお客様およびオンコール担

---

## 効果・メリット

- Amazon CloudWatch OmniのアラートがPagerDutyインシデントを自動作成し、既存のインシデント管理ワークフローへ通知を直接連携できるようになりました。
- CloudWatch Omniはオープン標準を基盤としたフルマネージのAI動力オブザーバビリティ経験で、AIエージェント、アプリケーション、インフラの監視を統合します。
- PagerDutyはアラートを適切なオンコール担当者へルーティングし、対応を統括するインシデント管理プラットフォームです。
- Omniのアラートが発火すると、OmniがPagerDutyインシデントを作成します。
- PagerDuty側では、既存のオンコールスケジュールとエスカレーションポリシーに従ってクリティカルなアラートが適切な担当者に届きます。

---

## まとめ

- Amazon CloudWatch Omni now integrates with PagerDuty について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-omni-pagerduty/)

### 関連情報

- [Amazon CloudWatch Omni now integrates with PagerDuty - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-cloudwatch-omni-pagerduty/)
- [Amazon CloudWatch Omni now integrates with PagerDuty | The AWS News Feed](https://aws-news.com/article/2026-11-25-amazon-cloudwatch-omni-now-integrates-with-pagerduty)
- [This Month in AWS Observability: August – September 2026](https://aws.amazon.com/blogs/mt/this-month-in-aws-observability-august-september-2026)
- [Omni PagerDuty integration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/omni-connect-pagerduty.html)
- [Supported Regions for CloudWatch Omni](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/omni-supported-regions.html)