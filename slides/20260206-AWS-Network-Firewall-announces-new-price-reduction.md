---
marp: true
theme: default
paginate: true
---

# AWS Network Firewall announces new price reductions

**What's New** | 2026-02-06

---

## 概要

- AWS Network Firewallは、NAT Gatewayの割引をセカンダリエンドポイントにも拡大し、Advanced InspectionのTLS検査機能に関する追加データ処理料金を廃止することで、ネットワークセキュリティアーキテクチャのコスト削減を実現しました。
- これらの改善により、複数VPC保護とTLS検査をより経済的に実装できるようになります。

---

## 前提・背景

### これまでの課題

- NAT Gateway割引がプライマリエンドポイントのみに限定されていた
- Advanced InspectionのTLS検査に追加データ処理料金が発生していた
  - 料金範囲: GB当たり $0.001～$0.009
  - 対象リージョン: 13のAWSリージョン

### 関連する最近の動向

- AWS Network Firewallの複数VPCエンドポイント機能により、1つのAvailability Zoneで最大50個のVPCを接続可能
- AWS GovCloudでのFlexible Cost Allocation対応など、継続的なコスト最適化

---

## 変更内容・新機能

### 1. NAT Gateway割引の拡大
- **変更点**: セカンダリエンドポイントにも適用
- **対象**: Network Firewallのプライマリ及びセカンダリ両方のファイアウォールエンドポイント
- **効果**: 複数エンドポイント構成でのコスト削減

### 2. Advanced InspectionのTLS検査料金廃止
- **変更点**: 追加データ処理料金を完全廃止
- **対象リージョン**: 
  - Middle East (Bahrain)
  - Asia Pacific (Hong Kong, Tokyo, Osaka, Mumbai, Seoul, Singapore, Sydney, Melbourne)
  - EU (Milan)
  - South America (São Paulo)
  - US West (N. California)
  - Africa (Cape Town)

---

## 効果・メリット

- **コスト削減**: 複数VPC保護とTLS検査でのコスト最適化が実現
- **より広い対象**: セカンダリエンドポイント構成でも割引が自動適用
- **運用簡素化**: 対象構成に対して自動適用のため、顧客による追加アクションは不要
- **セキュリティと経済性**: TLS検査をより経済的に実装可能
- **スケーラビリティ**: 複数VPCの一元保護がコスト効率的に

---

## ユースケース

### 1. マルチVPC環境のセキュリティ
- 複数VPCをNetwork Firewallで一元管理
- セカンダリエンドポイント構成でのNAT Gateway割引により総コスト削減

### 2. 暗号化トラフィック検査
- TLS検査料金廃止により、HTTPS通信の検査をより多くの環境で実施可能
- コンプライアンス要件への対応がしやすく

### 3. ハイブリッドネットワークセキュリティ
- オンプレミスとクラウドを結ぶVPN/Direct Connect経由のトラフィック検査
- エンドポイント拡張時のコスト効率が向上

---

## まとめ

- AWS Network Firewallの価格改善により、ネットワークセキュリティのコスト効率が大幅向上
- NAT Gateway割引の拡大とTLS検査料金廃止により、複数VPC環境での保護がより経済的に実装可能
- 全AWSリージョンで利用可能で、対象構成に自動適用
- セキュリティと経済性の両面で重要なアップデート

---

## 参考URL

- [元記事: AWS Network Firewall announces new price reductions](https://aws.amazon.com/about-aws/whats-new/2026/02/aws-network-firewall-new-price-reduction/)
- [AWS Network Firewall Pricing](https://aws.amazon.com/network-firewall/pricing/)
- [AWS Network Firewall Documentation](https://docs.aws.amazon.com/network-firewall/latest/developerguide/firewall-creating.html)
- [AWS announces Flexible Cost Allocation in GovCloud](https://aws.amazon.com/about-aws/whats-new/2026/01/aws-flexible-cost-allocation-govcloud/)