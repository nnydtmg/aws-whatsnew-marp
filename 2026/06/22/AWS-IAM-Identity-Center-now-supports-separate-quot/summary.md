# AWS IAM Identity Center が AWS アカウントとアプリケーション向けの独立したクォータに対応

AWS IAM Identity Center now supports separate quotas for AWS accounts and applications

**カテゴリ:** What's New  
**公開日:** 2026-06-22  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-identity-center-separate-quotas/)

---

## 要約

AWS IAM Identity Center は、AWS アカウントとアプリケーションに対して独立した割り当て制限（デフォルトでそれぞれ 7,000 個）をサポートするようになりました。これにより、大規模な AWS アカウント環境を管理する組織は、アカウント容量を消費することなくアプリケーションをオンボーディングできるようになります。

---

## このアップデートで何が変わったか

### 主な変更点

1. **独立したクォータシステムの実装**
   - AWS アカウント: 最大 7,000 個（デフォルト）
   - アプリケーション: 最大 7,000 個（デフォルト）
   - 相互に影響を与えない独立した制限

2. **クォータの拡張性**
   - AWS Service Quotas コンソールを通じてクォータ増加リクエスト送信が可能
   - 既存の高い制限を持つ顧客には自動的に新制限が付与される

3. **グローバル対応**
   - AWS IAM Identity Center が利用可能なすべてのリージョンでサポート

---

## 詳細情報

### AWS IAM Identity Center の独立クォータ

- AWS IAM Identity Center は、AWS アカウントとアプリケーションの独立した割り当て制限に対応
- IAM Identity Center インスタンスあたり、最大 7,000 個の AWS アカウントと、最大 7,000 個のアプリケーションを個別に管理可能
- 一方のリソースをより多く使用しても、もう一方の容量を消費しない

### クォータ管理

- AWS Service Quotas コンソールを通じて、さらに制限を増やすことが可能
- 既存で高い制限を持つ顧客には、アカウントとアプリケーションの両方に対して同じ制限が自動的に付与される

### 利用可能性

- このアップデートは、AWS IAM Identity Center が利用可能なすべての AWS リージョンで利用可能
- 数千の AWS アカウントを管理している組織は、アカウント割り当て容量を消費することなくアプリケーションをオンボーディング可能に

---

## 活用シーン

### 大規模エンタープライズ

- 複数の事業部が独立して AWS アカウント群を管理している場合
- 統一された IAM Identity Center インスタンス下で、全社的なアプリケーション統合が可能に

### マルチテナント環境

- SaaS プロバイダーが複数顧客に IAM Identity Center サービスを提供する場合
- 顧客ごとのアプリケーション数の増加に柔軟に対応可能

### クラウド移行

- 段階的なアプリケーション移行プロジェクト
- 既存のアカウント構成を維持しながら、新規アプリケーションの統合を加速化可能

---

## メリット

✅ **スケーラビリティ向上** - 大規模環境での柔軟なリソース管理が可能  
✅ **運用効率化** - 独立したクォータで、各リソースを最適に活用  
✅ **段階的拡張対応** - 必要に応じてクォータを増加させることが可能  
✅ **既存環境の保護** - 高いクォータを既に保有する顧客には自動的に対応  

---

## 参考リンク

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/06/aws-identity-center-separate-quotas/
- **AWS IAM Identity Center のクォータと制限**: https://docs.aws.amazon.com/singlesignon/latest/userguide/limits.html
- **AWS IAM Identity Center エンドポイントとクォータ**: https://docs.aws.amazon.com/general/latest/gr/sso.html
- **AWS Service Quotas ドキュメント**: https://docs.aws.amazon.com/servicequotas/
- **AWS IAM Identity Center ユーザーガイド**: https://docs.aws.amazon.com/singlesignon/latest/userguide/

---

*このサマリーはAWS What's Newの公式情報を元に日本語で要約したものです。*