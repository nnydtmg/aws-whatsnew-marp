# Amazon CloudWatchがダッシュボードのタグに対応

Amazon CloudWatch now supports tags on dashboards

**カテゴリ:** What's New  
**公開日:** 2026年6月24日  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-tags-on-dashboards)

---

## 📋 要約

Amazon CloudWatchダッシュボードがタグ機能に対応し、最大50個のタグを使用してダッシュボードを整理・分類・アクセス制御できるようになりました。この機能は、複数のダッシュボードを管理するチームやプロジェクト単位での組織化、属性ベースのアクセス制御の実装が必要な企業に特に有用です。

---

## 🔄 このアップデートで何が変わったか

### API の拡張

- **PutDashboard API** - 新規ダッシュボード作成時に最大50個のタグを指定可能
- **TagResource API** - 既存ダッシュボードにタグを追加
- **UntagResource API** - ダッシュボードからタグを削除
- **ListTagsForResource API** - ダッシュボードのタグ一覧を表示

### AWS CloudFormation 対応

- Infrastructure as Code でダッシュボードのタグを管理可能に
- `Tags` パラメータでダッシュボード定義にメタデータを付与

### 機能統合

- AWS Resource Explorer でタグによるダッシュボードのフィルタリングが可能
- チーム、プロジェクト、環境別にダッシュボードをグループ化
- タグ値に基づいてIAM権限のスコープを設定し、属性ベースのアクセス制御を実装

---

## 💡 主な活用シーン

### 1. ダッシュボード組織化

環境別（Prod/Staging/Dev）、部門別（Platform/DataEngineering/Security）、チーム別（Frontend/Backend）など、複数の観点でダッシュボードを分類・管理できます。

### 2. アクセス制御

IAM ポリシーでタグ条件を指定することで、特定のタグを持つダッシュボードへのアクセスのみを許可するなど、細粒度のアクセス制御が可能です。

### 3. マルチテナント環境

顧客やプロジェクトごとにダッシュボードをタグ分けし、属性ベースのアクセス制御で安全に分離します。

### 4. コスト管理

`CostCenter` や `Owner` タグでコスト配分タグを設定し、チームやプロジェクト単位でのコスト追跡が容易に。

---

## ⚙️ 技術仕様

### タグの制限

- **数**: ダッシュボードあたり最大50個
- **キー長**: 最大128 文字
- **値長**: 最大256 文字
- **共通タグ**: AWS の他のサービスと一貫性のある名前付け規約を推奨

### サポート状況

- **利用可能リージョン**: Amazon CloudWatch が利用可能なすべてのAWSリージョン
- **追加費用**: なし
- **対応 API**: AWS CLI、AWS SDK、CloudWatch コンソール

---

## 📈 期待される効果

### 運用効率化

- タグによるダッシュボード検索で発見時間を短縮
- 大規模ダッシュボード数でも管理が容易
- 新入者のオンボーディング時間を削減

### セキュリティ強化

- 属性ベースのアクセス制御で最小権限の実現
- マルチテナント環境での厳密な分離
- アクセス監査がしやすくなる

### スケーラビリティ

- チーム拡大に対応できる柔軟な組織化
- 新規ダッシュボード追加の管理負担軽減
- Cloud FormationやIaC による自動化が可能

---

## 🚀 開始方法

### AWS Management Console から

1. CloudWatch ダッシュボードを作成または選択
2. ダッシュボード詳細ページでタグセクションを編集
3. タグキーと値を入力して保存

### AWS CLI から

```bash
# 既存ダッシュボードにタグを追加
aws cloudwatch tag-resource \
  --resource-arn arn:aws:cloudwatch:ap-northeast-1:123456789012:dashboard/MyDashboard \
  --tags Key=Environment,Value=Prod Key=Owner,Value=Platform
```

### AWS CloudFormation から

```yaml
Resources:
  MyDashboard:
    Type: AWS::CloudWatch::Dashboard
    Properties:
      DashboardName: my-dashboard
      DashboardBody: {...}
      Tags:
        - Key: Environment
          Value: Prod
        - Key: Owner
          Value: Platform
```

---

## 🔗 参考リソース

- [AWS What's New: Amazon CloudWatch now supports tags on dashboards](https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cloudwatch-tags-on-dashboards/)
- [Tagging your Amazon CloudWatch resources](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Tagging.html)
- [Using metrics explorer to monitor resources by their tags](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metrics-Explorer.html)
- [Using Amazon CloudWatch dashboards](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html)

---

*このドキュメントはAWS What's Newの内容を日本語で要約したものです。最新の情報は公式ドキュメントをご参照ください。*