---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Healthがリソースタグとアカウントタグのサポートを開始

AWS Health now supports resource and account tags

**What's New** | 2026-11-19T08:00:00

---

## 概要

- AWS Healthがリソースタグおよびアカウントタグに対応し、イベント管理と対応がより効率的になりました。
- 本機能は大規模なAWSデプロイメントを管理する組織に特に有用です。

---

## 前提・背景

### 関連する最近の動向

- **AWS Health now supports resource and account tags - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-health-supports-tags/)

- **Using Tag-Based Filtering to Manage AWS Health Monitoring and Alerting at Scale**
  [詳細](https://aws.amazon.com/blogs/mt/using-tag-based-filtering-to-manage-health-monitoring-and-alerting-at-scale)

- **Monitoring events in AWS Healt...

---

## 変更内容・新機能

AWS Healthがヘルスイベントにおけるリソースタグおよびアカウントタグのサポートを開始しました。ヘルスイベントをリソースタグとアカウントタグで富化できるようになり、イベントの管理と対応をより効果的に行えます。対応AWSサービスのヘルスイベント内でリソースタグを直接確認できるため、個別サービスコンソールに遷移せずに影響リソースとそのビジネスコンテキストを迅速に特定できます。アカウントタグにより組織全体でのイベント分類とフィルタリングが可能で、組織構造に応じた通知のルーティングや対応の自動化が容易になります。大規模なAWS環境を管理する組織にとって特に有用で、インシデント対応ワークフローの合理化、ヘルス関連イベントのコスト配賦追跡の改善、AWS Health DashboardおよびAWS Health APIでの精度の高いフィルタリングが可能になります。Amazon EventBridgeとの統合により、タグ値に基づいてITSMへのチケット自動作成や特定チームへの通知などのイベント駆動型自動化を実現できます。タグ富化の有効化はAWS Health DashboardまたはAWS H

---

## 効果・メリット

- AWS Healthがヘルスイベントにおけるリソースタグおよびアカウントタグのサポートを開始しました。
- ヘルスイベントをリソースタグとアカウントタグで富化できるようになり、イベントの管理と対応をより効果的に行えます。
- 対応AWSサービスのヘルスイベント内でリソースタグを直接確認できるため、個別サービスコンソールに遷移せずに影響リソースとそのビジネスコンテキストを迅速に特定できます。
- アカウントタグにより組織全体でのイベント分類とフィルタリングが可能で、組織構造に応じた通知のルーティングや対応の自動化が容易になります。
- 大規模なAWS環境を管理する組織にとって特に有用で、インシデント対応ワークフローの合理化、ヘルス関連イベントのコスト配賦追跡の改善、AWS Health DashboardおよびAWS Health APIでの精度の高いフィルタリングが可能になります。

---

## まとめ

- AWS Health now supports resource and account tags について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-health-supports-tags/)

### 関連情報

- [AWS Health now supports resource and account tags - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-health-supports-tags/)
- [Using Tag-Based Filtering to Manage AWS Health Monitoring and Alerting at Scale](https://aws.amazon.com/blogs/mt/using-tag-based-filtering-to-manage-health-monitoring-and-alerting-at-scale)
- [Monitoring events in AWS Health with Amazon EventBridge](https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html)
- [AWS Health User Guide - Health tags](https://docs.aws.amazon.com/health/latest/ug/health-tags.html)