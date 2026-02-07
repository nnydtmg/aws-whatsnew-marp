---
marp: true
theme: default
paginate: true
---

# AWS Network Firewall announces new price reductions

**What's New** | 2026-02-06T08:00:00

---

## 概要

- AWS Network Firewallは、NAT Gatewayの割引をセカンダリエンドポイントにも拡大し、Advanced InspectionのTLS検査機能に関する追加データ処理料金を廃止することで、ネットワークセキュリティアーキテクチャのコスト削減を実現しました。
- これらの改善により、複数VPC保護とTLS検査をより経済的に実装できるようになります。

---

## 前提・背景

### これまでの課題

- 以前はNAT Gateway割引はプライマリエンドポイントのみに限定されていましたが、今後はプライマリおよびセカンダリの両方のファイアウォールエンドポイントに適用されます。

---

### 関連する最近の動向

- **AWS Network Firewall announces new price reductions**
  [詳細](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-network-firewall-new-price-reduction/)

- **AWS Network Firewall Pricing**
  [詳細](https://aws.amazon.com/network-firewall/pricing/)

- **Inspecting SSL/TLS traffic with TLS inspection**
  [詳細](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-configurations.html)

---

## 変更内容・新機能

- AWS Network Firewallが2つの価格改善を導入したことが発表されました。

- NAT Gatewayの時間単位およびデータ処理割引が、Network Firewallのセカンダリエンドポイントとサービスチェーンされた場合にも適用されるようになりました。

- Advanced Inspectionの追加データ処理料金が廃止されました。これにより、暗号化されたネットワークトラフィックのTLS検査がコスト効率的になります。

- Advanced Inspectionの追加データ処理料金（GB当たり0.001ドルから0.009ドル）が、13のAWSリージョンで廃止されました。

---

## 効果・メリット

- NAT Gateway割引をセカンダリエンドポイントにも適用により、複数エンドポイント構成でのコスト削減
- TLS検査の追加料金廃止により、暗号化トラフィック検査のコスト効率向上
- 複数VPCエンドポイント機能で最大50個のVPCを単一ファイアウォールに接続可能
- 対象構成に自動的に適用される仕様
- ネットワークセキュリティアーキテクチャの経済的実装が可能

---

## ユースケース

- **多層セキュリティアーキテクチャ:** プライマリ・セカンダリ両エンドポイントでのコスト効率的な構成
- **暗号化トラフィック検査:** TLS検査を無制限に活用した脅威検知
- **複数VPC保護:** 1つのNetwork Firewallで50VPCまで保護
- **ハイブリッド環境:** 増加するネットワークセキュリティ要件への経済的対応

---

## まとめ

- AWS Network Firewallの2つの価格改善により、セキュリティコストが大幅に削減
- NAT Gateway割引とTLS検査料金廃止が実現
- すべてのAWSリージョンで自動適用
- ネットワークセキュリティ投資のROI向上

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-network-firewall-new-price-reduction/)

### 関連情報

- [AWS Network Firewall announces new price reductions](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-network-firewall-new-price-reduction/)
- [AWS Network Firewall Pricing](https://aws.amazon.com/network-firewall/pricing/)
- [Inspecting SSL/TLS traffic with TLS inspection](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-configurations.html)