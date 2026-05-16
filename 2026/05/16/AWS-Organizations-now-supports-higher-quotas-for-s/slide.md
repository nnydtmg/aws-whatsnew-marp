---
marp: true
theme: aws-whatsnew
paginate: true
---

# AWS Organizations のサービスコントロールポリシー(SCP)クォータが拡大

AWS Organizations now supports higher quotas for service control policies (SCPs)

**What's New** | 2026-05-15T15:00:00

---

## 概要

- AWS Organizationsのサービスコントロールポリシー(SCP)の上限が拡大され、ノードあたりの最大添付数が5から10に、ポリシーサイズが5,120から10,240文字に増加しました。
- このアップデートは、複雑なセキュリティ要件を持つエンタープライズ組織が、より細粒度のアクセス制御と包括的なセキュリティコントロールを実装する際に特に有用です。

---

## 前提・背景

### AWS Organizations とサービスコントロールポリシー（SCP）

- **AWS Organizations** は複数のAWSアカウントを管理する中央管理サービス
- **SCP** は、ルート、OU、およびアカウントに対して、IAMユーザーとロールが何を実行できるかを制限するポリシー
- エンタープライズ環境では複数のセキュリティ要件に対応する必要がある
- 複数のポリシーを組み合わせることで、多層的なセキュリティを実現

### 従来の課題

- ノードあたりの最大SCP数が5に制限されていた
- ポリシーサイズが5,120文字に制限されていた
- 複雑なセキュリティ要件に対応するために複数のポリシーを組み合わせる必要があった
- 細粒度のアクセス制御が実装しにくかった

---

## 変更内容・新機能

### SCPクォータの拡大

#### 1. 最大SCP数の増加
- **従来:** ノードあたり最大5つのSCPを添付可能
- **新規:** ノードあたり最大10つのSCPを添付可能
- 2倍のポリシーを管理できるように拡張

#### 2. ポリシーサイズの増加
- **従来:** 最大5,120文字
- **新規:** 最大10,240文字
- 2倍のサイズで、より詳細なポリシー記述が可能

#### 3. 実装効果
- より細粒度のアクセス許可と条件を持つSCPを作成可能
- ノードごとにより多くのSCPを添付して、組織全体にわたるより包括的なセキュリティコントロールを構築可能

### 利用可能なリージョン

- すべての商用AWSリージョン
- AWS GovCloud(US)リージョン
- 中国リージョン

### 実装方法

- すべての組織に自動的に利用可能
- 追加のアクション不要
- 既存のSCPに対応

---

## 効果・メリット

### セキュリティ面でのメリット

- **より細粒度の制御**: 複雑なセキュリティ要件に対応可能
- **包括的なポリシー設計**: 多層的なセキュリティを実現
- **ポリシー管理の柔軟性**: 用途別にポリシーを分割可能

### 運用面でのメリット

- **ポリシー統合の効率化**: 複数のポリシーを組み合わせやすくなる
- **保守性の向上**: ポリシーが読みやすくなり、変更が容易
- **スケーラビリティ**: 組織規模の拡大に対応

### ビジネス面でのメリット

- **コンプライアンス対応**: より厳格なセキュリティ要件に対応
- **リスク低減**: より堅固なセキュリティポスチャーを構築
- **組織拡張対応**: 複雑な組織構造にも対応可能

---

## ユースケース

### 1. 複数の規制要件への対応

- 金融機関やヘルスケア業界など、複数の規制要件を満たす必要がある場合
- 各規制要件に対応したポリシーを個別に管理
- 10個のポリシーで、より細粒度の制御が可能

### 2. エンタープライズ組織の統合

- 複数の事業部門を持つ大規模エンタープライズ
- 各事業部門固有のセキュリティ要件に対応
- ポリシーサイズの拡大で、より詳細なルールを定義可能

### 3. 開発環境と本番環境の分離

- 環境別のセキュリティ要件に対応
- 開発環境、ステージング環境、本番環境で異なるポリシーを適用

---

## まとめ

### 主要ポイント

- AWS Organizations のサービスコントロールポリシー(SCP)の上限が拡大
- ノードあたりの最大SCP数が5から10に増加
- ポリシーサイズが5,120文字から10,240文字に拡大
- すべてのリージョンで自動的に利用可能

### 対応すべき組織

- **複雑なセキュリティ要件を持つ組織**
- **複数の規制要件に対応する必要がある組織**
- **エンタープライズ規模の組織**
- **ポリシー数が5に近づいている組織**

### 次のステップ

1. 現在のSCPの使用状況を確認
2. 追加のセキュリティ要件を検討
3. 新しいクォータを活用したポリシーの最適化
4. 既存ポリシーのレビューと改善

---

## 参考リソース

- **元記事:** [AWS What's New - AWS Organizations now supports higher quotas for service control policies (SCPs)](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-organizations-increased-scp-quotas/)

- **関連ドキュメント:**
  - [AWS Organizations: Complete Implementation Guide (2026)](https://towardsthecloud.com/blog/aws-organizations)
  - [How to Use Service Control Policies (SCPs) in AWS Organizations](https://oneuptime.com/blog/post/2026-02-12-use-service-control-policies-scps-in-aws-organizations/view)
  - [AWS Organizations service control policy now supports full IAM language](https://aws.amazon.com/blogs/security/unlock-new-possibilities-aws-organizations-service-control-policy-now-supports-full-iam-language/)
  - [Service control policies (SCPs) - AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html)
  - [Updating organization policies with AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_policies_update.html)

---

**ご質問やご不明な点は、AWS サポートまでお問い合わせください**