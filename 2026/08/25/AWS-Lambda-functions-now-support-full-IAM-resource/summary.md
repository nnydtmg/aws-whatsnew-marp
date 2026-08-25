# AWS Lambda が完全な IAM リソースベースのポリシーをサポート

AWS Lambda functions now support full IAM resource-based policies

**カテゴリ:** What's New
**公開日:** 2026-08-25T02:00:00
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-full-iam-resource-based-policies/)

このページでは、AWS What's Newで発表された「AWS Lambda functions now support full IAM resource-based policies」の内容を日本語で要約し、スライド形式で確認できます。

---

## 要約

AWS Lambda関数が完全なIAMリソースベースのポリシーをサポートするようになり、プラットフォーム管理者とセキュリティチームは単一のポリシードキュメント内で複数のプリンシパルとアクションに対する権限を定義し、IAM条件キーを活用した柔軟なアクセス制御が可能になりました。このアップデートにより、マルチアカウントアーキテクチャの管理が効率化され、すべてのAWSコマーシャルリージョンで追加料金なしで利用できます。

## このアップデートで何が変わったか

- **完全なリソースベースのポリシー対応** : 単一のポリシードキュメント内で複数のプリンシパルとアクションを管理可能
- **IAM条件キーの全範囲対応** : IPアドレスやプリンシパルタグに基づいたアクセス制限が可能
- **複数サービスの統合管理** : 複数のサービスが関数を呼び出す際に単一ポリシーで対応
- **ツール統合の強化** : JSONエディタ、AWS CLI、AWS SDK、CloudFormation、AWS SAMで対応

## 対象ユーザー

- **プラットフォーム管理者** : 大規模な権限管理を効率化したい方
- **セキュリティチーム** : 柔軟なアクセス制御を実現したい方
- **マルチアカウント運用チーム** : クロスアカウント管理を効率化したい方
- **DevOps/SRE** : Infrastructure as Code でセキュアな権限管理を行いたい方

## 活用シーン

1. **マルチサービス統合** : API Gateway、EventBridge、SNS など複数のサービスからの関数呼び出しを統一管理
2. **クロスアカウントアクセス** : 複数の AWS アカウント間での安全なアクセス制御
3. **条件付きアクセス制限** : 特定の IP アドレスやプリンシパルタグに基づいた動的なアクセス制御
4. **組織全体のセキュリティ強化** : マルチアカウント環境全体での統一されたポリシー管理

## 詳細

### 主な変更点

- AWS Lambda関数が完全なIAMリソースベースのポリシーをサポート
- 単一のポリシードキュメント内で複数のプリンシパルとアクションに対する権限を定義可能
- IAM条件キーの全範囲を活用した柔軟なアクセス制御が実現
- 以前は、プリンシパルごとに個別に権限を追加する必要があった（従来との比較）
- IPアドレスやプリンシパルタグに基づいたアクセス制限が新たに可能に
- 複数のサービスが関数を呼び出す場合、単一のポリシーで対応

### サポート範囲

- **対応地域** : すべてのAWSコマーシャルリージョン
- **追加料金** : なし（既存の Lambda 利用料金のみ）
- **管理ツール** :
  - AWS マネジメントコンソール (JSONエディタ)
  - AWS CLI
  - AWS SDK
  - AWS CloudFormation
  - AWS SAM (Serverless Application Model)

### 期待される効果

- **管理効率の向上** : ポリシー管理の複雑性を大幅に軽減
- **セキュリティの強化** : 細かいアクセス制御が可能になり、セキュリティポスチャが向上
- **運用コストの削減** : マルチアカウント環境での管理作業が効率化
- **コンプライアンス対応** : 詳細な監査ログと条件付きアクセスにより対応が容易に

## 参考リンク

- [元記事](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-full-iam-resource-based-policies/)
- [Viewing resource-based IAM policies in Lambda - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html)
- [How to Use Resource-Based Policies vs Identity-Based Policies](https://oneuptime.com/blog/post/2026-02-12-resource-based-policies-vs-identity-based-policies/view)
- [AWS Lambda Permissions: Resource-Based Policies vs. IAM Roles](https://dev.to/aws-builders/aws-lambda-permissions-resource-based-policies-vs-iam-roles-521n)
- [Identity-based IAM policies for Lambda - AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/access-control-identity-based.html)