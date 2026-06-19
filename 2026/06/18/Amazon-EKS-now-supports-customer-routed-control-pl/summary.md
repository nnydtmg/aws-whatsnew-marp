# Amazon EKS で顧客ルーティング制御プレーン出力に対応

Amazon EKS now supports customer-routed control plane egress

**カテゴリ:** What's New
**公開日:** 2026年6月18日
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-eks-customer-routed-control-plane-egress)

---

## 🎯 要約

Amazon EKS が **顧客ルーティング制御プレーン出力機能** を導入しました。これにより、Kubernetes API サーバーのアウトバウンドトラフィックをユーザーの VPC 経由でルーティングでき、データ境界要件やコンプライアンス要件を持つ組織がプライベートネットワーク内のリソースへのアクセスを制御し、セキュアに通信することが可能になります。

---

## 📋 このアップデートで何が変わったか

### 新機能

1. **VPC ルーティング制御**
   - Kubernetes API サーバーのアウトバウンドトラフィックを自社 VPC 経由でルーティング
   - AWS マネージド VPC を経由しない通信パスの構築

2. **トラフィック管理対象**
   - アドミッション Webhook コールバック
   - OpenID Connect (OIDC) プロバイダーの検索
   - 集約 API サーバーリクエスト

3. **完全なネットワーク制御**
   - ルートテーブルの明示的な設定
   - セキュリティグループによるアクセス制御
   - 出力パス（NAT ゲートウェイ等）の指定

### 利用対象

- データ境界要件のある組織
- コンプライアンス要件（HIPAA、SOC 2 等）のある組織
- プライベートネットワークインフラストラクチャを持つ企業

---

## ⚙️ 利用方法

### 設定方法

#### 新規クラスター作成時

`controlPlaneEgressMode` を `CUSTOMER_ROUTED` に設定します。

```bash
aws eks create-cluster \
  --name my-cluster \
  --version 1.30 \
  --control-plane-egress-mode CUSTOMER_ROUTED \
  --resources-vpc-config subnetIds=subnet-xxx,subnet-yyy
```

#### 既存クラスター更新時

```bash
aws eks update-cluster-config \
  --name my-cluster \
  --control-plane-egress-mode CUSTOMER_ROUTED
```

### 組織全体での強制設定

AWS Organizations Service Control Policies で `eks:controlPlaneEgressMode` IAM 条件キーを使用して、組織全体でこの設定を強制できます。

---

## 💡 主なメリット

### セキュリティ

✅ トラフィック経路をエンドユーザーが完全に制御  
✅ プライベートネットワークのみで通信可能  
✅ セキュリティグループで細粒度のアクセス制御を実装  
✅ AWS AWS マネージド VPC を経由しない通信パス

### コンプライアンス

✅ データ境界要件への完全な対応  
✅ HIPAA、SOC 2 等の規制要件への準拠が容易  
✅ トラフィック経路の完全な監視・監査が可能  

### 運用

✅ プライベート OIDC プロバイダーと Webhook サーバーにアクセス可能  
✅ VPC 内のプライベートリソースのみで通信  
✅ 既存ネットワークインフラとの統合が容易  
✅ **追加コストなし** で全 AWS リージョンで利用可能

---

## 🎬 ユースケース

### 1. 金融機関

**状況**: データ境界要件、規制要件への対応が必須

**解決方法**:
- 顧客ルーティング制御プレーン出力を有効化
- プライベート NAT ゲートウェイ経由でのみ通信
- インターネット接続を完全に排除

**効果**: コンプライアンス要件への準拠、セキュリティの向上

### 2. ヘルスケア組織

**状況**: HIPAA コンプライアンスの要求

**解決方法**:
- トラフィック経路をプライベートネットワークに限定
- セキュリティグループで認可されたサーバーのみアクセス許可
- 監査ログの完全な追跡

**効果**: HIPAA 対応を実現、患者情報の保護強化

### 3. エンタープライズ組織

**状況**: オンプレミスシステムとの統合が必要

**解決方法**:
- プライベート OIDC プロバイダーへのアクセス
- Webhook サーバーをオンプレミスで稼働
- VPN 経由での通信パス構築

**効果**: ハイブリッド環境の安全な構築、既存システムとの連携

---

## 📊 技術的詳細

### 対応する Kubernetes 機能

| 機能 | 説明 | 利用シーン |
|-----|------|----------|
| **Admission Webhook** | リソース作成時の検証 | カスタム検証ルール適用 |
| **OIDC Provider** | OpenID Connect 認証 | ユーザー認証・認可 |
| **Aggregated API Server** | カスタム API | 組織独自の API 実装 |

### ネットワーク構成の例

```
┌─────────────────────────────────┐
│  EKS Cluster                    │
│  ┌──────────────────────────┐   │
│  │ Kubernetes API Server    │   │
│  │ (Control Plane)          │   │
│  └──────────────┬───────────┘   │
│                 │                 │
│            (出力トラフィック)       │
│                 ↓                 │
│  ┌──────────────────────────┐   │
│  │ NAT Gateway              │   │
│  │ (Customer Managed)       │   │
│  └──────────────┬───────────┘   │
└─────────────────┼────────────────┘
                  │
         ┌────────┴────────┐
         ↓                 ↓
  Private OIDC      Private Webhook
  Provider         Server
  (On-premises)    (VPC Internal)
```

---

## 🚀 開始方法

### ステップ 1: 環境の確認

- Amazon EKS クラスターのバージョン確認
- VPC とサブネットの構成確認
- 必要な IAM 権限の確認

### ステップ 2: テスト環境での検証

1. テストクラスターで `CUSTOMER_ROUTED` モード有効化
2. Webhook サーバーと OIDC プロバイダーの検証
3. トラフィック経路の確認

### ステップ 3: 本番環境への展開

1. 既存クラスターの設定更新
2. ネットワークルートの確認
3. セキュリティグループの調整
4. 段階的なロールアウト

---

## 📚 参考リソース

- **公式ドキュメント**: https://docs.aws.amazon.com/eks/latest/userguide/control-plane-egress.html
- **ネットワーク要件**: https://docs.aws.amazon.com/eks/latest/userguide/network-reqs.html
- **セキュリティ ベストプラクティス**: https://docs.aws.amazon.com/eks/latest/userguide/security.html
- **EKS User Guide**: https://docs.aws.amazon.com/eks/latest/userguide/

---

## 📝 まとめ

Amazon EKS の顧客ルーティング制御プレーン出力機能により、以下が実現されます：

- ✅ **完全なトラフィック制御**: ネットワーク管理者がルーティング・セキュリティを完全に制御
- ✅ **コンプライアンス対応**: データ境界・規制要件への対応が容易に
- ✅ **セキュリティ強化**: プライベートネットワークのみでの通信実現
- ✅ **柔軟な統合**: プライベート OIDC・Webhook サーバーとの連携
- ✅ **コスト効率**: 追加料金なしで全リージョン利用可能

この機能は、セキュリティと規制要件を重視する組織にとって、Kubernetes 環境の信頼性と管理性を大幅に向上させる重要な機能です。