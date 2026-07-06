---
marp: true
theme: aws-whatsnew
paginate: true
---

# CloudWatch Application Signals で例外・パフォーマンス異常・デプロイイベントを自動キャプチャ

CloudWatch Application Signals now automatically captures errors, performance anomalies, and deployment events

**What's New** | 2026-07-06T15:00:00

---

## 概要

- Amazon CloudWatch Application Signals に Service Events 機能が追加され、例外、レイテンシーイベント、デプロイメントイベントを自動的にキャプチャできるようになりました。
- この機能により、開発者はコード変更なしにサービスのパフォーマンス問題やデプロイメント影響を迅速に特定することが可能になります。

---

## 前提・背景

### 関連する最近の動向

- **Application Signals - Amazon CloudWatch**
  [詳細](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html)

- **Amazon CloudWatch Application Signals adds new SLO capabilities**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-application-signals-adds-slo-capabilities)

---

## 変更内容・新機能

- Amazon CloudWatch Application Signals に Service Events 機能が追加されました。この機能は、例外やレイテンシーイベントのスナップショット、関数レベルのパフォーマンスデータ、およびデプロイメントイベントを自動的にキャプチャします。

- 追加のコード変更なしに、計装されたサービスからこれらのイベントが自動的に取得されるようになりました。

---

## まとめ

- CloudWatch Application Signals now automatically captures errors, performance anomalies, and deployment events について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/cloudwatch-service-events/)

### 関連情報

- [Application Signals - Amazon CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Monitoring-Sections.html)
- [Amazon CloudWatch Application Signals adds new SLO capabilities](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudwatch-application-signals-adds-slo-capabilities)