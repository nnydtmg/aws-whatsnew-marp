# Amazon EKS Provisioned Control Planeがポッドのオートスケーリングを高速化

Amazon EKS Provisioned Control Plane now delivers faster pod autoscaling

**カテゴリ:** What's New
**公開日:** 2026-07-28T17:18:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-provisioned-control/)

このページでは、AWS What's Newで発表された「Amazon EKS Provisioned Control Plane now delivers faster pod autoscaling」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

Amazon EKS Provisioned Control Planeは、HPA同期並行性をデフォルト値の最大40倍に増加させることで、ポッドのオートスケーリング速度を大幅に向上させました。この改善はすべてのProvisioned Control Planeユーザーに自動的に適用され、特に多数のHPAオブジェクトを管理するクラスターにおいて、需要変化への応答性が向上します。

## このアップデートで何が変わったか

- Amazon EKS Provisioned Control Planeにおいて、Horizontal Pod Autoscaler（HPA）の同期並行性がKubernetesのデフォルト値の最大40倍まで増加されました。

## 対象ユーザー

- この機能はすべてのEKS Provisioned Control Planeユーザーが利用でき、設定変更は不要です。

## 詳細

- Amazon EKS Provisioned Control Planeにおいて、Horizontal Pod Autoscaler（HPA）の同期並行性がKubernetesのデフォルト値の最大40倍まで増加されました。

- この改善により、HPA駆動型ワークロードがスケーリングするまでの時間が短縮され、需要の変化に対する応答性が向上します。

- HPAは継続的にワークロードメトリクスを監視し、需要に応じてポッド数を調整しており、制御プレーンが複数のHPAオブジェクトを並列処理することでスケーリング速度が向上します。

- 数百から数千のHPAオブジェクトを実行しているクラスターにおいて、この機能は特に有効です。

- この機能はすべてのEKS Provisioned Control Planeユーザーが利用でき、設定変更は不要です。

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-provisioned-control/)