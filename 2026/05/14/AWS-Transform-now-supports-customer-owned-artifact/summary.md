# AWS Transform がカスタマー所有のアーティファクトストアに対応

AWS Transform now supports customer-owned artifact stores

**カテゴリ:** What's New
**公開日:** 2026-05-14
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/05/aws-transform-customer-owned-artifact/)

このページでは、AWS What's Newで発表された「AWS Transform now supports customer-owned artifact stores」の内容を日本語で要約しています。

---

## 要約

AWS Transformは、顧客が所有するAmazon S3バケットでのアーティファクトストア機能をサポートするようになりました。これにより、顧客はデータの保存場所とセキュリティ対策を完全にコントロールできるようになります。この更新は、データソブリンティーとコンプライアンス要件を満たす必要がある規制業界の企業に特に有益です。

---

## このアップデートで何が変わったか

### 主要な変更点

1. **カスタマー所有 S3 バケット対応**
   - 顧客が所有するAmazon S3バケットをアーティファクトストアとして指定可能

2. **暗号化とアクセス制御の強化**
   - AWS KMSキーを使用したアーティファクト暗号化
   - AWS アカウント内でのアクセスポリシー管理

3. **マルチアカウント対応**
   - 複数のAWSアカウント全体でアーティファクトストレージを一元化

4. **ファイル管理の効率化**
   - マイグレーション実務者がファイルを直接バケットにアップロード可能
   - トランスフォーメーションエージェントが即座に利用可能

---

## 対象となる組織

- **規制業界に属する企業**
  - 金融機関、医療機関、政府機関など

- **データソブリンティー要件がある組織**
  - データが自社または指定地域に保存される必要がある

- **複数AWSアカウント管理企業**
  - アーティファクト管理を一元化したい大規模組織

- **データ管理にコントロール権が必要な顧客**
  - 自社のデータストレージとセキュリティに対する完全なコントロールが必要

---

## 利用のメリット

### セキュリティと管理
- **完全なデータ管理権**: 保存場所、暗号化キー、アクセスポリシーを自社で管理
- **コンプライアンス対応**: 規制業界の厳しい要件に対応可能
- **強力な暗号化**: AWS KMS による暗号化

### 運用効率
- **マイグレーション効率化**: 大規模なアプリケーション移行を効率的に実行
- **スケーラビリティ**: 複数アカウント間でのアーティファクト共有が可能
- **直感的な管理**: 顧客のAWSアカウント内で操作可能

---

## 提供範囲

- **利用可能地域**: AWS Transform が提供されているすべての AWS リージョン
- **グローバル対応**: 世界中のリージョンで利用可能

---

## 関連する動向

### データソブリンティーの重要性
- AWS EU Sovereign Cloud など、データ主権に関するAWSの取り組みの一環
- コンプライアンスと規制対応の強化

### AWS Transform の進化
- エンタープライズ移行・現代化ツールとしての機能拡充
- アーティファクト管理機能の強化

---

## 参考リソース

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/05/aws-transform-customer-owned-artifact/
- **AWS Transform ドキュメント**: https://docs.aws.amazon.com/transform/
- **AWS Artifact**: https://aws.amazon.com/artifact/
- **AWS Data Protection**: https://docs.aws.amazon.com/transform/latest/userguide/data-protection.html
- **AWS EU Sovereign Cloud**: https://aws.amazon.com/about-aws/whats-new/2026/01/

---

*最終更新: 2026年5月14日*