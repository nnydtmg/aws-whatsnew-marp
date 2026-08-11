# AWS Secrets ManagerがJenkinsとSonarQube向けマネージド外部シークレットをサポート開始

AWS Secrets Manager adds managed external secrets support for Jenkins and SonarQube

**カテゴリ:** What's New  
**公開日:** 2026-08-11  
**元記事:** [AWS What's New](https://aws.amazon.com/about-aws/whats-new/2026/08/secrets-manager-integration-jenkins-sonarqube/)

---

## 要約

AWS Secrets Manager が Jenkins API トークンと SonarQube トークンの自動ローテーション機能をサポートするようになり、カスタムコード不要でこれらのサードパーティ認証情報を安全に管理できるようになりました。このアップデートは、CI/CD パイプラインのセキュリティを強化し、運用負荷を軽減する必要がある組織に特に有用です。

---

## このアップデートで何が変わったか

### AWS Secrets Manager の新機能

- Jenkins API トークンと SonarQube トークンの管理外部シークレット機能をサポート開始
- カスタムローテーションコードを記述することなく、AWS コンソールから直接自動ローテーションが可能に

### Jenkins 統合の詳細

- **新しいトークン生成方式**: 新しいトークンを生成し、置き換えが検証されてアクティブになった後にのみ古いトークンを失効させる
- **CI/CD ジョブの継続性**: トークンの置き換え時に CI/CD ジョブが中断なく移行
- **2 つのローテーション方式**:
  - 自己ローテーション
  - アドミン支援ローテーション

### SonarQube 統合の詳細

- **3 種類のトークンをサポート**:
  - ユーザートークン
  - グローバル分析トークン
  - プロジェクト分析トークン
- **ローテーション方式**:
  - ユーザートークン: 自己ローテーション対応
  - 分析トークン: アドミントークンを使用してローテーション

---

## 既存統合との一貫性

以下の既存統合に加わる:

- BigID
- Confluent Cloud
- Datadog
- GitLab
- MongoDB Atlas
- Okta
- Paddle
- Salesforce
- Snowflake

---

## 利用可能性

- **対応リージョン**: AWS Secrets Manager 管理外部シークレットがサポートされているすべての AWS リージョン
- **対象ユーザー**:
  - DevOps チーム
  - セキュリティチーム
  - CI/CD パイプラインを管理する組織

---

## 主なメリット

1. **セキュリティ強化**
   - 自動ローテーションにより手動管理のミスを排除
   - トークンの有効期間を短縮して安全性を向上

2. **運用効率化**
   - カスタムコード不要で実装
   - AWS コンソール一元管理で手作業を削減

3. **ビジネス継続性**
   - 無停止でのトークン置き換え
   - CI/CD パイプラインの中断なし

4. **スケーラビリティ**
   - 複数の AWS リージョンで利用可能
   - 既存の管理外部シークレット機能と統一された運用

---

## 参考リンク

- **元記事**: https://aws.amazon.com/about-aws/whats-new/2026/08/secrets-manager-integration-jenkins-sonarqube/
- **AWS Secrets Manager ドキュメント**: https://docs.aws.amazon.com/secretsmanager/
- **Jenkins プラグイン**: https://plugins.jenkins.io/aws-secrets-manager-credentials-provider
- **AWS Secrets Manager Secret Source Plugin**: https://github.com/jenkinsci/aws-secrets-manager-secret-source-plugin
