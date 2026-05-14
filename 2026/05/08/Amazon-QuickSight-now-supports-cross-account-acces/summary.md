# Amazon QuickSightがAmazon Athenのクロスアカウントアクセス機能をサポート

Amazon QuickSight now supports cross-account access for Amazon Athena data sources

**カテゴリ:** What's New  
**公開日:** 2026-05-08  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-quick-athena/)

---

## 要約

Amazon QuickSightがAmazon Athenのクロスアカウントアクセス機能をサポートするようになり、IAMロールチェーニングを通じて異なるAWSアカウント内のAthenデータに対してクエリを実行できるようになりました。この機能は、複数のアカウントやチーム間での細粒度なアクセス制御と、コスト管理の最適化を実現します。

---

## このアップデートで何が変わったか

### 新機能

1. **クロスアカウントアクセス**
   - QuickSightのデプロイメントと異なるAWSアカウントに存在するAthenデータにアクセス可能
   - IAMロールチェーニングを使用したセキュアなアクセス

2. **IAMロールチェーニングメカニズム**
   - QuickSight (Publisher Account) がターゲットアカウント (Consumer Account) のロールを段階的に引き受ける
   - 長期クレデンシャルを共有せずセキュアにアクセス

3. **複数ロール設定**
   - 単一アカウント内のチーム間での細粒度なアクセス制御
   - 複数のロール設定により、柔軟な権限管理が可能

### セットアップ方法

管理者は以下の2つの設定で、Athenのデータソースを作成できます：

- **RunAsRole**: QuickSightアカウント内の実行ロール
- **ConsumerAccountRoleArn**: Athenリソースが存在するターゲットアカウント内のコンシューマーロール

QuickSightは、ロールチェーニングメカニズムを使用して、まずRunAsRoleを引き受け、その後、コンシューマーアカウントロールにチェーンしてクエリを実行します。

### コスト配分

Athenのクエリコストは、**データが存在するアカウント**に課金されます。

---

## 対象ユーザー

- **エンタープライズ組織**: 複数のAWSアカウントを運用している企業
- **大規模分析チーム**: 複数部門・チーム間でのデータ共有が必要な組織
- **セキュリティ重視企業**: アカウント分離・最小権限の原則を重視する組織
- **コスト最適化志向**: 部門別・チーム別のコスト配分を実施している組織

---

## 主な利点

### セキュリティ
- ✅ クレデンシャル非共有によるセキュア設計
- ✅ IAM CloudTrailでの監査追跡が可能
- ✅ 最小権限の原則に基づいた設定が実現可能

### 運用効率
- ✅ 統一されたQuickSightから複数アカウントのデータに一括アクセス
- ✅ アカウント数増加に柔軟に対応
- ✅ 複数ロール設定による細粒度なアクセス制御

### コスト
- ✅ クエリコストの正確な追跡と配分が可能
- ✅ チャージバック・コスト配分モデルの実装が簡素化
- ✅ データ複製による冗長コスト削減

---

## 利用開始方法

### 前提条件

- Amazon QuickSight環境の構築
- Amazon Athen環境の構築
- IAM権限の適切な設定
- AWS Glue Data Catalogへのアクセス権限

### セットアップステップ

1. **Publisher AccountでRunAsRoleを構成**
   - QuickSightが使用するIAMロールを作成・設定

2. **Consumer AccountでConsumerAccountRoleArnを指定**
   - Athenリソースが存在するアカウントのロールを指定
   - クロスアカウント信頼関係を設定

3. **Athenデータソースを作成**
   - QuickSightでAmazon Athenデータソースを新規作成
   - ロールチェーニング経由でのクエリ実行

4. **ダッシュボード・レポート作成**
   - クロスアカウントAthenデータを使用した分析

---

## 利用可能なリージョン

- **Amazon QuickSightがサポートするすべてのリージョン**で利用可能

---

## 料金

- 追加の料金なし
- 既存のAmazon QuickSight、Amazon Athen料金で提供

---

## ユースケース

### 例1: 複数事業部ごとのアカウント分離

```
本社QuickSight
├─ 営業部Athen
├─ マーケティング部Athen
└─ 企画部Athen
```

統一されたダッシュボードで各部門データを可視化しつつ、
アカウント分離によるセキュリティと独立性を確保。

### 例2: 開発・本番環境の分離

```
本番QuickSight → 本番Athen
開発QuickSight → 開発Athen
```

環境間でのデータアクセスを厳密に分離しながら、
統一された分析ツールを運用。

---

## 関連サービス

- **Amazon QuickSight**: ビジネスインテリジェンス・分析ツール
- **Amazon Athena**: サーバーレスクエリエンジン
- **AWS Glue Data Catalog**: 統合メタデータリポジトリ
- **AWS IAM**: アイデンティティおよびアクセス管理

---

## 参考リンク

- [AWS What's New: Amazon QuickSight supports cross-account Athena access](https://aws.amazon.com/about-aws/whats-new/2026/05/amazon-quick-athena/)
- [From siloed data to unified insights: Cross-account Athena Access for Amazon Quick](https://aws.amazon.com/blogs/machine-learning/from-siloed-data-to-unified-insights-cross-account-athena-access-for-amazon-quick/)
- [Use Amazon Athena and Amazon QuickSight in a cross-account environment](https://aws.amazon.com/blogs/big-data/use-amazon-athena-and-amazon-quicksight-in-a-cross-account-environment/)
- [Amazon QuickSight Documentation](https://docs.aws.amazon.com/quick/)
- [Amazon Athena Documentation](https://docs.aws.amazon.com/athena/)

---

## 更新履歴

- **2026年5月8日**: Amazon QuickSightがAmazon Athenのクロスアカウントアクセス機能をサポート開始