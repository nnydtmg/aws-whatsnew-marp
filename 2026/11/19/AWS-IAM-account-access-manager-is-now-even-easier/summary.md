# AWS IAM account access managerの導入と利用がさらに容易に

AWS IAM account access manager is now even easier to deploy and use

**カテゴリ:** What's New
**公開日:** 2026-11-18T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-account-access-manager-easier/)

このページでは、AWS What's Newで発表された「AWS IAM account access manager is now even easier to deploy and use」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS IAMアカウントアクセスマネージャーは、AWS管理ポリシー、IaC対応、およびサードパーティ連携により、より簡単にデプロイおよび利用できるようになりました。本アップデートは管理者、エンタイトルメント担当者、監柄者、ならびにIaCやパートナーソリューションをご利用の組織に適しています。

## このアップデートで何が変わったか

日本語詳細:
- AWS IAMアカウントアクセスマネージャーのデプロイと利用が、AWS管理ポリシーによりさらに容易になりました。
- Terraform、Pulumi、またはAWS CloudFormationで管理するIaC構成に含めることができるようになりました。
- ロール割り当てが、OktaやPingIdentityをはじめとするサードパーティのIDおよびエンタイトルメント管理ソリューションと統合されました。
- 新規AWS管理ポリシー3種: AWSAccountAccessManagerAdministrator（フル管理者）、AWSAccountAccessManagerEntitlementManager（エンタイトルメント管理者）、AWSAccountAccessManagerReadOnlyAccess（読み取り専用・監柄者向け）
- 対応パートナー: Okta, PingIdentity, Cisco Duo, Apono, BeyondTrust, Britive, Sonrai Security, C1.ai, Lumos, SailPoint
- 追加コスト

## 対象ユーザー

Administering workforce access with account access manager requires permissions across several services, including AWS IAM Identity Center, AWS Organizations, AWS KMS, and AWS IAM. Previously, defining administrative access required hand-assembling multi-service IAM policies. The new AWS managed pol

## 詳細

Deploying and using AWS Identity and Access Management (IAM) account access manager is now even easier: you can use AWS managed policies to enable and administer it; you can include it in your infrastructure-as-code (IaC) configurations; and its role assignments are integrated in a growing number of third-party identity and entitlement management solutions.

Administering workforce access with account access manager requires permissions across several services, including AWS IAM Identity Center, AWS Organizations, AWS KMS, and AWS IAM. Previously, defining administrative access required hand-assembling multi-service IAM policies. The new AWS managed policies enable faster ramp up with broadly scoped job-aligned permissions for: 1/ Full administrator (AWSAccountAccessManagerAdministrator) - used to enable and manage account access manager in the AWS organization management account and to map users/groups to IAM roles; 2/ Entitlement Manager (AWSAccountAccessManagerEntitlementManager) - used to assign and remove user access without the ability to change service configuration; and 3/ ReadOnly (AWSAccountAccessManagerReadOnlyAccess) - used by auditors and compliance reviewers for visibility into user access.

Account access manager streamlines assignment of IAM roles to workforce users and groups in IAM Identity Center, bringing together access management flexibility, user awareness, and a single point of federation. You can include account access manager in your IaC configurations managed through Terraform, Pulumi, or AWS CloudFormation. The entitlements that you assign with account access manager are reflected in your identity provider (IdP) and entitlements management system, including those offered by AWS partners Okta, PingIdentity, Cisco Duo, Apono, BeyondTrust, Britive, Sonrai Security, C1.ai, Lumos, and SailPoint.

IAM account access manager is provided at no additional cost and available in all AWS Commercial Regions enabled by default.

日本語詳細:
- AWS IAMアカウントアクセスマネージャーのデプロイと利用が、AWS管理ポリシーによりさらに容易になりました。
- Terraform、Pulumi、またはAWS CloudFormationで管理するIaC構成に含めることができるようになりました。
- ロール割り当てが、OktaやPingIdentityをはじめとするサードパーティのIDおよびエンタイトルメント管理ソリューションと統合されました。
- 新規AWS管理ポリシー3種: AWSAccountAccessManagerAdministrator（フル管理者）、AWSAccountAccessManagerEntitlementManager（エンタイトルメント管理者）、AWSAccountAccessManagerReadOnlyAccess（読み取り専用・監柄者向け）
- 対応パートナー: Okta, PingIdentity, Cisco Duo, Apono, BeyondTrust, Britive, Sonrai Security, C1.ai, Lumos, SailPoint
- 追加コストなし、すべてのAWSコマーシャルリージョンで利用可能

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/iam-account-access-manager-easier/)