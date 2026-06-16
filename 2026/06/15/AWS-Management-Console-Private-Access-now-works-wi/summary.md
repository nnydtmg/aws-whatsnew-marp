# AWS Management Console Private Access がインターネット接続なしで利用可能に

AWS Management Console Private Access now works without internet connectivity

**カテゴリ:** What's New
**公開日:** 2026-06-15
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-management-console-private/)

このページでは、AWS What's Newで発表された「AWS Management Console Private Access now works without internet connectivity」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Management Console Private Accessが新たにインターネット接続なしでVPCからのアクセスに対応し、AWS PrivateLinkを通じて安全なコンソールアクセスを実現するようになりました。この機能は、厳格なネットワークセキュリティ要件を持つ金融サービス、政府防衛、ヘルスケア業界などの規制対象企業に特に適しており、エアギャップ環境での安全なAWSインフラストラクチャ管理を可能にしています。

## このアップデートで何が変わったか

- AWS Management Console Private Accessが、インターネット接続なしでVPCからAWSコンソールにアクセスできるようになったという新機能です。
- VPCエンドポイントを通じてAWSコンソールトラフィックを流すことが可能になり、インターネットアクセスが不要になりました。
- AWS PrivateLinkを使用して、顧客VPCとコンソール間に安全なネットワークパスを確立します。
- VPCエンドポイントポリシー、IAM、Service Control、およびResource Controlポリシーを適用して、アクセスを制限できます。
- 金融サービス、政府防衛、ヘルスケアなどの規制業界の企業に特に有用です。
- エアギャップ環境や分類されたネットワークでコンソールを使用する必要がある企業に適しています。
- すべてのAWSコマーシャルリージョンで利用可能です。
- 料金はAWS PrivateLink VPCエンドポイントの使用とデータ処理に基づいています。

## 対象ユーザー

AWS Management Console Private Accessが新たにインターネット接続なしでVPCからのアクセスに対応し、AWS PrivateLinkを通じて安全なコンソールアクセスを実現するようになりました。この機能は、厳格なネットワークセキュリティ要件を持つ金融サービス、政府防衛、ヘルスケア業界などの規制対象企業に特に適しており、エアギャップ環境での安全なAWSインフラストラクチャ管理を可能にしています。

## 詳細

- AWS Management Console Private Accessが、インターネット接続なしでVPCからAWSコンソールにアクセスできるようになったという新機能です。
- VPCエンドポイントを通じてAWSコンソールトラフィックを流すことが可能になり、インターネットアクセスが不要になりました。
- AWS PrivateLinkを使用して、顧客VPCとコンソール間に安全なネットワークパスを確立します。
- VPCエンドポイントポリシー、IAM、Service Control、およびResource Controlポリシーを適用して、アクセスを制限できます。
- 金融サービス、政府防衛、ヘルスケアなどの規制業界の企業に特に有用です。
- エアギャップ環境や分類されたネットワークでコンソールを使用する必要がある企業に適しています。
- すべてのAWSコマーシャルリージョンで利用可能です。
- 料金はAWS PrivateLink VPCエンドポイントの使用とデータ処理に基づいています。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-management-console-private/)
- [AWS Security Blog: Access accounts with AWS Management Console Private Access](https://aws.amazon.com/blogs/security/access-accounts-with-aws-management-console-private-access)
- [AWS PrivateLink ドキュメント](https://docs.aws.amazon.com/vpc/latest/privatelink/)
