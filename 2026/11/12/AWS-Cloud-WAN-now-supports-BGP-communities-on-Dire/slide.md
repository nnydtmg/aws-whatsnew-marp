---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Cloud WANがDirect ConnectでBGPコミュニティをサポート

AWS Cloud WAN now supports BGP communities on Direct Connect attachments for routing policy

**What's New** | 2026-11-12T08:00:00

---

## 概要

- AWS Cloud WANがDirect Connectアタッチメント上でBGPコミュニティをサポートし、高度なルーティング制御が可能となりました。
- 本機能はハイブリッドネットワークをお持ちのエンタープライズのお客様に適しております。

---

## 前提・背景

### これまでの課題

AWS Cloud WAN now supports BGP communities on Direct Connect attachments, enabling advanced routing controls for enterprise hybrid networks. Previously, Cloud WAN Routing Policy evaluated BGP communities only on Site-to-Site VPN and Connect attachmen

---

### 関連する最近の動向

- **Direct Connect gateway attachments in AWS Cloud WAN - AWS Network Manager**
  [詳細](https://docs.aws.amazon.com/...

---

## 変更内容・新機能

AWS Cloud WAN now supports BGP communities on Direct Connect attachments, enabling advanced routing controls for enterprise hybrid networks. Previously, Cloud WAN Routing Policy evaluated BGP communities only on Site-to-Site VPN and Connect attachments. Now, customers can tag routes with routing intent on-premises, apply filtering and path preference rules inside Cloud WAN, and propagate communities back to their on-premises routers over Direct Connect. With this capability, enterprises can simp

---

## まとめ

- AWS Cloud WAN now supports BGP communities on Direct Connect attachments for routing policy について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/cloud-wan-bgp-community-directconnect/)

### 関連情報

- [Direct Connect gateway attachments in AWS Cloud WAN - AWS Network Manager](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-dxattach-about.html)
- [AWS Cloud WAN Routing policies - AWS Network Manager](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-routing-policies.html)
- [AWS Cloud WAN Routing Policy: Real-World Global Network Scenarios – Part 2](https://aws.amazon.com/blogs/networking-and-content-delivery/aws-cloud-wan-routing-policy-real-world-global-network-scenarios-part-2)
- [Direct Connect routing policies and BGP communities - AWS Direct Connect](https://docs.aws.amazon.com/directconnect/latest/UserGuide/routing-and-bgp.html)