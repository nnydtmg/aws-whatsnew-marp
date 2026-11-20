# Amazon EventBridge のカスタムイベントバスが Webhook Events をサポート

Amazon EventBridge Custom event bus now supports Webhook Events

**カテゴリ:** What's New
**公開日:** 2026-11-20T17:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-webhook-events)

このページでは、AWS What's Newで発表された「Amazon EventBridge Custom event bus now supports Webhook Events」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EventBridgeのカスタムイベントバスがWebhookイベントに対応し、SaaSアプリケーションやAIエージェントからHTTPS経由でイベントを直接送信できるようになりました。独自のAPIエンドポイントを運用する必要がなく、標準のイングレス料金のみでご利用いただけます。

## このアップデートで何が変わったか

The EventBridge Custom event bus is a serverless event broker that enables you to create scalable event-driven applications by routing events between your applications, SaaS integrations, and AWS services. When you create a webhook event source on your bus, EventBridge provides a managed HTTPS URL and verifies each request using an HMAC signature, a static token, or basic authentication. EventBridge then publishes accepted events to the bus, where Subscribers filter and deliver them like any oth

## 対象ユーザー

Amazon EventBridge now supports Webhook Events for the enhanced Custom event bus, so SaaS applications, AI agents, and custom integrations can send events to a bus over HTTPS. You no longer need to deploy and operate your own API endpoint and compute to receive webhooks and publish them to your bus.

## 活用シーン

The EventBridge Custom event bus is a serverless event broker that enables you to create scalable event-driven applications by routing events between your applications, SaaS integrations, and AWS services. When you create a webhook event source on your bus, EventBridge provides a managed HTTPS URL a

## 詳細

Amazon EventBridge now supports Webhook Events for the enhanced Custom event bus, so SaaS applications, AI agents, and custom integrations can send events to a bus over HTTPS. You no longer need to deploy and operate your own API endpoint and compute to receive webhooks and publish them to your bus.

The EventBridge Custom event bus is a serverless event broker that enables you to create scalable event-driven applications by routing events between your applications, SaaS integrations, and AWS services. When you create a webhook event source on your bus, EventBridge provides a managed HTTPS URL and verifies each request using an HMAC signature, a static token, or basic authentication. EventBridge then publishes accepted events to the bus, where Subscribers filter and deliver them like any other event. For example, shipment status updates from a logistics partner can reach your order tracking and customer notification Subscribers as soon as the partner sends them.

Webhook Events are available in all AWS Regions where the enhanced Custom event bus is available. Events received through a webhook are billed as standard Custom event bus ingress, with no additional charge for the webhook.

- SaaSアプリケーション、AIエージェント、およびカスタム統合がHTTPS経由でイベントをバスに送信できるようになりました。
- Webhookイベントソース作成時にマネージドHTTPS URLが提供され、HMAC署名、静的トークン、またはベーシック認証でリクエストを検証します。
- 独自のAPIエンドポイントやコンピューティングをデプロイおよび運用する必要がなくなりました。
- 受け入れたイベントはバス上のSubscriberがフィルタリングして配信します。
- enhanced Custom event busが利用できるすべてのAWSリージョンで利用可能です。
- Webhook経由のイベントは標準のCustom event busイングレス料金のみで、Webhook自体の追加料金はありません。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-webhook-events)