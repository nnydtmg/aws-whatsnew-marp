---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Lambda が完全な IAM リソースベースのポリシーをサポート

AWS Lambda functions now support full IAM resource-based policies

**発表日: 2026年8月25日**

---

## 概要

### 主な改善点

- **完全なIAMリソースベースのポリシー** に対応
- **単一のポリシードキュメント** で複数のプリンシパルとアクションを定義可能
- **IAM条件キーの全範囲** を活用した柔軟なアクセス制御
- **マルチアカウントアーキテクチャ** の管理効率化
- **すべてのAWSコマーシャルリージョン** で利用可能（追加料金なし）

---

## 前提・背景

### これまでの課題

- プリンシパルごとに個別に権限を追加する必要があった
- ポリシー管理が複雑で非効率
- 大規模な権限管理が困難

### 市場の動向

- マルチクラウド・マルチアカウント環境の拡大
- セキュリティとコンプライアンス要件の厳格化
- リソースベースのアクセス制御の重要性向上

---

## 変更内容・新機能

### 1. 完全なリソースベースのポリシー

- 単一のポリシードキュメント内で複数のプリンシパルを管理
- 複数のアクションに対する権限をまとめて定義
- ポリシー管理の一元化が可能

### 2. IAM条件キーの全範囲対応

- **IPアドレス** に基づいたアクセス制限
- **プリンシパルタグ** に基づいた条件付きアクセス
- より細かいアクセス制御が実現

### 3. 複数サービスの統合管理

- 複数のサービスが関数を呼び出すことを単一ポリシーで許可
- 各サービスごとの個別設定が不要
- 管理オーバーヘッドの削減

---

## ポリシー更新の方法

### 対応するツール・方法

- **JSONエディタ** : AWS マネジメントコンソールでのポリシー編集
- **AWS CLI** : コマンドラインからのポリシー管理
- **AWS SDK** : プログラマティックな操作
- **Infrastructure as Code** :
  - AWS CloudFormation
  - AWS SAM（Serverless Application Model）

---

## 利点・メリット

### プラットフォーム管理者向け

- **大規模な権限管理** を効率化
- **ポリシー管理の複雑性** を軽減
- **監査対応** の容易化

### セキュリティチーム向け

- **柔軟なアクセス制御** が実現
- **条件付きアクセス** による細かい制御
- **コンプライアンス** 要件への対応強化

### マルチアカウント環境

- **マルチアカウントアーキテクチャ** の管理効率化
- **クロスアカウントアクセス** の統一管理
- **組織全体** のセキュリティポスチャ向上

---

## ユースケース

### 1. マルチサービス統合

API Gateway、EventBridge、SNS など複数のサービスが Lambda 関数を呼び出す場合、単一のポリシーですべてのサービスのアクセスを管理

### 2. クロスアカウントアクセス

複数の AWS アカウント間での関数呼び出しを、条件付きアクセスで安全に許可

### 3. 条件付きアクセス制御

特定の IP アドレスからのアクセスや、特定のタグを持つプリンシパルのみにアクセスを限定

---

## まとめ

### このアップデートの意義

- AWS Lambda の **セキュリティ・管理機能** が大幅に向上
- エンタープライズレベルの **権限管理** が実現可能に
- **マルチアカウント・マルチサービス環境** での運用が効率化

### 次のステップ

1. 既存の Lambda 関数のポリシーを確認
2. 新しいリソースベースのポリシー機能の活用検討
3. 組織全体のセキュリティポリシー更新

---

## 参考リソース

### 公式ドキュメント

- [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-full-iam-resource-based-policies/)
- [Lambda リソースベースのポリシー](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html)
- [Lambda のアイデンティティベースのポリシー](https://docs.aws.amazon.com/lambda/latest/dg/access-control-identity-based.html)

### 関連記事

- [Resource-Based Policies vs Identity-Based Policies](https://oneuptime.com/blog/post/2026-02-12-resource-based-policies-vs-identity-based-policies/view)
- [AWS Lambda Permissions: Resource-Based Policies vs. IAM Roles](https://dev.to/aws-builders/aws-lambda-permissions-resource-based-policies-vs-iam-roles-521n)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**