# IAM Identity CenterがVPCエンドポイントとネットワークアクセス制御に対応

IAM Identity Center now supports VPC endpoints and network access controls

**カテゴリ:** What's New
**公開日:** 2026-11-16T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-identity-center-vpc-endpoints/)

このページでは、AWS What's Newで発表された「IAM Identity Center now supports VPC endpoints and network access controls」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

IAM Identity CenterがVPCエンドポイントとネットワークアクセス制御に対応し、トラフィックのプライベート化と到達ネットワークの制限が可能になりました。本更新は、プライベート接続とネットワーク制限を必要とするお客様に適しています。

## このアップデートで何が変わったか

-新機能は、IAM Identity CenterがVPCエンドポイントとネットワークアクセス制御をサポートしたことです。
- AWS PrivateLinkによるインターフェースVPCエンドポイントで、アクセスポータルとサービスAPIのトラフィックをプライベートに保てます。
- サインイントラフィックはAWS Sign-in VPCエンドポイントを経由します。
- VPCエンドポイントポリシーにより、到達可能な組織、アカウント、リソースを限定できます。
- ネットワークアクセス制御では、VPCエンドポイント経由の必須化、特定IPやVPCの許可、個別アプリケーションの除外ができます。
- 外部IdPからのSCIMプロビジョニングは既知のIPアドレス範囲に制限できます。
- 本機能は商用リージョンとGovCloudで追加料金なしで利用できます。
- 本更新は、IAM Identity Centerのトラフィックをプライベートに保ちたいお客様に適しています。
- IAM Identity Centerへ到達できるネットワークを制限したいお客様にも有用です。

## 詳細

-新機能は、IAM Identity CenterがVPCエンドポイントとネットワークアクセス制御をサポートしたことです。
- AWS PrivateLinkによるインターフェースVPCエンドポイントで、アクセスポータルとサービスAPIのトラフィックをプライベートに保てます。
- サインイントラフィックはAWS Sign-in VPCエンドポイントを経由します。
- VPCエンドポイントポリシーにより、到達可能な組織、アカウント、リソースを限定できます。
- ネットワークアクセス制御では、VPCエンドポイント経由の必須化、特定IPやVPCの許可、個別アプリケーションの除外ができます。
- 外部IdPからのSCIMプロビジョニングは既知のIPアドレス範囲に制限できます。
- 本機能は商用リージョンとGovCloudで追加料金なしで利用できます。
- 本更新は、IAM Identity Centerのトラフィックをプライベートに保ちたいお客様に適しています。
- IAM Identity Centerへ到達できるネットワークを制限したいお客様にも有用です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-identity-center-vpc-endpoints/)