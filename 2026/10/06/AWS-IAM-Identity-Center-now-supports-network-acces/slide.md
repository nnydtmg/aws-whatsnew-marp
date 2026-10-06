---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAM Identity Center が Identity Store のネットワークアクセスコントロールをサポート

AWS IAM Identity Center now supports network access controls for Identity Store

**What's New** | 2026-10-05T21:00:00

---

## 概要

- AWS IAM Identity Center が Identity Store のネットワークアクセスコントロールをサポートし、API へのアクセスをネットワーク単位で制限できるようになりました。
- 本機能はカスタムアプリケーションや外部 IdP をご利用のお客様に適しております。

---

## 前提・背景

### 関連する最近の動向

- **AWS IAM Identity Center now supports network access controls for Identity Store**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-network-controls/)

- **UpdateIdentityStore - Identity Store**
  [詳細](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_UpdateIdentityStore.html)

- **AWS IAM launches new VPC endpoint condition...

---

## 変更内容・新機能

AWS IAM Identity Center は、Identity Store 向けのネットワークアクセスコントロールを新たにサポートしました。Identity Store API および SCIM API へのアクセスを、VPC エンドポイントや特定の IP 範囲に基づいて制限できるようになりました。Identity Store API では、許可された VPC エンドポイント経由、または特定のソース VPC からのリクエストのみを許可できます。両方の API で特定の IP 範囲からのリクエストのみを許可できます。同じ設定内で各 API に異なる制限を適用可能です。例えば Identity Store API は VPC エンドポイント経由のみ、SCIM は外部 IdP の公開 IP 範囲から許可できます。ネットワークアクセスコントロールはオプションでデフォルトはオフです。AWS サービスがお客様に代わって行うリクエストは対象外です。Identity Store API を通じて AWS SDKs および AWS CLI で設定します。IAM Identity Center が提

---

## ユースケース

AWS IAM Identity Center は、Identity Store 向けのネットワークアクセスコントロールを新たにサポートしました。Identity Store API および SCIM API へのアクセスを、VPC エンドポイントや特定の IP 範囲に基づいて制限できるようになりました。Identity Store API では、許可された VPC エンドポイント経由、または特定のソース VPC からのリクエストのみを許可できます。両方の API で特定の IP 範囲からのリクエストのみを許可できます。同じ設定内で各 API に異なる制限を適用可能です。例えば Identit

---

## まとめ

- AWS IAM Identity Center now supports network access controls for Identity Store について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-network-controls/)

### 関連情報

- [AWS IAM Identity Center now supports network access controls for Identity Store](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-network-controls/)
- [UpdateIdentityStore - Identity Store](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_UpdateIdentityStore.html)
- [AWS IAM launches new VPC endpoint condition keys for network perimeter controls](https://aws.amazon.com/about-aws/whats-new/2025/08/aws-iam-new-vpc-endpoint-condition-keys)