# AWS Billing Conductor の請求転送インベントリ機能で請求可視性が向上

AWS Billing Conductor Improves Account Visibility with Billing Transfer Inventory

**カテゴリ:** What's New
**公開日:** 2026-05-20T16:28:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-billing-conductor-billing-transfer/)

このページでは、AWS What's Newで発表された「AWS Billing Conductor Improves Account Visibility with Billing Transfer Inventory」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Billing Conductor コンソールは、請求転送招待を受け入れたものの、プロフォーマ請求データへのアクセスが不足しているアカウントを可視化する新機能を提供いたします。これにより、顧客は請求可視性のギャップを効率的に検出し、AWS User Notifications と Amazon EventBridge を通じた日次通知を活用して、設定の完了を促進することができるようになりました。

## このアップデートで何が変わったか

- AWS Billing Conductor コンソールで、請求転送招待の状態とプロフォーマ請求データアクセス状況をインベントリ表示
- 請求可視性のギャップを自動検出
- AWS User Notifications と Amazon EventBridge による自動通知機能
- マルチチャネル通知対応（メール、Amazon Q Developer、AWS Console Mobile App、コンソール通知センター）

## 詳細

- AWS Billing Conductor コンソールが、請求転送招待を受け取ったまたは受け入れたアカウントのうち、プロフォーマ請求データへのアクセスがないアカウントを表示できるようになりました。

- この新機能により、顧客は請求可視性のギャップを検出して解決することができます。

- 請求転送招待を受け入れたアカウントは、招待元アカウントに請求データが転送されます。

- AWS Billing Conductor を通じて請求グループを設定することで、アカウントは Billing and Cost Management ツール全体でプロフォーマコストデータにアクセスできるようになります。

- AWS User Notifications と Amazon EventBridge を使用して、プロフォーマ請求データへのアクセスがない受け入れられた請求転送の日次サマリーを受け取ることができます。

- 通知は、メール、Amazon Q Developer（Slack、Microsoft Teams、Amazon Chime）、AWS Console Mobile Application プッシュ通知、およびコンソール通知センターを通じて利用可能です。

- この機能は US East（N. Virginia）リージョンで利用可能です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-billing-conductor-billing-transfer/)
- [AWS Billing Conductor ドキュメント](https://docs.aws.amazon.com/billingconductor/)
- [AWS User Notifications](https://docs.aws.amazon.com/user-notifications/)
- [Amazon EventBridge](https://docs.aws.amazon.com/eventbridge/)