---
marp: true
theme: aws-whatsnew
paginate: true
---

# Karpenter が Amazon Application Recovery Controller のゾーナルシフトに対応

Karpenter now supports Amazon Application Recovery Controller zonal shift

**What's New** | 2026-05-12T17:00:00

---

## 概要

- Karpenter が Amazon Application Recovery Controller のゾーナルシフト機能に対応し、EKS クラスター内のネットワークトラフィックを障害のあるアベイラビリティーゾーンから自動的に転換できるようになりました。
- これにより、Kubernetes アプリケーションの可用性をより効果的に維持することが可能になります。

---

## 前提・背景

### 高可用性とディザスタリカバリーの重要性

- Kubernetes アプリケーションの可用性維持は、本番環境運用の重要な課題
- アベイラビリティーゾーン（AZ）の障害に対する自動対応が必要
- インフラ層での堅牢な障害対応メカニズムが求められている

---

## 主な機能

### Karpenter と Amazon ARC の統合

- Karpenterは、Amazon Application Recovery Controller（ARC）のゾーナルシフト機能に対応するようになりました
- ARC ゾーナルシフトにより、障害が発生したアベイラビリティーゾーン（AZ）からのトラフィックを自動的に転換できるようになりました
- ARC ゾーナルオートシフトを使用することで、AWS がこのプロセスを完全に自動化して管理することが可能です

---

## 変更内容・新機能

### ゾーナルシフト対応による動作の変化

- ゾーナルシフトが有効化されると、Karpenter は障害のあるAZでの新しい容量のプロビジョニングを停止し、そのAZ内のノードの自発的な中断を防止します
- ゾーナルシフトの期限切れまたはキャンセル時に、Karpenter は通常の操作を再開します

### 有効化方法

- この機能を有効にするには、Karpenter 設定で ENABLE_ZONAL_SHIFT を設定する必要があります
- 手動ゾーナルシフトとゾーナルオートシフトの両方に対応しており、カスタム ARC リソースは不要です

---

## 効果・メリット

- **自動的なトラフィック転換**: 障害のあるAZ からのトラフィックが自動的に健全なAZ に転換される
- **可用性の向上**: Kubernetes アプリケーションの可用性をより効果的に維持することが可能
- **運用負荷の軽減**: AWS による完全な自動化で、手動介入が不要
- **信頼性の強化**: ノードのプロビジョニング停止で新しい問題の発生を防止

---

## ユースケース

### 高可用性が求められるシステム

- 金融サービスやヘルスケアなどの重要業務システム
- e-コマースプラットフォームなどの24時間稼働サービス
- マイクロサービスアーキテクチャの Kubernetes クラスター

---

## まとめ

- Karpenter が Amazon Application Recovery Controller のゾーナルシフトに対応
- EKS クラスター内のトラフィックを自動的に転換し、可用性を向上
- ENABLE_ZONAL_SHIFT で簡単に有効化可能
- 手動・自動の両方のゾーナルシフトに対応

---

## 参考URL

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/karpenter-arc-zonal-shift/
- **Karpenter Upgrade Guide**: https://karpenter.sh/docs/upgrading/upgrade-guide/
- **Amazon EKS ゾーナルシフト**: https://docs.aws.amazon.com/eks/latest/userguide/zone-shift.html
- **Amazon Application Recovery Controller (ARC) 概要**: https://docs.aws.amazon.com/general/latest/gr/arc.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**