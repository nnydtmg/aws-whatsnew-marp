# AWS End User MessagingがSMS配信に自動フェイルオーバーを導入

AWS End User Messaging strengthens SMS deliverability with automatic failover

**カテゴリ:** What's New
**公開日:** 2026-09-14T07:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-end-user-messaging-improves-deliverability)

このページでは、AWS What's Newで発表された「AWS End User Messaging strengthens SMS deliverability with automatic failover」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS End User Messagingは電話プールのSMS配信に自動フェイルオーバーを導入しました。お客様は追加操作なしにこの機能の恩恵を受けられます。

## このアップデートで何が変わったか

電話プールを使用しているお客様は、この機能の恩恵を受けるために何らの操作も必要ありません。現在電話プールを通じて送信していない場合は、ドキュメントの手順に従って作成できます。この機能はAWS End User Messagingが利用可能なすべてのAWSリージョンで利用できます。

## 詳細

AWS End User Messaging は電話プール（phone pools）の配信能力を強化しました。電話プールを通じてSMSを送信するお客様は、下流の障害でSMS配信が影響を受けた場合、プール内の次に性能の良い番号へ自動的にフェイルオーバーする機能の恩恵を自動的に受けられます。

SMSの配信性能は、AWSからメッセージングプロバイダー、最終的にモバイルキャリアへとルーティングされる過程で、終端受信者への到達が落ちたり遅延したりすることで影響を受ける場合があります。これらの障害は、配達通知、ワンタイムパスコード（OTP）、リマインダーなど、メッセージングプログラムの最も重要な部分に影響を与えることがあります。AWS End User Messaging は配信遅延、メッセージ失敗、コンバージョンの低下を監視し、より最適化された配信パスへトラフィックを再ルーティングします。

電話プールを使用しているお客様は、この機能の恩恵を受けるために何らの操作も必要ありません。現在電話プールを通じて送信していない場合は、ドキュメントの手順に従って作成できます。この機能はAWS End User Messagingが利用可能なすべてのAWSリージョンで利用できます。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/09/aws-end-user-messaging-improves-deliverability)