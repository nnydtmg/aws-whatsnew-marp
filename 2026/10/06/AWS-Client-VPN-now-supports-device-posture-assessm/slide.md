---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Client VPNがデバイスポスチャ評価をサポート

AWS Client VPN now supports device posture assessment

**What's New** | 2026-10-05T17:00:00

---

## 概要

- AWS Client VPNがデバイスポスチャ評価をサポートし、準拠したデバイスのみがAWSリソースへアクセスできるようになりました。
- 本機能はセキュリティ重視の組織および対応ツールをご利用のお客様に最適です。

---

## 前提・背景

### 関連する最近の動向

- **AWS Client VPN now supports device posture assessment - AWS**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-client-vpn-device-posture/)

- **Setting up a device trust provider - AWS Client VPN**
  [詳細](https://docs.aws.amazon.com/vpn/latest/clientvpn-user/device-posture-setup.html)

- **Configuring a trust provider - AWS Client VPN**
  [詳細](https://docs.aws.amazo...

---

## 変更内容・新機能

AWS Client VPNがデバイスポスチャ評価を新たにサポート。接続デバイスがセキュリティおよびコンプライアンス要件を満たすことをアクセス許可前に検証可能。CrowdStrike、Jamf、JumpCloudと統合しコンプライアンススコアや暗号化ステータス、リスクレベルを自動評価。Cedarポリシーできめ細かな制御が可能となり、テストポリシーツールも提供。セッション中に継続再評価し非準拠時は自動切断、モニタリング専用モードも利用可能。本機能は準拠デバイスのみのアクセスを求める組織に適する。CrowdStrike、Jamf、JumpCloudをご利用のお客様や多層防御を強化したい管理者に有用。既存の認証方式（証明書、SAML、Active Directory）に加えてデバイスポスチャ評価を実装。AWS Client VPNが利用可能なすべてのリージョンで追加費用なし。AWS VPN Client バージョン 6.2.0以降が必要。

---

## まとめ

- AWS Client VPN now supports device posture assessment について紹介しました
- 詳細は元記事をご確認ください

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-client-vpn-device-posture/)

### 関連情報

- [AWS Client VPN now supports device posture assessment - AWS](https://aws.amazon.com/about-aws/whats-new/2026/10/aws-client-vpn-device-posture/)
- [Setting up a device trust provider - AWS Client VPN](https://docs.aws.amazon.com/vpn/latest/clientvpn-user/device-posture-setup.html)
- [Configuring a trust provider - AWS Client VPN](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/device-posture-providers-config.html)
- [JumpCloud (context.jumpcloud.*) - AWS Client VPN](https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/device-posture-trust-data-jumpcloud.html)
- [AWS Client VPN now supports CLI, administration controls, and faster connections](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-client-vpn-cli)