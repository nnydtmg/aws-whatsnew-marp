# Amazon EventBridge が Amazon MSK をターゲットとしてサポート

Amazon EventBridge Custom event bus now supports Amazon MSK as a target

**カテゴリ:** What's New
**公開日:** 2026-11-20T17:30:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-msk-target/)

このページでは、AWS What's Newで発表された「Amazon EventBridge Custom event bus now supports Amazon MSK as a target」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EventBridgeの拡張カスタムイベントバスがAmazon MSKをターゲットとしてサポートし、独自プロデューサーなしでKafkaトピックへイベントを配信できるようになりました。本機能は、既存のMSKを利用するイベント駆動型アプリケーションのチームに適しています。

## このアップデートで何が変わったか

- 新機能は、Amazon EventBridgeの拡張カスタムイベントバスがAmazon MSKをターゲットとしてサポートすることです。
- 独自のプロデューサーを運用することなく、Kafkaトピックへイベントを配信できます。
- クラスターARNとトピックを指定したサブスクライバーを作成し、パーティションキー、確認応答レベル、レコードヘッダーを設定できます。
- パブリックおよびプライベート、サーバーレスおよびプロビジョンドのクラスターに対応し、プライベート接続は自動で設定されます。
- 本アップデートは、共有カスタムイベントバスから既存のMSKトピックへイベントを届けたいチームに適しています。
- Amazon MSKターゲットは拡張Custom event busが利用可能な全てのAWSリージョンで利用可能です。
- MSKへの配信は標準のCustom event bus egressとして課金されます。
- EventBridgeは配信前の圧縮もサポートし、Event Evaluationとして課金されます。

## 詳細

- 新機能は、Amazon EventBridgeの拡張カスタムイベントバスがAmazon MSKをターゲットとしてサポートすることです。
- 独自のプロデューサーを運用することなく、Kafkaトピックへイベントを配信できます。
- クラスターARNとトピックを指定したサブスクライバーを作成し、パーティションキー、確認応答レベル、レコードヘッダーを設定できます。
- パブリックおよびプライベート、サーバーレスおよびプロビジョンドのクラスターに対応し、プライベート接続は自動で設定されます。
- 本アップデートは、共有カスタムイベントバスから既存のMSKトピックへイベントを届けたいチームに適しています。
- Amazon MSKターゲットは拡張Custom event busが利用可能な全てのAWSリージョンで利用可能です。
- MSKへの配信は標準のCustom event bus egressとして課金されます。
- EventBridgeは配信前の圧縮もサポートし、Event Evaluationとして課金されます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eventbridge-msk-target/)