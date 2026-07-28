---
marp: true
theme: aws-whatsnew
paginate: true
---

# Amazon EKS Provisioned Control Planeがポッドのオートスケーリングを高速化

Amazon EKS Provisioned Control Plane now delivers faster pod autoscaling

**What's New** | 2026-07-28T17:18:00

---

## 概要

- Amazon EKS Provisioned Control Planeは、HPA同期並行性をデフォルト値の最大40倍に増加させることで、ポッドのオートスケーリング速度を大幅に向上させました。
- この改善はすべてのProvisioned Control Planeユーザーに自動的に適用され、特に多数のHPAオブジェクトを管理するクラスターにおいて、需要変化への応答性が向上します。

---

## 前提・背景

### 関連する最近の動向

- **A Guide to Autoscaling in EKS | Sedai**
  EKSでのオートスケーリング機能の総合ガイド

- **Amazon EKS Provisioned Control Plane - Amazon EKS**
  Provisioned Control Planeが提供する99.99% SLAと保証API並行性

- **EKS Pricing in 2026**
  EKS Provisioned Control Plane GA（2025年11月）での価格体系

---

## 変更内容・新機能

### HPA同期並行性の大幅向上

- Amazon EKS Provisioned Control Planeにおいて、Horizontal Pod Autoscaler（HPA）の同期並行性がKubernetesのデフォルト値の最大**40倍**まで増加されました。

---

## 効果・メリット

- HPA駆動型ワークロードがスケーリングするまでの時間が短縮
- 需要の変化に対する応答性が向上
- 制御プレーンが複数のHPAオブジェクトを並列処理することでスケーリング速度が向上
- 数百から数千のHPAオブジェクトを実行しているクラスターで特に有効

---

## ユースケース

### 対象となるワークロード

- **トラフィック変動が大きいアプリケーション**
  e-commerceサイト、SNS、ライブストリーミング

- **複数のマイクロサービス環境**
  数百から数千のサービスを運用するシステム

- **オートスケーリングが頻繁に発生する環境**
  高いHPA同期並行性により、スケーリング遅延を削減

---

## まとめ

### 主なポイント

- **自動適用**: 設定変更は不要 - すべてのEKS Provisioned Control Planeユーザーに自動で適用
- **大規模クラスター対応**: 数百から数千のHPAオブジェクトを効率的に管理
- **パフォーマンス向上**: スケーリング速度が最大40倍高速化

### 次のステップ

1. 既存クラスターのHPA設定を確認
2. スケーリング性能の向上を検証
3. パフォーマンス改善を本番環境で確認

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-provisioned-control/)
- [Amazon EKS Provisioned Control Plane ドキュメント](https://docs.aws.amazon.com/eks/latest/userguide/eks-provisioned-control-plane.html)
- [EKS Getting Started Guide](https://docs.aws.amazon.com/eks/latest/userguide/eks-provisioned-control-plane-getting-started.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**