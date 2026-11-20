---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EventBridge が Amazon MSK をターゲットとしてサポート

Amazon EventBridge Custom event bus now supports Amazon MSK as a target

**What's New** | 2026-11-20T17:30:00

---

## 概要

- Amazon EventBridgeの拡張カスタムイベントバスがAmazon MSKをターゲットとしてサポートし、独自プロデューサーなしでKafkaトピックへイベントを配信できるようになりました。
- 本機能は、既存のMSKを利用するイベント駆動型アプリケーションのチームに適しています。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EventBridge Custom event bus now supports Amazon MSK as a target**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-msk-target/)

- **Introducing enhanced custom event buses in Amazon EventBridge**
  [詳細](https://aws.amazon.com/blogs/aws/introducing-enhanced-custom-event-buses-in-amazon-eventbridge-for-enterprise-scale-event-driven-applications...

---

## 変更内容・新機能

- 新機能は、Amazon EventBridgeの拡張カスタムイベントバスがAmazon MSKをターゲットとしてサポートすることです。
- 独自のプロデューサーを運用することなく、Kafkaトピックへイベントを配信できます。
- クラスターARNとトピックを指定したサブスクライバーを作成し、パーティションキー、確認応答レベル、レコードヘッダーを設定できます。
- パブリックおよびプライベート、サーバーレスおよびプロビジョンドのクラスターに対応し、プライベート接続は自動で設定されます。
- 本アップデートは、共有カスタムイベントバスから既存のMSKトピックへイベントを届けたいチームに適しています。
- EventBridge Custom event bus はサーバーレスなイベントブローカーで、アプリケーション、SaaS連携、AWSサービス間でイベントをルーティングできます。
- Amazon MSKターゲットは拡張Custom event busが利用可能な全てのAWSリージョンで利用可能です。
- MSKへの配信は標準のCustom event bus egressとして課金さ

---

## まとめ

- Amazon EventBridge Custom event bus now supports Amazon MSK as a target について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-msk-target/)

### 関連情報

- [Amazon EventBridge Custom event bus now supports Amazon MSK as a target](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-msk-target/)
- [Introducing enhanced custom event buses in Amazon EventBridge](https://aws.amazon.com/blogs/aws/introducing-enhanced-custom-event-buses-in-amazon-eventbridge-for-enterprise-scale-event-driven-applications)
- [Building event-driven applications at scale with Amazon EventBridge](https://aws.amazon.com/blogs/compute/building-event-driven-applications-at-scale-with-amazon-eventbridge)
- [Amazon MSK cluster target](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-custom-bus-target-msk.html)