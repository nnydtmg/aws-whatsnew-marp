# AWS Cloud WANがDirect ConnectでBGPコミュニティをサポート

AWS Cloud WAN now supports BGP communities on Direct Connect attachments for routing policy

**カテゴリ:** What's New
**公開日:** 2026-11-12T08:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/11/cloud-wan-bgp-community-directconnect/)

このページでは、AWS What's Newで発表された「AWS Cloud WAN now supports BGP communities on Direct Connect attachments for routing policy」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Cloud WANがDirect Connectアタッチメント上でBGPコミュニティをサポートし、高度なルーティング制御が可能となりました。本機能はハイブリッドネットワークをお持ちのエンタープライズのお客様に適しております。

## このアップデートで何が変わったか

AWS Cloud WAN now supports BGP communities on Direct Connect attachments, enabling advanced routing controls for enterprise hybrid networks. Previously, Cloud WAN Routing Policy evaluated BGP communities only on Site-to-Site VPN and Connect attachments. Now, customers can tag routes with routing intent on-premises, apply filtering and path preference rules inside Cloud WAN, and propagate communities back to their on-premises routers over Direct Connect. With this capability, enterprises can simp

## 対象ユーザー

AWS Cloud WAN now supports BGP communities on Direct Connect attachments, enabling advanced routing controls for enterprise hybrid networks. Previously, Cloud WAN Routing Policy evaluated BGP communities only on Site-to-Site VPN and Connect attachments. Now, customers can tag routes with routing int

## 詳細

AWS Cloud WAN now supports BGP communities on Direct Connect attachments, enabling advanced routing controls for enterprise hybrid networks. Previously, Cloud WAN Routing Policy evaluated BGP communities only on Site-to-Site VPN and Connect attachments. Now, customers can tag routes with routing intent on-premises, apply filtering and path preference rules inside Cloud WAN, and propagate communities back to their on-premises routers over Direct Connect. With this capability, enterprises can simplify hybrid network orchestration by signaling routing policies dynamically from on-premises environments. Customers can match community tags to filter production versus disaster recovery traffic, prioritize preferred paths, or restrict regional propagation. This eliminates the need for VPN overlay workarounds and manual policy replication, reducing operational complexity and misconfiguration risk. BGP community support on AWS Cloud WAN Direct Connect attachments is available in all AWS Regions where both AWS Direct Connect and AWS Cloud WAN are available.

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/11/cloud-wan-bgp-community-directconnect/)