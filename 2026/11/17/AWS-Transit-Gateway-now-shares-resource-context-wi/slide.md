---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Transit Gatewayがファイアウォールとリソースコンテキストを共有可能に

AWS Transit Gateway now shares resource context with firewalls for segmentation policies

**What's New** | 2026-11-17T08:00:00

---

## 概要

- AWS Transit Gatewayはファイアウォールとのリソースコンテキスト共有により、ワークロード定義に基づくセグメンテーションを最初のパケットから実現します。
- 本機能は、動的な環境や複数階層のセキュリティを運用するお客様に適しています。

---

## 前提・背景

### 関連する最近の動向

- **Transit gateway-attached firewalls in Network Firewall**
  [詳細](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tgw-firewall.html)

- **Deployment models for AWS Network Firewall: Transit Gateway attachment**
  [詳細](https://aws.amazon.com/blogs/networking-and-content-delivery/deployment-models-for-aws-network-firewall-transit-gateway-attachment-and-multiple-vp...

---

## 変更内容・新機能

- 本アップデートの新機能は、AWS Transit Gatewayが接続されたファイアウォールなどのセキュリティサービスとリソースコンテキストを共有できるようになったことです。
- お客様は、Amazon VPC、VPCサブネット、VPCセキュリティグループ、およびトランジットゲートウェイアタッチメントを、IPアドレスと併せてファイアウォールポリシーで使用できます。
- トランジットゲートウェイはファイアウォールへ送信するトラフィックにリソースコンテキストを埋め込み、最初のパケットから適切なポリシーを適用できます。
- 本アップデートは、IPアドレスによるセグメンテーションの計画と維持が難しいお客様に適しています。
- リソースタグの同期漏れを避けたいお客様や、短命なAWS Lambda関数に即座にポリシーを適用したいお客様に適しています。
- 開発VPCと本番VPCの分離や、AWS Direct ConnectおよびAWS Site-to-Site VPN経由トラフィックへの共通検査を求めるお客様に適しています。
- AWS Network FirewallまたはPalo Alto

---

## まとめ

- AWS Transit Gateway now shares resource context with firewalls for segmentation policies について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/11/transit-gateway-firewall-context-sharing/)

### 関連情報

- [Transit gateway-attached firewalls in Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tgw-firewall.html)
- [Deployment models for AWS Network Firewall: Transit Gateway attachment](https://aws.amazon.com/blogs/networking-and-content-delivery/deployment-models-for-aws-network-firewall-transit-gateway-attachment-and-multiple-vpc-endpoints)
- [Context sharing with security services documentation](https://docs.aws.amazon.com/network-manager/latest/tgwnm/context-stores.html)
- [AWS Transit Gateway product page](https://aws.amazon.com/transit-gateway/)