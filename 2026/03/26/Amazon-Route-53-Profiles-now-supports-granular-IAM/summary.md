# Amazon Route 53 Profiles now supports granular IAM permissions for resource and VPC associations

**カテゴリ:** What's New
**公開日:** 2026-03-25T18:34:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-route-53-profiles-granular-iam/](https://aws.amazon.com/about-aws/whats-new/2026/03/amazon-route-53-profiles-granular-iam/)

---

## 要約

Amazon Route 53 Profilesが粒度の細かいIAM権限をサポートするようになり、管理者は特定のリソースタイプとVPC関連付けに対するユーザーアクセスを厳密に制御できるようになりました。この更新により、組織全体でセキュリティとガバナンスを維持しながら、Profile管理の責任を効果的に委任することが可能になります。

## 詳細

- Amazon Route 53 Profilesが、リソースおよびVPC関連付けに対する粒度の細かいIAM権限をサポートするようになりました。

- ユーザーが特定のリソースタイプ（プライベートホストゾーン、Resolverルール、DNSファイアウォールルールグループなど）に対して実行できる操作（関連付け、関連付け解除、更新）を制限するIAMポリシーを作成できます。

- リソースARN、ホストゾーン名、Resolverルールドメイン名、DNSファイアウォールルールグループの優先度範囲、または特定のVPC関連付けに基づいて権限を定義することが可能です。

- Route 53 Profilesは、プライベートホストゾーン関連付け、Resolverルール、およびDNSファイアウォールルールグループを含む標準DNS設定を定義し、複数のVPCに適用またはAWS Resource Access Manager（RAM）を使用して他のAWSアカウントと共有できます。

- この機能により、管理者は組織全体でセキュリティとガバナンス標準を維持しながら、特定の責任を委任することができます。

- この機能は、中東（バーレーン）および中東（UAE）を除く、Route 53 Profilesが利用可能なすべてのAWSリージョンで追加料金なしで利用できます。
