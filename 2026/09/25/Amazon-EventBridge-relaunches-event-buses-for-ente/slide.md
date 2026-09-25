---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EventBridgeがエンタープライズ規模のカスタムイベントバスを再ローンチ

Amazon EventBridge relaunches event buses for enterprise scale

**What's New** | 2026-09-24T21:00:00

---

## 概要

- Amazon EventBridgeは強化されたカスタムイベントバスを再ローンチしました。
- チームを分離し、組織とともにスケールするイベント駆動型アプリケーションを構築できます。
- アカウント間共有、厳密な順序付け、CloudEvents対応、最大1年の保持、250以上のサービスへの配信をサポートします。

---

## 前提・背景

### 関連する最近の動向

- **Amazon EventBridge relaunches event buses for enterprise scale**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/)

- **Introducing enhanced custom event buses in Amazon EventBridge**
  [詳細](https://aws.amazon.com/blogs/aws/introducing-enhanced-custom-event-buses-in-amazon-eventbridge-for-enterprise-scale-event-driven-applicati...

---

## 変更内容・新機能

主な新機能:
- AWS Resource Access Manager (RAM) を通じて複数アカウントとカスタムイベントバスを共有可能。パブリッシャーは中央イベントバスに直接イベントを送信できる
- 新しいイベント公開APIにより、CloudEventsなどの一般的なJSONベースイベント形式でスキーマを変更せずに公開可能
- 組み込み保持が24時間から最大1年まで拡張可能。アプリケーションエラーからの回復や歴史データによる新コンポーネントの初期化が可能
- 新規Subscriberリソースでイベントをフィルタリングし、250以上のAWSサービスに配信
- 厳密な順序付け（strict ordering）をネイティブサポート。受信した順番どおりにイベントを処理
- コンテンツベースの自動重複除去（content-based deduplication）
- 高度なイベント変換をサポート

---

## まとめ

- Amazon EventBridge relaunches event buses for enterprise scale について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/)

### 関連情報

- [Amazon EventBridge relaunches event buses for enterprise scale](https://aws.amazon.com/about-aws/whats-new/2026/09/eventbridge-relaunches-custom-event-buses/)
- [Introducing enhanced custom event buses in Amazon EventBridge](https://aws.amazon.com/blogs/aws/introducing-enhanced-custom-event-buses-in-amazon-eventbridge-for-enterprise-scale-event-driven-applications)
- [Amazon EventBridge](https://aws.amazon.com/eventbridge)