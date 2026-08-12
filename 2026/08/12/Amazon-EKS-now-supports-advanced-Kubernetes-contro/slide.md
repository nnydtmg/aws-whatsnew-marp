---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon EKS がKubernetesコントロールプレーンの詳細パラメータ設定に対応

**発表日: 2026年8月12日**

---

## 概要

### 何が変わったか

- **コントロールプレーン構成の細かい制御が可能に**
  - スケジューラー、コントローラーマネージャー、API サーバーのパラメータを直接設定可能
  
- **クラスター管理の柔軟性が大幅向上**
  - 自社のKubernetesから設定を移行できる
  - セルフマネージドKubernetesの運用ノウハウを活かせる

---

## 前提・背景

### これまでの課題

- セルフマネージドKubernetesから移行時に、チューニング済みのスケジューラー設定を失う
- AmazonEKSの標準設定では最適化できないユースケースがある
- 運用負荷の高いKubernetesを自社で管理する必要があった

### 市場背景

- エンタープライズのKubernetes利用が拡大
- ポッドのスケジューリング最適化が重要化
- コスト削減とパフォーマンス両立のニーズ

---

## 主な機能と設定項目

### スケジューラー設定

- **ノードリソースフィット戦略**
  - `MostAllocated`: 利用率の高いノードに集約（コスト最適化）
  - `LeastAllocated`: ノード全体に分散（リソース余裕確保）

### コントローラーマネージャー設定

- **HPA同期間隔** (`horizontalPodAutoscalerSyncPeriod`)
  - 水平ポッドオートスケーラーの反応速度を調整
  - デマンドに応じたスケールアウトが高速化
  - ※ Amazon EKS Provisioned Control Plane での利用

### その他のパラメータ

- イベント保持期間
- リソースライフサイクル制御

---

## ユースケース例

### コスト最適化型

<div class="columns">
<div>

**MostAllocated戦略**
- ノード数を最小化
- 計画的なバッチ処理
- 開発・テスト環境

</div>
<div>

**効果**
- クラウドコスト削減
- ノード管理負荷軽減
- スケーリング効率向上

</div>
</div>

### 可用性重視型

- LeastAllocated戦略で負荷分散
- ミッションクリティカルアプリに最適
- リソース余裕で障害耐性向上

---

## 対応範囲と提供状況

### 利用可能なリージョン

- Amazon EKS が利用可能な**すべてのAWSリージョン**で設定可能

### 対応クラスタータイプ

- スタンダード Amazon EKS クラスタ
- Amazon EKS Provisioned Control Plane

---

## 効果・メリット

- **運用効率の向上**
  - オンプレミスのKubernetesから設定を直接移行
  - セルフマネージド運用の負担軽減

- **パフォーマンス最適化**
  - アプリケーション特性に応じたスケジューリング
  - HPA反応速度の向上で動的対応が強化

- **コスト削減**
  - MostAllocated戦略でノード利用率向上
  - 不要なノード追加を回避

- **柔軟性の確保**
  - AWSマネージド運用 + カスタムチューニング
  - Amazon EKSの高可用性を維持しながら最適化

---

## まとめ

### 何ができるようになったのか

✅ Kubernetesコントロールプレーンのパラメータを直接制御
✅ セルフマネージド環境の最適化設定を持ち込み可能
✅ HPAやスケジューラーを細かく調整して最適化

### 次のステップ

1. 既存クラスタの設定見直し
2. 本番環境でのパイロット導入
3. 段階的な設定最適化

---

## 参考リソース

### 公式情報

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-eks-control-plane-configuration-parameters
- **AWS ブログ記事**: https://aws.amazon.com/blogs/containers/introducing-advanced-kubernetes-control-plane-configuration-in-amazon-eks

### 関連ドキュメント

- **Amazon EKS ユーザーガイド**: https://docs.aws.amazon.com/eks/
- **EKS ベストプラクティス**: https://docs.aws.amazon.com/eks/latest/best-practices/

---

**ご質問やご不明な点は、AWSサポートまでお問い合わせください**