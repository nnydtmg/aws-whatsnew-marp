# AWS IAM Identity Center が Identity Store のネットワークアクセスコントロールをサポート

AWS IAM Identity Center now supports network access controls for Identity Store

**カテゴリ:** What's New
**公開日:** 2026-10-05T21:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-network-controls/)

このページでは、AWS What's Newで発表された「AWS IAM Identity Center now supports network access controls for Identity Store」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS IAM Identity Center が Identity Store のネットワークアクセスコントロールをサポートし、API へのアクセスをネットワーク単位で制限できるようになりました。本機能はカスタムアプリケーションや外部 IdP をご利用のお客様に適しております。

## このアップデートで何が変わったか

AWS IAM Identity Center は、Identity Store 向けのネットワークアクセスコントロールを新たにサポートしました。Identity Store API および SCIM API へのアクセスを、VPC エンドポイントや特定の IP 範囲に基づいて制限できるようになりました。Identity Store API では、許可された VPC エンドポイント経由、または特定のソース VPC からのリクエストのみを許可できます。両方の API で特定の IP 範囲からのリクエストのみを許可できます。同じ設定内で各 API に異なる制限を適用可能です。例えば Identity Store API は VPC エンドポイント経由のみ、SCIM は外部 IdP の公開 IP 範囲から許可できます。ネットワークアクセスコントロールはオプションでデフォルトはオフです。AWS サービスがお客様に代わって行うリクエストは対象外です。Identity Store API を通じて AWS SDKs および AWS CLI で設定します。IAM Identity Center が提

## 対象ユーザー

AWS IAM Identity Center は、Identity Store 向けのネットワークアクセスコントロールを新たにサポートしました。Identity Store API および SCIM API へのアクセスを、VPC エンドポイントや特定の IP 範囲に基づいて制限できるようになりました。Identity Store API では、許可された VPC エンドポイント経由、または特定のソース VPC からのリクエストのみを許可できます。両方の API で特定の IP 範囲からのリクエストのみを許可できます。同じ設定内で各 API に異なる制限を適用可能です。例えば Identit

## 活用シーン

AWS IAM Identity Center は、Identity Store 向けのネットワークアクセスコントロールを新たにサポートしました。Identity Store API および SCIM API へのアクセスを、VPC エンドポイントや特定の IP 範囲に基づいて制限できるようになりました。Identity Store API では、許可された VPC エンドポイント経由、または特定のソース VPC からのリクエストのみを許可できます。両方の API で特定の IP 範囲からのリクエストのみを許可できます。同じ設定内で各 API に異なる制限を適用可能です。例えば Identit

## 詳細

AWS IAM Identity Center は、Identity Store 向けのネットワークアクセスコントロールを新たにサポートしました。Identity Store API および SCIM API へのアクセスを、VPC エンドポイントや特定の IP 範囲に基づいて制限できるようになりました。Identity Store API では、許可された VPC エンドポイント経由、または特定のソース VPC からのリクエストのみを許可できます。両方の API で特定の IP 範囲からのリクエストのみを許可できます。同じ設定内で各 API に異なる制限を適用可能です。例えば Identity Store API は VPC エンドポイント経由のみ、SCIM は外部 IdP の公開 IP 範囲から許可できます。ネットワークアクセスコントロールはオプションでデフォルトはオフです。AWS サービスがお客様に代わって行うリクエストは対象外です。Identity Store API を通じて AWS SDKs および AWS CLI で設定します。IAM Identity Center が提供されているすべての AWS リージョンで利用可能です。カスタムアプリケーションやユーザープロビジョニングワークフロー、外部 IdP の SCIM 同期をご利用のお客様に有益です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-identity-store-network-controls/)