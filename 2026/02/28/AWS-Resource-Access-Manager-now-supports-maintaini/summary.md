# AWS Resource Access Manager now supports maintaining shares when accounts change organizations

**カテゴリ:** What's New
**公開日:** 2026-02-27T17:35:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/02/aws-resource-access-manager/](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-resource-access-manager/)

---

## 要約

AWS Resource Access Manager（RAM）が新しいRetainSharingOnAccountLeaveOrganizationパラメータを導入し、アカウントがAWS Organizations間を移動する際にリソース共有を継続できるようになりました。この機能により、M&Aや組織再編時にRoute53 Resolver RulesやTransit Gatewaysなどの共有リソースへのアクセスを中断することなく維持でき、セキュリティチームはSCPを通じて組織全体でこの設定を強制できます。

## 詳細

- AWS Resource Access Manager（RAM）が、アカウントがAWS Organizations間を移動する際にリソース共有の継続性を維持する新しい機能をサポートするようになりました。

- 新しいRetainSharingOnAccountLeaveOrganizationパラメータと対応するram:RetainSharingOnAccountLeaveOrganization条件キーにより、セキュリティ管理者はリソース共有を設定してアカウントがOrganizationを離れる際にアクセスを保持できます。

- この機能により、M&Aや組織再編を経験している企業は、Route53 Resolver Rules、Transit Gateways、IPAMプールなどの共有リソースへのアクセスを中断することなく維持できます。

- セキュリティチームはService Control Policies（SCPs）を使用してRetainSharingOnAccountLeaveOrganization設定を組織全体で強制できます。

- 有効にすると、RAMはOrganizationアカウントを外部アカウントとして扱い、明示的な招待受け入れを要求し、アカウント移行中のリソースアクセスを保持します。

- この機能はすべてのAWSコマーシャルリージョンで追加コストなしで利用可能です。
