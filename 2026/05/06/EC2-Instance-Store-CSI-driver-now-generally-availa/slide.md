---
marp: true
theme: aws-whatsnew
paginate: true
---

# EC2 Instance Store CSI driver now generally available in EKS add-ons

**発表日: 2026年5月5日**

---

## 概要

### EC2 Instance Store CSI ドライバーの3つの特徴

- **Amazon EKS アドオンとして一般提供**: EKS コンソール・AWS CLI から簡単にインストール・管理が可能
- **ローカルインスタンスストレージ統合**: Kubernetes クラスターへの高速ストレージ接続が容易
- **全リージョン対応**: すべてのコマーシャルリージョンで利用可能

---

## 前提・背景

### 市場の動向と課題

- **Kubernetes の高性能ストレージニーズ**: コンテナワークロードが複雑化し、低遅延ストレージへの需要が増加
- **インスタンスストア活用の課題**: NVMe ストレージボリュームの管理が複雑でEKS統合が限定的
- **CSI ドライバー拡張**: EKS アドオンとして他の CSI ドライバー（EBS、Secrets Store）が提供されており、Instance Store の需要が高い

### AWS の進化

- EKS アドオンの充実：セキュリティ・ストレージ関連の機能強化が進行中
- Kubernetes 連携の深化：永続ボリューム機能の簡素化

---

## 主な機能と改善

### 1. EKS ネイティブ統合

- **Amazon EKS コンソール**: GUI からワンクリックでインストール・管理
- **AWS CLI**: コマンドラインでのバージョン管理・更新が容易
- **自動パッチ・アップデート**: セキュリティ修正と最新機能を自動提供

### 2. インスタンスストア管理

- **NVMe ボリュームライフサイクル**: ドライバーが Pod マウント・アンマウントを自動化
- **エフェメラルブロックストレージ**: ホスト物理接続の低遅延ストレージを Kubernetes 永続ボリュームとして利用可能

---

## 効果・メリット

### 運用効率化

- **導入の簡素化**: 複雑な手動設定が不要。EKS アドオン一つで動作
- **保守性の向上**: AWS による自動パッチ適用でセキュリティリスク軽減
- **管理コストの削減**: 別途の CSI ドライバー管理が不要

### パフォーマンス向上

- **低遅延アクセス**: NVMe インスタンスストアを永続ボリューム化
- **キャッシング・一時データ保存**: 高速データベース・キャッシュレイヤーに活用

---

## ユースケース

### 高パフォーマンスアプリケーション

- **インメモリデータベース**: Redis・Memcached など低遅延キャッシュが必須なワークロード
- **データ分析**：一時ファイル・中間結果の高速処理
- **機械学習推論**: モデル・特徴量キャッシュの高速アクセス

### エフェメラルストレージ活用

- **テンポラリ処理**: ジョブ完了後に自動削除される一時データ
- **スケーラブルキャッシング**: Pod スケール時の動的ストレージ割り当て

---

<!-- _class: small -->

## 利用開始の手順

### Amazon EKS コンソール経由

1. **EKS クラスター選択** → 「アドオン」タブ
2. **「アドオンの管理」** → 「アドオンを追加"
3. **「EC2 Instance Store CSI Driver」** を検索・選択
4. **バージョン選択・権限確認** → 「追加」

### AWS CLI 経由

```bash
aws eks create-addon \
  --cluster-name my-cluster \
  --addon-name ec2-instance-store-csi-driver \
  --addon-version v1.x.x
```

---

## まとめ

### EC2 Instance Store CSI driver の位置づけ

- **EKS アドオン統合**: AWS による一元管理でセキュリティ・運用が簡素化
- **高性能ストレージ活用**: インスタンスストアの NVMe を Kubernetes ネイティブに統合
- **全リージョン対応**: どのリージョンでも同じ体験を実現

### 推奨される次のステップ

1. 既存 EKS クラスターでのアドオン追加評価
2. 高パフォーマンスワークロード（キャッシュ・DB）への適用テスト
3. 本番環境への段階的展開

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/05/ec2-csi-eks/
- **AWS add-ons - Amazon EKS**: https://docs.aws.amazon.com/eks/latest/userguide/workloads-add-ons-available-eks.html
- **How to use the Secrets Store CSI Driver provider**: https://aws.amazon.com/blogs/security/how-to-use-the-secrets-store-csi-driver-provider-amazon-eks-add-on-with-secrets-manager/
- **CSI Drivers (EBS, EFS, S3) on EKS**: https://awsmorocco.com/csi-drivers-ebs-efs-s3-on-eks-and-how-to-use-them-0aa369ec1c03/
- **Amazon EKS add-ons now supports AWS Secrets Store CSI**: https://aws.amazon.com/about-aws/whats-new/2025/11/amazon-eks-add-ons-aws-secrets-store-csi-driver-provider/

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**