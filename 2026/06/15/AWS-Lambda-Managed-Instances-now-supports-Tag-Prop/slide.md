---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda Managed Instances がタグ伝播をサポート

AWS Lambda Managed Instances now supports Tag Propagation for Managed Resources

**What's New** | 2026-06-15T15:55:00

---

## 概要

- AWS Lambda Managed Instancesのタグ伝播機能により、キャパシティプロバイダー設定で指定したタグが、プロビジョニングされるEC2インスタンス、EBSボリューム、ENIなどの管理対象リソースに自動的に適用されるようになりました。
- この機能は、コスト追跡、ガバナンス、コンプライアンス要件を満たす必要がある組織にとって、手動作業なしに一貫したタグ付けを実現する重要な改善です。

---

## 前提・背景

### これまでの課題

- AWS Lambda Managed Instances（LMI）がタグ伝播機能をサポートするようになりました。
- Amazon EC2インスタンス、Amazon EBSボリューム、Amazon ENIなどの管理対象リソースに自動的にタグを適用できるようになりました。
- コスト配分、サービスコントロールポリシー（SCP）、およびコンプライアンス要件を全リソースに対して強制できるようになりました。
- 従来は、LMIがプロビジョニングした基盤となる管理対象リソースにタグを伝播させる方法がなかったため、コスト追跡やSCP適用、コンプライアンス標準の遵守が困難でした。

---

### 関連する最近の動向

- **Tags for Amazon ECS Managed Instances**: Amazon ECSでも同様のタグ伝播機能が提供されており、AWSコンテナサービス全体でのタグ管理強化が進んでいます
- **AWS Lambda Managed Instances の拡張**: 2025年11月の発表以来、継続的に機能が強化されており、エンタープライズ用途への対応が進んでいます

---

## 変更内容・新機能

### タグ伝播の仕組み

- キャパシティプロバイダー設定でタグを指定すると、LMIが作成するすべての管理対象リソースに自動的にそのタグが適用されます
- Amazon EC2インスタンス、Amazon EBSボリューム、Amazon ENIに対してタグが伝播します

### 設定方法

- CreateCapacityProviderまたはUpdateCapacityProvider APIでPropagateTags設定を構成
- モードを「Explicit」に設定してキーバリューペアとしてタグを指定
- AWS Management Console、AWS CLI、AWS CloudFormation、AWS CDK、AWS SAMを使用して設定可能

### 対応リージョン

- LMIが一般提供されているすべてのAWSコマーシャルリージョンで利用可能

---

## 効果・メリット

### コスト管理の強化

- 手動介入やカスタムオートメーションを必要とせず、EC2インスタンス、EBSボリューム、ENI全体で一貫したタグ付けが実現
- コスト配分タグの自動適用により、正確なコスト追跡が可能に

### ガバナンス・コンプライアンスの向上

- サービスコントロールポリシー（SCP）をすべてのリソースに対して強制可能
- コンプライアンス要件を全リソースに対して一貫して適用
- タグベースのアクセス制御が容易に

### 運用効率の改善

- 設定適用後にプロビジョニングされるすべての新しい管理対象リソースに自動的に適用
- 手動タグ付けの負担が大幅に軽減

---

## まとめ

### 主なポイント

- AWS Lambda Managed Instancesがタグ伝播機能をサポート
- キャパシティプロバイダー設定で指定したタグが自動的に管理対象リソースに適用
- コスト、ガバナンス、コンプライアンスに関する課題を一挙に解決

### 次のステップ

1. キャパシティプロバイダーの設定を確認
2. 必要なタグ戦略を定義
3. PropagateTags設定で対象タグを構成

---

## 参考URL

- [元記事を開く](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-lambda-managed-instances-tag-propagation/)
- [Tag propagation - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-tag-propagation.html)
- [Capacity providers - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/lambda-managed-instances-capacity-providers.html)
- [Tags for Amazon ECS Managed Instances](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/instance-details-tags-managed-instances.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**