# AWS Lambda Managed Instances がタグ伝播をサポート

AWS Lambda Managed Instances now supports Tag Propagation for Managed Resources

**カテゴリ:** What's New
**公開日:** 2026-06-15T15:55:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-lambda-managed-instances-tag-propagation/)

---

## 要約

AWS Lambda Managed Instancesのタグ伝播機能により、キャパシティプロバイダー設定で指定したタグが、プロビジョニングされるEC2インスタンス、EBSボリューム、ENIなどの管理対象リソースに自動的に適用されるようになりました。この機能は、コスト追跡、ガバナンス、コンプライアンス要件を満たす必要がある組織にとって、手動作業なしに一貫したタグ付けを実現する重要な改善です。

## このアップデートで何が変わったか

### 新しく追加された機能

1. **タグ伝播の自動化**
   - AWS Lambda Managed Instances（LMI）がタグ伝播機能をサポート
   - キャパシティプロバイダー設定で指定したタグが自動的に適用

2. **対象リソースの拡大**
   - Amazon EC2インスタンス
   - Amazon EBSボリューム
   - Amazon ENI（Elastic Network Interface）

3. **設定の柔軟性**
   - CreateCapacityProvider APIで設定
   - UpdateCapacityProvider APIで更新
   - モード: "Explicit"でキーバリューペア指定

### これまでの課題と解決策

**従来の課題:**
- LMIがプロビジョニングした基盤となる管理対象リソースにタグを伝播させる方法がなかった
- コスト追跡の複雑化
- SCP適用が困難
- コンプライアンス標準の遵守が難しい

**今回の解決策:**
- 自動的に一貫したタグ付けが実現
- 手動介入やカスタムオートメーションが不要
- コスト配分、SCP、コンプライアンス要件が全リソースに統一適用

## 対象ユーザー

- AWS Lambda Managed Instancesを使用している組織
- コスト追跡を厳密に管理する必要があるチーム
- ガバナンスやコンプライアンス要件が厳しい企業
- マルチテナント環境で部門ごとのコスト配分が必要な組織
- インフラストラクチャのタグ付けを自動化したい運用チーム

## 詳細情報

### タグ伝播の設定方法

```
1. キャパシティプロバイダーの設定を確認
2. PropagateTags設定を構成
3. Mode: "Explicit" に設定
4. キーバリューペアとしてタグを指定
5. 設定適用
```

### 利用可能な方法

- AWS Management Console
- AWS CLI
- AWS CloudFormation
- AWS CDK
- AWS SAM（Serverless Application Model）

### 地理的な可用性

- LMIが一般提供されているすべてのAWSコマーシャルリージョンで利用可能

## ユースケース

### 1. コスト配分の自動化
- 部門別、プロジェクト別のコスト追跡
- コスト配分タグの自動適用
- AWS Cost Explorer での正確なコスト分析

### 2. ガバナンス強化
- サービスコントロールポリシー（SCP）の一貫した適用
- タグベースのアクセス制御
- コンプライアンス標準の統一的な遵守

### 3. リソース管理の効率化
- 環境タグの自動適用（本番環境、ステージング環境など）
- プロジェクトタグの一括管理
- 所有者情報の自動付与

### 4. セキュリティポリシーの適用
- セキュリティグループのタグによる分類
- 監査ログのタグ追跡
- コンプライアンス監査の簡素化

## メリット

### 運用効率
- 手動のタグ付けが不要
- 一貫した命名規則の確保
- 新規リソース作成時の自動化

### コスト管理
- 正確なコスト追跡
- 部門別・プロジェクト別のコスト配分
- 無駄なリソースの特定が容易

### コンプライアンス
- 要件を自動的に全リソースに適用
- 監査対応の簡素化
- ポリシー違反の防止

### セキュリティ
- タグベースのアクセス制御
- リソースの分類と管理が明確
- セキュリティポリシーの統一的な適用

## 注意事項

- タグ伝播は設定適用後の新規リソースに適用されます
- 既存リソースには遡って適用されません
- タグは手動でも追加・削除が可能です

## 関連リンク

- [AWS Lambda Managed Instances 公開ドキュメント](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances.html)
- [Tag propagation - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-tag-propagation.html)
- [Capacity providers - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-capacity-providers.html)
- [AWS Tagging Strategy](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html)

---

**最終更新:** 2026-06-15