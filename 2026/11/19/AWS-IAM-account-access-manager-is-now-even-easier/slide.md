---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS IAM account access managerの導入と利用がさらに容易に

AWS IAM account access manager is now even easier to deploy and use

**What's New** | 2026-11-18T08:00:00

---

## 概要

- AWS IAMアカウントアクセスマネージャーは、AWS管理ポリシー、IaC対応、およびサードパーティ連携により、より簡単にデプロイおよび利用できるようになりました。
- 本アップデートは管理者、エンタイトルメント担当者、監柄者、ならびにIaCやパートナーソリューションをご利用の組織に適しています。

---

## 前提・背景

### これまでの課題

Administering workforce access with account access manager requires permissions across several services, including AWS IAM Identity Center, AWS Organizations, AWS KMS, and AWS IAM. Previously, defining administrative access required hand-assembling m

---

### 関連する最近の動向

- **AWS Account Access Manager Enablement Walkthrough | Amazon Web Services**
  [詳細](https://www.youtube.com/watch?...

---

## 変更内容・新機能

日本語詳細:
- AWS IAMアカウントアクセスマネージャーのデプロイと利用が、AWS管理ポリシーによりさらに容易になりました。
- Terraform、Pulumi、またはAWS CloudFormationで管理するIaC構成に含めることができるようになりました。
- ロール割り当てが、OktaやPingIdentityをはじめとするサードパーティのIDおよびエンタイトルメント管理ソリューションと統合されました。
- 新規AWS管理ポリシー3種: AWSAccountAccessManagerAdministrator（フル管理者）、AWSAccountAccessManagerEntitlementManager（エンタイトルメント管理者）、AWSAccountAccessManagerReadOnlyAccess（読み取り専用・監柄者向け）
- 従来はIAM Identity Center、AWS Organizations、AWS KMS、AWS IAMにまたがる権限を手動で組み合わせる必要があった
- 対応パートナー: Okta, PingIdentity, Cisco 

---

## まとめ

- AWS IAM account access manager is now even easier to deploy and use について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-account-access-manager-easier/)

### 関連情報

- [AWS Account Access Manager Enablement Walkthrough | Amazon Web Services](https://www.youtube.com/watch?v=rAFe4j2KLdg)
- [AWS Identity and Access Management streamlines assignment of IAM roles to workforce users with account access manager](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-iam-aam)
- [Introducing AWS account access manager: IAM role flexibility with centralized workforce access](https://aws.amazon.com/blogs/security/introducing-aws-account-access-manager-iam-role-flexibility-with-centralized-workforce-access)
- [ICYMI: August 2026 @AWS Security](https://aws.amazon.com/blogs/security/icymi-august-2026-aws-security)