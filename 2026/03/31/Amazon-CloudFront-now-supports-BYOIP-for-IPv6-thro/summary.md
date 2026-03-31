# Amazon CloudFront now supports BYOIP for IPv6 through VPC IPAM integration

**カテゴリ:** What's New
**公開日:** 2026-03-31T07:00:00
**元記事:** [https://aws.amazon.com/about-aws/whats-new/2026/03/cloudfront-byoip-ipv6-vpc-ipam/](https://aws.amazon.com/about-aws/whats-new/2026/03/cloudfront-byoip-ipv6-vpc-ipam/)

---

## 要約

Amazon CloudFrontは、VPC IPAM統合を通じてIPv6アドレスのBYOIP機能をサポートするようになり、ネットワーク管理者がIPv4（/24）とIPv6（/48）の独自アドレスプールをデュアルスタック構成で使用できるようになりました。この更新により、既存のIPアドレススペースを維持しながらセキュリティと管理の簡素化が実現されます。

## 詳細

- Amazon CloudFrontがVPC IPAM統合を通じてIPv6のBYOIP（Bring Your Own IP）に対応するようになりました。

- ネットワーク管理者は、CloudFrontディストリビューションで独自のパブリックIPv4およびIPv6アドレスプールを使用できるようになりました。

- CloudFront Anycast Static IPsにより、顧客はパートナーと顧客に専定のIPアドレスリストを提供でき、セキュリティが向上し、ネットワーク管理が簡素化されます。

- 以前はIPv4アドレス（/24ブロック）のみの対応でしたが、現在はIPv4（/24）とIPv6（/48）の両方をデュアルスタック構成で使用できます。

- 既存のアプリケーションIPアドレススペースを変更する必要がなく、IPv4とIPv6の両方のクライアント向けに既存のホワイトリストとブランディングを維持できます。

- この機能は、中東（バーレーン）、中東（UAE）、AWS GovCloud（US）地域、および中国地域を除くすべての商用AWSリージョンで利用可能です。