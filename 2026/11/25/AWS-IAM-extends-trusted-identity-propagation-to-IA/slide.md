---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAMがTrusted Identity Propagationを拡張しIdentity Centerを簡素化

AWS IAM extends trusted identity propagation to IAM federation and IAM Roles Anywhere, and simplifies it in IAM Identity Center

**What's New** | 2026-11-25T06:00:00

---

## 概要

- AWSは信頼されたアイデンティティ伝播（Trusted Identity Propagation / TIP）をIAMフェデレーションおよびIAM Roles Anywhereへ拡張し、IAM Identity Centerの体験を簡素化しました。
- これにより、ヒューマンやワークロードのアイデンティティをIAMポリシーでのアクセス制御とCloudTrail監査に利用できます。
- IAMアウトバウンドフェデレーションでは、TIP情報を含むAWS署名付きJWTを外部サービスに提供できます。

---

## 前提・背景

### 関連する最近の動向

- **AWS IAM extends trusted identity propagation to IAM federation and IAM Roles Anywhere, and simplifies it in IAM Identity Center**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-iam/)

- **AWS IAM Identity Center now supports cross-Region trusted identity propagation**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-iam-identity-center-cross-region-ti...

---

## 変更内容・新機能

主な変更内容:
- IAMフェデレーション: SAMLアサーションまたはOIDCトークンから人間・ワークロードアイデンティティと、リスクスコアやCI/CDワークフロー名など任意のランタイムクレームをロールセッションへマッピング可能。
- IAM Roles Anywhere: X.509証明書由来のアイデンティティにTIPを適用可能。
- IAM Identity Center: アイデンティティソースが提供するユーザー名を、IAM Identity Centerが生成するユーザーIDと並行して追加。アプリケーションとAWSアカウントの両方で均一に伝播。
- IAMアウトバウンドアイデンティティフェデレーション: TIPセッションからのアイデンティティ情報を含むAWS署名付きJWTをリクエスト可能。外部サービスが発行元の人間ユーザーまたはワークロードを識別できる。
- アイデンティティはIAMロール間およびAWSサービス間で保持され、ロールごとの信頼ポリシー更新は不要。

利用可能リージョン:
- すべての商用AWSリージョン
- AWS GovCloud (US) リージョン
- A

---

## まとめ

- AWS IAM extends trusted identity propagation to IAM federation and IAM Roles Anywhere, and simplifies it in IAM Identity Center について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-iam/)

### 関連情報

- [AWS IAM extends trusted identity propagation to IAM federation and IAM Roles Anywhere, and simplifies it in IAM Identity Center](https://aws.amazon.com/about-aws/whats-new/2026/11/aws-iam/)
- [AWS IAM Identity Center now supports cross-Region trusted identity propagation](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-iam-identity-center-cross-region-tip)
- [Trusted identity propagation overview - AWS IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation-overview.html)
- [AWS Trusted Identity Propagation Now Covers IAM Federation and Roles Anywhere](https://cloudsecuritywire.com/articles?provider=)