# Amazon EKS CapabilitiesがArgo CD Notificationsに対応

Amazon EKS Capabilities now supports Argo CD Notifications

**カテゴリ:** What's New
**公開日:** 2026-11-03T06:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-argo-cd-notifications)

このページでは、AWS What's Newで発表された「Amazon EKS Capabilities now supports Argo CD Notifications」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EKS Capability for Argo CDがArgo CD Notificationsに対応し、アプリケーションの同期や障害などを16のサービスへ通知できるようになりました。本アップデートは、認証情報をクラスターに保存せずにデプロイイベントを連携したいお客様に適しております。

## このアップデートで何が変わったか

- Amazon EKS Capability for Argo CDが、Argo CD Notificationsに対応いたしました。
- アプリケーションの同期、失敗、またはヘルス変化時に通知を提供いたします。
- クラスターでトリガーとメッセージテンプレートを定義し、アノテーションでApplicationを購読できます。
- Slack、PagerDuty、Opsgenie、Amazon SQS、Amazon EventBridgeなど16の通知サービスに配信できます。
- Amazon SQSとAmazon EventBridgeは、IAM Capability Roleで認証いたします。
- 第三者認証情報は、AWS Secrets ManagerのARNを指定して利用できます。
- 対象リージョンでは追加料金なしでご利用いただけます。
- 本アップデートは、EKS上のArgo CDでデプロイ通知やイベント験動ワークフローを求めるお客様に適しております。

## 対象ユーザー

- Amazon EKS Capability for Argo CDが、Argo CD Notificationsに対応いたしました。
- アプリケーションの同期、失敗、またはヘルス変化時に通知を提供いたします。
- クラスターでトリガーとメッセージテンプレートを定義し、アノテーションでApplicationを購読できます。
- Slack、PagerDuty、Opsgenie、Amazon SQS、Amazon EventBridgeなど16の通知サービスに配信できます。
- Amazon SQSとAmazon EventBridgeは、IAM Capability Roleで認証いたしま

## 詳細

- Amazon EKS Capability for Argo CDが、Argo CD Notificationsに対応いたしました。
- アプリケーションの同期、失敗、またはヘルス変化時に通知を提供いたします。
- クラスターでトリガーとメッセージテンプレートを定義し、アノテーションでApplicationを購読できます。
- Slack、PagerDuty、Opsgenie、Amazon SQS、Amazon EventBridgeなど16の通知サービスに配信できます。
- Amazon SQSとAmazon EventBridgeは、IAM Capability Roleで認証いたします。
- 第三者認証情報は、AWS Secrets ManagerのARNを指定して利用できます。
- 対象リージョンでは追加料金なしでご利用いただけます。
- 本アップデートは、EKS上のArgo CDでデプロイ通知やイベント験動ワークフローを求めるお客様に適しております。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/amazon-eks-argo-cd-notifications)