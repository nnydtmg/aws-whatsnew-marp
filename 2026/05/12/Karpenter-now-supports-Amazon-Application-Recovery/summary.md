# Karpenter が Amazon Application Recovery Controller のゾーナルシフトに対応

Karpenter now supports Amazon Application Recovery Controller zonal shift

**カテゴリ:** What's New
**公開日:** 2026-05-12T17:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/karpenter-arc-zonal-shift/)

このページでは、AWS What's Newで発表された「Karpenter now supports Amazon Application Recovery Controller zonal shift」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Karpenter が Amazon Application Recovery Controller のゾーナルシフト機能に対応し、EKS クラスター内のネットワークトラフィックを障害のあるアベイラビリティーゾーンから自動的に転換できるようになりました。これにより、Kubernetes アプリケーションの可用性をより効果的に維持することが可能になります。

## このアップデートで何が変わったか

- Karpenterは、Amazon Application Recovery Controller（ARC）のゾーナルシフト機能に対応するようになりました

## 詳細

- Karpenterは、Amazon Application Recovery Controller（ARC）のゾーナルシフト機能に対応するようになりました。

- ARC ゾーナルシフトにより、障害が発生したアベイラビリティーゾーン（AZ）からのトラフィックを自動的に転換できるようになりました。

- ARC ゾーナルオートシフトを使用することで、AWS がこのプロセスを完全に自動化して管理することが可能です。

- ゾーナルシフトが有効化されると、Karpenter は障害のあるAZでの新しい容量のプロビジョニングを停止し、そのAZ内のノードの自発的な中断を防止します。

- ゾーナルシフトの期限切れまたはキャンセル時に、Karpenter は通常の操作を再開します。

- この機能を有効にするには、Karpenter 設定で ENABLE_ZONAL_SHIFT を設定する必要があります。

- 手動ゾーナルシフトとゾーナルオートシフトの両方に対応しており、カスタム ARC リソースは不要です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/05/karpenter-arc-zonal-shift/)
- [Karpenter Upgrade Guide](https://karpenter.sh/docs/upgrading/upgrade-guide/)
- [Amazon EKS ゾーナルシフト](https://docs.aws.amazon.com/eks/latest/userguide/zone-shift.html)