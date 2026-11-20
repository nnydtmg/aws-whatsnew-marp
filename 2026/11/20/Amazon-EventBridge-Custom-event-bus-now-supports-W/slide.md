---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EventBridge のカスタムイベントバスが Webhook Events をサポート

Amazon EventBridge Custom event bus now supports Webhook Events

**What's New** | 2026-11-20T17:30:00

---

## 概要

- Amazon EventBridgeのカスタムイベントバスがWebhookイベントに対応し、SaaSアプリケーションやAIエージェントからHTTPS経由でイベントを直接送信できるようになりました。
- 独自のAPIエンドポイントを運用する必要がなく、標準のイングレス料金のみでご利用いただけます。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EventBridge Custom event bus now supports Webhook Events - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-webhook-events)

- **Amazon EventBridge relaunches event buses for enterprise scale - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses)

- **Introducing enhanced custom event ...

---

## 変更内容・新機能

The EventBridge Custom event bus is a serverless event broker that enables you to create scalable event-driven applications by routing events between your applications, SaaS integrations, and AWS services. When you create a webhook event source on your bus, EventBridge provides a managed HTTPS URL and verifies each request using an HMAC signature, a static token, or basic authentication. EventBridge then publishes accepted events to the bus, where Subscribers filter and deliver them like any oth

---

## ユースケース

The EventBridge Custom event bus is a serverless event broker that enables you to create scalable event-driven applications by routing events between your applications, SaaS integrations, and AWS services. When you create a webhook event source on your bus, EventBridge provides a managed HTTPS URL a

---

## まとめ

- Amazon EventBridge Custom event bus now supports Webhook Events について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-webhook-events)

### 関連情報

- [Amazon EventBridge Custom event bus now supports Webhook Events - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-webhook-events)
- [Amazon EventBridge relaunches event buses for enterprise scale - AWS](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses)
- [Introducing enhanced custom event buses in Amazon EventBridge for enterprise-scale event-driven applications](https://aws.amazon.com/blogs/aws/introducing-enhanced-custom-event-buses-in-amazon-eventbridge-for-enterprise-scale-event-driven-applications)
- [Building event-driven applications at scale with Amazon EventBridge](https://aws.amazon.com/blogs/compute/building-event-driven-applications-at-scale-with-amazon-eventbridge)