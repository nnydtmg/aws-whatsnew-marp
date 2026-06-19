---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon EKS で顧客ルーティング制御プレーン出力に対応

Kubernetes API サーバーのトラフィック制御

**発表日: 2026年6月18日**

---

## 概要

### 3つの主要な改善点

- **VPC ルーティング制御**: Kubernetes API サーバーのアウトバウンドトラフィックを自社 VPC 経由でルーティング可能
- **トラフィック可視化**: ルーティング、セキュリティグループ、出力パスをエンドユーザーが完全に制御
- **プライベートリソース接続**: VPC 内でのみアクセス可能なプライベート OIDC プロバイダーと webhook サーバーに接続

---

## 前提・背景

### Kubernetes 環境のセキュリティ課題

- **データ境界要件**: 企業のデータが特定の地域・ネットワーク内に留まる必要性
- **コンプライアンス要件**: HIPAA、SOC 2 など規制要件への対応
- **プライベートネットワーク**: オンプレミスシステムとの統合が必要な組織

### 従来の課題

- EKS のコントロールプレーン出力を完全にはコントロール不可
- 外部 OIDC プロバイダー・webhook サーバーへのアクセスが限定される
- ネットワークトラフィックの経路をユーザーが決定できない

---

## 主な機能

### 対応するトラフィックタイプ

- **アドミッション Webhook コールバック**: リソース作成時の検証リクエスト
- **OIDC プロバイダー検索**: 認証情報の取得と検証
- **集約 API サーバーリクエスト**: カスタム API の呼び出し

### ネットワーク制御

- 🔐 セキュリティグループで許可トラフィックを定義
- 🛣️ ルートテーブルで経路を明示的に設定
- 📤 出力パスを VPC NAT ゲートウェイ経由に限定

---

## 利用方法

### 設定方法

#### 新規クラスター作成時

```bash
aws eks create-cluster \
  --name my-cluster \
  --version 1.30 \
  --control-plane-egress-mode CUSTOMER_ROUTED \
  --other-options...
```

#### 既存クラスター更新時

```bash
aws eks update-cluster-config \
  --name my-cluster \
  --control-plane-egress-mode CUSTOMER_ROUTED
```

---

### 組織全体での強制設定

#### AWS Organizations Service Control Policy

```json
{
  "Effect": "Deny",
  "Action": "eks:CreateCluster",
  "Resource": "*",
  "Condition": {
    "StringNotEquals": {
      "eks:controlPlaneEgressMode": "CUSTOMER_ROUTED"
    }
  }
}
```

---

## ユースケース

### 1. 金融機関

- **要件**: データ境界・規制要件への対応
- **利点**: プライベートネットワークのみを使用、外部インターネット接続排除

### 2. ヘルスケア組織

- **要件**: HIPAA コンプライアンス
- **利点**: トラフィック経路を完全に監視・制御

### 3. エンタープライズ

- **要件**: オンプレミスシステムとの連携
- **利点**: プライベート OIDC・webhook サーバーへの安全なアクセス

---

## 効果・メリット

### セキュリティ面

✅ トラフィック経路の明示的な制御
✅ プライベートネットワークのみで通信
✅ セキュリティグループによる細粒度アクセス制御

### コンプライアンス面

✅ データ境界要件への対応
✅ 規制要件（HIPAA、SOC 2 等）への準拠
✅ 監査ログによる完全なトラフィック追跡

### 運用面

✅ 既存ネットワークインフラとの統合
✅ 追加コストなし（すべての EKS リージョンで利用可能）
✅ 新規・既存クラスターの両方で対応

---

## まとめ

### 重要なポイント

1. **柔軟なネットワーク制御**: Kubernetes API サーバー出力の完全な管理
2. **セキュリティ向上**: プライベートネットワーク内での通信を実現
3. **コンプライアンス対応**: データ境界・規制要件への準拠
4. **簡単な設定**: `controlPlaneEgressMode` フラグで有効化
5. **コスト効率**: 追加料金なしで全リージョンで利用可能

### 次のステップ

1. 自社の要件に合わせた評価開始
2. テスト環境での検証実施
3. 本番環境への段階的デプロイ

---

## 参考リソース

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-eks-customer-routed-control-plane-egress/
- **Amazon EKS ドキュメント**: https://docs.aws.amazon.com/eks/latest/userguide/control-plane-egress.html
- **EKS ネットワーク要件**: https://docs.aws.amazon.com/eks/latest/userguide/network-reqs.html
- **EKS セキュリティ ベストプラクティス**: https://docs.aws.amazon.com/eks/latest/userguide/security.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**