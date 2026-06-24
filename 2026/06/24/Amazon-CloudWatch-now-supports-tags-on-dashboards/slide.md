---
marp: true
theme: aws-whatsnew
paginate: true
---

<!-- _class: title -->

# Amazon CloudWatchがダッシュボードのタグに対応

複数ダッシュボードの整理と属性ベースアクセス制御を実現

**発表日: 2026年6月24日**

---

## 概要

### Amazon CloudWatch ダッシュボードにタグ機能が追加

- **最大50個のタグ**: ダッシュボードに柔軟なメタデータを付与
- **複数の組織化方法**: チーム、プロジェクト、環境別での分類が可能
- **属性ベースのアクセス制御**: タグ値に基づくIAM権限設定
- **追加費用なし**: すべてのAWSリージョンで利用可能

---

## 前提・背景

### 組織の課題

- 多数のダッシュボード管理による複雑化
- ダッシュボードへのアクセス権限管理の困難さ
- リソースの一元管理が必要なマルチテナント環境への対応
- タグベースの監視・フィルタリング機能の需要

### CloudWatch の進化

- アラーム、メトリクスストリームなどリソースのタグ対応が進行
- メトリクスエクスプローラーでのタグベースフィルタリングが利用可能
- リソースエクスプローラーと連携による統合管理が実現

---

## 主な機能

### 1. API サポート

- **PutDashboard**: 新規ダッシュボード作成時にタグを指定
- **TagResource API**: 既存ダッシュボードにタグを追加
- **UntagResource API**: ダッシュボードからタグを削除
- **ListTagsForResource API**: ダッシュボードのタグを一覧表示

### 2. 管理ツール統合

- **AWS CloudFormation**: Infrastructure as Code でダッシュボードタグを管理
- **AWS CloudWatch コンソール**: UI から直接タグを編集
- **AWS CLI**: スクリプト化されたタグ管理に対応

---

## 活用シーン

### ダッシュボード組織化

```
環境別:
  - Prod (本番環境)
  - Staging (ステージング環境)
  - Dev (開発環境)

部門別:
  - Platform (プラットフォーム)
  - DataEngineering (データエンジニア)
  - Security (セキュリティ)
```

### アクセス制御

```json
{
  "Effect": "Allow",
  "Action": "cloudwatch:GetDashboard",
  "Resource": "arn:aws:cloudwatch:*:*:dashboard/*",
  "Condition": {
    "aws:ResourceTag/Team": ["Platform"]
  }
}
```

---

## ユースケース

### ユースケース1: マルチテナント環境

- 顧客ごと、プロジェクトごとにダッシュボードをタグ分け
- タグベースのIAM ポリシーで厳密なアクセス制御
- AWS Resource Explorer で顧客別ダッシュボードを検索・管理

### ユースケース2: 大規模運用体制

- チーム別にダッシュボードを分類
- `CostCenter`, `Owner` タグで責任者を明確化
- タグ値でのフィルタリングで必要なダッシュボードのみを表示

### ユースケース3: 監査・コンプライアンス

- `Environment`, `Classification` タグでセキュリティ分類
- タグベースのアクセス制御ポリシーで監査対応
- ダッシュボード削除時のタグによる追跡管理

---

## 効果とメリット

<div class="columns">
<div>

### 運用面

- **検出性の向上**: タグでダッシュボードを素早く検索可能
- **管理の簡素化**: 関連ダッシュボードを一括把握
- **スケーラビリティ**: 増加するダッシュボードに対応

</div>
<div>

### セキュリティ面

- **アクセス制御**: 属性ベースで柔軟な権限設定
- **最小権限**: 必要なタグを持つリソースのみに限定
- **監査対応**: タグ情報でのアクセス履歴追跡

</div>
</div>

---

## 移行・開始方法

### ステップ1: 既存ダッシュボードのタグ付け

```bash
aws cloudwatch tag-resource \
  --resource-arn arn:aws:cloudwatch:ap-northeast-1:123456789012:dashboard/MyDashboard \
  --tags Key=Environment,Value=Prod Key=Owner,Value=Platform
```

### ステップ2: IAM ポリシーの更新

- タグベースの条件式を IAM ポリシーに追加
- チームごとに適切な権限を設定

### ステップ3: CloudFormation で新規ダッシュボードを管理

- IaC で タグ付きダッシュボードを自動作成
- 本番環境への段階的導入

---

## まとめ

### Amazon CloudWatch ダッシュボードタグ機能の意義

- **大規模化への対応**: 複雑な環境での組織化が可能に
- **セキュリティ強化**: 属性ベースのアクセス制御で細粒度制御を実現
- **運用効率化**: タグによる検索・フィルタリングで管理負担軽減
- **コスト管理**: タグベースでコスト配分が容易に

### 推奨される採用時期

1. 多くのダッシュボードを管理している場合（今すぐ開始）
2. マルチアカウント環境で属性ベースのアクセス制御が必要
3. Infrastructure as Code への移行を計画中

---

## 参考リソース

### 公式ドキュメント

- **AWS What's New**: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-tags-on-dashboards/
- **CloudWatch Tagging Guide**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Tagging.html
- **Metrics Explorer**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html
- **Using CloudWatch Dashboards**: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**