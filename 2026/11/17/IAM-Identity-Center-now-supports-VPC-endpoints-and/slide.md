---
marp: true
theme: aws-whatsnew
paginate: true
---

# IAM Identity CenterがVPCエンドポイントとネットワークアクセス制御に対応

IAM Identity Center now supports VPC endpoints and network access controls

**What's New** | 2026-11-16T08:00:00

---

## 概要

- IAM Identity CenterがVPCエンドポイントとネットワークアクセス制御に対応し、トラフィックのプライベート化と到達ネットワークの制限が可能になりました。
- 本更新は、プライベート接続とネットワーク制限を必要とするお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **IAM Identity Center now supports VPC endpoints and network access controls - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-identity-center-vpc-endpoints)

- **AWS IAM Identity Center now supports network access controls for Identity Store - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-network-controls)

- **Interface VP...

---

## 変更内容・新機能

-新機能は、IAM Identity CenterがVPCエンドポイントとネットワークアクセス制御をサポートしたことです。
- AWS PrivateLinkによるインターフェースVPCエンドポイントで、アクセスポータルとサービスAPIのトラフィックをプライベートに保てます。
- サインイントラフィックはAWS Sign-in VPCエンドポイントを経由します。
- VPCエンドポイントポリシーにより、到達可能な組織、アカウント、リソースを限定できます。
- ネットワークアクセス制御では、VPCエンドポイント経由の必須化、特定IPやVPCの許可、個別アプリケーションの除外ができます。
- 外部IdPからのSCIMプロビジョニングは既知のIPアドレス範囲に制限できます。
- 本機能は商用リージョンとGovCloudで追加料金なしで利用できます。
- 本更新は、IAM Identity Centerのトラフィックをプライベートに保ちたいお客様に適しています。
- IAM Identity Centerへ到達できるネットワークを制限したいお客様にも有用です。

---

## まとめ

- IAM Identity Center now supports VPC endpoints and network access controls について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-identity-center-vpc-endpoints/)

### 関連情報

- [IAM Identity Center now supports VPC endpoints and network access controls - AWS](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-identity-center-vpc-endpoints)
- [AWS IAM Identity Center now supports network access controls for Identity Store - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-network-controls)
- [Interface VPC endpoints - IAM Identity Center User Guide](https://docs.aws.amazon.com/singlesignon/latest/userguide/vpc-interface-endpoints.html)